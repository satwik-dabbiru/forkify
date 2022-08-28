import View from './view';
import previeView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found 😓 Please try another!';
  _message = '';

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

export default new ResultsView();
