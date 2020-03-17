import React, { Component } from "react";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";
import swal from "sweetalert";
class itemTable extends Component {
  convertHTML = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  xoaitem = id => {
    swal({
      title: "Bạn có chắc không?",
      text: "Sau khi xóa, bạn sẽ không thể khôi phục !",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.props.deleteMovie(id);
      } else {
        swal("Thông tin của bạn an toàn!");
      }
    });
  };
  render() {
    let { movie, stt } = this.props;
    return (
      <tr>
        <td>{stt}</td>
        <td className="td-break">{this.convertHTML(movie.title)}</td>
        <td className="movie_content td-break">
          {this.convertHTML(movie.content)}
        </td>

        <td className="td-break">
          {movie.english_meaning
            ? this.convertHTML(movie.english_meaning)
            : "!#"}
        </td>
        <td className="td-break">
          {movie.Vietnamese_meaning
            ? this.convertHTML(movie.Vietnamese_meaning)
            : "!#"}
        </td>
        <td>
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
              onClick={() => {
                this.xoaitem(movie._id);
              }}
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
