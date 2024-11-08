const AnimatedCard = () => {
    return (
      <div className="relative p-0.5 rounded-lg overflow-hidden col-span-1 border">
        <div className="absolute inset-0 rounded-lg border-streak-overlay animate-border-streak pointer-events-none" />
        <div className="relative z-10 p-4 bg-zinc-900 rounded-lg border-2 border-transparent flex flex-col">
          <h2 className="text-white text-md font-bold text-center m-2">
            Building the future of finance
          </h2>
          <p className="text-gray-400 text-sm text-justify my-2">
            We believe that financial freedom is for everyone. Borders, income,
            or birthplace should not limit a person's ability to take a loan, open
            a savings account, or transfer money. With Blackwing, we're taking
            this dream one step forward.
          </p>
          <p className="text-gray-400 text-sm text-justify my-2">
            Blackwing is a new blockchain that lets you deposit once and trade any
            asset with liquidation free leverage.
          </p>
          <p className="text-gray-400 text-sm text-justify my-2">
            Built by an all-star team of engineers and product leaders from
            companies like Meta, Robinhood, and LinkedIn — our team has scaled
            products to billions of people and millions in revenue. You will
            constantly be challenged, fostered, and motivated to grow to new
            heights.
          </p>
        </div>
      </div>
    );
};
  
export default AnimatedCard;
  