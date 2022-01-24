import axios from 'axios';

export class DogApi {
  private static _BASE_URL = 'https://api.thedogapi.com/';

  static getRandomDogs(count: number, page: number) {
    return axios.get(
      this._BASE_URL +
        `v1/images/search?limit=${count}&page=${page}&order=Desc`,
    );
  }
}
