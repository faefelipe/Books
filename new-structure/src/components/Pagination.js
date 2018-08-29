import React, { Component } from "react";
import Pagination from "react-paginating";
import Button from '@material-ui/core/Button';

const fruits = [
  ["apple", "orange"],
  ["banana", "avocado"],
  ["coconut", "blueberry"],
  ["payaya", "peach"],
  ["pear", "plum"]
];
const limit = 8;
const pageCount = 3;
const total = fruits.length * limit;

class Page extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div>
        <ul>
          {fruits[currentPage - 1].map(item => <li key={item}>{item}</li>)}
        </ul>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            <div>
              <Button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </Button>

              {hasPreviousPage && (
                <Button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {"<"}
                </Button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#fdce09" };
                }
                return (
                  <Button
                    key={page}
                    style={activePage}
                    {...getPageItemProps({
                      pageValue: page,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </Button>
                );
              })}

              {hasNextPage && (
                <Button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {">"}
                </Button>
              )}

              <Button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </Button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}
export default Page;
