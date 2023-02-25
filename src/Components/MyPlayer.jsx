import {
  faPlayCircle,
  faRepeat,
  faSackDollar,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const MyPlayer = () => {
  const tracklist = useSelector((state) => state?.songsData?.tracks);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col
              xs={6}
              md={4}
              lg={2}
              className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <Row>
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faShuffle}
                  size="lg"
                />
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faSackDollar}
                  size="lg"
                />
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faPlayCircle}
                  size="lg"
                />
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faShuffle}
                  size="lg"
                />
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faRepeat}
                  size="lg"
                />
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MyPlayer;
