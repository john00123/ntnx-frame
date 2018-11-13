
const systemSide = [
  { number: 1,
    step: 'Accounts'},
  { number: 2,
    step: 'Organization'},
  ]




function listItem(data){
  if(('children' in data)){
    const child = data.children;
    return( `
      <li class='parent pos${data.number}'> ${data.step}</li>
      ${child.map(c =>`<li class='child pos${data.number}'> ${c}</li>`).join(' ')}
    `)

  } else {
    return(
      `<li class='parent no-child${data.number}'> ${data.step}</li>`
    )
  }
}


//initial setup

sideBar(systemSide)


function sideBar(source){
  $('aside').html(source.map(steps => listItem(steps)).join(''));

  //hide all the child elements
  $('.child').hide();
  $('.parent:eq(0)').addClass('side-active');
  $('.parent').click(function(){
    $('.child').hide();
    $('.parent, .child').removeClass('side-active');
    $(this).addClass('side-active');
    for(i=1;i<=7;i++){
      if($(this).hasClass(`pos${i}`)){
        $(this).addClass('side-active-alt');
        $(`.pos${i}`).show();
        $(`.pos${i}:eq(1)`).addClass('side-active');
      }
    }
  })

  $('.child').click(function(){
    $('.child').removeClass('side-active');
    $(this).addClass('side-active');
  });
}
