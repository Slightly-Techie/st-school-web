function Footer() {
  return (
    <footer className="bg-black text-white h-auto py-8 px-5">
      <section className="max-w-screen-xl mx-auto h-full">
        <section className="w-full h-[50%] flex items-center">
          {/* Left Side */}
          <section>
            <img
              src="https://slightlytechie.com/_next/image?url=%2Flogo.png&w=32&q=75"
              alt="st-logo"
            />
          </section>
          {/* Right */}
          <section></section>
        </section>
        <hr className="my-5" />
        <section className="flex">
          {/* Left */}
          <section>
            © {(new Date().getFullYear())} <a href="https://slightlytechie.com">Slightly Techie™</a>.
            All Rights Reserved.
          </section>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
