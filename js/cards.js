
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


const screen = $('.screens');
const container = $('container');
$('.screen-switcher').click(function(){
  screen.removeClass('expanded');
  container.addClass('expanded-container');
});

$('.screens').on('mouseleave',function(){
  screen.addClass('expanded');
  container.removeClass('expanded-container');
})
