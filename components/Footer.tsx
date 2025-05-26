export default function Footer() {
  return (
    <footer className="container py-16 mt-16 border-t border-[rgb(var(--border))]">
      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Anderson Henrique</p>
        <div className="flex gap-6">
          <a href="https://github.com/anderson-ufrj" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/anderson-henrique" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/neural_thinker" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}