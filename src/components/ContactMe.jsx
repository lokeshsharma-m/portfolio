function ContactMe() {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-r from-dpurple  to-lpurple text-white sm:overflow-y-auto"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className=" inline  text-4xl font-bold md:drop-shadow-glow ">
            Contact Me
          </p>
          <p className="py-6">Submit the form to get in touch with me</p>
        </div>

        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/d9ed6def-6b86-45bc-add0-cfbbce4f545b"
            method="POST"
            className="flex w-full flex-col md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="enter your email"
              className="my-4 rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="enter your message"
              rows={10}
              className="rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
            />
            <button
              className="mx-auto my-4 flex items-center justify-center rounded-xl bg-black
               px-3 py-3 text-base  text-white outline
             outline-offset-1 duration-200 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
