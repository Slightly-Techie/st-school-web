// import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";

function Pricing() {
  const pricingData = [
    {
      title: "Pro Plan",
      price: "39.99",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      buttonLabel: "Select Plan",
    },
    {
      title: "Premium Plan",
      price: "59.99",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      buttonLabel: "Select Plan",
    },
  ];
  return (
    <section className="w-full">
      <section className="max-w-screen-xl mx-auto h-full p-5 xl:px-0">
        <h1 className="text-2xl lg:text-3xl font-bold leading-8">Pricing</h1>
        <br />
        <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          {pricingData.map((data, index) => (
            <PricingCard
              key={index}
              title={data.title}
              price={data.price}
              features={data.features}
              buttonLabel={data.buttonLabel}
            />
          ))}
        </section>
      </section>
    </section>
  );
}

export default Pricing;
