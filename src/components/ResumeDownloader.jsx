import { FaFileAlt } from "react-icons/fa";

const ResumeDownloader = () => {
    return (
        <div
            className="text-xs md:text-sm flex justify-center items-center gap-2 bg-gray-200 px-3 mt-3 py-1 rounded-full cursor-pointer"
        >
            <FaFileAlt /> Download Resume
        </div>
    )
}

export default ResumeDownloader;