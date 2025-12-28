# 🚀 My Portfolio Website

Welcome to the repository for my personal portfolio website! This is where I showcase my skills, projects, and a bit of my personality through jaw-dropping 3D animations, slick interactions, and fluid motion. If you're into creative web design, you're in the right place.

![Portfolio Preview](https://github.com/Naresh-Khatri/Portfolio/blob/main/public/assets/projects-screenshots/portfolio/landing.png?raw=true)

## 🔥 Features

- **3D Animations**: Custom-made interactive keyboard using Spline with skills as keycaps that reveal titles and descriptions on hover.
- **Slick Interactions**: Powered by GSAP and Framer Motion for smooth animations on scroll, hover, and element reveal.
- **Space Theme**: Particles on a dark background to simulate a cosmic environment, making the experience out of this world.
- **Responsive Design**: Fully responsive across all devices to ensure the best user experience.
- **Innovative Web Design**: Combining creativity with functionality to push the boundaries of modern web design.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn, Aceternity UI
- **Animations**: GSAP, Framer Motion, Spline Runtime
- **Misc**: Resend, Socketio, Zod

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Naresh-Khatri/Portfolio.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Portfolio
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the magic!

## 🚀 Deployment

This site is deployed on Vercel. For your own deployment, follow these steps:

### Deploy lên Vercel

#### Cách 1: Deploy qua Vercel Dashboard (Khuyến nghị)

1. **Chuẩn bị code:**
   - Đảm bảo code đã được push lên GitHub, GitLab, hoặc Bitbucket
   - Kiểm tra rằng dự án build thành công: `npm run build`

2. **Tạo tài khoản Vercel:**
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập bằng GitHub/GitLab/Bitbucket

3. **Import project:**
   - Click "Add New..." → "Project"
   - Chọn repository của bạn
   - Vercel sẽ tự động phát hiện Next.js

4. **Cấu hình Environment Variables:**
   - Trong phần "Environment Variables", thêm:
     - `RESEND_API_KEY`: API key từ [Resend](https://resend.com/api-keys)
     - (Nếu có các biến khác, thêm vào đây)

5. **Deploy:**
   - Click "Deploy"
   - Vercel sẽ tự động build và deploy
   - Sau khi hoàn thành, bạn sẽ nhận được URL (ví dụ: `your-project.vercel.app`)

#### Cách 2: Deploy qua Vercel CLI

1. **Cài đặt Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Đăng nhập:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Lần đầu sẽ hỏi một số câu hỏi, trả lời theo hướng dẫn
   - Để deploy production: `vercel --prod`

4. **Thiết lập Environment Variables:**
   ```bash
   vercel env add RESEND_API_KEY
   ```
   - Nhập giá trị API key khi được hỏi
   - Chọn môi trường (Production, Preview, Development)

### Lưu ý quan trọng:

- **Resend API Key**: Cần có để form contact hoạt động. Lấy tại [resend.com](https://resend.com)
- **Custom Domain**: Có thể thêm domain tùy chỉnh trong Vercel Dashboard → Settings → Domains
- **Automatic Deployments**: Mỗi khi push code lên main branch, Vercel sẽ tự động deploy
- **Preview Deployments**: Mỗi pull request sẽ có một preview URL riêng

## 🤝 Contributing

If you'd like to contribute or suggest improvements, feel free to open an issue or submit a pull request. All contributions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
