import STLogo from "../../assets/st-logo.png"

function Footer() {
  return (
    <footer className="bg-black text-white h-auto py-8 px-5">
      <section className="max-w-screen-xl mx-auto h-full">
        <section className="w-full h-[50%] flex items-center">
          {/* Left Side */}
          <section>
            <img
              src={STLogo}
              alt="st-logo"
              className="w-[25px] h-[25px]"
            />
          </section>
          {/* Right */}
          <section></section>
        </section>
        <hr className="my-5" />
        <section className="flex">
          {/* Left */}
          <section>
            © 2023 <a href="https://slightlytechie.com">Slightly Techie™</a>.
            All Rights Reserved.
          </section>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
