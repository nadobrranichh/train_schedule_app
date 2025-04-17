import { useState } from "react";
// import React from "react";

type AddTrainFunction = (
  from_city: string,
  to_city: string,
  departure_time: string,
  arrival_time: string,
  station: string
) => void;

const CreateRecordForm = ({ addTrain }: { addTrain: AddTrainFunction }) => {
  const [from_city, setFrom_city] = useState("");
  const [to_city, setTo_city] = useState("");
  const [departure_time, setDeparture_time] = useState("");
  const [arrival_time, setArrival_time] = useState("");
  const [station, setStation] = useState("");

  return (
    <div className="bg-transparent rounded-xl border-white border z-10 p-5 mt-4 flex flex-col items-center">
      <div>
        <p className="text-white text-xl inline-block">From:</p>
        <select
          className="border-b border-white text-lg text-white ms-3 mb-2 bg-transparent text-black"
          value={from_city}
          onChange={(e) => setFrom_city(e.target.value)}
        >
          <option className="text-black bg-white" value="">
            Choose the city
          </option>
          <option className="text-black bg-white" value="Kyiv">
            Kyiv
          </option>
          <option className="text-black bg-white" value="Lviv">
            Lviv
          </option>
          <option className="text-black bg-white" value="Odesa">
            Odesa
          </option>
          <option className="text-black bg-white" value="Kharkiv">
            Kharkiv
          </option>
          <option className="text-black bg-white" value="Dnipro">
            Dnipro
          </option>
          <option className="text-black bg-white" value="Zaporizhzhia">
            Zaporizhzhia
          </option>
          <option className="text-black bg-white" value="Ternopil">
            Ternopil'
          </option>
          <option className="text-black bg-white" value="Zhytomyr">
            Zhytomyr
          </option>
        </select>
      </div>

      <div>
        <p className="text-white text-xl inline-block">To:</p>
        <select
          className="border-b border-white text-lg text-white ms-3 mb-2 bg-transparent text-black"
          value={to_city}
          onChange={(e) => setTo_city(e.target.value)}
        >
          <option className="text-black bg-white" value="">
            Choose the city
          </option>
          <option className="text-black bg-white" value="Kyiv">
            Kyiv
          </option>
          <option className="text-black bg-white" value="Lviv">
            Lviv
          </option>
          <option className="text-black bg-white" value="Odesa">
            Odesa
          </option>
          <option className="text-black bg-white" value="Kharkiv">
            Kharkiv
          </option>
          <option className="text-black bg-white" value="Dnipro">
            Dnipro
          </option>
          <option className="text-black bg-white" value="Zaporizhzhia">
            Zaporizhzhia
          </option>
          <option className="text-black bg-white" value="Ternopil">
            Ternopil'
          </option>
          <option className="text-black bg-white" value="Zhytomyr">
            Zhytomyr
          </option>
        </select>
      </div>

      <div>
        <p className="text-white text-xl inline-block">Departure Time:</p>
        <input
          type="time"
          className="border-b border-white text-lg text-white ms-3 mb-2 w-20"
          value={departure_time}
          onChange={(e) => {
            setDeparture_time(e.target.value);
          }}
        />
      </div>

      <div>
        <p className="text-white text-xl inline-block">Arrival Time:</p>
        <input
          type="time"
          className="border-b border-white text-lg text-white ms-3 mb-2 w-20 text-center"
          value={arrival_time}
          onChange={(e) => {
            setArrival_time(e.target.value);
          }}
        />
      </div>

      <div>
        <p className="text-white text-xl inline-block">Station:</p>
        <input
          type="text"
          className="border-b border-white text-lg text-white ms-3"
          value={station}
          onChange={(e) => {
            setStation(e.target.value);
          }}
        />
      </div>

      <button
        className="w-80 border-none z-10 bg-white text-black mt-8 px-8 rounded rounded-lg py-1 cursor-pointer self-center"
        onClick={() => {
          addTrain(from_city, to_city, departure_time, arrival_time, station);

          setFrom_city("");
          setTo_city("");
          setDeparture_time("");
          setArrival_time("");
          setStation("");
        }}
      >
        Add the record
      </button>
    </div>
  );
};

export default CreateRecordForm;
