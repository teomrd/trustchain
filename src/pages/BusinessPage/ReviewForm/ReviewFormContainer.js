import { connect } from "react-redux";
import ReviewForm from "./ReviewForm";

const mapStateToProps = state => ({
  some: state.some
});

const mapDispatchToProps = dispatch => ({
  onSubmit: e => {
    console.log("onSubmit", e);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
