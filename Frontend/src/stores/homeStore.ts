import { makeAutoObservable } from "mobx";

type Client = {
  name: string;
  nationality: string;
  occupation: string;
  email: string;
};

class HomeStore {
  clients: Client[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setClients = (takenClients: Client[]) => {
    this.clients = takenClients;
  };

  fetchClients = async () => {
    try {
      const response = await fetch("http://localhost:5050/api/Clients");
      if (!response.ok) {
        throw new Error("Failed to fetch clients DEBUG DEBUG");
      }
      const data = await response.json();
      this.setClients(data);
    } catch (error: any) {
      console.log(error);
    }
  };
}

export const homeStore = new HomeStore();
