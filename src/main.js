// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// import receiveDataFromServer from './js/fetch';
// import { renderFunc, itemService, lightbox } from './js/render-func';

// const form = document.querySelector('.form');
// const gallery = document.querySelector('.gallery');
// const loadMoreBtn = document.querySelector('.position');
// const mainLoader = document.querySelector('.loader');
// const helpLoader = document.querySelector('.load-more');
// const scrollUp = document.querySelector('.scroll-up');

// const params = {
//   q: '',
//   perPage: 150,
//   page: 1,
//   maxPage: 0,
// };

// const hideLoadMoreBtn = new itemService(loadMoreBtn, 'visually-hidden');
// const hideMainLoader = new itemService(mainLoader, 'visually-hidden');
// const hideHelpLoader = new itemService(helpLoader, 'visually-hidden');
// const hideScrollUp = new itemService(scrollUp, 'visually-hidden');

// async function searchPostFunc(event) {
//   event.preventDefault();
//   hideMainLoader.show();
//   loadMoreBtn.removeEventListener('click', loadMoreFunc);

//   params.page = 1;
//   params.q = event.currentTarget.elements.information.value.trim();

//   try {
//     const data = await receiveDataFromServer(params);

//     if (data.totalHits === 0) {
//       hideMainLoader.hide();

//       return iziToast.error({
//         title: 'Error',
//         message: 'Illegal operation',
//         position: 'topRight',
//       });
//     }

//     params.maxPage = Math.ceil(data.totalHits / params.perPage);

//     const itemsArr = renderFunc(data.hits);
//     hideMainLoader.hide();

//     gallery.innerHTML = '';
//     gallery.insertAdjacentHTML('afterbegin', itemsArr);

//     lightbox.refresh();

//     if (params.maxPage !== params.page) {
//       hideLoadMoreBtn.show();
//       hideScrollUp.show();
//       scrollUp.addEventListener('click', scrollUpFunc);
//       loadMoreBtn.addEventListener('click', loadMoreFunc);
//     } else {
//       hideLoadMoreBtn.hide();
//       loadMoreBtn.removeEventListener('click', loadMoreFunc);
//     }

//     console.log(data);
//   } catch (error) {
//     hideMainLoader.hide();

//     console.log(error);
//   } finally {
//     form.reset();
//   }
// }

// async function loadMoreFunc() {
//   params.page += 1;
//   hideLoadMoreBtn.disable();
//   hideHelpLoader.show();

//   try {
//     const data = await receiveDataFromServer(params);

//     const itemsArr = renderFunc(data.hits);

//     hideHelpLoader.hide();

//     gallery.insertAdjacentHTML('beforeend', itemsArr);

//     lightbox.refresh();

//     if (params.maxPage === params.page) {
//       hideLoadMoreBtn.hide();
//       hideScrollUp.hide();
//       loadMoreBtn.removeEventListener('click', loadMoreFunc);
//       scrollUp.removeEventListener('click', scrollUpFunc);
//       return iziToast.info({
//         message: 'All data received',
//         position: 'topRight',
//       });
//     }
//   } catch (error) {
//     hideHelpLoader.hide();

//     console.log(error);
//   } finally {
//     hideLoadMoreBtn.enable();
//   }
// }

// function scrollUpFunc() {
//   scrollTo({ top: 0, behavior: 'smooth' });
// }

// form.addEventListener('submit', searchPostFunc);

/////////////////////////////////////////////////////////////////////////////////////////

// class User {
//   #email;

//   static posts = [];

//   #verifyEmail(email) {
//     return email.includes('@');
//   }

//   constructor(user) {
//     this.email = user.email;
//     this.name = user.name;
//     this.nickname = user.nickname;
//     User.posts.push(user.email);
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (this.#verifyEmail(newEmail)) {
//       User.posts.find((item, index, array) => {
//         if (item === this.#email) {
//           array[index] = newEmail;
//         }
//       });
//       return (this.#email = newEmail);
//     }
//   }

//   addEmail(newEmail) {
//     if (this.#verifyEmail(newEmail)) {
//       User.posts.push(newEmail);
//     }
//   }
// }

// const andrew = new User({
//   name: 'Andrew',
//   nickname: 'xd.faunredd',
//   email: 'andrew.furevych@gmail.com',
// });

// andrew.email = 'nigga@f';
// console.log(andrew.email);
// andrew.addEmail('a.furevych@gmail.com');
// andrew.email = 'salam@aleicum';

// console.log(User.posts);

// class Manager extends User {
//   constructor(params) {
//     super(params);
//     this.sale = params.sale;
//   }
// }

// const manager = new Manager({
//   name: 'Oleg',
//   email: 'hoho@gmail.com',
//   sale: 15,
//   nickname: 'bobo',
// });

// console.log(manager);

// const form = document.querySelector('.form');

// const input = form.elements.information;

// input.value = window.localStorage.getItem('value');

// function saveDataToLocalStorage(event) {
//   window.localStorage.setItem('value', event.target.value);
// }

// function searchPostFunc(event) {}

// input.addEventListener('input', saveDataToLocalStorage);

// form.addEventListener('submit', searchPostFunc);

// const form = document.querySelector('.form');
// const input = form.elements.information;

// console.log(input);

// import flatpickr from 'flatpickr';
// import '../node_modules/flatpickr/dist/flatpickr.min.css';

// const add = document.querySelector('.add');
// const rem = document.querySelector('.rem');

// const arr = [];

// add.addEventListener('click', () => {
//   arr.push(
//     setTimeout(() => {
//       console.log('im setTImeout');
//     }, 5000)
//   );
// });

// rem.addEventListener('click', () => {
//   arr.forEach(id => {
//     clearTimeout(id);
//   });
// });

// flatpickr(input, {
//   minDate: 'today',
//   maxDate: new Date().fp_incr(7), // 14 days from now
// });

const createPromise = (delay, status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      status === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
};

// function createPromise(delay, status) {
//   setTimeout(() => {
//     if (status === 'fulfilled') {
//       return Promise.resolve(delay);
//     } else {
//       return Promise.reject(delay);
//     }
//   }, delay);
// }

const a = 'a';
const b = 'b';
