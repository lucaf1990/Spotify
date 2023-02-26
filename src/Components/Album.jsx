import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";
import { ALL_TRACKS, HAS_ERROR, IS_LOADING, PLAY_ALBUM } from "../Redux/Action";
import { useEffect } from "react";
import Loading from "./Loading";
import OnLoadErorr from "./OnLoadError";

const Album = () => {
  const specific = useSelector((state) => state?.songsData?.specificCard);
  const isLoading = useSelector((state) => state?.songsData?.isLoading);
  const tracklist = useSelector((state) => state?.songsData?.tracks);
  const hasError = useSelector((state) => state?.songsData?.hasError);
  const dispatch = useDispatch();
  function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  const handleClick = () => {
    dispatch({
      type: PLAY_ALBUM,
      payload: tracklist,
    });
  };
  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        let res = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/album/${specific.album.id} `
        );
        if (res.ok) {
          let data = await res.json();
          console.log(data);
          dispatch({
            type: ALL_TRACKS,
            payload: data,
          });
          dispatch({
            type: IS_LOADING,
          });
        } else {
          dispatch({
            type: IS_LOADING,
          });
          dispatch({
            type: HAS_ERROR,
          });
        }
      } catch (error) {
        dispatch({
          type: IS_LOADING,
        });
        dispatch({
          type: HAS_ERROR,
        });
      }
    };
    fetchAlbum();
  }, []);

  return (
    <div>
      <Container className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="mb-3">
          <Col md={12} className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>

          {isLoading ? (
            <Loading />
          ) : hasError ? (
            <OnLoadErorr />
          ) : (
            <>
              <Row className="mb-3 d-flex">
                <Col
                  md={12}
                  className=" ms-5 pt-5 text-center"
                  id="img-container"
                >
                  <img
                    className="sticky-top mt-5"
                    style={{ top: "50px" }}
                    src={specific?.album?.cover_medium}
                    alt={specific?.album?.title_short}
                  />
                  <p className="sticky-top mt-3">{specific?.album?.title}</p>
                  <p className="sticky-top " style={{ top: "20px" }}>
                    {specific?.artist?.name}
                  </p>
                  <Button
                    style={{
                      borderRadius: "40px",
                      backgroundColor: "#28a745",
                      width: "160px",
                      height: "50px",
                      color: "white",
                      marginTop: "10px",
                      fontSize: "1em",
                      fontWeight: "bold",
                      position: "fixed",
                      left: "360px",
                    }}
                    onClick={handleClick}
                    class="btn"
                  >
                    Play
                  </Button>
                </Col>{" "}
              </Row>
              <Row style={{ marginLeft: "50px" }}>
                <Col md={12} className="px-md-5">
                  {tracklist.tracks?.data.map((title) => (
                    <Row
                      key={title.id}
                      className="mb-5 mt-2 m-5"
                      id="trackList"
                    >
                      <Col xs={11}> {title.title} </Col>
                      <Col xs={1}>{formatDuration(title.duration)} </Col>
                    </Row>
                  ))}
                </Col>
              </Row>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Album;
