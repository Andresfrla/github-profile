import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["100","200","300","400","500", "600","700"] });

export const metadata = {
  title: "Github profile",
  description: "Take a look at Github profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}
