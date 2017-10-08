import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: ""
    };
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleReviewChange(e) {
    this.setState({
      review: e.target.value
    });
  }

  handleCancel() {
    this.setState({ review: "" });
  }

  handleSubmit() {
    this.props.onSubmit(this.state.review);
    this.setState({ review: "" });
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <TextField
          hintText="Describe here the experience you had..."
          multiLine
          rows={3}
          style={{
            width: "90%"
          }}
          onChange={this.handleReviewChange}
          value={this.state.review}
        />
        <div style={{ width: "90%", textAlign: "right" }}>
          <RaisedButton
            style={{
              margin: "10px"
            }}
            label="Submit"
            primary={true}
            onTouchTap={this.handleSubmit}
            disabled={this.state.review.trim() === ""}
          />
          <RaisedButton
            style={{
              margin: "10px"
            }}
            label="Cancel"
            secondary={true}
            onTouchTap={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

ReviewForm.propTypes = {};

export default ReviewForm;
