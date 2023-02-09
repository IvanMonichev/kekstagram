import { API_URL } from '../constants/constans';

const createPhoto = (formData, onSuccess, onFail) => {
  return fetch(
    API_URL,
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch((err) => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
      console.error(err);
    })
}
