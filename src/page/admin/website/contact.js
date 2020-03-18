import React, { useState, useEffect } from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import swal from "sweetalert";

const Contact = props => {
  const [dataContact, setDataContact] = useState({});
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setDataContact(props.dataContact);
  }, [props]);

  const handleErrors = e => {
    if (e.target.innerHTML !== "") {
      setErrors(true);
    } else setErrors(false);
  };
  const edit = dataTerm => {
    swal({
      title: "Bạn có chắc không?",
      text: "Sau khi sửa, bạn sẽ không thể khôi phục !",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        props.addInfoWebsiteApi("CONTACT", dataContact);
      } else {
        swal("Thông tin của bạn an toàn!");
      }
    });
  };

  return (
    <div
      className="tab-pane fade"
      id="pills-contact-fill"
      role="tabpanel"
      aria-labelledby="pills-contact-tab-fill"
    >
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <label>Nội dung</label>
            <ReactSummernote
              value={dataContact ? dataContact.content : ""}
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
                  ["insert", ["link", "picture", "video"]],
                  ["view", ["fullscreen", "codeview"]]
                ]
              }}
              onKeyUp={handleErrors}
              onChange={c => {
                setDataContact({ ...dataContact, content: c });
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
            // onClick={() => props.addInfoWebsiteApi("CONTACT", dataContact)}
            onClick={() => {
              edit(dataContact);
            }}
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

export default connect(null, mapDispatchToProps)(Contact);
