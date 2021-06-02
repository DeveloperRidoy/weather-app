class Weather {

    constructor() {
        this.apiKey = '7U7A3GzeEkE9bwFOKDkn3LM0SEFMfGXE';
        this.base = 'https://dataservice.accuweather.com';
    }

    async getCityKey(city){

        const query = `/locations/v1/cities/search?apikey=${this.apiKey}&q=${city}&alias=${city}`;
        const res = await fetch(`${this.base}${query}`,{ method: 'get' });
        
        const key = await res.json();
        return key[0].Key; 
    }

    async cityWeather(cityKey){

        const query = `/currentconditions/v1/${cityKey}?apikey=${this.apiKey}`;
        const res = await fetch(`${this.base}${query}`,{ method: 'get' });
         
        const weather = await res.json();
        return weather[0];           
    }

   
}
