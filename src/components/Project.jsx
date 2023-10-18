import reactweather from "../assets/portfolio/reactWeather.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import navbar from "../assets/portfolio/navbar.jpg";

function Project() {
  const portfolios = [
    {
      id: 1,
      src: reactweather,
    },
    {
      id: 2,
      src: reactSmooth,
    },
    {
      id: 3,
      src: navbar,
    },
  ];
  return (
    <div
      className="w-full bg-gradient-to-b from-black to-gray-500 text-white md:h-screen"
      name="portfolio"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Portfolio
          </p>
          <p className="py-6">check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2  sm:px-0 md:grid-cols-3">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="rounded-lg duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-2 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
