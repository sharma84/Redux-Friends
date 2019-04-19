import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "..actions/actions";
import Friend from "./Friend";

class FriendList extends Component {
    
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        {this.props.friend.map((friend, id) => (
          <Friend key={id} friend={friend} />
        ))}
      </div>
    );
  }
}



const mapStateToProps =state => {
    return {
        friends: state.friends
    }
}



export default connect (
    mapStateToProps, {getFriends}
) (FriendList)