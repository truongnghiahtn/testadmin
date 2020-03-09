import React, { Component } from "react";
import { connect } from "react-redux";
import * as $ from "jquery";
class PhuDePhim extends Component {
  snippet = id => {
    $(`#snippet-${id}`).toggleClass("sn-hide");
  };
  renderDataPhuDePhim = () => {
    return this.props.phuDePhim.subtitles
      ? this.props.phuDePhim.subtitles.map((item, index) => {
          return (
            <li className="movie-quote" key={index}>
              <article id={item._id} className="tc-row tc-row-content">
                <table>
                  <tbody>
                    <tr>
                      <td valign="top" style={{ width: "75px" }}>
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
                      </td>
                      <td valign="top">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div className="mq-sentences">
                                  <p className="tc-row--text vi">
                                    {item.fields.vi}
                                  </p>
                                  <p
                                    className="tc-row--text en"
                                    dangerouslySetInnerHTML={{
                                      __html: item.fields.en
                                    }}
                                  ></p>
                                  <small className="tc-row--text movie-title">
                                    {item.fields.movie_title}
                                  </small>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <button
                                  onClick={() => {
                                    this.snippet(item._id);
                                  }}
                                  class="bttn bttn-default"
                                >
                                  Xem trích dẫn
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr id={"snippet-" + item._id} className="sn-hide">
                      <td></td>
                      <td>
                        <div
                          className="snippet"
                          dangerouslySetInnerHTML={{
                            __html: item.fields.snippet
                          }}
                        ></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </li>
          );
        })
      : "";
  };
  render() {
    return (
      <article
        id="dict_movie_quotes"
        data-tab-name="Phụ đề phim"
        class="tcTab--slide"
      >
        <div className="tcTab--slidesContainer">
          <div className="tc-page__container">
            <ul className="tc-articlelist list-unstyled">
              {this.props.phuDePhim ? this.renderDataPhuDePhim() : ""}
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    phuDePhim: state.deMoReducer.phuDePhim
  };
};
export default connect(mapStateToProps, null)(PhuDePhim);
