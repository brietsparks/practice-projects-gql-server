import axios from 'axios';
import { parse } from 'jsonapi-util';

export default class JSONAPIConnector {

  constructor({ rootEndpoint, authorizationHeader }) {
    this.rootEndpoint = rootEndpoint;
    this.authorizationHeader = authorizationHeader;
    this.axios = axios.create({
      baseURL: rootEndpoint,
      // timeout: 3000,
      headers: {'Content-Type': 'application/vnd.api+json'},
    });
  }

  setAuthorization(authorization) {
    this.axios.defaults.headers.common['Authorization'] = authorization;
  }

  deserializeDataFromResponse(response) {
    return parse(response.data).data;
  }

  async sendGetRequest({ path }) {
    const res = await this.axios.get(path);

    return this.deserializeDataFromResponse(res);
  }

  async sendPostRequest({ path, data }) {
    data = data.data ? data : { data };

    const res = await this.axios.post(path, data);

    return this.deserializeDataFromResponse(res);
  }

  async sendDeleteRequest({ path, data }) {
    const res = await this.axios.delete(path, { data: { data } });

    // todo: how to read json api delete result?

    return true;
  }

  async sendPatchRequest({ path, data }) {
    data = data.data ? data : { data };

    const res = await this.axios.patch(path, data);

    return this.deserializeDataFromResponse(res);
  }

}