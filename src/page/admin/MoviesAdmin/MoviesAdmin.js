import React, { Component } from "react";
import HeaderAdmin from "./../../../components/headerAdmin/headerAdmin";
import { connect } from "react-redux";
import ItemTable from "./itemTableMovies";
import ChildModal from "./childModalMovies";
import Modalfather from "../../../components/modal/fatherModal";
import * as action from "../../../redux/action/index";
import SearchAdmin from "../../../components/SearchAdmin";
const Modal = Modalfather(ChildModal);
class MoviesAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: []
    };
  }

  componentDidMount() {
    this.props.getListMovies();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.listMovies) {
      this.setState({
        listMovies: nextProps.listMovies.result
      });
    }
  }

  renderTbody = () => {
    return this.state.listMovies.map((item, index) => (
      <ItemTable movie={item} stt={index} key={index} />
    ));
  };

  handleFilter = keyword => {
    let listMovies = this.props.listMovies.result.filter(
      item => item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );

    this.setState({ listMovies });
  };

  renderPageItem = () => {
    let numberPage = 0;
    return this.state.listMovies.map((item, index) => {
      if (index % 10 === 0) {
        numberPage++;
        return (
          <li className="page-item active" key={index}>
            <a className="page-link" href="#">
              {numberPage}
            </a>
          </li>
        );
      }
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">
                    <i
                      className="fa fa-user-circle"
                      aria-hidden="true"
                      style={{ marginRight: 10 }}
                    />
                    Movie
                  </h4>
                </div>
                <span
                  className="table-add float-right mb-3 mr-2"
                  style={{ marginTop: "1rem!important" }}
                >
                  <button
                    data-toggle="modal"
                    data-target="#modelId"
                    className="btn btn-sm iq-bg-success"
                    onClick={() => this.props.onEditMovie()}
                  >
                    <i className="ri-add-fill">
                      <span className="pl-1">Thêm movie</span>
                    </i>
                  </button>
                </span>
              </div>
              <div className="iq-card-body">
                <div id="table" className="table-editable">
                  <div className="iq-search-bar float-right mb-3 mr-2">
                    <SearchAdmin onFilter={this.handleFilter} />
                  </div>
                  <table className="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Nội dung</th>
                        <th>Hình ảnh</th>
                        <th>English</th>
                        <th>Vietnamese</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderTbody()}</tbody>
                  </table>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      {this.renderPageItem()}
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listMovies: state.deMoReducer.dataMovies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListMovies: () => {
      dispatch(action.getMoviesApiDevfast());
    },
    onEditMovie: () => {
      dispatch(action.actOnEditMovie());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesAdmin);
