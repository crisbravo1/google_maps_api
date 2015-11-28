
function initialize() {


    /*Parametros del mapa para la funcion map */
    var mapOptions = {

      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    }


    var mapCanvas = document.getElementById('map');


    var map = new google.maps.Map(mapCanvas);


}

google.maps.event.addDomListener(window, 'load', initialize);


