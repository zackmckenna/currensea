export const QUERY = gql`
  query($data: String!) {
    fixer: getFixer(data: $data) {
      data
      success
      date
      timestamp
      rates {
        currency
        rate
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ fixer }) => {
  return (
    <ul>
      {fixer.rates.map((rate, index) => {
        return (
          <li key="index">
            {rate.currency} {rate.rate}
          </li>
        )
      })}
    </ul>
  )
  return JSON.stringify(fixer)
}
