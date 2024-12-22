import React, { useEffect, useState } from "react";
import "./Home.css";

type Client = {
  name: string;
  nationality: string;
  occupation: string;
  email: string;
};

const Home: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("https://localhost:7046/api/Clients");
        if (!response.ok) {
          throw new Error("Failed to fetch clients DEBUG DEBUG");
        }
        const data = await response.json();
        setClients(data);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchClients();
  }, []);
  return (
    <div className="main-cont">
      <h1 className="title">CLIENT LIST</h1>
      <table className="client-table">
        <thead>
          <tr>
            <th className="th1">Name</th>
            <th className="th2">Nationality</th>
            <th className="th3">Occupation</th>
            <th className="th4">Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td className="td1">{client.name}</td>
              <td className="td2">{client.nationality}</td>
              <td className="td3">{client.occupation}</td>
              <td className="td4">{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
