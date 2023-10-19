import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialMedia() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/lokesh-sharma-m/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/lokeshsharma-m",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];

  return (
    <div className="fixed left-0 top-[35%] hidden flex-col lg:flex ">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "justify-betweenbg-gray-500 ml-[-100px] flex h-14 w-40 items-center px-4 duration-300 hover:ml-[-10px] hover:rounded-lg" +
              " " +
              link.style
            }
          >
            <a
              href={link.href}
              className="item-center flex w-full justify-between text-white"
              target="_blank"
              download={link.download}
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
