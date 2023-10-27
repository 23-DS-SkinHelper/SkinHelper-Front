import { CameraAlt } from "@mui/icons-material";
import Result from "../Result/Result";
import { useState } from "react";

export type cameraProps = {
  result: string;
  setIsUpload: (value: boolean) => void;
};

const Camera = ({ result, setIsUpload }: cameraProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setImageSrc(reader.result as string);
        setIsUpload(true);
      };
    }
  };

  const handleCameraClick = () => {
    const fileInput = document.getElementById("chooseFile");
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="w-400 mt-46 flex flex-col ">
      <div className="text-28 leading-32 font-semibold mb-40">
        피부암으로 의심되는 부분 사진을 <br />
        업로드해 주세요!
      </div>
      <div className="bg-gray-300 w-400 h-400 flex justify-center items-center">
        {imageSrc ? (
          <div
            className="image-container"
            style={{
              width: "400px",
              height: "400px",
              overflow: "hidden",
            }}
          >
            <img
              src={imageSrc}
              alt="Uploaded Image"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
           <Result result={result} />
        ) : (
          <CameraAlt style={{ fontSize: "80px", cursor: "pointer" }} onClick={handleCameraClick} />
        )}
      </div>

      
      <input
        type="file"
        id="chooseFile"
        name="chooseFile"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => onUpload(e)}
      />
      
     
    </div>
  );
};

export default Camera;
