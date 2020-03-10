import React, { Component } from "react";
import { connect } from "react-redux";
class Video extends Component {
  renderYoutubeTab = () => {
    return this.props.video.length
      ? this.props.video.map((item, index) => {
          return (
            <div id="youtube-tab" key={index}>
              <div className="youtube-container">
                <div className="iframe-wrapper">
                  <iframe
                    allowFullScreen
                    src={
                      "https://www.youtube.com/embed/" + item.fields.youtube_id
                    }
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    width="100%"
                    height="900"
                  ></iframe>
                </div>
              </div>
              {/* <div className="youtube-controls player-button large">
                <i className="fa fa-angle-double-left player-button large"></i>
                <i className="fa fa-undo player-button large"></i>
                <i className="fa fa-pause player-button xlarge"></i>
                <i className="fa fa-redo player-button large"></i>
                <i className="fa fa-angle-double-right player-button large"></i>
                <div className="toggle-transcript player-button large">
                  <i className="fa fa-tv player-button"></i>
                </div>
              </div> */}
              <div
                className="youtube-transcript"
                style={{ display: "none" }}
              ></div>
              <div className="youtube-caption">
                <div className="text">
                  down onto the table here yeah and start showing them it's very
                  technical what
                </div>
              </div>
            </div>
          );
        })
      : "";
  };
  render() {
    return (
      <article id="dict_yg" data-tab-name="Video" class="tcTab--slide">
        <div className="tc-page__container">
          <div className="dict--content">{this.renderYoutubeTab()}</div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    video: state.deMoReducer.video
  };
};

export default connect(mapStateToProps, null)(Video);
