import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-6">
      <Link href="/" className="flex items-center justify-center gap-2 mb-6">
        <Image src="/images/argon.png" alt="Argon" width="500" height="300" />
      </Link>
    </header>
  );
}

export default Header;
