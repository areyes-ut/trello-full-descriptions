setInterval( function() {
  var descButton = document.getElementsByClassName('description-content-fade-button-text')[0];
  if( descButton && ! descButton.classList.contains('full-desc-clicked') ) {
    descButton.click();
    descButton.classList.add('full-desc-clicked');
  }
}, 1000 );
