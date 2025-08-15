import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <section className="py-20 bg-gray-50" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities? Reach out and let's connect.
                    </p>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Email Card */}
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                            <FaEnvelope className="text-blue-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600 text-center mb-4">ha.vinudas@gmail.com</p>
                        <a
                            href="mailto:ha.vinudas@gmail.com"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                        >
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors duration-300">
                            <FaPhone className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Phone</h3>
                        <p className="text-gray-600 text-center mb-4">+94 717443956</p>
                        <a
                            href="tel:+94717443956"
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                        >
                            Call Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Location Card */}
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors duration-300">
                            <FaMapMarkerAlt className="text-red-600 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Location</h3>
                        <p className="text-gray-600 text-center mb-4">Colombo, Sri Lanka</p>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center gap-2 transition-colors mx-auto">
                            View Map
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send a Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="Regarding a project"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="How can I help you?"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;