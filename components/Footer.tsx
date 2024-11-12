// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Brief Info */}
        <div className="flex flex-col items-start mr-8">
          <h3 className="text-2xl font-semibold mb-4">TZSOLUTIONS</h3>
          <p className="text-gray-400">Building solutions for the modern web, with a focus on quality and performance.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <Link href="#templates"><div className="text-gray-400 hover:text-white">Templates</div></Link>
          <Link href="#design-intelligence"><div className="text-gray-400 hover:text-white">Design Intelligence</div></Link>
          <Link href="#creative-tools"><div className="text-gray-400 hover:text-white">Creative Tools</div></Link>
          <Link href="#seo-analytics"><div className="text-gray-400 hover:text-white">SEO & Analytics</div></Link>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TZSOLUTIONS. All rights reserved.
      </div>
    </footer>
  );
}
