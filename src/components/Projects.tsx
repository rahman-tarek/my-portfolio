const Projects = () => {
  return (
    <>
      <div id="projects" className="w-full  py-10">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">
            Project Showcase
          </h1>
          <p className="text-gray-600 mt-2 text-center">
            Keep thinking, keep building, keep learning.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Project Card 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5">
              <img
                src="meta-blog-app.png"
                alt="Blog Web App"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">Full Stack Blog App</h2>
              <p className="text-gray-600 text-sm mt-2">
                A MERN-based blogging platform with authentication and CRUD functionality.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://github.com/rahman-tarek/meta-blog-app"
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://meta-blog-app-nine.vercel.app/"
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5">
              <img
                src="weather-app.png"
                alt="Blog Web App"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">Weather App</h2>
              <p className="text-gray-600 text-sm mt-2">
                A simple weather application that fetches and displays real-time weather information for any city.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://github.com/rahman-tarek/weather-app"
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://forecastx.vercel.app/"
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5">
              <img
                src="cineflare-movie-app.png"
                alt="Portfolio Website"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">Cineflare Movie App</h2>
              <p className="text-gray-600 text-sm mt-2">
                A modern web application for discovering and exploring movies, built with React and powered by TMDB API.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://github.com/rahman-tarek/cineflare-movie-app"
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://cineflare-movie-app.vercel.app/"
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5">
              <img
                src="image-generator.png"
                alt="Portfolio Website"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">AI Image Generator</h2>
              <p className="text-gray-600 text-sm mt-2">
                This AI Image Generator is a modern web application that leverages the Hugging Face API to create AI-generated artwork from text descriptions
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://github.com/rahman-tarek/ai-image-generator"
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://rahman-tarek.github.io/ai-image-generator/"
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
};

export default Projects;
