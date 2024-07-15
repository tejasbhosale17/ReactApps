/* eslint-disable react/prop-types */
const Project = ({ project }) => {
  return (
    /* <div className="col">
      { <div className="card project">
        <img
          src={project.imglink}
          className="project-image"
          alt="PROJECT Image"
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.body}</p>
          <p className="card-text">{project.skills}</p>
          <a href={project.link} className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div> }*/
    /*{ <center className="project-content-center">
        <div className="card mb-3 project" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  {project.body}
                </p>
                <p className="card-text">{project.skills}</p>
                <a href={project.link} className="btn btn-primary">
                  GitHub
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={project.imglink}
                className="project-image"
                alt="PROJECT Image"
              />
            </div>
          </div>
        </div>
      </center> }*/

    <div className="col">
      <div className="card shadow-sm">
        <img
          src={project.imglink}
          className="project-image"
          alt="PROJECT Image"
        />
        <title>{project.title}</title>
        <div className="card-body">
          <p className="card-text">{project.body}</p>
          <p className="card-text">{project.skills}</p>
          <a href={project.link} className="btn btn-primary">
            GitHub
          </a>
        </div>
      </div>
    </div>

    // </div>
  );
};
export default Project;
