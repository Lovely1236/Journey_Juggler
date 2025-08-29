import { Button } from "../ui/button";
import { TbLocationShare } from "react-icons/tb";
import { VITE_FRONTENT_URL } from "@/utils/constent";
import { toast } from "sonner";
/* eslint-disable react/prop-types */
const InfoSection = ({ data, id }) => {
  const copyToClipboard = () => {
    // The text you want to copy
    const textToCopy = `${VITE_FRONTENT_URL}/trip/${id}`;

    // Create a temporary textarea element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    // Optional: Notify the user that the text has been copied
    toast.success("URL copied to clipboard!");
  };
  return (
    <div>
      <img
        src="/PlaceHolder.jpg"
        alt="logo"
        className=" h-[300px] w-full object-cover rounded-xl"
      />
      <div className="my-5 flex-col gap-2">
        <h2 className="font-bold text-2xl m-2">{data?.destination}</h2>
        <div className="flex justify-between">
          <div className="flex gap-5 flex-wrap items-center">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              🗓️ {data?.days} days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              💰 {data?.budget}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              🛫 No. of travelers: {data?.travelWith}
            </h2>
          </div>
          <Button>
            <TbLocationShare
              onClick={copyToClipboard}
              className="font-bold text-lg"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
