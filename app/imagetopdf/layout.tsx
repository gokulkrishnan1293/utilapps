import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Image to PDF Converter | Free Online Tool",
    description: "Convert your images to PDF instantly. Drag & drop, reorder, and download. 100% client-side processing for maximum privacy. Supports JPG, PNG, and WebP.",
    keywords: ["image to pdf", "convert images", "pdf converter", "free pdf tool", "online converter"],
    icons: {
        icon: "/logo-pdf.png",
    },
};

export default function ImageToPdfLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
