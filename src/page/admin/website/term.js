import React, { useState, useEffect } from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import swal from "sweetalert";

const Term = props => {
  const [dataTerm, setDataTerm] = useState({});
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setDataTerm(props.dataTerm);
  }, [props]);

  const handleErrors = e => {
    if (e.target.innerHTML !== "") {
      setErrors(true);
    } else setErrors(false);
  };
  const edit = (dataTerm) => {
    swal({
      title: "Bạn có chắc không?",
      text: "Sau khi sửa, bạn sẽ không thể khôi phục !",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        props.addInfoWebsiteApi("TERM", dataTerm)
      } else {
        swal("Thông tin của bạn an toàn!");
      }
    });
  }; 

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
              value={dataTerm ? dataTerm.content : ""}
              options={{
                lang: "ru-RU",
                height: 400,
                dialogsInBody: true,
                toolbar: [
                  ["style", ["style"]],
              ["font", ["bold", "underline", "clear"]],
              ["color", ["color"]],
              ["fontname", ["fontname"]],
              ["para", ["ul", "ol", "paragraph"]],
              ["table", ["table"]],
              ["insert", ["link", "picture"]],
              ["view", ["codeview"]]
                ]
              }}
              onKeyUp={handleErrors}
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
            disabled={!errors}
            className="btn btn-primary"
            // onClick={() => props.addInfoWebsiteApi("TERM", dataTerm)}
            onClick={()=>{edit(dataTerm)}}
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
