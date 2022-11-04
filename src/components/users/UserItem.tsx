import { Link } from "react-router-dom";

interface UserProfile {
  avatar_url: string;
  login: string;
}

const UserItem = ({ login, avatar_url }: UserProfile): JSX.Element => {
  return (
    <div className="shadow-md compact side bg-base-100 rounded-lg">
      <div className="flex items-center py-5">
        <div>
          <div className="px-5">
            <div className="shadow w-14 h-14">
              <img
                className="rounded-full"
                src={`${avatar_url}`}
                alt="avatar user"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="py-1 font-bold">{login}</h2>
          <Link className="text-gray-500 text-sm" to={`/users/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
