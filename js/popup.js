
const popupData ={
  title :[
    'Hide VM info'
  ],

  body: [
    //0 add instance
    `
        <p> This will hide the any information from the screen, press 'ESC' to toggle this view.</p>
        <br>
        <p class='fw'><input type='checkbox'> Don't show me this again </p>

    `
  ],

  footer:[
    //0
    `
    <button class="primary save" onclick="removePopup()" style='width:auto; margin-left:10px'>Done</button>
    `,
  ]
}

function removePopup(){
  $('.overlay').remove();
  $('body').css('overflow','initial');
}

function CreatePopup(i,j,k){
 $('body').css('overflow','hidden');
 $('body').append(`<div class="overlay">
    <div class="popup">
      <div class="popup-header" onclick='removePopup()'>${popupData.title[i]}</div>
      <div class="popup-body">${popupData.body[j]}</div>
      <div class="popup-footer">${popupData.footer[k]}</div>
    </div>
  </div>
  `);
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        CreatePopup(0,0,0);
        $('header').toggle();
        $('body').toggleClass('no-header');

    }
};
