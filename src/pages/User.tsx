import { useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDataUser } from "../redux/user/userActions";
import Loading from "../components/Layout/Spinner"

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
  console.log(`${userState.user.blog}`);

  if(userState.loading) return <Loading />
  return (
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4 ml-2">
        <Link to="/" className="hover:text-gray-500 p-2 rounded text-gray-400">
          Back To Search
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="relative p-3">
          <div className="opacity-50">
            <figure>
              <img
                className="rounded-lg"
                src={`${userState.user.avatar_url}`}
                alt=""
              />
            </figure>
          </div>
          <div className="absolute bottom-9 left-8 text-white">
            <p className="flex-grow-0">{userState.user.login}</p>
          </div>
        </div>

        <div className="col-span-2 mt-5">
          <div className="flex items-center mb-6">
            <h1 className="text-xl-1 font-bold text-white text-2xl">
              {userState.user.name}
            </h1>
            <span className="ml-5 mr-1 w-fit bg-gray-900 text-lime-700 text-sm font-bold mr-2 px-2.5 py-0.5 rounded-2xl ">
              {userState.user.type}
            </span>
            {userState.user.hireable && (
              <span className="mx-1 w-fit bg-gray-900 text-emerald-500 text-sm font-bold mr-2 px-2.5 py-0.5 rounded-2xl">
                Hireable
              </span>
            )}
          </div>
          <p className="text-white">{userState.user.bio}</p>
          <div className="mt-6">
            <a
              href={userState.user.html_url}
              className="text-white border transition border-gray-500 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:text-black hover:bg-white "
              target="_blank"
              rel="noreferrer"
            >
              Visit Github Profile
            </a>
          </div>
          <div className="flex max-sm:flex-col max-sm:items-start items-center justify-between mt-5 p-3.5 w-full rounded-lg shadow-md bg-base-100">
            {userState.user.location && (
              <div className="text-md max-lg:text-sm text-gray-500 mx-2">
                <span> Location : </span>
                <div className="text-lg max-lg:text-sm font-bold mt-1 text-white">
                  {userState.user.location}
                </div>
              </div>
            )}
            <div className="border-r-2"></div>
            {userState.user.blog && (
              <div className="text-md max-lg:text-sm max-sm:border-none max-lg:text-sm text-gray-500  max-sm:mt-1 border-l-2 border-gray-700 mx-2 px-5">
                <span> WebSite : </span>
                <div className="text-lg  max-lg:text-sm font-bold mt-1 text-white">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://${userState.user.blog}`}
                  >
                    {userState.user.blog}
                  </a>
                </div>
              </div>
            )}
            {userState.user.twitter_username && (
              <div className="text-md max-lg:text-sm max-sm:border-none text-gray-500 border-l-2 border-gray-700  max-sm:mt-1 mx-2 px-5">
                <span> Twitter : </span>
                <div className="text-lg max-lg:text-sm font-bold mt-1 text-white">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://twitter.com/${userState.user.twitter_username}`}
                  >
                    {userState.user.twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full py-5 mb-6 rounded-l shadow-md bg-base-100">
        <div className="flex max-md:flex-wrap items-center justify-between">
          <div className="flex items-center justify-between  w-full px-5">
            <div className="px-2">
              <div className="pr-5 text-gray-500 text-sm">Followers :</div>
              <div className="pr-5 text-white md:text-2xl font-bold">
                {userState.user.followers}
              </div>
            </div>
            <div className="text-secondary-600 py-1 px-4">
              <FaUsers className="text-4xl text-[#c026d3]" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full max-md:border-none border-l-2 border-gray-600 px-5 pt-2">
            <div className="px-2">
              <div className="pr-5 text-gray-500 text-sm">Following :</div>
              <div className="pr-5 text-white md:text-2xl font-bold">
                {userState.user.following}
              </div>
            </div>
            <div className="text-secondary-600 py-1 px-4 ">
              <FaUserFriends className="text-4xl text-[#c026d3]" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full max-md:border-none border-l-2 border-gray-600 px-5 pt-2">
            <div className="px-2">
              <div className="pr-5 text-gray-500 text-sm">Public Repos :</div>
              <div className="pr-5 text-white md:text-2xl font-bold">
                {userState.user.public_repos}
              </div>
            </div>
            <div className="text-secondary-600 py-1 px-4 ">
              <FaCodepen className="text-4xl text-[#c026d3]" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full max-md:border-none border-l-2 border-gray-600 px-5 pt-2">
            <div className="px-2">
              <div className="pr-5 text-gray-500 text-sm">Public gists :</div>
              <div className="pr-5 text-white md:text-2xl font-bold">
                {userState.user.public_gists}
              </div>
            </div>
            <div className="text-secondary-600 py-1 px-4">
              <FaStore className="text-4xl text-[#c026d3]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
