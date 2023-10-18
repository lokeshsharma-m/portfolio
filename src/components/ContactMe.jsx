function ContactMe() {
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-500 text-white"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
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
              className="mx-auto my-4 flex items-center justify-center rounded-lg bg-blue-500 px-2 py-3
             text-white duration-200 hover:scale-105"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
