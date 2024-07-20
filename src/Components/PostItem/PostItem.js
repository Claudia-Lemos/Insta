import React, { Component } from "react";
import "./style.css";
import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  render() {
    const { postDetails } = this.props;
    const { isLiked } = this.state;

    return (
      <li className="post-list-item">
        <div className="post-profile-container">
          <img
            className="post-profile-image"
            src={postDetails.userImageURL}
            alt={postDetails.user}
          ></img>
          <p className="post-profile-username">{postDetails.user}</p>
        </div>
        <img
          src={postDetails.largeImageURL}
          alt="post"
          className="post-image"
        />
        <div className="post-details-container">
          <div className="actions-container">
            <button
              className="action-button"
              onClick={() => {
                this.setState({ isLiked: !this.state.isLiked });
              }}
            >
              {isLiked ? (
                <FcLike className="liked-icon" />
              ) : (
                <BsHeart className="action-icon like-icon" />
              )}
            </button>
            <button className="action-button">
              <FaRegComment className="action-icon" />
            </button>
            <button className="action-button">
              <BiShareAlt className="action-icon" />
            </button>
          </div>

          <p className="post-likes-count">
            {isLiked ? postDetails.likes + 1 : postDetails.likes} likes
          </p>
        </div>
      </li>
    );
  }
}

export default PostItem;
