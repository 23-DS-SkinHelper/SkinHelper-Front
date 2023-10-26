import Initial from "./components/atoms/Initial/Initial";
import Camera from "./components/atoms/Camera/Camera";
import Footer from "./components/atoms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Guide from "./components/atoms/Guide/Guide";
import Loading from "./components/organisms/Loading/Loading";

const App = () => {
  // const [state, setState] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const state = true;
  const isLoading = true;

  return (
    <>
      <div className="mx-70 my-50 flex flex-col justify-between">
        <Header />
        <div>
          <div className="flex flex-1">
            <Camera />
            {isLoading ? <Loading /> : state ? <div>result</div> : <Initial />}
          </div>
        </div>
        <Footer />
      </div>
      <div className="fixed right-[50px] bottom-[50px]">
        <Guide />
      </div>
    </>
  );
};

export default App;
