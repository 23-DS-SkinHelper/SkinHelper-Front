const Spinner = () => {
  return (
    <div
      className="inline-block h-60 w-60 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_4s_linear_infinite]"
      role="status"
    ></div>
  );
};

export default Spinner;
