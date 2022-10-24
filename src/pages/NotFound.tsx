import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="text-center hero-content">
        <div className="max-w-lg text-white">
          <h1 className="text-6xl font-bold mb-8">Oops!</h1>
          <p className="text-3xl mb-6">404 - Page not found!</p>
          <div className="flex justify-center">
            <Link to="/" className="flex items-center bg-[#3e2057] hover:bg-[#201143] text-white font-bold py-2 px-4 rounded">
                <FaHome className="mr-2"/> back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
