import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import ItemTable from "./itemTableMovies";
import ChildModal from "./childModalMovies";
import Modalfather from "../../../components/modal/fatherModal";
import * as action from "../../../redux/action/index";
import SearchAdmin from "../../../components/SearchAdmin";
import Pagination from "../../../components/Pagination/index";
const Modal = Modalfather(ChildModal);

const MoviesAdmin = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPagination, setShowPagination] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    /*          const fetchPosts = async () => {
      setLoading(true);
      const res = await props.getListMovies(currentPage);
      console.log(res, 1);
      setLoading(false);
    };
    fetchPosts();  */
    setLoading(true);
    props.getListMovies(currentPage);
    setTimeout(() => {
      setLoading(false);
    }, 150);
  }, [currentPage]);

  useEffect(() => {
    setData(props.listMovies);
  }, [props.listMovies]);

  const convertHTML = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const handleFilter = keyword => {
    let dataUpdate = { ...data };
    dataUpdate.result = props.listMovies.result.filter(
      item =>
        convertHTML(item.title)
          .toLowerCase()
          .indexOf(keyword.toLowerCase()) > -1
    );
    setData(dataUpdate);
  };

  const isEmpty = obj => {
    return !obj || Object.keys(obj).length === 0;
  };

  const renderTbody = () => {
    if (!isEmpty(data)) {
      return data.result.map((item, index) => (
        <ItemTable
          movie={item}
          stt={index + data.pagination.minIndex + 1}
          key={index}
        />
      ));
    }
  };

  const paginate = number => {
    setCurrentPage(number);
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
                    className="fa fa-film"
                    aria-hidden="true"
                    style={{ marginRight: 10 }}
                  />
                  Quản lý phim
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
                      <th>Tựa đề phim</th>
                      <th>EN</th>
                      <th>VI</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  {loading ? (
                    <div className="indicator">
                      <svg width="16px" height="12px">
                        <polyline
                          id="back"
                          points="1 6 4 6 6 11 10 1 12 6 15 6"
                        />
                        <polyline
                          id="front"
                          points="1 6 4 6 6 11 10 1 12 6 15 6"
                        />
                      </svg>
                    </div>
                  ) : (
                    <tbody className="fadeIn animated">{renderTbody()}</tbody>
                  )}
                </table>
                {isEmpty(data) ? (
                  ""
                ) : showPagination ? (
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li
                        className="page-item"
                        onClick={() => {
                          paginate(currentPage > 1 ? currentPage - 1 : 1);
                        }}
                      >
                        <a className="page-link" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>

                      <Pagination
                        itemPerPage={data.pagination.itemPerPage}
                        totalItem={data.pagination.totalItem}
                        paginate={paginate}
                        numberPage={currentPage}
                      />

                      <li
                        className="page-item"
                        onClick={() => {
                          paginate(
                            currentPage <
                              Math.ceil(
                                data.pagination.totalItem /
                                  data.pagination.itemPerPage
                              )
                              ? currentPage + 1
                              : Math.ceil(
                                  data.pagination.totalItem /
                                    data.pagination.itemPerPage
                                )
                          );
                        }}
                      >
                        <a className="page-link" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                ) : (
                  ""
                )}
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
    getListMovies: id => {
      dispatch(action.getMoviesApiDevfast(id));
    },
    onEditMovie: () => {
      dispatch(action.actOnEditMovie());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesAdmin);
