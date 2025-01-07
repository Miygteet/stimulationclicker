import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
          Stimulation Clicker
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-purple-300 transition-colors">About</Link></li>
          <li><Link href="#how-to-play" className="hover:text-purple-300 transition-colors">How to Play</Link></li>
          <li><Link href="#features" className="hover:text-purple-300 transition-colors">Features</Link></li>
          <li><Link href="#overstimulation-elements" className="hover:text-purple-300 transition-colors">Overstimulation</Link></li>
          <li><Link href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</Link></li>
          <li><Link href="#faq" className="hover:text-purple-300 transition-colors">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  )
}

