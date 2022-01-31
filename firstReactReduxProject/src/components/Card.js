import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCard, fetchUser } from "../actions/cardActions";

class Card extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  // onButtonClick = () => {
  //   let { id } = this.props.crd;
  //   this.props.deleteCard(id);
  //   this.props.history.push("/contact"); //card silindikten sonra cantact'e yönleniyor..
  // };

  render() {
    //console.log(this.props.users)
    const { users } = this.props;
    //const { title, body } = this.props.crd;
    //return (
    // <div
    //   className="ui raised very padded text container segment"
    //   style={{ marginTop: "70px" }}
    // >
    //   <h3 className="ui header">{title}</h3>
    //   <p>{body}</p>
    //   <button
    //     className="ui primary right floated button"
    //     onClick={this.onButtonClick}
    //   >
    //     Delete
    //   </button>
    // </div>
    //);
    return users.map((u) => {
      return (
        <div
          className="ui raised very padded text container segment"
          style={{ marginTop: "70px" }}
          key={u.id}
        >
          <h3 className="ui header">{u.name}</h3>
          <p>{u.email}</p>
        </div>
      );
    });
  }
}

const mapStateToProps = (state, ownProps) => {
 // let title = ownProps.match.params.user;
  return {
   // crd: state.cards.find((c) => c.title === title),
    users: state.users,//thunk
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {dispatch(deleteCard(id))},
    fetchUser: () => {dispatch(fetchUser())},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

//url params konusu unutma ,react redux ile yapımı..
