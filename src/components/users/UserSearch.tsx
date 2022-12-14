import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../../redux/alert/alertActions";
import { fetchClearData, fethDataUsers } from "../../redux/users/usersActions";
import Alert from "../Layout/Alert";

type UserSearch = {
  items: [];
};

const UserSearch = (): JSX.Element => {
  const [text, setText] = useState("");
  const users: UserSearch = useSelector((state: any) => state.usersState.users);
  const alert = useSelector((state: any) => state)
  const dispatch = useDispatch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text !== "") {
      dispatch(fethDataUsers(text));
    } else {
      dispatch(showAlert("Please enter something"))
    }
  };

  const clearUserData = () => {
    dispatch(fetchClearData());
    setText("");
  };

  return (
    <>
      { alert?.alertState && <Alert />}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-6 gap-8 ">
        <div>
          <form onSubmit={submitHandler}>
            <div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 pl-8 py-2 bg-gray-200 text-black rounded-lg active:outline-none"
                  placeholder="search..."
                  value={text}
                  onChange={changeHandler}
                />
                <button
                  type="submit"
                  className="absolute text-white top-0 right-0 rounded-r rounded-l-none w-20 py-2 bg-[#191d24]"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.items?.length > 0 && (
          <div>
            <button
              onClick={clearUserData}
              className="bg-ghost text-white text-lg"
            >
              clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserSearch;
