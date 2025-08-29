import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";
import Footer from "./components/custom/Footer";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
