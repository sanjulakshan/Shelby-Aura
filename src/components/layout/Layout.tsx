import Navbar from './Navbar';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '../../data/content';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <a
        href={`https://wa.me/${BRAND.phoneRaw}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-lg transition hover:scale-110 hover:bg-champagne"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
