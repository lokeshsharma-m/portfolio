function AboutMe() {
  return (
    <div
      className="h-screen w-full  bg-gradient-to-r from-dpurple to-lpurple text-white sm:overflow-y-auto "
      name="about"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  p-4">
        <div className="pb-8">
          <p className="inline  text-4xl font-bold md:drop-shadow-glow">
            About
          </p>
        </div>

        <p className=" text-xl">
          Hey there, It's Lokesh Sharma. I'm passionate about coding and web
          development, always seeking to create smooth, user-friendly
          solutions.Beyond coding, you'll find me engrossed in a few other
          passions. I enjoy playing chess.I'm also an avid reader, constantly
          diving into new worlds through books.And when it's time to relax, I
          enjoy watching movies and series.
        </p>

        <br />
        <p className="text-xl">
          I love to immerse myself in games to unwind and challenge my skills.
          My curiosity drives me to learn new skills, and I'm currently
          exploring React and web development. If you share my tech passion,
          feel free to reach out, and let's collaborate on something amazing!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
