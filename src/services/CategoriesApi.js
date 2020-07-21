import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export default class CategoriesApi {
  static getCategoryItems() {
    return axios.get(`${baseUrl}/categories/items`);
  }
}
