import React from "react";

export default function fatherModal(Component) {
  return function(props) {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <Component />
          </div>
        </div>
      </div>
    );
  };
}
