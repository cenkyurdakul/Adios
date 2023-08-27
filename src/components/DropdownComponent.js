// Bu dosyada, havaalanları verilerini pulldown olarak listeleme için kullandım. 
// Daha sonrasında export ederek, App.js dosyasına import ettim.



import airportData from './airportdata.js';
import React, { useState } from 'react';



const DropdownComponent = () => {
  const [fromAirport, setFromAirport] = useState(''); // Gidiş havaalanı
  const [toAirport, setToAirport] = useState('');     // Dönüş havaalanı
  

  
  
  return (
    <div class="mx-2 px-2 flex-nowrap justify-center border-solid border-1 rounded-sm flex  text-center ">

      <select className ="rounded border  border-solid border-slate-400 bg-slate-100 border-1 flex-1 p-2 m-1">
      value={fromAirport} 
      onChange={(e) => setFromAirport(e.target.value)}
      <option 
      value="" disabled selected> From Where</option>
        {airportData.map((airport, index) => (
          <option key={index} value={airport}>
            {airport}
          </option>
        ))}
      </select>

      <select 
      value={toAirport}
      onChange={(e) => setToAirport(e.target.value)}
      className ="rounded border  border-solid border-slate-400 bg-slate-100 border-1 flex-1 p-2 m-1">
      <option 
      value="" disabled selected
      > To Where</option>
        {airportData.map((airport, index) => (
          <option key={index} value={airport}>
            {airport}
          </option>
        ))}
      </select>

    </div>
  );
};

export default DropdownComponent;