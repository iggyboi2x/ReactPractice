function UserList({ users }) {
  return (
    <>
      {users.map((user, index) => (
        <ul>
          <li key={user.id} user={user}></li>
        </ul>
      ))}
    </>
  );
}
export default UserList;
