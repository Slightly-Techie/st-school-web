import bgImg from "../assets/background-img.jpg";


const Background = () => {
  return (
      <img
        src={bgImg}
        alt="bg-img"
        className="object-fit h-screen w-full"
      />
  );
}

export default Background