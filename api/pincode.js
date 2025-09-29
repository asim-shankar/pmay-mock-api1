// api/pincode.js
// Mock Pincode Directory API (200 entries)

// 10 seeds (kept from your snippet)
const SEEDS = {
  "110010": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Karol Bagh",
      "Connaught Place"
    ],
    "lat": 28.604,
    "lon": 77.239
  },
  "110011": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Powai"
    ],
    "lat": 19.098,
    "lon": 72.852
  },
  "110012": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Basavanagudi",
      "Banashankari"
    ],
    "lat": 12.955,
    "lon": 77.59
  },
  "110013": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Kilpauk",
      "Egmore"
    ],
    "lat": 13.021,
    "lon": 80.26
  },
  "110014": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Shibpur",
      "Liluah"
    ],
    "lat": 22.623,
    "lon": 88.375
  },
  "110015": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Begumpet",
      "Malkajgiri"
    ],
    "lat": 17.411,
    "lon": 78.481
  },
  "110016": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Chowk",
      "Hazratganj"
    ],
    "lat": 26.88,
    "lon": 80.939
  },
  "110017": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Old Town",
      "Lingaraj"
    ],
    "lat": 20.295,
    "lon": 85.832
  },
  "110018": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Lal Darwaja"
    ],
    "lat": 22.985,
    "lon": 72.567
  },
  "110019": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "MI Road"
    ],
    "lat": 26.913,
    "lon": 75.816
  },
  "110020": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Karol Bagh",
      "Chandni Chowk"
    ],
    "lat": 28.609,
    "lon": 77.267
  },
  "110021": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Powai",
      "Versova"
    ],
    "lat": 19.097,
    "lon": 72.881
  },
  "110022": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Basavanagudi",
      "Jayanagar"
    ],
    "lat": 12.932,
    "lon": 77.571
  },
  "110023": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Egmore",
      "Kilpauk"
    ],
    "lat": 13.108,
    "lon": 80.28
  },
  "110024": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Bally"
    ],
    "lat": 22.552,
    "lon": 88.306
  },
  "110025": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Tarnaka",
      "Begumpet"
    ],
    "lat": 17.416,
    "lon": 78.474
  },
  "110026": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Aminabad",
      "Hazratganj"
    ],
    "lat": 26.811,
    "lon": 80.994
  },
  "110027": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Khandagiri",
      "Lingaraj"
    ],
    "lat": 20.225,
    "lon": 85.824
  },
  "110028": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Ellis Bridge"
    ],
    "lat": 22.991,
    "lon": 72.547
  },
  "110029": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "Bapu Bazaar"
    ],
    "lat": 26.945,
    "lon": 75.742
  },
  "110030": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Connaught Place",
      "Karol Bagh"
    ],
    "lat": 28.631,
    "lon": 77.244
  },
  "110031": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Versova",
      "Powai"
    ],
    "lat": 19.128,
    "lon": 72.798
  },
  "110032": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Basavanagudi",
      "Jayanagar"
    ],
    "lat": 12.944,
    "lon": 77.569
  },
  "110033": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Kilpauk",
      "Egmore"
    ],
    "lat": 13.022,
    "lon": 80.284
  },
  "110034": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Bally",
      "Liluah"
    ],
    "lat": 22.625,
    "lon": 88.304
  },
  "110035": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Tarnaka",
      "Malkajgiri"
    ],
    "lat": 17.412,
    "lon": 78.534
  },
  "110036": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Hazratganj",
      "Chowk"
    ],
    "lat": 26.803,
    "lon": 80.947
  },
  "110037": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Lingaraj",
      "Khandagiri"
    ],
    "lat": 20.283,
    "lon": 85.812
  },
  "110038": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Lal Darwaja"
    ],
    "lat": 23.075,
    "lon": 72.559
  },
  "110039": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "MI Road",
      "Johari Bazaar"
    ],
    "lat": 26.899,
    "lon": 75.829
  },
  "110040": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Karol Bagh",
      "Chandni Chowk"
    ],
    "lat": 28.633,
    "lon": 77.179
  },
  "110041": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Powai"
    ],
    "lat": 19.13,
    "lon": 72.843
  },
  "110042": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Jayanagar"
    ],
    "lat": 12.905,
    "lon": 77.538
  },
  "110043": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Kilpauk",
      "Aminjikarai"
    ],
    "lat": 13.066,
    "lon": 80.26
  },
  "110044": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Shibpur",
      "Liluah"
    ],
    "lat": 22.631,
    "lon": 88.335
  },
  "110045": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Begumpet",
      "Malkajgiri"
    ],
    "lat": 17.475,
    "lon": 78.529
  },
  "110046": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Hazratganj",
      "Chowk"
    ],
    "lat": 26.838,
    "lon": 80.942
  },
  "110047": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Khandagiri",
      "Lingaraj"
    ],
    "lat": 20.297,
    "lon": 85.799
  },
  "110048": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Ellis Bridge"
    ],
    "lat": 23.057,
    "lon": 72.549
  },
  "110049": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Bapu Bazaar",
      "MI Road"
    ],
    "lat": 26.866,
    "lon": 75.742
  },
  "110050": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Karol Bagh"
    ],
    "lat": 28.65,
    "lon": 77.191
  },
  "110051": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Versova"
    ],
    "lat": 19.079,
    "lon": 72.857
  },
  "110052": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Basavanagudi"
    ],
    "lat": 12.951,
    "lon": 77.522
  },
  "110053": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Egmore",
      "Kilpauk"
    ],
    "lat": 13.058,
    "lon": 80.27
  },
  "110054": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Shibpur"
    ],
    "lat": 22.55,
    "lon": 88.383
  },
  "110055": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Malkajgiri",
      "Begumpet"
    ],
    "lat": 17.466,
    "lon": 78.499
  },
  "110056": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Aminabad",
      "Chowk"
    ],
    "lat": 26.866,
    "lon": 80.918
  },
  "110057": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Old Town",
      "Khandagiri"
    ],
    "lat": 20.233,
    "lon": 85.815
  },
  "110058": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Lal Darwaja",
      "Bhadra"
    ],
    "lat": 23.067,
    "lon": 72.564
  },
  "110059": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "Bapu Bazaar"
    ],
    "lat": 26.956,
    "lon": 75.767
  },
  "110060": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Karol Bagh",
      "Connaught Place"
    ],
    "lat": 28.586,
    "lon": 77.205
  },
  "110061": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Powai"
    ],
    "lat": 19.078,
    "lon": 72.806
  },
  "110062": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Basavanagudi"
    ],
    "lat": 12.917,
    "lon": 77.528
  },
  "110063": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Egmore",
      "Kilpauk"
    ],
    "lat": 13.072,
    "lon": 80.238
  },
  "110064": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Shibpur"
    ],
    "lat": 22.564,
    "lon": 88.336
  },
  "110065": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Begumpet",
      "Tarnaka"
    ],
    "lat": 17.449,
    "lon": 78.516
  },
  "110066": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Hazratganj",
      "Aminabad"
    ],
    "lat": 26.875,
    "lon": 80.977
  },
  "110067": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Khandagiri",
      "Lingaraj"
    ],
    "lat": 20.264,
    "lon": 85.838
  },
  "110068": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Lal Darwaja",
      "Ellis Bridge"
    ],
    "lat": 23.076,
    "lon": 72.575
  },
  "110069": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "MI Road",
      "Bapu Bazaar"
    ],
    "lat": 26.926,
    "lon": 75.824
  },
  "110070": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Connaught Place"
    ],
    "lat": 28.622,
    "lon": 77.175
  },
  "110071": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Versova"
    ],
    "lat": 19.14,
    "lon": 72.802
  },
  "110072": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Jayanagar",
      "Banashankari"
    ],
    "lat": 12.959,
    "lon": 77.541
  },
  "110073": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Kilpauk",
      "Egmore"
    ],
    "lat": 13.099,
    "lon": 80.276
  },
  "110074": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Bally"
    ],
    "lat": 22.562,
    "lon": 88.308
  },
  "110075": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Malkajgiri",
      "Tarnaka"
    ],
    "lat": 17.465,
    "lon": 78.47
  },
  "110076": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Chowk",
      "Aminabad"
    ],
    "lat": 26.889,
    "lon": 80.984
  },
  "110077": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Khandagiri",
      "Lingaraj"
    ],
    "lat": 20.231,
    "lon": 85.819
  },
  "110078": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Lal Darwaja",
      "Ellis Bridge"
    ],
    "lat": 23.023,
    "lon": 72.608
  },
  "110079": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "MI Road"
    ],
    "lat": 26.915,
    "lon": 75.806
  },
  "110080": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Karol Bagh",
      "Chandni Chowk"
    ],
    "lat": 28.618,
    "lon": 77.213
  },
  "110081": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Powai"
    ],
    "lat": 19.152,
    "lon": 72.793
  },
  "110082": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Basavanagudi"
    ],
    "lat": 12.91,
    "lon": 77.541
  },
  "110083": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Aminjikarai",
      "Kilpauk"
    ],
    "lat": 13.094,
    "lon": 80.22
  },
  "110084": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Bally",
      "Shibpur"
    ],
    "lat": 22.627,
    "lon": 88.389
  },
  "110085": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Begumpet",
      "Malkajgiri"
    ],
    "lat": 17.451,
    "lon": 78.461
  },
  "110086": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Hazratganj",
      "Aminabad"
    ],
    "lat": 26.85,
    "lon": 80.962
  },
  "110087": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Lingaraj",
      "Old Town"
    ],
    "lat": 20.294,
    "lon": 85.869
  },
  "110088": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Ellis Bridge",
      "Bhadra"
    ],
    "lat": 23.049,
    "lon": 72.548
  },
  "110089": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Bapu Bazaar",
      "MI Road"
    ],
    "lat": 26.95,
    "lon": 75.768
  },
  "110090": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Karol Bagh"
    ],
    "lat": 28.629,
    "lon": 77.253
  },
  "110091": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Powai",
      "Versova"
    ],
    "lat": 19.13,
    "lon": 72.83
  },
  "110092": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Jayanagar",
      "Banashankari"
    ],
    "lat": 12.906,
    "lon": 77.611
  },
  "110093": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Aminjikarai",
      "Egmore"
    ],
    "lat": 13.045,
    "lon": 80.277
  },
  "110094": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Bally",
      "Shibpur"
    ],
    "lat": 22.57,
    "lon": 88.368
  },
  "110095": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Begumpet",
      "Malkajgiri"
    ],
    "lat": 17.406,
    "lon": 78.537
  },
  "110096": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Aminabad",
      "Hazratganj"
    ],
    "lat": 26.878,
    "lon": 80.968
  },
  "110097": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Khandagiri",
      "Lingaraj"
    ],
    "lat": 20.225,
    "lon": 85.863
  },
  "110098": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Lal Darwaja",
      "Ellis Bridge"
    ],
    "lat": 22.99,
    "lon": 72.594
  },
  "110099": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "MI Road",
      "Johari Bazaar"
    ],
    "lat": 26.894,
    "lon": 75.759
  },
  "110100": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Karol Bagh",
      "Chandni Chowk"
    ],
    "lat": 28.597,
    "lon": 77.217
  },
  "110101": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Versova",
      "Andheri East"
    ],
    "lat": 19.163,
    "lon": 72.844
  },
  "110102": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Basavanagudi",
      "Jayanagar"
    ],
    "lat": 12.949,
    "lon": 77.525
  },
  "110103": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Egmore",
      "Aminjikarai"
    ],
    "lat": 13.047,
    "lon": 80.239
  },
  "110104": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Shibpur",
      "Bally"
    ],
    "lat": 22.544,
    "lon": 88.392
  },
  "110105": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Tarnaka",
      "Begumpet"
    ],
    "lat": 17.47,
    "lon": 78.475
  },
  "110106": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Chowk",
      "Hazratganj"
    ],
    "lat": 26.845,
    "lon": 80.933
  },
  "110107": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Old Town",
      "Khandagiri"
    ],
    "lat": 20.227,
    "lon": 85.848
  },
  "110108": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Ellis Bridge"
    ],
    "lat": 22.996,
    "lon": 72.559
  },
  "110109": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Bapu Bazaar",
      "MI Road"
    ],
    "lat": 26.919,
    "lon": 75.797
  },
  "110110": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Karol Bagh"
    ],
    "lat": 28.598,
    "lon": 77.25
  },
  "110111": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Powai",
      "Versova"
    ],
    "lat": 19.156,
    "lon": 72.824
  },
  "110112": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Jayanagar"
    ],
    "lat": 12.963,
    "lon": 77.605
  },
  "110113": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Aminjikarai",
      "Kilpauk"
    ],
    "lat": 13.053,
    "lon": 80.297
  },
  "110114": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Bally",
      "Shibpur"
    ],
    "lat": 22.557,
    "lon": 88.392
  },
  "110115": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Tarnaka",
      "Malkajgiri"
    ],
    "lat": 17.483,
    "lon": 78.491
  },
  "110116": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Aminabad",
      "Hazratganj"
    ],
    "lat": 26.876,
    "lon": 80.922
  },
  "110117": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Old Town",
      "Lingaraj"
    ],
    "lat": 20.28,
    "lon": 85.854
  },
  "110118": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Lal Darwaja",
      "Bhadra"
    ],
    "lat": 23.019,
    "lon": 72.627
  },
  "110119": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Bapu Bazaar",
      "MI Road"
    ],
    "lat": 26.922,
    "lon": 75.781
  },
  "110120": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Connaught Place",
      "Chandni Chowk"
    ],
    "lat": 28.676,
    "lon": 77.225
  },
  "110121": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Powai",
      "Andheri East"
    ],
    "lat": 19.103,
    "lon": 72.858
  },
  "110122": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Basavanagudi",
      "Banashankari"
    ],
    "lat": 12.904,
    "lon": 77.564
  },
  "110123": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Egmore",
      "Kilpauk"
    ],
    "lat": 13.045,
    "lon": 80.257
  },
  "110124": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Bally"
    ],
    "lat": 22.549,
    "lon": 88.315
  },
  "110125": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Malkajgiri",
      "Tarnaka"
    ],
    "lat": 17.395,
    "lon": 78.497
  },
  "110126": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Chowk",
      "Hazratganj"
    ],
    "lat": 26.824,
    "lon": 80.95
  },
  "110127": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Old Town",
      "Lingaraj"
    ],
    "lat": 20.288,
    "lon": 85.888
  },
  "110128": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Lal Darwaja"
    ],
    "lat": 23.048,
    "lon": 72.579
  },
  "110129": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Bapu Bazaar",
      "MI Road"
    ],
    "lat": 26.887,
    "lon": 75.773
  },
  "110130": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Connaught Place",
      "Chandni Chowk"
    ],
    "lat": 28.668,
    "lon": 77.243
  },
  "110131": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Powai"
    ],
    "lat": 19.088,
    "lon": 72.797
  },
  "110132": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Basavanagudi"
    ],
    "lat": 12.908,
    "lon": 77.596
  },
  "110133": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Egmore",
      "Kilpauk"
    ],
    "lat": 13.058,
    "lon": 80.212
  },
  "110134": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Bally",
      "Liluah"
    ],
    "lat": 22.569,
    "lon": 88.318
  },
  "110135": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Tarnaka",
      "Begumpet"
    ],
    "lat": 17.438,
    "lon": 78.448
  },
  "110136": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Hazratganj",
      "Aminabad"
    ],
    "lat": 26.827,
    "lon": 80.982
  },
  "110137": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Old Town",
      "Lingaraj"
    ],
    "lat": 20.262,
    "lon": 85.835
  },
  "110138": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Ellis Bridge"
    ],
    "lat": 23.01,
    "lon": 72.583
  },
  "110139": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "Bapu Bazaar"
    ],
    "lat": 26.957,
    "lon": 75.805
  },
  "110140": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Connaught Place"
    ],
    "lat": 28.657,
    "lon": 77.187
  },
  "110141": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Powai",
      "Andheri East"
    ],
    "lat": 19.155,
    "lon": 72.802
  },
  "110142": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Basavanagudi",
      "Jayanagar"
    ],
    "lat": 12.994,
    "lon": 77.601
  },
  "110143": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Aminjikarai",
      "Egmore"
    ],
    "lat": 13.071,
    "lon": 80.269
  },
  "110144": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Shibpur"
    ],
    "lat": 22.541,
    "lon": 88.388
  },
  "110145": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Tarnaka",
      "Malkajgiri"
    ],
    "lat": 17.439,
    "lon": 78.528
  },
  "110146": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Chowk",
      "Hazratganj"
    ],
    "lat": 26.867,
    "lon": 80.946
  },
  "110147": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Old Town",
      "Khandagiri"
    ],
    "lat": 20.289,
    "lon": 85.816
  },
  "110148": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Ellis Bridge",
      "Bhadra"
    ],
    "lat": 23.016,
    "lon": 72.621
  },
  "110149": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "MI Road",
      "Johari Bazaar"
    ],
    "lat": 26.915,
    "lon": 75.798
  },
  "110150": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Karol Bagh"
    ],
    "lat": 28.633,
    "lon": 77.171
  },
  "110151": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Versova",
      "Powai"
    ],
    "lat": 19.143,
    "lon": 72.821
  },
  "110152": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Jayanagar"
    ],
    "lat": 12.942,
    "lon": 77.567
  },
  "110153": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Kilpauk",
      "Egmore"
    ],
    "lat": 13.04,
    "lon": 80.26
  },
  "110154": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Bally",
      "Shibpur"
    ],
    "lat": 22.632,
    "lon": 88.339
  },
  "110155": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Malkajgiri",
      "Tarnaka"
    ],
    "lat": 17.425,
    "lon": 78.471
  },
  "110156": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Aminabad",
      "Hazratganj"
    ],
    "lat": 26.83,
    "lon": 80.942
  },
  "110157": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Khandagiri",
      "Old Town"
    ],
    "lat": 20.318,
    "lon": 85.849
  },
  "110158": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Ellis Bridge"
    ],
    "lat": 22.993,
    "lon": 72.622
  },
  "110159": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "MI Road"
    ],
    "lat": 26.943,
    "lon": 75.778
  },
  "110160": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Connaught Place"
    ],
    "lat": 28.594,
    "lon": 77.226
  },
  "110161": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Versova"
    ],
    "lat": 19.162,
    "lon": 72.821
  },
  "110162": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Basavanagudi",
      "Banashankari"
    ],
    "lat": 12.913,
    "lon": 77.594
  },
  "110163": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Aminjikarai",
      "Egmore"
    ],
    "lat": 13.103,
    "lon": 80.21
  },
  "110164": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Bally",
      "Liluah"
    ],
    "lat": 22.567,
    "lon": 88.398
  },
  "110165": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Begumpet",
      "Tarnaka"
    ],
    "lat": 17.446,
    "lon": 78.54
  },
  "110166": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Hazratganj",
      "Chowk"
    ],
    "lat": 26.816,
    "lon": 80.914
  },
  "110167": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Lingaraj",
      "Khandagiri"
    ],
    "lat": 20.295,
    "lon": 85.827
  },
  "110168": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Lal Darwaja",
      "Ellis Bridge"
    ],
    "lat": 23.05,
    "lon": 72.605
  },
  "110169": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "Bapu Bazaar"
    ],
    "lat": 26.863,
    "lon": 75.791
  },
  "110170": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Karol Bagh",
      "Connaught Place"
    ],
    "lat": 28.608,
    "lon": 77.249
  },
  "110171": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Versova",
      "Andheri East"
    ],
    "lat": 19.104,
    "lon": 72.884
  },
  "110172": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Jayanagar"
    ],
    "lat": 12.969,
    "lon": 77.618
  },
  "110173": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Kilpauk",
      "Aminjikarai"
    ],
    "lat": 13.025,
    "lon": 80.209
  },
  "110174": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Bally",
      "Shibpur"
    ],
    "lat": 22.621,
    "lon": 88.357
  },
  "110175": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Malkajgiri",
      "Tarnaka"
    ],
    "lat": 17.484,
    "lon": 78.495
  },
  "110176": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Hazratganj",
      "Aminabad"
    ],
    "lat": 26.87,
    "lon": 80.938
  },
  "110177": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Lingaraj",
      "Old Town"
    ],
    "lat": 20.267,
    "lon": 85.807
  },
  "110178": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Ellis Bridge",
      "Bhadra"
    ],
    "lat": 23.013,
    "lon": 72.597
  },
  "110179": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "Bapu Bazaar"
    ],
    "lat": 26.936,
    "lon": 75.831
  },
  "110180": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Connaught Place"
    ],
    "lat": 28.587,
    "lon": 77.177
  },
  "110181": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Versova",
      "Powai"
    ],
    "lat": 19.135,
    "lon": 72.796
  },
  "110182": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Basavanagudi",
      "Banashankari"
    ],
    "lat": 12.914,
    "lon": 77.536
  },
  "110183": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Egmore",
      "Aminjikarai"
    ],
    "lat": 13.115,
    "lon": 80.243
  },
  "110184": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Shibpur"
    ],
    "lat": 22.635,
    "lon": 88.331
  },
  "110185": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Malkajgiri",
      "Tarnaka"
    ],
    "lat": 17.427,
    "lon": 78.453
  },
  "110186": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Chowk",
      "Aminabad"
    ],
    "lat": 26.885,
    "lon": 80.995
  },
  "110187": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Lingaraj",
      "Old Town"
    ],
    "lat": 20.283,
    "lon": 85.827
  },
  "110188": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Ellis Bridge"
    ],
    "lat": 23.01,
    "lon": 72.57
  },
  "110189": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Bapu Bazaar",
      "Johari Bazaar"
    ],
    "lat": 26.865,
    "lon": 75.785
  },
  "110190": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Chandni Chowk",
      "Connaught Place"
    ],
    "lat": 28.678,
    "lon": 77.223
  },
  "110191": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Versova",
      "Powai"
    ],
    "lat": 19.119,
    "lon": 72.849
  },
  "110192": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Banashankari",
      "Basavanagudi"
    ],
    "lat": 12.993,
    "lon": 77.56
  },
  "110193": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Kilpauk",
      "Aminjikarai"
    ],
    "lat": 13.025,
    "lon": 80.262
  },
  "110194": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Bally"
    ],
    "lat": 22.612,
    "lon": 88.395
  },
  "110195": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Malkajgiri",
      "Begumpet"
    ],
    "lat": 17.4,
    "lon": 78.526
  },
  "110196": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Hazratganj",
      "Aminabad"
    ],
    "lat": 26.805,
    "lon": 80.982
  },
  "110197": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Old Town",
      "Khandagiri"
    ],
    "lat": 20.291,
    "lon": 85.83
  },
  "110198": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Bhadra",
      "Lal Darwaja"
    ],
    "lat": 23.035,
    "lon": 72.549
  },
  "110199": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "Bapu Bazaar"
    ],
    "lat": 26.906,
    "lon": 75.749
  },
  "110200": {
    "district": "New Delhi",
    "state": "Delhi",
    "taluk": "New Delhi",
    "villages": [
      "Connaught Place",
      "Chandni Chowk"
    ],
    "lat": 28.666,
    "lon": 77.227
  },
  "110201": {
    "district": "Mumbai Suburban",
    "state": "Maharashtra",
    "taluk": "Andheri",
    "villages": [
      "Andheri East",
      "Versova"
    ],
    "lat": 19.144,
    "lon": 72.886
  },
  "110202": {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "taluk": "Bangalore South",
    "villages": [
      "Jayanagar",
      "Basavanagudi"
    ],
    "lat": 12.923,
    "lon": 77.522
  },
  "110203": {
    "district": "Chennai",
    "state": "Tamil Nadu",
    "taluk": "Egmore",
    "villages": [
      "Aminjikarai",
      "Kilpauk"
    ],
    "lat": 13.11,
    "lon": 80.218
  },
  "110204": {
    "district": "Kolkata",
    "state": "West Bengal",
    "taluk": "Howrah",
    "villages": [
      "Liluah",
      "Shibpur"
    ],
    "lat": 22.585,
    "lon": 88.39
  },
  "110205": {
    "district": "Hyderabad",
    "state": "Telangana",
    "taluk": "Secunderabad",
    "villages": [
      "Begumpet",
      "Tarnaka"
    ],
    "lat": 17.406,
    "lon": 78.485
  },
  "110206": {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "taluk": "Lucknow",
    "villages": [
      "Chowk",
      "Hazratganj"
    ],
    "lat": 26.834,
    "lon": 80.916
  },
  "110207": {
    "district": "Khordha",
    "state": "Odisha",
    "taluk": "Bhubaneswar",
    "villages": [
      "Lingaraj",
      "Khandagiri"
    ],
    "lat": 20.254,
    "lon": 85.847
  },
  "110208": {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "taluk": "City",
    "villages": [
      "Ellis Bridge",
      "Bhadra"
    ],
    "lat": 22.991,
    "lon": 72.577
  },
  "110209": {
    "district": "Jaipur",
    "state": "Rajasthan",
    "taluk": "Jaipur",
    "villages": [
      "Johari Bazaar",
      "MI Road"
    ],
    "lat": 26.926,
    "lon": 75.808
  }
};

// Expand seeds to ~200 unique pincodes by varying last 3 digits per seed prefix
function expandTo200(baseMap, target = 200) {
  const seeds = Object.entries(baseMap);
  const out = {};
  let count = 0;
  let salt = 17;

  // keep originals first
  for (const [pin, meta] of seeds) {
    out[pin] = { ...meta };
    count++;
    if (count >= target) return out;
  }

  // generate additional pins
  while (count < target) {
    const [seedPin, meta] = seeds[count % seeds.length];
    salt = (salt * 73 + 41) % 900; // 0..899
    const last3 = String(100 + salt).slice(-3);
    const newPin = seedPin.slice(0, 3) + last3;

    if (!out[newPin]) {
      out[newPin] = {
        ...meta,
        // add a synthetic locality for variety
        villages: meta.villages.slice(0, 2).concat(`Sector ${((salt % 20) + 1)}`),
        // tiny coordinate jitter to avoid exact duplicates
        lat: +(meta.lat + ((salt % 7) - 3) * 0.001).toFixed(3),
        lon: +(meta.lon + ((salt % 7) - 3) * 0.001).toFixed(3)
      };
      count++;
    }
  }
  return out;
}

const PINCODES = expandTo200(SEEDS, 200);

// helpers
const has = (t = "", q = "") => String(t).toLowerCase().includes(String(q).toLowerCase());

export default function handler(req, res) {
  const { pincode = "", state = "", district = "", limit = "10", mock = "true" } = req.query;

  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  // exact lookup
  if (pincode && PINCODES[pincode]) {
    return res.status(200).json({
      meta: { mock: mock !== "false", type: "pincode", count: 1 },
      record: { pincode, ...PINCODES[pincode] },
      disclaimer: "MOCK DIRECTORY DATA - Verify with official India Post sources."
    });
  }

  // filtered or full list
  let all = Object.entries(PINCODES).map(([pc, v]) => ({ pincode: pc, ...v }));
  if (state) all = all.filter(r => has(r.state, state));
  if (district) all = all.filter(r => has(r.district, district));
  const L = Math.max(1, Math.min(200, parseInt(limit, 10) || 10));

  return res.status(200).json({
    meta: { mock: mock !== "false", type: "directory", total: all.length, count: Math.min(L, all.length), limit: L },
    records: all.sort((a, b) => a.pincode.localeCompare(b.pincode)).slice(0, L),
    disclaimer: "MOCK DIRECTORY DATA - Verify with official India Post sources."
  });
}
