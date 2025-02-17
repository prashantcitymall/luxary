export const states = [
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar',
    cities: [
      {
        id: 'port-blair',
        name: 'Port Blair',
        places: [
          {
            id: 'cellular-jail',
            name: 'Cellular Jail',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Historic colonial prison.',
            description: 'Colonial prison that held many Indian freedom fighters.',
            visitingHours: '9:00 AM - 5:00 PM',
            entryFee: { indian: '₹30', foreign: '₹300' },
            bestTime: 'October to May',
            additionalInfo: 'Light and sound show in evening'
          },
          {
            id: 'ross-island',
            name: 'Ross Island',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Historic British administrative headquarters.',
            description: 'Former British administrative center with historic ruins.',
            visitingHours: '8:30 AM - 4:00 PM',
            entryFee: { indian: '₹50', foreign: '₹500' },
            bestTime: 'October to May',
            additionalInfo: 'Ferry service available'
          }
        ]
      },
      {
        id: 'havelock-island',
        name: 'Havelock Island',
        places: [
          {
            id: 'radhanagar-beach',
            name: 'Radhanagar Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Asia\'s best beach.',
            description: 'White sand beach with crystal clear waters.',
            visitingHours: 'Sunrise to Sunset',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to May',
            additionalInfo: 'Famous for sunset views'
          },
          {
            id: 'elephant-beach',
            name: 'Elephant Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Popular for water sports.',
            description: 'Beautiful coral reef and water sports activities.',
            visitingHours: '9:00 AM - 4:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to May',
            additionalInfo: 'Snorkeling available'
          }
        ]
      }
    ]
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    cities: [
      {
        id: 'agatti-island',
        name: 'Agatti Island',
        places: [
          {
            id: 'agatti-beach',
            name: 'Agatti Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Beautiful lagoon and coral reefs.',
            description: 'Gateway to Lakshadweep, known for its pristine beaches.',
            visitingHours: 'Sunrise to Sunset',
            entryFee: { indian: 'Permit required', foreign: 'Permit required' },
            bestTime: 'October to May',
            additionalInfo: 'Scuba diving available'
          }
        ]
      },
      {
        id: 'kavaratti',
        name: 'Kavaratti',
        places: [
          {
            id: 'kavaratti-beach',
            name: 'Kavaratti Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Capital of Lakshadweep.',
            description: 'Beautiful beaches and water sports activities.',
            visitingHours: 'Sunrise to Sunset',
            entryFee: { indian: 'Permit required', foreign: 'Permit required' },
            bestTime: 'October to May',
            additionalInfo: 'Glass bottom boat rides'
          },
          {
            id: 'ujra-mosque',
            name: 'Ujra Mosque',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Historic mosque with unique architecture.',
            description: 'Beautiful white mosque with ornate ceilings.',
            visitingHours: 'Prayer times',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to May',
            additionalInfo: 'Non-Muslims need permission'
          }
        ]
      }
    ]
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    cities: [
      {
        id: 'agra',
        name: 'Agra',
        places: [
          {
            id: 'taj-mahal',
            name: 'Taj Mahal',
            image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
            shortDescription: 'One of the seven wonders of the world, symbol of eternal love.',
            description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra.',
            visitingHours: '6:00 AM - 6:30 PM (Closed on Fridays)',
            entryFee: { indian: '₹50', foreign: '₹1100' },
            bestTime: 'October to March',
            additionalInfo: 'Photography is allowed but videography is restricted.'
          },
          {
            id: 'agra-fort',
            name: 'Agra Fort',
            image: 'https://images.unsplash.com/photo-1589308454676-22c9af2a0e91',
            shortDescription: 'UNESCO World Heritage site, showcasing Mughal architecture.',
            description: 'Agra Fort is a historical fort in the city of Agra.',
            visitingHours: '6:00 AM - 6:00 PM',
            entryFee: { indian: '₹35', foreign: '₹550' },
            bestTime: 'October to March',
            additionalInfo: 'Audio guides available in multiple languages'
          },
          {
            id: 'fatehpur-sikri',
            name: 'Fatehpur Sikri',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'A city of architectural grandeur from Mughal era.',
            description: 'Fatehpur Sikri was built in the 16th century by Emperor Akbar.',
            visitingHours: 'Sunrise to Sunset',
            entryFee: { indian: '₹35', foreign: '₹550' },
            bestTime: 'October to March',
            additionalInfo: 'Guided tours available'
          }
        ]
      },
      {
        id: 'lucknow',
        name: 'Lucknow',
        places: [
          {
            id: 'bara-imambara',
            name: 'Bara Imambara',
            image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
            shortDescription: 'Historical monument known for its unique architecture.',
            description: 'Bara Imambara is an imambara complex in Lucknow built by Asaf-ud-Daula.',
            visitingHours: '6:00 AM - 5:00 PM',
            entryFee: { indian: '₹25', foreign: '₹300' },
            bestTime: 'October to March',
            additionalInfo: 'Famous for its Bhulbhulaiya (labyrinth)'
          }
        ]
      },
      {
        id: 'varanasi',
        name: 'Varanasi',
        places: [
          {
            id: 'dashashwamedh-ghat',
            name: 'Dashashwamedh Ghat',
            image: 'https://images.unsplash.com/photo-1561361513-2d000a50f2ef',
            shortDescription: 'Main ghat in Varanasi, famous for its evening Ganga Aarti.',
            description: 'Dashashwamedh Ghat is the main ghat in Varanasi on the Ganges River.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Evening Ganga Aarti is a must-watch ceremony'
          },
          {
            id: 'kashi-vishwanath',
            name: 'Kashi Vishwanath Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'One of the most famous Hindu temples.',
            description: 'Ancient temple dedicated to Lord Shiva, one of the twelve Jyotirlingas.',
            visitingHours: '3:00 AM - 11:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Security check required'
          },
          {
            id: 'sarnath',
            name: 'Sarnath',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Buddhist pilgrimage site.',
            description: 'Site where Buddha gave his first sermon after enlightenment.',
            visitingHours: 'Sunrise to Sunset',
            entryFee: { indian: '₹15', foreign: '₹200' },
            bestTime: 'October to March',
            additionalInfo: 'Archaeological museum on site'
          }
        ]
      },
      {
        id: 'allahabad',
        name: 'Allahabad',
        places: [
          {
            id: 'triveni-sangam',
            name: 'Triveni Sangam',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Holy confluence of three rivers.',
            description: 'Sacred confluence of the Ganges, Yamuna and mythical Saraswati rivers.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Boat rides available'
          },
          {
            id: 'anand-bhavan',
            name: 'Anand Bhavan',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Historic house museum of the Nehru family.',
            description: 'Former residence of the Nehru family, now converted into a museum.',
            visitingHours: '9:30 AM - 5:00 PM',
            entryFee: { indian: '₹40', foreign: '₹200' },
            bestTime: 'October to March',
            additionalInfo: 'Closed on Mondays'
          },
          {
            id: 'allahabad-fort',
            name: 'Allahabad Fort',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Massive fort built by Emperor Akbar.',
            description: 'Historic fort at the confluence of rivers Ganges and Yamuna.',
            visitingHours: '10:00 AM - 5:00 PM',
            entryFee: { indian: '₹35', foreign: '₹500' },
            bestTime: 'October to March',
            additionalInfo: 'Under Army control, limited access'
          }
        ]
      },
      {
        id: 'mathura',
        name: 'Mathura',
        places: [
          {
            id: 'krishna-janmabhoomi',
            name: 'Krishna Janmabhoomi Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Birthplace of Lord Krishna.',
            description: 'Ancient temple marking the birthplace of Lord Krishna.',
            visitingHours: '5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Photography not allowed inside temple'
          },
          {
            id: 'dwarkadhish-temple',
            name: 'Dwarkadhish Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Famous temple dedicated to Lord Krishna.',
            description: 'Ornate temple known for its architecture and religious significance.',
            visitingHours: '5:30 AM - 12:00 PM, 4:00 PM - 9:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Famous for Janmashtami celebrations'
          },
          {
            id: 'vishram-ghat',
            name: 'Vishram Ghat',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Sacred bathing ghat on Yamuna River.',
            description: 'Main ghat where Lord Krishna is said to have rested after killing Kansa.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Evening aarti is famous'
          }
        ]
      }
    ]
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    cities: [
      {
        id: 'haridwar',
        name: 'Haridwar',
        places: [
          {
            id: 'har-ki-pauri',
            name: 'Har Ki Pauri',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Sacred ghat on the banks of the Ganges.',
            description: 'Famous ghat where the evening aarti is performed.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Evening aarti is a must-watch'
          }
        ]
      },
      {
        id: 'dehradun',
        name: 'Dehradun',
        places: [
          {
            id: 'robbers-cave',
            name: 'Robbers Cave',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'A unique natural cave formation with a disappearing river.',
            description: 'Also known as Guchhupani, this 600-meter-long cave is a popular tourist spot.',
            visitingHours: '7:00 AM - 6:00 PM',
            entryFee: { indian: '₹25', foreign: '₹50' },
            bestTime: 'March to June',
            additionalInfo: 'Wear comfortable shoes as the cave floor can be slippery'
          },
          {
            id: 'mindrolling-monastery',
            name: 'Mindrolling Monastery',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Largest Buddhist center in India.',
            description: 'Famous for its 220-foot-high Great Stupa of enlightenment.',
            visitingHours: '9:00 AM - 7:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Photography allowed'
          },
          {
            id: 'tapkeshwar-temple',
            name: 'Tapkeshwar Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Ancient cave temple dedicated to Lord Shiva.',
            description: 'Natural cave temple with water droplets falling on the Shivling.',
            visitingHours: '6:00 AM - 8:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'March to October',
            additionalInfo: 'Sacred water drops fall on Shivling'
          }
        ]
      },
      {
        id: 'mussoorie',
        name: 'Mussoorie',
        places: [
          {
            id: 'kempty-falls',
            name: 'Kempty Falls',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Magnificent waterfall surrounded by mountain views.',
            description: 'One of the biggest waterfalls in Uttarakhand, cascading from a height of 40 feet.',
            visitingHours: '8:00 AM - 5:00 PM',
            entryFee: { indian: '₹15', foreign: '₹50' },
            bestTime: 'March to June',
            additionalInfo: 'Swimming facilities available'
          },
          {
            id: 'mall-road-mussoorie',
            name: 'Mall Road',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Heart of Mussoorie with shops and eateries.',
            description: 'The main shopping street of Mussoorie with various shops, cafes, and restaurants.',
            visitingHours: '9:00 AM - 10:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'March to June',
            additionalInfo: 'Great for evening walks and shopping'
          },
          {
            id: 'gun-hill',
            name: 'Gun Hill',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Second highest point in Mussoorie.',
            description: 'Accessible by cable car, offering panoramic views of the Himalayas.',
            visitingHours: '10:00 AM - 7:00 PM',
            entryFee: { indian: 'Cable car charges apply', foreign: 'Cable car charges apply' },
            bestTime: 'March to June',
            additionalInfo: 'Ropeway ride available'
          }
        ]
      },
      {
        id: 'nainital',
        name: 'Nainital',
        places: [
          {
            id: 'naini-lake',
            name: 'Naini Lake',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Heart-shaped lake surrounded by mountains.',
            description: 'The centerpiece of Nainital, offering boating and beautiful views.',
            visitingHours: '6:00 AM - 6:00 PM',
            entryFee: { indian: 'Boating charges apply', foreign: 'Boating charges apply' },
            bestTime: 'March to June',
            additionalInfo: 'Boat rides available'
          },
          {
            id: 'snow-view-point',
            name: 'Snow View Point',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Panoramic view point of the Himalayas.',
            description: 'Offers stunning views of snow-capped Himalayan peaks.',
            visitingHours: '10:00 AM - 5:00 PM',
            entryFee: { indian: 'Ropeway charges apply', foreign: 'Ropeway charges apply' },
            bestTime: 'March to June',
            additionalInfo: 'Accessible by ropeway'
          },
          {
            id: 'mall-road-nainital',
            name: 'Mall Road',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Main shopping street of Nainital.',
            description: 'Bustling street with shops, restaurants, and hotels.',
            visitingHours: '9:00 AM - 10:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'March to June',
            additionalInfo: 'Great for shopping and dining'
          }
        ]
      },
      {
        id: 'badrinath',
        name: 'Badrinath',
        places: [
          {
            id: 'badrinath-temple',
            name: 'Badrinath Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Ancient temple dedicated to Lord Vishnu.',
            description: 'One of the Char Dhams, this sacred temple is located in the Garhwal hills.',
            visitingHours: '4:30 AM - 9:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'May to June, September to October',
            additionalInfo: 'Temple closes during winter months'
          }
        ]
      },
      {
        id: 'kedarnath',
        name: 'Kedarnath',
        places: [
          {
            id: 'kedarnath-temple',
            name: 'Kedarnath Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Ancient Shiva temple in the Himalayas.',
            description: 'One of the holiest Hindu temples dedicated to Lord Shiva.',
            visitingHours: '4:00 AM - 9:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'May to June, September to October',
            additionalInfo: 'Trek required to reach temple'
          }
        ]
      }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    cities: [
      {
        id: 'jaipur',
        name: 'Jaipur',
        places: [
          {
            id: 'hawa-mahal',
            name: 'Hawa Mahal',
            image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
            shortDescription: 'Palace of Winds, iconic landmark of Jaipur.',
            description: 'The Hawa Mahal is a palace in Jaipur, built so the women of the royal household could observe street festivals.',
            visitingHours: '9:00 AM - 5:00 PM',
            entryFee: { indian: '₹50', foreign: '₹200' },
            bestTime: 'October to March',
            additionalInfo: 'Best time for photography is early morning'
          },
          {
            id: 'amber-fort',
            name: 'Amber Fort',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Magnificent fort overlooking Maota Lake.',
            description: 'UNESCO World Heritage site known for its artistic Hindu style elements.',
            visitingHours: '8:00 AM - 5:30 PM',
            entryFee: { indian: '₹200', foreign: '₹500' },
            bestTime: 'October to March',
            additionalInfo: 'Elephant rides available in the morning'
          },
          {
            id: 'city-palace-jaipur',
            name: 'City Palace',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Royal residence and museum in the heart of Jaipur.',
            description: 'Complex of courtyards, gardens, and buildings blending Rajasthani and Mughal architecture.',
            visitingHours: '9:30 AM - 5:00 PM',
            entryFee: { indian: '₹200', foreign: '₹700' },
            bestTime: 'October to March',
            additionalInfo: 'Royal family still resides in part of the palace'
          },
          {
            id: 'jantar-mantar',
            name: 'Jantar Mantar',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'UNESCO World Heritage astronomical observation site.',
            description: 'Collection of nineteen architectural astronomical instruments built by Sawai Jai Singh II.',
            visitingHours: '9:00 AM - 4:30 PM',
            entryFee: { indian: '₹50', foreign: '₹200' },
            bestTime: 'October to March',
            additionalInfo: 'Guide recommended to understand the instruments'
          }
        ]
      },
      {
        id: 'udaipur',
        name: 'Udaipur',
        places: [
          {
            id: 'city-palace',
            name: 'City Palace',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Magnificent palace complex on Lake Pichola.',
            description: 'The largest palace complex in Rajasthan, featuring stunning architecture and museums.',
            visitingHours: '9:30 AM - 5:30 PM',
            entryFee: { indian: '₹300', foreign: '₹700' },
            bestTime: 'October to March',
            additionalInfo: 'Boat rides available on Lake Pichola'
          },
          {
            id: 'lake-pichola',
            name: 'Lake Pichola',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Artificial fresh water lake with palace views.',
            description: 'Created in 1362 AD, this lake is surrounded by palaces, temples, and bathing ghats.',
            visitingHours: 'Boat rides: 10:00 AM - 6:00 PM',
            entryFee: { indian: 'Boat ride charges apply', foreign: 'Boat ride charges apply' },
            bestTime: 'October to March',
            additionalInfo: 'Sunset boat rides are popular'
          },
          {
            id: 'jagdish-temple',
            name: 'Jagdish Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Indo-Aryan style temple dedicated to Lord Vishnu.',
            description: 'Built in 1651, the temple is a prime example of Maru-Gurjar architecture.',
            visitingHours: '4:30 AM - 10:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Located near City Palace'
          },
          {
            id: 'saheliyon-ki-bari',
            name: 'Saheliyon Ki Bari',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Garden of the Maidens.',
            description: 'Beautiful garden with fountains, kiosks, marble elephants, and lotus pool.',
            visitingHours: '9:00 AM - 7:00 PM',
            entryFee: { indian: '₹35', foreign: '₹250' },
            bestTime: 'October to March',
            additionalInfo: 'Beautiful fountains and pavilions'
          }
        ]
      }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    cities: [
      {
        id: 'ahmedabad',
        name: 'Ahmedabad',
        places: [
          {
            id: 'sabarmati-ashram',
            name: 'Sabarmati Ashram',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Home of Mahatma Gandhi from 1917 to 1930.',
            description: 'Historic ashram that served as one of the main centres of the Indian freedom struggle.',
            visitingHours: '8:30 AM - 6:30 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Museum and gallery on site'
          },
          {
            id: 'adalaj-stepwell',
            name: 'Adalaj Stepwell',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Five-story stepwell with intricate carvings.',
            description: 'Historic stepwell built in 1498 with beautiful Indo-Islamic architecture.',
            visitingHours: '6:00 AM - 6:00 PM',
            entryFee: { indian: '₹20', foreign: '₹200' },
            bestTime: 'October to March',
            additionalInfo: 'Photography allowed'
          }
        ]
      },
      {
        id: 'dwarka',
        name: 'Dwarka',
        places: [
          {
            id: 'dwarkadhish-temple-dwarka',
            name: 'Dwarkadhish Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Ancient temple dedicated to Lord Krishna.',
            description: 'One of the four main pilgrimages (Char Dham) of Hindu faith.',
            visitingHours: '6:00 AM - 1:00 PM, 5:00 PM - 9:30 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Dress code applies'
          },
          {
            id: 'beyt-dwarka',
            name: 'Beyt Dwarka',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Island with ancient Krishna temple.',
            description: 'Island temple accessible by boat, believed to be Krishna\'s residence.',
            visitingHours: '6:00 AM - 9:00 PM',
            entryFee: { indian: 'Ferry charges apply', foreign: 'Ferry charges apply' },
            bestTime: 'October to March',
            additionalInfo: 'Ferry service available'
          }
        ]
      },
      {
        id: 'gir',
        name: 'Gir National Park',
        places: [
          {
            id: 'gir-national-park',
            name: 'Gir Forest',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Only home of Asiatic Lions.',
            description: 'Last remaining natural habitat of Asiatic Lions in the world.',
            visitingHours: '6:00 AM - 5:00 PM',
            entryFee: { indian: '₹800', foreign: '₹2000' },
            bestTime: 'December to March',
            additionalInfo: 'Safari booking required'
          },
          {
            id: 'devaliya-park',
            name: 'Devaliya Safari Park',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Interpretation zone of Gir.',
            description: 'Enclosed area offering guaranteed lion sightings.',
            visitingHours: '8:00 AM - 4:00 PM',
            entryFee: { indian: '₹300', foreign: '₹800' },
            bestTime: 'October to June',
            additionalInfo: 'Guided bus tour available'
          }
        ]
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    cities: [
      {
        id: 'munnar',
        name: 'Munnar',
        places: [
          {
            id: 'tea-gardens',
            name: 'Tea Gardens',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Vast expanses of tea plantations.',
            description: 'Rolling hills covered with tea plantations and cool mountain air.',
            visitingHours: 'Daylight hours',
            entryFee: { indian: 'Varies', foreign: 'Varies' },
            bestTime: 'September to March',
            additionalInfo: 'Tea factory tours available'
          }
        ]
      }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    cities: [
      {
        id: 'north-goa',
        name: 'North Goa',
        places: [
          {
            id: 'calangute-beach',
            name: 'Calangute Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Queen of Beaches in Goa.',
            description: 'One of the largest and most popular beaches in North Goa.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Water sports available'
          },
          {
            id: 'baga-beach',
            name: 'Baga Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Famous for nightlife and water sports.',
            description: 'Popular beach known for its vibrant nightlife and water activities.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Famous for parasailing and jet skiing'
          },
          {
            id: 'aguada-fort',
            name: 'Fort Aguada',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: '17th-century Portuguese fort and lighthouse.',
            description: 'Well-preserved Portuguese fort offering panoramic views of the Arabian Sea.',
            visitingHours: '9:30 AM - 6:00 PM',
            entryFee: { indian: '₹50', foreign: '₹200' },
            bestTime: 'November to March',
            additionalInfo: 'Lighthouse visits available'
          },
          {
            id: 'anjuna-beach',
            name: 'Anjuna Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Famous for its Wednesday flea market.',
            description: 'Rocky beach known for its hippie culture and famous flea market.',
            visitingHours: 'Open 24 hours, Flea Market: Wednesdays',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Famous for trance parties'
          },
          {
            id: 'chapora-fort',
            name: 'Chapora Fort',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Ancient fort with panoramic views.',
            description: 'Red-laterite bastion that offers stunning views of the surrounding beaches.',
            visitingHours: '9:30 AM - 5:30 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'November to March',
            additionalInfo: 'Famous for sunset views'
          }
        ]
      },
      {
        id: 'south-goa',
        name: 'South Goa',
        places: [
          {
            id: 'palolem-beach',
            name: 'Palolem Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Pristine crescent beach with calm waters.',
            description: 'One of the most beautiful beaches in South Goa, perfect for swimming.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Famous for dolphin watching'
          },
          {
            id: 'colva-beach',
            name: 'Colva Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Longest beach in South Goa.',
            description: 'Beautiful white sand beach stretching for about 2.4 kilometers.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Popular for evening walks'
          },
          {
            id: 'cabo-de-rama-fort',
            name: 'Cabo de Rama Fort',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Ancient fort with stunning sea views.',
            description: 'Historic fort offering panoramic views of the Arabian Sea and surrounding areas.',
            visitingHours: '9:00 AM - 5:30 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'November to March',
            additionalInfo: 'Contains an old church within the fort'
          },
          {
            id: 'benaulim-beach',
            name: 'Benaulim Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Peaceful beach known for fishing activities.',
            description: 'Quiet beach famous for its fishing activities and water sports.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Great for watching sunset'
          },
          {
            id: 'agonda-beach',
            name: 'Agonda Beach',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Secluded beach perfect for relaxation.',
            description: 'Less crowded beach known for its pristine beauty and tranquility.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Turtle nesting site'
          }
        ]
      }
    ]
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    cities: [
      {
        id: 'shimla',
        name: 'Shimla',
        places: [
          {
            id: 'mall-road',
            name: 'Mall Road',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Heart of Shimla, famous for shopping and architecture.',
            description: 'Historic street with colonial architecture and modern shops.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'March to June',
            additionalInfo: 'Vehicle-free zone'
          },
          {
            id: 'ridge',
            name: 'The Ridge',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Large open space in the heart of Shimla.',
            description: 'Center of Shimla\'s cultural activities with panoramic views.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'March to June',
            additionalInfo: 'Christ Church is located here'
          }
        ]
      },
      {
        id: 'manali',
        name: 'Manali',
        places: [
          {
            id: 'hadimba-temple',
            name: 'Hadimba Temple',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Ancient cave temple in cedar forest.',
            description: 'Pagoda-style temple dedicated to Goddess Hadimba.',
            visitingHours: '8:00 AM - 6:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'March to June',
            additionalInfo: 'Beautiful architecture in cedar woods'
          },
          {
            id: 'solang-valley',
            name: 'Solang Valley',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Adventure sports paradise.',
            description: 'Famous for skiing in winter and paragliding in summer.',
            visitingHours: '9:00 AM - 5:00 PM',
            entryFee: { indian: 'Activity charges apply', foreign: 'Activity charges apply' },
            bestTime: 'December to February for skiing',
            additionalInfo: 'Various adventure activities available'
          },
          {
            id: 'rohtang-pass',
            name: 'Rohtang Pass',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'High mountain pass with snow views.',
            description: 'Popular tourist spot known for snow and scenic beauty.',
            visitingHours: '8:00 AM - 4:00 PM',
            entryFee: { indian: 'Permit required', foreign: 'Permit required' },
            bestTime: 'May to October',
            additionalInfo: 'Permit needed for visit'
          }
        ]
      },
      {
        id: 'dharamshala',
        name: 'Dharamshala',
        places: [
          {
            id: 'mcleodganj',
            name: 'McLeodganj',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Little Lhasa of India.',
            description: 'Home to Dalai Lama and Tibetan community.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'March to June',
            additionalInfo: 'Tibetan culture and monasteries'
          },
          {
            id: 'tsuglagkhang-complex',
            name: 'Tsuglagkhang Complex',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Main Buddhist temple complex.',
            description: 'Residence of Dalai Lama and important Buddhist site.',
            visitingHours: '5:00 AM - 8:00 PM',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'March to June',
            additionalInfo: 'Photography restricted in some areas'
          },
          {
            id: 'dharamshala-cricket-stadium',
            name: 'HPCA Cricket Stadium',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Most scenic cricket stadium.',
            description: 'International cricket stadium with Dhauladhar range backdrop.',
            visitingHours: '10:00 AM - 5:00 PM',
            entryFee: { indian: '₹50', foreign: '₹200' },
            bestTime: 'March to June',
            additionalInfo: 'Stadium tours available'
          }
        ]
      }
    ]
  },
  {
    id: 'delhi',
    name: 'Delhi',
    cities: [
      {
        id: 'new-delhi',
        name: 'New Delhi',
        places: [
          {
            id: 'india-gate',
            name: 'India Gate',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'War memorial in the heart of Delhi.',
            description: 'Historic war memorial dedicated to soldiers who died in World War I.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Beautiful lighting at night'
          },
          {
            id: 'red-fort',
            name: 'Red Fort',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Historic fort complex built in red sandstone.',
            description: 'UNESCO World Heritage site and symbol of Indian independence.',
            visitingHours: '9:30 AM - 4:30 PM (Closed on Mondays)',
            entryFee: { indian: '₹35', foreign: '₹500' },
            bestTime: 'October to March',
            additionalInfo: 'Light and sound show in evenings'
          }
        ]
      }
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    cities: [
      {
        id: 'mumbai',
        name: 'Mumbai',
        places: [
          {
            id: 'gateway-of-india',
            name: 'Gateway of India',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Historic arch monument and iconic landmark.',
            description: 'Built in 20th century to commemorate the landing of King George V and Queen Mary.',
            visitingHours: 'Open 24 hours',
            entryFee: { indian: 'Free', foreign: 'Free' },
            bestTime: 'October to March',
            additionalInfo: 'Boat rides available to Elephanta Caves'
          }
        ]
      }
    ]
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    cities: [
      {
        id: 'kolkata',
        name: 'Kolkata',
        places: [
          {
            id: 'victoria-memorial',
            name: 'Victoria Memorial',
            image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
            shortDescription: 'Magnificent marble building and museum.',
            description: 'Large marble building built between 1906 and 1921 dedicated to Queen Victoria.',
            visitingHours: '10:00 AM - 5:00 PM (Closed on Mondays)',
            entryFee: { indian: '₹30', foreign: '₹500' },
            bestTime: 'October to March',
            additionalInfo: 'Beautiful gardens surrounding the memorial'
          }
        ]
      }
    ]
  }
];
