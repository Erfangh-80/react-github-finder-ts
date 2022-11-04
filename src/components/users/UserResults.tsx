import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// component
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";

interface UserState {
  loading: boolean;
  users: {
    items: object[]
  };
  error: string;
}

const UserResults = (): JSX.Element => {
  const dispatch = useDispatch();

  const usersState: UserState = useSelector((state: any) => state);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-white">
      {usersState.loading ? (
        <Spinner />
      ) : usersState.error ? (
        <p>{usersState.error}</p>
      ) : (
        usersState.users.items?.map((user: any) => (
          <UserItem key={user.id} {...user} />
        ))
      )}
    </div>
  );
};

export default UserResults;
