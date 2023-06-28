// import data from './assets/floodProneAreas.json';
const data = [
    {
      "X": 77.5324350003062,
      "Y": 12.867499,
      "OBJECTID": 1,
      "WARD_NAME": "Hemmigepura",
      "WARDNO": 198,
      "LocationName": "Mantri Lake view Appartment Next to Talagattapura Lake",
      "KGISFVLID": 1,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5280829995545,
      "Y": 12.8717750001904,
      "OBJECTID": 2,
      "WARD_NAME": "Hemmigepura",
      "WARDNO": 198,
      "LocationName": "Kendriya nagara",
      "KGISFVLID": 2,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5426940003978,
      "Y": 12.8777110000686,
      "OBJECTID": 3,
      "WARD_NAME": "Hemmigepura",
      "WARDNO": 198,
      "LocationName": "Raghuvanahalli",
      "KGISFVLID": 3,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5412729999903,
      "Y": 12.877864999889,
      "OBJECTID": 4,
      "WARD_NAME": "Hemmigepura",
      "WARDNO": 198,
      "LocationName": "Balaji Layout, Kanakapura Road",
      "KGISFVLID": 4,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.6374179998471,
      "Y": 12.8789069996308,
      "OBJECTID": 5,
      "WARD_NAME": "Begur",
      "WARDNO": 192,
      "LocationName": "Singasandra Country club road",
      "KGISFVLID": 5,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6040510003254,
      "Y": 12.8799690003176,
      "OBJECTID": 6,
      "WARD_NAME": "Arakere",
      "WARDNO": 193,
      "LocationName": "Someshwara layout Arekere",
      "KGISFVLID": 6,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6039869998664,
      "Y": 12.8805180001676,
      "OBJECTID": 7,
      "WARD_NAME": "Arakere",
      "WARDNO": 193,
      "LocationName": "BDA layout Hulimavu",
      "KGISFVLID": 7,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6044149998363,
      "Y": 12.8805860001823,
      "OBJECTID": 8,
      "WARD_NAME": "Arakere",
      "WARDNO": 193,
      "LocationName": "Kempamma layout RSD Arekere",
      "KGISFVLID": 8,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.608253000444,
      "Y": 12.8817559999585,
      "OBJECTID": 9,
      "WARD_NAME": "Arakere",
      "WARDNO": 193,
      "LocationName": "Hulimavu Sri Lanka colony",
      "KGISFVLID": 9,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6420749998582,
      "Y": 12.8859370001465,
      "OBJECTID": 10,
      "WARD_NAME": "Singasandra",
      "WARDNO": 191,
      "LocationName": "Hosur road near Royal Enfield show room",
      "KGISFVLID": 10,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.611508000245,
      "Y": 12.8965700001818,
      "OBJECTID": 11,
      "WARD_NAME": "Bilekhalli",
      "WARDNO": 188,
      "LocationName": "Anugraha layout Billekahalli",
      "KGISFVLID": 11,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6929070003515,
      "Y": 12.8978170003302,
      "OBJECTID": 12,
      "WARD_NAME": "Bellandur",
      "WARDNO": 150,
      "LocationName": "Doddakannelli",
      "KGISFVLID": 12,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6331209998401,
      "Y": 12.9009220002675,
      "OBJECTID": 13,
      "WARD_NAME": "Hongasandra",
      "WARDNO": 189,
      "LocationName": "Garebhavipalya NH  service road junction",
      "KGISFVLID": 13,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6314429996222,
      "Y": 12.9013600001532,
      "OBJECTID": 14,
      "WARD_NAME": "Hongasandra",
      "WARDNO": 189,
      "LocationName": "Oxford college NH Junction",
      "KGISFVLID": 14,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6112620004318,
      "Y": 12.9018859997625,
      "OBJECTID": 15,
      "WARD_NAME": "Bilekhalli",
      "WARDNO": 188,
      "LocationName": "Anugraha layout RSD phase 1",
      "KGISFVLID": 15,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.5988530001048,
      "Y": 12.9033309997057,
      "OBJECTID": 16,
      "WARD_NAME": "JP Nagar",
      "WARDNO": 177,
      "LocationName": "Dollars Colony JP Nagar",
      "KGISFVLID": 16,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6028070002702,
      "Y": 12.9044550001162,
      "OBJECTID": 17,
      "WARD_NAME": "Bilekhalli",
      "WARDNO": 188,
      "LocationName": "Dollars Colony NS palya (BTM 2nd stage)",
      "KGISFVLID": 17,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6267580001024,
      "Y": 12.9047820003245,
      "OBJECTID": 18,
      "WARD_NAME": "Bommanahalli",
      "WARDNO": 175,
      "LocationName": "Hongasandara Ambedkar Nagar",
      "KGISFVLID": 18,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6030360002863,
      "Y": 12.9049030001327,
      "OBJECTID": 19,
      "WARD_NAME": "Bilekhalli",
      "WARDNO": 188,
      "LocationName": "NS palya RSD",
      "KGISFVLID": 19,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6449330003609,
      "Y": 12.909073000038,
      "OBJECTID": 20,
      "WARD_NAME": "HSR Layout",
      "WARDNO": 174,
      "LocationName": "HSR sector 2 Garden layout",
      "KGISFVLID": 20,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6415849997452,
      "Y": 12.9093590002885,
      "OBJECTID": 21,
      "WARD_NAME": "HSR Layout",
      "WARDNO": 174,
      "LocationName": "HSR 3rd sector lead off drains",
      "KGISFVLID": 21,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.5127089997889,
      "Y": 12.9110659996409,
      "OBJECTID": 22,
      "WARD_NAME": "Hemmigepura",
      "WARDNO": 198,
      "LocationName": "BEML layout",
      "KGISFVLID": 22,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.6324019996395,
      "Y": 12.911655,
      "OBJECTID": 23,
      "WARD_NAME": "HSR Layout",
      "WARDNO": 174,
      "LocationName": "Sector 6 lead off drains surrounding 5th and 9th main",
      "KGISFVLID": 23,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.6324019996395,
      "Y": 12.911655,
      "OBJECTID": 24,
      "WARD_NAME": "HSR Layout",
      "WARDNO": 174,
      "LocationName": "HSR layout 9th and 5th main",
      "KGISFVLID": 24,
      "ZONE": "Bommanahalli"
    },
    {
      "X": 77.574917000122,
      "Y": 12.9140560001083,
      "OBJECTID": 25,
      "WARD_NAME": "Shakambari Nagar",
      "WARDNO": 179,
      "LocationName": "Navodaya Layout",
      "KGISFVLID": 25,
      "ZONE": "South"
    },
    {
      "X": 77.6167499995868,
      "Y": 12.9157499999453,
      "OBJECTID": 26,
      "WARD_NAME": "BTM Layout",
      "WARDNO": 176,
      "LocationName": "BTM layout",
      "KGISFVLID": 26,
      "ZONE": "South"
    },
    {
      "X": 77.5205070003507,
      "Y": 12.9157930001939,
      "OBJECTID": 27,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "Near Kapi Katte hotel, BEML Layout, 3rd Stage",
      "KGISFVLID": 27,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5225559997874,
      "Y": 12.9164060001552,
      "OBJECTID": 28,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "Shankarappa Layout to BEML gate",
      "KGISFVLID": 28,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5208829999744,
      "Y": 12.9164329997018,
      "OBJECTID": 29,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "RR nagar BEML 5th stage near Kapi katte hotel",
      "KGISFVLID": 29,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.599888999588,
      "Y": 12.9164720003761,
      "OBJECTID": 30,
      "WARD_NAME": "JP Nagar",
      "WARDNO": 177,
      "LocationName": "Hosur road Jayadeva flyover to Udupi Garden Signal",
      "KGISFVLID": 30,
      "ZONE": "South"
    },
    {
      "X": 77.6227219995918,
      "Y": 12.9171940003384,
      "OBJECTID": 31,
      "WARD_NAME": "Bommanahalli",
      "WARDNO": 175,
      "LocationName": "Silk Board junction",
      "KGISFVLID": 31,
      "ZONE": "South"
    },
    {
      "X": 77.5019910002475,
      "Y": 12.918066999854,
      "OBJECTID": 32,
      "WARD_NAME": "Hemmigepura",
      "WARDNO": 198,
      "LocationName": "Global Village Joining V Valley at Global Village Property",
      "KGISFVLID": 32,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.6218890001268,
      "Y": 12.9186389995745,
      "OBJECTID": 33,
      "WARD_NAME": "Jakkasandra",
      "WARDNO": 173,
      "LocationName": "Silk Board",
      "KGISFVLID": 33,
      "ZONE": "South"
    },
    {
      "X": 77.7324980001139,
      "Y": 12.9210900003641,
      "OBJECTID": 34,
      "WARD_NAME": "Varthuru",
      "WARDNO": 149,
      "LocationName": "Gunjur",
      "KGISFVLID": 34,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5999439997024,
      "Y": 12.9216939998662,
      "OBJECTID": 35,
      "WARD_NAME": "Jayanagar East",
      "WARDNO": 170,
      "LocationName": "Bannerghatta road near Oakyard Apartment",
      "KGISFVLID": 35,
      "ZONE": "South"
    },
    {
      "X": 77.5114800003827,
      "Y": 12.9222039999469,
      "OBJECTID": 36,
      "WARD_NAME": "Hemmigepura",
      "WARDNO": 198,
      "LocationName": "Heorhalli, Mahadeshwara Nagara",
      "KGISFVLID": 36,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5185219998343,
      "Y": 12.9228170001818,
      "OBJECTID": 37,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "Basaveshwara Circle BEML 3rd stage",
      "KGISFVLID": 37,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.6004439997076,
      "Y": 12.9230000002928,
      "OBJECTID": 38,
      "WARD_NAME": "Gurappanapalya",
      "WARDNO": 171,
      "LocationName": "Gurappanapalya Banneragatta main road",
      "KGISFVLID": 38,
      "ZONE": "South"
    },
    {
      "X": 77.5389369996774,
      "Y": 12.9232390000653,
      "OBJECTID": 39,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "Gurudutta Layout to Sapthagiri Layout",
      "KGISFVLID": 39,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5050029996364,
      "Y": 12.9234149999601,
      "OBJECTID": 40,
      "WARD_NAME": "Hemmigepura",
      "WARDNO": 198,
      "LocationName": "Pattanagere main road beside RV college",
      "KGISFVLID": 40,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5391330000573,
      "Y": 12.9246960001373,
      "OBJECTID": 41,
      "WARD_NAME": "Hosakerehalli",
      "WARDNO": 161,
      "LocationName": "Near Dattarthraya Temple, Hosakerehalli",
      "KGISFVLID": 41,
      "ZONE": "South"
    },
    {
      "X": 77.5215560001489,
      "Y": 12.9248170004001,
      "OBJECTID": 42,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "Halagevadeyarahalli lake to Kenchenahalli  lake",
      "KGISFVLID": 42,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.6090279999762,
      "Y": 12.9249439996397,
      "OBJECTID": 43,
      "WARD_NAME": "Madivala",
      "WARDNO": 172,
      "LocationName": "Tavarekere Main road",
      "KGISFVLID": 43,
      "ZONE": "South"
    },
    {
      "X": 77.6781159995721,
      "Y": 12.926463999968,
      "OBJECTID": 44,
      "WARD_NAME": "Bellandur",
      "WARDNO": 150,
      "LocationName": "Bellandur",
      "KGISFVLID": 44,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5203309995722,
      "Y": 12.9285690002317,
      "OBJECTID": 45,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "Jawaregowdana Doddi, Bangarappa Nagara",
      "KGISFVLID": 45,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.7179079998361,
      "Y": 12.9287960003197,
      "OBJECTID": 46,
      "WARD_NAME": "Varthuru",
      "WARDNO": 149,
      "LocationName": "Sarjapura road",
      "KGISFVLID": 46,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6010279998388,
      "Y": 12.9302500000676,
      "OBJECTID": 47,
      "WARD_NAME": "Suddgunte Palya",
      "WARDNO": 152,
      "LocationName": "Bannerghatta Road near spar super market",
      "KGISFVLID": 47,
      "ZONE": "South"
    },
    {
      "X": 77.5129919999065,
      "Y": 12.9315919998495,
      "OBJECTID": 48,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "Near DIAT college",
      "KGISFVLID": 48,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5939170002161,
      "Y": 12.9319170000067,
      "OBJECTID": 49,
      "WARD_NAME": "Jayanagar",
      "WARDNO": 153,
      "LocationName": "Gulbarga Calony RBI extension",
      "KGISFVLID": 49,
      "ZONE": "South"
    },
    {
      "X": 77.5353230002493,
      "Y": 12.9320229995686,
      "OBJECTID": 50,
      "WARD_NAME": "Hosakerehalli",
      "WARDNO": 161,
      "LocationName": "Hosakerehalli, near D'souza Nagara",
      "KGISFVLID": 50,
      "ZONE": "South"
    },
    {
      "X": 77.5168580003841,
      "Y": 12.9327910000653,
      "OBJECTID": 51,
      "WARD_NAME": "Rajarajeshwari Nagar",
      "WARDNO": 160,
      "LocationName": "Ideal Homes beside Akkamahadevi choultry",
      "KGISFVLID": 51,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5889720000425,
      "Y": 12.9329440004321,
      "OBJECTID": 52,
      "WARD_NAME": "Byrasandra",
      "WARDNO": 169,
      "LocationName": "Byrasandara Fire station",
      "KGISFVLID": 52,
      "ZONE": "South"
    },
    {
      "X": 77.6303889996797,
      "Y": 12.9338059995997,
      "OBJECTID": 53,
      "WARD_NAME": "Ejipura",
      "WARDNO": 148,
      "LocationName": "Koramangala 4 th block",
      "KGISFVLID": 53,
      "ZONE": "South"
    },
    {
      "X": 77.6301390003163,
      "Y": 12.9347220002171,
      "OBJECTID": 54,
      "WARD_NAME": "Ejipura",
      "WARDNO": 148,
      "LocationName": "ST Bed Koramangala",
      "KGISFVLID": 54,
      "ZONE": "South"
    },
    {
      "X": 77.7050130001721,
      "Y": 12.9363549996158,
      "OBJECTID": 55,
      "WARD_NAME": "Varthuru",
      "WARDNO": 149,
      "LocationName": "Panathur",
      "KGISFVLID": 55,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6264169996428,
      "Y": 12.9368889998067,
      "OBJECTID": 56,
      "WARD_NAME": "Koramangala",
      "WARDNO": 151,
      "LocationName": "Sony Signal to Maharaja signal in Koramangala",
      "KGISFVLID": 56,
      "ZONE": "South"
    },
    {
      "X": 77.7468440000649,
      "Y": 12.9380780003797,
      "OBJECTID": 57,
      "WARD_NAME": "Varthuru",
      "WARDNO": 149,
      "LocationName": "Varthur police station",
      "KGISFVLID": 57,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6287500002291,
      "Y": 12.9386389997591,
      "OBJECTID": 58,
      "WARD_NAME": "Ejipura",
      "WARDNO": 148,
      "LocationName": "Ejipura Ashwini layout",
      "KGISFVLID": 58,
      "ZONE": "South"
    },
    {
      "X": 77.7231780003678,
      "Y": 12.9389319999565,
      "OBJECTID": 59,
      "WARD_NAME": "Varthuru",
      "WARDNO": 149,
      "LocationName": "Balagere",
      "KGISFVLID": 59,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.4829419999122,
      "Y": 12.9420450004498,
      "OBJECTID": 60,
      "WARD_NAME": "Ullalu",
      "WARDNO": 130,
      "LocationName": "Sonnenahalli Bridge Upstream  Gollarahatti",
      "KGISFVLID": 60,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5814719998392,
      "Y": 12.943583,
      "OBJECTID": 61,
      "WARD_NAME": "Jayanagar",
      "WARDNO": 153,
      "LocationName": "RV Teachers College",
      "KGISFVLID": 61,
      "ZONE": "South"
    },
    {
      "X": 77.525586000155,
      "Y": 12.944652999721,
      "OBJECTID": 62,
      "WARD_NAME": "Nayandahalli",
      "WARDNO": 131,
      "LocationName": "Nayandahalli and near Railway track",
      "KGISFVLID": 62,
      "ZONE": "West"
    },
    {
      "X": 77.5350700000603,
      "Y": 12.9453019997598,
      "OBJECTID": 63,
      "WARD_NAME": "Deepanjali Nagar",
      "WARDNO": 158,
      "LocationName": "Ranganatha Colony",
      "KGISFVLID": 63,
      "ZONE": "South"
    },
    {
      "X": 77.5289369997109,
      "Y": 12.9454799999144,
      "OBJECTID": 64,
      "WARD_NAME": "Deepanjali Nagar",
      "WARDNO": 158,
      "LocationName": "Nayandahalli Junction, Mysore road",
      "KGISFVLID": 64,
      "ZONE": "South"
    },
    {
      "X": 77.5896389996749,
      "Y": 12.9463060000123,
      "OBJECTID": 65,
      "WARD_NAME": "Siddapura",
      "WARDNO": 144,
      "LocationName": "Siddpapura gate",
      "KGISFVLID": 65,
      "ZONE": "South"
    },
    {
      "X": 77.5633780004369,
      "Y": 12.9472350000525,
      "OBJECTID": 66,
      "WARD_NAME": "Hanumanth Nagar",
      "WARDNO": 155,
      "LocationName": "Kempegowda Nagar",
      "KGISFVLID": 66,
      "ZONE": "South"
    },
    {
      "X": 77.5633749999135,
      "Y": 12.9473279997002,
      "OBJECTID": 67,
      "WARD_NAME": "Hanumanth Nagar",
      "WARDNO": 155,
      "LocationName": "Anjanappa Layout to Kempegowda Nagara",
      "KGISFVLID": 67,
      "ZONE": "South"
    },
    {
      "X": 77.6191940003729,
      "Y": 12.9478609998277,
      "OBJECTID": 68,
      "WARD_NAME": "Nilasandra",
      "WARDNO": 116,
      "LocationName": "Rajendra Nagar slum opp KPWD quarters",
      "KGISFVLID": 68,
      "ZONE": "South"
    },
    {
      "X": 77.4876939998255,
      "Y": 12.9495949995645,
      "OBJECTID": 69,
      "WARD_NAME": "Ullalu",
      "WARDNO": 130,
      "LocationName": "Vinayaka layout",
      "KGISFVLID": 69,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.7006789995642,
      "Y": 12.9499429997715,
      "OBJECTID": 70,
      "WARD_NAME": "Bellandur",
      "WARDNO": 150,
      "LocationName": "S G R Dental college",
      "KGISFVLID": 70,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6258889999632,
      "Y": 12.9503890003974,
      "OBJECTID": 71,
      "WARD_NAME": "Vannarpet",
      "WARDNO": 115,
      "LocationName": "Ejipura opp army land",
      "KGISFVLID": 71,
      "ZONE": "East"
    },
    {
      "X": 77.538597,
      "Y": 12.9505679997939,
      "OBJECTID": 72,
      "WARD_NAME": "Gali Anjanaya Temple",
      "WARDNO": 157,
      "LocationName": "Kavika Bridge to Nice road bridge",
      "KGISFVLID": 72,
      "ZONE": "South"
    },
    {
      "X": 77.6056110001208,
      "Y": 12.9509999995556,
      "OBJECTID": 73,
      "WARD_NAME": "Shanthi Nagar",
      "WARDNO": 117,
      "LocationName": "Anepalya junction",
      "KGISFVLID": 73,
      "ZONE": "East"
    },
    {
      "X": 77.5989999996095,
      "Y": 12.9511669997171,
      "OBJECTID": 74,
      "WARD_NAME": "Shanthi Nagar",
      "WARDNO": 117,
      "LocationName": "JK Pura",
      "KGISFVLID": 74,
      "ZONE": "East"
    },
    {
      "X": 77.6059440001871,
      "Y": 12.951944000318,
      "OBJECTID": 75,
      "WARD_NAME": "Shanthi Nagar",
      "WARDNO": 117,
      "LocationName": "Anepalya Gajendranagar SWD surroundings",
      "KGISFVLID": 75,
      "ZONE": "East"
    },
    {
      "X": 77.5968330003742,
      "Y": 12.9529720003271,
      "OBJECTID": 76,
      "WARD_NAME": "Shanthi Nagar",
      "WARDNO": 117,
      "LocationName": "Wilson garden PWD quarters",
      "KGISFVLID": 76,
      "ZONE": "East"
    },
    {
      "X": 77.5412530000206,
      "Y": 12.9530350001226,
      "OBJECTID": 77,
      "WARD_NAME": "Hampinagar",
      "WARDNO": 133,
      "LocationName": "Sri Galianjaneya  swamy temple, Mysore road",
      "KGISFVLID": 77,
      "ZONE": "South"
    },
    {
      "X": 77.5742830002665,
      "Y": 12.9537479997871,
      "OBJECTID": 78,
      "WARD_NAME": "Vishveshwara Puram",
      "WARDNO": 143,
      "LocationName": "VV Puram Law College to Mallathhali tank",
      "KGISFVLID": 78,
      "ZONE": "South"
    },
    {
      "X": 77.6905489997383,
      "Y": 12.9550209998133,
      "OBJECTID": 79,
      "WARD_NAME": "Marathahalli",
      "WARDNO": 86,
      "LocationName": "Deepa nursing home",
      "KGISFVLID": 79,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6490480004463,
      "Y": 12.9556239996646,
      "OBJECTID": 80,
      "WARD_NAME": "Konena Agrahara",
      "WARDNO": 113,
      "LocationName": "BDA Layout Konena Agrahara",
      "KGISFVLID": 80,
      "ZONE": "East"
    },
    {
      "X": 77.7205450004042,
      "Y": 12.9556519996609,
      "OBJECTID": 81,
      "WARD_NAME": "Doddanekkundi",
      "WARDNO": 85,
      "LocationName": "Thubarahalli",
      "KGISFVLID": 81,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5970280003726,
      "Y": 12.9561390000171,
      "OBJECTID": 82,
      "WARD_NAME": "Shanthi Nagar",
      "WARDNO": 117,
      "LocationName": "Micheal church",
      "KGISFVLID": 82,
      "ZONE": "East"
    },
    {
      "X": 77.7410439996623,
      "Y": 12.9561819998388,
      "OBJECTID": 83,
      "WARD_NAME": "Hagadur",
      "WARDNO": 84,
      "LocationName": "Ramagondanahalli",
      "KGISFVLID": 83,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5425799995643,
      "Y": 12.9563169999223,
      "OBJECTID": 84,
      "WARD_NAME": "Bapuji Nagar",
      "WARDNO": 134,
      "LocationName": "Hosaguddadahalli, Bapujinagara",
      "KGISFVLID": 84,
      "ZONE": "South"
    },
    {
      "X": 77.7359389999681,
      "Y": 12.9569400002218,
      "OBJECTID": 85,
      "WARD_NAME": "Hagadur",
      "WARDNO": 84,
      "LocationName": "Varthur",
      "KGISFVLID": 85,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5620830002074,
      "Y": 12.9570390000152,
      "OBJECTID": 86,
      "WARD_NAME": "Chamrajpet",
      "WARDNO": 140,
      "LocationName": "Chamarajapet",
      "KGISFVLID": 86,
      "ZONE": "West"
    },
    {
      "X": 77.5686809997419,
      "Y": 12.957241999757,
      "OBJECTID": 87,
      "WARD_NAME": "Chamrajpet",
      "WARDNO": 140,
      "LocationName": "Nari Halla",
      "KGISFVLID": 87,
      "ZONE": "West"
    },
    {
      "X": 77.5144290004146,
      "Y": 12.9576869996214,
      "OBJECTID": 88,
      "WARD_NAME": "Nagarbhavi",
      "WARDNO": 128,
      "LocationName": "NGEF layout",
      "KGISFVLID": 88,
      "ZONE": "West"
    },
    {
      "X": 77.7449189996862,
      "Y": 12.9584879997902,
      "OBJECTID": 89,
      "WARD_NAME": "Hagadur",
      "WARDNO": 84,
      "LocationName": "Varthur Columbia Asia hospital",
      "KGISFVLID": 89,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5113029995796,
      "Y": 12.9592619996094,
      "OBJECTID": 90,
      "WARD_NAME": "Jnana Bharathi",
      "WARDNO": 129,
      "LocationName": "Backside Fortis Hospital NGEF Layout",
      "KGISFVLID": 90,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.7080749997724,
      "Y": 12.9598240002569,
      "OBJECTID": 91,
      "WARD_NAME": "Doddanekkundi",
      "WARDNO": 85,
      "LocationName": "Munnekolalu",
      "KGISFVLID": 91,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6430559997718,
      "Y": 12.96111100043,
      "OBJECTID": 92,
      "WARD_NAME": "Jeevanbhima Nagar",
      "WARDNO": 88,
      "LocationName": "Nandhini hotel backside on 100 feet road Indiranagar",
      "KGISFVLID": 92,
      "ZONE": "East"
    },
    {
      "X": 77.582806000285,
      "Y": 12.9621110002995,
      "OBJECTID": 93,
      "WARD_NAME": "Dharmaraya Swamy Temple Ward",
      "WARDNO": 119,
      "LocationName": "Kumbaragundi",
      "KGISFVLID": 93,
      "ZONE": "South"
    },
    {
      "X": 77.4919100002234,
      "Y": 12.9624099995629,
      "OBJECTID": 94,
      "WARD_NAME": "Herohalli",
      "WARDNO": 72,
      "LocationName": "Mallathahalli lake inlet Muddaiahna palya road",
      "KGISFVLID": 94,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5839720004376,
      "Y": 12.9624170000544,
      "OBJECTID": 95,
      "WARD_NAME": "Dharmaraya Swamy Temple Ward",
      "WARDNO": 119,
      "LocationName": "Kumbargundi lead off drains",
      "KGISFVLID": 95,
      "ZONE": "South"
    },
    {
      "X": 77.5798060002524,
      "Y": 12.9630000001948,
      "OBJECTID": 96,
      "WARD_NAME": "Dharmaraya Swamy Temple Ward",
      "WARDNO": 119,
      "LocationName": "Osaman Khan  road near KR Market",
      "KGISFVLID": 96,
      "ZONE": "South"
    },
    {
      "X": 77.6146390004251,
      "Y": 12.9637220001151,
      "OBJECTID": 97,
      "WARD_NAME": "Shantala Nagar",
      "WARDNO": 111,
      "LocationName": "Palm grove road",
      "KGISFVLID": 97,
      "ZONE": "East"
    },
    {
      "X": 77.5665249996156,
      "Y": 12.9653170002783,
      "OBJECTID": 98,
      "WARD_NAME": "Chalavadipalya",
      "WARDNO": 138,
      "LocationName": "Cheluvadipalya Near by  Good Shed Road",
      "KGISFVLID": 98,
      "ZONE": "West"
    },
    {
      "X": 77.5665249996156,
      "Y": 12.9653170002783,
      "OBJECTID": 99,
      "WARD_NAME": "Chalavadipalya",
      "WARDNO": 138,
      "LocationName": "Siddartha Nagar, Cheluvadipalya",
      "KGISFVLID": 99,
      "ZONE": "West"
    },
    {
      "X": 77.517394000081,
      "Y": 12.9657029995558,
      "OBJECTID": 100,
      "WARD_NAME": "Kottegepalya",
      "WARDNO": 73,
      "LocationName": "Bande Maramma Temple behind Nagarabhavi 10th cross Bus Stop",
      "KGISFVLID": 100,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5526190001116,
      "Y": 12.9658829998577,
      "OBJECTID": 101,
      "WARD_NAME": "Rayapuram",
      "WARDNO": 137,
      "LocationName": "Rayapuram near Govt. Maternity Hospital",
      "KGISFVLID": 101,
      "ZONE": "West"
    },
    {
      "X": 77.5174889995426,
      "Y": 12.9659500000668,
      "OBJECTID": 102,
      "WARD_NAME": "Kottegepalya",
      "WARDNO": 73,
      "LocationName": "Malagala main road to Vrishabhavathi Valley",
      "KGISFVLID": 102,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.6827779996137,
      "Y": 12.9663889997484,
      "OBJECTID": 103,
      "WARD_NAME": "Vijnana Nagar",
      "WARDNO": 81,
      "LocationName": "Talakaveri layout",
      "KGISFVLID": 103,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5496969995646,
      "Y": 12.9684050002546,
      "OBJECTID": 104,
      "WARD_NAME": "Hosahalli",
      "WARDNO": 124,
      "LocationName": "Vrishabhavthi main valley near Cholurapalya",
      "KGISFVLID": 104,
      "ZONE": "South"
    },
    {
      "X": 77.6921780002252,
      "Y": 12.969065999681,
      "OBJECTID": 105,
      "WARD_NAME": "Doddanekkundi",
      "WARDNO": 85,
      "LocationName": "Doddenakundi near Gururaja layout",
      "KGISFVLID": 105,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.7366859995484,
      "Y": 12.9692999997563,
      "OBJECTID": 106,
      "WARD_NAME": "Hagadur",
      "WARDNO": 84,
      "LocationName": "Nellurahalli",
      "KGISFVLID": 106,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.609667000206,
      "Y": 12.9706109999042,
      "OBJECTID": 107,
      "WARD_NAME": "Shantala Nagar",
      "WARDNO": 111,
      "LocationName": "Magrath road and brigade road junction",
      "KGISFVLID": 107,
      "ZONE": "East"
    },
    {
      "X": 77.6336109997223,
      "Y": 12.9708330001648,
      "OBJECTID": 108,
      "WARD_NAME": "Jogupalya",
      "WARDNO": 89,
      "LocationName": "Cambridge layout near Jogupalya",
      "KGISFVLID": 108,
      "ZONE": "East"
    },
    {
      "X": 77.5186560004364,
      "Y": 12.9711689997559,
      "OBJECTID": 109,
      "WARD_NAME": "Mudalapalya",
      "WARDNO": 127,
      "LocationName": "Kalyannagar, Moodalapalya",
      "KGISFVLID": 109,
      "ZONE": "West"
    },
    {
      "X": 77.6333329999603,
      "Y": 12.9716670001861,
      "OBJECTID": 110,
      "WARD_NAME": "Jogupalya",
      "WARDNO": 89,
      "LocationName": "Jogupalya in Ulsoor",
      "KGISFVLID": 110,
      "ZONE": "East"
    },
    {
      "X": 77.5541089999492,
      "Y": 12.9722480000324,
      "OBJECTID": 111,
      "WARD_NAME": "Kempapura",
      "WARDNO": 122,
      "LocationName": "Kempapura Agrahara Secondary Drain, Magadi road",
      "KGISFVLID": 111,
      "ZONE": "South"
    },
    {
      "X": 77.5628830003884,
      "Y": 12.972618999646,
      "OBJECTID": 112,
      "WARD_NAME": "Cottonpete",
      "WARDNO": 120,
      "LocationName": "K P Agrahara 7th Cross  Road",
      "KGISFVLID": 112,
      "ZONE": "West"
    },
    {
      "X": 77.5466510000851,
      "Y": 12.9737299998207,
      "OBJECTID": 113,
      "WARD_NAME": "Vijayanagar",
      "WARDNO": 123,
      "LocationName": "Manuvana, Pipeline road",
      "KGISFVLID": 113,
      "ZONE": "South"
    },
    {
      "X": 77.5604169997079,
      "Y": 12.9752170001849,
      "OBJECTID": 114,
      "WARD_NAME": "Binnypete",
      "WARDNO": 121,
      "LocationName": "Gopalpura area",
      "KGISFVLID": 114,
      "ZONE": "West"
    },
    {
      "X": 77.5604169997079,
      "Y": 12.9752170001849,
      "OBJECTID": 115,
      "WARD_NAME": "Binnypete",
      "WARDNO": 121,
      "LocationName": "Gopalpura",
      "KGISFVLID": 115,
      "ZONE": "West"
    },
    {
      "X": 77.5627040001008,
      "Y": 12.9756190003332,
      "OBJECTID": 116,
      "WARD_NAME": "Okalipuram",
      "WARDNO": 96,
      "LocationName": "Netaji Nagara in  KP Agrahara",
      "KGISFVLID": 116,
      "ZONE": "West"
    },
    {
      "X": 77.5673469998796,
      "Y": 12.9765969995814,
      "OBJECTID": 117,
      "WARD_NAME": "Subhash Nagar",
      "WARDNO": 95,
      "LocationName": "Binnymill Road  near Belimath",
      "KGISFVLID": 117,
      "ZONE": "West"
    },
    {
      "X": 77.6272219997728,
      "Y": 12.9783330001697,
      "OBJECTID": 118,
      "WARD_NAME": "Halsoor",
      "WARDNO": 90,
      "LocationName": "MV garden & Murphy market",
      "KGISFVLID": 118,
      "ZONE": "East"
    },
    {
      "X": 77.7337530001081,
      "Y": 12.9788889998589,
      "OBJECTID": 119,
      "WARD_NAME": "Garudachar Palya",
      "WARDNO": 82,
      "LocationName": "Pattandur agrahara",
      "KGISFVLID": 119,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5697720002867,
      "Y": 12.9799999996435,
      "OBJECTID": 120,
      "WARD_NAME": "Subhash Nagar",
      "WARDNO": 95,
      "LocationName": "Nagamma nagara Near Binny mill road",
      "KGISFVLID": 120,
      "ZONE": "West"
    },
    {
      "X": 77.5655249998615,
      "Y": 12.9834499997698,
      "OBJECTID": 121,
      "WARD_NAME": "Okalipuram",
      "WARDNO": 96,
      "LocationName": "Gandi Statue, Oklipuram.",
      "KGISFVLID": 121,
      "ZONE": "West"
    },
    {
      "X": 77.5460639998798,
      "Y": 12.9841170002625,
      "OBJECTID": 122,
      "WARD_NAME": "Dr. Rajkumar",
      "WARDNO": 106,
      "LocationName": "Rajajinagar  Industrial  Area ,1st Cross Road",
      "KGISFVLID": 122,
      "ZONE": "West"
    },
    {
      "X": 77.6041670001918,
      "Y": 12.9863889998184,
      "OBJECTID": 123,
      "WARD_NAME": "Shivaji Nagar",
      "WARDNO": 92,
      "LocationName": "Broadway road junction",
      "KGISFVLID": 123,
      "ZONE": "East"
    },
    {
      "X": 77.6102780001299,
      "Y": 12.9863890001152,
      "OBJECTID": 124,
      "WARD_NAME": "Bharathi Nagar",
      "WARDNO": 91,
      "LocationName": "Armstrong road junction in Shivajinagar",
      "KGISFVLID": 124,
      "ZONE": "East"
    },
    {
      "X": 77.4895020004309,
      "Y": 12.9870139997285,
      "OBJECTID": 125,
      "WARD_NAME": "Herohalli",
      "WARDNO": 72,
      "LocationName": "Herohalli lake inlet Handrahalli main road",
      "KGISFVLID": 125,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5592970002844,
      "Y": 12.987563999594,
      "OBJECTID": 126,
      "WARD_NAME": "Sri Ramamandir",
      "WARDNO": 108,
      "LocationName": "Sri Rammandir, Gubbanna Industrial Estate",
      "KGISFVLID": 126,
      "ZONE": "West"
    },
    {
      "X": 77.6902780000745,
      "Y": 12.9888890003729,
      "OBJECTID": 127,
      "WARD_NAME": "Vijnana Nagar",
      "WARDNO": 81,
      "LocationName": "Shivaganga layout",
      "KGISFVLID": 127,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6683329996398,
      "Y": 12.990277999831,
      "OBJECTID": 128,
      "WARD_NAME": "A Narayanapura",
      "WARDNO": 56,
      "LocationName": "Pai Layout",
      "KGISFVLID": 128,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5440499997635,
      "Y": 12.990871999651,
      "OBJECTID": 129,
      "WARD_NAME": "Basaveshwaranagar",
      "WARDNO": 100,
      "LocationName": "Netaji ground & Saneguruvanalli",
      "KGISFVLID": 129,
      "ZONE": "West"
    },
    {
      "X": 77.5214369999444,
      "Y": 12.9912430000379,
      "OBJECTID": 130,
      "WARD_NAME": "Vrisabhavathi Nagar",
      "WARDNO": 102,
      "LocationName": "Near summanahalli bridge (up stream)",
      "KGISFVLID": 130,
      "ZONE": "West"
    },
    {
      "X": 77.5705640000386,
      "Y": 12.9913279999354,
      "OBJECTID": 131,
      "WARD_NAME": "Subhash Nagar",
      "WARDNO": 95,
      "LocationName": "Near Mantri Mall bridge",
      "KGISFVLID": 131,
      "ZONE": "West"
    },
    {
      "X": 77.7181370002738,
      "Y": 12.9920149996462,
      "OBJECTID": 132,
      "WARD_NAME": "Garudachar Palya",
      "WARDNO": 82,
      "LocationName": "Hoodi",
      "KGISFVLID": 132,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.557166999634,
      "Y": 12.9934829997549,
      "OBJECTID": 133,
      "WARD_NAME": "Prakash Nagar",
      "WARDNO": 98,
      "LocationName": "Prakashnagar Near Mudalayar Choultry",
      "KGISFVLID": 133,
      "ZONE": "West"
    },
    {
      "X": 77.6588889998819,
      "Y": 12.9947220001824,
      "OBJECTID": 134,
      "WARD_NAME": "Benniganahalli",
      "WARDNO": 50,
      "LocationName": "Railway parallel road Sadanadanagar",
      "KGISFVLID": 134,
      "ZONE": "East"
    },
    {
      "X": 77.6928709998418,
      "Y": 12.9949200004422,
      "OBJECTID": 135,
      "WARD_NAME": "Garudachar Palya",
      "WARDNO": 82,
      "LocationName": "Maheshwari nagar",
      "KGISFVLID": 135,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5733829999703,
      "Y": 12.9960140000966,
      "OBJECTID": 136,
      "WARD_NAME": "Dattatreya Temple",
      "WARDNO": 77,
      "LocationName": "Link Road, Malleshwaram",
      "KGISFVLID": 136,
      "ZONE": "West"
    },
    {
      "X": 77.4881040000855,
      "Y": 12.9964130000207,
      "OBJECTID": 137,
      "WARD_NAME": "Herohalli",
      "WARDNO": 72,
      "LocationName": "Syndicate Layout beside park",
      "KGISFVLID": 137,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5780420000429,
      "Y": 12.9974140000488,
      "OBJECTID": 138,
      "WARD_NAME": "Dattatreya Temple",
      "WARDNO": 77,
      "LocationName": "Guttahalli Circle, Malleshwaram",
      "KGISFVLID": 138,
      "ZONE": "West"
    },
    {
      "X": 77.5731080003203,
      "Y": 12.9976689998968,
      "OBJECTID": 139,
      "WARD_NAME": "Dattatreya Temple",
      "WARDNO": 77,
      "LocationName": "Near by 2nd Cross Ring Road",
      "KGISFVLID": 139,
      "ZONE": "West"
    },
    {
      "X": 77.5167400001607,
      "Y": 12.998219999936,
      "OBJECTID": 140,
      "WARD_NAME": "Kottegepalya",
      "WARDNO": 73,
      "LocationName": "Pillappanakatte valley (KTG Roads to DWCC)",
      "KGISFVLID": 140,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.5278780003759,
      "Y": 13.0010000003161,
      "OBJECTID": 141,
      "WARD_NAME": "Shankar Matt",
      "WARDNO": 75,
      "LocationName": "1st main road bridge down stream",
      "KGISFVLID": 141,
      "ZONE": "West"
    },
    {
      "X": 77.5164540000044,
      "Y": 13.0015319999151,
      "OBJECTID": 142,
      "WARD_NAME": "Rajagopal Nagar",
      "WARDNO": 70,
      "LocationName": "Lavakushanagara to Vrishabhavathi Valley",
      "KGISFVLID": 142,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.5325529996695,
      "Y": 13.0017559998102,
      "OBJECTID": 143,
      "WARD_NAME": "Shankar Matt",
      "WARDNO": 75,
      "LocationName": "Jai Maruthi nagar and Nandini layout bridge ( up and down stream)",
      "KGISFVLID": 143,
      "ZONE": "West"
    },
    {
      "X": 77.5636110003156,
      "Y": 13.0033059997124,
      "OBJECTID": 144,
      "WARD_NAME": "Kadu Malleshwar",
      "WARDNO": 65,
      "LocationName": "Munikrishnappa layout area of Kaveripura",
      "KGISFVLID": 144,
      "ZONE": "West"
    },
    {
      "X": 77.5290469997468,
      "Y": 13.0035669996389,
      "OBJECTID": 145,
      "WARD_NAME": "Shankar Matt",
      "WARDNO": 75,
      "LocationName": "Sandeep bar",
      "KGISFVLID": 145,
      "ZONE": "West"
    },
    {
      "X": 77.5294920002743,
      "Y": 13.0041169998666,
      "OBJECTID": 146,
      "WARD_NAME": "Laggere",
      "WARDNO": 69,
      "LocationName": "Kemegowda bridge",
      "KGISFVLID": 146,
      "ZONE": "West"
    },
    {
      "X": 77.5293170001005,
      "Y": 13.0041750002618,
      "OBJECTID": 147,
      "WARD_NAME": "Laggere",
      "WARDNO": 69,
      "LocationName": "17th and 19th main in Kamalanagar",
      "KGISFVLID": 147,
      "ZONE": "West"
    },
    {
      "X": 77.5290939999229,
      "Y": 13.0044060003846,
      "OBJECTID": 148,
      "WARD_NAME": "Laggere",
      "WARDNO": 69,
      "LocationName": "Laggere 40-vent Bridge",
      "KGISFVLID": 148,
      "ZONE": "West"
    },
    {
      "X": 77.5300419997567,
      "Y": 13.0058639995654,
      "OBJECTID": 149,
      "WARD_NAME": "Nandini Layout",
      "WARDNO": 43,
      "LocationName": "Nandini Layout Junction",
      "KGISFVLID": 149,
      "ZONE": "West"
    },
    {
      "X": 77.6722220004205,
      "Y": 13.0066670000632,
      "OBJECTID": 150,
      "WARD_NAME": "Vijnanapura",
      "WARDNO": 51,
      "LocationName": "RR layout & Ambedkar Nagar",
      "KGISFVLID": 150,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6963890001064,
      "Y": 13.0066669998917,
      "OBJECTID": 151,
      "WARD_NAME": "Devasandra",
      "WARDNO": 55,
      "LocationName": "Devasandra (Nethravathi Badavane)",
      "KGISFVLID": 151,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6369440003274,
      "Y": 13.0088889996928,
      "OBJECTID": 152,
      "WARD_NAME": "Kammanahalli",
      "WARDNO": 28,
      "LocationName": "Kalyananagar",
      "KGISFVLID": 152,
      "ZONE": "East"
    },
    {
      "X": 77.5355280001312,
      "Y": 13.0095110001703,
      "OBJECTID": 153,
      "WARD_NAME": "Nandini Layout",
      "WARDNO": 43,
      "LocationName": "Near ward office ( circular road)",
      "KGISFVLID": 153,
      "ZONE": "West"
    },
    {
      "X": 77.5355280001312,
      "Y": 13.0095110001703,
      "OBJECTID": 154,
      "WARD_NAME": "Nandini Layout",
      "WARDNO": 43,
      "LocationName": "Back of Presidency school",
      "KGISFVLID": 154,
      "ZONE": "West"
    },
    {
      "X": 77.5355280001312,
      "Y": 13.0095110001703,
      "OBJECTID": 155,
      "WARD_NAME": "Nandini Layout",
      "WARDNO": 43,
      "LocationName": "3rd circular road Nandini layout",
      "KGISFVLID": 155,
      "ZONE": "West"
    },
    {
      "X": 77.6802779998802,
      "Y": 13.0105559999868,
      "OBJECTID": 156,
      "WARD_NAME": "Vijnanapura",
      "WARDNO": 51,
      "LocationName": "ITI Layout",
      "KGISFVLID": 156,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6813890003321,
      "Y": 13.0108329998322,
      "OBJECTID": 157,
      "WARD_NAME": "K R Puram",
      "WARDNO": 52,
      "LocationName": "Ambedkar Nagar near Ramamurthy Nagar",
      "KGISFVLID": 157,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5280640003205,
      "Y": 13.0109529999659,
      "OBJECTID": 158,
      "WARD_NAME": "Nandini Layout",
      "WARDNO": 43,
      "LocationName": "Down stream of Aggere bridge (Sakamma badavane)",
      "KGISFVLID": 158,
      "ZONE": "West"
    },
    {
      "X": 77.6791670000031,
      "Y": 13.0113890001174,
      "OBJECTID": 159,
      "WARD_NAME": "Vijnanapura",
      "WARDNO": 51,
      "LocationName": "Koudenahalli (Ramamurthy Nagar main road)",
      "KGISFVLID": 159,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5117799998828,
      "Y": 13.0126399999882,
      "OBJECTID": 160,
      "WARD_NAME": "Rajagopal Nagar",
      "WARDNO": 70,
      "LocationName": "Government School & Durgalamma Temple",
      "KGISFVLID": 160,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.6788889999928,
      "Y": 13.0127779998621,
      "OBJECTID": 161,
      "WARD_NAME": "Rammurthynagar",
      "WARDNO": 26,
      "LocationName": "NRI layout",
      "KGISFVLID": 161,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5613889997101,
      "Y": 13.0128949999045,
      "OBJECTID": 162,
      "WARD_NAME": "Malleshwaram",
      "WARDNO": 45,
      "LocationName": "Near Yashavanthpur TTMC",
      "KGISFVLID": 162,
      "ZONE": "West"
    },
    {
      "X": 77.6655560003485,
      "Y": 13.0186110004055,
      "OBJECTID": 163,
      "WARD_NAME": "Horamavu",
      "WARDNO": 25,
      "LocationName": "Hoysala nagar in Hormavu",
      "KGISFVLID": 163,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.6347219997556,
      "Y": 13.0188889999146,
      "OBJECTID": 164,
      "WARD_NAME": "Kacharakanahalli",
      "WARDNO": 29,
      "LocationName": "HRBR Lyt",
      "KGISFVLID": 164,
      "ZONE": "East"
    },
    {
      "X": 77.5824999999099,
      "Y": 13.0247220002418,
      "OBJECTID": 165,
      "WARD_NAME": "Ganganagar",
      "WARDNO": 20,
      "LocationName": "Jala Dharshani Layout of Hebbal",
      "KGISFVLID": 165,
      "ZONE": "East"
    },
    {
      "X": 77.5846359999877,
      "Y": 13.0297769996971,
      "OBJECTID": 166,
      "WARD_NAME": "Ganganagar",
      "WARDNO": 20,
      "LocationName": "Vasanthappa block  Hebbal",
      "KGISFVLID": 166,
      "ZONE": "East"
    },
    {
      "X": 77.5201420002763,
      "Y": 13.0330969996944,
      "OBJECTID": 167,
      "WARD_NAME": "HMT",
      "WARDNO": 38,
      "LocationName": "Peenya industrial  area 3rd phase 1st  main road",
      "KGISFVLID": 167,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.4905820000948,
      "Y": 13.033173000101,
      "OBJECTID": 168,
      "WARD_NAME": "Dodda Bidarakallu",
      "WARDNO": 40,
      "LocationName": "Bhavani nagara Doddabidarakallu",
      "KGISFVLID": 168,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.5902780004546,
      "Y": 13.0333329999155,
      "OBJECTID": 169,
      "WARD_NAME": "Hebbala",
      "WARDNO": 21,
      "LocationName": "A Block of  Hebbal",
      "KGISFVLID": 169,
      "ZONE": "East"
    },
    {
      "X": 77.6002779999901,
      "Y": 13.0333329997996,
      "OBJECTID": 170,
      "WARD_NAME": "Hebbala",
      "WARDNO": 21,
      "LocationName": "Low Laying areas of Chamundi nagar of Hebbal",
      "KGISFVLID": 170,
      "ZONE": "East"
    },
    {
      "X": 77.5972219997212,
      "Y": 13.0355560000782,
      "OBJECTID": 171,
      "WARD_NAME": "Hebbala",
      "WARDNO": 21,
      "LocationName": "Sun Rise colony of Hebbal",
      "KGISFVLID": 171,
      "ZONE": "East"
    },
    {
      "X": 77.6811109998455,
      "Y": 13.0366669997307,
      "OBJECTID": 172,
      "WARD_NAME": "Rammurthynagar",
      "WARDNO": 26,
      "LocationName": "Richi's Garden",
      "KGISFVLID": 172,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.4871170004473,
      "Y": 13.0366980002346,
      "OBJECTID": 173,
      "WARD_NAME": "Dodda Bidarakallu",
      "WARDNO": 40,
      "LocationName": "Andanappa layout Doddabidarakallu",
      "KGISFVLID": 173,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.55670599993,
      "Y": 13.0367360000285,
      "OBJECTID": 174,
      "WARD_NAME": "J P Park",
      "WARDNO": 17,
      "LocationName": "Near bescom office Mattikere",
      "KGISFVLID": 174,
      "ZONE": "West"
    },
    {
      "X": 77.6380559998534,
      "Y": 13.0391669999123,
      "OBJECTID": 175,
      "WARD_NAME": "HBR Layout",
      "WARDNO": 24,
      "LocationName": "HBR Layout",
      "KGISFVLID": 175,
      "ZONE": "East"
    },
    {
      "X": 77.5199260002574,
      "Y": 13.0397289999055,
      "OBJECTID": 176,
      "WARD_NAME": "HMT",
      "WARDNO": 38,
      "LocationName": "Near Jalahalli Metro station",
      "KGISFVLID": 176,
      "ZONE": "RR Nagar"
    },
    {
      "X": 77.61222199988,
      "Y": 13.0411110003888,
      "OBJECTID": 177,
      "WARD_NAME": "Nagavara",
      "WARDNO": 23,
      "LocationName": "Veerannapalya",
      "KGISFVLID": 177,
      "ZONE": "East"
    },
    {
      "X": 77.4780799999728,
      "Y": 13.0413700000185,
      "OBJECTID": 178,
      "WARD_NAME": "",
      "WARDNO": 40,
      "LocationName": "Shambhavinagar",
      "KGISFVLID": 178,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.6155559996975,
      "Y": 13.0424999996035,
      "OBJECTID": 179,
      "WARD_NAME": "Thanisandra",
      "WARDNO": 6,
      "LocationName": "Veerannapalya drain near Manpho convention center",
      "KGISFVLID": 179,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.5913889998385,
      "Y": 13.0425000003776,
      "OBJECTID": 180,
      "WARD_NAME": "Byatarayanapura",
      "WARDNO": 7,
      "LocationName": "Near Shani mahathma temple beside Hebbal Flyover",
      "KGISFVLID": 180,
      "ZONE": "East"
    },
    {
      "X": 77.6447219998583,
      "Y": 13.0427780001412,
      "OBJECTID": 181,
      "WARD_NAME": "Horamavu",
      "WARDNO": 25,
      "LocationName": "Vaddera Palya (Railway track)",
      "KGISFVLID": 181,
      "ZONE": "Mahadevapura"
    },
    {
      "X": 77.5988889997057,
      "Y": 13.0430560002637,
      "OBJECTID": 182,
      "WARD_NAME": "Byatarayanapura",
      "WARDNO": 7,
      "LocationName": "Kariyannapalya outer ring road, near Varun motors",
      "KGISFVLID": 182,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.6280559999516,
      "Y": 13.0436110002171,
      "OBJECTID": 183,
      "WARD_NAME": "HBR Layout",
      "WARDNO": 24,
      "LocationName": "Nanda gokula",
      "KGISFVLID": 183,
      "ZONE": "East"
    },
    {
      "X": 77.6002780002857,
      "Y": 13.0436109999325,
      "OBJECTID": 184,
      "WARD_NAME": "Byatarayanapura",
      "WARDNO": 7,
      "LocationName": "Kariyannapalya Bridge over flowed ORR",
      "KGISFVLID": 184,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.5708330003102,
      "Y": 13.0466670000846,
      "OBJECTID": 185,
      "WARD_NAME": "Radhakrishna Temple",
      "WARDNO": 18,
      "LocationName": "Upstreams of Devinagar (junction of Ring road and railway track)  of Hebbal",
      "KGISFVLID": 185,
      "ZONE": "East"
    },
    {
      "X": 77.500740000131,
      "Y": 13.0468099997455,
      "OBJECTID": 186,
      "WARD_NAME": "Chokkasandra",
      "WARDNO": 39,
      "LocationName": "Gundappa Layout & Belmar Layout",
      "KGISFVLID": 186,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.6236110002089,
      "Y": 13.0472219998923,
      "OBJECTID": 187,
      "WARD_NAME": "Thanisandra",
      "WARDNO": 6,
      "LocationName": "Manyata tech park, MS Ramaiah north city To element mall",
      "KGISFVLID": 187,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.5933330000545,
      "Y": 13.0472220002583,
      "OBJECTID": 188,
      "WARD_NAME": "Byatarayanapura",
      "WARDNO": 7,
      "LocationName": "From Esteem mall beside Dhobi Ghat to Yogesh nagar bridge",
      "KGISFVLID": 188,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.5716669996158,
      "Y": 13.0550000002269,
      "OBJECTID": 189,
      "WARD_NAME": "Kodigehalli",
      "WARDNO": 8,
      "LocationName": "TATA nagar 8th cross",
      "KGISFVLID": 189,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.6147219998168,
      "Y": 13.0577779997751,
      "OBJECTID": 190,
      "WARD_NAME": "Thanisandra",
      "WARDNO": 6,
      "LocationName": "Near Rachanahalli lake inlet",
      "KGISFVLID": 190,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.5117799995436,
      "Y": 13.0606799996662,
      "OBJECTID": 191,
      "WARD_NAME": "Shettihalli",
      "WARDNO": 12,
      "LocationName": "Aaimatha layout, Mallasandra",
      "KGISFVLID": 191,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.5011599998644,
      "Y": 13.0608700000336,
      "OBJECTID": 192,
      "WARD_NAME": "Bagalakunte",
      "WARDNO": 14,
      "LocationName": "MEI layout",
      "KGISFVLID": 192,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.5347100003529,
      "Y": 13.0640699996863,
      "OBJECTID": 193,
      "WARD_NAME": "Kuvempu Nagar",
      "WARDNO": 11,
      "LocationName": "Kammagondanahalli near MNTI Polytechnic",
      "KGISFVLID": 193,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.5117800000453,
      "Y": 13.0663400000601,
      "OBJECTID": 194,
      "WARD_NAME": "Shettihalli",
      "WARDNO": 12,
      "LocationName": "Shettihalli & Chikkasandra Village",
      "KGISFVLID": 194,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.5006499998342,
      "Y": 13.0672400001178,
      "OBJECTID": 195,
      "WARD_NAME": "Bagalakunte",
      "WARDNO": 14,
      "LocationName": "Siddeswara Layout",
      "KGISFVLID": 195,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.5006499998342,
      "Y": 13.0672400001178,
      "OBJECTID": 196,
      "WARD_NAME": "Bagalakunte",
      "WARDNO": 14,
      "LocationName": "Shivapura tank",
      "KGISFVLID": 196,
      "ZONE": "Dasarahalli"
    },
    {
      "X": 77.5627780001287,
      "Y": 13.0691669998851,
      "OBJECTID": 197,
      "WARD_NAME": "Vidyaranyapura",
      "WARDNO": 9,
      "LocationName": "Thindlu  to Doddabommasandra tank",
      "KGISFVLID": 197,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.5936109999906,
      "Y": 13.0925000001134,
      "OBJECTID": 198,
      "WARD_NAME": "Yelahanka Satellite Town",
      "WARDNO": 4,
      "LocationName": "LBSnagar Yelahanka",
      "KGISFVLID": 198,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.6011110002963,
      "Y": 13.1030559999236,
      "OBJECTID": 199,
      "WARD_NAME": "Kempegowda",
      "WARDNO": 1,
      "LocationName": "Kogilu cross behind Udupi Grand hotel",
      "KGISFVLID": 199,
      "ZONE": "Yelahanka"
    },
    {
      "X": 77.5933329998893,
      "Y": 13.1102779998028,
      "OBJECTID": 200,
      "WARD_NAME": "Kempegowda",
      "WARDNO": 1,
      "LocationName": "Kondappa layout",
      "KGISFVLID": 200,
      "ZONE": "Yelahanka"
    }
  ]

var map = L.map('map').setView([12.97394,  77.6439], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([12.99619, 77.6572]).addTo(map);
L.marker([12.99985, 77.66253]).addTo(map);
L.marker([12.97832,77.6405]).addTo(map);

var len=data.length
console.log(len)
for (var i=0;i<len;i++){
    L.marker([data[i].Y, data[i].X]).addTo(map);
}
  
