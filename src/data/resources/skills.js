import { projectsAPIConnection as connection } from '../connections';

export default {

  async create({ creator_id, name }) {
    const data = {
      type: 'skills',
      attributes: { creator_id, name }
    };

    const path = `/skills`;

    return await connection.sendPostRequest({ path, data });
  },

  async delete({ id }) {
    const path = `/skills/${id}`;

    const success = await connection.sendDeleteRequest({ path });

    return success ? id : null;
  },

}