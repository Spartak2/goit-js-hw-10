"use strict";

const form = document.querySelector('.form')

form.addEventListener('submit', event => {
    const dalay = Number(form.dalay.value);

  event.preventDefault();
    const promise = new Promise((resolve, reject) => {
      if (form.state.value === 'fulfilled') {
        setTimeout(() => {
          resolve(delay);
        }, delay);
      } else if (form.state.value === 'rejected') {
        setTimeout(() => {
          reject(delay);
        }, delay);
      }
    });
  promise
    .then(dalay => {
            iziToast.show({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topCenter',
            color: 'green',
          });
    })
    .chatch (dalay => {
        iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topCenter',
        color: 'red',
      });
    });

  event.currentTarget.reset();
});
