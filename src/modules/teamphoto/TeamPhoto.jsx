import React, { useState } from "react";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import CustomModal from "../widget/CustomModal";
import { dataTeam } from "../helper/dataSkill";
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";

const TeamPhoto = () => {
  const [like, setLike] = useState(false);
  const [showModal, setModal] = useState(false);
  const [selectImg, setSelect] = useState(null);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false); // State for the overlay effect

  const handleLike = () => {
    setLike(!like);
  };

  const handleShow = (item) => {
    setModal(true);
    setSelect(item);
    setComments([]); // Reset comments for each image
    setLike(false); // Reset like for each image
    setCommentText(""); // Reset comment text for each image
    setShowCommentInput(false); // Optionally reset the comment input visibility
  };


  const handleClose = () => {
    setModal(false);
    setSelect(null);
  };

  const handleDoubleClick = () => {
    setLike(true);
    setShowOverlay(true); // Show overlay immediately
    setTimeout(() => {
      setShowOverlay(false); // Hide overlay after 1 second
    }, 1000);
  };

  const handleCommentIconClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
      <div className="row p-2 text-center">
        <div className="row">
          <h3 className="fw-bold">My Favorite Gallery</h3>
          <p className="text-secondary">
            Here are a few images. You can see more detail by clicking on an image.
          </p>
        </div>
        {dataTeam.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-4 col-sm-12 p-3">
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
                      {/* Overlay Heart Icon */}
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
                    <p className="p-2">{selectImg.desc}</p>
                    {/* Comment Input */}
                    {showCommentInput && (
                        <Form className="position-relative mx-2">
                          <Form.Control
                              type="text"
                              className="mb-2 border-0 no-focus"
                              placeholder="Write a comment..."
                              value={commentText}
                              onChange={(e) => setCommentText(e.target.value)}
                          />
                          <hr/>
                          {commentText && (
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
                    {/* Display Comments */}
                    {comments.map((comment, index) => (
                        <p key={index} className="ms-2">
                          anonymous person : {comment}
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
