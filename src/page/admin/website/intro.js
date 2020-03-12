import React, { useState, useEffect } from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";

const Intro = props => {
  const [dataIntro, setDataIntro] = useState({
    _id: props.dataIntro._id,
    content: props.dataIntro.content,
    contentType: props.dataIntro.contentType
  });

  useEffect(() => {
    setDataIntro(props.dataIntro);
    console.log(dataIntro);
  }, [props]);

  useEffect(() => {
    console.log(dataIntro);
  }, [dataIntro]);
  return (
    <div
      className="tab-pane fade show active"
      id="pills-intro-fill"
      role="tabpanel"
      aria-labelledby="pills-intro-tab-fill"
    >
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <label>Nội dung</label>
            <ReactSummernote
              value={props.dataIntro.content}
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
                setDataIntro({ ...dataIntro, content: c });
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
            onClick={() => props.addInfoWebsiteApi("INTRO", dataIntro)}
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

export default connect(null, mapDispatchToProps)(Intro);
