import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { homeStore } from "../../stores/homeStore";
import "./Home.css";

const Home: React.FC = observer(() => {
  const { clients, fetchClients } = homeStore;

  useEffect(() => {
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
});

export default Home;
