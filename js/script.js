const banner = `
  <div class='banner'>
    <h3>What is the Sandbox?</h3>
    <p>Your Sandbox is a special instance that serves as the basis for creating all of your production instances. Its disk is often called a “Gold Master” or “Master Image”. When you launch the Sandbox desktop, you have full admin access to install new apps or apply system updates.</p>
  </div>`


$('container').prepend(banner);

// label:['Status','IP','VM Type', 'Disk Size', 'Version'],
// values:['Stopped','Unavailable','Air 4GB', '45 GB', 200]
const status = [
  {
  label:'Status',
  values: 'Stopped'
  },
  {
  label:'IP',
  values: 'Unavailable'
  },
  {
  label:'VM Type',
  values: 'Air 4GB'
  },
  {
  label:'Disk Size',
  values: '45 GB'
  },
  {
  label:'Version',
  values: '2.00'
  },
];


const backup = [
  {
  label:'Test',
  values: '20 days ago'
  },
  {
  label:'Test',
  values: '20 days ago'
  },
  {
  label:'Depployment',
  values: '20 days ago'
  },
  {
  label:'Reordering',
  values: '20 days ago'
  },
  {
  label:'Anniverary',
  values: '20 days ago'
  },
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
      <table id='${name}-table'>
        ${ source.map(s =>
            `<tr>
              <td>${s.label}</td>
              <td>${s.values == 'Stopped' ?
                `<span class='state'></span>${s.values}` : s.values
              }</td>
            </tr>
            `).join('')
          }
      </table>
    </div>
    <div class='card-footer'>${action}</div>
  </div>
`)};

card('Sandox',status,'Power On');
card('Backup', backup,'Create Backup');
card('Applications', backup,'Create Backup');
cardIcons();
