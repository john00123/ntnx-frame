
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

$('img').attr("nopin","no-pin");
initial();

$('.screens').addClass('expanded');

$('body').keypress(function(e){
  const screen = $('.screens');
  const container = $('container');
    if(e.which == 27){
      if(screen.hasClass('expanded')){
        screen.removeClass('expanded');
        container.addClass('expanded-container');
        $('.desktopContainer').addClass('expanded-container')
      }
      else{
        screen.addClass('expanded');
        container.removeClass('expanded-container');
        $('.desktopContainer').removeClass('expanded-container')
      }
    }
});


function preloadImage(source, destElem) {
    var image = new Image();

    image.src = source;

    image.onload = function () {
        $(destElem).css('background-image', cssBackground);
    };
}

const screen = $('.screens');
const container = $('container');

$('.screen-switcher').click(function(){
  screen.toggleClass('expanded');
  container.toggleClass('expanded-container');
  $('.desktopContainer').toggleClass('expanded-container');
});


$(document).mouseup(function(e) {
  let screen = $('.screens');
  if (screen.not(e.target) && screen.has(e.target).length === 0) {
    screen.addClass('expanded');
    screen.addClass('disabled');
    container.removeClass('expanded-container');
    $('.desktopContainer').removeClass('expanded-container');

    setTimeout( function(){
      screen.removeClass('disabled');
    },300);
  }
});

$('.screenblock').append(`<div class='mini-grid'></div>`)
for (i=1; i<5; i++){
  $('.mini-grid').append(`
    <div class='iconContainer small'>
      <img src='../img/icon${i}.png'/>
    </div>`)
}

$('container').before(`
  <div class='desktopContainer'>
    <img src='../img/os1.png'/>
    <h3>Go to Desktop</h3>
  </div>`);
