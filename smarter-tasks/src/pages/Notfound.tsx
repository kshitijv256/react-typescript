import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full flex flex-col px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          404 Not Found
        </h2>
        <Link
          to="/"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-center"
        >
          {"<-"} Go To Home
        </Link>
      </div>
    </div>
  );
}
