/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Itinerarie = ({ data }) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl">Place to visit</h2>
      {data &&
        Object.entries(data).map(([key, value], index) => {
          return (
            <div key={index} className="mb-16">
              <h2 className="font-bold text-xl mt-5">Day: {index + 1}</h2>
              <p className="text-green-500 font-bold pt-2 text-lg">
                {value?.title}
              </p>
              <div>
                {value?.plan.map((place, index) => {
                  return (
                    <Link
                      key={index}
                      to={
                        "https://www.google.com/maps/search/?api=1&query=" +
                        place?.name
                      }
                      target="_blank"
                    >
                      <div className="p-2 mt-5 border rounded-lg hover:shadow-lg flex flex-col items-start gap-1 justify-between">
                        <p className="text-yellow-600 font-mono">
                          Timing: 🕑{place?.time}
                        </p>
                        <h2 className="font-bold text-lg mt-5">
                          <span className="bg-red-500 text-xl rounded-full">
                            🚶‍➡️
                          </span>
                          {" " + place?.name}
                        </h2>
                        <p className="text-gray-500 font-mono pt-2">
                          {place?.details}
                        </p>
                        <p className=" bg-gray-200 p-1 rounded-full text-gray-500 px-1">
                          Price: 💰 {place?.ticket_pricing}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Itinerarie;
