import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

// Define PropTypes for component
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function ProjectCard({ title, description, imgUrl, url }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={url}>
          <img src={imgUrl} alt="cardImage" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
}
