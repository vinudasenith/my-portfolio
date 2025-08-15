function Projects() {
    const projects = [
        {
            name: "Drive-Now – Car Rental System",
            description: "A MERN stack rental app for cars. Users can browse, book, and review vehicles, while admins efficiently manage inventory, bookings, and users.",
            tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
            image: "drivenow.png",
            link: "#"
        },
        {
            name: "KV-AUDIO – Audio Rental System",
            description: "A MERN stack rental app for audio and lighting equipment. Users can browse, book, and review items, while admins manage inventory and orders.",
            tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
            image: "kvaudio.png",
            link: "#"
        },
        {
            name: "Hotel Booking Web App",
            description: "A full-stack wep application for hotel booking. Users can browse rooms, make reservations, and leave reviews, while admins efficiently manage room inventory, bookings, and users.",
            tech: ["Java", "Spring Boot", "Angular", "MongoDB", "Tailwind CSS"],
            image: "hotelbooking.jpeg",
            link: "#"
        },
        {
            name: "Resume Parser & ATS Chatbot",
            description: "AI-powered chatbot using Java, Spring Boot, Angular, local LLM for resume analysis.",
            tech: ["Java", "Spring Boot", "Angular", "Streamlit", "AI"],
            image: "resumeparser.png",
            link: "#"
        },
    ];

    return (
        <section className="py-16 " id="projects">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-10">Projects I Have Built</h1>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.name} className="bg-white shadow-lg rounded-lg p-4 transition-transform hover:scale-105">
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-auto object-contain rounded-md mb-4"
                            />


                            <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                            <p className="text-gray-600 mb-4 text-justify">{project.description}</p>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
