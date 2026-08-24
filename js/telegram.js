/**
 * Telegram Notification Module
 * Sends test results to Telegram via Netlify Serverless Function without exposing bot tokens.
 */

window.TelegramService = {
  isLocalStaticPreview() {
    const host = window.location.hostname;
    const isPrivateLanHost =
      /^192\.168\./.test(host) ||
      /^10\./.test(host) ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(host);
    return (
      ["localhost", "127.0.0.1", "0.0.0.0", ""].includes(host) ||
      isPrivateLanHost ||
      window.location.protocol === "file:" ||
      window.location.port === "8000"
    );
  },

  async sendResult(payload) {
    if (this.isLocalStaticPreview()) {
      return {
        success: false,
        localOnly: true,
        message: "Đã lưu kết quả trên máy. Telegram sẽ gửi khi chạy trên Netlify."
      };
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const response = await fetch("/.netlify/functions/sendTelegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      clearTimeout(timeout);

      const data = await response.json().catch(() => ({}));
      if (response.ok && data.ok) {
        return { success: true, data };
      }
      return {
        success: false,
        data,
        message: data.error || "Không gửi được Telegram, nhưng kết quả đã được lưu."
      };
    } catch (err) {
      return {
        success: false,
        error: err,
        message: "Không gửi được Telegram, nhưng kết quả đã được lưu."
      };
    }
  }
};
