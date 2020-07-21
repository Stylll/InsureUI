import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export default class ItemsApi {
  static createItem(requestBody) {
    return axios.post(`${baseUrl}/items`, requestBody);
  }
}
