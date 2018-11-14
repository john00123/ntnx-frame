
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
