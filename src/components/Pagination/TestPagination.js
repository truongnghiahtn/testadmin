import React from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

class TestPagination extends React.Component {
  state = {
    currentPage: this.props.currentPage
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    this.props.paginate(numPage);
  };

  render() {
    return (
      <>
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={Math.ceil(this.props.totalItem / this.props.itemPerPage)}
          changeCurrentPage={this.changeCurrentPage}
          theme="square-i"
        />
      </>
    );
  }
}
export default TestPagination;
