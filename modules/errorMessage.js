export default (error) => {
  const ErrorMsg = document.querySelector('.error-msg');
  document.querySelector('.error-msg').innerHTML = error;
  setTimeout(() => {
    document.querySelector('.error-msg').innerHTML = '';
  }, 2000);
};