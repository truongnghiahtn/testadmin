import React, { Component } from "react";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";

class itemTable extends Component {
  convertHTML = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  render() {
    let { movie, stt } = this.props;
    return (
      <tr>
        <td>{stt}</td>
        <td>{this.convertHTML(movie.title)}</td>
        <td className="movie_content">{this.convertHTML(movie.content)}</td>
        <td>{this.convertHTML(movie.content)}</td>
        <td>
          <img
            src={movie.image}
            alt=""
            style={{ width: "100px", height: "70px" }}
          />
        </td>
        <td className="content_en">
          {this.convertHTML(movie.english_meaning)}
        </td>
        <td className="content_en">
          {this.convertHTML(movie.Vietnamese_meaning)}
        </td>
        <td className="content_en">
          <span className="table-remove">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modelId"
              className="btn btn-warning mb-3"
              onClick={() => this.props.editMovie(movie)}
            >
              <i className="fa fa-wrench" aria-hidden="true" />
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-danger mb-3"
              onClick={() => this.props.deleteMovie(movie._id)}
            >
              <i className="ri-delete-bin-2-fill pr-0" />
              Xóa
            </button>
          </span>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editMovie: data => {
      dispatch(action.actGetEditMovie(data));
    },
    deleteMovie: id => dispatch(action.actDelMovieAPI(id))
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
