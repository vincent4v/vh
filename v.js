var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
$(document).ready(function(){ 	$('body').find('img[src$="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]').remove(); });
var styles = {
  // img[src*="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]
  imgSrcHttpsCdn000webhostCom000webhostLogoFooterPoweredBy000webhostWhite2PngElement: {
    display: "none"
  }
}
