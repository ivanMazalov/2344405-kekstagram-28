const ERROR_MESSAGE_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const errorMessageElement = document.createElement('div');
  errorMessageElement.style.zIndex = '999';
  errorMessageElement.style.position = 'absolute';
  errorMessageElement.style.left = '50%';
  errorMessageElement.style.transform = 'translate(-50%)';
  errorMessageElement.style.top = '0';
  errorMessageElement.style.padding = '10px';
  errorMessageElement.style.fontSize = '26px';
  errorMessageElement.style.lineHeight = '1.5';
  errorMessageElement.style.textAlign = 'center';
  errorMessageElement.style.backgroundColor = 'tomato';

  errorMessageElement.textContent = message;

  document.body.append(errorMessageElement);

  setTimeout(() => {
    errorMessageElement.remove();
  }, ERROR_MESSAGE_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {showAlert, isEscapeKey, debounce};
