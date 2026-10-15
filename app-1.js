
var PRODUCTS=[
 {id:"towels",zipCoverage:"Nationwide",name:"Paper Towels — 12 Pack",meta:"Bounty-style • 12 double rolls • Household staple",cat:"Groceries",offers:[
   {store:"Walmart",zipCoverage:"Nationwide",price:14.97,list:19.99,code:"PAPER5",desc:"$5 off household $25+",note:"Pickup today • 0.8 mi",save:25},
   {store:"Target",zipCoverage:"Nationwide",price:15.49,list:18.99,code:"TARGETHOME",desc:"15% off home essentials",note:"Pickup today • 1.2 mi",save:18},
   {store:"Costco",zipCoverage:"Nationwide",price:16.99,list:21.99,code:"— Member Price",desc:"Member price, no code needed",note:"Warehouse • Membership req.",save:23},
   {store:"Amazon",zipCoverage:"Nationwide",price:17.24,list:22.00,code:"SUBSAVE",desc:"Extra 5% with Subscribe & Save",note:"Delivery tomorrow",save:22},
   {store:"CVS",zipCoverage:"Nationwide",price:18.99,list:21.99,code:"CARE10",desc:"$3 ExtraBucks on $15+",note:"Pickup • 0.5 mi",save:14}
 ]},
 {id:"tide",zipCoverage:"Nationwide",name:"Tide Liquid Detergent — 92 oz",meta:"Original scent • 59 loads • Laundry",cat:"Groceries",offers:[
   {store:"Target",zipCoverage:"Nationwide",price:11.94,list:15.99,code:"TIDE3",desc:"$3 off Tide $12+",note:"Pickup today",save:25},
   {store:"Walmart",zipCoverage:"Nationwide",price:12.97,list:15.99,code:"LAUNDRY2",desc:"Rollback + $2 coupon",note:"Pickup today",save:19},
   {store:"Amazon",zipCoverage:"Nationwide",price:13.49,list:16.99,code:"CLIP15",desc:"Clip 15% coupon on page",note:"Delivery tomorrow",save:21},
   {store:"Kroger",zipCoverage:"Nationwide",price:13.99,list:15.99,code:"DIGITAL3",desc:"Digital coupon in app",note:"Pickup • 1.5 mi",save:13}
 ]},
 {id:"earbuds",zipCoverage:"Nationwide",name:"Wireless Noise-Cancelling Earbuds",meta:"Bluetooth 5.3 • USB-C case • 30-hr battery",cat:"Tech",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:49.99,list:89.99,code:"AUDIO20",desc:"20% off select audio",note:"Delivery tomorrow",save:44},
   {store:"Best Buy",zipCoverage:"Nationwide",price:54.99,list:89.99,code:"BBTECH10",desc:"$10 off tech $50+",note:"Pickup today",save:39},
   {store:"Walmart",zipCoverage:"Nationwide",price:57.00,list:84.00,code:"TECH57",desc:"Online-only price",note:"Delivery in 2 days",save:32},
   {store:"Target",zipCoverage:"Nationwide",price:59.99,list:79.99,code:"CIRCLE15",desc:"Target Circle 15% off",note:"Pickup today",save:25}
 ]},
 {id:"coffee",zipCoverage:"Nationwide",name:"Organic Coffee Beans — 2 lb Whole Bean",meta:"Medium roast • Fair-trade • Groceries",cat:"Groceries",offers:[
   {store:"Costco",zipCoverage:"Nationwide",price:16.49,list:24.99,code:"— Member Price",desc:"Member price, no code needed",note:"Warehouse",save:34},
   {store:"Amazon",zipCoverage:"Nationwide",price:17.99,list:26.99,code:"COFFEE15",desc:"15% Subscribe & Save",note:"Delivery tomorrow",save:33},
   {store:"Target",zipCoverage:"Nationwide",price:18.99,list:24.99,code:"PANTRY10",desc:"10% off pantry",note:"Pickup today",save:24},
   {store:"Walmart",zipCoverage:"Nationwide",price:19.47,list:25.47,code:"BREW3",desc:"$3 off coffee $18+",note:"Pickup today",save:24}
 ]},
 {id:"shoes",zipCoverage:"Nationwide",name:"Running Shoes — Everyday Trainer",meta:"Men's / Women's • Neutral cushion",cat:"Fashion",offers:[
   {store:"Nike.com",zipCoverage:"Nationwide",price:67.50,list:90.00,code:"MOVE25",desc:"25% off select styles",note:"Free shipping $50+",save:25},
   {store:"Dick's Sporting Goods",zipCoverage:"Nationwide",price:69.99,list:90.00,code:"SPORT10",desc:"$10 off $50+ footwear",note:"Pickup today",save:22},
   {store:"Amazon",zipCoverage:"Nationwide",price:71.20,list:95.00,code:"RUN20",desc:"20% off select sizes/colors",note:"Delivery tomorrow",save:25},
   {store:"Foot Locker",zipCoverage:"Nationwide",price:74.99,list:90.00,code:"KICKS15",desc:"15% off new arrivals",note:"Pickup / Delivery",save:17}
 ]},
 {id:"fryer",zipCoverage:"Nationwide",name:"Air Fryer — 5 Quart Digital",meta:"Home • 8 presets • Dishwasher-safe basket",cat:"Home",device:"Air Fryer",type:"product",keywords:"air fryer fryer kitchen appliance",offers:[
   {store:"Walmart",zipCoverage:"Nationwide",price:59.00,list:99.00,code:"HOME40",desc:"Clearance + coupon",note:"Pickup today",save:40},
   {store:"Target",zipCoverage:"Nationwide",price:64.99,list:99.99,code:"KITCHEN20",desc:"20% off kitchen electrics",note:"Pickup today",save:35},
   {store:"Best Buy",zipCoverage:"Nationwide",price:69.99,list:109.99,code:"APPLIANCE10",desc:"$10 off appliances $60+",note:"Pickup today",save:36},
   {store:"Amazon",zipCoverage:"Nationwide",price:72.99,list:119.99,code:"AIRFRY25",desc:"25% off with coupon on page",note:"Delivery tomorrow",save:39}
 ]},
 /* ——— Parts & misc for devices ——— */
 {id:"phone-case",zipCoverage:"Nationwide",name:"Phone Case — Shockproof MagSafe",meta:"Part / Accessory • Fits iPhone 15 / 15 Pro & Galaxy S24 • Clear & colors",cat:"Parts",device:"Phone",type:"part",keywords:"phone case iphone galaxy samsung cover shockproof magsafe mobile cell phone case",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:12.99,list:24.99,code:"CASE48",desc:"48% off select phone cases",note:"Delivery tomorrow",save:48},
   {store:"Walmart",zipCoverage:"Nationwide",price:13.97,list:22.97,code:"PHONECASE",desc:"$4 off cases $15+",note:"Pickup today",save:39},
   {store:"Target",zipCoverage:"Nationwide",price:16.99,list:24.99,code:"CIRCLE15",desc:"Target Circle 15% off tech accessories",note:"Pickup today",save:32},
   {store:"Best Buy",zipCoverage:"Nationwide",price:19.99,list:29.99,code:"BBTECH10",desc:"$10 off tech $50+ (bundle & save)",note:"Pickup today",save:33}
 ]},
 {id:"screen-protector",zipCoverage:"Nationwide",name:"Screen Protector — Tempered Glass 3-Pack",meta:"Part / Accessory • Fits iPhone 15 / Galaxy S24 • Alignment tray included",cat:"Parts",device:"Phone",type:"part",keywords:"screen protector tempered glass iphone galaxy phone screen guard misc",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:7.95,list:15.99,code:"GLASS50",desc:"50% off 3-pack protectors",note:"Delivery tomorrow",save:50},
   {store:"Walmart",zipCoverage:"Nationwide",price:8.88,list:14.88,code:"SCREEN4",desc:"$4 off screen care",note:"Pickup today",save:40},
   {store:"Target",zipCoverage:"Nationwide",price:11.99,list:17.99,code:"TECHACC",desc:"15% off phone accessories",note:"Pickup today",save:33},
   {store:"Best Buy",zipCoverage:"Nationwide",price:14.99,list:21.99,code:"BBTECH10",desc:"Bundle with case & save",note:"Pickup today",save:32}
 ]},
 {id:"usb-c-cable",zipCoverage:"Nationwide",name:"USB-C Charging Cable — 6ft Braided 100W",meta:"Part / Accessory • USB-C to USB-C • Phones, tablets & laptops • Fast charge",cat:"Parts",device:"Phone / Laptop",type:"part",keywords:"usb-c cable charging cable cord charger wire braided 100w type c misc cable",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:9.99,list:19.99,code:"CABLE50",desc:"50% off braided USB-C cables",note:"Delivery tomorrow",save:50},
   {store:"Walmart",zipCoverage:"Nationwide",price:11.47,list:18.47,code:"CHARGE3",desc:"$3 off charging accessories",note:"Pickup today",save:38},
   {store:"Best Buy",zipCoverage:"Nationwide",price:13.99,list:22.99,code:"BBTECH10",desc:"$10 off tech $50+",note:"Pickup today",save:39},
   {store:"Target",zipCoverage:"Nationwide",price:14.99,list:19.99,code:"CIRCLE15",desc:"Circle 15% off cables & chargers",note:"Pickup today",save:25}
 ]},
 {id:"laptop-charger",zipCoverage:"Nationwide",name:"Laptop Charger — USB-C 65W Universal",meta:"Part / Accessory • Fits most USB-C laptops, MacBook, Chromebook, Dell, HP, Lenovo",cat:"Parts",device:"Laptop",type:"part",keywords:"laptop charger adapter power supply usb-c 65w macbook chromebook notebook charger replacement",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:24.99,list:42.99,code:"LAPTOP42",desc:"42% off universal 65W chargers",note:"Delivery tomorrow",save:42},
   {store:"Best Buy",zipCoverage:"Nationwide",price:29.99,list:49.99,code:"BBTECH10",desc:"$10 off tech $50+ bundle",note:"Pickup today",save:40},
   {store:"Walmart",zipCoverage:"Nationwide",price:32.97,list:44.97,code:"POWER5",desc:"$5 off laptop accessories",note:"Pickup today",save:27},
   {store:"Target",zipCoverage:"Nationwide",price:34.99,list:44.99,code:"TECHACC",desc:"15% off laptop accessories",note:"Pickup today",save:22}
 ]},
 {id:"earbud-parts",zipCoverage:"Nationwide",name:"Earbud Tips & Replacement Charging Case",meta:"Part / Accessory • For wireless earbuds • Foam + silicone tips, USB-C case",cat:"Parts",device:"Earbuds",type:"part",keywords:"earbud tips replacement charging case earbuds tips foam silicone misc parts buds",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:11.99,list:21.99,code:"TIPS45",desc:"45% off earbud tips & cases",note:"Delivery tomorrow",save:45},
   {store:"Walmart",zipCoverage:"Nationwide",price:13.88,list:19.88,code:"AUDIO3",desc:"$3 off audio accessories",note:"Pickup today",save:30},
   {store:"Best Buy",zipCoverage:"Nationwide",price:16.99,list:24.99,code:"BBTECH10",desc:"$10 off tech $50+ bundle",note:"Pickup today",save:32},
   {store:"Target",zipCoverage:"Nationwide",price:17.99,list:24.99,code:"CIRCLE15",desc:"Circle 15% off audio",note:"Pickup today",save:28}
 ]},
 {id:"airfryer-parts",zipCoverage:"Nationwide",name:"Air Fryer Replacement Basket, Tray & Liners",meta:"Part / Accessory • Fits most 5-qt air fryers • Basket, crisper tray + 100 liners",cat:"Parts",device:"Air Fryer",type:"part",keywords:"air fryer basket replacement tray liners parchment crisper parts fryer accessory misc",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:18.99,list:32.99,code:"FRYERPART",desc:"Basket bundle + liners deal",note:"Delivery tomorrow",save:42},
   {store:"Walmart",zipCoverage:"Nationwide",price:19.97,list:29.97,code:"HOME40",desc:"Kitchen clearance + coupon",note:"Pickup today",save:33},
   {store:"Target",zipCoverage:"Nationwide",price:22.99,list:32.99,code:"KITCHEN20",desc:"20% off kitchen electrics & parts",note:"Pickup today",save:30},
   {store:"Best Buy",zipCoverage:"Nationwide",price:24.99,list:34.99,code:"APPLIANCE10",desc:"$10 off appliances $60+ bundle",note:"Pickup today",save:29}
 ]},
 {id:"coffee-parts",zipCoverage:"Nationwide",name:"Coffee Maker Water Filters, Descaler & Carafe",meta:"Part / Accessory • Fits Keurig, drip & espresso makers • 6 filters + descaler",cat:"Parts",device:"Coffee Maker",type:"part",keywords:"coffee filter water filter descaler carafe keurig coffee maker parts replacement misc",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:14.95,list:26.95,code:"COFFEEPART",desc:"Filters + descaler bundle",note:"Delivery tomorrow",save:45},
   {store:"Walmart",zipCoverage:"Nationwide",price:16.47,list:24.47,code:"BREW3",desc:"$3 off coffee $18+ bundle",note:"Pickup today",save:33},
   {store:"Target",zipCoverage:"Nationwide",price:17.99,list:25.99,code:"PANTRY10",desc:"10% off pantry & coffee",note:"Pickup today",save:31},
   {store:"Costco",zipCoverage:"Nationwide",price:19.99,list:29.99,code:"— Member Price",desc:"Member price, bulk filters",note:"Warehouse",save:33}
 ]},
 {id:"vacuum-parts",zipCoverage:"Nationwide",name:"Vacuum Filters, Bags & Belt — HEPA Replacement Kit",meta:"Part / Accessory • Fits Shark, Dyson-style & upright vacuums • Check model",cat:"Parts",device:"Vacuum",type:"part",keywords:"vacuum filter bags belt hepa replacement parts shark dyson vacuum cleaner misc",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:16.99,list:29.99,code:"VAC43",desc:"43% off HEPA filter kits",note:"Delivery tomorrow",save:43},
   {store:"Walmart",zipCoverage:"Nationwide",price:18.97,list:27.97,code:"CLEAN5",desc:"$5 off cleaning $25+",note:"Pickup today",save:32},
   {store:"Home Depot",zipCoverage:"Nationwide",price:21.97,list:31.97,code:"HDHOME",desc:"Home maintenance deal",note:"Pickup today",save:31},
   {store:"Target",zipCoverage:"Nationwide",price:22.99,list:29.99,code:"TARGETHOME",desc:"15% off home essentials",note:"Pickup today",save:23}
 ]},
 {id:"printer-ink",zipCoverage:"Nationwide",name:"Printer Ink & Toner — Replacement Cartridges",meta:"Part / Accessory • HP, Canon, Epson & Brother • Black + color packs",cat:"Parts",device:"Printer",type:"part",keywords:"printer ink toner cartridge replacement hp canon epson brother printing misc",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:28.99,list:49.99,code:"INK42",desc:"42% off compatible cartridges",note:"Delivery tomorrow",save:42},
   {store:"Walmart",zipCoverage:"Nationwide",price:32.97,list:49.97,code:"INK5",desc:"$5 off ink & toner",note:"Pickup today",save:34},
   {store:"Best Buy",zipCoverage:"Nationwide",price:36.99,list:54.99,code:"BBTECH10",desc:"$10 off tech $50+ bundle",note:"Pickup today",save:33},
   {store:"Target",zipCoverage:"Nationwide",price:38.99,list:52.99,code:"TECHACC",desc:"15% off printer supplies",note:"Pickup today",save:26}
 ]},
 {id:"fridge-filter",zipCoverage:"Nationwide",name:"Refrigerator Water Filter — Replacement",meta:"Part / Accessory • Fits Samsung, LG, Whirlpool & GE fridges • 6-month filter",cat:"Parts",device:"Refrigerator",type:"part",keywords:"fridge filter refrigerator water filter replacement samsung lg whirlpool ge misc",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:19.99,list:34.99,code:"FRIDGE43",desc:"43% off fridge filters",note:"Delivery tomorrow",save:43},
   {store:"Home Depot",zipCoverage:"Nationwide",price:24.97,list:39.97,code:"PAINT5",desc:"Appliance filter deal in store",note:"Pickup today",save:38},
   {store:"Walmart",zipCoverage:"Nationwide",price:26.97,list:37.97,code:"HOME5",desc:"$5 off home filters",note:"Pickup today",save:29},
   {store:"Best Buy",zipCoverage:"Nationwide",price:29.99,list:44.99,code:"APPLIANCE10",desc:"$10 off appliances $60+ bundle",note:"Pickup today",save:33}
 ]},
 {id:"hvac-filter",zipCoverage:"Nationwide",name:"HVAC / Furnace Air Filters — 4-Pack",meta:"Part / Accessory • Common sizes 16x25x1, 20x25x1 • MERV 11 • Home",cat:"Parts",device:"HVAC / Furnace",type:"part",keywords:"hvac filter furnace air filter merv home filter replacement misc house",offers:[
   {store:"Home Depot",zipCoverage:"Nationwide",price:29.97,list:47.97,code:"HDFILTER",desc:"4-pack filter deal",note:"Pickup today",save:38},
   {store:"Walmart",zipCoverage:"Nationwide",price:32.47,list:44.47,code:"HOME5",desc:"$5 off home filters",note:"Pickup today",save:27},
   {store:"Amazon",zipCoverage:"Nationwide",price:34.99,list:52.99,code:"HVAC34",desc:"Subscribe & Save extra off",note:"Delivery in 2 days",save:34},
   {store:"Target",zipCoverage:"Nationwide",price:36.99,list:46.99,code:"TARGETHOME",desc:"15% off home essentials",note:"Pickup today",save:21}
 ]},
 {id:"watch-parts",zipCoverage:"Nationwide",name:"Smartwatch Bands & Magnetic Charger",meta:"Part / Accessory • Fits Apple Watch & Galaxy Watch • Sport, leather + charger",cat:"Parts",device:"Smartwatch",type:"part",keywords:"watch band smartwatch strap charger apple watch galaxy watch band replacement misc",offers:[
   {store:"Amazon",zipCoverage:"Nationwide",price:13.99,list:27.99,code:"WATCH50",desc:"50% off bands & chargers",note:"Delivery tomorrow",save:50},
   {store:"Walmart",zipCoverage:"Nationwide",price:15.97,list:24.97,code:"WATCH4",desc:"$4 off watch accessories",note:"Pickup today",save:36},
   {store:"Target",zipCoverage:"Nationwide",price:18.99,list:27.99,code:"CIRCLE15",desc:"Circle 15% off wearables",note:"Pickup today",save:32},
   {store:"Best Buy",zipCoverage:"Nationwide",price:21.99,list:31.99,code:"BBTECH10",desc:"Bundle & save on tech",note:"Pickup today",save:31}
 ]},
 {id:"local-towels-allen",zipCoverage:["75013","75002"],name:"Paper Towels — 12 Pack (Local Pickup)",meta:"Local store • Allen / Lucas, TX • Household staple • Sample local listing",cat:"Groceries",offers:[
   {store:"Allen Family Market",zipCoverage:["75013","75002"],price:13.99,list:19.99,code:"ALLENLOCAL6",desc:"$6 off $30 at Allen Family Market",note:"Local pickup • Allen, TX 75013 • Sample local store",save:30},
   {store:"Lucas Corner Grocery",zipCoverage:["75013","75002"],price:14.49,list:19.49,code:"LUCAS5",desc:"$5 off household $25+ (local)",note:"Local pickup • Lucas, TX 75002 • Sample local store",save:26}
 ]},
 {id:"local-coffee-lucas",zipCoverage:["75013","75002"],name:"Local Roast Coffee Beans — 2 lb",meta:"Local roaster • Lucas, TX • Medium roast • Sample local listing",cat:"Groceries",offers:[
   {store:"Lucas Roast Co.",zipCoverage:["75013","75002"],price:15.99,list:23.99,code:"LUCASROAST15",desc:"15% off local roast beans",note:"Local pickup • Lucas, TX 75002 • Sample local store",save:33},
   {store:"Allen Coffee Corner",zipCoverage:["75013","75002"],price:16.99,list:24.99,code:"ALLENBREW",desc:"Local bakery & coffee counter deal",note:"Local pickup • Allen, TX 75013 • Sample local store",save:32}
 ]},
 {id:"local-phone-bundle-allen",zipCoverage:["75013"],name:"Phone Case + Screen Protector Bundle — Local Install",meta:"Part / Accessory • Local install included • Allen, TX only • Sample local listing",cat:"Parts",device:"Phone",type:"part",keywords:"phone case screen protector bundle local install allen repair misc",offers:[
   {store:"Allen Mobile Repair",zipCoverage:["75013"],price:19.99,list:34.99,code:"ALLENINSTALL",desc:"Free install with case + protector bundle",note:"Local service • Allen, TX 75013 only • Sample local store",save:43}
 ]}
];
var COUPONS=[
 {zipCoverage:"Nationwide",store:"Walmart",cat:"Groceries",title:"$5 off household essentials $25+",desc:"Paper goods, cleaning and laundry. Online and pickup.",code:"PAPER5",exp:"Oct 31, 2026",checked:"Oct 12, 2026",terms:"One per order. Excludes gift cards. Minimum $25 household subtotal before tax."},
 {zipCoverage:"Nationwide",store:"Target",cat:"Groceries",title:"15% off home & pantry with Circle",desc:"Stack with weekly sales on select home and grocery brands.",code:"TARGETHOME",exp:"Oct 28, 2026",checked:"Oct 12, 2026",terms:"Target Circle required (free). Some brand exclusions apply."},
 {zipCoverage:"Nationwide",store:"Amazon",cat:"Tech",title:"20% off select audio — earbuds & speakers",desc:"Discount shown after code at checkout on eligible items.",code:"AUDIO20",exp:"Nov 2, 2026",checked:"Oct 11, 2026",terms:"Eligible items only. One code per account. While supplies last."},
 {zipCoverage:"Nationwide",store:"Best Buy",cat:"Tech",title:"$10 off tech purchases $50+",desc:"Earbuds, accessories, smart home and more.",code:"BBTECH10",exp:"Oct 26, 2026",checked:"Oct 12, 2026",terms:"Excludes Apple, gift cards and select brands. In-store and online."},
 {zipCoverage:"Nationwide",store:"Nike.com",cat:"Fashion",title:"25% off select running styles",desc:"Everyday trainers and apparel in the sale collection.",code:"MOVE25",exp:"Nov 5, 2026",checked:"Oct 10, 2026",terms:"Select styles/colors only. Free shipping on orders $50+ for members (free to join)."},
 {zipCoverage:"Nationwide",store:"Kohl's",cat:"Fashion",title:"20% off your order + Kohl's Cash",desc:"Sitewide-style offer with usual exclusions — read the fine print.",code:"SAVE20NOW",exp:"Oct 27, 2026",checked:"Oct 12, 2026",terms:"Excludes prestige brands and select departments. Kohl's Cash earned on qualifying spend."},
 {zipCoverage:"Nationwide",store:"Walmart",cat:"Home",title:"Air fryers from $59 — save up to 40%",desc:"Clearance pricing on 5-qt digital models while stock lasts.",code:"HOME40",exp:"Oct 30, 2026",checked:"Oct 12, 2026",terms:"Store and online prices may vary. Limited quantities at clearance price."},
 {zipCoverage:"Nationwide",store:"Target",cat:"Home",title:"20% off kitchen electrics",desc:"Air fryers, blenders, coffee makers and more.",code:"KITCHEN20",exp:"Nov 1, 2026",checked:"Oct 11, 2026",terms:"One Circle offer per transaction. Excludes select premium brands."},
 {zipCoverage:"Nationwide",store:"CVS",cat:"Beauty",title:"$10 ExtraBucks on $30 beauty & health",desc:"Makeup, skincare, vitamins and personal care.",code:"BEAUTY10",exp:"Oct 29, 2026",checked:"Oct 12, 2026",terms:"ExtraCare required (free). ExtraBucks print at checkout / in app."},
 {zipCoverage:"Nationwide",store:"Ulta Beauty",cat:"Beauty",title:"$3.50 off qualifying $15+",desc:"A reader favorite for makeup, skincare and hair — check exclusions in the terms.",code:"ULTA350",exp:"Nov 3, 2026",checked:"Oct 10, 2026",terms:"Excludes fragrance, prestige cosmetics and salon services. One per guest."},
 {zipCoverage:"Nationwide",store:"Home Depot",cat:"Home",title:"$5 off $50 paint & supplies",desc:"For fall refresh projects — paint, brushes, rollers.",code:"PAINT5",exp:"Nov 8, 2026",checked:"Oct 11, 2026",terms:"One per order. Excludes gift cards and select pro pricing."},
 {zipCoverage:"Nationwide",store:"Kroger",cat:"Groceries",title:"$3 digital coupon on laundry $12+",desc:"Clip in app, applies automatically at checkout.",code:"DIGITAL3",exp:"Oct 31, 2026",checked:"Oct 12, 2026",terms:"Digital coupon must be clipped before checkout. Limit 1 per household."},
 {zipCoverage:"Nationwide",store:"Amazon",cat:"Parts",title:"Up to 50% off cables, cases & chargers",desc:"USB-C cables, phone cases, screen protectors and laptop chargers in the parts deal hub.",code:"CABLE50",exp:"Nov 2, 2026",checked:"Oct 12, 2026",terms:"Eligible parts & accessories only. Discount varies by item. One code per account."},
 {zipCoverage:"Nationwide",store:"Best Buy",cat:"Parts",title:"$10 off tech parts & accessories $50+",desc:"Chargers, cables, earbud cases, watch chargers and printer supplies — bundle small parts to hit $50.",code:"BBTECH10",exp:"Oct 26, 2026",checked:"Oct 12, 2026",terms:"Excludes Apple hardware, gift cards and select brands. Accessories & parts eligible."},
 {zipCoverage:"Nationwide",store:"Home Depot",cat:"Parts",title:"Save on fridge & HVAC replacement filters",desc:"Refrigerator water filters and furnace air filters — stock up before the season change.",code:"HDFILTER",exp:"Nov 8, 2026",checked:"Oct 11, 2026",terms:"Select sizes and brands. One per order. Check your model / size before buying."},
 {zipCoverage:"Nationwide",store:"Walmart",cat:"Parts",title:"$5 off home & device parts $25+",desc:"Vacuum filters, air fryer baskets, coffee filters and more everyday replacement parts.",code:"HOME5",exp:"Oct 30, 2026",checked:"Oct 12, 2026",terms:"Parts & home essentials $25+ subtotal. Excludes gift cards."},
 {zipCoverage:"Nationwide",store:"Target",cat:"Parts",title:"15% off parts & accessories with Circle",desc:"Phone accessories, cables, watch bands, printer ink and small-device parts.",code:"TECHACC",exp:"Oct 28, 2026",checked:"Oct 12, 2026",terms:"Target Circle required (free). Some brand exclusions apply."},
 {zipCoverage:"Nationwide",store:"Amazon",cat:"Parts",title:"42% off printer ink & compatible toner",desc:"Replacement cartridges for HP, Canon, Epson and Brother printers.",code:"INK42",exp:"Nov 4, 2026",checked:"Oct 12, 2026",terms:"Compatible cartridges only on select listings. Check printer model before ordering."},
 {zipCoverage:["75013","75002"],store:"Allen Family Market",cat:"Groceries",title:"$6 off $30 — local market deal (Allen / Lucas)",desc:"Sample local coupon. Paper goods, cleaning, coffee and pantry at your neighborhood market.",code:"ALLENLOCAL6",exp:"Nov 15, 2026",checked:"Oct 14, 2026",terms:"Sample local listing for the Allen/Lucas pilot. One per order. Local pickup in 75013 / 75002 only."},
 {zipCoverage:["75013","75002"],store:"Lucas Roast Co.",cat:"Groceries",title:"15% off local roast coffee beans",desc:"Sample local coupon. Fresh-roasted 2 lb bags, pickup in Lucas or Allen.",code:"LUCASROAST15",exp:"Nov 15, 2026",checked:"Oct 14, 2026",terms:"Sample local listing for the Allen/Lucas pilot. Local pickup in 75013 / 75002 only."},
 {zipCoverage:["75013"],store:"Allen Mobile Repair",cat:"Parts",title:"Free install with case + protector bundle",desc:"Sample local coupon. Buy the bundle in store in Allen (75013) and installation is free.",code:"ALLENINSTALL",exp:"Nov 15, 2026",checked:"Oct 14, 2026",terms:"Sample local listing. Allen, TX 75013 only. In-store service; check phone model fit in store."}
];
/* ===== Store directory: address, hours & contact =====
   Every value below is SAMPLE data, like the prices and codes — real
   stores (local sponsors especially) supply their real address, hours
   and contact details through the sponsor signup, and those replace
   these entries. National chains show a sample nearest-store entry. */
var STORE_INFO={
 "Walmart":{address:"Sample location — 2001 Coit Rd, Plano, TX 75075",hours:"Daily 6 AM–11 PM",phone:"(555) 013-1000",web:"walmart.com"},
 "Target":{address:"Sample location — 2200 Dallas Pkwy, Plano, TX 75024",hours:"Daily 8 AM–10 PM",phone:"(555) 013-1001",web:"target.com"},
 "Costco":{address:"Sample warehouse — 1701 Dallas Pkwy, Plano, TX 75024",hours:"Mon–Fri 10 AM–8:30 PM · Sat 9:30 AM–6 PM · Sun 10 AM–6 PM",phone:"(555) 013-1002",web:"costco.com"},
 "Amazon":{address:"Online only — no street address",hours:"Online 24/7",phone:"(555) 013-1003",web:"amazon.com"},
 "CVS":{address:"Sample location — 1210 W McDermott Dr, Allen, TX 75013",hours:"Daily 8 AM–10 PM · Pharmacy hours vary",phone:"(555) 013-1004",web:"cvs.com"},
 "Kroger":{address:"Sample location — 1320 W Exchange Pkwy, Allen, TX 75013",hours:"Daily 6 AM–1 AM",phone:"(555) 013-1005",web:"kroger.com"},
 "Best Buy":{address:"Sample location — 909 N Central Expy, Allen, TX 75013",hours:"Mon–Sat 10 AM–9 PM · Sun 11 AM–8 PM",phone:"(555) 013-1006",web:"bestbuy.com"},
 "Dick's Sporting Goods":{address:"Sample location — 190 Stacy Rd, Allen, TX 75002",hours:"Mon–Sat 9 AM–9 PM · Sun 10 AM–7 PM",phone:"(555) 013-1007",web:"dickssportinggoods.com"},
 "Foot Locker":{address:"Sample location — 820 W Stacy Rd, Allen, TX 75002",hours:"Mon–Sat 10 AM–9 PM · Sun 12–6 PM",phone:"(555) 013-1008",web:"footlocker.com"},
 "Nike.com":{address:"Online only — no street address",hours:"Online 24/7",phone:"(555) 013-1009",web:"nike.com"},
 "Home Depot":{address:"Sample location — 1110 E Main St, Allen, TX 75002",hours:"Mon–Sat 6 AM–10 PM · Sun 8 AM–8 PM",phone:"(555) 013-1010",web:"homedepot.com"},
 "Kohl's":{address:"Sample location — 2009 N Central Expy, Allen, TX 75013",hours:"Daily 9 AM–10 PM",phone:"(555) 013-1011",web:"kohls.com"},
 "Ulta Beauty":{address:"Sample location — 190 E Stacy Rd, Allen, TX 75002",hours:"Mon–Sat 10 AM–9 PM · Sun 11 AM–6 PM",phone:"(555) 013-1012",web:"ulta.com"},
 "Allen Family Market":{local:true,address:"104 S Allen Dr, Allen, TX 75013",hours:"Mon–Sat 7 AM–10 PM · Sun 8 AM–9 PM",phone:"(555) 013-7501",web:"allen-family-market.example.com"},
 "Lucas Corner Grocery":{local:true,address:"665 Country Club Rd, Lucas, TX 75002",hours:"Daily 7 AM–10 PM",phone:"(555) 013-7502",web:"lucas-corner-grocery.example.com"},
 "Lucas Roast Co.":{local:true,address:"700 Parker Rd, Lucas, TX 75002",hours:"Tue–Sat 8 AM–4 PM · Closed Sun–Mon",phone:"(555) 013-7503",web:"lucas-roast.example.com"},
 "Allen Coffee Corner":{local:true,address:"210 W Main St, Allen, TX 75013",hours:"Mon–Fri 6:30 AM–6 PM · Sat–Sun 7 AM–4 PM",phone:"(555) 013-7504",web:"allen-coffee-corner.example.com"},
 "Allen Mobile Repair":{local:true,address:"1521 N Central Expy, Allen, TX 75013",hours:"Mon–Sat 10 AM–8 PM · Sun 12–6 PM",phone:"(555) 013-7505",web:"allen-mobile-repair.example.com"}
};
function storeInfo(name){ return STORE_INFO[name]||null; }
/* Full block for store tiles: address, hours, phone, website + sample label */
function storeInfoHTML(name){
  var info=storeInfo(name); if(!info) return "";
  return '<span class="store-info">'
    +'<span>📍 '+esc(info.address)+'</span>'
    +'<span>🕐 '+esc(info.hours)+'</span>'
    +'<span>📞 '+esc(info.phone)+(info.web?' · 🌐 '+esc(info.web):"")+'</span>'
    +'<span class="store-info-sample">'+(info.local?"Sample local store info":"Sample store info")+'</span>'
    +'</span>';
}
/* One compact line for offer rows and coupon cards */
function storeInfoLine(name){
  var info=storeInfo(name); if(!info) return "";
  return '📍 '+esc(info.address)+' · 🕐 '+esc(info.hours)+' · 📞 '+esc(info.phone)+' · '+(info.local?"Sample local store info":"Sample store info");
}
/* ===== Coupon types (In-Store / Online / Both), shipping, order links & QR =====
   Every coupon/offer carries a `use` type with ONE primary action:
   in-store → "Show Code" (big checkout view for the register);
   online → "Order Online" (copy the code, then open the retailer's
   site — that outbound click is the sponsor click-through, logged).
   Shipping terms, order URLs and QR codes are SAMPLE placeholders
   until real sponsor data arrives through the sponsor signup pipeline.
   QR codes are NEVER fabricated: a coupon shows one only when its
   record carries a `qr` field (sponsor-supplied image/value, or a
   clearly labeled sample generated from the sample code text). */
function useLabel(use){ return use==="online"?"🌐 Online":use==="instore"?"🏪 In-Store":"🏪+🌐 In-Store & Online"; }
function useBadgeHTML(use){ return '<span class="use-badge '+use+'">'+useLabel(use)+'</span>'; }
function isOnlineOnlyStore(name){ var i=storeInfo(name); return !!(i&&/Online only/.test(i.address||"")); }
function deriveUse(store,text,local){
  if(local) return "instore";
  if(isOnlineOnlyStore(store)) return "online";
  var t=(text||"").toLowerCase();
  var pickup=t.indexOf("pickup")!==-1||t.indexOf("in store")!==-1||t.indexOf("in-store")!==-1;
  var delivery=t.indexOf("delivery")!==-1||t.indexOf("online")!==-1||t.indexOf("shipping")!==-1;
  if(pickup&&delivery) return "both";
  if(delivery) return "online";
  if(pickup) return "both";
  if(t.indexOf("warehouse")!==-1) return "instore";
  return "both";
}
function orderUrlFor(store){ var i=storeInfo(store); return i&&i.web?("https://www."+i.web):null; }
function fmtShipDay(d){ return d.toLocaleDateString([], {month:"short",day:"numeric"}); }
function shipFor(store){
  var table={"Amazon":{cost:0,eta:[1,2]},"Nike.com":{cost:0,eta:[3,5]},"Walmart":{cost:5.99,freeOver:35,eta:[2,4]},"Target":{cost:5.99,freeOver:35,eta:[2,3]},"Best Buy":{cost:3.99,eta:[2,3]},"Kohl's":{cost:8.95,freeOver:75,eta:[3,5]}};
  var t=table[store]||{cost:5.99,eta:[3,5]};
  var a=new Date(); a.setDate(a.getDate()+t.eta[0]);
  var b=new Date(); b.setDate(b.getDate()+t.eta[1]);
  var eta=(a.getMonth()===b.getMonth())?(fmtShipDay(a)+"–"+b.getDate()):(fmtShipDay(a)+" – "+fmtShipDay(b));
  return {from:store,cost:t.cost,freeOver:t.freeOver||null,etaText:eta};
}
function shipLineText(ship){
  if(!ship) return "";
  if(ship.cost===0) return "🚚 Free shipping · arrives "+ship.etaText+" · sample shipping";
  return "🚚 +"+money(ship.cost)+" shipping"+(ship.freeOver?(" · free over "+money(ship.freeOver).replace(".00","")):"")+" · arrives "+ship.etaText+" · sample shipping";
}
function offerActionsHTML(o){
  if(o.use==="online") return '<div><button class="get-btn">Order Online →</button><div class="offer-action-note">We copy the code for you</div><div><button class="proj-btn">+ Project</button></div></div>';
  if(o.use==="both") return '<div><button class="get-btn">Show Code</button><div><button class="order-link">or order online →</button></div><div><button class="proj-btn">+ Project</button></div></div>';
  return '<div><button class="get-btn">Show Code</button><div class="offer-action-note">Show it at the register</div><div><button class="proj-btn">+ Project</button></div></div>';
}
/* Sample QRs only for these sample codes — encoded value is plainly sample text */
var SAMPLE_QR_CODES={PAPER5:1,BEAUTY10:1,ALLENLOCAL6:1};
(function enrichCatalog(){
  COUPONS.forEach(function(c){
    if(SAMPLE_QR_CODES[c.code]&&!c.qr) c.qr={value:"RETAIL REMEDY SAMPLE COUPON — "+c.code+" at "+c.store,sample:true};
    var local=isLocalCoverage(c.zipCoverage);
    c.use=c.use||deriveUse(c.store,(c.title||"")+" "+(c.desc||""),local);
    if(c.use!=="instore") c.ship=c.ship||shipFor(c.store);
    c.url=c.url||orderUrlFor(c.store);
  });
  PRODUCTS.forEach(function(p){
    p.offers.forEach(function(o){
      var local=isLocalCoverage(o.zipCoverage)||isLocalCoverage(p.zipCoverage);
      o.use=o.use||deriveUse(o.store,(o.note||"")+" "+(o.desc||""),local);
      if(o.use!=="instore") o.ship=o.ship||shipFor(o.store);
      o.url=o.url||orderUrlFor(o.store);
      COUPONS.forEach(function(c){ if(c.store===o.store&&c.code===o.code){ o.exp=o.exp||c.exp; o.terms=o.terms||c.terms; if(c.qr) o.qr=o.qr||c.qr; } });
    });
  });
})();
var GUIDES={
 "towels":{title:"How to get this deal",sub:"Paper towels — stacking the coupon with a pickup order.",steps:[["Add the 12-pack (and any other household items) to your cart.","Household coupons like PAPER5 need a $25+ household subtotal before tax — add detergent or cleaning supplies you'd buy anyway to reach it."],["Enter the code at checkout.","Online or in the store app, paste the code in the promo box and confirm the discount shows before you pay."],["Choose pickup where it's offered.","Pickup avoids shipping fees and the price shown is the price you pay at the counter."]]},
 "tide":{title:"How to get this deal",sub:"Tide — digital coupons apply automatically once clipped.",steps:[["Clip the digital coupon in the store app first.","For Kroger/Target-style digital offers, the coupon must be clipped to your account before checkout or it won't apply."],["Add the 92 oz bottle to your cart.","Check the offer minimum (for example “Tide $12+”) — the 92 oz size qualifies on its own at most stores."],["Check out with the same account.","The discount comes off automatically at the register or in the app total."]]},
 "earbuds":{title:"How to set up your earbuds",sub:"From box to first listen in about two minutes.",steps:[["Charge the case first.","Plug the USB-C case in for 15–20 minutes — most pairing problems are just a flat battery."],["Open the case next to your phone.","With Bluetooth on, the earbuds should appear in your phone's Bluetooth list. Tap to pair."],["Test fit and noise cancelling.","Try each tip size until the seal feels snug — the seal is what makes the noise cancelling and bass work."]]},
 "coffee":{title:"How to brew it well",sub:"Whole-bean coffee — the basics that actually change the cup.",steps:[["Grind just before brewing.","Medium grind for drip, finer for espresso. Pre-ground loses aroma within days."],["Use the golden ratio.","About 1 tablespoon of coffee per 6 oz of water — adjust one spoon at a time to taste."],["Store the beans sealed and dark.","Airtight container, cupboard not fridge. Buy the 2 lb bag only if you'll finish it in about a month."]]},
 "shoes":{title:"How to check the fit before you keep them",sub:"Running shoes — a two-minute fit check saves a return.",steps:[["Try them on late in the day.","Feet swell slightly during the day — that's the size your run will feel."],["Leave a thumb's width at the toe.","Your toes should not touch the end; the heel should not slip when you walk."],["Walk, don't just stand.","Do a lap of the house on hard floor. Hot spots in two minutes become blisters in two miles."]]},
 "fryer":{title:"How to use your air fryer for the first time",sub:"New 5-qt air fryer — first-run steps.",steps:[["Wash the basket and tray.","Warm soapy water, dry fully. Run the empty fryer at 400°F for 5 minutes to burn off the factory coating smell."],["Don't overfill the basket.","Food in a single layer with space around it crisps; a heaped basket steams. Cook in two batches instead."],["Shake halfway through.","For fries, wings and nuggets, shake or flip at the halfway point for even browning."]]},
 "phone-case":{title:"How to install a phone case",sub:"Shockproof / MagSafe case — on in under a minute.",steps:[["Clean the phone first.","Wipe the back and edges — grit trapped under a case is what scratches phones."],["Start at the button side.","Seat the volume/power button edge first, then press each corner in with your thumbs until it clicks."],["Check the fit all round.","Buttons should click crisply and the case lip should sit above the screen on every side. Test your MagSafe charger or mount snaps on centered."]]},
 "screen-protector":{title:"How to apply a screen protector with no bubbles",sub:"Tempered glass — the alignment tray does most of the work.",steps:[["Clean the screen like you mean it.","Alcohol wipe, then microfiber, then the dust-removal sticker over the whole screen. Do this in a steamy bathroom to keep dust down if you can."],["Use the alignment tray.","Clip the tray over the phone, set the glass in it, and lower it straight down — don't slide it."],["Press from the center out.","Run a finger down the middle, then squeegee remaining bubbles to the edges with the card. Small edge bubbles usually settle within 24 hours."]]},
 "usb-c-cable":{title:"How to check you're getting fast charge",sub:"100W braided USB-C cable — wattage is a chain: charger, cable, device.",steps:[["Match the charger to the cable.","This cable carries up to 100W, but you'll only get the wattage your wall charger outputs — check its label."],["Plug straight into the device.","Avoid old USB-A adapters in the chain; they cap charging speed no matter how good the cable is."],["Confirm on screen.","Most phones and laptops show “Charging rapidly” or the wattage/time estimate — if it says “Slow charging”, swap the charger first."]]},
 "laptop-charger":{title:"How to replace a laptop charger safely",sub:"Universal USB-C 65W — match three things before you plug in.",steps:[["Match the wattage.","Your old charger's label shows its watts (for example 65W). The replacement must meet or exceed it — a lower-wattage charger will charge slowly or not at all under load."],["Match the connector.","USB-C fits most modern laptops; if your laptop uses a barrel tip, use the matching tip from the kit and confirm it's snug, not forced."],["Test before a workday.","Plug in and confirm the charging icon and rising percentage, then let it run 15 minutes — the brick should be warm, never hot or buzzing."]]},
 "earbud-parts":{title:"How to fit replacement tips & use the case",sub:"Earbud tips and charging case — fit is sound quality.",steps:[["Pick your tip size by seal, not comfort alone.","Start medium. The right tip seals with a gentle twist and outside noise drops noticeably."],["Twist tips on, don't force them.","Push the tip onto the nozzle and twist a quarter-turn until it sits flush — a loose tip stays in your ear when you pull the bud out."],["Pair the replacement case.","Put both buds in the new case, charge it, then open it near your phone and re-pair if the buds don't connect automatically."]]},
 "airfryer-parts":{title:"How to fit the basket, tray & liners",sub:"Air fryer replacement parts — test-fit cold, never hot.",steps:[["Test-fit the basket and tray cold.","The new basket should slide and latch like the original. If it drags or won't latch, you have the wrong size — don't force it."],["Wash before first use.","Warm soapy water for the basket and crisper tray; dry fully before cooking."],["Use liners safely.","Put the parchment liner in with food on top of it, never during preheat — an empty liner can lift into the heating element."]]},
 "coffee-parts":{title:"How to change the water filter & descale",sub:"Coffee maker filters, descaler and carafe — about 10 minutes, monthly payoff.",steps:[["Soak the new charcoal filter.","Submerge it in cold water for 5 minutes and rinse — dry charcoal dust can end up in your first pot otherwise."],["Swap it into the holder.","Drop the soaked filter into the reservoir holder where the old one sat, and note the date — most are good for about 2 months."],["Run a descale cycle.","Pour in the descaler solution, run the brew cycle the maker's instructions specify, then run two cycles of plain water before brewing coffee again."]]},
 "vacuum-parts":{title:"How to change vacuum filters, bags & belt",sub:"HEPA kit — unplug first, and check your model number.",steps:[["Unplug the vacuum and find your model.","The model number is on a sticker on the base or back. Match it to the kit's compatibility list before opening the pack."],["Swap the filter and bag.","Open the compartment, bag the old filter/bag straight into the trash (tap it empty outside first if reusable), and seat the new one flat with seals flush."],["Check the belt while you're in there.","If the brush roll doesn't spin, the belt is the usual cause: unhook the base plate, loop the new belt over the motor shaft and brush roll, and rotate the roll by hand to seat it before closing up."]]},
 "printer-ink":{title:"How to install replacement ink or toner",sub:"Cartridges — the tape tab is the step everyone forgets.",steps:[["Power the printer on and open the access door.","The carriage slides to the change position on its own. Pull the old cartridge out by its tab."],["Remove ALL the protective tape.","Pull the plastic tab and vent tape off the new cartridge — leaving it on is the #1 cause of “cartridge not recognized”."],["Click it in and run the alignment page.","Push the cartridge in until it clicks, close the door, and print the alignment/test page from the printer menu before your real document."]]},
 "fridge-filter":{title:"How to replace a refrigerator water filter",sub:"Six-month filter — five minutes, plus a flush you shouldn't skip.",steps:[["Find the filter housing.","Usually inside the fridge (top corner) or in the base grille. Twist the old filter a quarter-turn counter-clockwise and pull it out — have a towel ready for drips."],["Push the new filter in until it stops.","Then twist clockwise to lock. It should seat firmly with no wobble."],["Flush and reset.","Run about 2 gallons of water through the dispenser to clear air and carbon dust, then hold the filter-reset button on the panel for 3 seconds to restart the reminder."]]},
 "hvac-filter":{title:"How to change an HVAC / furnace filter",sub:"4-pack filters — the arrow on the frame is the whole trick.",steps:[["Turn the system off and find the slot.","The filter sits where the return duct meets the furnace/air handler, or behind the return grille. Note the size printed on the old filter's frame."],["Mind the airflow arrow.","The arrow on the new filter's frame points TOWARD the furnace (the direction air flows). In backwards, it filters poorly and strains the blower."],["Slide it in and set a reminder.","Most homes need a fresh filter every 1–3 months — write the change date on the frame edge with a marker."]]},
 "watch-parts":{title:"How to swap a watch band & use the charger",sub:"Smartwatch bands and magnetic charger — tool-free.",steps:[["Press the band-release button.","On the watch back, press the small release and slide the old band sideways out of its slot — it should never need force."],["Slide the new band in until it clicks.","The center lug locks with a click. Tug it gently: a band that slides freely isn't seated and can drop the watch."],["Align the magnetic charger.","It snaps onto the watch back in one orientation. If it doesn't snap centered, flip it — charging only starts when the puck sits flush."]]}
};
var guideOpen=false;
var wallet=[];
var currentProduct=PRODUCTS[0];
var currentCat="all";
var currentStore=null;
var currentZip="";

/* ===== Data tracking (in-memory only, this tab) =====
   Event schema v1 — one flat record per event, ready to export:
   { id, timestamp (ISO 8601), timestamp_ms, session_id, type,
     query, product_id, product_name, store, category,
     coupon_code, price, source, detail }
   No personal data is collected: only in-page actions and the
   search words the visitor typed on this page. Nothing is sent
   to a server; the log clears when the tab closes/refreshed. */
var EVENT_LOG=[];
var SESSION_ID="sess_"+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
var SESSION_STARTED_AT=new Date();
var EVENT_SEQ=0;
var SUPPRESS_COMPARE_LOG=false;
function trackEvent(type, payload){
  payload=payload||{};
  EVENT_SEQ++;
  var ev={
    id:"evt_"+SESSION_STARTED_AT.getTime().toString(36)+"_"+EVENT_SEQ,
    timestamp:new Date().toISOString(),
    timestamp_ms:Date.now(),
    session_id:SESSION_ID,
    type:type,
    query:payload.query||null,
    zip:(payload.zip!==undefined?payload.zip:(currentZip||null)),
    product_id:payload.product_id||null,
    product_name:payload.product_name||null,
    store:payload.store||null,
    category:payload.category||null,
    coupon_code:payload.coupon_code||null,
    price:(typeof payload.price==="number"?payload.price:null),
    source:payload.source||null,
    detail:payload.detail||""
  };
  EVENT_LOG.push(ev);
  renderActivity();
  return ev;
}
function eventsByType(type){ return EVENT_LOG.filter(function(e){return e.type===type;}); }
function countBy(key, typeFilter){
  var m={};
  EVENT_LOG.forEach(function(e){ if(typeFilter && e.type!==typeFilter) return; var k=e[key]; if(!k) return; m[k]=(m[k]||0)+1; });
  return Object.keys(m).map(function(k){return {key:k,count:m[k]};}).sort(function(a,b){return b.count-a.count;});
}
function fmtTime(iso){ try{ return new Date(iso).toLocaleTimeString([], {hour12:false}); }catch(e){ return iso; } }
function fmtDateTime(d){ try{ return d.toLocaleString([], {month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}); }catch(e){ return d.toISOString(); } }
function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function renderActivity(){
  var totalEl=document.getElementById("statTotal"); if(!totalEl) return;
  var searches=eventsByType("search");
  var compares=eventsByType("compare_view");
  var storeViews=eventsByType("compare_store_view");
  var reveals=eventsByType("coupon_reveal");
  var clips=eventsByType("coupon_clip");
  var copies=eventsByType("coupon_copy");
  var retailerClicks=eventsByType("retailer_click");
  var sponsorClicks=eventsByType("sponsor_click");
  totalEl.textContent=EVENT_LOG.length;
  document.getElementById("statSession").textContent="Session started "+fmtDateTime(SESSION_STARTED_AT)+" • "+SESSION_ID;
  document.getElementById("statSearches").textContent=searches.length;
  var topSearch=countBy("query","search")[0];
  document.getElementById("statTopSearch").textContent=topSearch?("Top: “"+topSearch.key+"” × "+topSearch.count):"No searches yet";
  document.getElementById("statCompare").textContent=compares.length;
  document.getElementById("statCompareStores").textContent=storeViews.length+" store rows viewed";
  document.getElementById("statReveals").textContent=reveals.length;
  document.getElementById("statClips").textContent=clips.length+" clipped to wallet";
  document.getElementById("statCopies").textContent=copies.length;
  document.getElementById("statRetailerClicks").textContent=retailerClicks.length;
  document.getElementById("statSponsorClicks").textContent=sponsorClicks.length;
  var last=EVENT_LOG[EVENT_LOG.length-1];
  document.getElementById("statLastEvent").textContent=last?fmtTime(last.timestamp):"—";
  document.getElementById("statLastDetail").textContent=last?(last.type+" — "+(last.detail||"")):"Nothing tracked yet — try a search above";
  /* By store (comparison views, plus reveals / retailer clicks for context) */
  var byStore={};
  EVENT_LOG.forEach(function(e){
    if(!e.store) return;
    if(!byStore[e.store]) byStore[e.store]={views:0,reveals:0,clicks:0};
    if(e.type==="compare_store_view") byStore[e.store].views++;
    if(e.type==="coupon_reveal") byStore[e.store].reveals++;
    if(e.type==="retailer_click") byStore[e.store].clicks++;
  });
  var storeKeys=Object.keys(byStore).sort(function(a,b){return byStore[b].views-byStore[a].views;});
  var bs=document.getElementById("byStoreList");
  bs.innerHTML=storeKeys.length?storeKeys.map(function(s){ var v=byStore[s]; return '<div class="breakdown-row"><span>'+esc(s)+'</span><b>'+v.views+' viewed · '+v.reveals+' revealed · '+v.clicks+' clicked</b></div>'; }).join(""):'<p style="color:var(--muted);font-size:14px;margin:0;">No comparison views yet.</p>';
  var byType=countBy("type");
  var bt=document.getElementById("byTypeList");
  bt.innerHTML=byType.length?byType.map(function(t){ return '<div class="breakdown-row"><span>'+esc(t.key)+'</span><b>'+t.count+'</b></div>'; }).join(""):'<p style="color:var(--muted);font-size:14px;margin:0;">No events yet.</p>';
  /* Recent feed, honoring filter */
  var filterEl=document.getElementById("eventFilter");
  var f=filterEl?filterEl.value:"all";
  var list=EVENT_LOG.slice().reverse().filter(function(e){
    if(f==="search") return e.type==="search";
    if(f==="compare") return e.type==="compare_view"||e.type==="compare_store_view";
    if(f==="coupon") return e.type==="coupon_reveal"||e.type==="coupon_copy"||e.type==="coupon_clip";
    if(f==="click") return e.type==="retailer_click"||e.type==="sponsor_click";
    if(f==="guide") return e.type==="guide_view"||e.type==="term_popout";
    return true;
  }).slice(0,30);
  var feed=document.getElementById("eventFeed");
  feed.innerHTML=list.length?list.map(function(e){
    var sub=[e.product_name,e.store,e.coupon_code?("code "+e.coupon_code):null,e.query?("“"+e.query+"”"):null].filter(Boolean).join(" • ");
    return '<div class="event-row"><span class="event-time">'+fmtTime(e.timestamp)+'</span><span class="event-type '+e.type+'">'+esc(e.type.replace(/_/g," "))+'</span><span class="event-detail">'+esc(e.detail||e.type)+(sub?'<small>'+esc(sub)+'</small>':"")+'</span></div>';
  }).join(""):'<p style="color:var(--muted);font-size:14px;">No events of this type yet in this session.</p>';
}
function buildExport(){
  return { schema_version:1, exported_at:new Date().toISOString(), session_id:SESSION_ID, session_started_at:SESSION_STARTED_AT.toISOString(), site:"Retail Remedy", note:"In-memory session log from this browser tab only. Only in-page actions and search words typed on this page were recorded; no personal identifiers were collected. price_snapshots is the accumulated dated price-point series for the whole catalog (one snapshot per calendar day, America/Chicago), persisted on this device in localStorage key rr_price_snapshots_v1; every current row is flagged data SAMPLE (labeled sample catalog prices, not live market prices).", event_count:EVENT_LOG.length, event_types:["search","compare_view","compare_store_view","coupon_reveal","coupon_copy","coupon_clip","coupon_used","checkout_view","checkout_run_start","checkout_run_step","checkout_run_complete","retailer_click","sponsor_click","store_filter","category_filter","guide_view","term_popout","project_add","cart_add","project_order","project_save","project_open","project_delete","project_rename","project_new","video_click","price_snapshot","activity_export","activity_clear"], events:EVENT_LOG, price_snapshot_count:PRICE_SNAPSHOTS.length, price_snapshot_days:PRICE_SNAPSHOTS.reduce(function(acc,r){ if(acc.indexOf(r.date)===-1) acc.push(r.date); return acc; },[]), price_snapshots:PRICE_SNAPSHOTS };
}
function exportJSONText(){ return JSON.stringify(buildExport(),null,2); }
function exportCSVText(){
  var cols=["id","timestamp","timestamp_ms","session_id","type","query","zip","product_id","product_name","store","category","coupon_code","price","source","detail"];
  function cell(v){ if(v==null) return ""; var s=String(v); return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s; }
  var lines=[cols.join(",")];
  EVENT_LOG.forEach(function(e){ lines.push(cols.map(function(c){return cell(e[c]);}).join(",")); });
  /* Price-snapshot series appended as its own section after the events
     table, so the accumulated dated price history exports with the log. */
  var scols=["date","product_id","product_name","store","price","list_price","coupon_code","discount_pct","data"];
  lines.push("");
  lines.push("# price_snapshots — one dated snapshot of the full catalog per calendar day (America/Chicago); data flag SAMPLE = labeled sample prices");
  lines.push(scols.join(","));
  PRICE_SNAPSHOTS.forEach(function(r){ lines.push(scols.map(function(c){return cell(r[c]);}).join(",")); });
  return lines.join("\n");
}
function downloadBlob(text, filename, mime){
  var blob=new Blob([text],{type:mime||"text/plain;charset=utf-8"});
  var a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=filename; a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);},2000);
}
/* Internal tracking only — analytics are not exposed to site visitors.
   No public window handle, dashboard, or export is published on the page. */

function money(n){return "$"+n.toFixed(2);}
/* ===== ZIP-isolated local offers =====
   Every product / coupon / store offer carries zipCoverage:
   "Nationwide" (shows for everyone) or an array of ZIP codes
   (local — shows ONLY when the shopper's ZIP is in the array).
   No ZIP entered = nationwide offers only + a prompt for local. */
function isLocalCoverage(cov){ return Array.isArray(cov)&&cov.length>0; }
function coverageLabel(cov){ return isLocalCoverage(cov)?("Local — ZIP "+cov.join(", ")):"Nationwide"; }
function visibleForZip(item,zip){
  if(isLocalCoverage(item&&item.zipCoverage)){
    if(!zip) return false;
    return item.zipCoverage.indexOf(zip)!==-1;
  }
  return true; /* Nationwide (or unspecified) shows for everyone */
}
function visibleOffersForZip(p,zip){
  return (p.offers||[]).filter(function(o){ return visibleForZip(o.zipCoverage?o:p,zip); });
}
function localProductsForZip(zip){
  if(!zip) return [];
  return PRODUCTS.filter(function(p){ return isLocalCoverage(p.zipCoverage)&&p.zipCoverage.indexOf(zip)!==-1; });
}
function localCouponsForZip(zip){
  if(!zip) return [];
  return COUPONS.filter(function(c){ return isLocalCoverage(c.zipCoverage)&&c.zipCoverage.indexOf(zip)!==-1; });
}
function ensureVisibleProduct(){
  if(visibleForZip(currentProduct,currentZip) && visibleOffersForZip(currentProduct,currentZip).length) return;
  for(var i=0;i<PRODUCTS.length;i++){ if(visibleForZip(PRODUCTS[i],currentZip)&&visibleOffersForZip(PRODUCTS[i],currentZip).length){ currentProduct=PRODUCTS[i]; return; } }
}
function updateZipUI(){
  var statusEl=document.getElementById("zipStatus");
  var bannerEl=document.getElementById("zipBanner");
  var noteEl=document.getElementById("couponZipNote");
  var lp=localProductsForZip(currentZip), lc=localCouponsForZip(currentZip);
  var totalLocal=lp.length+lc.length;
  var joinLine=' Own a local store? <a href="mailto:partners@retailremedy.net?subject=Join%20Retail%20Remedy%20—%20local%20store">Join free — partners@retailremedy.net</a>';
  if(!currentZip){
    if(statusEl){ statusEl.className="zip-status prompt"; statusEl.innerHTML='Showing <b>nationwide deals</b>. Add your <b>ZIP code</b> above — or tap <b>📍 Use my location</b> — to see local stores near you. Local deals only show for the ZIP they serve.'; }
    if(bannerEl){ bannerEl.className="zip-banner prompt"; bannerEl.innerHTML='Add a ZIP code in the search bar above to see local deals near you — right now you\'re seeing nationwide offers only.'; }
    if(noteEl){ noteEl.textContent="Showing nationwide coupons. Add a ZIP in the search bar to reveal local coupons for your area."; }
    return;
  }
  if(totalLocal>0){
    var msg='📍 <b>Local near '+esc(currentZip)+'</b> — '+totalLocal+' local listing'+(totalLocal>1?"s":"")+' for your ZIP (badged <b>Local</b>), shown alongside nationwide deals. Local deals for other ZIPs are hidden.';
    if(statusEl){ statusEl.className="zip-status found"; statusEl.innerHTML=msg; }
    if(bannerEl){ bannerEl.className="zip-banner found"; bannerEl.innerHTML=msg; }
    if(noteEl){ noteEl.innerHTML='Showing nationwide coupons + <b>'+lc.length+' local coupon'+(lc.length===1?"":"s")+' near '+esc(currentZip)+'</b>.'; }
  } else {
    var emptyMsg='No local stores in <b>'+esc(currentZip)+'</b> yet — nationwide deals below.'+joinLine;
    if(statusEl){ statusEl.className="zip-status empty"; statusEl.innerHTML=emptyMsg; }
    if(bannerEl){ bannerEl.className="zip-banner empty"; bannerEl.innerHTML=emptyMsg; }
    if(noteEl){ noteEl.innerHTML='No local coupons in <b>'+esc(currentZip)+'</b> yet — showing nationwide coupons.'+joinLine; }
  }
}
function readZipInput(){
  var el=document.getElementById("heroZip");
  var raw=(el?el.value:"").trim();
  if(!raw) return {zip:"",valid:true};
  if(!/^\d{5}$/.test(raw)) return {zip:"",valid:false,raw:raw};
  return {zip:raw,valid:true};
}
function productHaystack(p){ return [p.name||"",p.meta||"",p.cat||"",p.device||"",p.type||"",p.keywords||""].join(" ").toLowerCase(); }
function productScore(p,q){
  if(!q) return 0; var query=q.toLowerCase().trim(); if(!query) return 0;
  var hay=productHaystack(p); var name=(p.name||"").toLowerCase();
  var score=0;
  if(hay.indexOf(query)!==-1) score+=10;
  if(name.indexOf(query)!==-1) score+=6;
  query.split(/[\s\-/]+/).forEach(function(tok){ if(tok.length<3) return; if(name.indexOf(tok)!==-1) score+=3; else if(hay.indexOf(tok)!==-1) score+=2; });
  // synonyms / common misc terms
  var syn=[["charger","charging"],["cable","cord"],["filter","filters"],["case","cover"],["band","strap"],["ink","toner","cartridge"],["basket","tray","liner"],["tips","tip"],["screen","glass","protector"]];
  syn.forEach(function(pair){ if(query.indexOf(pair[0])!==-1 && hay.indexOf(pair[1])!==-1) score+=1; if(query.indexOf(pair[1])!==-1 && hay.indexOf(pair[0])!==-1) score+=1; });
  return score;
}
function productMatches(p,q){ if(!q) return true; return productScore(p,q)>=2; }
function renderProductList(filter){
  var el=document.getElementById("productList"); el.innerHTML="";
  var items=PRODUCTS.map(function(p){return {p:p,s:filter?productScore(p,filter):0};});
  if(filter){ items.sort(function(a,b){return b.s-a.s;}); }
  items.forEach(function(it){
    var p=it.p;
    if(!visibleForZip(p,currentZip)) return; /* ZIP isolation: locals for other ZIPs (or any local with no ZIP) never appear */
    if(filter && !productMatches(p,filter)) return;
    var visOffers=visibleOffersForZip(p,currentZip);
    if(!visOffers.length) return;
    var b=document.createElement("button"); b.className="prod-btn"+(p.id===currentProduct.id?" active":"");
    var badge=p.type==="part"?' <span class="part-badge">Part</span>':"";
    var localBadge=isLocalCoverage(p.zipCoverage)?' <span class="local-badge">Local — '+esc(currentZip||p.zipCoverage[0])+'</span>':"";
    var dev=p.device?(" • For: "+p.device):"";
    var covNote=isLocalCoverage(p.zipCoverage)?(" • "+coverageLabel(p.zipCoverage)+" • Sample local"):" • Nationwide";
    b.innerHTML="<b>"+p.name+badge+localBadge+"</b><span>"+p.cat+dev+covNote+" • From "+money(Math.min.apply(null,visOffers.map(function(o){return o.price;})))+"</span>";
    b.onclick=function(){currentProduct=p; trackEvent("compare_view",{product_id:p.id,product_name:p.name,category:p.cat,source:"product_list",detail:"Selected "+(p.type==="part"?"part/accessory":"product")+" from comparison list: "+p.name+(currentZip?(" (ZIP "+currentZip+")"):"")}); renderProductList(filter); renderOffers("product_list");};
    el.appendChild(b);
  });
  if(!el.children.length){ el.innerHTML="<p style='color:var(--muted);padding:12px;'>No matches"+(currentZip?(" for ZIP "+esc(currentZip)):"")+" — try a part or device: USB-C cable, vacuum filter, printer ink, phone case, air fryer basket, fridge filter, laptop charger, watch band.</p>"; }
}
function renderDevices(){
  var grid=document.getElementById("deviceGrid"); if(!grid) return; grid.innerHTML="";
  var devices={};
  PRODUCTS.forEach(function(p){ if(p.type!=="part") return; if(!visibleForZip(p,currentZip)) return; var d=p.device||"Other"; if(!devices[d]) devices[d]={device:d,parts:[],icon:"🔧"}; devices[d].parts.push(p); });
  var icons={"Phone":"📱","Phone / Laptop":"🔌","Laptop":"💻","Earbuds":"🎧","Air Fryer":"🍟","Coffee Maker":"☕","Vacuum":"🧹","Printer":"🖨️","Refrigerator":"🧊","HVAC / Furnace":"🌬️","Smartwatch":"⌚"};
  Object.keys(devices).sort().forEach(function(k){
    var g=devices[k]; var icon=icons[k]||"🔧";
    var names=g.parts.map(function(p){return p.name.split("—")[0].trim();}).join(", ");
    var b=document.createElement("button"); b.className="device-tile";
    b.innerHTML='<span class="device-icon">'+icon+'</span><b>'+k+'</b><span>'+g.parts.length+' part'+(g.parts.length>1?"s":"")+' — '+names+'</span><span style="font-weight:700;color:var(--green);margin-top:8px;">See parts &amp; prices →</span>';
    b.onclick=function(){ var first=g.parts[0]; currentProduct=first; trackEvent("search",{query:k+" parts",product_id:first.id,product_name:first.name,category:first.cat,source:"device_tile",detail:"Browsed parts by device: "+k+" ("+g.parts.length+" parts)"}); SUPPRESS_COMPARE_LOG=false; renderProductList(k); renderOffers("device_tile"); document.getElementById("compare").scrollIntoView({behavior:"smooth"}); showToast("Showing parts for "+k); };
    grid.appendChild(b);
  });
}
function renderOffers(source){
  ensureVisibleProduct();
  var visOffers=visibleOffersForZip(currentProduct,currentZip);
  /* Log one comparison view for the product + one store-view per store shown (visible-for-ZIP stores only) */
  if(!SUPPRESS_COMPARE_LOG){
    if(source!=="product_list"){ trackEvent("compare_view",{product_id:currentProduct.id,product_name:currentProduct.name,category:currentProduct.cat,source:source||"render",detail:"Viewed price comparison for "+currentProduct.name+(currentZip?(" (ZIP "+currentZip+")"):"")}); }
    visOffers.forEach(function(o){ trackEvent("compare_store_view",{product_id:currentProduct.id,product_name:currentProduct.name,store:o.store,category:currentProduct.cat,coupon_code:o.code,price:o.price,source:source||"render",detail:"Saw "+o.store+" at "+money(o.price)+" for "+currentProduct.name}); });
  }
  document.getElementById("compareTitle").textContent=currentProduct.name;
  var prodLocal=isLocalCoverage(currentProduct.zipCoverage);
  document.getElementById("offerProductName").innerHTML=esc(currentProduct.name)+(currentProduct.type==="part"?'<span class="part-badge">Part / Accessory</span>':"")+(prodLocal?'<span class="local-badge">Local — '+esc(currentZip||currentProduct.zipCoverage[0])+'</span>':"");
  document.getElementById("offerProductMeta").textContent=visOffers.length+" stores compared • "+coverageLabel(currentProduct.zipCoverage)+(prodLocal?" • Sample local listing":"")+(currentProduct.device?(" • Fits / for: "+currentProduct.device):"")+(currentProduct.type==="part"?" • Check your model number before buying":"");
  var sorted=visOffers.slice().sort(function(a,b){return a.price-b.price;});
  var best=sorted[0]; var worst=sorted[sorted.length-1];
  document.getElementById("bestBanner").textContent="🏆 Best: "+best.store+" "+money(best.price)+" — saves "+money(worst.price-best.price)+" vs. highest here";
  /* Instructions for this product / part */
  var guide=GUIDES[currentProduct.id];
  var gToggle=document.getElementById("guideToggle");
  var gBody=document.getElementById("guideBody");
  guideOpen=false; gBody.classList.remove("open"); gToggle.setAttribute("aria-expanded","false");
  gToggle.textContent=currentProduct.type==="part"?"📖 How to install / fit this part":"📖 How to use this — instructions";
  if(guide){
    document.getElementById("guideTitle").textContent=guide.title;
    document.getElementById("guideSub").textContent=guide.sub;
    document.getElementById("guideSteps").innerHTML=guide.steps.map(function(s){return "<li><b>"+esc(s[0])+"</b><span>"+esc(s[1])+"</span></li>";}).join("");
  } else {
    document.getElementById("guideTitle").textContent="How to use this";
    document.getElementById("guideSub").textContent="Follow the steps on the coupon card and the store's checkout instructions.";
    document.getElementById("guideSteps").innerHTML="";
  }
  /* The item's description (word-for-word) leads the how-to panel —
     the card face keeps name, fits line, prices and actions only. */
  var leadEl=document.getElementById("guideLead"); if(leadEl) leadEl.textContent=currentProduct.meta;
  annotateTerms(document.getElementById("guideBody"));
  /* Install-video button inside the how-to panel only (cards stay lean) */
  var gvBtn=document.getElementById("guideVideoBtn");
  if(gvBtn){
    var vTerms=(typeof videoTermsForProduct==="function")?videoTermsForProduct(currentProduct):"";
    gvBtn.dataset.terms=vTerms;
    gvBtn.onclick=function(){ openInstallVideos(currentProduct,{source:"guide_panel"}); };
    var gvTerms=document.getElementById("guideVideoTerms");
    if(gvTerms) gvTerms.textContent=vTerms?("Searches YouTube for: “"+vTerms+"” — real videos from YouTube, nothing hosted here."):"";
  }
  var rows=document.getElementById("offerRows"); rows.innerHTML="";
  sorted.forEach(function(o,i){
    var oLocal=isLocalCoverage(o.zipCoverage)||prodLocal;
    var row=document.createElement("div"); row.className="offer-row"+(i===0?" best":"");
    row.innerHTML='<div><div class="store-name">'+o.store+(i===0?' <span class="save-pill">LOWEST PRICE</span>':'')+useBadgeHTML(o.use)+(oLocal?'<span class="local-pill">Local — '+(currentZip||(o.zipCoverage&&o.zipCoverage[0])||"")+'</span>':"")+'</div><div class="store-meta">'+o.note+' • '+o.desc+'</div>'+(storeInfoLine(o.store)?('<div class="offer-info">'+storeInfoLine(o.store)+'</div>'):"")+'</div>'
      +'<div class="price"><s>'+money(o.list)+'</s><b>'+money(o.price)+'</b><div><span class="save-pill">Save '+o.save+'%</span></div>'
      +(o.use!=="instore"&&o.ship?('<div class="ship-line">'+esc(shipLineText(o.ship))+'</div><div class="order-total">Order total '+money(o.price+(o.ship.cost||0))+' before tax · sample</div>'):"")
      +'</div>'
      +offerActionsHTML(o);
    var item=itemFromOffer(o);
    var getBtn=row.querySelector(".get-btn");
    if(getBtn){
      if(o.use==="online"){ getBtn.onclick=function(){ orderOnline(item,"offer_row"); }; }
      else { getBtn.onclick=function(){ getBtn.textContent="✓ In your wallet — Show Code"; openCheckoutView(item,{source:"offer_row"}); }; }
    }
    var ol=row.querySelector(".order-link");
    if(ol) ol.onclick=function(){ orderOnline(item,"offer_row"); };
    var pb=row.querySelector(".proj-btn");
    if(pb) pb.onclick=function(){ addToProject(item); };
    rows.appendChild(row);
  });
}
function renderCoupons(){
  var grid=document.getElementById("couponGrid"); grid.innerHTML=""; var count=0;
  COUPONS.forEach(function(c,idx){
    if(!visibleForZip(c,currentZip)) return; /* ZIP isolation for coupons */
    if(currentCat!=="all" && c.cat!==currentCat) return;
    if(currentStore && c.store!==currentStore) return;
    count++;
    var cLocal=isLocalCoverage(c.zipCoverage);
    var card=document.createElement("article"); card.className="coupon";
    card.innerHTML='<div class="coupon-top"><div class="store-tag">'+c.store+(cLocal?'<span class="local-badge">Local</span>':"")+'</div><div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:flex-end;">'+useBadgeHTML(c.use)+'<span class="sample-badge">'+(cLocal?"Sample Local":"Sample Code")+'</span></div></div>'
      +'<h3>'+c.title+'</h3><p>'+c.desc+'</p>'
      +'<div class="meta"><span>⏰ Ends '+c.exp+'</span><span>✓ Last checked '+c.checked+'</span><span>'+c.cat+'</span><span>'+coverageLabel(c.zipCoverage)+'</span></div>'
      +(c.use!=="instore"&&c.ship?('<div class="ship-line">'+esc(shipLineText(c.ship))+'</div>'):"")
      +(storeInfoLine(c.store)?('<div class="offer-info">'+storeInfoLine(c.store)+'</div>'):"")
      +'<div class="code-reveal" style="display:block;">'+c.code+'</div>'
      +'<div class="coupon-actions" style="margin-top:12px;"><button class="clip-btn"></button></div>'
      +(c.use==="both"?'<button class="order-link">or order online →</button>':"")
      +'<button class="terms-toggle">See terms & exclusions ▾</button><div class="terms">'+c.terms+'</div>';
    var cItem=itemFromCoupon(c);
    var primary=card.querySelector(".clip-btn");
    if(c.use==="online"){ primary.textContent="🌐 Order Online →"; primary.onclick=function(){ orderOnline(cItem,"coupon_card"); }; }
    else { primary.textContent="🎟️ Show Code"; primary.onclick=function(){ primary.textContent="✓ In your wallet — Show Code"; openCheckoutView(cItem,{source:"coupon_card"}); }; }
    var col=card.querySelector(".order-link");
    if(col) col.onclick=function(){ orderOnline(cItem,"coupon_card"); };
    card.querySelector(".terms-toggle").onclick=function(e){ var t=card.querySelector(".terms"); t.classList.toggle("open"); e.target.textContent=t.classList.contains("open")?"Hide terms ▴":"See terms & exclusions ▾"; };
    grid.appendChild(card);
  });
  var emptyEl=document.getElementById("couponEmpty");
  emptyEl.style.display=count?"none":"block";
  if(!count){ emptyEl.innerHTML=currentZip?("No coupons in this category for ZIP "+esc(currentZip)+" — try All Coupons, or check the nationwide deals above."):("No coupons in this category yet — try All Coupons."); }
}
function renderStores(){
  var stores={}; COUPONS.forEach(function(c){ if(!visibleForZip(c,currentZip)) return; stores[c.store]=(stores[c.store]||0)+1; });
  PRODUCTS.forEach(function(p){ if(!visibleForZip(p,currentZip)) return; visibleOffersForZip(p,currentZip).forEach(function(o){ if(!(o.store in stores)) stores[o.store]=0; }); });
  var grid=document.getElementById("storeGrid"); grid.innerHTML="";
  Object.keys(stores).sort().forEach(function(s){
    var b=document.createElement("button"); b.className="store-tile";
    b.innerHTML="<b>"+s+"</b><span>"+(stores[s]?stores[s]+" coupon"+(stores[s]>1?"s":"")+" below":"Price-compared above")+" • Tap to filter →</span>"+storeInfoHTML(s);
    b.onclick=function(){ var selecting=(currentStore!==s); currentStore=(currentStore===s?null:s); currentCat="all"; document.querySelectorAll("#catPills .pill").forEach(function(p){p.classList.toggle("active",p.dataset.cat==="all");}); trackEvent("store_filter",{store:s,source:"store_tile",detail:(selecting?"Filtered coupons by store: ":"Cleared store filter: ")+s}); if(selecting){ trackEvent("retailer_click",{store:s,source:"store_tile",detail:"Clicked through to retailer coupons via store tile: "+s}); } renderCoupons(); document.getElementById("coupons").scrollIntoView({behavior:"smooth"}); showToast(currentStore?("Showing "+s+" coupons — tap again to clear"):"Showing all stores"); };
    grid.appendChild(b);
  });
}
var WALLET_SEQ=0;
function addToWallet(label,code,desc,extra){
  for(var i=0;i<wallet.length;i++){ if(wallet[i].code===code && wallet[i].label===label) { renderWallet(); return wallet[i]; } }
  var w={wid:++WALLET_SEQ,label:label,code:code,desc:desc,used:false};
  if(extra){ for(var k in extra){ if(extra[k]!==null&&extra[k]!==undefined) w[k]=extra[k]; } }
  wallet.push(w); renderWallet(); return w;
}
function isExpiredItem(w){ if(!w||!w.exp) return false; var d=new Date(w.exp+"T23:59:59"); if(isNaN(d)) return false; return d<new Date(); }
function walletSavings(items){ var t=0,any=false; items.forEach(function(w){ if(typeof w.price==="number"&&typeof w.list==="number"&&w.list>w.price){ t+=w.list-w.price; any=true; } }); return any?t:null; }
function walletItemHTML(w){
  var exp=isExpiredItem(w);
  return '<div class="wallet-item'+(w.used?" used":"")+'" data-wid="'+w.wid+'">'
    +'<b>'+esc(w.label)+'</b>'
    +(w.use?useBadgeHTML(w.use):"")
    +(exp&&!w.used?'<span class="expired-flag">Expired</span>':"")
    +(w.used?'<span class="used-flag">Used</span>':"")
    +'<span style="color:var(--muted);font-size:13px;display:block;">'+esc(w.desc||w.title||"")+'</span>'
    +'Code: <code>'+esc(w.code)+'</code>'
    +(typeof w.price==="number"?'<span style="font-size:13px;"> · You pay <b>'+money(w.price)+'</b>'+(typeof w.list==="number"?' <s style="color:var(--muted);">'+money(w.list)+'</s>':"")+'</span>':"")
    +(w.exp?'<span style="font-size:12.5px;color:var(--muted);display:block;">Ends '+esc(w.exp)+'</span>':"")
    +'</div>';
}
function renderWallet(){
  document.getElementById("walletCount").textContent=wallet.length;
  var fab=document.getElementById("walletFabCount"); if(fab) fab.textContent=wallet.length;
  var box=document.getElementById("walletItems");
  if(!wallet.length){ box.innerHTML="<p style='color:var(--muted);'>No coupons clipped yet. Tap “Show Code” or “Order Online” on any deal and it'll show up here, grouped by store.</p>"; return; }
  var used=wallet.filter(function(w){return w.used;});
  var active=wallet.filter(function(w){return !w.used;});
  var online=active.filter(function(w){return w.use==="online";});
  var inStore=active.filter(function(w){return w.use!=="online";});
  var html="";
  /* In-store coupons: grouped by store — each store redeems only its own */
  var byStore={}; inStore.forEach(function(w){ var s=w.store||"Store"; (byStore[s]=byStore[s]||[]).push(w); });
  Object.keys(byStore).sort().forEach(function(s){
    var items=byStore[s]; var sav=walletSavings(items);
    var runnable=items.filter(function(w){return !isExpiredItem(w);}).length;
    html+='<div class="wallet-group"><div class="wallet-group-head"><b>🏪 '+esc(s)+'</b><span>'+items.length+' coupon'+(items.length>1?"s":"")+(sav!==null?(" · save ~"+money(sav)):"")+'</span></div>'
      +(storeInfoLine(s)?'<div class="offer-info" style="margin:0 0 8px;">'+storeInfoLine(s)+'</div>':"")
      +items.map(walletItemHTML).join("")
      +(runnable?'<button class="start-checkout-btn" data-store="'+esc(s)+'">▶ Start Checkout at '+esc(s)+'</button>':"")
      +'</div>';
  });
  /* Online coupons: their own group, also split by store — each store ships separately */
  if(online.length){
    var oByStore={}; online.forEach(function(w){ var s=w.store||"Online store"; (oByStore[s]=oByStore[s]||[]).push(w); });
    var storeCount=Object.keys(oByStore).length;
    html+='<div class="wallet-group"><div class="wallet-group-head"><b>🌐 Online orders</b><span>'+online.length+' coupon'+(online.length>1?"s":"")+'</span></div>'
      +'<p style="font-size:12.5px;color:var(--muted);margin:0 0 8px;">Each store ships separately and charges its own shipping — '+storeCount+' store'+(storeCount>1?"s":"")+' = '+storeCount+' shipment'+(storeCount>1?"s":"")+'. Shipping shown is sample data.</p>';
    Object.keys(oByStore).sort().forEach(function(s){
      var items=oByStore[s];
      html+='<div class="wallet-group-head" style="border-bottom:1px dashed var(--line);"><b style="font-size:14.5px;">'+esc(s)+'</b><span>'+(items[0].ship?esc(shipLineText(items[0].ship)):"")+'</span></div>'
        +items.map(function(w){ return walletItemHTML(w)+'<button class="order-online-btn" data-wid="'+w.wid+'">Order Online at '+esc(s)+' →</button>'; }).join("");
    });
    html+='</div>';
  }
  if(used.length){
    html+='<div class="wallet-group"><div class="wallet-group-head"><b>Used</b><span>'+used.length+'</span></div>'+used.map(walletItemHTML).join("")+'</div>';
  }
  box.innerHTML=html;
  box.querySelectorAll(".wallet-item").forEach(function(el){
    el.addEventListener("click",function(){
      var w=null; wallet.forEach(function(x){ if(x.wid==el.dataset.wid) w=x; }); if(!w) return;
      if(w.use==="online") return; /* online items use their Order Online button */
      openCheckoutView(w,{source:"wallet_item",entry:w});
    });
  });
  box.querySelectorAll(".start-checkout-btn").forEach(function(b){ b.addEventListener("click",function(e){ e.stopPropagation(); startCheckoutRun(b.dataset.store); }); });
  box.querySelectorAll(".order-online-btn").forEach(function(b){ b.addEventListener("click",function(e){ e.stopPropagation(); var w=null; wallet.forEach(function(x){ if(x.wid==b.dataset.wid) w=x; }); if(w) orderOnline(w,"wallet"); }); });
}
function showToast(msg){ var t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show"); setTimeout(function(){t.classList.remove("show");},2600); }

/* ===== Coupon card pop-out (LocalRx-style) =====
   Clicking Get Free Coupon anywhere (price comparison or DIY guide
   price pop-out) presents the coupon as a card overlay instead of
   only revealing the code inline. Opening the card logs the reveal
   (+ retailer click where the old flow did), clips the coupon to
   the wallet, and the card's Copy Code button logs the copy. */
var couponModalData=null;
function projectKeyFor(item){ return (item.product_id||item.product_name||item.label||"")+"|"+(item.store||""); }
function isItemInCart(item){ if(typeof project==="undefined"||!project) return false; var k=projectKeyFor(item); for(var i=0;i<project.length;i++){ if(project[i].key===k) return true; } return false; }
function itemFromModalData(d){
  return {store:d.store,code:d.code,title:d.title||d.desc||"",desc:d.desc||"",product_id:d.product_id||null,product_name:d.product_name||d.title||"Coupon",category:d.category||null,price:(typeof d.price==="number"?d.price:null),list:(typeof d.list==="number"?d.list:null),save:(typeof d.save==="number"?d.save:null),use:d.use||null,ship:d.ship||null,url:d.url||null,exp:d.exp||null,terms:d.terms||null,walletLabel:d.walletLabel||((d.product_name||d.title||"Coupon")+" @ "+d.store)};
}
function syncCouponModalCartBtn(justAdded){
  var btn=document.getElementById("couponModalCartBtn"); if(!btn||!couponModalData) return;
  var link=document.getElementById("couponModalCartLink");
  var count=(typeof project!=="undefined"&&project)?project.length:0;
  if(link){ if(count>0){ link.style.display="inline-block"; link.textContent="Cart ("+count+") · View →"; } else { link.style.display="none"; } }
  if(justAdded) return; /* keep the brief "✓ Added to Cart!" confirmation visible */
  var inCart=isItemInCart(itemFromModalData(couponModalData));
  if(inCart){ btn.textContent="In Cart ✓ — View Cart"; btn.classList.add("in-cart"); }
  else { btn.textContent="🛒 Add to Cart"; btn.classList.remove("in-cart"); }
}
function isMemberCode(code){ return !code || code.indexOf("Member")!==-1; }
