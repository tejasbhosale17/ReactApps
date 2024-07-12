/* eslint-disable react/prop-types */
const Work = ({ work }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{work.title}</h5>
        <p className="card-text">{work.companey}</p>
        <p className="card-text">{work.body}</p>
        <p className="card-text">{work.skills}</p>
        <p className="card-text">{work.duration}</p>
      </div>
    </div>
  );
};

export default Work;
