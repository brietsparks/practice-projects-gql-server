import { projectsAPIConnection as connection } from '../connections';

export default {

  async getManyByOwnerId(owner_id) {
    const filter = JSON.stringify({
      name: 'owner_id',
      val: parseInt(owner_id),
      op: 'eq'
    });

    const include = 'skills';

    const path = `/projects?filter=[${filter}]&include=${include}`;

    return await connection.sendGetRequest({ path });
  },

  async create({ owner_id, title }) {
    const data = {
      type: 'projects',
      attributes: { owner_id, title }
    };

    const path = `/projects`;

    return await connection.sendPostRequest({ path, data });
  },

  async delete({ id }) {
    const path = `/projects/${id}`;

    const success = await connection.sendDeleteRequest({ path });

    return success ? id : null;
  },

  async update({ id, title, subtitle }) {
    const data = {
      id,
      type: 'projects',
      attributes: { title, subtitle }
    };

    const path = `/projects/${id}`;

    return await connection.sendPatchRequest({ path, data });
  },

  async attachSkill({ project_id, skill_id }) {
    const data = [
      { type: 'skills', id: skill_id }
    ];

    const path = `/projects/${project_id}/relationships/skills`;

    return await connection.sendPostRequest({ path, data });
  },

  async detachSkill({ project_id, skill_id }) {
    const data = [
      { type: 'skills', id: skill_id }
    ];

    const path = `/projects/${project_id}/relationships/skills`;

    return await connection.sendDeleteRequest({ path, data });
  },

}