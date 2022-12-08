class LedaRequests {
  url: string;
  constructor(url: string) {
    this.url = url
  }

  async getContract(id : string) {
    try {
      const response = await fetch(`${this.url}/contracts/${id}`);
      const { data: contract } = await response.json();
      return contract;
    } catch (err) {
      return err;
    }
  }

  async getContracts() {
    try {
      const response = await fetch(`${this.url}/contracts/`);
      const { data: contracts } = await response.json();
      return contracts;
    } catch (err) {
      return err;
    }
  }

  async getTalent(id: string) {
    try {
      const response = await fetch(`${this.url}/talent/${id}`);
      const { data: talent } = await response.json();
      return talent;
    } catch (err) {
      return err;
    }
  }

  async getTalents() {
    try {
      const response = await fetch(`${this.url}/talent`);
      const { data: talent } = await response.json();
      return talent;
    } catch (err) {
      return err;
    }
  }

  async getOpenWindow(id: string) {
    const response = await fetch(`${this.url}/open-windows/${id}`);
    const { data: open_windows } = await response.json();
    return open_windows;
  }

}


const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://wwww.myurl.com';
const endpoint = url + '/api';

const api = new LedaRequests(endpoint);


export default api

