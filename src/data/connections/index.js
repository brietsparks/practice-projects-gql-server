import JSONAPIConnector from './JSONAPIConnector';
import { PROJECTS_JSONAPI_ENDPOINT_URL } from '../../config';

export const projectsAPIConnection = new JSONAPIConnector({
  rootEndpoint: PROJECTS_JSONAPI_ENDPOINT_URL
});