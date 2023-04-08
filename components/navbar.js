
export default function Navbar() {
    return (
        <section className="w-max-fit px-2 text-red-700 bg-white">
            <div className="flex flex-col flex-wrap items-center justify-between py-6 mx-auto md:flex-row max-w-7xl">
                <div className="relative flex flex-col md:flex-row">
                    <a href="/" className="flex items-center mb-5 font-sans  text-red-500 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                        <img className="object-cover h-40" src="/logo.jpg" alt="" />
                    </a>
                </div>
                <div className="inline-flex items-center lg:justify-end xl:ml-5">
                    <nav className="font-semibold flex flex-wrap items-center space-x-2 text-2xl font-sans tracking-tighter uppercase sm:space-x-16">
                        <a href="/" className=" text-red-400 hover:text-red-600">Home</a>
                        <a href="/news" className="text-red-400 hover:text-red-600">NEWS</a>
                        <a href="/tips" className="text-red-400 hover:text-red-600">Life in Japan</a>
                        <a href="/about" className="text-red-400 hover:text-red-600">About Us</a>
                    </nav>
                    <a href="#" className="font-medium inline-flex tracking-tighter uppercase text-xl items-center sm:mt-0 mt-5 sm:ml-8 justify-center px-5 py-2.5  text-white bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Join Us</a>
                </div>

            </div>
        </section>
    );
}