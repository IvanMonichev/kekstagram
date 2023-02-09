import { API_URL } from '../constants/constans.js';

const handleError = (response, onFail) => {
  return response.ok ? response.json() : onFail('Произошла ошибка');
}

const createPhoto = (formData, onSuccess, onFail) => {
  return fetch(
    API_URL,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) =>
      handleError(
        response,
        onFail('Не удалось отправить форму. Попробуйте ещё раз'),
      ))
    .catch((err) => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
      console.error(err);
    })
}

const getData = (onSuccess, onFail) => {
  fetch(API_URL + '/dat')
    .then((response) =>
      handleError(
        response,
        onFail,
      ))
    .then((result) => onSuccess(result))
    .catch(() => {
      onFail('Произошла ошибка при загрузке данных. Попробуйте ещё раз');
    })
}

export {
  getData,
}
