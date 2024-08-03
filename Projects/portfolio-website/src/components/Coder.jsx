import profileImage from "../assets/coder/leetcode_profile_ss.png";
import hackerRankImg from "../assets/coder/hackerRank_profile_ss.png";
const Coder = () => {
  const profileUrl = "https://leetcode.com/your-username/";

  return (
    <div className="coder" style={{ marginTop: "5%" }}>
      <h2>My LeetCode Profile</h2>
      <div
        className="container text-center"
        style={{ marginTop: "100px", width: "80%" }}
      >
        <div className="row">
          <div className="col-7">
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={profileImage}
                alt="LeetCode Profile"
                style={{
                  padding: "0 50px",
                  width: "100%",
                  maxWidth: "1000px",
                  border: "1px solid #ddd",
                }}
              />
            </a>
          </div>
          <div className="col-5">
            <div className="hackerrank">
              <a href={profileUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={hackerRankImg}
                  alt="HackerRank Profile"
                  style={{
                    padding: "0 50px",
                    width: "100%",
                    maxWidth: "1000px",
                    border: "1px solid #ddd",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coder;
