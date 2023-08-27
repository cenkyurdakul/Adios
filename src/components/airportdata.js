// Bu dosyada, internetten araştırıp bulduğum verileri sadeleştirip bir array haline getirdim.
// Havaalanı verilerine bu dosya aracılığıyla ulaşım sağlamaktayım.


const airportData = [
"Praia Cape Verde RAI",
"Cape Town South Africa CPT",
"Johannesburg - Johannesburg Int'l South Africa JNB",
"Algiers Algeria ALG",
"Annaba Algeria AAE",
"Constantine Algeria CZL",
"Oran (Ouahran) Algeria ORN",
"Bengueka Angola BUG",
"Cabinda Angola CAB",
"Luanda - 4 de Fevereiro Angola LAD",
"Cotonou Benin COO",
"Francistown Botswana FRW",
"Gaborone Botswana GBE",
"Maun Botswana MUB",
"Selibi Phikwe Botswana PKW",
"Bobo/Dioulasso Burkina Faso BOY",
"Ouagadougou Burkina Faso OUA",
"Sal Cape Verde SID",
"Bambari Central African Republic BBY",
"Bangassou Central African Republic BGU",
"Bangui Central African Republic BGF",
"Berberati Central African Republic BBT",
"Biraro Central African Republic IRO",
"Bria Central African Republic BIV",
"Carnot Central African Republic CRF",
"Ouadda Central African Republic ODA",
"Abeche Chad AEH",
"Moundou Chad MQQ",
"N'Djamena Chad NDJ",
"Anjouan Comoros (Comores) AJN",
"Moroni - Prince Said Ibrahim Comoros (Comores) HAH",
"Moroni - Iconi Comoros (Comores) YVA",
"Brazzaville Congo BZV",
"Pointe Noire Congo PNR",
"Kinshasa - N'Djili Congo (Zaire) FIH",
"Lisala Congo, Democratic Republic of The LIQ",
"Yamoussoukro Côte d'Ivoire (Ivory Coast) ASK",
"Djibouti Djibouti JIB",
"Abu Rudeis Egypt AUE",
"Abu Simbel Egypt ABS",
"Al Arish Egypt AAC",
"Al Arish Egypt AAC",
"Alexandria, El Nhouza Airport Egypt ALY",
"Assiut Egypt ATZ",
"Aswan, Daraw Airport Egypt ASW",
"Borg El Arab Airport Egypt HBH",
"Cairo Int'l Egypt CAI",
"El Minya Egypt EMY",
"Hurghada Int'l Egypt HRG",
"Kharga - New Valley Egypt UVL",
"Luxor Egypt LXR",
"Marsa Matrah (Marsa Matruh) Egypt MUH",
"New Valley - Kharga Egypt UVL",
"Port Said Egypt PSD",
"Santa Katarina - Mount Sinai Egypt SKV",
"Sharm El Sheikh Egypt SSH",
"Siwa Egypt SEW",
"Malabo Equatorial Guinea SSG",
"Addis Ababa Ethiopia ADD",
"Lambarene Gabon LBQ",
"Libreville Gabon LBV",
"Moanda Gabon MFF",
"Mouila Gabon MJL",
"Mvengue Gabon MVB",
"Port Gentil Gabon POG",
"Oyem Gabon/Loyautte UVE",
"Banjul Gambia BJL",
"Accra Ghana ACC",
"Abidjan Ivory Coast ABJ",
"Bouake Ivory Coast BYK",
"Daloa Ivory Coast DJO",
"Korhogo Ivory Coast HGO",
"Man Ivory Coast MJC",
"San Pedro Ivory Coast SPY",
"Sassandra Ivory Coast ZSS",
"Malindi Kenya MYD",
"Mombasa - Moi International Kenya MBA",
"Nairobi Kenya NBO",
"Maseru - Moshoeshoe Int'l Lesotho MSU",
"Monrovia Liberia MLW",
"Monrovia - Roberts Int'l Liberia ROB",
"Bengasi Libya BEN",
"Sehba Libya SEB",
"Tripoli - Tripoli Int'l Libya TIP",
"Antananarivo (Tanannarive) Madagascar TNR",
"Majunga Madagascar MJN",
"Blantyre Malawi BLZ",
"Lilongwe - Lilongwe International Malawi LLW",
"Bamako Mali BKO",
"Nouadhibou Mauritania NDB",
"Nouakchott Mauritania NKC",
"Zouerate Mauritania OUZ",
"Dzaoudzi Mayotte DZA",
"Agadir Morocco AGA",
"Al Hoceima Morocco AHU",
"Casablanca Morocco CAS",
"Casablanca, Mohamed V Morocco CMN",
"Fes Morocco FEZ",
"Marrakech - Menara Morocco RAK",
"Ouarzazate Morocco OZZ",
"Oujda Morocco OUD",
"Rabat - Sale Morocco RBA",
"Tanger - Boukhalef Morocco TNG",
"Beira Mozambique BEW",
"Maputo - Maputo International Mozambique MPM",
"Katima Mulilo/Mpacha Namibia MPA",
"Keetmanshoop Namibia KMP",
"Luederitz Namibia LUD",
"Mokuti Namibia OKU",
"Ondangwa Namibia OND",
"Oranjemund Namibia OMD",
"Rundu Namibia NDU",
"Swakopmund Namibia SWP",
"Tsumeb Namibia TSB",
"Windhoek - Eros Namibia ERS",
"Windhoek - Hosea Kutako Int'l Namibia WDH",
"Agades Niger AJY",
"Arlit Niger RLT",
"Maradi Niger MFQ",
"Niamey Niger NIM",
"Zinder Niger ZND",
"Abuja International Nigeria ABV",
"Kano Nigeria KAN",
"Lagos - Murtala Muhammed Nigeria LOS",
"Port Harcourt Nigeria PHC",
"Saint Denis de la Reunion Reunion RUN",
"Kigali - Gregoire Kayibanda Rwanda KGL",
"Sao Tome Sao Tome & Principe TMS",
"Dakar Senegal DKR",
"Mahe - Seychelles Int'l Seychelles SEZ",
"Freetown Sierra Leone FNA",
"Mogadischu Somalia MGQ",
"Aggeneys South Africa AGZ",
"Alexander Bay South Africa ALJ",
"Alldays South Africa ADY",
"Bloemfontein South Africa BFN",
"Durban South Africa DUR",
"East London South Africa ELS",
"Ellisras South Africa ELL",
"George South Africa GRJ",
"Kimberley South Africa KIM",
"Kleinsee South Africa KLZ",
"Lanseria South Africa HLA",
"Lusisiki South Africa LUJ",
"Margate South Africa MGH",
"Messina South Africa MEZ",
"Mkambati South Africa MBM",
"Mzamba South Africa MZF",
"Nelspruit South Africa NLP",
"Newcastle South Africa NCS",
"Oudtshoorn South Africa OUH",
"Phalaborwa South Africa PHW",
"Pietermaritzburg South Africa PZB",
"Pietersburg South Africa PTG",
"Pilanesberg/Sun City South Africa NTY",
"Plettenberg Bay South Africa PBZ",
"Port Elizabeth South Africa PLZ",
"Pretoria - Wonderboom Apt. South Africa PRY",
"Richards Bay South Africa RCB",
"Sishen South Africa SIS",
"Skukuza South Africa SZK",
"Springbok South Africa SBU",
"Thaba'Nchu South Africa TCU",
"Ulundi South Africa ULD",
"Umtata South Africa UTT",
"Upington South Africa UTN",
"Vryheid South Africa VYD",
"Walvis Bay South Africa WVB",
"Welkom South Africa WEL",
"Kassala Sudan KSL",
"Khartoum Sudan KRT",
"Paramaribo - Zanderij Int'l Suriname PBM",
"Manzini - Matsapha Int'l Swaziland MTS",
"Arusha Tanzania ARK",
"Dar es Salam (Daressalam) Tanzania DAR",
"Kilimadjaro Tanzania JRO",
"Djerba Tunisia DJE",
"Monastir Tunisia MIR",
"Sfax Tunisia SFA",
"Tunis - Carthage Tunisia TUN",
"Entebbe Uganda EBB",
"Gulu Uganda ULU",
"Kisangani Zaire FKI",
"Lumbumbashi Zaire FBM",
"Chipata Zambia CIP",
"Kitwe Zambia KIW",
"Lusaka Zambia LUN",
"Mfuwe Zambia MFU",
"N'Dola Zambia NLA",
"Buffalo Range Zimbabwe BFO",
"Bulawayo Zimbabwe BUQ",
"Gweru Zimbabwe GWE",
"Harare Zimbabwe HRE",
"Hwange National Park Zimbabwe HWN",
"Masvingo Zimbabwe MVZ",
"Salisbury Zimbabwe SAY",
"Victoria Falls Zimbabwe VFA",
"Sapporo Hokkaido, Japan SPK",
"Sapporo - Okadama Hokkaido, Japan OKD",
"Hong Kong - Int'l Airport (HKIA) Hong Kong HKG",
"Kobe Japan UKB",
"Kyoto Japan UKY",
"Nagoya - Komaki AFB Japan NGO",
"Tokyo Japan TYO",
"Tokyo - Haneda Japan HND",
"Tokyo - Narita Japan NRT",
"Male - International Maledives MLE",
"Kathmandu - Tribhuvan Nepal KTM",
"Seoul - Incheon Int'l Airport South Korea ICN",
"Seoul - Kimpo South Korea SEL",
"Colombo Sri Lanka CMB",
"Barisal Bangladesh BZL",
"Chittagong Bangladesh CGP",
"Dhaka Bangladesh DAC",
"Sylhet Bangladesh ZYL",
"Paro Bhutan PBH",
"Beijing China PEK",
"Beijing - Nanyuan Airport China NAY",
"Shanghai - Hongqiao China SHA",
"Shanghai - Pu Dong China PVG",
"Tianjin China TSN",
"Xiamen Fujian, China XMN",
"Dongguan Guangdong, China DGM",
"Guangzhou (Canton) - Baiyun (White Cloud) Guangdong, China CAN",
"Shenzhen Guangdong, China SZX",
"Nanning Guangxi, China NNG",
"Harbin (Haerbin) Heilongjiang, China HRB",
"Hong Kong - Chek Lap Kok Hong Kong ZJK",
"Wuhan Hubei, China WUH",
"Ahmedabad India AMD",
"Amritsar India ATQ",
"Anand India QNB",
"Bagdogra India IXB",
"Bangalore India BLR",
"Baronda India BDQ",
"Belgaum India IXG",
"Bhopal India BHO",
"Bhubaneswar India BBI",
"Bombay India BOM",
"Calcutta (Kolkata) - Netaji Subhas Chandra India CCU",
"Calicut India CCJ",
"Chandigarh India IXC",
"Chennai (Madras) India MAA",
"Cochin India COK",
"Coimbatore India CJB",
"Delhi, Indira Gandhi India DEL",
"Goa India GOI",
"Guwahati India GAU",
"Hyderabad - Begumpet India HYD",
"Jaipur - Sanganeer India JAI",
"Jalandhar India JLR",
"Jamshedpur - Sonari India IXW",
"Kanpur India QJU",
"Kolkata (Calcutta) - Netaji Subhas Chandra India CCU",
"Lucknow India LKO",
"Madras (Chennai) India MAA",
"Nagpur India NAG",
"Patna India PAT",
"Pune India PNQ",
"Rajkot India RAJ",
"Ranchi India IXR",
"Srinagar India SXR",
"Surat India STV",
"Thiruvananthapuram India TRV",
"Tiruchirapally India TRZ",
"Varanasi India VNS",
"Akita Japan AXT",
"Amami Japan ASJ",
"Aomori Japan AOJ",
"Komatsu Japan KMQ",
"Chiba City Japan QCB",
"Chitose Japan CTS",
"Fukuoka Japan FUK",
"Fukushima-shi, Fukushima Airport Japan FKS",
"Hachijo Jima Japan HAC",
"Hakodate Japan HKD",
"Hiroshima International Japan HIJ",
"Ishigaki Japan LSG",
"Kagoshima Japan KOJ",
"Kochi Japan KCZ",
"Kumamoto Japan KMJ",
"Kushiro Japan KUH",
"Matsumoto, Nagano Japan MMJ",
"Matsuyama Japan MYJ",
"Miyako Jima (Ryuku Islands) - Hirara Japan MMY",
"Morioka, Hanamaki Japan HNA",
"Miyazaki Japan KMI",
"Nagasaki Japan NGS",
"Niigata Japan KIJ",
"Oita Japan OIT",
"Okayama Japan OKJ",
"Okinawa, Ryukyo Island - Naha Japan OKA",
"Osaka, Metropolitan Area Japan OSA",
"Osaka - Itami Japan ITM",
"Osaka - Kansai Int'l Airport Japan KIX",
"Sado Shima Japan SDS",
"Sapporo - Shin-Chitose Airport Japan CTS",
"Sendai Japan SDJ",
"Takamatsu Japan TAK",
"Tokushima Japan TKS",
"Toyama Japan TOY",
"Yamagata, Junmachi Japan GAJ",
"Yokohama Japan YOK",
"Changchun Jilin, China CGQ",
"Aktyubinsk Kazakhstan ADX",
"Alma Ata Kazakhstan ALA",
"Astana Kazakstan TSE",
"Incheon, Incheon Int'l Airport Korea South ICN",
"Dalian Liaoning, China DLC",
"Shenyang Liaoning, China SHE",
"Macau Macau, China SAR MFM",
"Mauritius - S.Seewoosagur Ram Int'l Mauritius MRU",
"Rodrigues Island Mauritius RRG",
"Ulaanbaatar - Buyant Uhaa Mongolia ULN",
"Xi'an - Xianyang Shaanxi, China XIY",
"Jinan Shandong, China TNA",
"Qingdao Shandong, China TAO",
"Taiyuan Shanxi, China TYN",
"Chengdu Sichuan, China CTU",
"Chongqing Sichuan, China CKG",
"Singapore - Paya Lebar Singapore QPG",
"Singapore - Changi Singapore SIN",
"Pu San (Pusan) - Kimhae South Korea PUS",
"Dushanbe (Duschanbe) Tadschikistan DYU",
"Kaohsiung Int'l Taiwan KHH",
"Makung Taiwan MZG",
"Taipei - Chiang Kai Shek Taiwan TPE",
"Taipei - Sung Shan Taiwan TAY",
"Samarkand Uzbekistan SKD",
"Tashkent - Vostochny Uzbekistan TAS",
"Termez (Termes) Uzbekistan TMZ",
"Urumqi Xinjiang, China URC",
"Hangchow (Hangzhou) Zhejiang, China HGH",
"Pointe a Pitre Guadeloupe PTP",
"Bonaire Netherlands Antilles BON",
"Curacao Netherlands Antilles CUR",
"St. Marteen Netherlands Antilles SXM",
"Nevis Nevis NEV",
"St. Kitts St. Kitts And Nevis SKB",
"St. Lucia Hewanorra St. Lucia UVF",
"St. Lucia Vigle St. Lucia SLU",
"St. Martin St. Martin SFG",
"St. Vincent St. Vincent SVD",
"Havana - José Martí Int'l Cuba HAV",
"Holguin Cuba HOG",
"Santiago - Antonio Maceo Airport Cuba SCU",
"Varadero Cuba VRA",
"Casa de Campo/La Romana Dominican Republic LRM",
"Puerto Plata Dominican Republic POP",
"Punta Cana Dominican Republic PUJ",
"Santo Domingo Dominican Republic SDQ",
"Port au Prince Haiti PAP",
"Kingston - Norman Manley Jamaica KIN",
"Montenego Bay Jamaica MBJ",
"Fort de France Martinique FDF",
"Aguadilla Puerto Rico BQN",
"Mayaguez Puerto Rico MAZ",
"Ponce Puerto Rico PSE",
"San Juan Perto Rico SJU",
"Tobago Tobago TAB",
"Port of Spain Trinidad POS",
"St. Croix Virgin Islands STX",
"St. Thomas Virgin Islands STT",
"Tortola Virgin Islands EIS",
"Virgin Gorda Virgin Islands VIJ",
"Beef Island Virgin Islands, British EIS",
"Freeport Bahamas FPO",
"Nassau Bahamas NAS",
"Grand Cayman Cayman Islands GCM",
"Anguilla Anguilla AXA",
"Antigua Antigua ANU",
"Aruba Aruba AUA",
"Chub Cay Bahamas CCZ",
"Govenors Harbour Bahamas GHB",
"Grand Bahama Bahamas GBI",
"Marsh Harbour Bahamas MHH",
"North Eleuthera Bahamas ELH",
"Rock Sound Bahamas RSD",
"San Salvador Bahamas ZSA",
"Treasure Cay Bahamas TCB",
"Bridgetown, Grantley Adams Int'l Barbados BGI",
"Bermuda Bermuda BDA",
"Panama City - Tocumen International Panama PTY",
"San Jose Costa Rica SJO",
"San Salvador El Salvador SAL",
"Roatan Honduras RTB",
"San Pedro Sula Honduras SAP",
"Santa Rosa Copan Honduras SDH",
"Tegucigalpa Honduras TGU",
"Belize City Belize BZE",
"Guatemala City Guatemala GUA",
"Managua - Augusto C Sandino Nicaragua MGA",
"Sarajevo Bosnia and Herzegovina SJJ",
"Sofia - Vrazhdebna Bulgaria SOF",
"Nadi Fiji NAN",
"Suva/Nausori Fiji SUV",
"Nausori Fiji/Suva SUV",
"Budapest, Ferihegy Hungary BUD",
"Skopje Macedonia SKP",
"Bucharest Romania BUH",
"Bucharest, Otopeni Romania OTP",
"Eriwan (Yerevan, Jerevan) Armenia EVN",
"Baku Azerbaijan BAK",
"Minsk, International Belarus MSQ",
"Mostar Bosnia and Herzegovina OMO",
"Bourgas/Burgas Bulgaria BOJ",
"Gorna Bulgaria GOZ",
"Ruse Bulgaria ROU",
"Silistra Bulgaria SLS",
"Targovishte Bulgaria TGV",
"Varna Bulgaria VAR",
"Vidin Bulgaria VID",
"Dubrovnik Croatia (Hrvatska) DBV",
"(Mali) Losinj - Losinj Arpt Croatia (Hrvatska) LSZ",
"Osijek Croatia (Hrvatska) OSI",
"Pula Croatia (Hrvatska) PUY",
"Rijeka Croatia (Hrvatska) RJK",
"Split Croatia (Hrvatska) SPU",
"Zadar Croatia (Hrvatska) ZAD",
"Zagreb - Pleso Croatia (Hrvatska) ZAG",
"Tallinn - Pirita Harbour Estonia QUF",
"Tallinn - Ulemiste Estonia TLL",
"Tbilisi - Novo Alexeyevka Georgia TBS",
"Riga Latvia RIX",
"Wilna (Vilnius) Lithuania VNO",
"Ohrid Macedonia OHD",
"Constanza Romania CND",
"Adler/Sochi Russia AER",
"Chabarovsk (Khabarovsk) Russia KHV",
"Chita (Tschita) Russia HTA",
"Irkutsk Russia IKT",
"Kazan (Ka San) Russia KZN",
"Mineralnye Vody Russia MRV",
"Moscow - Metropolitan Area Russia MOW",
"Moscow - Domodedovo Russia DME",
"Moscow - Sheremetyevo Russia SVO",
"Moscow - Vnukovo Russia VKO",
"Murmansk Russia MMK",
"Novosibirsk - Tolmachevo Russia OVB",
"St. Petersburg (Leningrad) - Pulkovo Russia LED",
"Ulan-Ude Russia UUD",
"Velikiye Luki (Welikije Luki) Russia VLU",
"Arkhangelsk Russian Federation ARH",
"Yakutsk Russian Federation YKS",
"Bratislava Slovakia BTS",
"Ljubljana - Brnik Slovenia LJU",
"Maribor Slovenia MBX",
"Kiev - Borispol Ukraine KBP",
"Kiev - Zhulhany Ukraine IEV",
"Lvov (Lwow, Lemberg) Ukraine LWO",
"Nikolaev Ukraine NLV",
"Odessa Ukraine ODS",
"Simferopol Ukraine SIP",
"Belgrad (Beograd) Yugoslavia BEG",
"Nis Yugoslavia INI",
"Novi Sad Yugoslavia QND",
"Podgorica Yugoslavia TGD",
"Pristina Yugoslavia PRN",
"Tivat Yugoslavia TIV",
"Tirana - Rinas Albania TIA",
"Innsbruck - Kranebitten Austria INN",
"Salzburg - W.A. Mozart Austria SZG",
"Wien (Vienna) - Vienna Int'l Austria VIE",
"Copenhagen Denmark CPH",
"Helsinki - Vantaa Finland HEL",
"Berlin Germany BER",
"Berlin, Schoenefeld Germany SXF",
"Berlin, Tegel Germany TXL",
"Dresden Germany DRS",
"Hamburg - Fuhlsbuettel Germany HAM",
"Athens Greece ATH",
"Athens, Hellinikon Airport Greece HEW",
"Corfu Greece CFU",
"Kos Greece KGS",
"Mykonos Greece JMK",
"Mytilene (Lesbos) Greece MJT",
"Rhodos Greece RHO",
"Thessaloniki - Makedonia Apt. Greece SKG",
"Ibiza Ibiza/Spain IBZ",
"Cork Ireland ORK",
"Dublin Ireland DUB",
"Galway Ireland GWY",
"Kerry County Ireland KIR",
"Knock Ireland NOC",
"Shannon (Limerick) Ireland SNN",
"Cagliari Italy CAG",
"Luga Malta MLA",
"Bergen Norway BGO",
"Oslo Norway OSL",
"Oslo - Sandefjord Norway TRF",
"Krakau Poland KRK",
"Warsaw Poland WAW",
"Lisbon - Lisboa Portugal LIS",
"Ponta Delgada Portugal PDL",
"Palma de Mallorca Spain PMI",
"Sevilla Spain SVQ",
"Valencia Spain VLC",
"Goteborg Sweden GOT",
"Stockholm Metropolitan Area Sweden STO",
"Stockholm - Arlanda Sweden ARN",
"Stockholm - Bromma Sweden BMA",
"Belfast - Harbour United Kingdom BHD",
"Belfast International United Kingdom BFS",
"Glasgow, Prestwick United Kingdom PIK",
"Glasgow United Kingdom GLA",
"Inverness United Kingdom INV",
"Andorra La Vella H/P Andorra ALV",
"Graz Austria GRZ",
"Klagenfurt Austria KLU",
"Linz - Hoersching Austria LNZ",
"Antwerp Belgium ANR",
"Brussels Belgium BRU",
"Liege Belgium LGG",
"Akrotiri - RAF Cyprus AKT",
"Larnaca Cyprus LCA",
"Limassol Cyprus QLI",
"Nicosia Cyprus NIC",
"Paphos Cyprus PFO",
"Prague - Ruzyne Czech Republic PRG",
"Aarhus Denmark AAR",
"Alborg Denmark AAL",
"Billund Denmark BLL",
"Esbjerg Denmark EBJ",
"Faroer Denmark FAE",
"Karup Denmark KRP",
"Odense Denmark ODE",
"Roenne Denmark RNN",
"Skrydstrup Denmark SKS",
"Soenderborg Denmark SGD",
"Thisted Denmark TED",
"Enontekioe Finland ENF",
"Ivalo Finland IVL",
"Joensuu Finland JOE",
"Jyvaeskylae Finland JYV",
"Kajaani Finland KAJ",
"Kauhajoki Finland KHJ",
"Kemi/Tornio Finland KEM",
"Kittilä Finland KTT",
"Kokkola/Pietarsaari Finland KOK",
"Kuopio Finland KUO",
"Kuusamo Finland KAO",
"Lappeenranta Finland LPP",
"Mariehamn (Maarianhamina) Finland MHQ",
"Mikkeli Finland MIK",
"Oulu Finland OUL",
"Pori Finland POR",
"Rovaniemi Finland RVN",
"Savonlinna Finland SVL",
"Seinaejoki Finland SJY",
"Sodankylae Finland SOT",
"Tampere Finland TMP",
"Turku Finland TKU",
"Vaasa Finland VAA",
"Varkaus Finland VRK",
"Ajaccio France AJA",
"Albi France LBI",
"Annecy France NCY",
"Aurillac France AUR",
"Bastia France BIA",
"Biarritz France BIQ",
"Bordeaux France BOD",
"Brest France BES",
"Calvi France CLY",
"Chambery France CMF",
"Clermont Ferrand France CFE",
"Dinard France DNR",
"Figari France FSC",
"Frejus France FRJ",
"Grenoble France GNB",
"La Rochelle France LRH",
"Lannion France LAI",
"Lille France LIL",
"Limoges France LIG",
"Lorient France LRT",
"Lourdes/Tarbes France LDE",
"Lyon France LYS",
"Marseille France MRS",
"Metz France MZM",
"Montpellier - Frejorgues France MPL",
"Mulhouse France MLH",
"Nancy France ENC",
"Nantes France NTE",
"Nice - Cote D'Azur France NCE",
"Nimes France FNI",
"Paris France PAR",
"Paris - Charles de Gaulle France CDG",
"Paris - Le Bourget France LBG",
"Paris - Orly France ORY",
"Pau France PUF",
"Perpignan France PGF",
"Quimper France UIP",
"Rennes France RNS",
"Roanne France RNE",
"Rodez France RDZ",
"Saint Brieuc France SBK",
"St. Etienne France EBU",
"Strassburg France SXB",
"Toulouse - Blagnac France TLS",
"Augsburg Germany AGB",
"Bayreuth Germany BYU",
"Bremen Germany BRE",
"Cologne (Koeln)/Bonn Germany CGN",
"Dortmund Germany DTM",
"Duesseldorf Germany DUS",
"Erfurt Germany ERF",
"Frankfurt/Main Int'l Airport Germany FRA",
"Frankfurt/Hahn Germany HNN",
"Friedrichshafen Germany FDH",
"Hannover Germany HAJ",
"Hof Germany HOQ",
"Karlsruhe-Baden - Soellingen Germany FKB",
"Kiel - Holtenau Germany KEL",
"Köln, Köln/Bonn Germany CGN",
"Leipzig Germany LEJ",
"Muenchen (Munich) - Franz Josef Strauss Germany MUC",
"Muenster/Osnabrueck Germany FMO",
"Muenster/Osnabrueck Germany MSR",
"Nürnberg (Nuremberg) Germany NUE",
"Paderborn/Lippstadt Germany PAD",
"Saarbruecken Germany SCN",
"Stuttgart - Echterdingen Germany STR",
"Westerland Germany GWT",
"Wiesbaden, Air Base Germany WIE",
"Gibraltar Gibraltar GIB",
"Araxos Greece GPA",
"Chania Greece CHQ",
"Chios Greece JKH",
"Heraklion Greece HER",
"Kalamata Greece KLX",
"Karpathos Greece AOK",
"Kavalla Greece KVA",
"Preveza/Lefkas Greece PVK",
"Saloniki Greece SKG",
"Samos Greece SMI",
"Skiathos Greece JSI",
"Thira Greece JTR",
"Zakynthos Greece ZTH",
"Christmas Line Iceland CXI",
"Egilsstadir Iceland EGS",
"Reykjavik - Metropolitan Area Iceland REK",
"Reykjavik - Keflavik International Iceland KEF",
"Sligo Ireland SXL",
"Alghero Sassari Italy AHO",
"Ancona Italy AOI",
"Bari Italy BRI",
"Bergamo Italy BGY",
"Bologna Italy BLQ",
"Brescia, Montichiari Italy VBS",
"Brindisi Italy BDS",
"Catania Italy CTA",
"Florence Italy FLR",
"Genoa Italy GOA",
"Lamezia Terme Italy SUF",
"Lampedusa Italy LMP",
"Milan Italy MIL",
"Milan - Linate Italy LIN",
"Milan - Malpensa Italy MXP",
"Milan - Orio Al Serio Italy BGY",
"Naples Italy NAP",
"Olbia Italy OLB",
"Palermo - Punta Raisi Italy PMO",
"Pantelleria Italy PNL",
"Perugia Italy PEG",
"Pescara Italy PSR",
"Pisa - Gal Galilei Italy PSA",
"Reggio Calabria Italy REG",
"Rimini Italy RMI",
"Rome Italy ROM",
"Rome - Ciampino Italy CIA",
"Rome - Fuimicino Italy FCO",
"Trapani Italy TPS",
"Treviso Italy TSF",
"Trieste Italy TRS",
"Turin Italy TRN",
"Venice - Marco Polo Italy VCE",
"Verona (Brescia) Montichiari Italy VBS",
"Verona Italy VRN",
"Luxembourg Luxembourg LUX",
"Amsterdam, Schiphol Netherlands AMS",
"Den Haag (The Hague) Netherlands HAG",
"Eindhoven Netherlands EIN",
"Lelystad Netherlands LEY",
"Maastricht/Aachen Netherlands MST",
"Rotterdam Netherlands RTM",
"Alesund Norway AES",
"Alta Norway ALF",
"Bardufoss Norway BDU",
"Bodo Norway BOO",
"Broennoeysund Norway BNN",
"Evenes Norway EVE",
"Floro Norway FRO",
"Hammerfest Norway HFT",
"Haugesund Norway HAU",
"Kirkenes Norway KKN",
"Kristiansand Norway KRS",
"Kristiansund Norway KSU",
"Lakselv Norway LKL",
"Sogndal Norway SOG",
"Stavanger Norway SVG",
"Tromsoe Norway TOS",
"Trondheim Norway TRD",
"Gdansk Poland GDN",
"Poznan, Lawica Poland POZ",
"Stettin Poland SZZ",
"Faro Portugal FAO",
"Funchal Portugal FNC",
"Horta Portugal HOR",
"Porto Portugal OPO",
"Porto Santo Portugal PXO",
"Santa Maria Portugal SMA",
"Terceira Portugal TER",
"Alicante Spain ALC",
"Almeria Spain LEI",
"Arrecife/Lanzarote Spain ACE",
"Badajoz Spain BJZ",
"Barcelona Spain BCN",
"Bilbao Spain BIO",
"Cordoba Spain ODB",
"Fuerteventura Spain FUE",
"Gerona Spain GRO",
"Granada Spain GRX",
"Jerez de la Frontera/Cadiz Spain XRY",
"La Coruna Spain LCG",
"Las Palmas Spain LPA",
"Madrid - Barajas Spain MAD",
"Mahon Spain MAH",
"Malaga Spain AGP",
"Murcia Spain MJV",
"Oviedo Spain OVD",
"Reus Spain REU",
"San Sebastian Spain EAS",
"Santa Cruz de la Palma Spain SPC",
"Santander Spain SDR",
"Santiago de Compostela Spain SCQ",
"Tenerife Spain TCI",
"Tenerife - Sur Reina Sofia Spain TFS",
"Tenerife - Norte Los Rodeos Spain TFN",
"Valladolid Spain VLL",
"Valverde Spain VDE",
"Vigo Spain VGO",
"Vitoria Spain VIT",
"Zaragoza Spain ZAZ",
"Longyearbyen - Svalbard Svalbard/Norway LYR",
"Helsingborg Sweden JHE",
"Joenkoeping Sweden JKG",
"Kalmar Sweden KLR",
"Karlstad Sweden KSD",
"Kiruna Sweden KRN",
"Kristianstad Sweden KID",
"Lidkoeping Sweden LDK",
"Lulea Sweden LLA",
"Malmo (Malmoe) Sweden MMA",
"Malmo (Malmoe) - Sturup Sweden MMX",
"Norrkoeping Sweden NRK",
"Oerebro Sweden ORB",
"Ronneby Sweden RNB",
"Sundsvall Sweden SDL",
"Vaexjoe Sweden VXO",
"Vasteras Sweden VST",
"Visby Sweden VBY",
"Altenrhein Switzerland ACH",
"Basel Switzerland BSL",
"Bern Switzerland BRN",
"Bern Switzerland ZDJ",
"Geneva Switzerland GVA",
"Lugano Switzerland LUG",
"Zurich (Zürich) - Kloten Switzerland ZRH",
"Basel/Mulhouse Switzerland/France EAP",
"Los Rodeos Teneriffa/Spain TFN",
"Reina Sofia Teneriffa/Spain TFS",
"Sheffield, City Airport UK SZD",
"Aberdeen United Kingdom ABZ",
"Birmingham United Kingdom BHX",
"Bristol United Kingdom BRS",
"Cambrigde United Kingdom CBG",
"Cardiff United Kingdom CWL",
"Derby (East Midlands) United Kingdom EMA",
"Derry (Londonderry) United Kingdom LDY",
"Edinburgh United Kingdom EDI",
"Guernsey United Kingdom GCI",
"Humberside United Kingdom HUY",
"Isle of Man United Kingdom IOM",
"Jersey United Kingdom JER",
"Leeds/Bradford United Kingdom LBA",
"Liverpool United Kingdom LPL",
"London United Kingdom LON",
"London - City Airport United Kingdom LCY",
"London - Gatwick United Kingdom LGW",
"London - Heathrow United Kingdom LHR",
"London - Luton United Kingdom LTN",
"London - Stansted United Kingdom STN",
"Manchester United Kingdom MAN",
"Newcastle United Kingdom NCL",
"Orkney United Kingdom KOI",
"Southampton - Eastleigh United Kingdom SOU",
"Southend United Kingdom SEN",
"Stansted (London) United Kingdom STN",
"Stornway United Kingdom SYY",
"Sumburgh (Shetland) United Kingdom LSI",
"Teesside, Durham Tees Valley United Kingdom MME",
"Wick United Kingdom WIC",
"Jerusalem Israel JRS",
"Tel Aviv - Ben Gurion Int'l Israel TLV",
"Beirut Lebanon BEY",
"Istanbul - Ataturk Turkey IST",
"Izmir Turkey IZM",
"Kabul - Khwaja Rawash Afghanistan KBL",
"Bahrain Bahrain BAH",
"Abadan Iran ABD",
"Tehran (Teheran) - Mehrabad Iran THR",
"Bagdad, Al Muthana Iraq BGW",
"Bagdad, Saddam International Iraq SDA",
"Basra, Basrah Iraq BSR",
"Kirkuk Iraq KIK",
"Mosul Iraq OSM",
"Elat Israel ETH",
"Elat, Ovula Israel VDA",
"Haifa Israel HFA",
"Amman, Queen Alia Intl Jordan AMM",
"Amman, Civil - Marka Airport Jordan ADJ",
"Aqaba Jordan AQJ",
"Kuwait - Kuwait Int'l Kuwait KWI",
"Jounieh Lebanon GJN",
"Muscat - Seeb Oman MCT",
"Salalah Oman SLL",
"Bahawalpur Pakistan BHV",
"Bannu Pakistan BNP",
"Chitral Pakistan CJL",
"Dera Ismail Khan Pakistan DSK",
"Faisalabad Pakistan LYP",
"Gilgit Pakistan GIL",
"Gwadar Pakistan GWD",
"Hyderabad Pakistan HDD",
"Islamabad - Islamabad Int'l Pakistan ISB",
"Jacobabad Pakistan JAG",
"Jiwani Pakistan JIW",
"Karachi - Quaid-E-Azam Int'l Pakistan KHI",
"Khuzdar Pakistan KDD",
"Kohat Pakistan OHT",
"Lahore Pakistan LHE",
"Mianwali Pakistan MWD",
"Mirpur Pakistan QML",
"Moenjodaro Pakistan MJD",
"Multan Pakistan MUX",
"Muzaffarabad Pakistan MFG",
"Nawab Shah Pakistan WNS",
"Panjgur Pakistan PJG",
"Pasni Pakistan PSI",
"Peshawar Pakistan PEW",
"Quetta Pakistan UET",
"Rahim Yar Khan Pakistan RYK",
"Rawala Kot Pakistan RAZ",
"Rawalpindi Pakistan RWP",
"Saidu Sharif Pakistan SDT",
"Sindhri Pakistan MPD",
"Skardu Pakistan KDU",
"Sui Pakistan SUL",
"Sukkur Pakistan SKZ",
"Turbat Pakistan TUK",
"Zhob Pakistan PZH",
"Doha Qatar DOH",
"Adana Turkey ADA",
"Ankara Turkey ANK",
"Antalya Turkey AYT",
"Dalaman Turkey DLM",
"Ashgabat, Ashkhabat Turkmenistan ASB",
"Abu Dhabi UAE AUH",
"Alfujairah (Fujairah) UAE FJR",
"Dubai UAE DXB",
"Ras al Khaymah (Ras al Khaimah) UAE RKT",
"Sharjah UAE SHJ",
"Al Ain United Arab Emirates AAN",
"Fujairah, Int'l Airport United Arab Emirates FJR",
"Dhahran Saudi Arabia DHA",
"Jeddah - King Abdulaziz Int'l Saudi Arabia JED",
"Khamis Mushayat Saudi Arabia AHB",
"Madinah, Mohammad Bin Abdulaziz Saudi Arabia MED",
"Medina Saudi Arabia MED",
"Riyadh - King Khaled Int'l Saudi Arabia RUH",
"Tabuk Saudi Arabia TUU",
"Taif Saudi Arabia TIF",
"Yanbu Saudi Arabia YNB",
"Dammam, King Fahad Int'l Saudi Arabien DMM",
"Aleppo Syria ALP",
"Damascus, International Syria DAM",
"Aden Yemen ADE",
"Sanaa (Sana'a) - Sana'a International Yemen SAH",
"Attawapiskat, NT Canada YAT",
"Bonaventure, PQ Canada YVB",
"Calgary/Banff Canada YYC",
"Cambridge Bay Canada YCB",
"Churchill Canada YYQ",
"Cienfuegos Canada CFG",
"Deer Lake/Corner Brook Canada YDF",
"Edmonton Canada YEA",
"Edmonton, International Canada YEG",
"Edmonton, Municipal Canada YXD",
"Flin Flon Canada YFO",
"Fort Albert Canada YFA",
"Fort McMurray Canada YMM",
"Fort Smith Canada YSM",
"Fort St. John Canada YXJ",
"Fredericton Canada YFC",
"Gander Canada YQX",
"Gillam Canada YGX",
"Goose Bay Canada YYR",
"Halifax Int'l Canada YHZ",
"Hall Beach Canada YUX",
"Hamilton Canada YHM",
"Harrington Harbour, PQ Canada YHR",
"Inuvik Canada YEV",
"Iqaluit (Frobisher Bay) Canada YFB",
"Kaschechawan, PQ Canada ZKE",
"Kelowna, BC Canada YLW",
"Kuujjuaq (FortChimo) Canada YVP",
"Kuujjuarapik Canada YGW",
"Lac Brochet, MB Canada XLB",
"La Grande Canada YGL",
"Leaf Rapids Canada YLR",
"London Canada YXU",
"Moncton Canada YQM",
"Montreal Canada YMQ",
"Montreal - Dorval (Montréal-Trudeau) Canada YUL",
"Montreal - Mirabel Canada YMX",
"Nanisivik Canada YSR",
"Norman Wells Canada YVQ",
"Ottawa - Hull Canada YOW",
"Port Menier, PQ Canada YPN",
"Prince George Canada YXS",
"Prince Rupert/Digby Island Canada YPR",
"Pukatawagan Canada XPK",
"Quebec - Quebec Int'l Canada YQB",
"Rainbow Lake, AB Canada YOP",
"Regina Canada YQR",
"Resolute Bay Canada YRB",
"Saint John Canada YSJ",
"Sandspit Canada YZP",
"Saskatoon Canada YXE",
"Shamattawa, MB Canada ZTM",
"Smithers Canada YYD",
"South Indian Lake, MB Canada XSI",
"St. Augustin, PQ Canada YIF",
"St. John's Canada YYT",
"St. Pierre, NF Canada FSP",
"Terrace Canada YXT",
"The Pas Canada YQD",
"Thompson Canada YTH",
"Thunder Bay Canada YQT",
"Toronto Island Canada YTZ",
"Toronto - Lester B. Pearson Canada YYZ",
"Toronto Canada YTO",
"Val d'Or Canada YVO",
"Vancouver - Vancouver Int'l Canada YVR",
"Victoria Canada YYJ",
"Wabush Canada YWK",
"Whale Cove, NT Canada YXN",
"Whitehorse Canada YXY",
"Windsor Ontario Canada YQG",
"Winnipeg Int'l Canada YWG",
"Yellowknife Canada YZF",
"Narsarsuaq Greenland UAK",
"Soendre Stroemfjord Greenland SFJ",
"Acapulco Mexico ACA",
"Aguascaliente Mexico AGU",
"Cancun Mexico CUN",
"Chichen Itza Mexico CZA",
"Chihuahua, Gen Fierro Villalobos Mexico CUU",
"Ciudad Del Carmen Mexico CME",
"Ciudad Juarez Mexico CJS",
"Ciudad Obregon Mexico CEN",
"Ciudad Victoria Mexico CVM",
"Colima Mexico CLQ",
"Cozmel Mexico CZM",
"Culiacan Mexico CUL",
"Guadalajara Mexico GDL",
"Hermosillo - Gen. Pesqueira Garcia Mexico HMO",
"Huatulco Mexico HUX",
"Ixtapa/Zihuatenejo Mexico ZIH",
"La Paz - Leon Mexico LAP",
"Lazaro Cardenas Mexico LZC",
"Leon Mexico BJX",
"Loreto Mexico LTO",
"Los Cabos Mexico SJD",
"Los Mochis Mexico LMM",
"Manzanillo Mexico ZLO",
"Mazatlan Mexico MZT",
"Merida Mexico MID",
"Mexicali Mexico MXL",
"Mexico City Mexico MEX",
"Mexico City - Juarez International Mexico MEX",
"Minatitlan Mexico MTT",
"Monterrey Mexico MTY",
"Monterrey - Aeropuerto Del Norte Mexico NTR",
"Morelia Mexico MLM",
"Nuevo Laredo Mexico NLD",
"Oaxaca Mexico OAX",
"Puebla Mexico PBC",
"Puerto Escondido Mexico PXM",
"Puerto Vallarta Mexico PVR",
"San Jose Cabo Mexico SJD",
"San Luis Potosi Mexico SLP",
"Santa Rosalia Mexico SRL",
"Tampico - Gen. F. Javier Mina Mexico TAM",
"Tijuana - Rodriguez Mexico TIJ",
"Tuxtla Gutierrez Mexico TGZ",
"Veracruz Mexico VER",
"Villahermosa Mexico VSA",
"Zacatecas Mexico ZCL",
"Aberdeen, SD USA ABR",
"Abilene, TX USA ABI",
"Akron, OH USA CAK",
"Albany, GA USA ABY",
"Albany, NY USA ALB",
"Albuquerque, NM USA ABQ",
"Alexandria, La USA ESF",
"Allentown, PA USA ABE",
"Altoona, PA USA AOO",
"Amarillo, TX USA AMA",
"Anchorage, AK USA ANC",
"Ann Arbor, MI USA ARB",
"Anniston, AL USA ANB",
"Appelton/Neenah/Menasha, WI USA ATW",
"Asheville, NC USA AVL",
"Aspen Snowmass, CO USA ASE",
"Athens, GA USA AHN",
"Athens, OH USA ATO",
"Atlanta, Hartsfield Atlanta Int'l Airport USA ATL",
"Atlantic City, NJ USA ACY",
"Augusta, GA USA AGS",
"Augusta, ME USA AUG",
"Austin, TX USA AUS",
"Bakersfield, CA USA BFL",
"Baltimore Washington Int'l Airport; MD USA BWI",
"Bangor, ME USA BGR",
"Baton Rouge, La USA BTR",
"Beaumont/Pt. Arthur, TX USA BPT"];

export default airportData;