export const schema = gql`
  type Fixer {
    data: String!
    success: String!
    timestamp: Int!
    base: String!
    date: String!
    rates: [Rate!]
  }

  type Rate {
    currency: String!
    rate: Float!
  }

  type Query {
    getFixer(data: String!): Fixer!
  }
`
