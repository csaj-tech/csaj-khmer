export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-6 items-center bg-gray-700 text-white text-sm md:p-6 mt-4">
      <div className="flex justify-between container mx-auto">
        <div>
          <p>
            Copyright &copy; {year} Cambodian Students' Association in Japan
            (CSAJ)
          </p>
          <a
            href="mailto:csaj.info@gmail.com"
            className="text-white hover:text-gray-300"
          >
            csaj.info@gmail.com
          </a>
        </div>

        {/* Right column for contact information */}
        <div className=" flex space-x-2 md:space-x-6">
          <a
            href="https://www.facebook.com/csajpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-8 w-12 md:h-10 md:w-auto"
              src="/facebook.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://t.me/+edmi4r6uHZU0NmVl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="md:h-10 w-14 md:w-auto flex justify-center"
              src="/telegram.png"
              alt="Telegram"
            />
          </a>
        </div>
      </div>
      {/* Left column for copyright */}
    </footer>
  );
}
