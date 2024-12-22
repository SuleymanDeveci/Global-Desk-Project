import React, { useEffect, useState } from "react";

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
        const response = await fetch("http://localhost:7046/api/clients");
        if (!response.ok) {
          throw new Error("Failed to fetch clients");
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
    <div>
      <h1>Client List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Nationality</th>
            <th>Occupation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.nationality}</td>
              <td>{client.occupation}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
