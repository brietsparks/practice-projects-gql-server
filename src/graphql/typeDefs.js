export default`
  type Project {
    id: ID!
    owner_id: String!
    title: String!
    subtitle: String
    skills: [Skill]
  }
  
  type Skill {
    id: ID!
    creator_id: String!
    name: String!
  }
  
  type Query {
    ProjectsByOwnerId(
      owner_id: String!
    ): [Project]
  }
  
  type Mutation {
    createProject(
      owner_id: String!
      title: String!
    ): Project
    
    updateProject(
      id: ID!
      title: String!
      subtitle: String
    ): Project
    
    deleteProject(
      id: ID!
    ): Boolean
    
    createSkill(
      creator_id: String!
      name: String!
    ): Skill
    
    attachSkillToProject(
      skill_id: ID!
      project_id: ID!
    ): Boolean
    
    detachSkillFromProject(
      skill_id: ID!
      project_id: ID!
    ): Boolean
  }
`;