import React, { useState, useEffect } from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";

const Term = props => {
  const [dataTerm, setDataTerm] = useState({
    _id: props.dataTerm._id,
    content: props.dataTerm.content,
    contentType: props.dataTerm.contentType
  });

  useEffect(() => {
    setDataTerm(props.dataTerm);
    console.log(dataTerm);
  }, [props]);

  useEffect(() => {
    console.log(dataTerm);
  }, [dataTerm]);
  return (
    <div
      className="tab-pane fade"
      id="pills-term-fill"
      role="tabpanel"
      aria-labelledby="pills-term-tab-fill"
    >
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <label>Nội dung</label>
            <ReactSummernote
              value={props.dataTerm.content}
              options={{
                lang: "ru-RU",
                height: 400,
                dialogsInBody: true,
                toolbar: [
                  ["style", ["style"]],
                  ["font", ["bold", "underline", "clear"]],
                  ["fontname", ["fontname"]],
                  ["para", ["ul", "ol", "paragraph"]],
                  ["table", ["table"]],
                  ["insert", ["link", "picture", "video"]],
                  ["view", ["fullscreen", "codeview"]]
                ]
              }}
              onChange={c => {
                setDataTerm({ ...dataTerm, content: c });
              }}
            />
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => props.addInfoWebsiteApi("TERM", dataTerm)}
          >
            Sửa
          </button>
        </ul>
      </nav>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addInfoWebsiteApi: (name, data) => {
      dispatch(action.addInfoWebsiteApi(name, data));
    }
  };
};

export default connect(null, mapDispatchToProps)(Term);
