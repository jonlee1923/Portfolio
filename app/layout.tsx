import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar  from "@/components/Navbar";
import "./globals.css";
    import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jon Lee Portfolio",
    description: "Jon lees portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer/>
            </body>
        </html>
    );
}
