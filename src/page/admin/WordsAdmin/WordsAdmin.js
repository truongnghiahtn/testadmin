import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./style.scss";
import ItemTable from "./itemTableWords";
import ChildModal from "./childModalWords";
import Modalfather from "../../../components/modal/fatherModal";
import * as action from "../../../redux/action/index";
import SearchAdmin from "../../../components/SearchAdmin";
import Pagination from "../../../components/Pagination/index";
const Modal = Modalfather(ChildModal);

const WordsAdmin = props => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    props.getListWords(currentPage);
    setTimeout(() => {
      setLoading(false);
    }, 150);
  }, [currentPage]);

  useEffect(() => {
    setData(props.listWords);
  }, [props.listWords]);

  const convertHTML = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const handleFilter = keyword => {
    let dataUpdate = { ...data };
    dataUpdate.result = props.listWords.result.filter(
      item =>
        convertHTML(item.word_name)
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
      let length = data.result.length;
      return data.result.map((item, index) => (
        <ItemTable word={item} stt={index} key={index} />
      ));
    }
  };

  const paginate = number => {
    setCurrentPage(number);
    setNumberPage(number);
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
                  onClick={() => props.actOnEditWord()}
                >
                  <i className="ri-add-fill">
                    <span className="pl-1">Thêm word</span>
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
                      <th>VN</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  {loading ? (
                    <div
                      className="loader"
                      style={{ width: "2em", height: "2em", top: "120px" }}
                    ></div>
                  ) : (
                    <tbody className="fadeIn animated">{renderTbody()}</tbody>
                  )}
                </table>
                {!isEmpty(data) ? (
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li
                        className={
                          data.pagination.page === 1
                            ? "page-item active"
                            : "page-item"
                        }
                        onClick={() => {
                          paginate(1);
                          setNumberPage(1);
                        }}
                      >
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>

                      <Pagination
                        itemPerPage={data.pagination.itemPerPage}
                        totalItem={data.pagination.totalItem}
                        paginate={paginate}
                        numberPage={numberPage}
                      />

                      <li
                        className={
                          data.pagination.page ===
                          Math.ceil(
                            data.pagination.totalItem /
                              data.pagination.itemPerPage
                          )
                            ? "page-item active"
                            : "page-item"
                        }
                        onClick={() => {
                          paginate(
                            Math.ceil(
                              data.pagination.totalItem /
                                data.pagination.itemPerPage
                            )
                          );
                          setNumberPage(
                            Math.ceil(
                              data.pagination.totalItem /
                                data.pagination.itemPerPage
                            )
                          );
                        }}
                      >
                        <a className="page-link" href="#" aria-label="Next">
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
    listWords: state.deMoReducer.dataWords
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListWords: id => {
      dispatch(action.getWordsApiDevfast(id));
    },
    actOnEditWord: () => {
      dispatch(action.actOnEditWord());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WordsAdmin);
