import View from './view';
import previeView from './previewView';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage =
    'No book marks yet. find a recipe that you like and book mark it ';
  _message = '';
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previeView.render(bookmark, false))
      .join('');
  }
}

//  <div class="preview__user-generated">
//    <svg>
//      <use href="${icons}#icon-user"></use>
//    </svg>
//  </div>;

export default new BookmarksView();
