import { FaMedal } from "react-icons/fa";

function Education() {
    const education = [
        {
            title: "BEng (Hons) Software Engineering ",
            year: "2024 - Present",
            details: "Undergraduate at IIT Sri Lanka, affiliated with University of Westminster (UK)"
        },
        {
            title: "GCE A/L",
            year: "2023",
            details: "Specialized in Physical Science stream.",
        },
        {
            title: "GCE O/L",
            year: "2019",

        },
    ];

    return (
        <section className="py-16 bg-gray-50" id="education">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-10 text-center">Education</h1>

                <div className="relative border-l-2 border-yellow-400 ml-6">
                    {education.map((edu, index) => (
                        <div key={index} className="mb-8 ml-8">
                            {/* Medal */}
                            <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full border-2 border-yellow-400">
                                <FaMedal className="text-yellow-500 text-lg" />
                            </span>

                            {/* Card */}
                            <div className="bg-white shadow-md rounded-lg p-4  ">
                                <h2 className="text-lg font-bold">{edu.title}</h2>
                                <p className="text-xs text-gray-500">{edu.year}</p>
                                <p className="text-gray-600 text-sm mt-1">{edu.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
