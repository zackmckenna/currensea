export const QUERY = gql`
  query($data: String!, $amount: Float!, $country: String!) {
    parity: getParity(data: $data, amount: $amount, country: $country) {
      country
      amount
      data
      ppp
      pppConversionFactor
      currenciesCountry {
        code
        name
        symbol
      }
      countryCodeIsoAlpha2
      countryCodeIsoAlpha3
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div>There is no PPP data for target country</div>
)

export const Success = ({ parity }) => {
  console.log(JSON.stringify(parity))
  return (
    <p>
      Something that costs {parity.amount} USD in the US should cost{' '}
      {Math.trunc(parity.amount * parity.pppConversionFactor)} USD in{' '}
      {parity.country} to have equal parity
    </p>
  )
}
