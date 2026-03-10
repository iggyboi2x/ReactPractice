import { useEffect } from "react";
import UserCard from "./UserCard.jsx";

function UserList({ users }) {
  return (
    <>
      {users.map((user, index) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}
export default UserList;
