import profile from "./assets/download.webp";

function Card() {
  return (
    <>
      <div className="card">
        <img className="card-image" src={profile} alt="image of me" />
        <h2 className="card-title">Miggy</h2>
        <p className="card-text">
          I study Information Technology and play video games
        </p>
      </div>
    </>
  );
}

export default Card;
