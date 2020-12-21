class Storage{
    constructor() {
 
    }  

    saveCityName(city){
        let location;
        if (localStorage.getItem('location') == null) {
            localStorage.setItem('location', JSON.stringify(city));
        }else{
            location = JSON.parse(localStorage.getItem('location'));
        }

        location = city;
        localStorage.setItem('location', JSON.stringify(location));

    }

    getCityName(){
        let city;
        if (localStorage.getItem('location')) {
            city = JSON.parse(localStorage.getItem('location'));
            return city;
        }else{return false};
       
    }
    
}