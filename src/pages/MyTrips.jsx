import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCard from "@/components/custom/UserTripCard";
const MyTrips = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    GetTrips();
  }, []);

  const GetTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }

    const q = query(
      collection(db, "AiTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    setTrips([]);
    querySnapshot.forEach((doc) => {
      setTrips((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 relative  mt-10 h-screen">
      <h1 className="font-bold text-3xl">My Trips</h1>
      {trips.length == 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/pendulum.gif" alt="loading" className="w-72 h-72" />
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-5">
        {trips.map((data, index) => (
          <UserTripCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
