import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function NavBar() {
  const [nav, setNav] = useState();
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="fixed flex h-20 w-full items-center justify-between bg-red-600 px-4 text-black">
      <div>
        <h1 className="font-signature ml-2 text-5xl">lokesh</h1>
      </div>

      <ul className="hidden  md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer  px-4 font-medium capitalize text-black
         decoration-pink-500  decoration-solid decoration-4 duration-200 hover:scale-105 hover:underline"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="absolute left-0 top-0 flex h-screen w-full flex-col items-center 
      justify-center bg-gradient-to-b from-black to-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer  px-4 py-6 text-4xl capitalize text-white"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
