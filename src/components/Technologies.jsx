import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiSpringboot, SiAngular, SiPython, SiMongodb, SiPostgresql, SiStreamlit } from "react-icons/si";
import { DiJava } from "react-icons/di"; // Java icon

function Technologies() {
    const techs = [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Java", icon: <DiJava className="text-red-600" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
        { name: "Angular", icon: <SiAngular className="text-red-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Python", icon: <SiPython className="text-yellow-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Streamlit", icon: <SiStreamlit className="text-red-400" /> },
    ];

    return (
        <section className="py-16 bg-gray-100 ">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-10">Technologies I Use</h1>
                <div className="flex flex-wrap justify-center gap-10">
                    {techs.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center gap-2 transition-transform hover:scale-110">
                            <div className="text-5xl">{tech.icon}</div>
                            <p className="text-gray-700 font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
