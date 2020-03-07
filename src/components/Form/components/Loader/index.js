import React from "react";
const $ = window.jQuery;

const Loader = () => {
  const [state, setstate] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      $("#loading")
        .delay()
        .fadeOut(1000, function() {
          setstate(true);
        });
    }, 1100);
  }, []);

  return state ? (
    ""
  ) : (
    <div id="loading">
      <div id="loading-center"></div>
    </div>
  );
};

export default Loader;
