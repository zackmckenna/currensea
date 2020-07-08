import { useState } from 'react'
import FixerCell from 'src/components/FixerCell'
import BasicLayout from 'src/layouts/BasicLayout'
import { Form, TextField, Submit } from '@redwoodjs/web'
import ParityCell from 'src/components/ParityCell'

const conversionData = {
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
const countryData = [
  {
    name: 'Afghanistan',
    alpha2: 'AF',
    alpha3: 'AFG',
    numericCode: 4,
    lat: 33,
    long: 65,
  },
  {
    name: 'Albania',
    alpha2: 'AL',
    alpha3: 'ALB',
    numericCode: 8,
    lat: 41,
    long: 20,
  },
  {
    name: 'Angola',
    alpha2: 'AO',
    alpha3: 'AGO',
    numericCode: 24,
    lat: -12.5,
    long: 18.5,
  },
  {
    name: 'Antigua and Barbuda',
    alpha2: 'AG',
    alpha3: 'ATG',
    numericCode: 28,
    lat: 17.05,
    long: -61.8,
  },
  {
    name: 'Argentina',
    alpha2: 'AR',
    alpha3: 'ARG',
    numericCode: 32,
    lat: -34,
    long: -64,
  },
  {
    name: 'Armenia',
    alpha2: 'AM',
    alpha3: 'ARM',
    numericCode: 51,
    lat: 40,
    long: 45,
  },
  {
    name: 'Aruba',
    alpha2: 'AW',
    alpha3: 'ABW',
    numericCode: 533,
    lat: 12.5,
    long: -69.9667,
  },
  {
    name: 'Australia',
    alpha2: 'AU',
    alpha3: 'AUS',
    numericCode: 36,
    lat: -27,
    long: 133,
  },
  {
    name: 'Austria',
    alpha2: 'AT',
    alpha3: 'AUT',
    numericCode: 40,
    lat: 47.3333,
    long: 13.3333,
  },
  {
    name: 'Azerbaijan',
    alpha2: 'AZ',
    alpha3: 'AZE',
    numericCode: 31,
    lat: 40.5,
    long: 47.5,
  },
  {
    name: 'Bahamas',
    alpha2: 'BS',
    alpha3: 'BHS',
    numericCode: 44,
    lat: 24.25,
    long: -76,
  },
  {
    name: 'Bahrain',
    alpha2: 'BH',
    alpha3: 'BHR',
    numericCode: 48,
    lat: 26,
    long: 50.55,
  },
  {
    name: 'Bangladesh',
    alpha2: 'BD',
    alpha3: 'BGD',
    numericCode: 50,
    lat: 24,
    long: 90,
  },
  {
    name: 'Barbados',
    alpha2: 'BB',
    alpha3: 'BRB',
    numericCode: 52,
    lat: 13.1667,
    long: -59.5333,
  },
  {
    name: 'Belarus',
    alpha2: 'BY',
    alpha3: 'BLR',
    numericCode: 112,
    lat: 53,
    long: 28,
  },
  {
    name: 'Belgium',
    alpha2: 'BE',
    alpha3: 'BEL',
    numericCode: 56,
    lat: 50.8333,
    long: 4,
  },
  {
    name: 'Belize',
    alpha2: 'BZ',
    alpha3: 'BLZ',
    numericCode: 84,
    lat: 17.25,
    long: -88.75,
  },
  {
    name: 'Benin',
    alpha2: 'BJ',
    alpha3: 'BEN',
    numericCode: 204,
    lat: 9.5,
    long: 2.25,
  },
  {
    name: 'Bermuda',
    alpha2: 'BM',
    alpha3: 'BMU',
    numericCode: 60,
    lat: 32.3333,
    long: -64.75,
  },
  {
    name: 'Bhutan',
    alpha2: 'BT',
    alpha3: 'BTN',
    numericCode: 64,
    lat: 27.5,
    long: 90.5,
  },
  {
    name: 'Bolivia, Plurinational State of',
    alpha2: 'BO',
    alpha3: 'BOL',
    numericCode: 68,
    lat: -17,
    long: -65,
  },
  {
    name: 'Bolivia',
    alpha2: 'BO',
    alpha3: 'BOL',
    numericCode: 68,
    lat: -17,
    long: -65,
  },
  {
    name: 'Bosnia and Herzegovina',
    alpha2: 'BA',
    alpha3: 'BIH',
    numericCode: 70,
    lat: 44,
    long: 18,
  },
  {
    name: 'Botswana',
    alpha2: 'BW',
    alpha3: 'BWA',
    numericCode: 72,
    lat: -22,
    long: 24,
  },
  {
    name: 'Bouvet Island',
    alpha2: 'BV',
    alpha3: 'BVT',
    numericCode: 74,
    lat: -54.4333,
    long: 3.4,
  },
  {
    name: 'Brazil',
    alpha2: 'BR',
    alpha3: 'BRA',
    numericCode: 76,
    lat: -10,
    long: -55,
  },
  {
    name: 'British Indian Ocean Territory',
    alpha2: 'IO',
    alpha3: 'IOT',
    numericCode: 86,
    lat: -6,
    long: 71.5,
  },
  {
    name: 'Brunei Darussalam',
    alpha2: 'BN',
    alpha3: 'BRN',
    numericCode: 96,
    lat: 4.5,
    long: 114.6667,
  },
  {
    name: 'Brunei',
    alpha2: 'BN',
    alpha3: 'BRN',
    numericCode: 96,
    lat: 4.5,
    long: 114.6667,
  },
  {
    name: 'Bulgaria',
    alpha2: 'BG',
    alpha3: 'BGR',
    numericCode: 100,
    lat: 43,
    long: 25,
  },
  {
    name: 'Burkina Faso',
    alpha2: 'BF',
    alpha3: 'BFA',
    numericCode: 854,
    lat: 13,
    long: -2,
  },
  {
    name: 'Burundi',
    alpha2: 'BI',
    alpha3: 'BDI',
    numericCode: 108,
    lat: -3.5,
    long: 30,
  },
  {
    name: 'Cambodia',
    alpha2: 'KH',
    alpha3: 'KHM',
    numericCode: 116,
    lat: 13,
    long: 105,
  },
  {
    name: 'Cameroon',
    alpha2: 'CM',
    alpha3: 'CMR',
    numericCode: 120,
    lat: 6,
    long: 12,
  },
  {
    name: 'Canada',
    alpha2: 'CA',
    alpha3: 'CAN',
    numericCode: 124,
    lat: 60,
    long: -95,
  },
  {
    name: 'Cape Verde',
    alpha2: 'CV',
    alpha3: 'CPV',
    numericCode: 132,
    lat: 16,
    long: -24,
  },
  {
    name: 'Cayman Islands',
    alpha2: 'KY',
    alpha3: 'CYM',
    numericCode: 136,
    lat: 19.5,
    long: -80.5,
  },
  {
    name: 'Central African Republic',
    alpha2: 'CF',
    alpha3: 'CAF',
    numericCode: 140,
    lat: 7,
    long: 21,
  },
  {
    name: 'Chad',
    alpha2: 'TD',
    alpha3: 'TCD',
    numericCode: 148,
    lat: 15,
    long: 19,
  },
  {
    name: 'Chile',
    alpha2: 'CL',
    alpha3: 'CHL',
    numericCode: 152,
    lat: -30,
    long: -71,
  },
  {
    name: 'China',
    alpha2: 'CN',
    alpha3: 'CHN',
    numericCode: 156,
    lat: 35,
    long: 105,
  },
  {
    name: 'Christmas Island',
    alpha2: 'CX',
    alpha3: 'CXR',
    numericCode: 162,
    lat: -10.5,
    long: 105.6667,
  },
  {
    name: 'Cocos (Keeling) Islands',
    alpha2: 'CC',
    alpha3: 'CCK',
    numericCode: 166,
    lat: -12.5,
    long: 96.8333,
  },
  {
    name: 'Colombia',
    alpha2: 'CO',
    alpha3: 'COL',
    numericCode: 170,
    lat: 4,
    long: -72,
  },
  {
    name: 'Comoros',
    alpha2: 'KM',
    alpha3: 'COM',
    numericCode: 174,
    lat: -12.1667,
    long: 44.25,
  },
  {
    name: 'Congo',
    alpha2: 'CG',
    alpha3: 'COG',
    numericCode: 178,
    lat: -1,
    long: 15,
  },
  {
    name: 'Congo, the Democratic Republic of the',
    alpha2: 'CD',
    alpha3: 'COD',
    numericCode: 180,
    lat: 0,
    long: 25,
  },
  {
    name: 'Cook Islands',
    alpha2: 'CK',
    alpha3: 'COK',
    numericCode: 184,
    lat: -21.2333,
    long: -159.7667,
  },
  {
    name: 'Costa Rica',
    alpha2: 'CR',
    alpha3: 'CRI',
    numericCode: 188,
    lat: 10,
    long: -84,
  },
  {
    name: "Côte d'Ivoire",
    alpha2: 'CI',
    alpha3: 'CIV',
    numericCode: 384,
    lat: 8,
    long: -5,
  },
  {
    name: 'Ivory Coast',
    alpha2: 'CI',
    alpha3: 'CIV',
    numericCode: 384,
    lat: 8,
    long: -5,
  },
  {
    name: 'Croatia',
    alpha2: 'HR',
    alpha3: 'HRV',
    numericCode: 191,
    lat: 45.1667,
    long: 15.5,
  },
  {
    name: 'Cuba',
    alpha2: 'CU',
    alpha3: 'CUB',
    numericCode: 192,
    lat: 21.5,
    long: -80,
  },
  {
    name: 'Cyprus',
    alpha2: 'CY',
    alpha3: 'CYP',
    numericCode: 196,
    lat: 35,
    long: 33,
  },
  {
    name: 'Czech Republic',
    alpha2: 'CZ',
    alpha3: 'CZE',
    numericCode: 203,
    lat: 49.75,
    long: 15.5,
  },
  {
    name: 'Denmark',
    alpha2: 'DK',
    alpha3: 'DNK',
    numericCode: 208,
    lat: 56,
    long: 10,
  },
  {
    name: 'Djibouti',
    alpha2: 'DJ',
    alpha3: 'DJI',
    numericCode: 262,
    lat: 11.5,
    long: 43,
  },
  {
    name: 'Dominica',
    alpha2: 'DM',
    alpha3: 'DMA',
    numericCode: 212,
    lat: 15.4167,
    long: -61.3333,
  },
  {
    name: 'Dominican Republic',
    alpha2: 'DO',
    alpha3: 'DOM',
    numericCode: 214,
    lat: 19,
    long: -70.6667,
  },
  {
    name: 'Ecuador',
    alpha2: 'EC',
    alpha3: 'ECU',
    numericCode: 218,
    lat: -2,
    long: -77.5,
  },
  {
    name: 'Egypt',
    alpha2: 'EG',
    alpha3: 'EGY',
    numericCode: 818,
    lat: 27,
    long: 30,
  },
  {
    name: 'El Salvador',
    alpha2: 'SV',
    alpha3: 'SLV',
    numericCode: 222,
    lat: 13.8333,
    long: -88.9167,
  },
  {
    name: 'Equatorial Guinea',
    alpha2: 'GQ',
    alpha3: 'GNQ',
    numericCode: 226,
    lat: 2,
    long: 10,
  },
  {
    name: 'Eritrea',
    alpha2: 'ER',
    alpha3: 'ERI',
    numericCode: 232,
    lat: 15,
    long: 39,
  },
  {
    name: 'Estonia',
    alpha2: 'EE',
    alpha3: 'EST',
    numericCode: 233,
    lat: 59,
    long: 26,
  },
  {
    name: 'Ethiopia',
    alpha2: 'ET',
    alpha3: 'ETH',
    numericCode: 231,
    lat: 8,
    long: 38,
  },
  {
    name: 'Falkland Islands (Malvinas)',
    alpha2: 'FK',
    alpha3: 'FLK',
    numericCode: 238,
    lat: -51.75,
    long: -59,
  },
  {
    name: 'Faroe Islands',
    alpha2: 'FO',
    alpha3: 'FRO',
    numericCode: 234,
    lat: 62,
    long: -7,
  },
  {
    name: 'Fiji',
    alpha2: 'FJ',
    alpha3: 'FJI',
    numericCode: 242,
    lat: -18,
    long: 175,
  },
  {
    name: 'Finland',
    alpha2: 'FI',
    alpha3: 'FIN',
    numericCode: 246,
    lat: 64,
    long: 26,
  },
  {
    name: 'France',
    alpha2: 'FR',
    alpha3: 'FRA',
    numericCode: 250,
    lat: 46,
    long: 2,
  },
  {
    name: 'French Guiana',
    alpha2: 'GF',
    alpha3: 'GUF',
    numericCode: 254,
    lat: 4,
    long: -53,
  },
  {
    name: 'French Polynesia',
    alpha2: 'PF',
    alpha3: 'PYF',
    numericCode: 258,
    lat: -15,
    long: -140,
  },
  {
    name: 'French Southern Territories',
    alpha2: 'TF',
    alpha3: 'ATF',
    numericCode: 260,
    lat: -43,
    long: 67,
  },
  {
    name: 'Gabon',
    alpha2: 'GA',
    alpha3: 'GAB',
    numericCode: 266,
    lat: -1,
    long: 11.75,
  },
  {
    name: 'Gambia',
    alpha2: 'GM',
    alpha3: 'GMB',
    numericCode: 270,
    lat: 13.4667,
    long: -16.5667,
  },
  {
    name: 'Georgia',
    alpha2: 'GE',
    alpha3: 'GEO',
    numericCode: 268,
    lat: 42,
    long: 43.5,
  },
  {
    name: 'Germany',
    alpha2: 'DE',
    alpha3: 'DEU',
    numericCode: 276,
    lat: 51,
    long: 9,
  },
  {
    name: 'Ghana',
    alpha2: 'GH',
    alpha3: 'GHA',
    numericCode: 288,
    lat: 8,
    long: -2,
  },
  {
    name: 'Gibraltar',
    alpha2: 'GI',
    alpha3: 'GIB',
    numericCode: 292,
    lat: 36.1833,
    long: -5.3667,
  },
  {
    name: 'Greece',
    alpha2: 'GR',
    alpha3: 'GRC',
    numericCode: 300,
    lat: 39,
    long: 22,
  },
  {
    name: 'Greenland',
    alpha2: 'GL',
    alpha3: 'GRL',
    numericCode: 304,
    lat: 72,
    long: -40,
  },
  {
    name: 'Grenada',
    alpha2: 'GD',
    alpha3: 'GRD',
    numericCode: 308,
    lat: 12.1167,
    long: -61.6667,
  },
  {
    name: 'Guadeloupe',
    alpha2: 'GP',
    alpha3: 'GLP',
    numericCode: 312,
    lat: 16.25,
    long: -61.5833,
  },
  {
    name: 'Guam',
    alpha2: 'GU',
    alpha3: 'GUM',
    numericCode: 316,
    lat: 13.4667,
    long: 144.7833,
  },
  {
    name: 'Guatemala',
    alpha2: 'GT',
    alpha3: 'GTM',
    numericCode: 320,
    lat: 15.5,
    long: -90.25,
  },
  {
    name: 'Guernsey',
    alpha2: 'GG',
    alpha3: 'GGY',
    numericCode: 831,
    lat: 49.5,
    long: -2.56,
  },
  {
    name: 'Guinea',
    alpha2: 'GN',
    alpha3: 'GIN',
    numericCode: 324,
    lat: 11,
    long: -10,
  },
  {
    name: 'Guinea-Bissau',
    alpha2: 'GW',
    alpha3: 'GNB',
    numericCode: 624,
    lat: 12,
    long: -15,
  },
  {
    name: 'Guyana',
    alpha2: 'GY',
    alpha3: 'GUY',
    numericCode: 328,
    lat: 5,
    long: -59,
  },
  {
    name: 'Haiti',
    alpha2: 'HT',
    alpha3: 'HTI',
    numericCode: 332,
    lat: 19,
    long: -72.4167,
  },
  {
    name: 'Heard Island and McDonald Islands',
    alpha2: 'HM',
    alpha3: 'HMD',
    numericCode: 334,
    lat: -53.1,
    long: 72.5167,
  },
  {
    name: 'Holy See (Vatican City State)',
    alpha2: 'VA',
    alpha3: 'VAT',
    numericCode: 336,
    lat: 41.9,
    long: 12.45,
  },
  {
    name: 'Honduras',
    alpha2: 'HN',
    alpha3: 'HND',
    numericCode: 340,
    lat: 15,
    long: -86.5,
  },
  {
    name: 'Hong Kong',
    alpha2: 'HK',
    alpha3: 'HKG',
    numericCode: 344,
    lat: 22.25,
    long: 114.1667,
  },
  {
    name: 'Hungary',
    alpha2: 'HU',
    alpha3: 'HUN',
    numericCode: 348,
    lat: 47,
    long: 20,
  },
  {
    name: 'Iceland',
    alpha2: 'IS',
    alpha3: 'ISL',
    numericCode: 352,
    lat: 65,
    long: -18,
  },
  {
    name: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numericCode: 356,
    lat: 20,
    long: 77,
  },
  {
    name: 'Indonesia',
    alpha2: 'ID',
    alpha3: 'IDN',
    numericCode: 360,
    lat: -5,
    long: 120,
  },
  {
    name: 'Iran, Islamic Republic of',
    alpha2: 'IR',
    alpha3: 'IRN',
    numericCode: 364,
    lat: 32,
    long: 53,
  },
  {
    name: 'Iraq',
    alpha2: 'IQ',
    alpha3: 'IRQ',
    numericCode: 368,
    lat: 33,
    long: 44,
  },
  {
    name: 'Ireland',
    alpha2: 'IE',
    alpha3: 'IRL',
    numericCode: 372,
    lat: 53,
    long: -8,
  },
  {
    name: 'Isle of Man',
    alpha2: 'IM',
    alpha3: 'IMN',
    numericCode: 833,
    lat: 54.23,
    long: -4.55,
  },
  {
    name: 'Israel',
    alpha2: 'IL',
    alpha3: 'ISR',
    numericCode: 376,
    lat: 31.5,
    long: 34.75,
  },
  {
    name: 'Italy',
    alpha2: 'IT',
    alpha3: 'ITA',
    numericCode: 380,
    lat: 42.8333,
    long: 12.8333,
  },
  {
    name: 'Jamaica',
    alpha2: 'JM',
    alpha3: 'JAM',
    numericCode: 388,
    lat: 18.25,
    long: -77.5,
  },
  {
    name: 'Japan',
    alpha2: 'JP',
    alpha3: 'JPN',
    numericCode: 392,
    lat: 36,
    long: 138,
  },
  {
    name: 'Jersey',
    alpha2: 'JE',
    alpha3: 'JEY',
    numericCode: 832,
    lat: 49.21,
    long: -2.13,
  },
  {
    name: 'Jordan',
    alpha2: 'JO',
    alpha3: 'JOR',
    numericCode: 400,
    lat: 31,
    long: 36,
  },
  {
    name: 'Kazakhstan',
    alpha2: 'KZ',
    alpha3: 'KAZ',
    numericCode: 398,
    lat: 48,
    long: 68,
  },
  {
    name: 'Kenya',
    alpha2: 'KE',
    alpha3: 'KEN',
    numericCode: 404,
    lat: 1,
    long: 38,
  },
  {
    name: 'Kiribati',
    alpha2: 'KI',
    alpha3: 'KIR',
    numericCode: 296,
    lat: 1.4167,
    long: 173,
  },
  {
    name: "Korea, Democratic People's Republic of",
    alpha2: 'KP',
    alpha3: 'PRK',
    numericCode: 408,
    lat: 40,
    long: 127,
  },
  {
    name: 'Korea, Republic of',
    alpha2: 'KR',
    alpha3: 'KOR',
    numericCode: 410,
    lat: 37,
    long: 127.5,
  },
  {
    name: 'South Korea',
    alpha2: 'KR',
    alpha3: 'KOR',
    numericCode: 410,
    lat: 37,
    long: 127.5,
  },
  {
    name: 'Kuwait',
    alpha2: 'KW',
    alpha3: 'KWT',
    numericCode: 414,
    lat: 29.3375,
    long: 47.6581,
  },
  {
    name: 'Kyrgyzstan',
    alpha2: 'KG',
    alpha3: 'KGZ',
    numericCode: 417,
    lat: 41,
    long: 75,
  },
  {
    name: "Lao People's Democratic Republic",
    alpha2: 'LA',
    alpha3: 'LAO',
    numericCode: 418,
    lat: 18,
    long: 105,
  },
  {
    name: 'Latvia',
    alpha2: 'LV',
    alpha3: 'LVA',
    numericCode: 428,
    lat: 57,
    long: 25,
  },
  {
    name: 'Lebanon',
    alpha2: 'LB',
    alpha3: 'LBN',
    numericCode: 422,
    lat: 33.8333,
    long: 35.8333,
  },
  {
    name: 'Lesotho',
    alpha2: 'LS',
    alpha3: 'LSO',
    numericCode: 426,
    lat: -29.5,
    long: 28.5,
  },
  {
    name: 'Liberia',
    alpha2: 'LR',
    alpha3: 'LBR',
    numericCode: 430,
    lat: 6.5,
    long: -9.5,
  },
  {
    name: 'Libyan Arab Jamahiriya',
    alpha2: 'LY',
    alpha3: 'LBY',
    numericCode: 434,
    lat: 25,
    long: 17,
  },
  {
    name: 'Libya',
    alpha2: 'LY',
    alpha3: 'LBY',
    numericCode: 434,
    lat: 25,
    long: 17,
  },
  {
    name: 'Liechtenstein',
    alpha2: 'LI',
    alpha3: 'LIE',
    numericCode: 438,
    lat: 47.1667,
    long: 9.5333,
  },
  {
    name: 'Lithuania',
    alpha2: 'LT',
    alpha3: 'LTU',
    numericCode: 440,
    lat: 56,
    long: 24,
  },
  {
    name: 'Luxembourg',
    alpha2: 'LU',
    alpha3: 'LUX',
    numericCode: 442,
    lat: 49.75,
    long: 6.1667,
  },
  {
    name: 'Macao',
    alpha2: 'MO',
    alpha3: 'MAC',
    numericCode: 446,
    lat: 22.1667,
    long: 113.55,
  },
  {
    name: 'Macedonia, the former Yugoslav Republic of',
    alpha2: 'MK',
    alpha3: 'MKD',
    numericCode: 807,
    lat: 41.8333,
    long: 22,
  },
  {
    name: 'Madagascar',
    alpha2: 'MG',
    alpha3: 'MDG',
    numericCode: 450,
    lat: -20,
    long: 47,
  },
  {
    name: 'Malawi',
    alpha2: 'MW',
    alpha3: 'MWI',
    numericCode: 454,
    lat: -13.5,
    long: 34,
  },
  {
    name: 'Malaysia',
    alpha2: 'MY',
    alpha3: 'MYS',
    numericCode: 458,
    lat: 2.5,
    long: 112.5,
  },
  {
    name: 'Maldives',
    alpha2: 'MV',
    alpha3: 'MDV',
    numericCode: 462,
    lat: 3.25,
    long: 73,
  },
  {
    name: 'Mali',
    alpha2: 'ML',
    alpha3: 'MLI',
    numericCode: 466,
    lat: 17,
    long: -4,
  },
  {
    name: 'Malta',
    alpha2: 'MT',
    alpha3: 'MLT',
    numericCode: 470,
    lat: 35.8333,
    long: 14.5833,
  },
  {
    name: 'Marshall Islands',
    alpha2: 'MH',
    alpha3: 'MHL',
    numericCode: 584,
    lat: 9,
    long: 168,
  },
  {
    name: 'Martinique',
    alpha2: 'MQ',
    alpha3: 'MTQ',
    numericCode: 474,
    lat: 14.6667,
    long: -61,
  },
  {
    name: 'Mauritania',
    alpha2: 'MR',
    alpha3: 'MRT',
    numericCode: 478,
    lat: 20,
    long: -12,
  },
  {
    name: 'Mauritius',
    alpha2: 'MU',
    alpha3: 'MUS',
    numericCode: 480,
    lat: -20.2833,
    long: 57.55,
  },
  {
    name: 'Mayotte',
    alpha2: 'YT',
    alpha3: 'MYT',
    numericCode: 175,
    lat: -12.8333,
    long: 45.1667,
  },
  {
    name: 'Mexico',
    alpha2: 'MX',
    alpha3: 'MEX',
    numericCode: 484,
    lat: 23,
    long: -102,
  },
  {
    name: 'Micronesia, Federated States of',
    alpha2: 'FM',
    alpha3: 'FSM',
    numericCode: 583,
    lat: 6.9167,
    long: 158.25,
  },
  {
    name: 'Moldova, Republic of',
    alpha2: 'MD',
    alpha3: 'MDA',
    numericCode: 498,
    lat: 47,
    long: 29,
  },
  {
    name: 'Monaco',
    alpha2: 'MC',
    alpha3: 'MCO',
    numericCode: 492,
    lat: 43.7333,
    long: 7.4,
  },
  {
    name: 'Mongolia',
    alpha2: 'MN',
    alpha3: 'MNG',
    numericCode: 496,
    lat: 46,
    long: 105,
  },
  {
    name: 'Montenegro',
    alpha2: 'ME',
    alpha3: 'MNE',
    numericCode: 499,
    lat: 42,
    long: 19,
  },
  {
    name: 'Montserrat',
    alpha2: 'MS',
    alpha3: 'MSR',
    numericCode: 500,
    lat: 16.75,
    long: -62.2,
  },
  {
    name: 'Morocco',
    alpha2: 'MA',
    alpha3: 'MAR',
    numericCode: 504,
    lat: 32,
    long: -5,
  },
  {
    name: 'Mozambique',
    alpha2: 'MZ',
    alpha3: 'MOZ',
    numericCode: 508,
    lat: -18.25,
    long: 35,
  },
  {
    name: 'Myanmar',
    alpha2: 'MM',
    alpha3: 'MMR',
    numericCode: 104,
    lat: 22,
    long: 98,
  },
  {
    name: 'Burma',
    alpha2: 'MM',
    alpha3: 'MMR',
    numericCode: 104,
    lat: 22,
    long: 98,
  },
  {
    name: 'Namibia',
    alpha2: 'NA',
    alpha3: 'NAM',
    numericCode: 516,
    lat: -22,
    long: 17,
  },
  {
    name: 'Nauru',
    alpha2: 'NR',
    alpha3: 'NRU',
    numericCode: 520,
    lat: -0.5333,
    long: 166.9167,
  },
  {
    name: 'Nepal',
    alpha2: 'NP',
    alpha3: 'NPL',
    numericCode: 524,
    lat: 28,
    long: 84,
  },
  {
    name: 'Netherlands',
    alpha2: 'NL',
    alpha3: 'NLD',
    numericCode: 528,
    lat: 52.5,
    long: 5.75,
  },
  {
    name: 'Netherlands Antilles',
    alpha2: 'AN',
    alpha3: 'ANT',
    numericCode: 530,
    lat: 12.25,
    long: -68.75,
  },
  {
    name: 'New Caledonia',
    alpha2: 'NC',
    alpha3: 'NCL',
    numericCode: 540,
    lat: -21.5,
    long: 165.5,
  },
  {
    name: 'New Zealand',
    alpha2: 'NZ',
    alpha3: 'NZL',
    numericCode: 554,
    lat: -41,
    long: 174,
  },
  {
    name: 'Nicaragua',
    alpha2: 'NI',
    alpha3: 'NIC',
    numericCode: 558,
    lat: 13,
    long: -85,
  },
  {
    name: 'Niger',
    alpha2: 'NE',
    alpha3: 'NER',
    numericCode: 562,
    lat: 16,
    long: 8,
  },
  {
    name: 'Nigeria',
    alpha2: 'NG',
    alpha3: 'NGA',
    numericCode: 566,
    lat: 10,
    long: 8,
  },
  {
    name: 'Niue',
    alpha2: 'NU',
    alpha3: 'NIU',
    numericCode: 570,
    lat: -19.0333,
    long: -169.8667,
  },
  {
    name: 'Norfolk Island',
    alpha2: 'NF',
    alpha3: 'NFK',
    numericCode: 574,
    lat: -29.0333,
    long: 167.95,
  },
  {
    name: 'Northern Mariana Islands',
    alpha2: 'MP',
    alpha3: 'MNP',
    numericCode: 580,
    lat: 15.2,
    long: 145.75,
  },
  {
    name: 'Norway',
    alpha2: 'NO',
    alpha3: 'NOR',
    numericCode: 578,
    lat: 62,
    long: 10,
  },
  {
    name: 'Oman',
    alpha2: 'OM',
    alpha3: 'OMN',
    numericCode: 512,
    lat: 21,
    long: 57,
  },
  {
    name: 'Pakistan',
    alpha2: 'PK',
    alpha3: 'PAK',
    numericCode: 586,
    lat: 30,
    long: 70,
  },
  {
    name: 'Palau',
    alpha2: 'PW',
    alpha3: 'PLW',
    numericCode: 585,
    lat: 7.5,
    long: 134.5,
  },
  {
    name: 'Palestinian Territory, Occupied',
    alpha2: 'PS',
    alpha3: 'PSE',
    numericCode: 275,
    lat: 32,
    long: 35.25,
  },
  {
    name: 'Panama',
    alpha2: 'PA',
    alpha3: 'PAN',
    numericCode: 591,
    lat: 9,
    long: -80,
  },
  {
    name: 'Papua New Guinea',
    alpha2: 'PG',
    alpha3: 'PNG',
    numericCode: 598,
    lat: -6,
    long: 147,
  },
  {
    name: 'Paraguay',
    alpha2: 'PY',
    alpha3: 'PRY',
    numericCode: 600,
    lat: -23,
    long: -58,
  },
  {
    name: 'Peru',
    alpha2: 'PE',
    alpha3: 'PER',
    numericCode: 604,
    lat: -10,
    long: -76,
  },
  {
    name: 'Philippines',
    alpha2: 'PH',
    alpha3: 'PHL',
    numericCode: 608,
    lat: 13,
    long: 122,
  },
  {
    name: 'Pitcairn',
    alpha2: 'PN',
    alpha3: 'PCN',
    numericCode: 612,
    lat: -24.7,
    long: -127.4,
  },
  {
    name: 'Poland',
    alpha2: 'PL',
    alpha3: 'POL',
    numericCode: 616,
    lat: 52,
    long: 20,
  },
  {
    name: 'Portugal',
    alpha2: 'PT',
    alpha3: 'PRT',
    numericCode: 620,
    lat: 39.5,
    long: -8,
  },
  {
    name: 'Puerto Rico',
    alpha2: 'PR',
    alpha3: 'PRI',
    numericCode: 630,
    lat: 18.25,
    long: -66.5,
  },
  {
    name: 'Qatar',
    alpha2: 'QA',
    alpha3: 'QAT',
    numericCode: 634,
    lat: 25.5,
    long: 51.25,
  },
  {
    name: 'Réunion',
    alpha2: 'RE',
    alpha3: 'REU',
    numericCode: 638,
    lat: -21.1,
    long: 55.6,
  },
  {
    name: 'Romania',
    alpha2: 'RO',
    alpha3: 'ROU',
    numericCode: 642,
    lat: 46,
    long: 25,
  },
  {
    name: 'Russian Federation',
    alpha2: 'RU',
    alpha3: 'RUS',
    numericCode: 643,
    lat: 60,
    long: 100,
  },
  {
    name: 'Russia',
    alpha2: 'RU',
    alpha3: 'RUS',
    numericCode: 643,
    lat: 60,
    long: 100,
  },
  {
    name: 'Rwanda',
    alpha2: 'RW',
    alpha3: 'RWA',
    numericCode: 646,
    lat: -2,
    long: 30,
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    alpha2: 'SH',
    alpha3: 'SHN',
    numericCode: 654,
    lat: -15.9333,
    long: -5.7,
  },
  {
    name: 'Saint Kitts and Nevis',
    alpha2: 'KN',
    alpha3: 'KNA',
    numericCode: 659,
    lat: 17.3333,
    long: -62.75,
  },
  {
    name: 'Saint Lucia',
    alpha2: 'LC',
    alpha3: 'LCA',
    numericCode: 662,
    lat: 13.8833,
    long: -61.1333,
  },
  {
    name: 'Saint Pierre and Miquelon',
    alpha2: 'PM',
    alpha3: 'SPM',
    numericCode: 666,
    lat: 46.8333,
    long: -56.3333,
  },
  {
    name: 'Saint Vincent and the Grenadines',
    alpha2: 'VC',
    alpha3: 'VCT',
    numericCode: 670,
    lat: 13.25,
    long: -61.2,
  },
  {
    name: 'Saint Vincent & the Grenadines',
    alpha2: 'VC',
    alpha3: 'VCT',
    numericCode: 670,
    lat: 13.25,
    long: -61.2,
  },
  {
    name: 'St. Vincent and the Grenadines',
    alpha2: 'VC',
    alpha3: 'VCT',
    numericCode: 670,
    lat: 13.25,
    long: -61.2,
  },
  {
    name: 'Samoa',
    alpha2: 'WS',
    alpha3: 'WSM',
    numericCode: 882,
    lat: -13.5833,
    long: -172.3333,
  },
  {
    name: 'San Marino',
    alpha2: 'SM',
    alpha3: 'SMR',
    numericCode: 674,
    lat: 43.7667,
    long: 12.4167,
  },
  {
    name: 'Sao Tome and Principe',
    alpha2: 'ST',
    alpha3: 'STP',
    numericCode: 678,
    lat: 1,
    long: 7,
  },
  {
    name: 'Saudi Arabia',
    alpha2: 'SA',
    alpha3: 'SAU',
    numericCode: 682,
    lat: 25,
    long: 45,
  },
  {
    name: 'Senegal',
    alpha2: 'SN',
    alpha3: 'SEN',
    numericCode: 686,
    lat: 14,
    long: -14,
  },
  {
    name: 'Serbia',
    alpha2: 'RS',
    alpha3: 'SRB',
    numericCode: 688,
    lat: 44,
    long: 21,
  },
  {
    name: 'Seychelles',
    alpha2: 'SC',
    alpha3: 'SYC',
    numericCode: 690,
    lat: -4.5833,
    long: 55.6667,
  },
  {
    name: 'Sierra Leone',
    alpha2: 'SL',
    alpha3: 'SLE',
    numericCode: 694,
    lat: 8.5,
    long: -11.5,
  },
  {
    name: 'Singapore',
    alpha2: 'SG',
    alpha3: 'SGP',
    numericCode: 702,
    lat: 1.3667,
    long: 103.8,
  },
  {
    name: 'Slovakia',
    alpha2: 'SK',
    alpha3: 'SVK',
    numericCode: 703,
    lat: 48.6667,
    long: 19.5,
  },
  {
    name: 'Slovenia',
    alpha2: 'SI',
    alpha3: 'SVN',
    numericCode: 705,
    lat: 46,
    long: 15,
  },
  {
    name: 'Solomon Islands',
    alpha2: 'SB',
    alpha3: 'SLB',
    numericCode: 90,
    lat: -8,
    long: 159,
  },
  {
    name: 'Somalia',
    alpha2: 'SO',
    alpha3: 'SOM',
    numericCode: 706,
    lat: 10,
    long: 49,
  },
  {
    name: 'South Africa',
    alpha2: 'ZA',
    alpha3: 'ZAF',
    numericCode: 710,
    lat: -29,
    long: 24,
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    alpha2: 'GS',
    alpha3: 'SGS',
    numericCode: 239,
    lat: -54.5,
    long: -37,
  },
  {
    name: 'South Sudan',
    alpha2: 'SS',
    alpha3: 'SSD',
    numericCode: 728,
    lat: 8,
    long: 30,
  },
  {
    name: 'Spain',
    alpha2: 'ES',
    alpha3: 'ESP',
    numericCode: 724,
    lat: 40,
    long: -4,
  },
  {
    name: 'Sri Lanka',
    alpha2: 'LK',
    alpha3: 'LKA',
    numericCode: 144,
    lat: 7,
    long: 81,
  },
  {
    name: 'Sudan',
    alpha2: 'SD',
    alpha3: 'SDN',
    numericCode: 736,
    lat: 15,
    long: 30,
  },
  {
    name: 'Suriname',
    alpha2: 'SR',
    alpha3: 'SUR',
    numericCode: 740,
    lat: 4,
    long: -56,
  },
  {
    name: 'Svalbard and Jan Mayen',
    alpha2: 'SJ',
    alpha3: 'SJM',
    numericCode: 744,
    lat: 78,
    long: 20,
  },
  {
    name: 'Swaziland',
    alpha2: 'SZ',
    alpha3: 'SWZ',
    numericCode: 748,
    lat: -26.5,
    long: 31.5,
  },
  {
    name: 'Sweden',
    alpha2: 'SE',
    alpha3: 'SWE',
    numericCode: 752,
    lat: 62,
    long: 15,
  },
  {
    name: 'Switzerland',
    alpha2: 'CH',
    alpha3: 'CHE',
    numericCode: 756,
    lat: 47,
    long: 8,
  },
  {
    name: 'Syrian Arab Republic',
    alpha2: 'SY',
    alpha3: 'SYR',
    numericCode: 760,
    lat: 35,
    long: 38,
  },
  {
    name: 'Taiwan, Province of China',
    alpha2: 'TW',
    alpha3: 'TWN',
    numericCode: 158,
    lat: 23.5,
    long: 121,
  },
  {
    name: 'Taiwan',
    alpha2: 'TW',
    alpha3: 'TWN',
    numericCode: 158,
    lat: 23.5,
    long: 121,
  },
  {
    name: 'Tajikistan',
    alpha2: 'TJ',
    alpha3: 'TJK',
    numericCode: 762,
    lat: 39,
    long: 71,
  },
  {
    name: 'Tanzania, United Republic of',
    alpha2: 'TZ',
    alpha3: 'TZA',
    numericCode: 834,
    lat: -6,
    long: 35,
  },
  {
    name: 'Thailand',
    alpha2: 'TH',
    alpha3: 'THA',
    numericCode: 764,
    lat: 15,
    long: 100,
  },
  {
    name: 'Timor-Leste',
    alpha2: 'TL',
    alpha3: 'TLS',
    numericCode: 626,
    lat: -8.55,
    long: 125.5167,
  },
  {
    name: 'Togo',
    alpha2: 'TG',
    alpha3: 'TGO',
    numericCode: 768,
    lat: 8,
    long: 1.1667,
  },
  {
    name: 'Tokelau',
    alpha2: 'TK',
    alpha3: 'TKL',
    numericCode: 772,
    lat: -9,
    long: -172,
  },
  {
    name: 'Tonga',
    alpha2: 'TO',
    alpha3: 'TON',
    numericCode: 776,
    lat: -20,
    long: -175,
  },
  {
    name: 'Trinidad and Tobago',
    alpha2: 'TT',
    alpha3: 'TTO',
    numericCode: 780,
    lat: 11,
    long: -61,
  },
  {
    name: 'Tunisia',
    alpha2: 'TN',
    alpha3: 'TUN',
    numericCode: 788,
    lat: 34,
    long: 9,
  },
  {
    name: 'Turkey',
    alpha2: 'TR',
    alpha3: 'TUR',
    numericCode: 792,
    lat: 39,
    long: 35,
  },
  {
    name: 'Turkmenistan',
    alpha2: 'TM',
    alpha3: 'TKM',
    numericCode: 795,
    lat: 40,
    long: 60,
  },
  {
    name: 'Turks and Caicos Islands',
    alpha2: 'TC',
    alpha3: 'TCA',
    numericCode: 796,
    lat: 21.75,
    long: -71.5833,
  },
  {
    name: 'Tuvalu',
    alpha2: 'TV',
    alpha3: 'TUV',
    numericCode: 798,
    lat: -8,
    long: 178,
  },
  {
    name: 'Uganda',
    alpha2: 'UG',
    alpha3: 'UGA',
    numericCode: 800,
    lat: 1,
    long: 32,
  },
  {
    name: 'Ukraine',
    alpha2: 'UA',
    alpha3: 'UKR',
    numericCode: 804,
    lat: 49,
    long: 32,
  },
  {
    name: 'United Arab Emirates',
    alpha2: 'AE',
    alpha3: 'ARE',
    numericCode: 784,
    lat: 24,
    long: 54,
  },
  {
    name: 'United Kingdom',
    alpha2: 'GB',
    alpha3: 'GBR',
    numericCode: 826,
    lat: 54,
    long: -2,
  },
  {
    name: 'United States',
    alpha2: 'US',
    alpha3: 'USA',
    numericCode: 840,
    lat: 38,
    long: -97,
  },
  {
    name: 'United States Minor Outlying Islands',
    alpha2: 'UM',
    alpha3: 'UMI',
    numericCode: 581,
    lat: 19.2833,
    long: 166.6,
  },
  {
    name: 'Uruguay',
    alpha2: 'UY',
    alpha3: 'URY',
    numericCode: 858,
    lat: -33,
    long: -56,
  },
  {
    name: 'Uzbekistan',
    alpha2: 'UZ',
    alpha3: 'UZB',
    numericCode: 860,
    lat: 41,
    long: 64,
  },
  {
    name: 'Vanuatu',
    alpha2: 'VU',
    alpha3: 'VUT',
    numericCode: 548,
    lat: -16,
    long: 167,
  },
  {
    name: 'Venezuela, Bolivarian Republic of',
    alpha2: 'VE',
    alpha3: 'VEN',
    numericCode: 862,
    lat: 8,
    long: -66,
  },
  {
    name: 'Venezuela',
    alpha2: 'VE',
    alpha3: 'VEN',
    numericCode: 862,
    lat: 8,
    long: -66,
  },
  {
    name: 'Viet Nam',
    alpha2: 'VN',
    alpha3: 'VNM',
    numericCode: 704,
    lat: 16,
    long: 106,
  },
  {
    name: 'Vietnam',
    alpha2: 'VN',
    alpha3: 'VNM',
    numericCode: 704,
    lat: 16,
    long: 106,
  },
  {
    name: 'Virgin Islands, British',
    alpha2: 'VG',
    alpha3: 'VGB',
    numericCode: 92,
    lat: 18.5,
    long: -64.5,
  },
  {
    name: 'Virgin Islands, U.S.',
    alpha2: 'VI',
    alpha3: 'VIR',
    numericCode: 850,
    lat: 18.3333,
    long: -64.8333,
  },
  {
    name: 'Wallis and Futuna',
    alpha2: 'WF',
    alpha3: 'WLF',
    numericCode: 876,
    lat: -13.3,
    long: -176.2,
  },
  {
    name: 'Western Sahara',
    alpha2: 'EH',
    alpha3: 'ESH',
    numericCode: 732,
    lat: 24.5,
    long: -13,
  },
  {
    name: 'Yemen',
    alpha2: 'YE',
    alpha3: 'YEM',
    numericCode: 887,
    lat: 15,
    long: 48,
  },
  {
    name: 'Zambia',
    alpha2: 'ZM',
    alpha3: 'ZMB',
    numericCode: 894,
    lat: -15,
    long: 30,
  },
  {
    name: 'Zimbabwe',
    alpha2: 'ZW',
    alpha3: 'ZWE',
    numericCode: 716,
    lat: -20,
    long: 30,
  },
]

const HomePage = () => {
  const [base, setBase] = useState([])
  const [target, setTarget] = useState([])
  const [amount, setAmount] = useState(null)
  const [query, setQuery] = useState(null)
  const [queryCountry, setQueryCountry] = useState(null)

  const handleTargetChange = (e) => {
    setTarget(e.target.value.split(','))
    console.log(target)
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value)
    console.log(amount)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(target[2])
    setQueryCountry(target[0])
    console.log(query)
  }

  return (
    <div>
      <BasicLayout>
        <div className="max-w-screen-sm justify-center container text-center mx-auto">
          <div className="p-4">
            <span className="rounded block text-gray-700 text-center px-4 py-2">
              <h1 className="text-6xl font-extrabold">PPP</h1>
              {amount && base && target && (
                <p className="mb-2">
                  What is the purchasing power parity of {amount} USD in{' '}
                  {target[0]}?
                </p>
              )}
              <p>
                Purchasing power parity is a measurement of prices in different
                countries that uses the prices of specific goods to compare the
                absolute purchasing power of the countries' currencies.
              </p>
            </span>
            <span className="block text-gray-700 text-center justify-center rounded px-4 py-2 mt-2">
              <form>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      Amount in USD
                    </label>
                    <input
                      onChange={(e) => handleAmountChange(e)}
                      className="appearance-none w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Amount"
                    />
                  </div>
                  {/* <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Base Currency
                    </label>
                    <select
                      onChange={(e) => handleBaseChange(e)}
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                      {countryData.map((country, index) => {
                        return (
                          <option
                            key={index}
                            value={[
                              country['name'],
                              country['alpha3'],
                              country['alpha2'],
                            ]}
                          >
                            {country['name']} - {country['alpha2']}
                          </option>
                        )
                      })}
                    </select>
                  </div> */}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Target Country
                    </label>
                    <select
                      onChange={(e) => handleTargetChange(e)}
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option>select a country</option>
                      {countryData.map((country, index) => {
                        return (
                          <option
                            key={index}
                            value={[
                              country['name'],
                              country['alpha3'],
                              country['alpha2'],
                            ]}
                          >
                            {country['name']} - {country['alpha2']}
                          </option>
                        )
                      })}
                    </select>
                    <p className="text-gray-600 text-xs italic">
                      Make it as long and as crazy as you'd like
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </span>
            <div className="justify-center"></div>
          </div>
          {query && (
            <ParityCell
              amount={Number(amount)}
              data={query}
              country={queryCountry}
            />
          )}
          <span className="mt-4">
            data from{' '}
            <a
              className="mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500"
              rel="noreferrer"
              target="_blank"
              href="https://www.fixer.io/"
            >
              fixer.io
            </a>{' '}
            and{' '}
            <a
              className="mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500"
              rel="noreferrer"
              target="_blank"
              href="https://purchasing-power-parity.com/"
            >
              purchasing-power-parity.com
            </a>
          </span>
        </div>
        {/* <FixerCell data={'test'} /> */}
      </BasicLayout>
    </div>
  )
}

export default HomePage
