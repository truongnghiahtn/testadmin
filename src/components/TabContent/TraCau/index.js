import React, { Component } from "react";
import { connect } from "react-redux";

class TraCau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  componentDidMount() {
    let script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "/assets/js/audio.js");
    document.getElementById("root").after(script);
  }

  playAudio = url => {
    if (!this.state.isPlaying) {
      let sound = document.getElementById("sound");
      sound.setAttribute("src", url);
      sound.play();
      this.setState({
        isPlaying: true
      });
    } else {
      this.stopAudio();
    }
  };

  stopAudio = () => {
    let sound = document.getElementById("sound");
    sound.pause();
    sound.currentTime = 0;
    this.setState({
      isPlaying: false
    });
  };

  renderDataTraCau = () => {
    return this.props.traCau.length
      ? this.props.traCau.map((item, index) => {
          return (
            <li key={index}>
              <article id={item._id} className="tc-row tc-row-content">
                <p
                  className="tc-row--text vi"
                  dangerouslySetInnerHTML={{
                    __html: item.fields.vi
                  }}
                ></p>
                <p className="tc-row--text en">
                  <em
                    dangerouslySetInnerHTML={{
                      __html: item.fields.en
                    }}
                  ></em>
                  {item.fields.audio ? (
                    <a
                      onClick={() => {
                        this.playAudio(
                          `http://27.71.233.139:3001/${item.fields.audio}`
                        );
                      }}
                      className="v"
                    >
                      <i className="fa fa-bullhorn"></i>
                    </a>
                  ) : (
                    <a
                      href={
                        item._id.length < 20
                          ? `javascript:speakTS(${item._id})`
                          : `javascript:speakTS("${item.fields.en.replace(
                              /<|\/|em>/g,
                              ""
                            )}",'us')`
                      }
                      onClick={this.stopAudio}
                      className="v"
                    >
                      <i className="fa fa-bullhorn"></i>
                    </a>
                  )}
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
        <audio id="sound" src=""></audio>
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
