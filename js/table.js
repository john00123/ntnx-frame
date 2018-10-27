const sortArrows = `<svg width="4px" height="8px" viewBox="0 0 4 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path d="M2.31658983,7.2580548 C2.29723022,7.28128633 2.27580293,7.30271363 2.25257139,7.32207324 C2.04043294,7.49885528 1.72515059,7.47019325 1.54836855,7.2580548 L0.11588936,5.53907977 C0.0410081097,5.44922227 1.46549439e-14,5.33595582 1.46549439e-14,5.21898757 C1.46549439e-14,4.94284519 0.223857625,4.71898757 0.5,4.71898757 L3.36495839,4.71898757 C3.48192664,4.71898757 3.59519309,4.75999568 3.68505059,4.83487693 C3.89718904,5.01165897 3.92585107,5.32694132 3.74906903,5.53907977 L2.31658983,7.2580548 Z M2.31658983,0.179920337 L3.74906903,1.89889537 C3.92585107,2.11103382 3.89718904,2.42631617 3.68505059,2.60309821 C3.59519309,2.67797946 3.48192664,2.71898757 3.36495839,2.71898757 L0.5,2.71898757 C0.223857625,2.71898757 3.92463839e-14,2.49512994 3.98014954e-14,2.21898757 C4.002354e-14,2.10201932 0.0410081097,1.98875287 0.11588936,1.89889537 L1.54836855,0.179920337 C1.72515059,-0.0322181112 2.04043294,-0.0608801431 2.25257139,0.115901897 C2.27580293,0.135261508 2.29723022,0.156688805 2.31658983,0.179920337 Z" id="Combined-Shape" fill="#D5DAE0"></path>
</svg>`

const serverHeader = ['Workload ID','Name', 'Public IP', 'Private IP', 'VM Kind', 'Instance Type', 'Status']

const serverData =[
  {id: 98 ,
  name: 'Demo Account 98',
  public: '32.32.32.23',
  private: '10.0.46.143',
  kind: 'Sandbox',
  type: 'Air 4GB',
  status: 'Stopped'},

  {id: 101,
  name: 'Demo Account 101',
  public: '32.32.32.23',
  private: '10.0.46.143',
  kind: 'Sandbox',
  type: 'Air 4GB',
  status: 'Stopped'},

  {id: 103,
  name: 'Demo Account 103',
  public: '32.32.32.23',
  private: '10.0.46.143',
  kind: 'Sandbox',
  type: 'Air 4GB',
  status: 'Stopped'},

  {id: 105,
  name: 'Demo Account 105',
  public: '32.32.32.23',
  private: '10.0.46.143',
  kind: 'Sandbox',
  type: 'Air 4GB',
  status: 'Stopped'},

  {id:  107  ,
  name: 'Demo Account 107 ',
  public: '32.32.32.23',
  private: '10.0.46.143',
  kind: 'Sandbox',
  type: 'Air 4GB',
  status: 'Stopped'},

  {id: 109,
  name: 'Demo Account 109',
  public: '32.32.32.23',
  private: '10.0.46.143',
  kind: 'Sandbox',
  type: 'Air 4GB',
  status: 'Stopped'},

  {id: 120,
  name: 'Demo Account 120',
  public: '32.32.32.23',
  private: '10.0.46.143',
  kind: 'Sandbox',
  type: 'Air 4GB',
  status: 'Stopped'},
];

function tableCreator(title, sourceHeader, sourceData){
$('container').append(`
  <h3 class='fw'>${title}</h3>
  <div class='table-container fw'>
    <table class='fw'>
      <tr> ${ sourceHeader.map(header => `<th>${header} ${sortArrows}</th>`).join('')}</tr>
      ${sourceData.map(data => `<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.public}</td>
        <td>${data.private}</td>
        <td>${data.kind}</td>
        <td>${data.type}</td>
        <td>${data.status}</td>
        </tr>`).join('')}
    </table>
  </div>
`)
}
