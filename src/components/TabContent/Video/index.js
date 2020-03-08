import React, { Component } from "react";
import { connect } from "react-redux";
class Video extends Component {
  renderYoutubeTab = () => {
    return this.props.video.length
      ? this.props.video.map((item, index) => {
          return (
            <div key={index}>
              <iframe
                allowFullScreen
                src={"https://www.youtube.com/embed/" + item.fields.youtube_id}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                width="100%"
                height="900"
              ></iframe>
            </div>
          );
        })
      : "";
  };
  render() {
    return <div>{this.renderYoutubeTab()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    video: state.deMoReducer.video
  };
};

export default connect(mapStateToProps, null)(Video);
