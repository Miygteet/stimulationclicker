export default function OverstimulationElements() {
  const elements = [
    "Bouncing DVD logos",
    "Hydraulic press simulations",
    "Endless Subway Surfer gameplay loops",
    "Mukbang videos",
    "Slime ASMR",
    "Lofi beats",
    "True crime podcast parodies",
    "Duolingo-style notifications",
    "Red notification bubbles",
    "Cryptocurrency and stock market trading interfaces"
  ];

  return (
    <section id="overstimulation-elements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">The Overstimulation Elements in Stimulation Clicker</h2>
        <p className="text-lg mb-6">
          One of the defining aspects of Stimulation Clicker is its ability to mimic the chaos of modern internet life. Throughout the game, players are bombarded with a mix of visual and auditory stimuli, including:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {elements.map((element, index) => (
            <li key={index} className="flex items-center">
              <span className="text-purple-400 mr-2">•</span>
              <span>{element}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg">
          These elements are intentionally overwhelming, reflecting the overstimulation many people experience daily while navigating the internet. Stimulation Clicker uses these features to create a chaotic yet humorous environment that resonates with players.
        </p>
      </div>
    </section>
  )
}

