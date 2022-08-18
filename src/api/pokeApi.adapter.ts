import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiAdapterAxios implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    console.log('axios')
    return data;
  }

  async post(url: string, payload: any) {}
  async put(url: string, payload: any) {}
  async delete(url: string) {}
}

export class PokeApiAdapterFetch implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    console.log('fetch')
    return data;
  }
}
