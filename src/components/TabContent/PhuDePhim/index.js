import React, { Component } from "react";
import { connect } from "react-redux";
class PhuDePhim extends Component {
  renderDataPhuDePhim = () => {
    return this.props.phuDePhim.subtitles
      ? this.props.phuDePhim.subtitles.map((item, index) => {
          return (
            <li key={index}>
              <article id={item._id} className="tc-row tc-row-content">
                <div>
                  <img
                    className="lazy initial loaded"
                    data-src={
                      "https://tracau.vn/resources/posters/thumbnails/" +
                      item.fields.thumbnail +
                      ".jpg"
                    }
                    width="68px"
                    height="101px"
                    src={
                      "https://tracau.vn/resources/posters/thumbnails/" +
                      item.fields.thumbnail +
                      ".jpg"
                    }
                    data-was-processed="true"
                  />
                </div>
                <p className="tc-row--text vi">{item.fields.vi}</p>
                <p
                  className="tc-row--text en"
                  dangerouslySetInnerHTML={{ __html: item.fields.en }}
                ></p>
                <p>{item.movie_title}</p>
                <button>Xem trích dẫn</button>
                <div
                  dangerouslySetInnerHTML={{ __html: item.fields.snippet }}
                ></div>
              </article>
            </li>
          );
        })
      : "";
  };
  render() {
    return (
      <div>
        <ul className="tc-row-list">
          {this.props.phuDePhim ? this.renderDataPhuDePhim() : ""}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    phuDePhim: state.deMoReducer.phuDePhim
  };
};
export default connect(mapStateToProps, null)(PhuDePhim);
