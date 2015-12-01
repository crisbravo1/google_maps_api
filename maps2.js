function routing() {




      /*Creo la posicion inicial de todos los mapas y del marker al cargar el mapa
      por primera vez*/
      var marker_position=new google.maps.LatLng(10.979885, -63.823678)

      var mapOptions = {

        center:marker_position ,
        zoom:14,
        mapTypeId: google.maps.MapTypeId.ROADMAP

      };

      /*creo el service de google maps que me permite buscar la ruta deseada desde el
      punto de inicio*/
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;

      var mapCanvas = document.getElementById('map');


      var map = new google.maps.Map(mapCanvas, mapOptions);

      var marker=new google.maps.Marker({ position:marker_position,});


      /*Coloco el marker en el mapa */
      marker.setMap(map);

      /*Esto lo uso para indicar donde se dibujara el recorrido */
      directionsDisplay.setMap(map);

      var buttons = document.getElementsByTagName("button");

      var buttonsCount = buttons.length;


      /*Coloco el event handler en todos los botones y ademas corro la funcion
      route la cual genera el corrido del punto inicial al destino*/

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



}

google.maps.event.addDomListener(window, 'load', routing);







