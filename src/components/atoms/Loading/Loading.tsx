const Loading = () => {
  return (
    <div className="pt-100 flex flex-1 flex-col justify-center items-center leading-32 text-28 font-bold">
      <div
        className="inline-block h-60 w-60 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_4s_linear_infinite]"
        role="status"
      ></div>
      <div className="mt-28">의심되는 피부암을</div>
      <div>찾고 있습니다</div>
    </div>
  );
};

export default Loading;
