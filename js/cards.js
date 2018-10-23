
for (i=1; i<5; i++){
  $('container').append(`
    <div class='iconContainer'>
      <img src='../img/icon${i}.png'/>
      <h3>appTitle</h3>
    </div>`)
}
for (i=1; i<5; i++){
  $('container').append(`
    <div class='iconContainer'>
      <img src='../img/icon${i}.png'/>
      <h3>appTitle</h3>
    </div>`)
}


$('body').keypress(function(e){
  const screen = $('.screens');
    if(e.which == 27){
      if(screen.hasClass('expanded')){
        screen.removeClass('expanded');
      }
      else{
        screen.addClass('expanded');
      }
    }
});
