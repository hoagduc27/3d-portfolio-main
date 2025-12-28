# 📁 Cấu trúc dự án Portfolio

## Cấu trúc thư mục chính:

```
3d-portfolio-main/
│
├── 📄 package.json          # Cấu hình dependencies
├── 📄 next.config.mjs       # Cấu hình Next.js
├── 📄 tsconfig.json         # Cấu hình TypeScript
├── 📄 tailwind.config.ts    # Cấu hình Tailwind CSS
├── 📄 README.md             # Hướng dẫn dự án
├── 📄 DEPLOYMENT.md         # Hướng dẫn deploy
├── 📄 DEPLOYMENT_CHECKLIST.md # Checklist deploy
│
├── 📁 public/               # File tĩnh (images, assets)
│   ├── assets/
│   │   ├── logo-dark.svg
│   │   ├── me.jpg
│   │   ├── skills-keyboard.spline
│   │   ├── 404.spline
│   │   ├── nav-link-previews/
│   │   ├── projects-screenshots/
│   │   └── seo/
│   └── ...
│
└── 📁 src/                  # Source code chính
    │
    ├── 📁 app/              # Next.js App Router
    │   ├── page.tsx         # Trang chủ (/)
    │   ├── layout.tsx       # Layout chính
    │   ├── globals.css      # CSS toàn cục
    │   ├── not-found.tsx    # Trang 404
    │   ├── about/           # Trang About (/about)
    │   ├── contact/         # Trang Contact (/contact)
    │   ├── projects/        # Trang Projects (/projects)
    │   ├── blogs/           # Trang Blog (/blogs)
    │   │   └── [slug]/      # Dynamic blog posts
    │   └── api/             # API Routes
    │       └── send/        # API gửi email (/api/send)
    │
    ├── 📁 components/       # React Components
    │   ├── header/          # Header/Navigation
    │   ├── footer/          # Footer
    │   ├── sections/        # Các section chính
    │   │   ├── hero.tsx
    │   │   ├── skills.tsx
    │   │   ├── projects.tsx
    │   │   └── contact.tsx
    │   ├── ui/              # UI components (shadcn)
    │   ├── theme/           # Theme components
    │   ├── preloader/       # Loading screen
    │   ├── Particles.tsx    # Particle effects
    │   ├── ContactForm.tsx  # Form liên hệ
    │   └── ...
    │
    ├── 📁 data/             # Dữ liệu cấu hình
    │   ├── config.ts        # Cấu hình chính
    │   ├── constants.ts     # Constants
    │   └── projects.tsx     # Dữ liệu projects
    │
    ├── 📁 contexts/         # React Contexts
    │   └── socketio.tsx     # Socket.IO context
    │
    ├── 📁 hooks/            # Custom React Hooks
    ├── 📁 lib/              # Utilities & Libraries
    ├── 📁 types/            # TypeScript types
    ├── 📁 utils/            # Helper functions
    └── 📁 content/          # MDX content
        └── blogs/           # Blog posts (MDX)

```

## Cách xem files trong VS Code:

### 1. Mở File Explorer:
- **Phím tắt**: `Ctrl + Shift + E`
- Hoặc click vào icon **Explorer** (📁) ở thanh bên trái

### 2. Nếu không thấy sidebar:
- **Phím tắt**: `Ctrl + B` để ẩn/hiện sidebar
- Hoặc: View → Appearance → Primary Side Bar

### 3. Mở thư mục dự án:
- File → Open Folder
- Chọn thư mục: `C:\Users\DELL_VOSTRO3400\Downloads\3d-portfolio-main\3d-portfolio-main`

## Các file quan trọng:

### Để deploy:
- ✅ `package.json` - Dependencies
- ✅ `next.config.mjs` - Cấu hình Next.js
- ✅ `DEPLOYMENT_CHECKLIST.md` - Hướng dẫn deploy

### Code chính:
- `src/app/page.tsx` - Trang chủ
- `src/app/layout.tsx` - Layout chính
- `src/components/` - Tất cả components
- `src/data/config.ts` - Cấu hình site

### Assets:
- `public/assets/` - Images, Spline files, etc.

## Lưu ý:
- File `vercel.json` đã được xóa (không cần thiết)
- Tất cả files vẫn còn nguyên vẹn
- Dự án đã sẵn sàng để deploy


