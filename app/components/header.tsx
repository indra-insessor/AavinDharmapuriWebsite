import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <Image
            src="/aavin-Dharmapuri-logo.png"
            alt="Aavin Dharmapuri"
            width={180}
            height={70}
            priority
          />
        </div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
        </nav>
      </div>
    </header>
  );
}
