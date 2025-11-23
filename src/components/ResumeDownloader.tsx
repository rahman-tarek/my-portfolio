import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router";

const ResumeDownloader = () => {
    return (
        <div>
            <Link
                to={`https://drive.google.com/file/d/1lfNHSjB8PyWjGfdO3dzj31HNDwCN6MDr/view?usp=sharing`}
                className="text-xs md:text-sm flex justify-center items-center gap-2 bg-gray-200 px-3 mt-3 py-1 rounded-full cursor-pointer"
            >
                <FaFileAlt /> Download Resume
            </Link>
        </div>
    )
}

export default ResumeDownloader;