if(!navigator.geolocation){
    alert('Su navegador no soporta geolocalizacion!');
}else{
    navigator.geolocation.getCurrentPosition(
        ({coords:{latitude, longitude}}) => {
            const coords =  {
                lat: latitude,
                lng: longitude,
            }
            console.log(coords);
            document.getElementById('geo').innerHTML = "So posicion es: " + coords.lat + "," + coords.lng;
        },
        () => { 
            alert('Tu navegador soporta GPS, pero algo salio mal!');
        }
    )
}