import React from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

class TestPagination extends React.Component {
  state = {
    currentPage: 1
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
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
