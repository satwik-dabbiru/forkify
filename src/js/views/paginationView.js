import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goto = +btn.dataset.goto;
      handler(goto);
    });
  }
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // page 1 other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateNextButton(curPage);
    }
    // last page
    if (curPage === numPages && numPages > 1) {
      return this._generatePreviousButton(curPage);
    }
    // other page
    if (curPage < numPages) {
      return [
        this._generatePreviousButton(curPage),
        this._generateNextButton(curPage),
      ].join('');
    }
    // page 1 no other pages
    return '';
  }
  _generateNextButton(page) {
    return ` <button data-goto="${
      page + 1
    }" class="btn--inline pagination__btn--next">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
  }
  _generatePreviousButton(page) {
    return `<button data-goto="${
      page - 1
    }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
          </button>`;
  }
}

export default new PaginationView();
