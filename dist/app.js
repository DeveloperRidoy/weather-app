//classes
const weather = new Weather;
const ui = new UI;
const storage = new Storage;

//search form
const searchForm = document.querySelector('.change-location');

//listen for dom content load
document.addEventListener('DOMContentLoaded', app)

//listen for city search
searchForm.addEventListener('submit', searchCityFunc)






//function on pageload
function app() {
 
    //get weather info from storage
    if (storage.getCityName()) {
        const city = storage.getCityName();

        //show weather in the UI
        weather.getCityKey(city)
        .then(cityKey => { 
            
            //get weather info using city key
            weather.cityWeather(cityKey)
            .then(weatherInfo => {

        

                //show weather in the UI
                ui.showWeather(weatherInfo,city);
            })
            .catch(err => console.log(err));

        })
        .catch(err => console.log(err));
    }else{
      
    }
    
} 


//function for search city
function searchCityFunc(e) {
    
    e.preventDefault();
    const city = searchForm.city.value.trim().toLowerCase();
    
    //get city key 
    weather.getCityKey(city)
    .then(cityKey => {
        
         
        //get weather info using city key
        weather.cityWeather(cityKey)
        .then(weatherInfo => {

            //store city name in storage
            storage.saveCityName(city);

            //show weather in the UI
            ui.showWeather(weatherInfo,city);
        })
        .catch(err => console.log(err));

    }) 
    .catch(err => {
        ui.showAlert('wrong city information!', 'alert alert-danger');
        console.log('nani');
    });
  
     

    
}