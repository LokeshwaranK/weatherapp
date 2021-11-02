import './Header.css';
import {Button} from '@material-ui/core';
import { useState } from 'react';
import Body from './Body';

function Header() {

  const [data, setData] = useState('');
  const [city, setCity] = useState('');


        const  getCurrent=async(setCity)=>{
            const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";
            
        
            //make request to url
        
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`
            );
        
            const data = await response.json();
        
          
        setData(data);
            return data;
          }

    return (
        <div>
        <div className="header">
            <h1>Weather Forecast</h1>
            <div className="header__cityInput">
                  
                <input placeholder="Enter a City name " type='text' 
                  value={city} onChange={e => setCity(e.target.value)}/>
                <Button onClick={getCurrent}  variant="contained" color="primary">Check Weather</Button>
            </div>
        </div>
      
        {data.name ? 
        <Body data={data}/> : 
          city ? <p style={{color: "red",display: 'flex', margin: '70px', fontSize: '18px',marginTop: '-30px'}}>
            Please Enter Correct City Name and Click "CHECK WEATHER" Button </p> : <p></p>} 
        
        </div>
    )
}

export default Header
