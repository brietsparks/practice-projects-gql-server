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
`;