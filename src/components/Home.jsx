import { Link } from "react-scroll";
import profile from "../assets/profile2.png";
function Home() {
  return (
    <div
      className="h-full w-full  bg-gradient-to-r from-dpurple to-lpurple  text-white sm:overflow-y-auto"
      name="home"
    >
      <div className="mx-auto flex h-full max-w-screen-2xl flex-col items-center justify-center  px-4 md:flex-row">
        {/* <div className="max-w-screen-[1024px] mx-auto flex h-full flex-col items-center justify-center px-4 md:flex-row"> */}
        <div className=" ml-28 mt-16 flex h-full flex-col justify-center  pl-28 md:w-[980px]">
          <h2 className=" w-full py-5 pr-16 font-bold sm:text-4xl  md:text-5xl md:drop-shadow-glow ">
            I'm a front end developer
          </h2>
          <p className="max-w-xl  py-8">
            I'm Lokesh Sharma, a passionate front-end developer. Here, I
            showcase my digital journey, featuring projects crafted with care.
            Explore my work, discover my coding skills, and let's connect to
            discuss tech.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group my-2 flex w-fit cursor-pointer items-center rounded-2xl bg-black px-6
               py-4 text-xl text-white outline outline-offset-1 duration-200 hover:scale-105"
            >
              <span className="mr-2 text-fuchsia-500 ">My </span>
              Portfolio
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="my profile"
            className="ml-[15px] mt-24 h-16 w-16 pt-16  md:h-[680px]  md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
