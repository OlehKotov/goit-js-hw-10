import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const delayValue = form.elements.delay.value;
  const check = form.elements.state.value;

  function createPromise(delay) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (check === 'fulfilled') {
          resolve(`✅ Fulfilled promise in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise in ${delay}ms`);
        }
      }, delay);
    });
    return promise;
  }
  const promise = createPromise(delayValue);
  promise
    .then(e => {
      iziToast.show({
        position: 'topRight',
        backgroundColor: '#73bf51',
        message: e,
      });
    })
    .catch(e => {
      iziToast.show({
        position: 'topRight',
        backgroundColor: '#e77c7c',
        message: e,
      });
    });

  form.reset();
}
