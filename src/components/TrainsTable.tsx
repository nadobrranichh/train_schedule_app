// import React from 'react';
import { Train } from "../types";

type DeleteTrainFunction = (trainNumber: number) => void;

const TrainsTable = ({
  trains,
  deleteTrain,
}: {
  trains: Train[];
  deleteTrain: DeleteTrainFunction;
}) => {
  return (
    <div className="overflow-x-auto mt-6 z-10">
      <table className="min-w-full text-left text-xl">
        <thead className="bg-white-t text-center">
          <tr>
            <th className="p-2 text-black">Train №</th>
            <th className="p-2 text-black">Direction</th>
            <th className="p-2 text-black">Departure</th>
            <th className="p-2 text-black">Arrival</th>
            <th className="p-2 text-black">Station</th>
            <th className="p-2 text-black">Delete?</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.number}>
              <td className="p-2 border">{train.number}</td>
              <td className="p-2 border">{`${train.from_city} - ${train.to_city}`}</td>
              <td className="p-2 border">{train.departure_time}</td>
              <td className="p-2 border">{train.arrival_time}</td>
              <td className="p-2 border">{train.station}</td>
              <td className="p-2 border">
                <button
                  className=" z-10 bg-red-t rounded rounded-lg px-3 py-1 cursor-pointer font-bold border border-black"
                  onClick={() => {
                    deleteTrain(train.number);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainsTable;
