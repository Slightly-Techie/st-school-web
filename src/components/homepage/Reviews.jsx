import Slider from "../../utils/Slider";

const reviews = [
  {
    id: 1,
    name: "Alice",
    review:
      "This e-learning platform is fantastic! I've learned so much and the instructors are top-notch.",
  },
  {
    id: 2,
    name: "Bob",
    review:
      "I can't believe how affordable the courses are here. I've taken multiple and they're all excellent.",
  },
  {
    id: 3,
    name: "Charlie",
    review:
      "The personalized learning experience on this platform is a game-changer. Highly recommend!",
  },
  {
    id: 4,
    name: "David",
    review:
      "I was skeptical at first, but this e-learning platform exceeded my expectations. The quality of education is unmatched.",
  },
  {
    id: 5,
    name: "Ella",
    review:
      "As a working professional, this platform has allowed me to upskill and stay competitive in my industry. I love the convenience.",
  },
  {
    id: 6,
    name: "Fiona",
    review:
      "The community aspect of this platform is incredible. I've made great connections and learned a lot from my peers.",
  },
];

function Reviews() {
  return (
    <section className="w-full bg-black text-white py-16" id="reviews">
      <section className="max-w-screen-xl mx-auto h-full p-5 xl:px-0">
        <Slider heading={`Reviews from Our Students`}>
          {reviews.map((item) => {
            return (
              <section
                key={item.id}
                className="w-[21rem] h-auto border p-5 rounded-md"
              >
                <p className="w-[18rem] mx-auto whitespace-normal">{item.review}</p>
                <br />
                <p className="text-[#777777]">{item.name}</p>
              </section>
            );
          })}
        </Slider>
      </section>
    </section>
  );
}

export default Reviews;
