const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    switch(e.target.id){
      case 'grey':
      body.style.backgroundColor = 'grey';
      break;
      case 'white':
      body.style.backgroundColor = 'white';
      break;
      case 'yellow':
      body.style.backgroundColor = 'yellow';
      break;
      case 'blue':
      body.style.backgroundColor = 'blue';
      break;
        case 'purple':
      body.style.backgroundColor = e.target.id;
      break;


    }
    
  });
});