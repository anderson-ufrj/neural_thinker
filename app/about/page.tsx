export default function AboutPage() {
  return (
    <div className="container py-16 max-w-xl">
      <h1 className="text-3xl mb-8">About</h1>
      
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-400">
          I'm Anderson Henrique, a software engineer and researcher based in Brazil. 
          My work focuses on the intersection of artificial intelligence, distributed systems, 
          and human-computer interaction.
        </p>
        
        <p className="text-gray-600 dark:text-gray-400">
          I believe in building technology that augments human intelligence rather than replacing it. 
          My interests span from low-level systems programming to high-level AI research, 
          always with a focus on creating tools that are both powerful and accessible.
        </p>
        
        <h2 className="text-xl mt-12 mb-4">Currently</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Working on neural interfaces and exploring how we can create more intuitive 
          ways for humans to interact with AI systems.
        </p>
        
        <h2 className="text-xl mt-12 mb-4">Previously</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Built distributed systems for real-time data processing</li>
          <li>Researched applications of ML in cybersecurity</li>
          <li>Contributed to open-source projects in the AI/ML space</li>
        </ul>
        
        <h2 className="text-xl mt-12 mb-4">Connect</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to reach out via <a href="/contact">email</a> or connect on{' '}
          <a href="https://twitter.com/neural_thinker" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>.
        </p>
      </div>
    </div>
  );
}