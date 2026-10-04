import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Aavin Dharmapuri",
  description: "Official website of Aavin Dharmapuri",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
