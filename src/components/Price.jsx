const Price = ({ text, discount = 0 }) => {
  return (
    <p className="flex items-center color-dark-cyan mb-7 text-3xl font-fraunces">
      {discount}{" "}
      <span className="text-sm ml-4 dark-grayish-blue line-through font-montserrat">
        {text}
      </span>
    </p>
  );
};

export default Price;
