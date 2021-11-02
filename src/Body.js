import './Body.css';

function Body({data}) {

    const city=data.name; 
    const current=data.main.temp;
    const min=data.main.temp_min; 
    const max=data.main.temp_max;
    const feelsLike=data.main.feels_like;

    return (
        <div className="body">

            <div className="body__header">
                <h2>{city}</h2>
                <div className="body__details">

                <h4>Temperature : {(current-273.15).toFixed(2)} °C</h4>
                <h4>Minimum : {(min-273.15).toFixed(2)}°C</h4>
                <h4>Maxmium : {(max-273.15).toFixed(2)} °C</h4>
                <h4>Feels Like : {(feelsLike-273.15).toFixed(2)} °C</h4>
            </div>
            </div>
            
        </div>
    )
}

export default Body
