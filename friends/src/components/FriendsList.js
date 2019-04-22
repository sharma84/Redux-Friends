import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getData } from "../actions";
import Loader from "react-loader-spinner";

class FriendsList extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.fetchingFriends)
      return (
        <div>
          <Loader type="Puff" color="#ffffff" height="100" width="100" />
        </div>
      );
    return (
      <div className="friends">
        <h2>Friends List</h2>
        {this.props.friends.map((friend) => {
          return (
            <div className="friend">
              <h4>Name: {friend.name}</h4>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
  friends,
  fetchingFriends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(FriendsList)
);
