function routing() {


                  /*Parametros del mapa para la funcion map */

      /*var marker_position= new google.maps.LatLng(44.5403, -78.5463);*/
      var marker_position= "Conjunto Isla del Rey, Porlamar";

      var mapOptions = {

        center:marker_position ,
        zoom:2,
        mapTypeId: google.maps.MapTypeId.ROADMAP

      };


      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;

      var mapCanvas = document.getElementById('map');


      var map = new google.maps.Map(mapCanvas, mapOptions);

      var marker=new google.maps.Marker({ position:marker_position,});



      marker.setMap(map);
      directionsDisplay.setMap(map);

      var buttons = document.getElementsByTagName("button");

      var buttonsCount = buttons.length;

      for (var i = 0; i <= buttonsCount; i += 1) {

          buttons[i].onclick = function(e) {

              var request= {
              origin:marker_position,
              /*destination:new google.maps.LatLng(44.5403, -78.5463),*/
              destination:document.getElementById(this.id).value,
              travelMode: google.maps.DirectionsTravelMode.DRIVING

              };

              directionsService.route(request,function(response, status) {

                if (status === google.maps.DirectionsStatus.OK) {
                  directionsDisplay.setDirections(response);

                } else {

                  window.alert('Directions request failed due to ' + status);
                }

              });

          };
      }

      /*var onClickHandler = function() {
        calculateRoute(directionsService, directionsDisplay);
      };

      document.getElementById('uno').addEventListener('click', onClickHandler);
      document.getElementById('dos').addEventListener('click', onClickHandler);*/


}

google.maps.event.addDomListener(window, 'load', routing);

/*function calculateRoute(directionsService, directionsDisplay) {






}
*/






