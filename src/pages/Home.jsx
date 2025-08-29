/* eslint-disable react/no-unescaped-entities */
import FounderSection from "@/components/custom/FounderSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col md:mx-56 gap-9">
      <h1 className="font-extrabold w-80 md:w-auto sm:text-[60px] text-center text-[30px] ">
        <span className="text-green-500">
          Discover Your Next Adventure With AI:
        </span>
        Presonalized Itineraries at Your Fingertips
      </h1>
      <p className=" text-gray-500 text-center w-80 md:w-auto text-xl">
        Unlock Limitless Exploration with Journey Juggler: Your Personal AI Trip
        Planner for Tailored Itineraries and Seamless Adventures Worldwide.
      </p>
      <Link to="/create-itineraries">
        <Button className="p-4 py-5 bg-green-500">Get Started.It's Free</Button>
      </Link>
      <FounderSection />
    </div>
  );
};

export default Home;
