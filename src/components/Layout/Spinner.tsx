// assets
import Loading from "../../assets/Spinner/spinner.gif";

const Spinner = (): JSX.Element => {
  return (
    <div className="w-100 mt-20">
      <img src={Loading} className="text-center mx-auto" width={180} alt="Loading..."/>
    </div>
  );
};

export default Spinner;
