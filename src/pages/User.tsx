import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDataUser } from "../redux/user/userActions";

type User = {
  name: string;
  type: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  twitter_username: string;
  login: string;
  html_url: string;
  followers: string;
  following: string;
  public_repos: string;
  public_gists: string;
  hireable: string;
};

interface UserState {
  loading: Boolean;
  user: User;
  error: string;
}

const User = () => {
  const params = useParams();
  const login: string | undefined = params.login;
  const dispatch = useDispatch();

  const userState: UserState = useSelector((state: any) => state.userState);

  useEffect(() => {
    dispatch(fetchDataUser(login));
  }, [dispatch, login]);
  console.log(userState);
  
  return (
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link
          to="/"
          className="bg-gray-600 hover:bg-gray-600 p-2 rounded text-gray-400"
        >
          Back To Search
        </Link>
      </div>

      {/* <div className="custom-card-image mb-6 md:mb-0">
        <div className="rounded-lg shadow-xl card image-full">
          <figure>
            <img
              className="rounded-lg"
              src={userState.user.avatar_url}
              alt=""
            />
          </figure>
          <div className=" justify-end">
            <h2 className="card-title mb-0">{userState.user.name}</h2>
            <p className="flex-grow-0">{userState.user.login}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default User;
