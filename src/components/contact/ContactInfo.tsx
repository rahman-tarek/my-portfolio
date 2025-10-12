import { FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'

const ContactInfo = () => {
    return (
        <div className="w-full p-4 mx-auto">
            <div className="p-4 md:p-10 border-2 border-gray-300 rounded-md">
                <h2 className="text-2xl font-bold text-left">Contact Info</h2>
                <div className="link mt-5 text-left">
                    <div className="flex flex-row items-center justify-start gap-5">
                        <Link to='https://github.com/rahman-tarek'><FaGithub className="w-6 h-6 text-pink-800" /></Link>
                        <div>
                            <h2 className="font-bold">Github</h2>
                            <Link to="https://github.com/rahman-tarek" className="text-gray-700 font-bold hover:text-blue-800">github.com/rahman-tarek</Link>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-5 mt-2">
                        <Link to='https://www.linkedin.com/in/rahman-tarek/'><FaLinkedin className="w-6 h-6 text-blue-800 hover:text-blue-900" /></Link>
                        <div>
                            <h2 className="font-bold">LinkedIn</h2>
                            <Link to="https://www.linkedin.com/in/rahman-tarek/" className="text-gray-700 font-bold hover:text-blue-900">linkedin.com/in/rahman-tarek/</Link>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-5 mt-2">
                        <Link to="mailto:rahmantarek.dev@gmail.com"><FaMailBulk className="w-6 h-6" /></Link>
                        <div>
                            <h2 className="font-bold">Email</h2>
                            <Link to="mailto:rahmantarek.dev@gmail.com" className="font-bold text-gray-700">rahmantarek.dev@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;