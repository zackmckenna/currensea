import fetch from 'node-fetch'

export const getParity = async ({ data, amount, country }) => {
  const response = await fetch(
    `https://api.purchasing-power-parity.com/?target=${data}`
  )

  const json = await response.json()
  // const objectArray = Object.entries(json.rates)
  // console.log(objectArray)
  // const objectArray2 = objectArray.map((subArray) => {
  //   return {
  //     currency: subArray[0],
  //     rate: subArray[1],
  //   }
  // })

  return {
    country,
    amount,
    data,
    ppp: json.ppp.ppp,
    pppConversionFactor: json.ppp.pppConversionFactor,
    countryCodeIsoAlpha2: json.ppp.countryCodeIsoAlpha2,
    currenciesCountry: json.ppp.currenciesCountry,
    countryCodeIsoAlpha3: json.ppp.countryCodeIsoAlpha3,
    currencyMain: json.ppp.currencyMain,
  }
}
