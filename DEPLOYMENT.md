# 🚀 Hướng dẫn Deploy lên Vercel

## Vấn đề 404 đã được sửa

Đã sửa các vấn đề sau:
- ✅ Script Umami chỉ load khi có biến môi trường (tránh lỗi build)
- ✅ Xóa file `vercel.json` không cần thiết (Vercel tự động phát hiện Next.js)

## Các bước deploy

### 1. Đảm bảo code đã được commit và push lên GitHub

```bash
git add .
git commit -m "Fix Vercel deployment issues"
git push origin main
```

### 2. Deploy trên Vercel Dashboard

1. **Truy cập [vercel.com](https://vercel.com)** và đăng nhập
2. **Click "Add New..." → "Project"**
3. **Import repository** từ GitHub/GitLab/Bitbucket
4. **Vercel sẽ tự động phát hiện Next.js** - không cần thay đổi gì

### 3. Cấu hình Environment Variables (QUAN TRỌNG)

Trong phần **"Environment Variables"**, thêm các biến sau:

#### Bắt buộc:
- `RESEND_API_KEY`: API key từ [Resend](https://resend.com/api-keys)
  - Cần để form contact hoạt động
  - Lấy tại: https://resend.com/api-keys

#### Tùy chọn (nếu bạn sử dụng):
- `UMAMI_DOMAIN`: URL của Umami analytics script
- `UMAMI_SITE_ID`: Website ID của Umami
- `NEXT_PUBLIC_WS_URL`: WebSocket URL cho realtime features (nếu có)

**Lưu ý:** 
- Chọn môi trường: **Production**, **Preview**, và **Development**
- Sau khi thêm biến môi trường, cần **redeploy** để áp dụng

### 4. Deploy

1. Click **"Deploy"**
2. Chờ build hoàn thành (thường mất 2-5 phút)
3. Sau khi deploy xong, bạn sẽ nhận được URL: `your-project.vercel.app`

### 5. Kiểm tra

- ✅ Truy cập URL được cung cấp
- ✅ Kiểm tra console để đảm bảo không có lỗi
- ✅ Test form contact (nếu đã thêm RESEND_API_KEY)

## Troubleshooting

### Nếu vẫn bị 404:

1. **Kiểm tra Build Logs:**
   - Vào Vercel Dashboard → Project → Deployments
   - Click vào deployment mới nhất
   - Xem "Build Logs" để tìm lỗi

2. **Kiểm tra Environment Variables:**
   - Đảm bảo đã thêm `RESEND_API_KEY`
   - Kiểm tra không có typo trong tên biến

3. **Redeploy:**
   - Sau khi sửa environment variables, cần redeploy
   - Vào Settings → Environment Variables → Redeploy

4. **Kiểm tra Domain:**
   - Nếu dùng custom domain, đảm bảo DNS đã được cấu hình đúng
   - Vào Settings → Domains để kiểm tra

### Lỗi thường gặp:

- **Build failed**: Kiểm tra build logs, thường do thiếu dependencies hoặc lỗi TypeScript
- **404 on all routes**: Vercel tự động phát hiện Next.js, không cần `vercel.json` (nếu có file này với build commands, hãy xóa nó)
- **API routes không hoạt động**: Kiểm tra environment variables

## Deploy qua CLI (Tùy chọn)

Nếu muốn deploy qua command line:

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Đăng nhập
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

## Tự động deploy

- Mỗi khi push code lên `main` branch, Vercel sẽ tự động deploy
- Mỗi pull request sẽ có một preview URL riêng

## Liên hệ

Nếu vẫn gặp vấn đề, kiểm tra:
- Build logs trên Vercel Dashboard
- Console của trình duyệt
- Network tab để xem requests nào bị lỗi

