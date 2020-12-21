class UI{
    constructor() {
        this.details = document.querySelector('.details');
        this.card = document.querySelector('.card')
        this.time = document.querySelector('img.time');
        this.icon = document.querySelector('.icon img');
    }

    showWeather(info,city){
        this.card.classList.remove('d-none');
        
        const src = info.IsDayTime? './images/time/day.svg' : './images/time/night.svg';

        this.time.setAttribute('src', src);

        this.icon.setAttribute('src', `./images/icons/${info.WeatherIcon}.svg`)

        this.details.innerHTML = `
                                <h5 class="my-4">${city}</h5>
                                <div class="my-3">${info.WeatherText}</div>
                                <div class="my-4 display-4">
                                    <span>${info.Temperature.Metric.Value}</span>
                                    <span>&deg;c</span>
                                </div>
    
                                `
    }

    showAlert(msg,alertClass){
        const div = document.createElement('div');
        div.classList = alertClass;
        div.textContent = msg

        if (!document.querySelector('.alert')) {
            document.querySelector('.weather').insertBefore(div, searchForm);    
        }
        

        setTimeout(() => {
            if (document.querySelector('.alert')) {
                document.querySelector('.alert').remove()
            }
        }, 3000);
    }
 

}