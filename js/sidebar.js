
let steps = [
  { number: 1,
    step: 'Sandbox',
  },
  { number: 2,
    step: 'Utility Servers',
    children : ['demo-utility-0' , 'demo-utility-1']
  },
  ]


function listItem(data){
  if(('children' in data)){
    const child = data.children;
    return( `<li class='parent pos${data.number}'> ${data.step}</li>
      ${child.map(c =>`<li class='child pos${data.number}'> ${c}</li>`).join(' ')}
    `)

  } else {
    return(
      `<li class='parent child-pos${data.number}'> ${data.step}</li>`
    )
  }
}

function all(){
  $("aside").each(function(){
    this.value=this.value.replace(/,/g, "");
})}


//initial setup
$('aside').append(steps.map(steps => listItem(steps)));
$('.child').hide();
$('.child-pos1').addClass('side-active');
$('.parent').click(function(){
  $('.parent, .child').removeClass('side-active');
  $(this).addClass('side-active');


  if($(this).hasClass('pos2')){
    $(this).addClass('side-active-alt');
    $('.child').show();
    $('.child:eq(0)').addClass('side-active');
  } else{ $('.child').hide()}
})

$('.child').click(function(){
  $('.child').removeClass('side-active');
  $(this).addClass('side-active');
})
