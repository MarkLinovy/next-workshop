import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Workshop Demo",
  description: "Next.js Workshop Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="app-container">
          <aside className="sidebar">
            <h2 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Workshop App</h2>
            <nav className="sidebar-nav">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/settings" className="nav-link">Settings</Link>
              <Link href="/chats" className="nav-link">Chat</Link>
              <Link href="/env-demo" className="nav-link">Env Demo</Link>
              <Link href="/exercises/debug" className="nav-link">Debug Exercise</Link>
              <Link href="/exercises/fetching" className="nav-link">Fetching Exercise</Link>
              <Link href="/exercises/errorroute" className="nav-link">Not Found Demo</Link>
              <Link href="/login" className="nav-link">Login</Link>
            </nav>
          </aside>
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
