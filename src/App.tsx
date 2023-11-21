import { ToastContainer } from "react-toastify";
import { ResetStyled } from "./styles/GlobalReset";
import { GlobalStyled } from "./styles/GlobalStyled";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <ResetStyled />
      <GlobalStyled />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Home />
    </>
  );
};

export default App;
