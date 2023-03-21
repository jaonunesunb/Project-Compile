import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Way from "./routes/routes";
import UserContextProvider from "./context/UserContext";
import ModalContextProvider from "./context/ModalContext";
import AutoLogin from "./components/autoLogin";

function App() {
  return (
    <UserContextProvider>
      <AutoLogin>
        <ModalContextProvider>
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
          />
          <Way />
        </ModalContextProvider>
      </AutoLogin>
    </UserContextProvider>
  );
}

// teste

export default App;
