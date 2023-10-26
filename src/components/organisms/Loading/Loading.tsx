import Spinner from "../../atoms/Loading/Spinner";

const Loading = () => {
  return (
    <div className="pt-100 flex flex-1 flex-col justify-center items-center leading-32 text-28 font-bold">
      <Spinner />
      <div className="mt-28">의심되는 피부암을</div>
      <div>찾고 있습니다</div>
    </div>
  );
};

export default Loading;
