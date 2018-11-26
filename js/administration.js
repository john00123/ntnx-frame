tableCreator2('', accountHeader, accountData)
$('container').prepend(`<div class='btn-container fw'><button class='primary'> Create Account </button><br><br></div>`)
$('aside').prepend(`<h2>Administration</h2><hr class='mini'>`);

$('.btn-container').append(`<input class='search' type='text' style='margin-top:10px;'' placeholder='Search accounts'></input>`);

$('button').click(function(){
  CreatePopup(0,0,0);
})

CreateMapPopup(0,1,0);


function CreateMapPopup(i,j,k){

 $('body').css('overflow','hidden');
 $('body').append(`<div class="overlay">
    <div class="popup" style='width:800px'>
      <div class="popup-header" onclick='removePopup()'>${popupData.title[i]}</div>
      <div class="popup-body">${popupData.body[j]}</div>
      <div class="popup-footer">${popupData.footer[k]}</div>
    </div>
  </div>
  `);

  $('.map-grid-card').append(`
    <div class="primary"></div>
    <div class="primary"></div>
    <div class="primary"></div>
    <div class="primary"></div>
    <div class="primary"></div>
    <div class="primary"></div>
    <div class="primary"></div>
    <div class="primary"></div>
    `
  )
}

$('.secondary').click(function(){
  $(this).toggleClass('active');
})
