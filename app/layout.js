import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "About me | Dominik Meister",
  description: "Portfolio of Dominik Meister",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/documents">Documents</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
