exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: false, configured: false, error: "Telegram is not configured" })
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Invalid JSON" }) };
  }

  const wrong = (payload.details || [])
    .filter((item) => !item.correct)
    .map((item) => `${item.id}: chọn "${item.given || "(trống)"}", đúng "${item.answer}"`)
    .slice(0, 20)
    .join("\n");

  const text = [
    `HSK2 - ${payload.lesson || ""}`,
    `Học viên: ${payload.studentName || "(không tên)"}`,
    `Bài: ${payload.title || ""}`,
    `Điểm: ${payload.score}/100`,
    `Đúng: ${payload.correct}/${payload.total}`,
    `Sai: ${payload.wrong ?? Math.max(0, (payload.total || 0) - (payload.correct || 0))}`,
    payload.reviewVocab?.length ? `Từ cần ôn: ${payload.reviewVocab.join(", ")}` : "",
    payload.reviewGrammar?.length ? `Ngữ pháp cần ôn: ${payload.reviewGrammar.join(", ")}` : "",
    wrong ? `Câu sai:\n${wrong}` : "Không có câu sai.",
    `Thời gian: ${payload.submittedAt || new Date().toISOString()}`
  ].join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text })
  });

  const body = await telegramResponse.text();
  return {
    statusCode: telegramResponse.ok ? 200 : 502,
    body
  };
};
