/* eslint-disable react/prop-types */
const Project = ({ project }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.body}</p>
        <p className="card-text">{project.skills}</p>
        <a href="#" className="btn btn-primary">
          {project.link}
        </a>
      </div>
    </div>
  );
};
export default Project;
