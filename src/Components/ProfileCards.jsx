import ProfileImgDummy from "../assets/ProfileImgDummy.png";
import AddMemories from "./AddMemories";

function ProfileCards() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="rounded p-3"
      >
        <label style={{ cursor: "pointer" }}>
          <input type="file" style={{ display: "none" }} />
          <img
            height={"200px"}
            width={"200px"}
            className="img-fluid rounded-circle cursor-pointer"
            src={ProfileImgDummy}
            alt="Upload image"
          />
        </label>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            className="form-control w-75 mt-3"
            placeholder="Enter you name here"
          />
          <input
            type="text"
            className="form-control w-75 mt-3"
            placeholder="Enter your Place"
          />
        </div>
        <button className="btn btn-warning mt-3 w-75">Update</button>
        <AddMemories />
      </div>
    </>
  );
}

export default ProfileCards;
