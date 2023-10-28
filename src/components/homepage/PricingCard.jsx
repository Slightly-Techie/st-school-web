const PricingCard = ({ title, price, features, buttonLabel }) => {
  return (
    <div className="col-span-1 bg-white rounded-2xl overflow-hidden border border-black">
      <div className="p-6">
        <div className="font-bold text-3xl mb-2">{title}</div>
        <div className="text-2xl text-black">GHC {price}</div>
        <button className="my-3 bg-black hover:bg-[#121212] ease duration-300 text-white font-bold py-2 px-4 rounded-full w-auto">
          {buttonLabel}
        </button>
        <ul className="mt-4">
          {features.map((feature, index) => (
            <li key={index} className="mt-2 flex items-center">
              <svg
                className="w-4 h-4 text-black mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
