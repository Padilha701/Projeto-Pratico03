window.onload = function (){
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-23.503164654,-47.608497566),
            scrollwheel: false,
            zoom:12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map"), mapProp);

    }
    
    function addMarker(lat,long,icon,content){
        var latLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0,20)
        });

        google.maps.event.addListener(marker,'click', function(){
            infoWindow.open(map,marker);
        });
        
    }

    initialize();

    var conteudo = '<p style="Color:black;font-size:13px;padding:10px 0;">Meu Endereço</p>';
    addMarker(-23.504390,-47.614330,'',conteudo);
}