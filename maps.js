
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


/*function routing() {


                /*Parametros del mapa para la funcion map */
/*
                var marker_position= new google.maps.LatLng(44.5403, -78.5463);

                var mapOptions = {

                  center:marker_position ,
                  zoom: 5,
                  mapTypeId: google.maps.MapTypeId.ROADMAP

                };


                var directionsService = new google.maps.DirectionsService;
                var directionsDisplay = new google.maps.DirectionsRenderer;

                var mapCanvas = document.getElementById('map');


                var map = new google.maps.Map(mapCanvas, mapOptions);

                var marker=new google.maps.Marker({ position:marker_position,});
*/


                /*marker.setMap(map);
                directionsDisplay.setMap(map);

                var request= {

                    origin:'Canada',
                    destination:'Chicago',
                    travelMode: google.maps.DirectionsTravelMode.DRIVING

                };

                directionsService.route(request, function(response, status) {


                       if (status == google.maps.DirectionsStatus.OK) {
                         directionsDisplay.setDirections(response);
                       }
                });*/*/

                /*directionsService.route({

                ,function(response, status) {

                if (status === google.maps.DirectionsStatus.OK) {

                  directionsDisplay.setDirections(response);

                } else {

                  window.alert('Directions request failed due to ' + status);
                }

                });*/

                /*Esto es para probar el routing de mi aplicacion de google maps*/



                /*var directionsRequest = {
                  origin: marker_position,
                  destination:new google.maps.LatLng(44.5403, -75.5463),
                  travelMode: google.maps.DirectionsTravelMode.DRIVING,

                };

                directionsService.route(directionsRequest, function(response, status){

                        if (status == google.maps.DirectionsStatus.OK){

                                new google.maps.DirectionsRenderer({
                                map: mapObject,
                                directions:response
                                });

                        } else {


                            console.log("Unable to retrive your request");


                        }
               );*/

                /*calculateAndDisplayRoute(directionsService, directionsDisplay);



            }

            function calculateAndDisplayRoute(directionsService, directionsDisplay,initial) {


              directionsService.route({

                origin:initial,
                destination:new google.maps.LatLng(44.5403, -75.5463),
                travelMode: google.maps.TravelMode.DRIVING
                },function(response, status) {

                if (status === google.maps.DirectionsStatus.OK) {

                  directionsDisplay.setDirections(response);

                } else {

                  window.alert('Directions request failed due to ' + status);
                }

                });*/
/*
            }


            google.maps.event.addDomListener(window, 'load', routing);*/
