import React, { Component } from "react";
import _ from "lodash";

export default class Pagination extends Component {
  render() {
    const { totalItems, pageCount, activePage, onClickPage } = this.props;
    const totalPages = Math.ceil(totalItems / pageCount + 1);
    const pages = _.range(1, totalPages, 1);

    return (
      <>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              class="page-item"
              onClick={() =>
                activePage - 1 <= 1 ? onClickPage(activePage - 1) : null
              }
            >
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            {pages.map((page) => (
              <li
                class={activePage === page ? "page-item active" : "page-item"}
                onClick={() => onClickPage(page)}
              >
                <a class="page-link" href="#">
                  {page}
                </a>
              </li>
            ))}

            <li
              class="page-item"
              onClick={() =>
                activePage + 1 <= totalPages - 1
                  ? onClickPage(activePage + 1)
                  : null
              }
            >
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
