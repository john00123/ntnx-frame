const frameLogo = `<svg width="24px" height="27px" viewBox="0 0 24 27" version="1.1" xmlns="http://www.w3.org/2000/svg"
class='logo'>

<polygon class="cube-back" fill="#37414B"
points="22.4385565 18.5968893 13.2141193 13.1748883 12.1389367 13.804749 12.1389367 14.8479388 21.4091969 20.2968191 22.4400456 19.6965597"></polygon>
<polygon class="cube-back" fill="#37414B"
points="12.9592893 1.5619479 11.9880038 1 11 1.57521744 11 12.3632834 12.106724 13.0136948 12.9592893 11.5952153"></polygon>
<polygon class="cube-back" fill="#37414B"
points="1.29712979 18.5287724 1.29875424 19.7254805 2.24810968 20.2748393 11.5333284 14.8353497 11.5333284 13.7934528 10.4586872 13.1618229"></polygon>

<path d="M22,19.1401789 L13,24.5 L13,14.3839752 L21.9859059,9 L22,19.1401789 Z M21,6.96932515 L11.9787805,12 L3,6.97621469 L11.9780263,2 L21,6.96932515 Z M11,14.3918581 L11,24.5 L2,19.4195242 L2,9 L11,14.3918581 Z M23.9837691,7.54803609 C23.9829474,6.96813462 23.668086,6.42808566 23.1618974,6.13871299 L12.8017391,0.217012498 C12.5533013,0.0750124681 12.2704191,0 11.9837706,0 C11.6955471,0 11.4112954,0.0758285602 11.1618989,0.219256752 L0.818038334,6.1689084 C0.312671441,6.45957321 -0.000751902193,7.00043827 1.35469394e-06,7.58047575 L0.0162306167,19.4518279 C0.0170523515,20.0319334 0.331982208,20.5718463 0.838102359,20.861151 L11.1982606,26.7829195 C11.4467669,26.9249195 11.7295806,27 12.0162291,27 C12.3045211,27 12.5887044,26.9241034 12.8381009,26.7806752 L23.1819614,20.8310236 C23.6873283,20.5403588 24.0008201,19.9995617 23.9999984,19.4195242 L23.9837691,7.54803609 Z" fill='#4D5969'></path>
</svg>`

const frameHeader = `<div class='right'>${frameLogo} Frame Admin </div>
`

const subHeader = ['Systems', 'Status','Launchpads','Settings'];

//initial setup
$('header').append(frameHeader);


$('.sub-item').click(function(){
  $('.sub-item').removeClass('sub-active');
  $(this).addClass('sub-active');
})
