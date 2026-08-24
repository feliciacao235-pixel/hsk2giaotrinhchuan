const TELEGRAM_TIMEOUT_MS = 10000;

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  };

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { ok: false, error: "Method not allowed" }, headers);
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return jsonResponse(200, { ok: false, configured: false, error: "Telegram is not configured" }, headers);
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { ok: false, error: "Invalid JSON" }, headers);
  }

  const validation = validatePayload(payload);
  if (!validation.ok) {
    return jsonResponse(400, { ok: false, error: validation.error }, headers);
  }

  const text = payload.type === "review" ? formatReviewMessage(payload) : formatWorkbookMessage(payload);

  try {
    const telegramResult = await sendTelegramMessage(token, chatId, text);
    if (!telegramResult.ok) {
      return jsonResponse(502, { ok: false, error: telegramResult.error || "Telegram API error" }, headers);
    }
    return jsonResponse(200, { ok: true }, headers);
  } catch (err) {
    return jsonResponse(500, { ok: false, error: err.message || "Telegram dispatch failed" }, headers);
  }
};

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") return { ok: false, error: "Payload is required" };
  if (!["workbook", "review"].includes(payload.type)) return { ok: false, error: "Invalid result type" };
  if (!clean(payload.studentName)) return { ok: false, error: "Student name is required" };
  if (!Number.isFinite(Number(payload.total)) || Number(payload.total) <= 0) return { ok: false, error: "Total is invalid" };
  if (!Number.isFinite(Number(payload.score))) return { ok: false, error: "Score is invalid" };
  if (payload.type === "workbook" && !payload.lessonId) return { ok: false, error: "Lesson ID is required" };
  if (payload.type === "review" && !payload.reviewId) return { ok: false, error: "Review ID is required" };
  return { ok: true };
}

function formatWorkbookMessage(payload) {
  const wrongQuestions = asArray(payload.wrongQuestions).slice(0, 35);
  const wrongDetails = asArray(payload.wrongDetails).slice(0, 12);
  const reviewItems = [...asArray(payload.wrongVocabulary), ...asArray(payload.wrongGrammar)].slice(0, 20);

  const lines = [
    `📚 HSK2 – BÀI ${payload.lessonId}`,
    clean(payload.lessonTitle) ? clean(payload.lessonTitle) : "",
    "",
    `👤 Học viên: ${clean(payload.studentName)}`,
    `🕐 Thời gian: ${formatTime(payload.submittedAt)}`,
    `🔁 Lần làm: ${payload.attemptNumber || 1}`,
    "",
    `🎯 Điểm: ${Number(payload.score)}/${Number(payload.total)}`,
    `📊 Tỷ lệ: ${payload.percent ?? payload.percentage ?? 0}%`,
    "",
    `✅ Đúng: ${payload.correctCount ?? payload.score}`,
    `❌ Sai: ${payload.wrongCount ?? Math.max(0, Number(payload.total) - Number(payload.score))}`,
    "",
    wrongQuestions.length ? `📌 Câu sai:\n${wrongQuestions.join(", ")}` : "📌 Câu sai: Không có",
    "",
    reviewItems.length ? `📝 Nội dung cần ôn:\n${reviewItems.map((item) => `• ${clean(item)}`).join("\n")}` : "📝 Nội dung cần ôn: Không có",
    ""
  ].filter((line) => line !== "");

  if (wrongDetails.length) {
    lines.push("❌ Chi tiết câu sai:");
    wrongDetails.forEach((item) => {
      lines.push(`• ${clean(item.id)} ${clean(item.section)}`);
      lines.push(`  Chọn: ${clean(item.given || "(trống)")}`);
      lines.push(`  Đúng: ${clean(item.answer)}`);
    });
  } else {
    lines.push("🎉 Học viên làm đúng toàn bộ bài.");
  }

  return truncateTelegram(lines.join("\n"));
}

function formatReviewMessage(payload) {
  const wrongVocab = asArray(payload.wrongVocabulary).slice(0, 20);
  const wrongGrammar = asArray(payload.wrongGrammar).slice(0, 20);
  const title = clean(payload.reviewTitle) || `ÔN TẬP ${payload.reviewId}`;

  const lines = [
    `⭐ ${title.toUpperCase()}`,
    "",
    `👤 Học viên: ${clean(payload.studentName)}`,
    `🕐 Thời gian: ${formatTime(payload.submittedAt)}`,
    `🔁 Lần làm: ${payload.attemptNumber || 1}`,
    "",
    `📚 Từ vựng: ${payload.vocabPercentage ?? 0}%`,
    `📐 Ngữ pháp: ${payload.grammarPercentage ?? 0}%`,
    `🎯 Tổng: ${payload.percent ?? payload.percentage ?? 0}%`,
    "",
    `Bài yếu nhất: ${clean(payload.weakLesson || "Chưa xác định")}`,
    "",
    wrongVocab.length ? `Từ cần ôn:\n${wrongVocab.map((item) => `• ${clean(item)}`).join("\n")}` : "Từ cần ôn: Không có",
    "",
    wrongGrammar.length ? `Ngữ pháp cần ôn:\n${wrongGrammar.map((item) => `• ${clean(item)}`).join("\n")}` : "Ngữ pháp cần ôn: Không có"
  ];

  return truncateTelegram(lines.join("\n"));
}

async function sendTelegramMessage(token, chatId, text) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true
      }),
      signal: controller.signal
    });
    const body = await response.json().catch(() => ({}));
    return response.ok && body.ok
      ? { ok: true }
      : { ok: false, error: body.description || `Telegram HTTP ${response.status}` };
  } finally {
    clearTimeout(timeout);
  }
}

function jsonResponse(statusCode, body, headers) {
  return { statusCode, headers, body: JSON.stringify(body) };
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function clean(value) {
  return String(value ?? "")
    .replace(/[<>&]/g, (char) => ({ "<": "‹", ">": "›", "&": "＆" }[char]))
    .replace(/\s+/g, " ")
    .trim();
}

function formatTime(value) {
  if (!value) return new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
  return clean(value);
}

function truncateTelegram(text) {
  return text.length > 3900 ? `${text.slice(0, 3890)}\n...` : text;
}
