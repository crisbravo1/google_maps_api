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

      var request= {

          origin:marker_position,
          /*destination:new google.maps.LatLng(44.5403, -78.5463),*/
          destination:"Playa Gasparico Lagunamar",
          travelMode: google.maps.DirectionsTravelMode.DRIVING

      };

      directionsService.route(request, function(response, status) {


             if (status == google.maps.DirectionsStatus.OK) {
               directionsDisplay.setDirections(response);

             }
      });



  }

  google.maps.event.addDomListener(window, 'load', routing);
