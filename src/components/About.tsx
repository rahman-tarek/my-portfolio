import { Link } from "react-router";

const About = () => {
  return (
    <>
      <div className="container p-4 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl text-center font-bold">About me</h1>
        <div className="py-10 space-y-4 flex flex-col md:flex-row md:space-x-10 justify-between mt-6">
          <div className="flex flex-col items-center space-y-10">
            <img src="src\assets\tarek.png" alt="Tarek-Rahman" className="w-120 h-70 rounded-md" />
            <Link to="https://github.com/rahman-tarek" className="w-full bg-blue-800 text-white font-bold px-4 py-2 rounded-md cursor-pointer text-center">View My Work</Link>
          </div>
          <div className="flex flex-col items-center md:space-y-6 ">
            <p className="text-2xl text-gray-700">Hello! I'm <span className="text-black font-bold">Tarek Rahman</span>, a passionate <span className="text-blue-800 font-bold">Frontend Engineer</span> who loves transforming real-world problems into elegant digital solutions.</p>
            <p className="text-2xl text-gray-700">Alongside development, I actively participate in <span className="text-blue-800 font-bold">competitive programming</span>, where I sharpen my problem-solving and algorithmic thinking skills.</p>
            <p className="text-2xl text-gray-700">Currently pursuing a B.Sc. in Computer Science & Engineering, I’m continuously learning, building, and collaborating on impactful projects.</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;
