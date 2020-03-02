module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/auth.actions.ts":
/*!*********************************!*\
  !*** ./actions/auth.actions.ts ***!
  \*********************************/
/*! exports provided: login, register, logout, deleteCookie, saveLoginData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLoginData", function() { return saveLoginData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



const {
  API_URL
} = next_config__WEBPACK_IMPORTED_MODULE_1___default()().publicRuntimeConfig;
const login = data => new Promise((resolve, reject) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/users/login`, data).then(res => resolve(res.data)).catch(err => reject(err.response));
});
const register = data => new Promise((resolve, reject) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/users`, data).then(res => resolve(res.data)).catch(err => reject(err.response));
});
const logout = () => new Promise((resolve, reject) => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${API_URL}/users/logout`, {}, {
    headers: {
      Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('id')
    }
  }).then(res => resolve(res.data)).catch(err => reject(err));
});
const deleteCookie = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('id');
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('ttl');
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('userId');
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('created');
};
const saveLoginData = data => {
  Object.keys(data).forEach(key => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(key, data[key]);
  });
};

/***/ }),

/***/ "./helpers/countries.js":
/*!******************************!*\
  !*** ./helpers/countries.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const countries = [{
  code: 'AD',
  label: 'Andorra',
  phone: '376'
}, {
  code: 'AE',
  label: 'United Arab Emirates',
  phone: '971'
}, {
  code: 'AF',
  label: 'Afghanistan',
  phone: '93'
}, {
  code: 'AG',
  label: 'Antigua and Barbuda',
  phone: '1-268'
}, {
  code: 'AI',
  label: 'Anguilla',
  phone: '1-264'
}, {
  code: 'AL',
  label: 'Albania',
  phone: '355'
}, {
  code: 'AM',
  label: 'Armenia',
  phone: '374'
}, {
  code: 'AO',
  label: 'Angola',
  phone: '244'
}, {
  code: 'AQ',
  label: 'Antarctica',
  phone: '672'
}, {
  code: 'AR',
  label: 'Argentina',
  phone: '54'
}, {
  code: 'AS',
  label: 'American Samoa',
  phone: '1-684'
}, {
  code: 'AT',
  label: 'Austria',
  phone: '43'
}, {
  code: 'AU',
  label: 'Australia',
  phone: '61',
  suggested: true
}, {
  code: 'AW',
  label: 'Aruba',
  phone: '297'
}, {
  code: 'AX',
  label: 'Alland Islands',
  phone: '358'
}, {
  code: 'AZ',
  label: 'Azerbaijan',
  phone: '994'
}, {
  code: 'BA',
  label: 'Bosnia and Herzegovina',
  phone: '387'
}, {
  code: 'BB',
  label: 'Barbados',
  phone: '1-246'
}, {
  code: 'BD',
  label: 'Bangladesh',
  phone: '880'
}, {
  code: 'BE',
  label: 'Belgium',
  phone: '32'
}, {
  code: 'BF',
  label: 'Burkina Faso',
  phone: '226'
}, {
  code: 'BG',
  label: 'Bulgaria',
  phone: '359'
}, {
  code: 'BH',
  label: 'Bahrain',
  phone: '973'
}, {
  code: 'BI',
  label: 'Burundi',
  phone: '257'
}, {
  code: 'BJ',
  label: 'Benin',
  phone: '229'
}, {
  code: 'BL',
  label: 'Saint Barthelemy',
  phone: '590'
}, {
  code: 'BM',
  label: 'Bermuda',
  phone: '1-441'
}, {
  code: 'BN',
  label: 'Brunei Darussalam',
  phone: '673'
}, {
  code: 'BO',
  label: 'Bolivia',
  phone: '591'
}, {
  code: 'BR',
  label: 'Brazil',
  phone: '55'
}, {
  code: 'BS',
  label: 'Bahamas',
  phone: '1-242'
}, {
  code: 'BT',
  label: 'Bhutan',
  phone: '975'
}, {
  code: 'BV',
  label: 'Bouvet Island',
  phone: '47'
}, {
  code: 'BW',
  label: 'Botswana',
  phone: '267'
}, {
  code: 'BY',
  label: 'Belarus',
  phone: '375'
}, {
  code: 'BZ',
  label: 'Belize',
  phone: '501'
}, {
  code: 'CA',
  label: 'Canada',
  phone: '1',
  suggested: true
}, {
  code: 'CC',
  label: 'Cocos (Keeling) Islands',
  phone: '61'
}, {
  code: 'CD',
  label: 'Congo, Republic of the',
  phone: '242'
}, {
  code: 'CF',
  label: 'Central African Republic',
  phone: '236'
}, {
  code: 'CG',
  label: 'Congo, Democratic Republic of the',
  phone: '243'
}, {
  code: 'CH',
  label: 'Switzerland',
  phone: '41'
}, {
  code: 'CI',
  label: "Cote d'Ivoire",
  phone: '225'
}, {
  code: 'CK',
  label: 'Cook Islands',
  phone: '682'
}, {
  code: 'CL',
  label: 'Chile',
  phone: '56'
}, {
  code: 'CM',
  label: 'Cameroon',
  phone: '237'
}, {
  code: 'CN',
  label: 'China',
  phone: '86'
}, {
  code: 'CO',
  label: 'Colombia',
  phone: '57'
}, {
  code: 'CR',
  label: 'Costa Rica',
  phone: '506'
}, {
  code: 'CU',
  label: 'Cuba',
  phone: '53'
}, {
  code: 'CV',
  label: 'Cape Verde',
  phone: '238'
}, {
  code: 'CW',
  label: 'Curacao',
  phone: '599'
}, {
  code: 'CX',
  label: 'Christmas Island',
  phone: '61'
}, {
  code: 'CY',
  label: 'Cyprus',
  phone: '357'
}, {
  code: 'CZ',
  label: 'Czech Republic',
  phone: '420'
}, {
  code: 'DE',
  label: 'Germany',
  phone: '49',
  suggested: true
}, {
  code: 'DJ',
  label: 'Djibouti',
  phone: '253'
}, {
  code: 'DK',
  label: 'Denmark',
  phone: '45'
}, {
  code: 'DM',
  label: 'Dominica',
  phone: '1-767'
}, {
  code: 'DO',
  label: 'Dominican Republic',
  phone: '1-809'
}, {
  code: 'DZ',
  label: 'Algeria',
  phone: '213'
}, {
  code: 'EC',
  label: 'Ecuador',
  phone: '593'
}, {
  code: 'EE',
  label: 'Estonia',
  phone: '372'
}, {
  code: 'EG',
  label: 'Egypt',
  phone: '20'
}, {
  code: 'EH',
  label: 'Western Sahara',
  phone: '212'
}, {
  code: 'ER',
  label: 'Eritrea',
  phone: '291'
}, {
  code: 'ES',
  label: 'Spain',
  phone: '34'
}, {
  code: 'ET',
  label: 'Ethiopia',
  phone: '251'
}, {
  code: 'FI',
  label: 'Finland',
  phone: '358'
}, {
  code: 'FJ',
  label: 'Fiji',
  phone: '679'
}, {
  code: 'FK',
  label: 'Falkland Islands (Malvinas)',
  phone: '500'
}, {
  code: 'FM',
  label: 'Micronesia, Federated States of',
  phone: '691'
}, {
  code: 'FO',
  label: 'Faroe Islands',
  phone: '298'
}, {
  code: 'FR',
  label: 'France',
  phone: '33',
  suggested: true
}, {
  code: 'GA',
  label: 'Gabon',
  phone: '241'
}, {
  code: 'GB',
  label: 'United Kingdom',
  phone: '44'
}, {
  code: 'GD',
  label: 'Grenada',
  phone: '1-473'
}, {
  code: 'GE',
  label: 'Georgia',
  phone: '995'
}, {
  code: 'GF',
  label: 'French Guiana',
  phone: '594'
}, {
  code: 'GG',
  label: 'Guernsey',
  phone: '44'
}, {
  code: 'GH',
  label: 'Ghana',
  phone: '233'
}, {
  code: 'GI',
  label: 'Gibraltar',
  phone: '350'
}, {
  code: 'GL',
  label: 'Greenland',
  phone: '299'
}, {
  code: 'GM',
  label: 'Gambia',
  phone: '220'
}, {
  code: 'GN',
  label: 'Guinea',
  phone: '224'
}, {
  code: 'GP',
  label: 'Guadeloupe',
  phone: '590'
}, {
  code: 'GQ',
  label: 'Equatorial Guinea',
  phone: '240'
}, {
  code: 'GR',
  label: 'Greece',
  phone: '30'
}, {
  code: 'GS',
  label: 'South Georgia and the South Sandwich Islands',
  phone: '500'
}, {
  code: 'GT',
  label: 'Guatemala',
  phone: '502'
}, {
  code: 'GU',
  label: 'Guam',
  phone: '1-671'
}, {
  code: 'GW',
  label: 'Guinea-Bissau',
  phone: '245'
}, {
  code: 'GY',
  label: 'Guyana',
  phone: '592'
}, {
  code: 'HK',
  label: 'Hong Kong',
  phone: '852'
}, {
  code: 'HM',
  label: 'Heard Island and McDonald Islands',
  phone: '672'
}, {
  code: 'HN',
  label: 'Honduras',
  phone: '504'
}, {
  code: 'HR',
  label: 'Croatia',
  phone: '385'
}, {
  code: 'HT',
  label: 'Haiti',
  phone: '509'
}, {
  code: 'HU',
  label: 'Hungary',
  phone: '36'
}, {
  code: 'ID',
  label: 'Indonesia',
  phone: '62'
}, {
  code: 'IE',
  label: 'Ireland',
  phone: '353'
}, {
  code: 'IL',
  label: 'Israel',
  phone: '972'
}, {
  code: 'IM',
  label: 'Isle of Man',
  phone: '44'
}, {
  code: 'IN',
  label: 'India',
  phone: '91'
}, {
  code: 'IO',
  label: 'British Indian Ocean Territory',
  phone: '246'
}, {
  code: 'IQ',
  label: 'Iraq',
  phone: '964'
}, {
  code: 'IR',
  label: 'Iran, Islamic Republic of',
  phone: '98'
}, {
  code: 'IS',
  label: 'Iceland',
  phone: '354'
}, {
  code: 'IT',
  label: 'Italy',
  phone: '39'
}, {
  code: 'JE',
  label: 'Jersey',
  phone: '44'
}, {
  code: 'JM',
  label: 'Jamaica',
  phone: '1-876'
}, {
  code: 'JO',
  label: 'Jordan',
  phone: '962'
}, {
  code: 'JP',
  label: 'Japan',
  phone: '81',
  suggested: true
}, {
  code: 'KE',
  label: 'Kenya',
  phone: '254'
}, {
  code: 'KG',
  label: 'Kyrgyzstan',
  phone: '996'
}, {
  code: 'KH',
  label: 'Cambodia',
  phone: '855'
}, {
  code: 'KI',
  label: 'Kiribati',
  phone: '686'
}, {
  code: 'KM',
  label: 'Comoros',
  phone: '269'
}, {
  code: 'KN',
  label: 'Saint Kitts and Nevis',
  phone: '1-869'
}, {
  code: 'KP',
  label: "Korea, Democratic People's Republic of",
  phone: '850'
}, {
  code: 'KR',
  label: 'Korea, Republic of',
  phone: '82'
}, {
  code: 'KW',
  label: 'Kuwait',
  phone: '965'
}, {
  code: 'KY',
  label: 'Cayman Islands',
  phone: '1-345'
}, {
  code: 'KZ',
  label: 'Kazakhstan',
  phone: '7'
}, {
  code: 'LA',
  label: "Lao People's Democratic Republic",
  phone: '856'
}, {
  code: 'LB',
  label: 'Lebanon',
  phone: '961'
}, {
  code: 'LC',
  label: 'Saint Lucia',
  phone: '1-758'
}, {
  code: 'LI',
  label: 'Liechtenstein',
  phone: '423'
}, {
  code: 'LK',
  label: 'Sri Lanka',
  phone: '94'
}, {
  code: 'LR',
  label: 'Liberia',
  phone: '231'
}, {
  code: 'LS',
  label: 'Lesotho',
  phone: '266'
}, {
  code: 'LT',
  label: 'Lithuania',
  phone: '370'
}, {
  code: 'LU',
  label: 'Luxembourg',
  phone: '352'
}, {
  code: 'LV',
  label: 'Latvia',
  phone: '371'
}, {
  code: 'LY',
  label: 'Libya',
  phone: '218'
}, {
  code: 'MA',
  label: 'Morocco',
  phone: '212'
}, {
  code: 'MC',
  label: 'Monaco',
  phone: '377'
}, {
  code: 'MD',
  label: 'Moldova, Republic of',
  phone: '373'
}, {
  code: 'ME',
  label: 'Montenegro',
  phone: '382'
}, {
  code: 'MF',
  label: 'Saint Martin (French part)',
  phone: '590'
}, {
  code: 'MG',
  label: 'Madagascar',
  phone: '261'
}, {
  code: 'MH',
  label: 'Marshall Islands',
  phone: '692'
}, {
  code: 'MK',
  label: 'Macedonia, the Former Yugoslav Republic of',
  phone: '389'
}, {
  code: 'ML',
  label: 'Mali',
  phone: '223'
}, {
  code: 'MM',
  label: 'Myanmar',
  phone: '95'
}, {
  code: 'MN',
  label: 'Mongolia',
  phone: '976'
}, {
  code: 'MO',
  label: 'Macao',
  phone: '853'
}, {
  code: 'MP',
  label: 'Northern Mariana Islands',
  phone: '1-670'
}, {
  code: 'MQ',
  label: 'Martinique',
  phone: '596'
}, {
  code: 'MR',
  label: 'Mauritania',
  phone: '222'
}, {
  code: 'MS',
  label: 'Montserrat',
  phone: '1-664'
}, {
  code: 'MT',
  label: 'Malta',
  phone: '356'
}, {
  code: 'MU',
  label: 'Mauritius',
  phone: '230'
}, {
  code: 'MV',
  label: 'Maldives',
  phone: '960'
}, {
  code: 'MW',
  label: 'Malawi',
  phone: '265'
}, {
  code: 'MX',
  label: 'Mexico',
  phone: '52'
}, {
  code: 'MY',
  label: 'Malaysia',
  phone: '60'
}, {
  code: 'MZ',
  label: 'Mozambique',
  phone: '258'
}, {
  code: 'NA',
  label: 'Namibia',
  phone: '264'
}, {
  code: 'NC',
  label: 'New Caledonia',
  phone: '687'
}, {
  code: 'NE',
  label: 'Niger',
  phone: '227'
}, {
  code: 'NF',
  label: 'Norfolk Island',
  phone: '672'
}, {
  code: 'NG',
  label: 'Nigeria',
  phone: '234'
}, {
  code: 'NI',
  label: 'Nicaragua',
  phone: '505'
}, {
  code: 'NL',
  label: 'Netherlands',
  phone: '31'
}, {
  code: 'NO',
  label: 'Norway',
  phone: '47'
}, {
  code: 'NP',
  label: 'Nepal',
  phone: '977'
}, {
  code: 'NR',
  label: 'Nauru',
  phone: '674'
}, {
  code: 'NU',
  label: 'Niue',
  phone: '683'
}, {
  code: 'NZ',
  label: 'New Zealand',
  phone: '64'
}, {
  code: 'OM',
  label: 'Oman',
  phone: '968'
}, {
  code: 'PA',
  label: 'Panama',
  phone: '507'
}, {
  code: 'PE',
  label: 'Peru',
  phone: '51'
}, {
  code: 'PF',
  label: 'French Polynesia',
  phone: '689'
}, {
  code: 'PG',
  label: 'Papua New Guinea',
  phone: '675'
}, {
  code: 'PH',
  label: 'Philippines',
  phone: '63'
}, {
  code: 'PK',
  label: 'Pakistan',
  phone: '92'
}, {
  code: 'PL',
  label: 'Poland',
  phone: '48'
}, {
  code: 'PM',
  label: 'Saint Pierre and Miquelon',
  phone: '508'
}, {
  code: 'PN',
  label: 'Pitcairn',
  phone: '870'
}, {
  code: 'PR',
  label: 'Puerto Rico',
  phone: '1'
}, {
  code: 'PS',
  label: 'Palestine, State of',
  phone: '970'
}, {
  code: 'PT',
  label: 'Portugal',
  phone: '351'
}, {
  code: 'PW',
  label: 'Palau',
  phone: '680'
}, {
  code: 'PY',
  label: 'Paraguay',
  phone: '595'
}, {
  code: 'QA',
  label: 'Qatar',
  phone: '974'
}, {
  code: 'RE',
  label: 'Reunion',
  phone: '262'
}, {
  code: 'RO',
  label: 'Romania',
  phone: '40'
}, {
  code: 'RS',
  label: 'Serbia',
  phone: '381'
}, {
  code: 'RU',
  label: 'Russian Federation',
  phone: '7'
}, {
  code: 'RW',
  label: 'Rwanda',
  phone: '250'
}, {
  code: 'SA',
  label: 'Saudi Arabia',
  phone: '966'
}, {
  code: 'SB',
  label: 'Solomon Islands',
  phone: '677'
}, {
  code: 'SC',
  label: 'Seychelles',
  phone: '248'
}, {
  code: 'SD',
  label: 'Sudan',
  phone: '249'
}, {
  code: 'SE',
  label: 'Sweden',
  phone: '46'
}, {
  code: 'SG',
  label: 'Singapore',
  phone: '65'
}, {
  code: 'SH',
  label: 'Saint Helena',
  phone: '290'
}, {
  code: 'SI',
  label: 'Slovenia',
  phone: '386'
}, {
  code: 'SJ',
  label: 'Svalbard and Jan Mayen',
  phone: '47'
}, {
  code: 'SK',
  label: 'Slovakia',
  phone: '421'
}, {
  code: 'SL',
  label: 'Sierra Leone',
  phone: '232'
}, {
  code: 'SM',
  label: 'San Marino',
  phone: '378'
}, {
  code: 'SN',
  label: 'Senegal',
  phone: '221'
}, {
  code: 'SO',
  label: 'Somalia',
  phone: '252'
}, {
  code: 'SR',
  label: 'Suriname',
  phone: '597'
}, {
  code: 'SS',
  label: 'South Sudan',
  phone: '211'
}, {
  code: 'ST',
  label: 'Sao Tome and Principe',
  phone: '239'
}, {
  code: 'SV',
  label: 'El Salvador',
  phone: '503'
}, {
  code: 'SX',
  label: 'Sint Maarten (Dutch part)',
  phone: '1-721'
}, {
  code: 'SY',
  label: 'Syrian Arab Republic',
  phone: '963'
}, {
  code: 'SZ',
  label: 'Swaziland',
  phone: '268'
}, {
  code: 'TC',
  label: 'Turks and Caicos Islands',
  phone: '1-649'
}, {
  code: 'TD',
  label: 'Chad',
  phone: '235'
}, {
  code: 'TF',
  label: 'French Southern Territories',
  phone: '262'
}, {
  code: 'TG',
  label: 'Togo',
  phone: '228'
}, {
  code: 'TH',
  label: 'Thailand',
  phone: '66'
}, {
  code: 'TJ',
  label: 'Tajikistan',
  phone: '992'
}, {
  code: 'TK',
  label: 'Tokelau',
  phone: '690'
}, {
  code: 'TL',
  label: 'Timor-Leste',
  phone: '670'
}, {
  code: 'TM',
  label: 'Turkmenistan',
  phone: '993'
}, {
  code: 'TN',
  label: 'Tunisia',
  phone: '216'
}, {
  code: 'TO',
  label: 'Tonga',
  phone: '676'
}, {
  code: 'TR',
  label: 'Turkey',
  phone: '90'
}, {
  code: 'TT',
  label: 'Trinidad and Tobago',
  phone: '1-868'
}, {
  code: 'TV',
  label: 'Tuvalu',
  phone: '688'
}, {
  code: 'TW',
  label: 'Taiwan, Province of China',
  phone: '886'
}, {
  code: 'TZ',
  label: 'United Republic of Tanzania',
  phone: '255'
}, {
  code: 'UA',
  label: 'Ukraine',
  phone: '380'
}, {
  code: 'UG',
  label: 'Uganda',
  phone: '256'
}, {
  code: 'US',
  label: 'United States',
  phone: '1',
  suggested: true
}, {
  code: 'UY',
  label: 'Uruguay',
  phone: '598'
}, {
  code: 'UZ',
  label: 'Uzbekistan',
  phone: '998'
}, {
  code: 'VA',
  label: 'Holy See (Vatican City State)',
  phone: '379'
}, {
  code: 'VC',
  label: 'Saint Vincent and the Grenadines',
  phone: '1-784'
}, {
  code: 'VE',
  label: 'Venezuela',
  phone: '58'
}, {
  code: 'VG',
  label: 'British Virgin Islands',
  phone: '1-284'
}, {
  code: 'VI',
  label: 'US Virgin Islands',
  phone: '1-340'
}, {
  code: 'VN',
  label: 'Vietnam',
  phone: '84'
}, {
  code: 'VU',
  label: 'Vanuatu',
  phone: '678'
}, {
  code: 'WF',
  label: 'Wallis and Futuna',
  phone: '681'
}, {
  code: 'WS',
  label: 'Samoa',
  phone: '685'
}, {
  code: 'XK',
  label: 'Kosovo',
  phone: '383'
}, {
  code: 'YE',
  label: 'Yemen',
  phone: '967'
}, {
  code: 'YT',
  label: 'Mayotte',
  phone: '262'
}, {
  code: 'ZA',
  label: 'South Africa',
  phone: '27'
}, {
  code: 'ZM',
  label: 'Zambia',
  phone: '260'
}, {
  code: 'ZW',
  label: 'Zimbabwe',
  phone: '263'
}];
/* harmony default export */ __webpack_exports__["default"] = (countries);

/***/ }),

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/auth.actions */ "./actions/auth.actions.ts");
/* harmony import */ var _helpers_countries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/countries */ "./helpers/countries.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "F:\\Projects\\LoStudio\\client\\pages\\signup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    minHeight: '80vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginCard: {
    padding: '30px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerHolder: {
    borderRight: '1px solid #DEDEDE'
  },
  formHolder: {},
  textField: {
    width: '90%'
  },
  fieldsGrid: {
    marginTop: theme.spacing(4)
  },
  signupButtonHolder: {
    display: 'flex',
    marginTop: theme.spacing(4),
    justifyContent: 'center'
  },
  signupButton: {
    width: '50%'
  },
  loginHolder: {
    textAlign: 'center',
    marginTop: theme.spacing(3)
  },
  loginText: {
    marginRight: theme.spacing(2)
  },
  loginButton: {}
}));

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined' ? isoCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397)) : isoCode;
}

const SignupPage = () => {
  const classes = useStyles();
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setData(_objectSpread({}, data, {
      [e.target.name]: e.target.value
    }));
  };

  const submitSignup = async () => {
    try {
      const user = await Object(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_9__["register"])(data);
      console.log(user);
    } catch (e) {
      switch (e.status) {
        case 422:
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error', 'Email already exists', 'error');
          break;
      }
    }
  };

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 2,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 9,
    xs: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.loginCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 5,
    className: classes.headerHolder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 7,
    className: classes.formHolder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    name: "firstName",
    label: 'First Name',
    required: true,
    onChange: handleChange,
    value: data.firstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    name: "lastName",
    label: 'Last Name',
    required: true,
    onChange: handleChange,
    value: data.lastName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    className: classes.fieldsGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    name: "email",
    label: 'Email',
    type: 'email',
    required: true,
    onChange: handleChange,
    value: data.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_11___default.a, {
    options: _helpers_countries__WEBPACK_IMPORTED_MODULE_10__["default"],
    getOptionLabel: option => `+${option.phone}`,
    renderOption: option => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: undefined
    }, countryToFlag(option.code)), __jsx("span", {
      style: {
        fontSize: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: undefined
    }, "+", option.phone)),
    renderInput: params => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], _extends({}, params, {
      name: 'countryCode',
      label: "Country Code",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    name: "phoneNumber",
    label: 'Phone Number',
    onChange: handleChange,
    value: data.phoneNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  })))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    className: classes.fieldsGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_11___default.a, {
    options: _helpers_countries__WEBPACK_IMPORTED_MODULE_10__["default"],
    getOptionLabel: option => option.label,
    renderInput: params => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], _extends({}, params, {
      name: 'country',
      label: "Country",
      fullWidth: true,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    name: "city",
    label: 'City',
    required: true,
    onChange: handleChange,
    value: data.city,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    className: classes.fieldsGrid,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    name: "password",
    label: 'Password',
    required: true,
    onChange: handleChange,
    value: data.password,
    type: 'password',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    name: "confirmPassword",
    label: 'Confirm Password',
    required: true,
    onChange: handleChange,
    value: data.confirmPassword,
    type: 'password',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    className: classes.signupButtonHolder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.signupButton,
    onClick: submitSignup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, "Signup"))))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.loginHolder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }, __jsx("span", {
    className: classes.loginText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  }, "Already have an account?"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.loginButton,
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: undefined
  }, "Login"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupPage);

/***/ }),

/***/ 6:
/*!********************************!*\
  !*** multi ./pages/signup.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\LoStudio\client\pages\signup.tsx */"./pages/signup.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map