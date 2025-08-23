import ResumeDownloader from "./ResumeDownloader";

const Banner = () => {
  return (
    <>
      <div className="home pt-20 flex flex-col justify-center items-center mx-auto sm:max-w-7xl md:max-w-7xl lg:maz-w-7xl md:h-screen lg:h-screen">
        <img
          src="tarek.png"
          className="w-[160px] h-[160px] rounded-full transform transition-all ease-in-out duration-300 hover:scale-105"
        />
        <div className="flex gap-2 items-center justify-center text-sm font-bold font-sans mt-2">
          <div className="h-2 w-2 rounded-full bg-green-700 slow-blinking-icon"></div>
          <p>Available for new project</p>
        </div>
        <h1 className="text-xl md:text-6xl lg:text-6xl font-bold my-5 text-center sm:max-w-3xl md:max-w-3xl lg:max-w-3xl">
          I help founders turn real-world problems into digital solutions
        </h1>
        <h3>Hello! I'm Tarek Rahman, a Frontend Engineer</h3>
        <ResumeDownloader />
      </div>
    </>
  );
};

export default Banner;
