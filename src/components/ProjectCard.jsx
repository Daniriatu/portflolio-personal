import { Col } from "react-bootstrap";

export const ProjectCard = ({ link, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
