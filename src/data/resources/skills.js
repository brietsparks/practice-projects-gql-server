export const skills = [
  {
    id: "100",
    creator_id: "1",
    name: 'PHP',
  }
];

export default {
  getManyByCreatorId: creator_id => skills.filter(p => p.creator_id === creator_id),
};
