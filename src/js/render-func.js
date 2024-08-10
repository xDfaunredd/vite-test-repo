import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// create gallery elements
const renderFunc = dataArray => {
  const itemsArr = dataArray
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class= "list-item">
    <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" class="list-img"></a>
 <ul class = "content-list">
 <li class="content-list-item">
 <p class="content-list-title">Likes</p>
 <p class="content-list-value">${likes}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Views</p>
 <p class="content-list-value">${views}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Comments</p>
 <p class="content-list-value">${comments}</p>
 </li>
 <li class="content-list-item">
 <p class="content-list-title">Downloads</p>
 <p class="content-list-value">${downloads}</p>
 </li>
 </ul>
    </li>
    `
    )
    .join(' ');

  return itemsArr;
};

class itemService {
  constructor(itemToHide, hideClass) {
    this.itemToHide = itemToHide;
    this.hideClass = hideClass;
  }

  hide() {
    this.itemToHide.classList.add(this.hideClass);
  }

  show() {
    this.itemToHide.classList.remove(this.hideClass);
  }

  disable() {
    this.itemToHide.disabled = true;
  }

  enable() {
    this.itemToHide.disabled = false;
  }
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export { renderFunc, itemService, lightbox };
