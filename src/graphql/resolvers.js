import * as resources from '../data/resources';

export default {
  Project: {
    skills: async (project, {}, ctx) => {
      return await resources.skills.getManyByCreatorId(project.owner_id)
    },
  },

  Query: {
    ProjectsByOwnerId: async (root, { owner_id }, ctx) => {
      return await resources.projects.getManyByOwnerId(owner_id);
    },
  }
};