
const popupData ={
  title :[
    'Create account'
  ],

  body: [
    //0 add instance
    `
      <label>Organization</label>
      <select><option selected>Test Accounts</option></select>

      <label>Name</label>
      <input type='text' placeholder='Name'></input>

      <label>URL Slug</label>
      <input type='text' placeholder='URL Slug'></input>

      <label>Data Center</label>
      <select><option>Test Accounts</option></select>

      <label>Instance Family</label>
      <select><option selected>Test Accounts</option></select>

      <label>Sandbox Instance Type</label>
      <select><option selected>Test Accounts</option></select>

      <label>Disk Size</label>
      <select><option selected>Test Accounts</option></select>

      <label>Image Famliy</label>
      <select><option selected>Test Accounts</option></select>

      <div class='columns fw'>
      <div class='middle fw'>
      <h3>Use own RDS CALs</h3>
      <input type='checkbox'></input>
      </div>

      <div class='middle fw'>
      <h3>Customize VPC settings<input type='checkbox'></input></h3></div>
      </div>
    `,

    //1 - Map view
    `
      <div flex='r' class='fw' style='padding:20px 0'>
        <div class='fw' style='margin-right:10px;'>
          <label>Name</label><br>
          <input style='margin-top:10px' type='text' placeholder='name'></input>
        </div>
        <div class='fw' style='margin-left:10px;'>
          <label>Name</label>
          <input style='margin-top:10px' type='text' placeholder='name'></input>
        </div>
      </div>
      <br><br><br>
      <div class='sector fw'>
        <h3 class='fw'> Cloud Provider Region </h3>
        <div class='map-grid fw'>
          <div class='secondary active company'>${nutanixLogo} <span>|</span> Nutanix Xi</div>
          <div class='secondary company'>${nutanixLogo} <span>|</span> Amazon AWS</div>
          <div class='secondary company'>${nutanixLogo} <span>|</span> Google GCP</div>
          <div class='secondary company'>${nutanixLogo} <span>|</span> Microsoft Azure</div>
        </div>
        <div flex='r' class='map-grid fw'>
          <div class='secondary place'> 🇩🇪  &nbsp; Frankfurt</div>
          <div class='secondary place'> 🇪🇸  &nbsp; Toledo </div>
          <div class='secondary place'> 🇺🇸  &nbsp; San Jose</div>
          <div class='secondary place'> 🇪🇨  &nbsp; Quito </div>
        </div>
        <img class='map-graphic' src='../img/map.svg'>
      </div>
      <br><br>

      <div class='fw'>
        <h3 class='fw'> Imange Family </h3><br>
        <div class='map-grid map-grid-card fw'>
        </div>
      </div>

      <br>
      <h3 class='fw'> Imange Family </h3><br>
      <div class='map-grid map-grid-card fw'>
      </div>

      <br>  <br>
      <h3 class='fw'> Imange Family </h3><br>
      <div class='map-grid map-grid-card fw'>
      </div>

      <br>  <br>
      <div class='middle fw'>
      <h3>Customize VPC settings<input type='checkbox'></input></h3>
      </div>

    `
  ],

  footer:[
    //0
    `<button class="secondary save" onclick="removePopup()"" style='width:auto'>Cancel</button>
    <button class="primary save" onclick="removePopup()" style='width:auto; margin-left:10px'>Create</button>
    `,
  ]
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
