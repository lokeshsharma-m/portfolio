import { Link } from "react-scroll";
import profile from "../assets/profile2.png";
function Home() {
  return (
    <div
      className="from-dpurple to-lpurple  h-screen w-full bg-gradient-to-r  text-white"
      name="home"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-2xl flex-col items-center justify-center  px-4 md:flex-row">
        {/* <div className="max-w-screen-[1024px] mx-auto flex h-full flex-col items-center justify-center px-4 md:flex-row"> */}
        <div className=" ml-28 flex h-full w-[980px] flex-col justify-center   pl-28">
          <h2 className=" drop-shadow-glow w-full py-5 pr-16 text-3xl font-bold sm:text-5xl ">
            I'm a front end developer
          </h2>
          <p className="max-w-xl  py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            similique facere, ipsa quae, quos repellendus dolorum temporibus
            cupiditate reiciendis dolorem fuga maiores, nesciunt consequuntur
            voluptas? Aut quis ullam quibusdam, suscipit perspiciatis doloremque
            libero exercitationem? Voluptatibus nobis, repellendus esse
            inventore eaque cumque recusandae pariatur, aperiam accusamus rem
            sint ab corrupti quasi?
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group my-2 flex w-fit cursor-pointer items-center rounded-2xl bg-black px-8
               py-6 text-xl text-white outline outline-offset-1"
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
            className="mb-[-80px] ml-[15px] h-[700px] w-96  pt-16  opacity-80 md:w-[550px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
