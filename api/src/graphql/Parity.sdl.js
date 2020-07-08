export const schema = gql`
  type Parity {
    country: String!
    amount: Float!
    data: String!
    countryCodeIsoAlpha2: String!
    currenciesCountry: [CurrenciesCountry!]
    countryCodeIsoAlpha3: String!
    currencyMain: String!
    ppp: Float!
    pppConversionFactor: Float!
  }

  type CurrenciesCountry {
    code: String!
    name: String!
    symbol: String!
  }

  type CurrencyMain {
    exchangeRate: Float
    code: String!
    name: String!
    symbol: String!
  }

  type Query {
    getParity(data: String!, amount: Float!, country: String!): Parity!
  }
`
