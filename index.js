/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}

const articleHearts = document.querySelectorAll('.like');


function sendLikeToServer() {

  console.log('Sending like to the server...');
}


function handleLikeButtonClick(event) {
  const heart = event.target;
  
  if (heart.classList.contains('activated')) {
    
    heart.classList.remove('activated');
    
    sendLikeToServer();
  } else {
    
    heart.classList.add('activated');
    
    sendLikeToServer();
  }
}


articleHearts.forEach(heart => {
  heart.addEventListener('click', handleLikeButtonClick);
});
