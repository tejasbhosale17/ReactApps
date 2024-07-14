/* eslint-disable react/prop-types */
const Work = ({ work }) => {
  return (
    // <div className="card" style={{ width: "18rem" }}>
    //   <img src={work.imglink} className="card-img-top" alt="..." />
    //   <div className="card-body">
    //     <h5 className="card-title">{work.title}</h5>
    //     <p className="card-text">{work.companey}</p>
    //     <p className="card-text">{work.body}</p>
    //     <p className="card-text">{work.skills}</p>
    //     <p className="card-text">{work.duration}</p>
    //   </div>
    // </div>
    <center className="work-content-center">
      <div className="card mb-3 work">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{work.title}</h5>
              <h5 className="card-title">{work.companey}</h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                {work.body}
              </p>
              <p className="card-text">{work.skills}</p>
              <p className="card-text">{work.duration}</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={work.imglink} className="work-image" alt="work Image" />
          </div>
        </div>
      </div>
    </center>
  );
};

export default Work;
