
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

$(window).blur(function(){
  $('container').append(`<div class='overlay' style='background-color:rgba(0,0,0,0.6)'><h2 style='color:white'>Click continue</h2></div>`)
});

$(window).focus(function(){
  $('.overlay').remove();
});


$('.terciary').click(()=>{
  $('.dropdown').toggle();
})
