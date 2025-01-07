export default function HowToPlay() {
  return (
    <section id="how-to-play" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">How to Play</h2>
        <ol className="grid md:grid-cols-2 gap-8 list-decimal list-inside">
          <li className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 inline-block ml-2">Click the Button</h3>
            <p className="text-lg ml-6">Players start with a single button labeled &quot;Click Me&quot;. Each click earns you stimulation points.</p>
          </li>
          <li className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 inline-block ml-2">Unlock Upgrades</h3>
            <p className="text-lg ml-6">Accumulated points can be spent on upgrades to automate stimulation generation, increase the speed of point collection, and unlock new features.</p>
          </li>
          <li className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 inline-block ml-2">Experience Overload</h3>
            <p className="text-lg ml-6">As you progress, the game introduces increasingly chaotic visual and audio elements, simulating the overstimulation of modern online life.</p>
          </li>
          <li className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 inline-block ml-2">Reach the Calm</h3>
            <p className="text-lg ml-6">After navigating through the chaos, unlock the final upgrade &quot;Go to the Ocean&quot; for a moment of tranquility.</p>
          </li>
        </ol>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Watch Gameplay</h3>
          <div className="max-w-4xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/CTIxBBKNz8g"
              title="Stimulation Clicker Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

