import ResumeDownloader from "./ResumeDownloader";

const Banner = () => {
  return (
    <>
      <div className="home p-4 pt-20 flex flex-col justify-center items-center mx-auto sm:max-w-7xl md:max-w-7xl md:h-screen">
        <img
          src="tarek.png"
          className="w-[160px] h-[160px] rounded-full transform transition-all ease-in-out duration-300 hover:scale-105"
        />
        <div className="flex gap-2 items-center justify-center text-sm font-bold font-sans mt-2">
          <div className="h-2 w-2 rounded-full bg-green-700 slow-blinking-icon"></div>
          <p>Available for new project</p>
        </div>
        <h3 className="w-full p-4 md:w-4xl text-3xl font-bold md:text-4xl text-center">Hi, I'm Tarek Rahman</h3>
        <h3 className="w-full md:w-4xl text-xl font-bold md:text-4xl text-center">Frontend Engineer & Competitive Programmer</h3>
        <h4 className="text-xl font-bold my-5 text-center sm:max-w-3xl md:max-w-3xl lg:max-w-3xl">
          I help founders turn real-world problems into digital solutions.
        </h4>

        <ResumeDownloader />
      </div>
    </>
  );
};

export default Banner;
