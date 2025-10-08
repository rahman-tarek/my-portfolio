import { Link } from 'react-router-dom';
import { FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";


const LetsConnect = () => {
    return (
        <div className='p-4 mx-auto'>
            <div className='p-10 border-2 border-gray-300 rounded-md mt-5'>
                <h2 className='font-bold text-2xl'>Let's Connect</h2>
                <p className='mt-5 font-bold text-gray-700'>Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities and ideas.</p>
                <div className="link flex flex-row justify-center items-center gap-5 mt-10">
                    <Link to='https://github.com/rahman-tarek'><FaGithub className='w-6 h-6' /></Link>
                    <Link to='https://www.linkedin.com/in/rahman-tarek/'><FaLinkedin className='w-6 h-6' /></Link>
                    <Link to="mailto:rahmantarek.dev@gmail.com"><FaMailBulk className='w-6 h-6' /></Link>
                </div>
            </div>
        </div>
    )
}

export default LetsConnect;