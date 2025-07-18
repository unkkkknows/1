const elements = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "mass": "1.008",
    "category": "nonmetal",
    "xpos": 1,
    "ypos": 1
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "mass": "4.0026",
    "category": "noble",
    "xpos": 18,
    "ypos": 1
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "mass": "6.94",
    "category": "alkali",
    "xpos": 1,
    "ypos": 2
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "mass": "9.0122",
    "category": "alkaline",
    "xpos": 2,
    "ypos": 2
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "mass": "10.81",
    "category": "metalloid",
    "xpos": 13,
    "ypos": 2
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "mass": "12.011",
    "category": "nonmetal",
    "xpos": 14,
    "ypos": 2
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "mass": "14.007",
    "category": "nonmetal",
    "xpos": 15,
    "ypos": 2
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "mass": "15.999",
    "category": "nonmetal",
    "xpos": 16,
    "ypos": 2
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "mass": "18.998",
    "category": "nonmetal",
    "xpos": 17,
    "ypos": 2
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "mass": "20.180",
    "category": "noble",
    "xpos": 18,
    "ypos": 2
  },
  {
    "number": 11,
    "symbol": "E11",
    "name": "Element 11",
    "mass": "11.000",
    "category": "unknown",
    "xpos": 11,
    "ypos": 1
  },
  {
    "number": 12,
    "symbol": "E12",
    "name": "Element 12",
    "mass": "12.000",
    "category": "unknown",
    "xpos": 12,
    "ypos": 1
  },
  {
    "number": 13,
    "symbol": "E13",
    "name": "Element 13",
    "mass": "13.000",
    "category": "unknown",
    "xpos": 13,
    "ypos": 1
  },
  {
    "number": 14,
    "symbol": "E14",
    "name": "Element 14",
    "mass": "14.000",
    "category": "unknown",
    "xpos": 14,
    "ypos": 1
  },
  {
    "number": 15,
    "symbol": "E15",
    "name": "Element 15",
    "mass": "15.000",
    "category": "unknown",
    "xpos": 15,
    "ypos": 1
  },
  {
    "number": 16,
    "symbol": "E16",
    "name": "Element 16",
    "mass": "16.000",
    "category": "unknown",
    "xpos": 16,
    "ypos": 1
  },
  {
    "number": 17,
    "symbol": "E17",
    "name": "Element 17",
    "mass": "17.000",
    "category": "unknown",
    "xpos": 17,
    "ypos": 1
  },
  {
    "number": 18,
    "symbol": "E18",
    "name": "Element 18",
    "mass": "18.000",
    "category": "unknown",
    "xpos": 18,
    "ypos": 1
  },
  {
    "number": 19,
    "symbol": "E19",
    "name": "Element 19",
    "mass": "19.000",
    "category": "unknown",
    "xpos": 1,
    "ypos": 2
  },
  {
    "number": 20,
    "symbol": "E20",
    "name": "Element 20",
    "mass": "20.000",
    "category": "unknown",
    "xpos": 2,
    "ypos": 2
  },
  {
    "number": 21,
    "symbol": "E21",
    "name": "Element 21",
    "mass": "21.000",
    "category": "transition",
    "xpos": 3,
    "ypos": 2
  },
  {
    "number": 22,
    "symbol": "E22",
    "name": "Element 22",
    "mass": "22.000",
    "category": "transition",
    "xpos": 4,
    "ypos": 2
  },
  {
    "number": 23,
    "symbol": "E23",
    "name": "Element 23",
    "mass": "23.000",
    "category": "transition",
    "xpos": 5,
    "ypos": 2
  },
  {
    "number": 24,
    "symbol": "E24",
    "name": "Element 24",
    "mass": "24.000",
    "category": "transition",
    "xpos": 6,
    "ypos": 2
  },
  {
    "number": 25,
    "symbol": "E25",
    "name": "Element 25",
    "mass": "25.000",
    "category": "transition",
    "xpos": 7,
    "ypos": 2
  },
  {
    "number": 26,
    "symbol": "E26",
    "name": "Element 26",
    "mass": "26.000",
    "category": "transition",
    "xpos": 8,
    "ypos": 2
  },
  {
    "number": 27,
    "symbol": "E27",
    "name": "Element 27",
    "mass": "27.000",
    "category": "transition",
    "xpos": 9,
    "ypos": 2
  },
  {
    "number": 28,
    "symbol": "E28",
    "name": "Element 28",
    "mass": "28.000",
    "category": "transition",
    "xpos": 10,
    "ypos": 2
  },
  {
    "number": 29,
    "symbol": "E29",
    "name": "Element 29",
    "mass": "29.000",
    "category": "transition",
    "xpos": 11,
    "ypos": 2
  },
  {
    "number": 30,
    "symbol": "E30",
    "name": "Element 30",
    "mass": "30.000",
    "category": "transition",
    "xpos": 12,
    "ypos": 2
  },
  {
    "number": 31,
    "symbol": "E31",
    "name": "Element 31",
    "mass": "31.000",
    "category": "unknown",
    "xpos": 13,
    "ypos": 2
  },
  {
    "number": 32,
    "symbol": "E32",
    "name": "Element 32",
    "mass": "32.000",
    "category": "unknown",
    "xpos": 14,
    "ypos": 2
  },
  {
    "number": 33,
    "symbol": "E33",
    "name": "Element 33",
    "mass": "33.000",
    "category": "unknown",
    "xpos": 15,
    "ypos": 2
  },
  {
    "number": 34,
    "symbol": "E34",
    "name": "Element 34",
    "mass": "34.000",
    "category": "unknown",
    "xpos": 16,
    "ypos": 2
  },
  {
    "number": 35,
    "symbol": "E35",
    "name": "Element 35",
    "mass": "35.000",
    "category": "unknown",
    "xpos": 17,
    "ypos": 2
  },
  {
    "number": 36,
    "symbol": "E36",
    "name": "Element 36",
    "mass": "36.000",
    "category": "unknown",
    "xpos": 18,
    "ypos": 2
  },
  {
    "number": 37,
    "symbol": "E37",
    "name": "Element 37",
    "mass": "37.000",
    "category": "unknown",
    "xpos": 1,
    "ypos": 3
  },
  {
    "number": 38,
    "symbol": "E38",
    "name": "Element 38",
    "mass": "38.000",
    "category": "unknown",
    "xpos": 2,
    "ypos": 3
  },
  {
    "number": 39,
    "symbol": "E39",
    "name": "Element 39",
    "mass": "39.000",
    "category": "unknown",
    "xpos": 3,
    "ypos": 3
  },
  {
    "number": 40,
    "symbol": "E40",
    "name": "Element 40",
    "mass": "40.000",
    "category": "unknown",
    "xpos": 4,
    "ypos": 3
  },
  {
    "number": 41,
    "symbol": "E41",
    "name": "Element 41",
    "mass": "41.000",
    "category": "unknown",
    "xpos": 5,
    "ypos": 3
  },
  {
    "number": 42,
    "symbol": "E42",
    "name": "Element 42",
    "mass": "42.000",
    "category": "unknown",
    "xpos": 6,
    "ypos": 3
  },
  {
    "number": 43,
    "symbol": "E43",
    "name": "Element 43",
    "mass": "43.000",
    "category": "unknown",
    "xpos": 7,
    "ypos": 3
  },
  {
    "number": 44,
    "symbol": "E44",
    "name": "Element 44",
    "mass": "44.000",
    "category": "unknown",
    "xpos": 8,
    "ypos": 3
  },
  {
    "number": 45,
    "symbol": "E45",
    "name": "Element 45",
    "mass": "45.000",
    "category": "unknown",
    "xpos": 9,
    "ypos": 3
  },
  {
    "number": 46,
    "symbol": "E46",
    "name": "Element 46",
    "mass": "46.000",
    "category": "unknown",
    "xpos": 10,
    "ypos": 3
  },
  {
    "number": 47,
    "symbol": "E47",
    "name": "Element 47",
    "mass": "47.000",
    "category": "unknown",
    "xpos": 11,
    "ypos": 3
  },
  {
    "number": 48,
    "symbol": "E48",
    "name": "Element 48",
    "mass": "48.000",
    "category": "unknown",
    "xpos": 12,
    "ypos": 3
  },
  {
    "number": 49,
    "symbol": "E49",
    "name": "Element 49",
    "mass": "49.000",
    "category": "unknown",
    "xpos": 13,
    "ypos": 3
  },
  {
    "number": 50,
    "symbol": "E50",
    "name": "Element 50",
    "mass": "50.000",
    "category": "unknown",
    "xpos": 14,
    "ypos": 3
  },
  {
    "number": 51,
    "symbol": "E51",
    "name": "Element 51",
    "mass": "51.000",
    "category": "unknown",
    "xpos": 15,
    "ypos": 3
  },
  {
    "number": 52,
    "symbol": "E52",
    "name": "Element 52",
    "mass": "52.000",
    "category": "unknown",
    "xpos": 16,
    "ypos": 3
  },
  {
    "number": 53,
    "symbol": "E53",
    "name": "Element 53",
    "mass": "53.000",
    "category": "unknown",
    "xpos": 17,
    "ypos": 3
  },
  {
    "number": 54,
    "symbol": "E54",
    "name": "Element 54",
    "mass": "54.000",
    "category": "unknown",
    "xpos": 18,
    "ypos": 3
  },
  {
    "number": 55,
    "symbol": "E55",
    "name": "Element 55",
    "mass": "55.000",
    "category": "unknown",
    "xpos": 1,
    "ypos": 4
  },
  {
    "number": 56,
    "symbol": "E56",
    "name": "Element 56",
    "mass": "56.000",
    "category": "unknown",
    "xpos": 2,
    "ypos": 4
  },
  {
    "number": 57,
    "symbol": "E57",
    "name": "Element 57",
    "mass": "57.000",
    "category": "unknown",
    "xpos": 3,
    "ypos": 4
  },
  {
    "number": 58,
    "symbol": "E58",
    "name": "Element 58",
    "mass": "58.000",
    "category": "unknown",
    "xpos": 4,
    "ypos": 4
  },
  {
    "number": 59,
    "symbol": "E59",
    "name": "Element 59",
    "mass": "59.000",
    "category": "unknown",
    "xpos": 5,
    "ypos": 4
  },
  {
    "number": 60,
    "symbol": "E60",
    "name": "Element 60",
    "mass": "60.000",
    "category": "unknown",
    "xpos": 6,
    "ypos": 4
  },
  {
    "number": 61,
    "symbol": "E61",
    "name": "Element 61",
    "mass": "61.000",
    "category": "unknown",
    "xpos": 7,
    "ypos": 4
  },
  {
    "number": 62,
    "symbol": "E62",
    "name": "Element 62",
    "mass": "62.000",
    "category": "unknown",
    "xpos": 8,
    "ypos": 4
  },
  {
    "number": 63,
    "symbol": "E63",
    "name": "Element 63",
    "mass": "63.000",
    "category": "unknown",
    "xpos": 9,
    "ypos": 4
  },
  {
    "number": 64,
    "symbol": "E64",
    "name": "Element 64",
    "mass": "64.000",
    "category": "unknown",
    "xpos": 10,
    "ypos": 4
  },
  {
    "number": 65,
    "symbol": "E65",
    "name": "Element 65",
    "mass": "65.000",
    "category": "unknown",
    "xpos": 11,
    "ypos": 4
  },
  {
    "number": 66,
    "symbol": "E66",
    "name": "Element 66",
    "mass": "66.000",
    "category": "unknown",
    "xpos": 12,
    "ypos": 4
  },
  {
    "number": 67,
    "symbol": "E67",
    "name": "Element 67",
    "mass": "67.000",
    "category": "unknown",
    "xpos": 13,
    "ypos": 4
  },
  {
    "number": 68,
    "symbol": "E68",
    "name": "Element 68",
    "mass": "68.000",
    "category": "unknown",
    "xpos": 14,
    "ypos": 4
  },
  {
    "number": 69,
    "symbol": "E69",
    "name": "Element 69",
    "mass": "69.000",
    "category": "unknown",
    "xpos": 15,
    "ypos": 4
  },
  {
    "number": 70,
    "symbol": "E70",
    "name": "Element 70",
    "mass": "70.000",
    "category": "unknown",
    "xpos": 16,
    "ypos": 4
  },
  {
    "number": 71,
    "symbol": "E71",
    "name": "Element 71",
    "mass": "71.000",
    "category": "unknown",
    "xpos": 17,
    "ypos": 4
  },
  {
    "number": 72,
    "symbol": "E72",
    "name": "Element 72",
    "mass": "72.000",
    "category": "unknown",
    "xpos": 18,
    "ypos": 4
  },
  {
    "number": 73,
    "symbol": "E73",
    "name": "Element 73",
    "mass": "73.000",
    "category": "unknown",
    "xpos": 1,
    "ypos": 5
  },
  {
    "number": 74,
    "symbol": "E74",
    "name": "Element 74",
    "mass": "74.000",
    "category": "unknown",
    "xpos": 2,
    "ypos": 5
  },
  {
    "number": 75,
    "symbol": "E75",
    "name": "Element 75",
    "mass": "75.000",
    "category": "unknown",
    "xpos": 3,
    "ypos": 5
  },
  {
    "number": 76,
    "symbol": "E76",
    "name": "Element 76",
    "mass": "76.000",
    "category": "unknown",
    "xpos": 4,
    "ypos": 5
  },
  {
    "number": 77,
    "symbol": "E77",
    "name": "Element 77",
    "mass": "77.000",
    "category": "unknown",
    "xpos": 5,
    "ypos": 5
  },
  {
    "number": 78,
    "symbol": "E78",
    "name": "Element 78",
    "mass": "78.000",
    "category": "unknown",
    "xpos": 6,
    "ypos": 5
  },
  {
    "number": 79,
    "symbol": "E79",
    "name": "Element 79",
    "mass": "79.000",
    "category": "unknown",
    "xpos": 7,
    "ypos": 5
  },
  {
    "number": 80,
    "symbol": "E80",
    "name": "Element 80",
    "mass": "80.000",
    "category": "unknown",
    "xpos": 8,
    "ypos": 5
  },
  {
    "number": 81,
    "symbol": "E81",
    "name": "Element 81",
    "mass": "81.000",
    "category": "unknown",
    "xpos": 9,
    "ypos": 5
  },
  {
    "number": 82,
    "symbol": "E82",
    "name": "Element 82",
    "mass": "82.000",
    "category": "unknown",
    "xpos": 10,
    "ypos": 5
  },
  {
    "number": 83,
    "symbol": "E83",
    "name": "Element 83",
    "mass": "83.000",
    "category": "unknown",
    "xpos": 11,
    "ypos": 5
  },
  {
    "number": 84,
    "symbol": "E84",
    "name": "Element 84",
    "mass": "84.000",
    "category": "unknown",
    "xpos": 12,
    "ypos": 5
  },
  {
    "number": 85,
    "symbol": "E85",
    "name": "Element 85",
    "mass": "85.000",
    "category": "unknown",
    "xpos": 13,
    "ypos": 5
  },
  {
    "number": 86,
    "symbol": "E86",
    "name": "Element 86",
    "mass": "86.000",
    "category": "unknown",
    "xpos": 14,
    "ypos": 5
  },
  {
    "number": 87,
    "symbol": "E87",
    "name": "Element 87",
    "mass": "87.000",
    "category": "unknown",
    "xpos": 15,
    "ypos": 5
  },
  {
    "number": 88,
    "symbol": "E88",
    "name": "Element 88",
    "mass": "88.000",
    "category": "unknown",
    "xpos": 16,
    "ypos": 5
  },
  {
    "number": 89,
    "symbol": "E89",
    "name": "Element 89",
    "mass": "89.000",
    "category": "unknown",
    "xpos": 17,
    "ypos": 5
  },
  {
    "number": 90,
    "symbol": "E90",
    "name": "Element 90",
    "mass": "90.000",
    "category": "unknown",
    "xpos": 18,
    "ypos": 5
  },
  {
    "number": 91,
    "symbol": "E91",
    "name": "Element 91",
    "mass": "91.000",
    "category": "unknown",
    "xpos": 1,
    "ypos": 6
  },
  {
    "number": 92,
    "symbol": "E92",
    "name": "Element 92",
    "mass": "92.000",
    "category": "unknown",
    "xpos": 2,
    "ypos": 6
  },
  {
    "number": 93,
    "symbol": "E93",
    "name": "Element 93",
    "mass": "93.000",
    "category": "unknown",
    "xpos": 3,
    "ypos": 6
  },
  {
    "number": 94,
    "symbol": "E94",
    "name": "Element 94",
    "mass": "94.000",
    "category": "unknown",
    "xpos": 4,
    "ypos": 6
  },
  {
    "number": 95,
    "symbol": "E95",
    "name": "Element 95",
    "mass": "95.000",
    "category": "unknown",
    "xpos": 5,
    "ypos": 6
  },
  {
    "number": 96,
    "symbol": "E96",
    "name": "Element 96",
    "mass": "96.000",
    "category": "unknown",
    "xpos": 6,
    "ypos": 6
  },
  {
    "number": 97,
    "symbol": "E97",
    "name": "Element 97",
    "mass": "97.000",
    "category": "unknown",
    "xpos": 7,
    "ypos": 6
  },
  {
    "number": 98,
    "symbol": "E98",
    "name": "Element 98",
    "mass": "98.000",
    "category": "unknown",
    "xpos": 8,
    "ypos": 6
  },
  {
    "number": 99,
    "symbol": "E99",
    "name": "Element 99",
    "mass": "99.000",
    "category": "unknown",
    "xpos": 9,
    "ypos": 6
  },
  {
    "number": 100,
    "symbol": "E100",
    "name": "Element 100",
    "mass": "100.000",
    "category": "unknown",
    "xpos": 10,
    "ypos": 6
  },
  {
    "number": 101,
    "symbol": "E101",
    "name": "Element 101",
    "mass": "101.000",
    "category": "unknown",
    "xpos": 11,
    "ypos": 6
  },
  {
    "number": 102,
    "symbol": "E102",
    "name": "Element 102",
    "mass": "102.000",
    "category": "unknown",
    "xpos": 12,
    "ypos": 6
  },
  {
    "number": 103,
    "symbol": "E103",
    "name": "Element 103",
    "mass": "103.000",
    "category": "unknown",
    "xpos": 13,
    "ypos": 6
  },
  {
    "number": 104,
    "symbol": "E104",
    "name": "Element 104",
    "mass": "104.000",
    "category": "unknown",
    "xpos": 14,
    "ypos": 6
  },
  {
    "number": 105,
    "symbol": "E105",
    "name": "Element 105",
    "mass": "105.000",
    "category": "unknown",
    "xpos": 15,
    "ypos": 6
  },
  {
    "number": 106,
    "symbol": "E106",
    "name": "Element 106",
    "mass": "106.000",
    "category": "unknown",
    "xpos": 16,
    "ypos": 6
  },
  {
    "number": 107,
    "symbol": "E107",
    "name": "Element 107",
    "mass": "107.000",
    "category": "unknown",
    "xpos": 17,
    "ypos": 6
  },
  {
    "number": 108,
    "symbol": "E108",
    "name": "Element 108",
    "mass": "108.000",
    "category": "unknown",
    "xpos": 18,
    "ypos": 6
  },
  {
    "number": 109,
    "symbol": "E109",
    "name": "Element 109",
    "mass": "109.000",
    "category": "unknown",
    "xpos": 1,
    "ypos": 7
  },
  {
    "number": 110,
    "symbol": "E110",
    "name": "Element 110",
    "mass": "110.000",
    "category": "unknown",
    "xpos": 2,
    "ypos": 7
  },
  {
    "number": 111,
    "symbol": "E111",
    "name": "Element 111",
    "mass": "111.000",
    "category": "unknown",
    "xpos": 3,
    "ypos": 7
  },
  {
    "number": 112,
    "symbol": "E112",
    "name": "Element 112",
    "mass": "112.000",
    "category": "unknown",
    "xpos": 4,
    "ypos": 7
  },
  {
    "number": 113,
    "symbol": "E113",
    "name": "Element 113",
    "mass": "113.000",
    "category": "unknown",
    "xpos": 5,
    "ypos": 7
  },
  {
    "number": 114,
    "symbol": "E114",
    "name": "Element 114",
    "mass": "114.000",
    "category": "unknown",
    "xpos": 6,
    "ypos": 7
  },
  {
    "number": 115,
    "symbol": "E115",
    "name": "Element 115",
    "mass": "115.000",
    "category": "unknown",
    "xpos": 7,
    "ypos": 7
  },
  {
    "number": 116,
    "symbol": "E116",
    "name": "Element 116",
    "mass": "116.000",
    "category": "unknown",
    "xpos": 8,
    "ypos": 7
  },
  {
    "number": 117,
    "symbol": "E117",
    "name": "Element 117",
    "mass": "117.000",
    "category": "unknown",
    "xpos": 9,
    "ypos": 7
  },
  {
    "number": 118,
    "symbol": "E118",
    "name": "Element 118",
    "mass": "118.000",
    "category": "unknown",
    "xpos": 10,
    "ypos": 7
  }
];