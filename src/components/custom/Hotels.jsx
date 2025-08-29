/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const Hotels = ({ data }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-5">Hotel recomendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {data?.map((hotel, index) => {
          return (
            <Link
              key={index}
              to={
                "https://www.google.com/maps/search/?api=1&query=" +
                hotel?.name +
                "," +
                hotel?.address
              }
              target="_blank"
            >
              <div className="p-2 mt-5 border rounded-lg hover:shadow-lg flex flex-col gap-3 justify-between">
                <h2 className="text-green-500 font-bold">🏨 {hotel?.name}</h2>
                <h2 className="text-gray-500 text-xs md:text-sm">
                  {hotel?.description?.split(" ")?.slice(0, 14)?.join(" ")}
                </h2>
                <h2 className="text-xs md:text-sm">📍{hotel?.address}</h2>
                <span className="flex gap-4">
                  <h2 className="bg-gray-200 rounded-full px-1 text-gray-500 text-xs md:text-sm">
                    💸 {hotel?.price}
                  </h2>
                  <h2 className="bg-gray-200 rounded-full px-1 text-gray-500 text-xs md:text-sm">
                    🌟 {hotel?.rating}
                  </h2>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;
