function Profile({ componentNo, name, course }) {
  return (
    <>
      <div className="profilecard">
        <div className="componentNo">
          <h4>Component No.{componentNo}</h4> <br />
        </div>
        <div className="studentDetails">
          <h4>
            Name: {name} <br />
            Course: {course}
          </h4>
        </div>
      </div>
    </>
  );
}

export default Profile;
