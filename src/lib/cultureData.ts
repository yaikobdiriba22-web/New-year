import { CultureItem, LandscapeItem, GalleryPhoto, CelebrationTrack } from '../types';

export const CULTURE_ITEMS: CultureItem[] = [
  {
    id: 'heritage',
    iconName: 'Landmark',
    titleEn: 'Sacred Heritage & History',
    titleAm: 'ጥንታዊ ቅርስና ታሪክ',
    titleOm: 'Seenaa fi Hambaa Durii',
    descEn: 'Over 3,000 years of recorded history, ancient Ge\'ez script, monumental rock architectures, and independent sovereign resilience.',
    descAm: 'ከሦስት ሺህ ዓመታት በላይ የተሻገረ ታሪክ፣ ጥንታዊው የግዕዝ ፊደል፣ የድንጋይ ውቅር ቅርሶችና የነጻነት ተምሳሌትነት።',
    descOm: 'Seenaa waggoota kuma sadii ol qabu, qubee Gi\'izii durii, ijaarsawwan dhagaa fi gootummaa bilisummaa.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop',
    tagEn: 'Heritage',
    tagAm: 'ቅርስ',
    tagOm: 'Hambaa',
    detailsEn: [
      'Home to 9+ UNESCO World Heritage Sites including Lalibela and Axum',
      'One of the oldest alphabets in the world still in daily active use: Ge\'ez',
      'The legendary cradle of humanity with archaeological discoveries like Lucy (Dinkinesh)'
    ],
    detailsAm: [
      'ላሊበላ እና አክሱምን ጨምሮ ከ፱ በላይ በዩኔስኮ የተመዘገቡ የዓለም ቅርሶች መገኛ',
      'በዓለም ላይ በሥራ ላይ ካሉ ጥንታዊ ፊደላት አንዱ የሆነው ግዕዝ',
      'የሉሲ (ድንቅነሽ) መገኛና የሰው ዘር መነሻ'
    ],
    detailsOm: [
      'Bakkeewwan hambaa UNESCO 9 ol kan qabdu',
      'Qubee durii hanga ammaatti tajaajila kennu: Gi\'izii',
      'Bakka argama Luusii (Dinqinesh) fi madda dhala namaa'
    ]
  },
  {
    id: 'flowers',
    iconName: 'Flower2',
    titleEn: 'Adey Abeba — Yellow Blooms of Hope',
    titleAm: 'የመስከረም አደይ አበባ',
    titleOm: 'Abaaboo Keelloo (Adey Abeba)',
    descEn: 'The radiant yellow endemic daisy that blankets valleys exclusively during Meskerem, embodying resurrection, renewal, and golden sunshine.',
    descAm: 'በመስከረም ወር ብቻ የሚፈካውና ሜዳዎችን በወርቃማ ቢጫ ቀለም የሚያሸብርቀው የደስታና የብርሃን ተምሳሌት።',
    descOm: 'Abaaboo addaa yeroo birraa dirree uffisu, mallattoo ifaa fi haaromsaati.',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=1000&auto=format&fit=crop',
    tagEn: 'Flowers',
    tagAm: 'አደይ አበባ',
    tagOm: 'Abaaboo',
    detailsEn: [
      'Botanical species Bidens macroptera, native to the Ethiopian high-altitude plateaus',
      'Gathered by children during dawn walks to gift family members and neighborhood elders',
      'Signals the official departure of the rainy season and the arrival of 13 months of sunshine'
    ],
    detailsAm: [
      'ቢደንስ ማክሮፕተራ የሚባል በኢትዮጵያ ደጋማ ቦታዎች ብቻ የሚበቅል ልዩ አበባ',
      'ሕፃናት በማለዳ ቆርጠው ለወላጆቻቸውና ለጎረቤቶቻቸው በደስታ የሚያበረክቱት',
      'ክረምቱ መውጣቱንና የአዲሱ ዘመን ጸሐይ መውጣቷን የሚያበስር'
    ],
    detailsOm: [
      'Abaaboo qulqulluu tabba Itoophiyaa irratti ba\'u',
      'Daa\'imman maatiif kennuuf subiin funaanu',
      'Ganni darbee ifti aduu dhufuu isaa labsina'
    ]
  },
  {
    id: 'music',
    iconName: 'Music',
    titleEn: 'Traditional Music & Sacred Instruments',
    titleAm: 'የበዓል ሙዚቃና መሣሪያዎች',
    titleOm: 'Muziiqaa fi Meeshaalee Aadaa',
    descEn: 'The captivating sound of the 6-stringed Krar lyre, the 1-stringed Masenqo fiddle, Washint flute, and resonating Kebero drums.',
    descAm: 'የስድስት ባለአውታሩ ክራር፣ የአንድ አውታሩ መሰንቆ፣ ዋሽንት እና የከበሮ ምት የታከለበት የበዓል ድምቀት።',
    descOm: 'Sagalee addaa Kiraara, Masanqoo, Waashintii fi Dibbee aadaa kan ayyaana bareechu.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    tagEn: 'Music',
    tagAm: 'ሙዚቃ',
    tagOm: 'Muziiqaa',
    detailsEn: [
      'Anchored around four primary unique pentatonic scales (Qenet): Tizita, Bati, Ambassel, and Anchihoye',
      'Accompanies traditional call-and-response songs like Abebayehosh and festive shoulder dances (Eskista)',
      'Rich poetic lyrics known as Sem-ena-Worq (Wax and Gold) embodying double-layered wisdom'
    ],
    detailsAm: [
      'በአራቱ ዋና ዋና ቅኝቶች (ትዝታ፣ ባቲ፣ አምባሰል፣ አንቺሆዬ) ላይ የተመሠረተ',
      'ከአበባየሁሽ እና ከእስክስታ ጭፈራ ጋር በጋራ የሚቀርብ',
      'በሰምና ወርቅ ጥበባዊ ግጥሞች የተሞላ'
    ],
    detailsOm: [
      'Qo\'annoowwan sagalee aadaa afran irratti kan hundaa\'e',
      'Sirboota shamarranii fi sirba aadaa wajjiin kan dhihaatu',
      'Walaloo fi yeedaloo bareedaa kan qabu'
    ]
  },
  {
    id: 'clothing',
    iconName: 'Sparkles',
    titleEn: 'Traditional Clothing (Habesha Kemis & Woyaa)',
    titleAm: 'ባህላዊ አልባሳት',
    titleOm: 'Uffata Aadaa',
    descEn: 'Handwoven Shemma cotton adorned with vibrant Tibeb embroidered borders, worn in diverse regional styles across Ethiopia.',
    descAm: 'በጥበብ ድንበር የተዋበ በእጅ የተፈተለ የጥጥ ሸማ፣ የሀበሻ ቀሚስ፣ ነጠላና የክልሎች ልዩ ልዩ ባህላዊ አልባሳት።',
    descOm: 'Uffata aadaa Shemmaa fi Woyaa, callee fi miidhagina aadaa adda addaa ummata Itoophiyaatiin uffatamu.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    tagEn: 'Clothing',
    tagAm: 'አልባሳት',
    tagOm: 'Uffata',
    detailsEn: [
      'Woven from pure organic Ethiopian highland cotton using traditional foot-looms',
      'Intricate geometric Tibeb patterns woven along the hem and collar signifying regional identity',
      'Worn with pride during church services, New Year reunions, and bridal gatherings'
    ],
    detailsAm: [
      'ከንጹሕ የሀገር ውስጥ ጥጥ በእጅ በተሠሩ የሸማ ዕቃዎች የተሸመነ',
      'በአንገትና በዘርፉ ላይ በልዩ የጥበብ ጌጥ የተዋበ',
      'ለአዲስ ዓመት፣ ለሠርግ እና ለበዓላት በክብር የሚለበስ'
    ],
    detailsOm: [
      'Jirbii qulqulluu irraa harkaan kan hojjetamu',
      'Miidhagina keelloo fi callee adda addaatiin kan faayamu',
      'Ayyaana bara haaraa fi cidha irratti uffatama'
    ]
  },
  {
    id: 'coffee',
    iconName: 'Coffee',
    titleEn: 'The Sacred Coffee Ceremony (Buna)',
    titleAm: 'የኢትዮጵያ የቡና ሥነ-ሥርዓት',
    titleOm: 'Sirna Bunaa Itoophiyaa',
    descEn: 'Roasting green heirloom beans over open charcoal, infusing with fragrant Frankincense (Itan), served in Cini cups from a clay Jebena.',
    descAm: 'የቡና ዛፍ መገኛ ከሆነችው ሀገር፣ በከሰል ተቆልቶ በጭስና እጣን ታጅቦ በጀበና የሚፈላልግ የቡና ሥነ-ሥርዓት።',
    descOm: 'Buna lalisaa lafaa qotamee ibiddaan waadamee, aara itaniin faayamee Jabanaatiin kan dhihaatu.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
    tagEn: 'Coffee Ceremony',
    tagAm: 'የቡና ሥርዓት',
    tagOm: 'Sirna Bunaa',
    detailsEn: [
      'Three consecutive rounds of brewing: Abol (first), Tona (second), and Baraka (blessing)',
      'Accompanied by freshly roasted popcorn (Fendisha) scattered over fresh green grass (Ketema)',
      'Ethiopia is the biological birthplace of Coffea Arabica (originating in Kaffa forests)'
    ],
    detailsAm: [
      'ሦስት ዙሮች፡ አቦል (የመጀመሪያ)፣ ቶና (ሁለተኛ) እና በረካ (በረከት)',
      'በቄጠማ ምንጣፍ ላይ በሚቀርብ ፈንዲሻና ቆሎ የታጀበ',
      'ኢትዮጵያ የቡና ዓረቢካ መገኛ ናት'
    ],
    detailsOm: [
      'Marsaa sadii qaba: Abol, Tona, fi Barakaa',
      'Asheeta/Fandishaa wajjiin marga citaa irratti dhihaata',
      'Itoophiyaan bakka dhaloota buna Arabikaati'
    ]
  },
  {
    id: 'food',
    iconName: 'UtensilsCrossed',
    titleEn: 'Culinary Celebrations & Feasts',
    titleAm: 'የአዲስ ዓመት ምግቦችና ድግስ',
    titleOm: 'Nyaata Aadaa fi Ayyaanaa',
    descEn: 'Sponge Injera paired with slow-cooked spicy Doro Wat chicken stew, Kitfo, Defo Dabo festive spiced bread, and sweet Tej honey wine.',
    descAm: 'በጥንቃቄ የተዘጋጀ የዶሮ ወጥ፣ እንጀራ፣ ክትፎ፣ የተቆረሰ ድፎ ዳቦ እና ጣፋጭ የማር ጠጅ።',
    descOm: 'Injeeraa, Doro Wat, Kitfoo, Dabboo aadaa fi Daadhii dammaa kan ayyaana irratti dhihaatu.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
    tagEn: 'Food & Feasts',
    tagAm: 'ምግብና ድግስ',
    tagOm: 'Nyaata',
    detailsEn: [
      'Doro Wat is simmered with slow-caramelized red onions and fragrant Berbere spice for hours',
      'Teff grain is gluten-free, highly nutritious, and indigenous to the Ethiopian plateaus',
      'Eaten communally from a large Mesob woven basket representing social unity and togetherness'
    ],
    detailsAm: [
      'ዶሮ ወጥ በርካታ ሽንኩርትና የደለዘ በርበሬ ተንተክትኮ የሚዘጋጅ ተወዳጅ የበዓል ምግብ ነው',
      'ጤፍ በኢትዮጵያ ብቻ የሚበቅል እጅግ ጠቃሚና ከግሉተን ነጻ የሆነ እህል ነው',
      'በጋራ ከመሶብ መብላት የአንድነትና የፍቅር ማሳያ ነው'
    ],
    detailsOm: [
      'Doro Wat sa\'aatii hedduuf suuta bilcheeffama',
      'Xaafii nyaata fayya qabeessa fi Itoophiyaa qofatti jalqaba argamedha',
      'Masoobii irraa waliin nyaachuun tokkummaa agarsiisa'
    ]
  },
  {
    id: 'family',
    iconName: 'Users',
    titleEn: 'Family Gathering & Communal Unity',
    titleAm: 'የቤተሰብ ፍቅርና የአንድነት ገበታ',
    titleOm: 'Tokkummaa Maatii fi Hawaasaa',
    descEn: 'Homes are swept clean and adorned with green Ketema reeds. Relatives travel across regions and oceans to reunite around one hearth.',
    descAm: 'ቤቶች ጸድተው በለምለም ቄጠማ ይጎዘጎዛሉ፤ ከቅርብም ከሩቅም ያሉ ዘመዳሞች ተሰባስበው በአንድነት ይደሰታሉ።',
    descOm: 'Manni qulqullaa\'ee marga laliisaan faayama; firoonni fagoo fi dhihoo jiran walitti dhufanii gammadu.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
    tagEn: 'Family',
    tagAm: 'ቤተሰብ',
    tagOm: 'Maatii',
    detailsEn: [
      'Spreading fresh Ketema reeds on living room floors brings the scent of the countryside indoors',
      'Sharing ceremonial bread (Defo Dabo) sliced by the household head and given to each child',
      'Singing, storytelling, and recounting ancestral genealogies late into the golden evening'
    ],
    detailsAm: [
      'የተቆረጠው ለምለም ቄጠማ በቤት ውስጥ የገጠርንና የተፈጥሮን መዓዛ ይፈጥራል',
      'ድፎ ዳቦ በክብር ተቆርሶ ለሁሉም እኩል ይታደላል',
      'የቀደሙ አባቶችን ታሪክ እያወጉ ማምሸት'
    ],
    detailsOm: [
      'Marga citaa afuun urgooftuu uumamaa mana keessa fiduu',
      'Dabboo aadaa wal qooddachuun wal kabajuu',
      'Seenaa durii walii himuun yeroo dabarsuu'
    ]
  },
  {
    id: 'tradition',
    iconName: 'HeartHandshake',
    titleEn: 'Community Unity & Elder Blessings',
    titleAm: 'የሽማግሌዎች ምርቃትና ማኅበራዊ አንድነት',
    titleOm: 'Tokkummaa fi Eebba Maanguddootaa',
    descEn: 'At dawn, church bells chime, incense billows, and elders lay their hands upon youths, speaking ancient proverbs of peace and unity.',
    descAm: 'በማለዳ የቤተክርስቲያን ቃጭሎች ያሰማሉ፤ አባቶችና እናቶች ልጆቻቸውን በመመረቅ የበረከት ቃል ይዘራሉ፤ ፍቅር ይነግሣል።',
    descOm: 'Bariidhaan sagaleen kadhannaa dhaga\'ama; maanguddoonni eebba kennanii nagaa labsu.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop',
    tagEn: 'Community',
    tagAm: 'ማኅበረሰብ',
    tagOm: 'Hawaasa',
    detailsEn: [
      'Elders recite prayers for rain, national prosperity, harmony among neighbors, and protection',
      'Younger generations kiss the knees and hands of parents as a gesture of filial reverence',
      'Reconciliation of past disputes so every soul steps into the New Year with a clean conscience'
    ],
    detailsAm: [
      'ሽማግሌዎች ለሀገር ሰላም፣ ለእርሻ በረከትና ለሕዝቦች አንድነት ምርቃት ይሰጣሉ',
      'ታናናሾች የወላጆችን እጅና ጉልበት በመሳም አክብሮታቸውን ይገልጻሉ',
      'የተጣሉ የሚታረቁበትና በይቅርታ አዲስ ሕይወት የሚጀመርበት'
    ],
    detailsOm: [
      'Nagaa biyyaa fi badhaadhinaaf eebbi ni kennama',
      'Dhaloonni haaraan maanguddootaaf kabaja agarsiisu',
      'Walgirritti araaramanii nagaan waliin ta\'u'
    ]
  }
];

export const LANDSCAPES: LandscapeItem[] = [
  {
    id: 'lalibela',
    nameEn: 'Rock-Hewn Churches of Lalibela',
    nameAm: 'የላሊበላ ፍልፍል አብያተ ክርስቲያናት',
    nameOm: 'Bataskaana Dhagaa Lalibalaa',
    regionEn: 'Amhara Region • Lasta Mountains',
    regionAm: 'አማራ ክልል • ላስታ ተራሮች',
    regionOm: 'Naannoo Amaaraa • Gaara Laastaa',
    descriptionEn: 'Eleven monolithic subterranean churches chiseled out of solid volcanic basalt in the 12th century, known as the Eighth Wonder of the World.',
    descriptionAm: 'በ፲፪ኛው መቶ ክፍለ ዘመን ከአንድ ወጥ ቀይ እሳተ-ገሞራ ድንጋይ ተፈልፍለው የተሠሩ ፲፩ ድንቅ አብያተ ክርስቲያናት።',
    descriptionOm: 'Bataskaana monolithic 11 jaarraa 12ffaa keessa dhagaa irraa qorqamanii tolfaman.',
    image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=1000&auto=format&fit=crop',
    highlightEn: 'Bet Giyorgis (Church of St. George)',
    highlightAm: 'ቤተ ጊዮርጊስ',
    highlightOm: 'Beeta Giyoorgis'
  },
  {
    id: 'simien',
    nameEn: 'Simien Mountains National Park',
    nameAm: 'የስሜን ተራሮች ብሔራዊ ፓርክ',
    nameOm: 'Paarkii Biyyooleessa Gaarreen Siimiin',
    regionEn: 'North Gondar • "Roof of Africa"',
    regionAm: 'ሰሜን ጎንደር • የአፍሪካ ጣሪያ',
    regionOm: 'Gondar Kaabaa • Bantii Afrikaa',
    descriptionEn: 'Dramatic sheer cliff escarpments reaching over 4,500 meters at Ras Dashen, refuge of the iconic Walia Ibex, Gelada baboon, and Ethiopian Wolf.',
    descriptionAm: 'ከ፬,፭፻ ሜትር በላይ ከፍታ ያለው ራስ ዳሸን የሚገኝበት፣ የዋልያ፣ የጭላዳ ዝንጀሮ እና የቀይ ቀበሮ መኖሪያ።',
    descriptionOm: 'Gaarreen dhedheeroo meetira 4,500 ol ta\'an kan Raas Daashan keessatti argamu.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
    highlightEn: 'Ras Dashen Peak (4,550m)',
    highlightAm: 'ራስ ዳሸን ተራራ',
    highlightOm: 'Fiixee Raas Daashan'
  },
  {
    id: 'addis',
    nameEn: 'Addis Ababa & Entoto Hills',
    nameAm: 'አዲስ አበባ እና የእንጦጦ ተራራ',
    nameOm: 'Finfinnee fi Gaara Intxoxxoo',
    regionEn: 'Diplomatic Capital of Africa',
    regionAm: 'የአፍሪካ ዲፕሎማሲያዊ መዲና',
    regionOm: 'Magaalaa Guddoo Afrikaa',
    descriptionEn: 'The vibrant high-altitude metropolis combining modern architectural skylines, the African Union headquarters, and fragrant eucalyptus forests of Entoto.',
    descriptionAm: 'የአፍሪካ ኅብረት መቀመጫ፣ ዘመናዊ ሰማይ-ጠቀስ ሕንፃዎች እና ለምለም የባህር ዛፍ ደኖች የተዋሃዱባት ታላቅ ከተማ።',
    descriptionOm: 'Finfinnee - Magaalaa guddoo Afrikaa, teessoo Gamtaa Afrikaa fi bosona miidhagaa qabdu.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1000&auto=format&fit=crop',
    highlightEn: 'Entoto Park & Skyline View',
    highlightAm: 'የእንጦጦ ፓርክና የከተማዋ ውበት',
    highlightOm: 'Paarkii Intxoxxoo'
  },
  {
    id: 'gondar',
    nameEn: 'Fasil Ghebbi Castles of Gondar',
    nameAm: 'የፋሲል ግቢ ግንቦች (ጎንደር)',
    nameOm: 'Masaraa Faasiil (Gondar)',
    regionEn: 'Gondar • The Camelot of Africa',
    regionAm: 'ጎንደር • የአፍሪካ ካሜሎት',
    regionOm: 'Gondar • Masaraa Mootummaa',
    descriptionEn: 'The 17th-century fortress city built by Emperor Fasilides, featuring towering stone castles, battlements, and the tranquil Fasilides Bath.',
    descriptionAm: 'በ፲፯ኛው መቶ ክፍለ ዘመን በአፄ ፋሲለደስ የተገነቡ ድንቅ የድንጋይ ቤተ-መንግሥታትና ታሪካዊ ግንቦች።',
    descriptionOm: 'Jaarraa 17ffaa keessa mootii Faasiiliin kan ijaarame masaraa dhagaa bareedaa.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop',
    highlightEn: 'Fasilides Imperial Castle',
    highlightAm: 'የፋሲለደስ ቤተ-መንግሥት',
    highlightOm: 'Masaraa Faasiil'
  },
  {
    id: 'harar',
    nameEn: 'Historic Walled City of Harar Jugol',
    nameAm: 'የሀረር ጁጎል ታሪካዊ ቅጥር ከተማ',
    nameOm: 'Magaalaa Dallaadhaan Marfamte Harar',
    regionEn: 'Eastern Ethiopia • 4th Holy City',
    regionAm: 'ምሥራቅ ኢትዮጵያ • ጥንታዊቷ ቅጥር ከተማ',
    regionOm: 'Baha Itoophiyaa • Magaalaa Seenaa',
    descriptionEn: 'Enclosed by 16th-century walls, Harar houses 82 mosques, 102 shrines, vibrant colored doorways, and centuries-old hyena feeding rituals.',
    descriptionAm: 'በ፲፮ኛው ክፍለ ዘመን ግንብ የተከበበች፣ ፹፪ መስጊዶች እና ውብ ያሸበረቁ በሮች ያሉባት ጥንታዊት የባህል ማዕከል።',
    descriptionOm: 'Dallaa jaarraa 16ffaa keessa ijaarameen kan marfamte, masjiidota 82 fi aadaa addaa qabdu.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop',
    highlightEn: 'Jugol Gateways & Hyena Men',
    highlightAm: 'የጁጎል በሮች',
    highlightOm: 'Karra Jugol'
  },
  {
    id: 'bale',
    nameEn: 'Bale Mountains & Sanetti Plateau',
    nameAm: 'የባሌ ተራሮችና ሳኔቲ ፕላቶ',
    nameOm: 'Gaarreen Baalee fi Tulluu Diimtuu',
    regionEn: 'Oromia Region • Alpine Moorlands',
    regionAm: 'ኦሮሚያ ክልል • ሳኔቲ ደጋ',
    regionOm: 'Naannoo Oromiyaa • Gaara Baalee',
    descriptionEn: 'The largest Afro-alpine moorland habitat in Africa, home to giant Lobelia plants, Harenna Cloud Forest, and mountain streams.',
    descriptionAm: 'በአፍሪካ ትልቁ የአፍሮ-አልፓይን ምድር፣ ሐረና ደንና ብርቅዬ የዱር እንስሳት መገኛ።',
    descriptionOm: 'Bosona Harennaa fi bineensota addaa kan qabu lafa gaaraa adda ba\'e.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
    highlightEn: 'Tullu Dimtu (4,377m)',
    highlightAm: 'ቱሉ ዲምቱ',
    highlightOm: 'Tulluu Diimtuu'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    titleEn: 'Adey Abeba Golden Fields',
    titleAm: 'የአደይ አበባ ወርቃማ ሜዳ',
    titleOm: 'Dirree Abaaboo Keelloo',
    category: 'new_year',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=1000&auto=format&fit=crop',
    captionEn: 'Endless blooms of yellow Adey Abeba carpet the highland plains at the arrival of Meskerem.',
    captionAm: 'በመስከረም መባቻ የኢትዮጵያ ሜዳዎች በቢጫ አደይ አበባ ያሸበርቃሉ።',
    captionOm: 'Fuulbaana keessa dirreen Itoophiyaa abaaboo keelloon uffatama.',
    locationEn: 'Shoa Highlands'
  },
  {
    id: 'g-2',
    titleEn: 'Traditional Habesha Kemis Attire',
    titleAm: 'የተዋበች የሀበሻ ቀሚስ',
    titleOm: 'Uffata Aadaa Bareedaa',
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    captionEn: 'Hand-embroidered Tibeb patterns along pristine white cotton Shemma for the festive morning.',
    captionAm: 'በጥበብ ጌጥ የተሸለመ ነጭ የሸማ ቀሚስ ለበዓሉ ማለዳ።',
    captionOm: 'Uffata aadaa Shemmaa bareedaa ayyaanaaf uffatamu.',
    locationEn: 'Addis Ababa'
  },
  {
    id: 'g-3',
    titleEn: 'Spicy Doro Wat Celebration Feast',
    titleAm: 'የበዓሉ የዶሮ ወጥ ድግስ',
    titleOm: 'Nyaata Doro Wat Ayyaanaa',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
    captionEn: 'Freshly prepared chicken stew with slow-caramelized onions, berbere, and boiled eggs on teff injera.',
    captionAm: 'በእንጀራ ላይ በክብር የሚቀርብ ባህላዊ የዶሮ ወጥ ከእንቁላል ጋር።',
    captionOm: 'Doro Wat fi Injeeraa xaafii ayyaana irratti dhihaatu.',
    locationEn: 'Cultural Kitchen'
  },
  {
    id: 'g-4',
    titleEn: 'The Fragrant Buna Ceremony',
    titleAm: 'የተባረከው የቡና ሥነ-ሥርዓት',
    titleOm: 'Sirna Bunaa fi Itanii',
    category: 'culture',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
    captionEn: 'Clay Jebena pot steaming fresh roasted coffee over green grass reeds and frankincense smoke.',
    captionAm: 'በጀበና የተፈላ ቡና በእጣን ጭስና በቄጠማ ምንጣፍ ታጅቦ።',
    captionOm: 'Buna Jabanaa fi aara itanii mi\'aawaa.',
    locationEn: 'Debre Berhan'
  },
  {
    id: 'g-5',
    titleEn: 'Lalibela Rock-Cut Monolith',
    titleAm: 'የቅዱስ ጊዮርጊስ ፍልፍል ቤተክርስቲያን',
    titleOm: 'Bataskaana Qulqulluu Giyoorgis',
    category: 'historic',
    image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?q=80&w=1000&auto=format&fit=crop',
    captionEn: 'The iconic cross-shaped rock church of Bet Giyorgis standing timeless under the blue sky.',
    captionAm: 'የመስቀል ቅርፅ ያለው የቅዱስ ጊዮርጊስ ቤተክርስቲያን በላሊበላ።',
    captionOm: 'Bataskaana dhagaa qorqamee tolfame kan Lalibalaa.',
    locationEn: 'Lalibela'
  },
  {
    id: 'g-6',
    titleEn: 'Simien Peaks & Mist Horizons',
    titleAm: 'የስሜን ተራሮች ግርማ ሞገስ',
    titleOm: 'Fiixee Gaara Siimiin',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
    captionEn: 'Endless ridges where waterfalls tumble through dramatic volcanic amphitheaters.',
    captionAm: 'የተፈጥሮ ግርማ የተላበሱት ውብ የስሜን ሰንሰለታማ ተራሮች።',
    captionOm: 'Gaarreen gurguddoo fi uumama hawwataa Siimiin.',
    locationEn: 'Simien National Park'
  },
  {
    id: 'g-7',
    titleEn: 'Girls Singing Abebayehosh',
    titleAm: 'የአበባየሁሽ ልጃገረዶች ደስታ',
    titleOm: 'Shamarran Abebayehosh Sirban',
    category: 'new_year',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
    captionEn: 'Young Ethiopian maidens carrying freshly picked yellow blossoms celebrating the New Year dawn.',
    captionAm: 'በአዲስ ዓመት ማለዳ ቢጫ አደይ አበባ ይዘው አበባየሁሽ የሚዘፍኑ ልጃገረዶች።',
    captionOm: 'Shamarran abaaboo keelloo qabatanii ayyaana kabajan.',
    locationEn: 'Gondar Countryside'
  },
  {
    id: 'g-8',
    titleEn: 'Traditional Krar & Masenqo Plucking',
    titleAm: 'የክራርና የመሰንቆ ድምቀት',
    titleOm: 'Tapha Kiraara fi Masanqoo',
    category: 'culture',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    captionEn: 'Master musicians playing heartfelt celebration melodies on stringed acoustic treasures.',
    captionAm: 'በክራር አውታሮች የሚዘመር ልብ የሚነካ የበዓል ዜማ።',
    captionOm: 'Sagalee addaa meeshaalee muziiqaa aadaatiin taphatamu.',
    locationEn: 'Cultural Hall'
  }
];

export const CELEBRATION_TRACKS: CelebrationTrack[] = [
  {
    id: 'tizita',
    titleEn: 'Tizita Meskerem Dawn (ትዝታ)',
    titleAm: 'የመስከረም ንጋት ትዝታ',
    titleOm: 'Yadannoo Barii Fuulbaanaa',
    scaleType: 'tizita',
    tempo: 84,
    descriptionEn: 'Gentle, nostalgic acoustic celebration scale signifying dawn reflections.',
    descriptionAm: 'የጠዋት ጸጥታንና ትዝታን የሚያስታውስ የክራር ቅኝት።',
    descriptionOm: 'Yeedaloo boqonnaa qabu kan bariidhaan dhaggeeffatamu.'
  },
  {
    id: 'bati',
    titleEn: 'Adey Abeba Festival • Bati (ባቲ)',
    titleAm: 'የአደይ አበባ በዓል • ባቲ',
    titleOm: 'Ayyaana Abaaboo Keelloo • Baatii',
    scaleType: 'bati',
    tempo: 108,
    descriptionEn: 'Uplifting, festive, and energetic celebration mode celebrating blooming meadows.',
    descriptionAm: 'ደማቅ፣ አስደሳች እና ፈንጠዝያ የተሞላበት የበዓል ቅኝት።',
    descriptionOm: 'Sagalee gammachuu fi ayyaana ifaa calaqqisiisu.'
  },
  {
    id: 'anchihoye',
    titleEn: 'Abebayehosh Joy • Anchihoye (አንቺሆዬ)',
    titleAm: 'የአበባየሁሽ ደስታ • አንቺሆዬ',
    titleOm: 'Gammachuu Abebayehosh • Anchihoyee',
    scaleType: 'anchihoye',
    tempo: 120,
    descriptionEn: 'Rhythmic, uplifting beat inspired by youthful girls singing door-to-door.',
    descriptionAm: 'ልጃገረዶች በር ለበር እየዞሩ የሚዘፍኑበት ደማቅ የአበባየሁሽ ዜማ።',
    descriptionOm: 'Sirba shamarranii kan gammachuu guutuu qabu.'
  }
];
