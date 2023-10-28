function About() {
  return (
    <section className="w-full bg-[#f5f9f9] py-8">
      <section className="max-w-screen-xl mx-auto h-full p-5 xl:px-0">
        <section className="w-full flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1580894906475-403276d3942d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about-img"
            className="w-full lg:w-[45%] rounded-3xl h-[300px] lg:h-[500px] object-cover"
          />
          <section className="w-full lg:w-1/2 rounded-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold leading-8">
              Reimagining the African Dream
            </h1>
            <p className="my-3">
              This is where dreams come to life. With our carefully crafted
              learning courses and diploma programs we will meet you where you
              are, and take you to where you want to be in your career.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default About;
