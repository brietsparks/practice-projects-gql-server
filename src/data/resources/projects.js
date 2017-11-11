export const projects = [
  {
    id: "1",
    owner_id: "1",
    title: 'my project title',
    subtitle: 'my project subtitle',
  }
];

export default {
  getManyByOwnerId: owner_id => projects.filter(p => p.owner_id === owner_id),
};
