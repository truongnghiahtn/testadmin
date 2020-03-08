import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

export default class user extends Component {
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
                    Tài khoản
                  </h4>
                </div>
                <span
                  className="table-add float-right mb-3 mr-2"
                  style={{ marginTop: "1rem!important" }}
                >
                  <NavLink to="/add-movie" className="btn btn-sm iq-bg-success">
                    <i className="ri-add-fill">
                      <span className="pl-1">Thêm tài khoản</span>
                    </i>
                  </NavLink>
                </span>
              </div>
              <div className="iq-card-body">
                <div id="table" className="table-editable">
                  <div className="iq-search-bar float-right mb-3 mr-2">
                    <form action="#" className="searchbox">
                      <input
                        type="text"
                        className="text search-input"
                        placeholder="Type here to search..."
                      />
                      <a className="search-link" href="#">
                        <i className="ri-search-line" />
                      </a>
                    </form>
                  </div>
                  <table className="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>username</th>
                        <th>password</th>
                        <th>Chức năng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Gio Metric</td>
                        <td>25</td>
                        <td>Deepends</td>
                        <td>
                          <span className="table-remove">
                            <button
                              type="button"
                              className="btn btn-warning mb-3"
                            >
                              <i className="fa fa-wrench" aria-hidden="true" />
                              Sửa
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger mb-3"
                            >
                              <i className="ri-delete-bin-2-fill pr-0" />
                              Xóa
                            </button>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
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
      </div>
    );
  }
}
