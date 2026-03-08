function UserCard({ user }) {
  return (
    <div className="UserCard">
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.city}</p>
    </div>
  );
}

export default UserCard;
