// import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";

function Pricing() {
  const pricingData = [
    {
      title: "One-Month Plan",
      price: "300",
      features: [
        "Interactive Lessons",
        "24/7 Support",
        "Active Community",
        "Valid for 1 Month",
      ],
      buttonLabel: "Sign Up",
    },
    {
      title: "Three-Month Plan",
      price: "800",
      features: [
        "Interactive Lessons",
        "24/7 Support",
        "Active Community",
        "Valid for 3 Months",
      ],
      buttonLabel: "Sign Up",
    },
  ];
  return (
    <section className="w-full py-16" id="pricing">
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
