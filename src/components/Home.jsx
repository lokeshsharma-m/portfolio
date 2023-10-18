import { Link } from "react-scroll";
import profile from "../assets/profile1.png";
function Home() {
  return (
    <div
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 text-white"
      name="home"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-4xl font-bold sm:text-6xl">
            I'm a front end developer
          </h2>
          <p className="max-w-md py-4">
            I have no experience in front end development i am still in the
            learning process.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="my profile"
            className="mx-auto w-2/3 rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
