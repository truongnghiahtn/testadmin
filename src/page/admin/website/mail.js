import React from "react";

const Mail = () => {
  return (
    <div
      className="tab-pane fade"
      id={`pills-mail-fill`}
      role="tabpanel"
      aria-labelledby={`pills-mail-tab-fill`}
    >
      <form>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <label>Mail server</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tài khoản"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <label>Mật khẩu mail server</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mật khẩu"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <label>Mail nhận</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tài khoản"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <label>Mật khẩu mail nhận</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mật khẩu"
              />
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <button
              type="reset"
              className="btn iq-bg-danger"
              style={{ marginRight: 10 }}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </ul>
        </nav>
      </form>
    </div>
  );
};

export default Mail;
