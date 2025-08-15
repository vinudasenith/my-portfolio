import { FaLinkedin, FaGithub, FaFacebook, FaServer, FaLaptopCode, FaRobot } from "react-icons/fa";

function Hero() {
    return (
        <div className="max-w-6xl mx-auto px-4 -mt-32 items-center">
            {/* Hero Section */}
            <div className="flex items-center h-screen gap-24 md:flex-row flex-col ">

                {/* Profile Image */}
                <div className="w-64 shrink-0 -mt-12">
                    <img
                        src="me.jpg"
                        alt="Your Photo"
                        className="w-full h-auto rounded-full shadow-xl object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="-mt-12 text-center md:text-left">
                    {/* Topic */}
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Code. Create. Innovate.
                    </h1>

                    {/* Small Heading */}
                    <p className="text-xl text-gray-700 mb-4">
                        Undergraduate Software Engineering Student
                    </p>

                    {/* Main Description */}
                    <p className="text-md text-gray-700 leading-relaxed max-w-2xl mb-6 text-justify">
                        Hey! Hi! I build modern web applications with AI integration, focusing on
                        efficiency, innovation, and seamless user experiences. Passionate about creating
                        practical solutions and learning every step of the way.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 justify-center md:justify-start mb-6">
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 text-2xl hover:scale-110 transition-transform"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black text-2xl hover:scale-110 transition-transform"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.facebook.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            {/* 3 Cards Section */}
            <div className="flex flex-col md:flex-row justify-center gap-24 -mt-48 mb-16">
                {/* Backend */}
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-64 transition-transform hover:scale-105">
                    <FaServer className="text-4xl text-green-600 mb-4" />
                    <h2 className="text-xl font-bold mb-2 whitespace-nowrap">Backend Development</h2>
                    <p className="text-gray-600 text-center">
                        Building robust server-side applications, APIs, and databases to power modern web apps.
                    </p>
                </div>

                {/* Frontend */}
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-64 transition-transform hover:scale-105">
                    <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
                    <h2 className="text-xl font-bold mb-2 whitespace-nowrap">Frontend Development</h2>
                    <p className="text-gray-600 text-center ">
                        Creating interactive and responsive user interfaces using modern frameworks and tools.
                    </p>
                </div>

                {/* AI Integration */}
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-64 transition-transform hover:scale-105">
                    <FaRobot className="text-4xl text-red-600 mb-4" />
                    <h2 className="text-xl font-bold mb-2">AI Integration</h2>
                    <p className="text-gray-600 text-center">
                        Implementing AI-powered features and automation to enhance user experience and functionality.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
