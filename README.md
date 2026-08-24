# HSK2 NABI Web App

Static web app học HSK2 bằng HTML, CSS, Vanilla JavaScript và Netlify Functions.

## Tính năng chính

- Bài 1-15 theo kiến trúc UI mới.
- Từ mới, flashcard, ngữ pháp, luyện tập và bài tập workbook.
- Audio workbook, ảnh workbook, chấm điểm và lưu tiến độ bằng `localStorage`.
- Ôn tập sau mỗi 5 bài:
  - Ôn tập 1: Bài 1-5
  - Ôn tập 2: Bài 6-10
  - Ôn tập 3: Bài 11-15
- Gửi kết quả Workbook và Review về Telegram qua Netlify Function.

## Cấu trúc

```text
index.html                 Trang chủ
lesson.html                Trang bài học
review.html                Trang ôn tập
data/                      Dữ liệu bài học và manifest
js/                        Logic frontend
styles/main.css            CSS chính
audio/                     Audio bài học/workbook (Git LFS)
images/                    Ảnh workbook
netlify/functions/         Netlify Functions
```

## Chạy local

Trong thư mục project:

```bash
python -m http.server 8000 --bind 0.0.0.0
```

Mở trên máy tính:

```text
http://127.0.0.1:8000/
```

Mở trên điện thoại cùng Wi-Fi:

```text
http://<IP-LAN-cua-may-tinh>:8000/
```

## Telegram trên Netlify

Không hard-code token trong frontend.

Cấu hình hai biến môi trường trong Netlify:

```text
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

Frontend gọi:

```text
/.netlify/functions/sendTelegram
```

Khi chạy local bằng static server, kết quả vẫn lưu localStorage và Telegram không được gọi.

## GitHub / Git LFS

Repo dùng Git LFS cho file MP3:

```bash
git lfs install
git lfs pull
```

Các file nguồn lớn như PDF, ZIP và thư mục `scratch/` không được đưa vào repo.

## Deploy Netlify

`netlify.toml` đã cấu hình:

```toml
[build]
  publish = "."
  functions = "netlify/functions"
```

Chỉ cần kết nối repo GitHub với Netlify và cấu hình biến môi trường Telegram.
