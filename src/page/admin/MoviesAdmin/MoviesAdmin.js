import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import ItemTable from "./itemTableMovies";
import ChildModal from "./childModalMovies";
import Modalfather from "../../../components/modal/fatherModal";
import * as action from "../../../redux/action/index";
import SearchAdmin from "../../../components/SearchAdmin";
import Pagination from "../../../components/Pagination/index";
import TestPagination from "../../../components/Pagination/TestPagination";
import Axios from "axios";
import { apiDevFast } from "../../../utils/config";
const Modal = Modalfather(ChildModal);

const MoviesAdmin = props => {
  const [data, setData] = useState({ pagination: {}, result: [] });
  const [loading, setLoading] = useState(false);
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
    /*     let dataUpdate = { ...data };
    dataUpdate.result = props.listMovies.result.filter(
      item =>
        convertHTML(item.title)
          .toLowerCase()
          .indexOf(keyword.toLowerCase()) > -1
    );
    setData(dataUpdate); */

    return Axios({
      method: "GET",
      url: `${apiDevFast}/adminSearch/movie/${keyword}`
    })
      .then(res => {
        setData({ pagination: {}, result: res.data });
      })
      .catch(err => props.getListMovies(currentPage));
  };

  const isEmpty = obj => {
    return !obj || Object.keys(obj).length === 0;
  };

  const renderTbody = () => {
    if (!isEmpty(data)) {
      return data.result.map((item, index) => (
        <ItemTable
          movie={item}
          stt={
            index +
            1 +
            (!isEmpty(data.pagination) ? data.pagination.minIndex : 0)
          }
          key={index}
        />
      ));
    }
  };

  const renderPagination = () => {
    if (!isEmpty(data)) {
      return !isEmpty(data.pagination) && data.result.length > 0 ? (
        <nav aria-label="Page navigation example">
          <TestPagination
            totalItem={data.pagination.totalItem}
            itemPerPage={data.pagination.itemPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </nav>
      ) : (
        ""
      );
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
                    <tbody>
                      <tr>
                        <td className="indicator border-0">
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
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody className="fadeIn animated">{renderTbody()}</tbody>
                  )}
                </table>
                {renderPagination()}
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
