'use strict';
let map,mapEvent;
class App{
    constructor(){
        this._getPosition();
    }
    _getPosition(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
                alert('could not get your location')
            });
            }
    }
    _loadMap(position){
            // console.log(position);
            const {latitude}=position.coords;
            const {longitude}=position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude},11z?entry=ttu`);
        
            const coords=[latitude,longitude]
            console.log(latitude,longitude);
            this.map = L.map('map').setView(coords,16);
            console.log(map);
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        
            this.map.on('click',function(mapEv){
                this.mapEvent=mapEv;
                // form.classList.remove('hidden');
                inputDistance.focus();
            });
        }
    // _showForm(){}

}
const app=new App();
// form.addEventListener('submit',function(e){
    // e.preventDefault();
        // L.marker([latitude,longitude]).addTo(map)
    // .bindPopup()
// })

// document.getElementById('.btn').addEventListener('click', function() {
//     var donateFoodDiv = document.createElement('div');

//     donateFoodDiv.innerHTML = '<p>Donate Food</p>';

//     document.body.appendChild(donateFoodDiv);
//   });