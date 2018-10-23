
function initial(){
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
};

initial();

$('.screens').addClass('expanded');

$('body').keypress(function(e){
  const screen = $('.screens');
  const container = $('container');
    if(e.which == 27){
      if(screen.hasClass('expanded')){
        screen.removeClass('expanded');
        container.addClass('expanded-container');
      }
      else{
        screen.addClass('expanded');
        container.removeClass('expanded-container');
      }
    }
});


$( document ).on( "mousemove", function( event ) {
  const screen = $('.screens');
  const container = $('container');
  if( event.pageY < 10 ){
    screen.removeClass('expanded');
    container.addClass('expanded-container');
  }
    if( event.pageY > 150 ){
    screen.addClass('expanded');
    container.removeClass('expanded-container');
  }
});
