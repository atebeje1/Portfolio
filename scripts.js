function getLocation(){
    const successCallback = (position) => {
      console.log(position);
    };
    
    const errorCallback = (error) => {
      console.log(error);
    };
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}
function printZip(){
    console.log(document.getElementById('zip').value)
}