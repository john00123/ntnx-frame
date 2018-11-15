tableCreator2('', accountHeader, accountData)
$('container').prepend(`<div class='btn-container fw'><button class='primary'> Create Account </button><br><br></div>`)
$('aside').prepend(`<h2>Administration</h2><hr class='mini'>`);

$('.btn-container').append(`<input class='search' type='text' style='margin-top:10px;'' placeholder='Search accounts'></input>`);

$('button').click(function(){
  CreatePopup(0,0,0);
})
