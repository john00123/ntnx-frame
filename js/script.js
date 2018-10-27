const banner = `
  <div class='banner'>
    <h3>What is the Sandbox?</h3>
    <p>Your Sandbox is a special instance that serves as the basis for creating all of your production instances. Its disk is often called a “Gold Master” or “Master Image”. When you launch the Sandbox desktop, you have full admin access to install new apps or apply system updates.</p>
  </div>`

$('container').prepend(banner);

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


function cardIcons(){
  $('.Applications .card-body').html('');

  for (i=1; i<5; i++){
    $('.Applications .card-body').append(`
      <div class='iconContainer'>
        <img src='../img/icon${i}.png'/>
        <h3>appTitle</h3>
      </div>`)
  }
  for (i=1; i<5; i++){
    $('.Applications .card-body').append(`
      <div class='iconContainer'>
        <img src='../img/icon${i}.png'/>
        <h3>appTitle</h3>
      </div>`)
  }
};


function card(name, source, action){
  $('.grid').append( `
  <div class='card ${name}'>

    <div class='card-header'>
      <h3> ${name}</h3>
    </div>

    <div class='card-body'>
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

card('Sandox',status,'Power On');
card('Applications', backup,'null');
card('Backup', backup,'Create Backup');

cardIcons();


$('.sub-item:eq(0)').click( function(){
  $('container').html('');
  $('container').append('<div class="grid"></div>');
  card('Sandox',status,'Power On');
  card('Applications', backup,'null');
  card('Backup', backup,'Create Backup');
  cardIcons();
  sideBar(systemSide)
})

$('.sub-item:eq(1)').click( function(){
  $('container').html('');
  tableCreator('Servers', serverHeader, serverData);
  sideBar(statusSide)
})


$('.sub-item:eq(2)').click( function(){
  $('container').html('');
  $('container').append('<div class="grid"></div>');
  card('Storage', storage,'null');
  card('Features', features,'null');
  sideBar(launcherSide)
  $('.pos1').click();
  $('.child:eq(0)').click()
})
