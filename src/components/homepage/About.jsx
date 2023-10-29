function About() {
  return (
    <section className="w-full py-8" id="about">
      <section className="max-w-screen-xl mx-auto h-full p-5 xl:px-0">
        <section className="w-full flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1580894906475-403276d3942d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about-img"
            className="w-full lg:w-[45%] rounded-3xl h-[300px] lg:h-[500px] object-cover"
          />
          <section className="w-full lg:w-1/2 rounded-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold leading-8">
              Cultivating Practical Experience at Slightly Techie School
            </h1>
            <p className="my-3">
              At Slightly Techie School, our commitment to fostering excellence
              stems from our deep appreciation of the value of practical
              experience. Within our programs, we have meticulously woven
              hands-on projects, designed with the primary objective of honing
              your creativity and fortifying your problem-solving prowess,
              ensuring that you are equipped with the skills and knowledge
              needed to excel in your chosen field.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default About;
