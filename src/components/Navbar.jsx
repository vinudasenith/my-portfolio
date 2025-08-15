function Navbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Left: Name */}
                    <div className="flex-shrink-0 -ml-14">
                        <h1 className="text-gray-700 font-medium text-xl">Vinuda Senith</h1>
                    </div>

                    {/* Center / Right: Nav Links */}
                    <div className="hidden md:flex items-center gap-10 py-1">
                        <a href="#home" className="py-4 px-2 text-gray-700 font-medium hover:text-blue-500 transition duration-300 border-b-2 border-transparent hover:border-blue-500">Home</a>
                        <a href="#projects" className="py-4 px-2 text-gray-700 font-medium hover:text-blue-500 transition duration-300 border-b-2 border-transparent hover:border-blue-500">Projects</a>
                        <a href="#contact" className="py-4 px-2 text-gray-700 font-medium hover:text-blue-500 transition duration-300 border-b-2 border-transparent hover:border-blue-500">Contact</a>
                    </div>

                    {/* Right: Download CV Button (optional) */}
                    <div className="hidden md:flex">
                        <a href="/resume.pdf" download className="py-1 px-2 bg-gray-500 text-white font-medium rounded-md hover:bg-gray-700 transition duration-300">
                            Download CV
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
