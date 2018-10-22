
const popupData ={
  title :[
    'Atomatically hide/show'
  ],

  body: [
    //0 add instance
    `<img style='height:120px; margin-bottom:30px;' src='../img/no-header3.svg'/>
        <p>This will maximize the space available to render the Virtual Machine. Press<code class='code-blue'>ESC</code> to return to the regular view.</p>
        <br><br>
        <p class='fw'><input type='checkbox'> Don't show me this again </p>

    `
  ],

  footer:[
    //0
    `
    <button class="primary save" onclick="removePopup(), toggleHeader() " style='width:auto; margin-left:10px'>Done</button>
    `,
  ]
}

function toggleHeader(){
  $('body').toggleClass('no-header');
  $('header').toggle();
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
    }
};
