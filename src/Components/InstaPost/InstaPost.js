import React, { Component } from "react";
import "./style.css";
import Loader from "react-loader-spinner";
import PostItem from "../PostItem/PostItem";
import { FaSearch } from "react-icons/fa";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class InstaPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      postResults: [],
      apiStatus: apiStatusConstants.initial,
      searchInput: "",
    };
  }

  componentDidMount() {
    this.getInstaPosts();
  }

  onTryAgain = () => this.getInstaPosts();

  renderInstaPostsFailureView = () => {
    return (
      <div className="failure-container">
        <img
          className="failure-alert-icon"
          src="https://tse2.mm.bing.net/th?id=OIP.piffVI2qn6QZEyrx5r_ZqwHaFj&pid=Api&P=0&h=180"
          alt="failure alert"
        />
        <p className="failure-disc">Something went wrong. Please try again</p>
        <button className="failure-retry-button" onClick={this.onTryAgain}>
          Try again
        </button>
      </div>
    );
  };

  renderInstaPostsLoaderView = () => {
    return (
      <div className="loader-container">
        <Loader type="TailSpin" height={100} width={100} color="gray" />
      </div>
    );
  };

  renderInstaPostsSuccess = () => {
    const { postResults } = this.state;
    console.log(postResults);
    return (
      <ul>
        {postResults.map((post) => {
          return <PostItem key={post.id} postDetails={post} />;
        })}
      </ul>
    );
  };

  renderInstaPostsSwitch = () => {
    switch (this.state.apiStatus) {
      case apiStatusConstants.success:
        return this.renderInstaPostsSuccess();
      case apiStatusConstants.failure:
        return this.renderInstaPostsFailureView();
      case apiStatusConstants.inProgress:
        return this.renderInstaPostsLoaderView();
      default:
        return null;
    }
  };

  getInstaPosts = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const url =
      "https://pixabay.com/api/?key=37174385-5b3a05820e1a9a74a0ee55daa&image_type=photo&pretty=true";
    const options = { method: "GET" };

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        allPosts: data.hits,
        apiStatus: apiStatusConstants.success,
        postResults: data.hits,
      });
    } else this.setState({ apiStatus: apiStatusConstants.failure });
  };

  onSerachInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  onSearchButtonClicked = () => {
    const { searchInput, allPosts } = this.state;
    const filteredPosts = allPosts.filter((post) =>
      post.user.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ postResults: filteredPosts });
  };

  render() {
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="search-container">
            <input
              type="search"
              placeholder="Search User"
              className="search-input-field"
              value={this.state.searchInput}
              onChange={this.onSerachInput}
            />
            <div className="search-icon-container">
              <button
                className="search-icon-button"
                onClick={this.onSearchButtonClicked}
              >
                <FaSearch className="search-icon" />
              </button>
            </div>
          </div>
          {this.renderInstaPostsSwitch()}
        </div>
      </div>
    );
  }
}
export default InstaPost;
