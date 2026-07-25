import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Chess Learning Platform",
    description: "Chess blog and coaching platform by Nemanja Martic",
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout({
    children,
}: RootLayoutProps) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-slate-50 text-slate-900">
                <div className="flex min-h-screen flex-col">
                    <Navbar />

                    <main className="flex-1">
                        {children}
                    </main>

                    <Footer />
                </div>
            </body>
        </html>
    );
}