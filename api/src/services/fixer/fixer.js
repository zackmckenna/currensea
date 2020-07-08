import fetch from 'node-fetch'

export const getFixer = async ({ data }) => {
  // const response = await fetch(
  //   `http://data.fixer.io/api/latest?access_key=ab7661fa5277a55870ddb441b45d59ce`
  // )
  //   result: "success",
  // documentation: "https://www.exchangerate-api.com/docs",
  // terms_of_use: "https://www.exchangerate-api.com/terms",
  // time_last_update_unix: 1594166643,
  // time_last_update_utc: "Wed, 08 Jul 2020 00:04:03 +0000",
  // time_next_update_unix: 1594253163,
  // time_next_update_utc: "Thu, 09 Jul 2020 00:06:03 +0000",
  // base_code: "USD",
  // https://v6.exchangerate-api.com/v6/57b7f2436e214a76bc0127f5/latest/USD
  const response = {
    success: true,
    timestamp: 1594155125,
    base: 'USD',
    date: '2020-07-07',
    rates: {
      USD: 1,
      AED: 3.6719,
      ARS: 70.8147,
      AUD: 1.4391,
      BGN: 1.7336,
      BRL: 5.3608,
      BSD: 1,
      CAD: 1.3576,
      CHF: 0.9426,
      CLP: 799.1032,
      CNY: 7.0203,
      COP: 3630.8636,
      CZK: 23.6419,
      DKK: 6.6014,
      DOP: 58.0938,
      EGP: 16.0335,
      EUR: 0.886,
      FJD: 2.1668,
      GBP: 0.7987,
      GTQ: 7.7044,
      HKD: 7.7499,
      HRK: 6.6912,
      HUF: 313.1565,
      IDR: 14240.6959,
      ILS: 3.4534,
      INR: 74.8028,
      ISK: 139.0544,
      JPY: 107.6027,
      KRW: 1194.8591,
      KZT: 405.4772,
      MXN: 22.6008,
      MYR: 4.2755,
      NOK: 9.4447,
      NZD: 1.5277,
      PAB: 1,
      PEN: 3.5437,
      PHP: 49.4863,
      PKR: 165.7241,
      PLN: 3.9579,
      PYG: 6656.5833,
      RON: 4.2861,
      RUB: 71.7153,
      SAR: 3.7506,
      SEK: 9.2635,
      SGD: 1.3945,
      THB: 31.1801,
      TRY: 6.8631,
      TWD: 29.4493,
      UAH: 26.81,
      UYU: 42.8996,
      ZAR: 17.0979,
    },
  }
  // const json = await response.json()
  const json = response
  const objectArray = Object.entries(json.rates)
  console.log(objectArray)
  const objectArray2 = objectArray.map((subArray) => {
    return {
      currency: subArray[0],
      rate: subArray[1],
    }
  })

  return {
    data,
    success: json.success,
    timestamp: json.timestamp,
    base: json.base,
    date: json.date,
    rates: objectArray2,
  }
}
