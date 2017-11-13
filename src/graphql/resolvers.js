import * as resources from '../data/resources';

export default {
  Query: {
    ProjectsByOwnerId: async (root, { owner_id }, ctx) => {
      return await resources.projects.getManyByOwnerId(owner_id);
    },
  },

  Mutation: {
    createProject: async (root, { owner_id, title }) => {
      return await resources.projects.create({ owner_id, title });
    },
    updateProject: async (root, { id, title, subtitle }) => {
      return await resources.projects.update({ id, title, subtitle });
    },
    deleteProject: async (root, { id }) => {
      return await resources.projects.delete({ id });
    },

    createSkill: async (root, { creator_id, name }) => {
      return await resources.skills.create({ creator_id, name });
    },
    deleteSkill: async (root, { id }) => {
      return await resources.skills.delete({ id });
    },

    attachSkillToProject: async (root, { project_id, skill_id }) => {
      return await resources.projects.attachSkill({ project_id, skill_id });
    },
    detachSkillFromProject: async (root, { project_id, skill_id }) => {
      return await resources.projects.detachSkill({ project_id, skill_id });
    },
  },
};