import { connect } from "react-redux";
import ReviewForm from "./ReviewForm";

const mapStateToProps = state => ({
  some: state.some
});

export const parseJSON = response => response.json();

const mapDispatchToProps = dispatch => ({
  onSubmit: e => {
    fetch("http://localhost:8000/api/business", {
      method: "POST",
      body: {
        data: "some"
      }
    })
      .then(e => parseJSON(e))
      .then(function(response) {
        console.log("resp", response);
      })
      .catch(e => {
        console.log("error", e);
      });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
