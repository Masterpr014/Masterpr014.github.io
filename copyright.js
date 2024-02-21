document.getElementById('copyright').style.opacity = '1'; 

document.body.addEventListener('mouseover', function (event) {
  if (event.target.id === 'copyright') {
    event.target.style.opacity = '0';
  }
});

document.body.addEventListener('mouseout', function (event) {
  if (event.target.id === 'copyright') {
    event.target.style.opacity = '1'; 
  }
});