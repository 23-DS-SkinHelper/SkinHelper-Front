import { CameraAlt } from "@mui/icons-material";
import Result from "../Result/Result";

export type cameraProps = {
  result: string;
};

const Camera = ({ result }: cameraProps) => {
  return (
    <div className="w-400 mt-46 flex flex-col ">
      <div className="text-28 leading-32 font-semibold mb-40">
        피부암으로 의심되는 부분을 사진으로 찍어 업로드해 주세요!
      </div>
      <div className="bg-gray-300 w-400 h-400 flex justify-center items-center">
        <CameraAlt style={{ fontSize: "80px" }} />
      </div>

      <Result result={result} />
    </div>
  );
};

export default Camera;
