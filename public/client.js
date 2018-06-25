const sunsetButton = document.querySelector('.sunset-grabber');

const changeColor = () => {
  $('h1').addClass('red')
}

sunsetButton.addEventListener('click', changeColor);
