import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebaseService";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import InfoSection from "@/components/custom/InfoSection";
import Hotels from "@/components/custom/Hotels";
import Itinerarie from "@/components/custom/Itinerarie";
const Trip = () => {
  const [trip, setTrip] = useState([]);
  const { tripId } = useParams();

  useEffect(() => {
    GetTripData(tripId);
  }, [tripId]);

  const GetTripData = async (docId) => {
    const docRef = doc(db, "AiTrips", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      toast("No such document!");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44  xl:px-56">
      {/*Information section*/}
      <InfoSection data={trip?.userSelection} id={trip?.id} />
      {/*Hotel Plans*/}
      <Hotels data={trip?.tripData?.hotels} />
      {/*Daily plan*/}
      <Itinerarie data={trip?.tripData?.itinerary} />
      {/*Footer*/}
    </div>
  );
};

export default Trip;
