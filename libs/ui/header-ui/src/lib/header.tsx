import { Swords } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="py-6">
      <Link href="/" className="flex items-center justify-center gap-2 mb-6">
        <Swords className="h-12 w-12 text-purple-500" />
        <span className="text-3xl font-bold">ASTON</span>
      </Link>
    </header>
  );
}

export default Header;
