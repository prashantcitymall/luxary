export const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi'
];

// Default tourist places for cities that don't have specific places listed
const defaultTouristPlaces = [
  'City Center',
  'Heritage Area',
  'Cultural District',
  'Shopping District',
  'Temple Area',
  'Market Area',
  'Museum District',
  'Garden Area',
  'Lake View Area',
  'Business District'
];

export const touristPlaces = {
  // Uttar Pradesh
  'Agra': [
    'Taj Mahal Area',
    'Agra Fort Area',
    'Fatehpur Sikri',
    "Akbar's Tomb, Sikandra",
    'Mehtab Bagh Area',
    'Kinari Bazaar Area',
    'Jama Masjid Area',
    'Tomb of I\'timad-ud-Daulah',
    'Sadar Bazaar Area',
    'Ram Bagh Area'
  ],
  'Lucknow': [
    'Bara Imambara Area',
    'Chota Imambara Area',
    'Hazratganj Market',
    'Rumi Darwaza Area',
    'British Residency Area',
    'Ambedkar Park Area',
    'Gomti Riverfront',
    'Aminabad Market',
    'Lucknow Zoo Area',
    'Indira Gandhi Planetarium Area'
  ],
  'Varanasi': [
    'Dashashwamedh Ghat Area',
    'Assi Ghat Area',
    'Kashi Vishwanath Temple Area',
    'Sarnath Area',
    'Ramnagar Fort Area',
    'BHU Campus Area',
    'Manikarnika Ghat Area',
    'Godowlia Market Area'
  ],
  'Prayagraj': [
    'Triveni Sangam Area',
    'Anand Bhavan Area',
    'Khusro Bagh Area',
    'Chandrashekhar Azad Park',
    'Allahabad Fort Area',
    'Civil Lines Area',
    'University Area'
  ],

  // Rajasthan
  'Jaipur': [
    'Amber Fort Area',
    'City Palace Area',
    'Hawa Mahal Area',
    'Jantar Mantar',
    'Albert Hall Museum Area',
    'Nahargarh Fort Area',
    'Jal Mahal Area',
    'Birla Temple Area',
    'World Trade Park Area',
    'Pink City Market'
  ],
  'Udaipur': [
    'City Palace Area',
    'Lake Pichola Area',
    'Fateh Sagar Lake Area',
    'Jagdish Temple Area',
    'Sajjangarh Palace Area',
    'Bagore Ki Haveli Area',
    'Shilpgram Area',
    'Lake Palace Area'
  ],
  'Jodhpur': [
    'Mehrangarh Fort Area',
    'Clock Tower Area',
    'Umaid Bhawan Palace Area',
    'Jaswant Thada Area',
    'Mandore Gardens',
    'Sardar Market Area',
    'Sun City Area'
  ],

  // Maharashtra
  'Mumbai': [
    'Gateway of India Area',
    'Marine Drive',
    'Colaba Area',
    'Juhu Beach Area',
    'Bandra Area',
    'Dharavi Area',
    'Elephanta Caves Area',
    'Film City Area',
    'Nariman Point',
    'Worli Sea Face'
  ],
  'Pune': [
    'Shaniwar Wada Area',
    'Aga Khan Palace Area',
    'Dagdusheth Temple Area',
    'Koregaon Park',
    'MG Road Area',
    'Sinhagad Fort Area',
    'Deccan Area',
    'Kothrud Area'
  ],
  'Aurangabad': [
    'Ajanta Caves Area',
    'Ellora Caves Area',
    'Bibi Ka Maqbara Area',
    'Daulatabad Fort Area',
    'Panchakki Area',
    'Grishneshwar Temple Area'
  ],

  // Karnataka
  'Bangalore': [
    'MG Road Area',
    'Cubbon Park Area',
    'Lalbagh Area',
    'Brigade Road',
    'Indiranagar',
    'Koramangala',
    'UB City Area',
    'Whitefield',
    'Electronic City',
    'Bannerghatta Road'
  ],
  'Mysore': [
    'Mysore Palace Area',
    'Chamundi Hills Area',
    'Brindavan Gardens',
    'Zoo Area',
    'Devaraja Market Area',
    'St. Philomena\'s Church Area',
    'Karanji Lake Area'
  ],
  'Hampi': [
    'Virupaksha Temple Area',
    'Hampi Bazaar Area',
    'Royal Enclosure',
    'Vittala Temple Area',
    'Elephant Stables Area',
    'Lotus Mahal Area',
    'Tungabhadra River Area'
  ],

  // Tamil Nadu
  'Chennai': [
    'Marina Beach Area',
    'Mylapore Temple Area',
    'T Nagar Shopping District',
    'Besant Nagar Beach',
    'Anna Nagar',
    'Guindy National Park Area',
    'Vadapalani Temple Area',
    'ECR Road',
    'Adyar Area',
    'Velachery'
  ],
  'Madurai': [
    'Meenakshi Temple Area',
    'Thirumalai Nayakkar Palace Area',
    'Gandhi Museum Area',
    'Vandiyur Mariamman Tank',
    'Azhagar Temple Area',
    'Eco Park Area'
  ],
  'Coimbatore': [
    'Marudhamalai Temple Area',
    'VOC Park Area',
    'Ukkadam Lake Area',
    'RS Puram Area',
    'Race Course Area',
    'Fun Mall Area',
    'Brookefields Mall Area'
  ],

  // West Bengal
  'Kolkata': [
    'Victoria Memorial Area',
    'Park Street Area',
    'Howrah Bridge Area',
    'New Market Area',
    'Salt Lake City',
    'Eco Park Area',
    'Kalighat Temple Area',
    'Science City Area',
    'Rajarhat Area',
    'Esplanade Area'
  ],
  'Darjeeling': [
    'Mall Road Area',
    'Tiger Hill Area',
    'Batasia Loop Area',
    'Happy Valley Tea Estate',
    'Ghoom Monastery Area',
    'Himalayan Railway Area',
    'Chowrasta Area'
  ],

  // Gujarat
  'Ahmedabad': [
    'Sabarmati Ashram Area',
    'Kankaria Lake Area',
    'Law Garden Area',
    'Adalaj Stepwell Area',
    'Science City Area',
    'Riverfront Area',
    'CG Road Area'
  ],
  'Vadodara': [
    'Laxmi Vilas Palace Area',
    'Sayaji Gardens Area',
    'Kirti Mandir Area',
    'Nyay Mandir Area',
    'MS University Area',
    'EME Temple Area'
  ],

  // Kerala
  'Kochi': [
    'Fort Kochi Area',
    'Marine Drive Area',
    'Mattancherry Palace Area',
    'Chinese Fishing Nets Area',
    'Jew Town Area',
    'LuLu Mall Area',
    'Willingdon Island Area'
  ],
  'Thiruvananthapuram': [
    'Kovalam Beach Area',
    'Padmanabhaswamy Temple Area',
    'Museum Area',
    'Zoo Area',
    'Shanghumukham Beach Area',
    'Vellayani Lake Area'
  ],

  // Telangana
  'Hyderabad': [
    'Charminar Area',
    'Golconda Fort Area',
    'Hussain Sagar Lake Area',
    'Banjara Hills',
    'Jubilee Hills',
    'Hi-Tech City',
    'Begumpet Area',
    'Secunderabad Area',
    'Gachibowli',
    'Film Nagar'
  ],
  'Warangal': [
    'Warangal Fort Area',
    'Thousand Pillar Temple Area',
    'Bhadrakali Temple Area',
    'Ramappa Temple Area',
    'Laknavaram Lake Area',
    'NIT Warangal Area'
  ],

  // Delhi
  'Delhi': [
    'Red Fort Area',
    'Qutub Minar Area',
    'India Gate Area',
    'Humayun\'s Tomb Area',
    'Chandni Chowk Area',
    'Connaught Place',
    'Lodhi Garden Area',
    'Hauz Khas Area',
    'Akshardham Temple Area'
  ],

  get(city) {
    return this[city] || defaultTouristPlaces;
  }
};

export const indianCities = {
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati'],
  'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang'],
  'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia'],
  'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Purnia'],
  'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg'],
  'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar'],
  'Haryana': ['Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak'],
  'Himachal Pradesh': ['Shimla', 'Mandi', 'Dharamshala', 'Kullu', 'Manali'],
  'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'],
  'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Hampi'],
  'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Malappuram'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur'],
  'Manipur': ['Imphal', 'Thoubal', 'Bishnupur'],
  'Meghalaya': ['Shillong', 'Tura', 'Jowai'],
  'Mizoram': ['Aizawl', 'Lunglei', 'Champhai'],
  'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung'],
  'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur'],
  'Punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'],
  'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam'],
  'Tripura': ['Agartala', 'Udaipur', 'Dharmanagar'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Allahabad', 'Meerut', 'Bareilly'],
  'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Darjeeling'],
  'Delhi': ['Delhi', 'New Delhi', 'Dwarka', 'Rohini', 'Pitampura']
};
