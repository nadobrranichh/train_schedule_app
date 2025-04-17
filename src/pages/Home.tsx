// import React from "react";
import { useState, useEffect } from "react";
import HomeBackground from "../assets/home-bg.jpeg";
import CreateRecordForm from "../components/CreateRecordForm";
import TrainsTable from "../components/TrainsTable";
import { Train } from "../types";

const Home = () => {
  const [trains, setTrains] = useState<Train[]>([]);

  const fetchTrainsData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/get-trains`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        return data.trains;
      } else {
        alert(data.error);
        return [];
      }
    } catch (error) {
      alert(error);
      return [];
    }
  };

  useEffect(() => {
    const getTrains = async () => {
      const trains = await fetchTrainsData();
      setTrains(trains);
    };

    getTrains();
  }, []);

  const deleteTrain = async (number: number) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/delete-train", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          number: number,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setTrains((trains) =>
          trains.filter((train) => train.number !== number)
        );
      }
    } catch (error) {
      alert(error);
    }
  };

  const isValidTime = (time: string) => {
    const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(time);
  };

  const addTrain = async (
    from_city: string,
    to_city: string,
    departure_time: string,
    arrival_time: string,
    station: string
  ) => {
    try {
      if (!isValidTime(departure_time) || !isValidTime(arrival_time)) {
        alert("Enter valid departure and arrival time");
        return;
      }
      if (from_city === "" || to_city === "") {
        alert("Please choose the destination and arrival cities");
        return;
      }
      if (from_city === to_city) {
        alert("The train record should be between two different cities");
        return;
      }
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/add-train", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          from_city: from_city,
          to_city: to_city,
          departure_time: departure_time,
          arrival_time: arrival_time,
          station: station,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Added the new train record successfully!");
        setTrains((trains) => [...trains, data.newTrain]);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-black text-white flex flex-col items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${HomeBackground})` }}
      ></div>

      <p className="text-4xl font-bold text-white z-10 mt-16">
        Train Schedules
      </p>

      <TrainsTable trains={trains} deleteTrain={deleteTrain} />
      <p className="text-3xl font-bold text-white z-10 mt-16">Add a record:</p>
      <CreateRecordForm addTrain={addTrain} />
    </div>
  );
};

export default Home;
