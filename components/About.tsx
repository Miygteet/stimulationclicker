import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">What is Stimulation Clicker?</h2>
        
        <p className="text-lg mb-6">
          Stimulation Clicker is an innovative online clicker game created by the talented developer Neal Agarwal. Known for its chaotic gameplay and satirical undertones, Stimulation Clicker offers players a unique experience that mirrors the overstimulation of the modern internet.
        </p>
        <p className="text-lg mb-6">
          The game starts with a simple premise: click a button labeled &quot;Click Me&quot; to accumulate stimulation points. As players progress, they unlock upgrades, automate point generation, and dive deeper into a fast-paced, visually overwhelming gameplay experience.
        </p>
        <p className="text-lg">
          Whether you&apos;re looking for a fun distraction or a thought-provoking critique of the digital age, Stimulation Clicker delivers a one-of-a-kind journey that keeps players entertained while poking fun at the addictive nature of online games.
        </p>

        <div className="max-w-5xl mx-auto mb-10 mt-12 relative aspect-[16/9]">
          <Image 
            src="/images/stimulationclicker.jpg" 
            alt="Stimulation Clicker Game Preview" 
            fill
            className="rounded-lg shadow-xl border-2 border-purple-400 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

