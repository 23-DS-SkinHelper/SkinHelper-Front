import Initial from "./components/atoms/Initial/Initial";
import Camera from "./components/atoms/Camera/Camera";
import Footer from "./components/atoms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Description from "./components/atoms/Description/Description";
import { useState } from "react";
import { CANCER_NAME_TABLE } from "./utils/utils";
// import Error from "./components/atoms/Error/Error";

const App = () => {
  const [result, setResult] = useState(""); // TODO-CNN 모델과 연결
  const [isUpload, setIsUpload] = useState(false);

  const label = "vasc";
  const cancerData = CANCER_NAME_TABLE[label];

  return (
    <>
      <div className="mx-70 my-50 flex flex-col justify-between">
        <Header />
        <div>
          <div className="flex flex-1">
            <Camera result={result} setResult={setResult} setIsUpload={setIsUpload} />

            {isUpload ? (
              cancerData ? (
                <div className="flex min-w-800">
                  <Description
                    kor={cancerData.kor}
                    eng={cancerData.eng}
                    classification="원인"
                    content={cancerData.cause}
                  />
                  <Description
                    kor={cancerData.kor}
                    eng={cancerData.eng}
                    classification="치료법"
                    content={cancerData.treatment}
                  />
                </div>
              ) : (
                <div>Error: Cancer Not Found</div>
              )
            ) : (
              <Initial />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
