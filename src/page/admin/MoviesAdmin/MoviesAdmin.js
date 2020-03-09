import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ItemTable from "./itemTableMovies";
import ChildModal from "./childModalMovies";
import Modalfather from "../../../components/modal/fatherModal";
import * as action from "../../../redux/action/index";
import SearchAdmin from "../../../components/SearchAdmin";
const Modal = Modalfather(ChildModal);

const MoviesAdmin = props => {
  const [listMovies, setListMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  useEffect(() => {
    /*     const fetchPosts = async () => {
      setLoading(true);
      const res = await props.getListMovies();
      console.log(res, 1);
      setLoading(false);
    };
    fetchPosts(); */
    props.getListMovies();
  }, []);

  useEffect(() => {
    setListMovies(props.listMovies.result);
  }, [props.listMovies.result]);

  const handleFilter = keyword => {
    let listMovies = props.listMovies.result.filter(
      item => item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    setListMovies({ listMovies });
  };

  const renderPageItem = () => {
    /* let numberPage = 0;
    return listMovies.map((item, index) => {
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
    }); */
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  let currentMovies = [];
  if (listMovies !== undefined) {
    currentMovies = listMovies.slice(indexOfFirstItem, indexOfLastItem);
  }

  const renderTbody = () => {
    if (listMovies !== undefined) {
      return listMovies.map((item, index) => (
        <ItemTable movie={item} stt={index} key={index} />
      ));
    }
  };
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
                  Phim
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
                  onClick={() => props.onEditMovie()}
                >
                  <i className="ri-add-fill">
                    <span className="pl-1">Thêm phim</span>
                  </i>
                </button>
              </span>
            </div>
            <div className="iq-card-body">
              <div id="table" className="table-editable">
                <div className="iq-search-bar float-right mb-3 mr-2">
                  <SearchAdmin onFilter={handleFilter} />
                </div>
                <table className="table table-bordered table-responsive-md table-striped text-center">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên phim</th>
                      <th>Tự đề phim</th>
                      <th>EN</th>
                      <th>VI</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>{renderTbody()}</tbody>
                </table>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    {renderPageItem()}
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
};

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
