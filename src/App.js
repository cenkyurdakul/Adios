// İlk olarak react app oluşturdum.
// Daha sonra html verilerini oluşturdum.
// En üstte checkbox inputu yerleştirdim, böylece tek yön seçildiği zaman dönüş tarihi için takvim çıkmamasını sağladım.
// İkinci olarak gidiş havaalanı, dönüş havaalanı,gidiş tarihi ve dönüş tarihi seçilen bir form oluşturdum.
// Search Fligth butonuna basıldığı zaman, gidiş uçuşları ve dönüş uçuşları sonuçlarını ayrı ayrı gösterecek kutular oluşturdum.
// Oluşturduğum html verilerini App.css dosyasında uzun uzun yazmak yerine tailwind.css kütüphanesini kullanarak, App.js dosyasında direkt yazdım. 
// Butonlara, checkboxlara onClick ve onChange fonksiyonlarını tanımlamak için react-hook-form kütüphanesini kullandım.



import './App.css'
import { useForm } from "react-hook-form"
import React, { useState } from 'react';
import DropdownComponent from './components/DropdownComponent';


function App() {
  const [departureDate, setDepartureDate] = useState(''); // Gidiş tarihi
  const [returnDate, setReturnDate] = useState('');       // Dönüş tarihi
  const [showInput, setShowInput] = useState(true);       // One Way Checkboxına basıldığında dönüş takvimi kapanması için
  const [showResult,setShowResult] = useState(false);     // Search Flight butonuna basıldığı zaman sonuçları döndürmesi için

  const handleCheckboxChange = () => {
    setShowInput(!showInput);
  }; // Dönüş takvimini açıp kapatan fonksiyon

  const handleButtonChange = (e) => {
    e.preventDefault();
    setShowResult(!showResult);
  }; // Arama sonuçlarının ekrana gelmesini sağlayan fonksiyon

  const {
    register,
    formState: { errors },
  } = useForm()

  const submitHandler = (e) => { };


  return (


    <div class="max-w-full" className="App">
      <form class="max-w-full" onSubmit={submitHandler}>
        <div class="mx-2  flex justify-center text-center m-4 px-4 border rounded bg-slate-100 border-slate-400 items-center py-1">

          <label for="roundTrip">Round Trip  /  </label>  


          <label for="oneWay">One Way</label>
          <input
            id="oneWay"
            type="checkbox"
            name="oneWay"
            onChange={handleCheckboxChange}
          //onClick={toggleInput()} 
          />

        </div>

        <div class="mx-2 px-2 flex-nowrap justify-center border-solid border-1 rounded-sm flex  text-center  ">

          <DropdownComponent

            placeholder="From Where" {...register("fromWhere", { required: true })} />

          {errors.fromWhere && <span>This field is required</span>}

          {showInput && (
            <input
              value={departureDate}
              className="rounded border border-solid border-slate-400 bg-slate-100 border-1 flex-2 p-2 m-1"
              type="date"
              placeholder="Departure Date" {...register("departureDate", { required: true })}
              onChange={(e) => setDepartureDate(e.target.value)}
            />)}
          {errors.departureDate && <span>This field is required</span>}


          <div id="inputContainer">
            <input
              value={returnDate}
              className="rounded border border-solid border-slate-400 bg-slate-100 border-1 flex-2 p-2 m-1"
              type="date"
              id="returnDate"
              placeholder="Date Of Return" {...register("dateOfReturn", { required: true })}
              onChange={(e) => setReturnDate(e.target.value)} />
            {errors.dateOfReturn && <span>This field is required</span>}
          </div>


          <button
            className="rounded border-solid border-slate-400 bg-slate-200 border-2 font-bold p-2 m-1"
            type="submit"
            onClick={handleButtonChange}
            >Search Flight

          </button>


        </div>



      </form>

      <container>
      {showResult && 
        <div>
            
          <h3>
            Departing Fligth
          </h3>

          <div class=" box-border h-32 mx-2 flex justify-center text-center m-4 px-4 border rounded bg-slate-100 border-slate-400 items-center py-1">

          </div>

        </div>}

        {showResult && 
        <div>

          <h3>
            Return Fligth
          </h3>
          <div class=" box-border h-32 mx-2 flex justify-center text-center m-4 px-4 border rounded bg-slate-100 border-slate-400 items-center py-1">

          </div>

        </div>}
      </container>

    </div>
  )
} export default App