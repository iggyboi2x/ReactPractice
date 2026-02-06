function UserGreeting(props) {
  const welcomeMessage = (
    <h2
      className="welcome-user"
      style={{
        padding: "30px",
        backgroundColor: "lightgreen",
        color: "green",
      }}
    >
      Welcome,{props.username}{" "}
    </h2>
  );
  const loginMessage = (
    <h2
      className="login-user"
      style={{
        padding: "30px",
        backgroundColor: "lightcoral",
        color: "darkred",
      }}
    >
      Guest,Please login first{" "}
    </h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginMessage;
}

export default UserGreeting;
