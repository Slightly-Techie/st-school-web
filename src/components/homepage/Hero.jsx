import { Link } from "react-router-dom";

const records = [
  {
    id: 0,
    value: "10K+",
    title: "Success Stories",
  },
  {
    id: 1,
    value: "10K+",
    title: "Success Stories",
  },
  {
    id: 2,
    value: "10K+",
    title: "Success Stories",
  },
  {
    id: 3,
    value: "10K+",
    title: "Success Stories",
  },
];

function Hero() {
  return (
    <section className="w-full h-full xl:h-screen bg-black text-white">
      <section className="pt-[7vh] h-full hero-section">
        <section className="max-w-screen-xl mx-auto h-full p-5 xl:px-0 flex flex-col justify-center">
          {/* Top */}
          <section className="w-full flex flex-col md:flex-row gap-5 mb-8">
            <section className="md:w-[50%]">
              <h1 className="text-3xl lg:text-5xl font-bold leading-8">
                Start learning and take selected classes from the best mentors
              </h1>
            </section>
            <section className="md:w-1/2">
              <p>
                Improve your skillsfor a better future and start focusing on
                learning new things from selected classes available at STSchool
                from best mentors.
              </p>
              <br />
              <section className="flex">
                <Link to={`/signup`}>
                  <button className="bg-white text-black px-4 py-2 rounded-full">
                    Get Started
                  </button>
                </Link>
              </section>
            </section>
          </section>
          {/* Image */}
          <section className="w-full mb-8">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero-img"
              className="rounded-3xl md:h-[300px] lg:h-[380px] xl:h-[400px] w-full object-cover"
            />
          </section>
          {/* Bottom */}
          <section className="grid grid-cols-2 md:grid-cols-4">
            {records.map((item) => {
              return (
                <section
                  className={`col-span-1 text-center ${
                    item.id === 3 ? "" : "lg:border-r"
                  }`}
                  key={item.id}
                >
                  <h1 className="font-bold text-2xl">{item.value}</h1>
                  <p className="text-[#777777]">{item.title}</p>
                </section>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );
}

export default Hero;
