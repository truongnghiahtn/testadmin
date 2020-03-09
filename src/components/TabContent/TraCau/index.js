import React, { Component } from "react";
import { connect } from "react-redux";
class TraCau extends Component {
  renderDataTraCau = () => {
    return this.props.traCau.length
      ? this.props.traCau.map((item, index) => {
          return (
            <li key={index}>
              <article id={item._id} className="tc-row tc-row-content">
                <p className="tc-row--text vi">{item.fields.vi}</p>
                <p className="tc-row--text en">
                  <em
                    dangerouslySetInnerHTML={{
                      __html: item.fields.en
                    }}
                  ></em>
                  <a
                    // href={`javascript:speakTS(${item._id})`}
                    className="v"
                  >
                    <i className="fa fa-bullhorn"></i>
                  </a>
                </p>
              </article>
            </li>
          );
        })
      : "";
  };
  render() {
    return (
      <article id="tc" data-tab-name="Tra câu" className="tcTab--slide active">
        <div className="tc-page__container">
          <ul className="tc-row-list">
            {this.props.traCau ? this.renderDataTraCau() : ""}
          </ul>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    traCau: state.deMoReducer.traCau
  };
};
export default connect(mapStateToProps, null)(TraCau);
