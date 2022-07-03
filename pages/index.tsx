import type { NextPage } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-primary relative wrapper overflow-hidden">
        <div className="container py-5 lg:pt-8 lg:pb-6">
          <Header />
          {/* <Hero /> */}
        </div>
      </div>
      <div className="container py-5 bg-white">
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
