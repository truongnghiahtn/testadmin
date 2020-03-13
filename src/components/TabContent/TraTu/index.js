import React, { Component, Fragment } from "react";
import * as $ from "jquery";
import { connect } from "react-redux";

class TraTu extends Component {
  componentDidMount() {
    if (this.props.id === "dict_ev" || this.props.id === "dict_aa") {
      let ico = `<i class="fa fa-bullhorn"></i>`;
      let aTagUS = document.createElement("a");
      aTagUS.classList.add("us");
      aTagUS.innerHTML = ico;
      aTagUS.href = `javascript:speakTS('${this.props.word}', 'us');`;

      let aTagUK = document.createElement("a");
      aTagUK.classList.add("uk");
      aTagUK.innerHTML = ico;
      aTagUK.href = `javascript:speakTS('${this.props.word}', 'uk');`;
      $("#" + this.props.id + " .dict--title")[0].append(aTagUS);
      $("#" + this.props.id + " .dict--title")[0].append(aTagUK);
    }
  }

  renderDataHTML = () => {
    return (
      <div
        className="tcTab--slidesContainer"
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      ></div>
    );
  };
  render() {
    return <Fragment>{this.renderDataHTML()}</Fragment>;
  }
}
const mapStateToProps = state => {
  return {
    word: state.deMoReducer.word
  };
};
export default connect(mapStateToProps, null)(TraTu);
