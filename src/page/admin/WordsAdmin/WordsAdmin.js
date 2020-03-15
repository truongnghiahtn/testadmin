/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import ItemTable from "./itemTableWords";
import ChildModal from "./childModalWords";
import Modalfather from "../../../components/modal/fatherModal";
import * as action from "../../../redux/action/index";
import SearchAdmin from "../../../components/SearchAdmin";
import Pagination from "../../../components/Pagination/index";
import MoldalExcel from "./modalExcel";
import TestPagination from "../../../components/Pagination/TestPagination";
import Axios from "axios";
import { apiDevFast } from "../../../utils/config";

const Modal = Modalfather(ChildModal);

const WordsAdmin = props => {
  const [data, setData] = useState({ pagination: {}, result: [] });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.getAllListWords();
  }, []);

  useEffect(() => {
    setLoading(true);
    props.getListWords(currentPage);
    setTimeout(() => {
      setLoading(false);
    }, 150);
  }, [currentPage]);

  useEffect(() => {
    setData(props.listWords);
    console.log(props.listWords);
  }, [props.listWords]);

  const convertHTML = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const handleFilter = keyword => {
    return Axios({
      method: "GET",
      url: `${apiDevFast}/adminSearch/word/${keyword}`
    })
      .then(res => {
        setData({ pagination: {}, result: res.data });
      })
      .catch(err => props.getListWords(currentPage));
  };

  const isEmpty = obj => {
    return !obj || Object.keys(obj).length === 0;
  };

  const renderTbody = () => {
    if (!isEmpty(data)) {
      let dataUpdate = data.result.filter(item => item.status !== 0);
      return dataUpdate.map((item, index) => (
        <ItemTable
          word={item}
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
                    className="fa fa-user-circle"
                    aria-hidden="true"
                    style={{ marginRight: 10 }}
                  />
                  Quản trị từ ngữ
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
                  onClick={() => {
                    props.actOnEditWord();
                  }}
                >
                  <i className="ri-add-fill">
                    <span className="pl-1">Thêm word</span>
                  </i>
                </button>
                <button
                  data-toggle="modal"
                  data-target="#modalExcel"
                  className="btn btn-sm iq-bg-success ml-2"
                  onClick={() => {}}
                >
                  <i className="ri-add-fill">
                    <span className="pl-1">Thêm excel</span>
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
                      <th>Tên từ / câu</th>
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
                {/* {isEmpty(data) < 1 ? (
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
                      <TestPagination
                        totalItem={data.pagination.totalItem}
                        itemPerPage={data.pagination.itemPerPage}
                        paginate={paginate}
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
                )} */}
                {renderPagination()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
      <MoldalExcel />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allListWords: state.deMoReducer.dataAllWords,
    listWords: state.deMoReducer.dataWords
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllListWords: () => {
      dispatch(action.getAllWordsApiDevfast());
    },
    getListWords: id => {
      dispatch(action.getWordsApiDevfast(id));
    },
    actOnEditWord: () => {
      dispatch(action.actOnEditWord());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WordsAdmin);
