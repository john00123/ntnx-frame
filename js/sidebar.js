
const systemSide = [
  { number: 1,
    step: 'Sandbox'},
  { number: 2,
    step: 'Utility Servers',
    children : ['demo-utility-0' , 'demo-utility-1']},
  ]


const statusSide = [
  { number: 1,
    step: 'Servers',
  },
]

const launcherSide = [
  { number: 1,
    step: 'Office Apps',
    children : ['Layout' , 'Appearance','Settings','Instance Pools']
  },
  { number: 2,
    step: 'Basic Applications',
    children : ['Layout' , 'Appearance','Settings','Instance Pools']
  },
  { number: 3,
    step: 'Explorer',
    children : ['Layout' , 'Appearance','Settings','Instance Pools']
  },
  { number: 4,
    step: 'Paint',
    children : ['Layout' , 'Appearance','Settings','Instance Pools']
  },
  { number: 5,
    step: 'Chrome',
    children : ['Layout' , 'Appearance','Settings','Instance Pools']
  },
  { number: 6,
    step: 'Notepad',
    children : ['Layout' , 'Appearance','Settings','Instance Pools']
  },
  { number: 7,
    step: 'Office-Desktop-1',
    children : ['Layout' , 'Appearance','Settings','Instance Pools']
  },
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
