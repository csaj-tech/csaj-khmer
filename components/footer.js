export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center bg-gray-800 text-white text-sm p-6 mt-4">
      {/* Left column for copyright */}
      <div>
        <p>Copyright &copy; {year} Cambodian Students' Association in Japan (CSAJ)</p>
        <a href="mailto:csaj.info@gmail.com" className="text-white hover:text-gray-300">csaj.info@gmail.com</a>
      </div>

      {/* Right column for contact information */}
      <div className="flex space-x-2">
        
        <a href="https://www.facebook.com/csajpage" target="_blank" rel="noopener noreferrer">
          <img className="h-6 w-auto" src="/facebook.png" alt="Facebook" />
        </a>
        <a href="https://t.me/+edmi4r6uHZU0NmVl" target="_blank" rel="noopener noreferrer">
          <img className="h-6 w-auto" src="/telegram.png" alt="Telegram" />
        </a>
      </div>
    </footer>
  );
}
