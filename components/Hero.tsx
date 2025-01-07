'use client'

import { useState, useEffect } from 'react'
import { Maximize2 } from 'lucide-react'

export default function Hero() {
  const [, setIsFullscreen] = useState(false)

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe')
    if (!iframe) return

    if (!document.fullscreenElement) {
      iframe.requestFullscreen?.()
        .catch(err => {
          console.error('Error attempting to enable fullscreen:', err)
        })
    } else {
      document.exitFullscreen?.()
        .catch(err => {
          console.error('Error attempting to exit fullscreen:', err)
        })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Stimulation Clicker</h1>
        <p className="text-xl mb-8">Experience the ultimate clicker game that mirrors the chaos of the internet!</p>
        <div className="w-full max-w-5xl mx-auto aspect-video relative">
          <iframe 
            src="https://neal.fun/stimulation-clicker/" 
            className="w-full h-full border-4 border-purple-400 rounded-lg shadow-lg"
            title="Stimulation Clicker Game"
            allowFullScreen
          ></iframe>
          <button 
            onClick={toggleFullscreen}
            className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-200 ease-in-out"
            aria-label="Toggle fullscreen"
          >
            <Maximize2 size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

