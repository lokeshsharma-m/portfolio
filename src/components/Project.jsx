import worldWise from "../assets/portfolio/worldWise.jpg";
import wildoasis from "../assets/portfolio/wildOasis.jpg";
import pizza from "../assets/portfolio/pizza.jpg";

function Project() {
  const portfolios = [
    {
      id: 1,
      src: wildoasis,
      href: "https://github.com/lokeshsharma-m/the-wild-oasis",
      href1: "https://the-wild-oasis-hms.netlify.app/login",
      target: "_blank",
    },
    {
      id: 2,
      src: worldWise,
      href: "https://github.com/lokeshsharma-m/worldwise",
      href1: "https://worldwise-website.netlify.app/",
      target: "_blank",
    },
    {
      id: 3,
      src: pizza,
      href: "https://github.com/lokeshsharma-m/fast-react-pizza",
      href1: "https://fastreactpizza-pbs.netlify.app/",
      target: "_blank",
    },
  ];
  return (
    <div
      className="from-dpurple to-lpurple w-full bg-gradient-to-r text-white md:h-screen"
      name="portfolio"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="drop-shadow-glow inline text-4xl font-bold">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2  sm:px-0 md:grid-cols-3">
          {portfolios.map(({ id, src, href, target, href1 }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img src={src} alt="image" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  <a href={href1} target={target}>
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  <a href={href} target={target}>
                    Code
                  </a>
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
