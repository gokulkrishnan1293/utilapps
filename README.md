# Gokul's Apps

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ed)

**Privacy-first developer utilities. All client-side, all secure.**

## About

**Gokul's Apps** is a collection of high-quality, developer-focused utilities designed with privacy and aesthetics in mind. Unlike many online tools that upload your data to a server, everything here runs **100% in your browser**.

The suite is built on a modern stack including **Next.js 16**, **React 19**, and **Tailwind CSS 4**, featuring smooth animations with **Framer Motion** and a polished, responsive UI.

## Features

### 🖼️ Image to PDF
Convert your images into a single, high-quality PDF document instantly.

- **100% Client-Side**: Your images never leave your device. Processing happens locally in your browser.
- **Drag & Drop**: Intuitive interface to easily upload multiple files.
- **Smart Reordering**: Use the interactive grid to drag and arrange your images in the exact order you want.
- **Customizable**:
  - **Fit-to-Page**: Automatically scales images to fit the page.
  - **Margins**: Toggle standard margins or go full-bleed.
  - **Orientation**: Choose between Portrait and Landscape modes.
  - **Paper Size**: Support for A4 and Letter sizes.
- **Fast Generation**: Powered by `pdf-lib` for lightning-fast PDF creation.

## Tech Stack

This project showcases the bleeding edge of modern web development:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Drag & Drop**: [dnd-kit](https://dndkit.com/)
- **PDF Generation**: [pdf-lib](https://pdf-lib.js.org/)

## Getting Started

### Prerequisites
- Node.js 20+
- npm, pnpm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gokulkrishnan1293/imagetopdf.git
   cd imagetopdf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Support

Run the application in a container without installing Node.js locally.

```bash
docker compose up --build
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` - Main Next.js application routes and layouts.
- `app/components/` - Reusable UI components (DropZone, SortableImageGrid, PDFOptions, etc.).
- `utils/` - Utility functions, including the core `pdfGenerator.ts`.
- `public/` - Static assets and images.

## Contributing

Contributions are welcome! Whether it's a new feature, a bug fix, or a UI polisher:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

## License

MIT © Gokul
