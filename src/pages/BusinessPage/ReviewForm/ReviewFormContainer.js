import { connect } from "react-redux";
import ReviewForm from "./ReviewForm";
import createBusinessAccount from "../../../ethereum/connect";

const mapStateToProps = state => ({
  some: state.some
});

const mapDispatchToProps = dispatch => ({
  onSubmit: e => {
    createBusinessAccount(e);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
