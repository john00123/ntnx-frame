tableCreator2('', accountHeader, accountData)
$('container').prepend(`<div class='btn-container fw'><button class='primary'> Create Account </button><br><br></div>`)

$('.btn-container').append(`<div><label > Search</label><br><input type='text' style='margin-top:10px;'></input></div>`);

$('button').click(function(){
  CreatePopup(0,0,0);
})

$('button').click();
