import React, { useState, useEffect } from 'react';
import "./css/style.css";

const Tempapp = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b4d9786de455398352a6c25f3960f929`
            const response = await fetch(url);
            const reactjson = await response.json();
            console.log(reactjson);
            setcity(reactjson.main);
        }
        fetchApi();
    },[search])
    return (
        <>
            <div className="box">
                <div className="Inputdata">
                    <input
                        type="search"
                        className="Inputfield"
                        value={search}
                        onChange={(event) => {
                            setsearch(event.target.value);
                        }}
                    />
                </div>
            {!city? (<p className="errormsg">no data found</p>):
               (
                <div className="Info">
                <h2 className="loca">
                 <i className="fas fa-street-view"></i> {search} </h2>
                <h1 className="temp">
                    {city.temp}°Cel
                </h1>
                <h3 className="tempminmax">
                    min: {city.temp_min}°Cel || max: {city.temp_max}°Cel
                </h3>
                </div>
               ) }     
               <div className="wave -one"></div>                     
               <div className="wave -two"></div> 
               <div className="wave -three"></div> 
            </div>
        </>
    );
}
export default Tempapp;