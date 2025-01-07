import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
              Stimulation Clicker
            </Link>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li><Link href="#about" className="hover:text-purple-300 transition-colors">About</Link></li>
              <li><Link href="#how-to-play" className="hover:text-purple-300 transition-colors">How to Play</Link></li>
              <li><Link href="#features" className="hover:text-purple-300 transition-colors">Features</Link></li>
              <li><Link href="#overstimulation-elements" className="hover:text-purple-300 transition-colors">Overstimulation</Link></li>
              <li><Link href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</Link></li>
              <li><Link href="#faq" className="hover:text-purple-300 transition-colors">FAQ</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stimulation Clicker. All rights reserved.</p>
          <p>Created by Neal Agarwal. This website is a fan-made tribute.</p>
        </div>
      </div>
    </footer>
  )
}

