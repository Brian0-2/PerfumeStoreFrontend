import { Toaster } from "sonner";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import LoadingSpinner from "./LoadingSpinner";

interface SonnerProps {
  [key: string]: any;
}

export default function Sonner(props: SonnerProps) {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        classNames: {
          toast: "bg-white text-gray-900 border border-gray-200 shadow-lg rounded-md p-4 flex gap-3 items-start",
          title: "font-semibold text-gray-900",
          description: "text-gray-500 ",
          actionButton: "bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition",
          cancelButton: "bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition",
          closeButton: "text-gray-400 hover:text-gray-600 transition",
        },
      }}
      icons={{
        success: <span className="text-green-500"><FaCheck /></span>,
        error: <span className="text-red-500"><FaTimes /></span>,
        warning: <span className="text-yellow-500"><IoIosWarning /></span>,
        info: <span className="text-blue-500"><FaCircleInfo /></span>,
        loading: <span className="animate-spin"><LoadingSpinner /></span>,
      }}
      {...props}
    />
  );
}
