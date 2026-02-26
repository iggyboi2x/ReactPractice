function ProfileCard({ name, message, handleLike, likes }) {
  return (
    <>
      <div className="ProfileCard">
        <h3>{name} Posted</h3>
        <p>{message}</p>

        <div className="likebtn-div">
          <p>
            <button className="likebtn" onClick={handleLike}>
              ❤️
            </button>
            {likes}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
