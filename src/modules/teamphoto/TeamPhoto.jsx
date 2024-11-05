import React, { useState, useMemo, useRef } from "react";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import CustomModal from "../widget/CustomModal";
import { dataTeam } from "../helper/dataSkill";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const TeamPhoto = () => {
  const [like, setLike] = useState(false);
  const [showModal, setModal] = useState(false);
  const [selectImg, setSelect] = useState(null);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isCommentText, setIsCommentText] = useState(false);

  const commentTextRef = useRef(""); // Ref to track comment text
  const inputRef = useRef(null); // Ref to control the input field directly

  const handleLike = () => {
    setLike((prev) => !prev);
  };

  const handleShow = (item) => {
    setModal(true);
    setSelect(item);
    setComments([]);
    setLike(false);
    commentTextRef.current = "";
    setIsCommentText(false);
    setShowCommentInput(false);
  };

  const handleClose = () => {
    setModal(false);
    setSelect(null);
  };

  const handleDoubleClick = () => {
    setLike(true);
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 1000);
  };

  const handleCommentIconClick = () => {
    setShowCommentInput((prev) => !prev);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentTextRef.current.trim()) {
      setComments((prevComments) => [...prevComments, commentTextRef.current]);
      commentTextRef.current = "";
      setIsCommentText(false);

      // Clear the input field
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleCommentChange = (e) => {
    commentTextRef.current = e.target.value;
    setIsCommentText(!!e.target.value.trim());
  };

  const selectedImageDescription = useMemo(() => selectImg?.desc, [selectImg]);

  return (
      <div className="row text-center mb-5">
        <div className="row">
          <h3 className="fw-bold">My Favorite Gallery</h3>
          <p className="text-secondary">
            Here are a few images. You can see more detail by clicking on an image.
          </p>
        </div>
        {dataTeam.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 p-3">
              <img
                  className="img-hover w-100 h-100 rounded-4"
                  src={item.image}
                  alt={item.title}
                  onClick={() => handleShow(item)}
              />
            </div>
        ))}
        {selectImg && (
            <CustomModal
                show={showModal}
                onHide={handleClose}
                body={
                  <div>
                    <div
                        className="position-relative"
                        onDoubleClick={handleDoubleClick}
                        style={{ cursor: "pointer" }}
                    >
                      <img
                          src={selectImg.image}
                          alt={selectImg.title}
                          className="w-100 rounded-3"
                      />
                      {showOverlay && (
                          <FaHeart
                              className="text-danger position-absolute top-50 start-50 translate-middle"
                              style={{ fontSize: "4rem", opacity: 0.8 }}
                          />
                      )}
                    </div>
                    <div className="m-3 d-flex justify-content-start align-items-center">
                      <FaHeart
                          onClick={handleLike}
                          className={`${like ? "text-danger" : "text-dark"} fs-3`}
                          style={{ cursor: "pointer" }}
                      />
                      <FaRegComment
                          className="fs-3 mx-3"
                          style={{ cursor: "pointer" }}
                          onClick={handleCommentIconClick}
                      />
                      <Link
                          className="nav-link"
                          to="https://www.facebook.com/sharer/sharer.php?u=https://john-rith-portfolio.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <RiShareForwardFill className="fs-3" style={{ cursor: "pointer" }} />
                      </Link>
                    </div>
                    <p className="p-2">{selectedImageDescription}</p>
                    {showCommentInput && (
                        <Form className="position-relative mx-2" onSubmit={handleCommentSubmit}>
                          <Form.Control
                              type="text"
                              className="mb-2 border-0 no-focus"
                              placeholder="Write a comment..."
                              onChange={handleCommentChange}
                              ref={inputRef} // Attach the input ref
                          />
                          <hr />
                          {isCommentText && (
                              <p
                                  className="position-absolute top-0 end-0 align-items-center mt-1 text-primary fw-bold"
                                  onClick={handleCommentSubmit}
                                  style={{ cursor: "pointer" }}
                              >
                                Sent
                              </p>
                          )}
                        </Form>
                    )}
                    {comments.map((comment, index) => (
                        <p key={index} className="ms-2">
                          anonymous person: {comment}
                        </p>
                    ))}
                  </div>
                }
            />
        )}
      </div>
  );
};

export default TeamPhoto;
