const banner = `
  <div class='banner'>
    <div>
    <h3>What is the Sandbox?</h3>
    <p>Your Sandbox is a special instance that serves as the basis for creating all of your production instances. Its disk is often called a “Gold Master” or “Master Image”.
    When you launch the Sandbox desktop, you have full admin access to install new apps or apply system updates.</p>
    <div>
  </div>`

const status = [
  {label:'Status',
  values: 'Stopped'},

  {label:'IP',
  values: 'Unavailable'},

  {label:'VM Type',
  values: 'Air 4GB'},

  {label:'Disk Size',
  values: '45 GB'},

  {label:'Version',
  values: '2.00'},
];

const backup = [
  {label:'Test',
  values: '20 days ago'},

  {label:'Test',
  values: '20 days ago'},

  {label:'Deployment',
  values: '20 days ago'},

  {label:'Reordering',
  values: '20 days ago'},

  {label:'Anniverary',
  values: '20 days ago'},
];

const storage = [
  {label:'Google Drive',
  values: '<input type="checkbox" checked/>'},

  {label:'One Drive',
  values: '<input type="checkbox" checked/>'},

  {label:'Box',
  values: '<input type="checkbox"/>'},

  {label:'Dropbox',
  values: '<input type="checkbox"/>'},

  {label:'',
  values: ''},
];

const features = [
  {label:'Clipboard integration',
  values: '<input type="checkbox" checked/>'},

  {label:'App switching',
  values: '<input type="checkbox" checked/>'},

  {label:'Download',
  values: '<input type="checkbox" checked/>'},

  {label:'Upload',
  values: '<input type="checkbox" checked/>'},

  {label:'Print',
  values: '<input type="checkbox" checked/>'},

  {label:'Clipboard sync',
  values: '<input type="checkbox" checked/>'},

  {label:'Microphone',
  values: '<input type="checkbox"/>'},
];

const timeLimits = [
  {label:'User inactivity timeout',
  values: '<input type="number" value="10"/>'},

  {label:'Idle timeout',
  values: '<input type="number" value="10"/>'},

  {label:'Max session duration',
  values: '<input type="number" value="60"/>'},

  {label:'',
  values: ''},

];

const network = [
  {label:'Max bandwith (kbps) ',
  values: '<input type="number" value="10"/>'},

  {label:'Max frame rate (fps)',
  values: '<input type="range" value="60"/>'},

  {label:'Max videp bit rate',
  values: '<input type="range" value="16"/>'},

  {label:'',
  values: ''},

];


function cardIcons(){
  $('.Applications .card-body').html('');
  $('.Applications .card-body').append('<div class="card-grid"></div>');
  $('.Applications .card-body').append('<div class="spacer"></div>');

  for (i=1; i<5; i++){
    $('.card-grid').append(`
      <div class='iconContainer'>
        <img src='../img/icon${i}.png'/>
        <h3>appTitle</h3>
      </div>`)
  }
  for (i=4; i>0; i--){
    $('.card-grid').append(`
      <div class='iconContainer'>
        <img src='../img/icon${i}.png'/>
        <h3>appTitle</h3>
      </div>`)
  }
  for (i=1; i<5; i++){
    $('.card-grid').append(`
      <div class='iconContainer'>
        <img src='../img/icon${i}.png'/>
        <h3>appTitle</h3>
      </div>`)
  }
};

function primary(data){
$('.subheader').append(`<button class="primary">${data}</button>`)
}

function secondary(data){
$('.page-actions').append(`<button class="secondary-alt">${data}</button>`)
}

function card(name, source, action, action2){
  $('.grid').append( `
  <div class='card ${name}'>

    <div class='card-header'>
      <h3> ${name}</h3>
      ${ action2 != 'null'?
    `<a class='header-action'> ${action2}</a> ` : ''}
    </div>

    <div class='card-body'>
      ${
        name == 'Sandbox' ? `<div class='monitor'></div>` : ''
      }
      <table class='fw' id='${name}-table'>
        ${source.map(s => `
        <tr>
          <td>${s.label}</td>
          <td>
            ${s.values == 'Stopped' ?
              `<span class='state'></span>${s.values}` :
              s.values}
          </td>
        </tr>`).join('') }
      </table>
    </div>

    ${ action === 'null' ? '' :
      `<div class='card-footer'>
        ${action}
      </div>`
    }

  </div>
`)};



card('Sandbox', status,'null','Power On');
card('Backup', backup,'Total number of backups: 8','Create Backup');
card('Applications', backup,'Total number of onboarded applications: 15','null');
cardIcons();
primary('Publish');
// $('container').prepend(banner);

$('.sub-item:eq(0)').click( function(){
  $('container').html('');
  $('container').append('<div class="grid"></div>');
  card('Sandbox', status,'null','Power On');
  card('Backup', backup,'Total number of backups: 8','Create Backup');
  card('Applications', backup,'Total number of onboarded applications: 15','null');
  cardIcons();
  // $('container').prepend(banner);
  // primary('Publish');
})

$('.sub-item:eq(1)').click( function(){
  $('container').html('');
  tableCreator('Viewing 7 Servers', serverHeader, serverData);
  $('container h3').append('&nbsp; <a> Reload </a>');
})


$('.sub-item:eq(2)').click( function(){
  sideBar(launcherSide)
  $('.pos1').click();
  $('.child:eq(0)').click()

  $('container').html('');
  $('container').append('<div class="grid"></div>');
  card('Storage', storage,'null');
  card('Features', features,'null');
  card('Time Limits (minutes)', timeLimits,'null');
  card('Newtork', network,'null');
  $('li:last-child').addClass('manage').removeClass('parent').removeClass('no-child8');

})
