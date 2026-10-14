
var PRODUCTS=[
 {id:"towels",name:"Paper Towels — 12 Pack",meta:"Bounty-style • 12 double rolls • Household staple",cat:"Groceries",offers:[
   {store:"Walmart",price:14.97,list:19.99,code:"PAPER5",desc:"$5 off household $25+",note:"Pickup today • 0.8 mi",save:25},
   {store:"Target",price:15.49,list:18.99,code:"TARGETHOME",desc:"15% off home essentials",note:"Pickup today • 1.2 mi",save:18},
   {store:"Costco",price:16.99,list:21.99,code:"— Member Price",desc:"Member price, no code needed",note:"Warehouse • Membership req.",save:23},
   {store:"Amazon",price:17.24,list:22.00,code:"SUBSAVE",desc:"Extra 5% with Subscribe & Save",note:"Delivery tomorrow",save:22},
   {store:"CVS",price:18.99,list:21.99,code:"CARE10",desc:"$3 ExtraBucks on $15+",note:"Pickup • 0.5 mi",save:14}
 ]},
 {id:"tide",name:"Tide Liquid Detergent — 92 oz",meta:"Original scent • 59 loads • Laundry",cat:"Groceries",offers:[
   {store:"Target",price:11.94,list:15.99,code:"TIDE3",desc:"$3 off Tide $12+",note:"Pickup today",save:25},
   {store:"Walmart",price:12.97,list:15.99,code:"LAUNDRY2",desc:"Rollback + $2 coupon",note:"Pickup today",save:19},
   {store:"Amazon",price:13.49,list:16.99,code:"CLIP15",desc:"Clip 15% coupon on page",note:"Delivery tomorrow",save:21},
   {store:"Kroger",price:13.99,list:15.99,code:"DIGITAL3",desc:"Digital coupon in app",note:"Pickup • 1.5 mi",save:13}
 ]},
 {id:"earbuds",name:"Wireless Noise-Cancelling Earbuds",meta:"Bluetooth 5.3 • USB-C case • 30-hr battery",cat:"Tech",offers:[
   {store:"Amazon",price:49.99,list:89.99,code:"AUDIO20",desc:"20% off select audio",note:"Delivery tomorrow",save:44},
   {store:"Best Buy",price:54.99,list:89.99,code:"BBTECH10",desc:"$10 off tech $50+",note:"Pickup today",save:39},
   {store:"Walmart",price:57.00,list:84.00,code:"TECH57",desc:"Online-only price",note:"Delivery in 2 days",save:32},
   {store:"Target",price:59.99,list:79.99,code:"CIRCLE15",desc:"Target Circle 15% off",note:"Pickup today",save:25}
 ]},
 {id:"coffee",name:"Organic Coffee Beans — 2 lb Whole Bean",meta:"Medium roast • Fair-trade • Groceries",cat:"Groceries",offers:[
   {store:"Costco",price:16.49,list:24.99,code:"— Member Price",desc:"Member price, no code needed",note:"Warehouse",save:34},
   {store:"Amazon",price:17.99,list:26.99,code:"COFFEE15",desc:"15% Subscribe & Save",note:"Delivery tomorrow",save:33},
   {store:"Target",price:18.99,list:24.99,code:"PANTRY10",desc:"10% off pantry",note:"Pickup today",save:24},
   {store:"Walmart",price:19.47,list:25.47,code:"BREW3",desc:"$3 off coffee $18+",note:"Pickup today",save:24}
 ]},
 {id:"shoes",name:"Running Shoes — Everyday Trainer",meta:"Men's / Women's • Neutral cushion",cat:"Fashion",offers:[
   {store:"Nike.com",price:67.50,list:90.00,code:"MOVE25",desc:"25% off select styles",note:"Free shipping $50+",save:25},
   {store:"Dick's Sporting Goods",price:69.99,list:90.00,code:"SPORT10",desc:"$10 off $50+ footwear",note:"Pickup today",save:22},
   {store:"Amazon",price:71.20,list:95.00,code:"RUN20",desc:"20% off select sizes/colors",note:"Delivery tomorrow",save:25},
   {store:"Foot Locker",price:74.99,list:90.00,code:"KICKS15",desc:"15% off new arrivals",note:"Pickup / Delivery",save:17}
 ]},
 {id:"fryer",name:"Air Fryer — 5 Quart Digital",meta:"Home • 8 presets • Dishwasher-safe basket",cat:"Home",device:"Air Fryer",type:"product",keywords:"air fryer fryer kitchen appliance",offers:[
   {store:"Walmart",price:59.00,list:99.00,code:"HOME40",desc:"Clearance + coupon",note:"Pickup today",save:40},
   {store:"Target",price:64.99,list:99.99,code:"KITCHEN20",desc:"20% off kitchen electrics",note:"Pickup today",save:35},
   {store:"Best Buy",price:69.99,list:109.99,code:"APPLIANCE10",desc:"$10 off appliances $60+",note:"Pickup today",save:36},
   {store:"Amazon",price:72.99,list:119.99,code:"AIRFRY25",desc:"25% off with coupon on page",note:"Delivery tomorrow",save:39}
 ]},
 /* ——— Parts & misc for devices ——— */
 {id:"phone-case",name:"Phone Case — Shockproof MagSafe",meta:"Part / Accessory • Fits iPhone 15 / 15 Pro & Galaxy S24 • Clear & colors",cat:"Parts",device:"Phone",type:"part",keywords:"phone case iphone galaxy samsung cover shockproof magsafe mobile cell phone case",offers:[
   {store:"Amazon",price:12.99,list:24.99,code:"CASE48",desc:"48% off select phone cases",note:"Delivery tomorrow",save:48},
   {store:"Walmart",price:13.97,list:22.97,code:"PHONECASE",desc:"$4 off cases $15+",note:"Pickup today",save:39},
   {store:"Target",price:16.99,list:24.99,code:"CIRCLE15",desc:"Target Circle 15% off tech accessories",note:"Pickup today",save:32},
   {store:"Best Buy",price:19.99,list:29.99,code:"BBTECH10",desc:"$10 off tech $50+ (bundle & save)",note:"Pickup today",save:33}
 ]},
 {id:"screen-protector",name:"Screen Protector — Tempered Glass 3-Pack",meta:"Part / Accessory • Fits iPhone 15 / Galaxy S24 • Alignment tray included",cat:"Parts",device:"Phone",type:"part",keywords:"screen protector tempered glass iphone galaxy phone screen guard misc",offers:[
   {store:"Amazon",price:7.95,list:15.99,code:"GLASS50",desc:"50% off 3-pack protectors",note:"Delivery tomorrow",save:50},
   {store:"Walmart",price:8.88,list:14.88,code:"SCREEN4",desc:"$4 off screen care",note:"Pickup today",save:40},
   {store:"Target",price:11.99,list:17.99,code:"TECHACC",desc:"15% off phone accessories",note:"Pickup today",save:33},
   {store:"Best Buy",price:14.99,list:21.99,code:"BBTECH10",desc:"Bundle with case & save",note:"Pickup today",save:32}
 ]},
 {id:"usb-c-cable",name:"USB-C Charging Cable — 6ft Braided 100W",meta:"Part / Accessory • USB-C to USB-C • Phones, tablets & laptops • Fast charge",cat:"Parts",device:"Phone / Laptop",type:"part",keywords:"usb-c cable charging cable cord charger wire braided 100w type c misc cable",offers:[
   {store:"Amazon",price:9.99,list:19.99,code:"CABLE50",desc:"50% off braided USB-C cables",note:"Delivery tomorrow",save:50},
   {store:"Walmart",price:11.47,list:18.47,code:"CHARGE3",desc:"$3 off charging accessories",note:"Pickup today",save:38},
   {store:"Best Buy",price:13.99,list:22.99,code:"BBTECH10",desc:"$10 off tech $50+",note:"Pickup today",save:39},
   {store:"Target",price:14.99,list:19.99,code:"CIRCLE15",desc:"Circle 15% off cables & chargers",note:"Pickup today",save:25}
 ]},
 {id:"laptop-charger",name:"Laptop Charger — USB-C 65W Universal",meta:"Part / Accessory • Fits most USB-C laptops, MacBook, Chromebook, Dell, HP, Lenovo",cat:"Parts",device:"Laptop",type:"part",keywords:"laptop charger adapter power supply usb-c 65w macbook chromebook notebook charger replacement",offers:[
   {store:"Amazon",price:24.99,list:42.99,code:"LAPTOP42",desc:"42% off universal 65W chargers",note:"Delivery tomorrow",save:42},
   {store:"Best Buy",price:29.99,list:49.99,code:"BBTECH10",desc:"$10 off tech $50+ bundle",note:"Pickup today",save:40},
   {store:"Walmart",price:32.97,list:44.97,code:"POWER5",desc:"$5 off laptop accessories",note:"Pickup today",save:27},
   {store:"Target",price:34.99,list:44.99,code:"TECHACC",desc:"15% off laptop accessories",note:"Pickup today",save:22}
 ]},
 {id:"earbud-parts",name:"Earbud Tips & Replacement Charging Case",meta:"Part / Accessory • For wireless earbuds • Foam + silicone tips, USB-C case",cat:"Parts",device:"Earbuds",type:"part",keywords:"earbud tips replacement charging case earbuds tips foam silicone misc parts buds",offers:[
   {store:"Amazon",price:11.99,list:21.99,code:"TIPS45",desc:"45% off earbud tips & cases",note:"Delivery tomorrow",save:45},
   {store:"Walmart",price:13.88,list:19.88,code:"AUDIO3",desc:"$3 off audio accessories",note:"Pickup today",save:30},
   {store:"Best Buy",price:16.99,list:24.99,code:"BBTECH10",desc:"$10 off tech $50+ bundle",note:"Pickup today",save:32},
   {store:"Target",price:17.99,list:24.99,code:"CIRCLE15",desc:"Circle 15% off audio",note:"Pickup today",save:28}
 ]},
 {id:"airfryer-parts",name:"Air Fryer Replacement Basket, Tray & Liners",meta:"Part / Accessory • Fits most 5-qt air fryers • Basket, crisper tray + 100 liners",cat:"Parts",device:"Air Fryer",type:"part",keywords:"air fryer basket replacement tray liners parchment crisper parts fryer accessory misc",offers:[
   {store:"Amazon",price:18.99,list:32.99,code:"FRYERPART",desc:"Basket bundle + liners deal",note:"Delivery tomorrow",save:42},
   {store:"Walmart",price:19.97,list:29.97,code:"HOME40",desc:"Kitchen clearance + coupon",note:"Pickup today",save:33},
   {store:"Target",price:22.99,list:32.99,code:"KITCHEN20",desc:"20% off kitchen electrics & parts",note:"Pickup today",save:30},
   {store:"Best Buy",price:24.99,list:34.99,code:"APPLIANCE10",desc:"$10 off appliances $60+ bundle",note:"Pickup today",save:29}
 ]},
 {id:"coffee-parts",name:"Coffee Maker Water Filters, Descaler & Carafe",meta:"Part / Accessory • Fits Keurig, drip & espresso makers • 6 filters + descaler",cat:"Parts",device:"Coffee Maker",type:"part",keywords:"coffee filter water filter descaler carafe keurig coffee maker parts replacement misc",offers:[
   {store:"Amazon",price:14.95,list:26.95,code:"COFFEEPART",desc:"Filters + descaler bundle",note:"Delivery tomorrow",save:45},
   {store:"Walmart",price:16.47,list:24.47,code:"BREW3",desc:"$3 off coffee $18+ bundle",note:"Pickup today",save:33},
   {store:"Target",price:17.99,list:25.99,code:"PANTRY10",desc:"10% off pantry & coffee",note:"Pickup today",save:31},
   {store:"Costco",price:19.99,list:29.99,code:"— Member Price",desc:"Member price, bulk filters",note:"Warehouse",save:33}
 ]},
 {id:"vacuum-parts",name:"Vacuum Filters, Bags & Belt — HEPA Replacement Kit",meta:"Part / Accessory • Fits Shark, Dyson-style & upright vacuums • Check model",cat:"Parts",device:"Vacuum",type:"part",keywords:"vacuum filter bags belt hepa replacement parts shark dyson vacuum cleaner misc",offers:[
   {store:"Amazon",price:16.99,list:29.99,code:"VAC43",desc:"43% off HEPA filter kits",note:"Delivery tomorrow",save:43},
   {store:"Walmart",price:18.97,list:27.97,code:"CLEAN5",desc:"$5 off cleaning $25+",note:"Pickup today",save:32},
   {store:"Home Depot",price:21.97,list:31.97,code:"HDHOME",desc:"Home maintenance deal",note:"Pickup today",save:31},
   {store:"Target",price:22.99,list:29.99,code:"TARGETHOME",desc:"15% off home essentials",note:"Pickup today",save:23}
 ]},
 {id:"printer-ink",name:"Printer Ink & Toner — Replacement Cartridges",meta:"Part / Accessory • HP, Canon, Epson & Brother • Black + color packs",cat:"Parts",device:"Printer",type:"part",keywords:"printer ink toner cartridge replacement hp canon epson brother printing misc",offers:[
   {store:"Amazon",price:28.99,list:49.99,code:"INK42",desc:"42% off compatible cartridges",note:"Delivery tomorrow",save:42},
   {store:"Walmart",price:32.97,list:49.97,code:"INK5",desc:"$5 off ink & toner",note:"Pickup today",save:34},
   {store:"Best Buy",price:36.99,list:54.99,code:"BBTECH10",desc:"$10 off tech $50+ bundle",note:"Pickup today",save:33},
   {store:"Target",price:38.99,list:52.99,code:"TECHACC",desc:"15% off printer supplies",note:"Pickup today",save:26}
 ]},
 {id:"fridge-filter",name:"Refrigerator Water Filter — Replacement",meta:"Part / Accessory • Fits Samsung, LG, Whirlpool & GE fridges • 6-month filter",cat:"Parts",device:"Refrigerator",type:"part",keywords:"fridge filter refrigerator water filter replacement samsung lg whirlpool ge misc",offers:[
   {store:"Amazon",price:19.99,list:34.99,code:"FRIDGE43",desc:"43% off fridge filters",note:"Delivery tomorrow",save:43},
   {store:"Home Depot",price:24.97,list:39.97,code:"PAINT5",desc:"Appliance filter deal in store",note:"Pickup today",save:38},
   {store:"Walmart",price:26.97,list:37.97,code:"HOME5",desc:"$5 off home filters",note:"Pickup today",save:29},
   {store:"Best Buy",price:29.99,list:44.99,code:"APPLIANCE10",desc:"$10 off appliances $60+ bundle",note:"Pickup today",save:33}
 ]},
 {id:"hvac-filter",name:"HVAC / Furnace Air Filters — 4-Pack",meta:"Part / Accessory • Common sizes 16x25x1, 20x25x1 • MERV 11 • Home",cat:"Parts",device:"HVAC / Furnace",type:"part",keywords:"hvac filter furnace air filter merv home filter replacement misc house",offers:[
   {store:"Home Depot",price:29.97,list:47.97,code:"HDFILTER",desc:"4-pack filter deal",note:"Pickup today",save:38},
   {store:"Walmart",price:32.47,list:44.47,code:"HOME5",desc:"$5 off home filters",note:"Pickup today",save:27},
   {store:"Amazon",price:34.99,list:52.99,code:"HVAC34",desc:"Subscribe & Save extra off",note:"Delivery in 2 days",save:34},
   {store:"Target",price:36.99,list:46.99,code:"TARGETHOME",desc:"15% off home essentials",note:"Pickup today",save:21}
 ]},
 {id:"watch-parts",name:"Smartwatch Bands & Magnetic Charger",meta:"Part / Accessory • Fits Apple Watch & Galaxy Watch • Sport, leather + charger",cat:"Parts",device:"Smartwatch",type:"part",keywords:"watch band smartwatch strap charger apple watch galaxy watch band replacement misc",offers:[
   {store:"Amazon",price:13.99,list:27.99,code:"WATCH50",desc:"50% off bands & chargers",note:"Delivery tomorrow",save:50},
   {store:"Walmart",price:15.97,list:24.97,code:"WATCH4",desc:"$4 off watch accessories",note:"Pickup today",save:36},
   {store:"Target",price:18.99,list:27.99,code:"CIRCLE15",desc:"Circle 15% off wearables",note:"Pickup today",save:32},
   {store:"Best Buy",price:21.99,list:31.99,code:"BBTECH10",desc:"Bundle & save on tech",note:"Pickup today",save:31}
 ]}
];
var COUPONS=[
 {store:"Walmart",cat:"Groceries",title:"$5 off household essentials $25+",desc:"Paper goods, cleaning and laundry. Online and pickup.",code:"PAPER5",exp:"Oct 31, 2026",checked:"Oct 12, 2026",terms:"One per order. Excludes gift cards. Minimum $25 household subtotal before tax."},
 {store:"Target",cat:"Groceries",title:"15% off home & pantry with Circle",desc:"Stack with weekly sales on select home and grocery brands.",code:"TARGETHOME",exp:"Oct 28, 2026",checked:"Oct 12, 2026",terms:"Target Circle required (free). Some brand exclusions apply."},
 {store:"Amazon",cat:"Tech",title:"20% off select audio — earbuds & speakers",desc:"Discount shown after code at checkout on eligible items.",code:"AUDIO20",exp:"Nov 2, 2026",checked:"Oct 11, 2026",terms:"Eligible items only. One code per account. While supplies last."},
 {store:"Best Buy",cat:"Tech",title:"$10 off tech purchases $50+",desc:"Earbuds, accessories, smart home and more.",code:"BBTECH10",exp:"Oct 26, 2026",checked:"Oct 12, 2026",terms:"Excludes Apple, gift cards and select brands. In-store and online."},
 {store:"Nike.com",cat:"Fashion",title:"25% off select running styles",desc:"Everyday trainers and apparel in the sale collection.",code:"MOVE25",exp:"Nov 5, 2026",checked:"Oct 10, 2026",terms:"Select styles/colors only. Free shipping on orders $50+ for members (free to join)."},
 {store:"Kohl's",cat:"Fashion",title:"20% off your order + Kohl's Cash",desc:"Sitewide-style offer with usual exclusions — read the fine print.",code:"SAVE20NOW",exp:"Oct 27, 2026",checked:"Oct 12, 2026",terms:"Excludes prestige brands and select departments. Kohl's Cash earned on qualifying spend."},
 {store:"Walmart",cat:"Home",title:"Air fryers from $59 — save up to 40%",desc:"Clearance pricing on 5-qt digital models while stock lasts.",code:"HOME40",exp:"Oct 30, 2026",checked:"Oct 12, 2026",terms:"Store and online prices may vary. Limited quantities at clearance price."},
 {store:"Target",cat:"Home",title:"20% off kitchen electrics",desc:"Air fryers, blenders, coffee makers and more.",code:"KITCHEN20",exp:"Nov 1, 2026",checked:"Oct 11, 2026",terms:"One Circle offer per transaction. Excludes select premium brands."},
 {store:"CVS",cat:"Beauty",title:"$10 ExtraBucks on $30 beauty & health",desc:"Makeup, skincare, vitamins and personal care.",code:"BEAUTY10",exp:"Oct 29, 2026",checked:"Oct 12, 2026",terms:"ExtraCare required (free). ExtraBucks print at checkout / in app."},
 {store:"Ulta Beauty",cat:"Beauty",title:"$3.50 off qualifying $15+",desc:"A reader favorite for makeup, skincare and hair — check exclusions in the terms.",code:"ULTA350",exp:"Nov 3, 2026",checked:"Oct 10, 2026",terms:"Excludes fragrance, prestige cosmetics and salon services. One per guest."},
 {store:"Home Depot",cat:"Home",title:"$5 off $50 paint & supplies",desc:"For fall refresh projects — paint, brushes, rollers.",code:"PAINT5",exp:"Nov 8, 2026",checked:"Oct 11, 2026",terms:"One per order. Excludes gift cards and select pro pricing."},
 {store:"Kroger",cat:"Groceries",title:"$3 digital coupon on laundry $12+",desc:"Clip in app, applies automatically at checkout.",code:"DIGITAL3",exp:"Oct 31, 2026",checked:"Oct 12, 2026",terms:"Digital coupon must be clipped before checkout. Limit 1 per household."},
 {store:"Amazon",cat:"Parts",title:"Up to 50% off cables, cases & chargers",desc:"USB-C cables, phone cases, screen protectors and laptop chargers in the parts deal hub.",code:"CABLE50",exp:"Nov 2, 2026",checked:"Oct 12, 2026",terms:"Eligible parts & accessories only. Discount varies by item. One code per account."},
 {store:"Best Buy",cat:"Parts",title:"$10 off tech parts & accessories $50+",desc:"Chargers, cables, earbud cases, watch chargers and printer supplies — bundle small parts to hit $50.",code:"BBTECH10",exp:"Oct 26, 2026",checked:"Oct 12, 2026",terms:"Excludes Apple hardware, gift cards and select brands. Accessories & parts eligible."},
 {store:"Home Depot",cat:"Parts",title:"Save on fridge & HVAC replacement filters",desc:"Refrigerator water filters and furnace air filters — stock up before the season change.",code:"HDFILTER",exp:"Nov 8, 2026",checked:"Oct 11, 2026",terms:"Select sizes and brands. One per order. Check your model / size before buying."},
 {store:"Walmart",cat:"Parts",title:"$5 off home & device parts $25+",desc:"Vacuum filters, air fryer baskets, coffee filters and more everyday replacement parts.",code:"HOME5",exp:"Oct 30, 2026",checked:"Oct 12, 2026",terms:"Parts & home essentials $25+ subtotal. Excludes gift cards."},
 {store:"Target",cat:"Parts",title:"15% off parts & accessories with Circle",desc:"Phone accessories, cables, watch bands, printer ink and small-device parts.",code:"TECHACC",exp:"Oct 28, 2026",checked:"Oct 12, 2026",terms:"Target Circle required (free). Some brand exclusions apply."},
 {store:"Amazon",cat:"Parts",title:"42% off printer ink & compatible toner",desc:"Replacement cartridges for HP, Canon, Epson and Brother printers.",code:"INK42",exp:"Nov 4, 2026",checked:"Oct 12, 2026",terms:"Compatible cartridges only on select listings. Check printer model before ordering."}
];
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
  return { schema_version:1, exported_at:new Date().toISOString(), session_id:SESSION_ID, session_started_at:SESSION_STARTED_AT.toISOString(), site:"Retail Remedy", note:"In-memory session log from this browser tab only. Only in-page actions and search words typed on this page were recorded; no personal identifiers were collected.", event_count:EVENT_LOG.length, event_types:["search","compare_view","compare_store_view","coupon_reveal","coupon_copy","coupon_clip","retailer_click","sponsor_click","store_filter","category_filter","guide_view","term_popout","activity_export","activity_clear"], events:EVENT_LOG };
}
function exportJSONText(){ return JSON.stringify(buildExport(),null,2); }
function exportCSVText(){
  var cols=["id","timestamp","timestamp_ms","session_id","type","query","product_id","product_name","store","category","coupon_code","price","source","detail"];
  function cell(v){ if(v==null) return ""; var s=String(v); return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s; }
  var lines=[cols.join(",")];
  EVENT_LOG.forEach(function(e){ lines.push(cols.map(function(c){return cell(e[c]);}).join(",")); });
  return lines.join("\n");
}
function downloadBlob(text, filename, mime){
  var blob=new Blob([text],{type:mime||"text/plain;charset=utf-8"});
  var a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=filename; a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);},2000);
}
/* Public handle for a later backend / analytics import */
window.ShopTracker={ get events(){return EVENT_LOG.slice();}, get sessionId(){return SESSION_ID;}, track:trackEvent, exportJSON:buildExport, exportCSVText:exportCSVText, summary:function(){return {total:EVENT_LOG.length, searches:eventsByType("search").length, compare_views:eventsByType("compare_view").length, compare_store_views:eventsByType("compare_store_view").length, coupon_reveals:eventsByType("coupon_reveal").length, coupon_copies:eventsByType("coupon_copy").length, coupon_clips:eventsByType("coupon_clip").length, retailer_clicks:eventsByType("retailer_click").length, sponsor_clicks:eventsByType("sponsor_click").length, by_store:countBy("store","compare_store_view"), by_type:countBy("type")};} };

function money(n){return "$"+n.toFixed(2);}
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
    if(filter && !productMatches(p,filter)) return;
    var b=document.createElement("button"); b.className="prod-btn"+(p.id===currentProduct.id?" active":"");
    var badge=p.type==="part"?' <span class="part-badge">Part</span>':"";
    var dev=p.device?(" • For: "+p.device):"";
    b.innerHTML="<b>"+p.name+badge+"</b><span>"+p.cat+dev+" • From "+money(Math.min.apply(null,p.offers.map(function(o){return o.price;})))+"</span>";
    b.onclick=function(){currentProduct=p; trackEvent("compare_view",{product_id:p.id,product_name:p.name,category:p.cat,source:"product_list",detail:"Selected "+(p.type==="part"?"part/accessory":"product")+" from comparison list: "+p.name}); renderProductList(filter); renderOffers("product_list");};
    el.appendChild(b);
  });
  if(!el.children.length){ el.innerHTML="<p style='color:var(--muted);padding:12px;'>No matches — try a part or device: USB-C cable, vacuum filter, printer ink, phone case, air fryer basket, fridge filter, laptop charger, watch band.</p>"; }
}
function renderDevices(){
  var grid=document.getElementById("deviceGrid"); if(!grid) return; grid.innerHTML="";
  var devices={};
  PRODUCTS.forEach(function(p){ if(p.type!=="part") return; var d=p.device||"Other"; if(!devices[d]) devices[d]={device:d,parts:[],icon:"🔧"}; devices[d].parts.push(p); });
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
  /* Log one comparison view for the product + one store-view per store shown */
  if(!SUPPRESS_COMPARE_LOG){
    if(source!=="product_list"){ trackEvent("compare_view",{product_id:currentProduct.id,product_name:currentProduct.name,category:currentProduct.cat,source:source||"render",detail:"Viewed price comparison for "+currentProduct.name}); }
    currentProduct.offers.forEach(function(o){ trackEvent("compare_store_view",{product_id:currentProduct.id,product_name:currentProduct.name,store:o.store,category:currentProduct.cat,coupon_code:o.code,price:o.price,source:source||"render",detail:"Saw "+o.store+" at "+money(o.price)+" for "+currentProduct.name}); });
  }
  document.getElementById("compareTitle").textContent=currentProduct.name;
  document.getElementById("offerProductName").innerHTML=esc(currentProduct.name)+(currentProduct.type==="part"?'<span class="part-badge">Part / Accessory</span>':"");
  document.getElementById("offerProductMeta").textContent=currentProduct.meta+" • "+currentProduct.offers.length+" stores compared"+(currentProduct.device?(" • Fits / for: "+currentProduct.device):"")+(currentProduct.type==="part"?" • Check your model number before buying":"");
  var sorted=currentProduct.offers.slice().sort(function(a,b){return a.price-b.price;});
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
  annotateTerms(document.getElementById("guideBody"));
  var rows=document.getElementById("offerRows"); rows.innerHTML="";
  sorted.forEach(function(o,i){
    var row=document.createElement("div"); row.className="offer-row"+(i===0?" best":"");
    row.innerHTML='<div><div class="store-name">'+o.store+(i===0?' <span class="save-pill">LOWEST PRICE</span>':'')+'</div><div class="store-meta">'+o.note+' • '+o.desc+'</div><div class="code-reveal" id="code-'+o.store.replace(/[^a-z0-9]/gi,'')+'">'+o.code+'</div></div>'
      +'<div class="price"><s>'+money(o.list)+'</s><b>'+money(o.price)+'</b><div><span class="save-pill">Save '+o.save+'%</span></div></div>'
      +'<div><button class="get-btn">Get Coupon</button><div style="font-size:12px;color:var(--muted);margin-top:6px;text-align:center;">Free • No sign-up</div></div>';
    var btn=row.querySelector(".get-btn");
    btn.onclick=function(){
      var cr=row.querySelector(".code-reveal"); cr.classList.add("show");
      btn.textContent="✓ Code Shown — Copy It"; btn.classList.add("secondary");
      trackEvent("coupon_reveal",{product_id:currentProduct.id,product_name:currentProduct.name,store:o.store,category:currentProduct.cat,coupon_code:o.code,price:o.price,source:"get_coupon",detail:"Revealed coupon for "+currentProduct.name+" at "+o.store});
      trackEvent("retailer_click",{product_id:currentProduct.id,product_name:currentProduct.name,store:o.store,category:currentProduct.cat,coupon_code:o.code,price:o.price,source:"get_coupon",detail:"Clicked through toward "+o.store+" via Get Coupon ("+currentProduct.name+")"});
      addToWallet(currentProduct.name+" @ "+o.store, o.code, o.desc);
      trackEvent("coupon_clip",{product_id:currentProduct.id,product_name:currentProduct.name,store:o.store,category:currentProduct.cat,coupon_code:o.code,source:"get_coupon",detail:"Clipped to wallet from comparison: "+currentProduct.name+" @ "+o.store});
      if(o.code.indexOf("Member")===-1 && navigator.clipboard){ navigator.clipboard.writeText(o.code).catch(function(){}); trackEvent("coupon_copy",{product_id:currentProduct.id,product_name:currentProduct.name,store:o.store,category:currentProduct.cat,coupon_code:o.code,source:"get_coupon_auto_copy",detail:"Auto-copied code on reveal at "+o.store}); showToast("Code "+o.code+" copied — paste at "+o.store+" checkout"); } else { showToast("Deal saved to your wallet"); }
    };
    rows.appendChild(row);
  });
}
function renderCoupons(){
  var grid=document.getElementById("couponGrid"); grid.innerHTML=""; var count=0;
  COUPONS.forEach(function(c,idx){
    if(currentCat!=="all" && c.cat!==currentCat) return;
    if(currentStore && c.store!==currentStore) return;
    count++;
    var card=document.createElement("article"); card.className="coupon";
    card.innerHTML='<div class="coupon-top"><div class="store-tag">'+c.store+'</div><span class="sample-badge">Sample Code</span></div>'
      +'<h3>'+c.title+'</h3><p>'+c.desc+'</p>'
      +'<div class="meta"><span>⏰ Ends '+c.exp+'</span><span>✓ Last checked '+c.checked+'</span><span>'+c.cat+'</span></div>'
      +'<div class="code-reveal" style="display:block;">'+c.code+'</div>'
      +'<div class="coupon-actions" style="margin-top:12px;"><button class="clip-btn">🎟️ Clip Coupon</button><button class="copy-btn">Copy Code</button></div>'
      +'<button class="terms-toggle">See terms & exclusions ▾</button><div class="terms">'+c.terms+'</div>';
    card.querySelector(".copy-btn").onclick=function(){ if(navigator.clipboard) navigator.clipboard.writeText(c.code); trackEvent("coupon_copy",{store:c.store,category:c.cat,coupon_code:c.code,source:"coupon_card",detail:"Copied coupon code from card: "+c.title+" ("+c.store+")"}); trackEvent("coupon_reveal",{store:c.store,category:c.cat,coupon_code:c.code,source:"coupon_card_copy",detail:"Coupon engaged via Copy on card: "+c.title+" ("+c.store+")"}); showToast("Copied "+c.code+" for "+c.store); };
    card.querySelector(".clip-btn").onclick=function(e){ addToWallet(c.store+" — "+c.title, c.code, c.desc); trackEvent("coupon_clip",{store:c.store,category:c.cat,coupon_code:c.code,source:"coupon_card",detail:"Clipped coupon to wallet: "+c.title+" ("+c.store+")"}); trackEvent("coupon_reveal",{store:c.store,category:c.cat,coupon_code:c.code,source:"coupon_card_clip",detail:"Coupon engaged via Clip on card: "+c.title+" ("+c.store+")"}); e.target.textContent="✓ Clipped to Wallet"; };
    card.querySelector(".terms-toggle").onclick=function(e){ var t=card.querySelector(".terms"); t.classList.toggle("open"); e.target.textContent=t.classList.contains("open")?"Hide terms ▴":"See terms & exclusions ▾"; };
    grid.appendChild(card);
  });
  document.getElementById("couponEmpty").style.display=count?"none":"block";
}
function renderStores(){
  var stores={}; COUPONS.forEach(function(c){ stores[c.store]=(stores[c.store]||0)+1; });
  PRODUCTS.forEach(function(p){ p.offers.forEach(function(o){ if(!(o.store in stores)) stores[o.store]=0; }); });
  var grid=document.getElementById("storeGrid"); grid.innerHTML="";
  Object.keys(stores).sort().forEach(function(s){
    var b=document.createElement("button"); b.className="store-tile";
    b.innerHTML="<b>"+s+"</b><span>"+(stores[s]?stores[s]+" coupon"+(stores[s]>1?"s":"")+" below":"Price-compared above")+" • Tap to filter →</span>";
    b.onclick=function(){ var selecting=(currentStore!==s); currentStore=(currentStore===s?null:s); currentCat="all"; document.querySelectorAll("#catPills .pill").forEach(function(p){p.classList.toggle("active",p.dataset.cat==="all");}); trackEvent("store_filter",{store:s,source:"store_tile",detail:(selecting?"Filtered coupons by store: ":"Cleared store filter: ")+s}); if(selecting){ trackEvent("retailer_click",{store:s,source:"store_tile",detail:"Clicked through to retailer coupons via store tile: "+s}); } renderCoupons(); document.getElementById("coupons").scrollIntoView({behavior:"smooth"}); showToast(currentStore?("Showing "+s+" coupons — tap again to clear"):"Showing all stores"); };
    grid.appendChild(b);
  });
}
function addToWallet(label,code,desc){
  for(var i=0;i<wallet.length;i++){ if(wallet[i].code===code && wallet[i].label===label) { renderWallet(); return; } }
  wallet.push({label:label,code:code,desc:desc}); renderWallet();
}
function renderWallet(){
  document.getElementById("walletCount").textContent=wallet.length;
  var box=document.getElementById("walletItems");
  if(!wallet.length){ box.innerHTML="<p style='color:var(--muted);'>No coupons clipped yet. Tap “Clip Coupon” on any deal and it'll show up here for checkout.</p>"; return; }
  box.innerHTML=wallet.map(function(w){ return '<div class="wallet-item"><b>'+w.label+'</b><span style="color:var(--muted);font-size:13px;">'+w.desc+'</span><br>Code: <code>'+w.code+'</code></div>'; }).join("");
}
function showToast(msg){ var t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show"); setTimeout(function(){t.classList.remove("show");},2600); }

document.getElementById("heroSearchForm").addEventListener("submit",function(e){ e.preventDefault(); var q=document.getElementById("heroSearch").value.trim(); doSearch(q); });
document.querySelectorAll("[data-search]").forEach(function(b){ b.addEventListener("click",function(){ document.getElementById("heroSearch").value=b.dataset.search; doSearch(b.dataset.search); }); });
function doSearch(q){
  if(!q){ document.getElementById("compare").scrollIntoView({behavior:"smooth"}); return; }
  // Rank every product & part by relevance — handles device + part queries like "coffee maker filter" or "laptop charger"
  var ranked=PRODUCTS.map(function(p){return {p:p,s:productScore(p,q)};}).sort(function(a,b){return b.s-a.s;});
  var match=ranked[0] && ranked[0].s>=2 ? ranked[0].p : null;
  // Legacy shortcuts still work
  if(!match){ var ql=q.toLowerCase(); if(ql.indexOf("tide")!==-1) match=PRODUCTS.find(function(p){return p.id==="tide";}); else if(ql.indexOf("paper towel")!==-1) match=PRODUCTS.find(function(p){return p.id==="towels";}); }
  var matchCount=ranked.filter(function(r){return r.s>=2;}).length;
  trackEvent("search",{query:q,product_id:match?match.id:null,product_name:match?match.name:null,category:match?match.cat:null,source:"hero_search",detail:match?("Searched and matched: "+match.name+" ("+matchCount+" product/part matches)"):"Searched with no exact match — showed all products & parts"});
  if(match){ currentProduct=match; }
  SUPPRESS_COMPARE_LOG=false;
  renderProductList(q); renderOffers("search");
  document.getElementById("compare").scrollIntoView({behavior:"smooth"});
  if(!match) showToast("No exact match — showing all products & parts");
  else if(match.type==="part") showToast("Found part: "+match.name.split("—")[0].trim()+" — check compatibility before buying");
}
document.querySelectorAll("#catPills .pill").forEach(function(p){ p.addEventListener("click",function(){ document.querySelectorAll("#catPills .pill").forEach(function(x){x.classList.remove("active");}); p.classList.add("active"); currentCat=p.dataset.cat; currentStore=null; trackEvent("category_filter",{category:currentCat==="all"?null:currentCat,source:"coupon_pills",detail:"Filtered coupons by category: "+p.textContent.trim()}); renderCoupons(); }); });
/* Sponsor / retailer outbound links */
document.querySelectorAll(".sponsor-link").forEach(function(a){ a.addEventListener("click",function(){ trackEvent("sponsor_click",{store:a.dataset.sponsor||a.textContent.trim(),source:"sponsor_card",detail:"Clicked sponsor link: "+(a.dataset.sponsor||"")+" → "+a.getAttribute("href")}); }); });
document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){ a.addEventListener("click",function(){ trackEvent("sponsor_click",{store:"Email pitch",source:"sponsor_pitch_mailto",detail:"Opened email app from sponsor pitch"}); }); });
document.getElementById("guideToggle").onclick=function(){
  guideOpen=!guideOpen;
  document.getElementById("guideBody").classList.toggle("open",guideOpen);
  this.setAttribute("aria-expanded",guideOpen?"true":"false");
  this.textContent=guideOpen?"📖 Hide instructions":(currentProduct.type==="part"?"📖 How to install / fit this part":"📖 How to use this — instructions");
  if(guideOpen){ trackEvent("guide_view",{product_id:currentProduct.id,product_name:currentProduct.name,category:currentProduct.cat,source:"guide_toggle",detail:"Viewed instructions for "+currentProduct.name}); }
};
document.getElementById("walletOpen").onclick=function(){ document.getElementById("walletPanel").classList.add("open"); };
document.getElementById("walletClose").onclick=function(){ document.getElementById("walletPanel").classList.remove("open"); };
document.getElementById("copyWallet").onclick=function(){ var txt=wallet.map(function(w){return w.label+": "+w.code;}).join("\n"); if(navigator.clipboard) navigator.clipboard.writeText(txt||"No coupons clipped yet"); wallet.forEach(function(w){ trackEvent("coupon_copy",{coupon_code:w.code,source:"wallet_copy_all",detail:"Copied from wallet: "+w.label}); }); showToast("Wallet codes copied"); };
document.getElementById("downloadWallet").onclick=function(){ var txt="MY COUPON WALLET\n================\n\n"+(wallet.length?wallet.map(function(w){return w.label+"\nCode: "+w.code+"\n"+w.desc+"\n";}).join("\n"):"No coupons clipped yet."); downloadText(txt,"my-coupon-wallet.txt"); };
document.getElementById("copyPitch").onclick=function(){ var t=document.getElementById("pitchText"); t.select(); if(navigator.clipboard) navigator.clipboard.writeText(t.value); trackEvent("sponsor_click",{store:"Sponsor pitch",source:"sponsor_pitch_copy",detail:"Copied sponsor outreach pitch"}); showToast("Pitch copied — customize brackets before sending"); };
document.getElementById("downloadPitch").onclick=function(){ downloadText(document.getElementById("pitchText").value,"sponsor-pitch.txt"); trackEvent("sponsor_click",{store:"Sponsor pitch",source:"sponsor_pitch_download",detail:"Downloaded sponsor outreach pitch (.txt)"}); };
/* Activity controls */
document.getElementById("eventFilter").addEventListener("change",function(){ renderActivity(); });
document.getElementById("exportJson").onclick=function(){ var txt=exportJSONText(); var n=EVENT_LOG.length; downloadBlob(txt,"retail-remedy-activity-log.json","application/json;charset=utf-8"); trackEvent("activity_export",{source:"export_json",detail:"Exported activity log as JSON ("+n+" events)"}); showToast("Exported "+n+" events as JSON"); };
document.getElementById("exportCsv").onclick=function(){ var txt=exportCSVText(); var n=EVENT_LOG.length; downloadBlob(txt,"retail-remedy-activity-log.csv","text/csv;charset=utf-8"); trackEvent("activity_export",{source:"export_csv",detail:"Exported activity log as CSV ("+n+" events)"}); showToast("Exported "+n+" events as CSV"); };
document.getElementById("copyJson").onclick=function(){ if(navigator.clipboard) navigator.clipboard.writeText(exportJSONText()); var n=EVENT_LOG.length; trackEvent("activity_export",{source:"copy_json",detail:"Copied activity log JSON to clipboard ("+n+" events)"}); showToast("Activity JSON copied ("+n+" events)"); };
document.getElementById("clearLog").onclick=function(){ var n=EVENT_LOG.length; EVENT_LOG.length=0; EVENT_SEQ=0; renderActivity(); trackEvent("activity_clear",{source:"clear_log",detail:"Cleared session activity log ("+n+" events removed, this tab only)"}); showToast("Activity log cleared for this tab"); };
function downloadText(txt,filename){ var blob=new Blob([txt],{type:"text/plain"}); var a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=filename; a.click(); setTimeout(function(){URL.revokeObjectURL(a.href);},2000); }

/* ===== Shoppable guide terms — price pop-outs inside the how-to text =====
   Terms (parts, tools, materials) named in guide steps are wrapped in
   .shop-term buttons. Opening one shows the cheapest price for that item
   across the stores already compared on this page (or a clearly-labeled
   sample guide-item deal for install hardware not in the main catalog),
   the store, its coupon action, and the fits/compatibility note for parts.
   All prices remain SAMPLE data, consistent with the rest of the site. */
var TERM_DEFS=[
 {key:"wiring-harness",match:"wiring-harness adapter",deal:{name:"Wiring Harness Adapter — Mercedes W208",price:12.99,list:19.99,store:"Walmart",code:"HARNESS5",desc:"Plug-and-play harness adapter",compat:"Fits 1998–2003 Mercedes-Benz CLK-Class (W208) factory harness — no cutting",cat:"Parts"}},
 {key:"harness",match:"harness adapter",deal:{name:"Wiring Harness Adapter — Mercedes W208",price:12.99,list:19.99,store:"Walmart",code:"HARNESS5",desc:"Plug-and-play harness adapter",compat:"Fits 1998–2003 Mercedes-Benz CLK-Class (W208) factory harness — no cutting",cat:"Parts"}},
 {key:"antenna-adapter",match:"antenna adapter",deal:{name:"Antenna Adapter — European DIN",price:8.49,list:14.99,store:"Amazon",code:"ANTADAPT",desc:"Factory antenna lead to aftermarket radio",compat:"Fits W208 factory antenna lead and most European DIN radios",cat:"Parts"}},
 {key:"removal-keys",match:"removal keys",deal:{name:"Radio Removal Keys — Mercedes (Pair)",price:6.99,list:12.99,store:"Amazon",code:"RADIOKEY",desc:"Release keys for factory radio slots",compat:"Fits Mercedes factory radios incl. W208 CLK",cat:"Parts"}},
 {key:"dash-kit",match:"dash kit",deal:{name:"Single-DIN Dash Kit — Mercedes W208",price:18.99,list:29.99,store:"Amazon",code:"DASHKIT",desc:"Dash mounting kit, single-DIN",compat:"Fits 1998–2003 Mercedes-Benz CLK-Class (W208) single-DIN openings",cat:"Parts"}},
 {key:"refrigerator-filter",match:"refrigerator water filter",productId:"fridge-filter"},
 {key:"vacuum-filter",match:"vacuum filter",productId:"vacuum-parts"},
 {key:"laptop-charger",match:"laptop charger",productId:"laptop-charger"},
 {key:"screen-protector",match:"screen protector",productId:"screen-protector"},
 {key:"alignment-tray",match:"alignment tray",productId:"screen-protector"},
 {key:"usb-c-cable",match:"USB-C cable",productId:"usb-c-cable"},
 {key:"phone-case",match:"phone case",productId:"phone-case"},
 {key:"earbud-tips",match:"earbud tips",productId:"earbud-parts"},
 {key:"air-fryer-basket",match:"air fryer basket",productId:"airfryer-parts"},
 {key:"crisper-tray",match:"crisper tray",productId:"airfryer-parts"},
 {key:"liners",match:"liners",productId:"airfryer-parts"},
 {key:"charcoal-filter",match:"charcoal filter",productId:"coffee-parts"},
 {key:"descaler",match:"descaler",productId:"coffee-parts"},
 {key:"carafe",match:"carafe",productId:"coffee-parts"},
 {key:"cartridge",match:"cartridge",productId:"printer-ink"},
 {key:"toner",match:"toner",productId:"printer-ink"},
 {key:"printer-ink",match:"printer ink",productId:"printer-ink"},
 {key:"hvac-filter",match:"HVAC filter",productId:"hvac-filter"},
 {key:"furnace-filter",match:"furnace filter",productId:"hvac-filter"},
 {key:"watch-band",match:"watch band",productId:"watch-parts"},
 {key:"magnetic-charger",match:"magnetic charger",productId:"watch-parts"},
 {key:"brushless-motor",match:"brushless motor",deal:{name:"RC Brushless Motor & 30A ESC Combo",price:69.95,list:99.95,store:"Amazon",code:"RCBUILD",desc:"Motor + ESC bundle for trainer builds",compat:"For RC trainer kits — match prop size and battery to the kit plan",cat:"Parts"}},
 {key:"servos",match:"servos",deal:{name:"Micro Servos — 9g, 4-Pack",price:15.99,list:24.99,store:"Amazon",code:"RCBUILD",desc:"Standard 9g micro servos for RC trainers",compat:"Fits most beginner RC trainer kits",cat:"Parts"}},
 {key:"propellers",match:"propellers",deal:{name:"RC Propellers — Assorted 4-Pack",price:9.99,list:16.99,store:"Walmart",code:"RCBUILD",desc:"Spare props in common trainer sizes",compat:"Check diameter/pitch against your kit plan before flying",cat:"Parts"}},
 {key:"balsa-kit",match:"balsa kit",deal:{name:"Beginner Balsa Airplane Kit",price:24.99,list:39.99,store:"Walmart",code:"BALSA25",desc:"Build-and-fly beginner kit",compat:"Beginner build — glue and covering sold separately",cat:"Parts"}}
];
var TERM_LOOKUP={};
TERM_DEFS.forEach(function(d){
  var escm=d.match.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/[- ]/g,"[-\\s]");
  var suf=/s$/.test(d.match)?"":"(?:e?s)?";
  d.re=new RegExp("\\b"+escm+suf+"\\b","i");
  TERM_LOOKUP[d.key]=d;
});
function termDeal(def){
  if(def.productId){
    var p=null; PRODUCTS.forEach(function(x){ if(x.id===def.productId) p=x; });
    if(!p) return null;
    var best=p.offers[0]; p.offers.forEach(function(o){ if(o.price<best.price) best=o; });
    return {name:p.name,price:best.price,list:best.list,store:best.store,code:best.code,desc:best.desc,save:best.save,stores:p.offers.length,compat:(p.type==="part"?p.meta:null),productId:p.id,productName:p.name,cat:p.cat};
  }
  var d=def.deal;
  return {name:d.name,price:d.price,list:d.list,store:d.store,code:d.code,desc:d.desc,save:(typeof d.save==="number"?d.save:Math.round((1-d.price/d.list)*100)),stores:0,compat:d.compat||null,productId:null,productName:d.name,cat:d.cat||"Parts"};
}
function annotateOnce(root){
  var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
    if(!n.nodeValue||!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
    var p=n.parentNode; if(!p||!p.closest) return NodeFilter.FILTER_REJECT;
    if(p.closest(".shop-term,button,a,script,style")) return NodeFilter.FILTER_REJECT;
    return NodeFilter.FILTER_ACCEPT;
  }});
  var node;
  while((node=walker.nextNode())){
    var text=node.nodeValue, best=null;
    TERM_DEFS.forEach(function(d){ var m=d.re.exec(text); if(m && (!best||m.index<best.index||(m.index===best.index&&m[0].length>best.len))) best={index:m.index,len:m[0].length,def:d,txt:m[0]}; });
    if(best){
      var frag=document.createDocumentFragment();
      var before=text.slice(0,best.index), after=text.slice(best.index+best.len);
      if(before) frag.appendChild(document.createTextNode(before));
      var b=document.createElement("button"); b.type="button"; b.className="shop-term"; b.textContent=best.txt; b.dataset.term=best.def.key; b.setAttribute("aria-haspopup","dialog"); b.title="See cheapest sample price for "+best.txt;
      frag.appendChild(b);
      if(after) frag.appendChild(document.createTextNode(after));
      node.parentNode.replaceChild(frag,node);
      return true;
    }
  }
  return false;
}
function annotateTerms(root){ if(!root) return; var guard=0; while(annotateOnce(root)&&guard<80){ guard++; } }
/* Pop-out card */
var termPop=document.createElement("div");
termPop.className="term-pop"; termPop.id="termPop"; termPop.setAttribute("role","dialog"); termPop.setAttribute("aria-label","Cheapest price pop-out");
document.body.appendChild(termPop);
var popTermBtn=null, popPinned=false, popDeal=null, popDef=null, popLoggedKey=null, hoverCloseTimer=null;
function positionTermPop(btn){
  var r=btn.getBoundingClientRect();
  termPop.style.visibility="hidden"; termPop.classList.add("open");
  var w=termPop.offsetWidth, h=termPop.offsetHeight;
  var left=Math.max(8,Math.min(r.left,window.innerWidth-w-8));
  var top=r.bottom+8; if(top+h>window.innerHeight-8) top=Math.max(8,r.top-h-8);
  termPop.style.left=left+"px"; termPop.style.top=top+"px"; termPop.style.visibility="";
}
function showTermPop(btn,pin){
  var def=TERM_LOOKUP[btn.dataset.term]; if(!def) return;
  var deal=termDeal(def); if(!deal) return;
  var wasOpen=termPop.classList.contains("open");
  popDeal=deal; popDef=def; popTermBtn=btn; if(pin) popPinned=true;
  termPop.innerHTML='<div style="display:flex;justify-content:space-between;gap:10px;align-items:start;"><b style="font-family:\'Archivo\';font-size:16px;line-height:1.25;">'+esc(deal.name)+'</b><button type="button" class="term-pop-close" aria-label="Close price pop-out">✕</button></div>'
    +'<div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;"><span class="sample-badge">Sample Price</span><span style="font-size:12.5px;color:var(--muted);">'+(deal.stores?("Cheapest of "+deal.stores+" stores compared here"):("Guide-item sample deal"))+'</span></div>'
    +'<div style="display:flex;align-items:baseline;gap:9px;margin-top:9px;flex-wrap:wrap;"><b style="font-family:\'Archivo\';font-size:27px;">'+money(deal.price)+'</b><s style="color:var(--muted);">'+money(deal.list)+'</s><span class="save-pill">Save '+deal.save+'%</span></div>'
    +'<div style="font-size:14px;margin-top:2px;">at <b>'+esc(deal.store)+'</b> • '+esc(deal.desc)+'</div>'
    +(deal.compat?'<div class="compat"><b>Fits:</b> '+esc(deal.compat)+'</div>':"")
    +'<div class="code-reveal" data-role="pop-code">'+esc(deal.code)+'</div>'
    +'<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;"><button type="button" class="get-btn" data-role="pop-get" style="flex:1;">Get Coupon</button>'+(deal.productId?'<button type="button" class="btn" data-role="pop-compare">Compare all stores →</button>':"")+'</div>'
    +'<p style="font-size:12px;color:var(--muted);margin:10px 0 0;">Sample price for launch — the store\'s checkout total is final.</p>';
  positionTermPop(btn);
  var logKey=def.key+"|"+btn.textContent;
  if(!wasOpen||popLoggedKey!==logKey){
    popLoggedKey=logKey;
    trackEvent("term_popout",{product_id:deal.productId,product_name:deal.productName,store:deal.store,category:deal.cat,coupon_code:deal.code,price:deal.price,source:pin?"guide_term_tap":"guide_term_hover",detail:"Opened price pop-out from guide term “"+btn.textContent+"” — "+deal.name+" at "+deal.store+" "+money(deal.price)+" (sample)"});
  }
  termPop.querySelector(".term-pop-close").onclick=function(){ hideTermPop(); };
  termPop.querySelector('[data-role="pop-get"]').onclick=function(){
    var codeEl=termPop.querySelector('[data-role="pop-code"]'); codeEl.classList.add("show");
    this.textContent="✓ Code Shown — Copy It"; this.classList.add("secondary");
    trackEvent("coupon_reveal",{product_id:deal.productId,product_name:deal.productName,store:deal.store,category:deal.cat,coupon_code:deal.code,price:deal.price,source:"term_popout",detail:"Revealed coupon from guide pop-out: "+deal.productName+" at "+deal.store});
    trackEvent("retailer_click",{product_id:deal.productId,product_name:deal.productName,store:deal.store,category:deal.cat,coupon_code:deal.code,price:deal.price,source:"term_popout",detail:"Clicked through toward "+deal.store+" from guide pop-out ("+deal.productName+")"});
    addToWallet(deal.productName+" @ "+deal.store, deal.code, deal.desc);
    trackEvent("coupon_clip",{product_id:deal.productId,product_name:deal.productName,store:deal.store,category:deal.cat,coupon_code:deal.code,source:"term_popout",detail:"Clipped to wallet from guide pop-out: "+deal.productName+" @ "+deal.store});
    if(deal.code.indexOf("Member")===-1&&navigator.clipboard){ navigator.clipboard.writeText(deal.code).catch(function(){}); trackEvent("coupon_copy",{product_id:deal.productId,product_name:deal.productName,store:deal.store,category:deal.cat,coupon_code:deal.code,source:"term_popout",detail:"Copied code from guide pop-out at "+deal.store}); showToast("Code "+deal.code+" copied — paste at "+deal.store+" checkout"); } else { showToast("Deal saved to your wallet"); }
  };
  var cmpBtn=termPop.querySelector('[data-role="pop-compare"]');
  if(cmpBtn){ cmpBtn.onclick=function(){
    var p=null; PRODUCTS.forEach(function(x){ if(x.id===deal.productId) p=x; }); if(!p) return;
    hideTermPop(); if(window.__showListings){window.__showListings();} currentProduct=p; SUPPRESS_COMPARE_LOG=false; renderProductList(""); renderOffers("term_popout");
    document.getElementById("compare").scrollIntoView({behavior:"smooth"});
    showToast("Comparing all stores for "+p.name.split("—")[0].trim());
  }; }
}
function hideTermPop(){ termPop.classList.remove("open"); popPinned=false; popTermBtn=null; popLoggedKey=null; if(hoverCloseTimer){ clearTimeout(hoverCloseTimer); hoverCloseTimer=null; } }
document.addEventListener("click",function(e){
  var t=(e.target&&e.target.closest)?e.target.closest(".shop-term"):null;
  if(t){ e.preventDefault(); if(popTermBtn===t&&termPop.classList.contains("open")&&popPinned){ hideTermPop(); } else { showTermPop(t,true); } return; }
  if(termPop.classList.contains("open")&&!termPop.contains(e.target)) hideTermPop();
});
document.addEventListener("mouseover",function(e){
  if(!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  var t=(e.target&&e.target.closest)?e.target.closest(".shop-term"):null;
  if(t){ if(hoverCloseTimer){ clearTimeout(hoverCloseTimer); hoverCloseTimer=null; } if(popTermBtn!==t||!termPop.classList.contains("open")) showTermPop(t,false); }
});
document.addEventListener("mouseout",function(e){
  if(!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  if(popPinned||!termPop.classList.contains("open")) return;
  var fromTerm=e.target&&e.target.closest?e.target.closest(".shop-term"):null;
  var inPop=termPop.contains(e.target);
  if(!fromTerm&&!inPop) return;
  var to=e.relatedTarget;
  if(to&&(termPop.contains(to)||(to.closest&&to.closest(".shop-term")))) return;
  hoverCloseTimer=setTimeout(function(){ if(!popPinned) hideTermPop(); },300);
});
termPop.addEventListener("mouseenter",function(){ if(hoverCloseTimer){ clearTimeout(hoverCloseTimer); hoverCloseTimer=null; } });
termPop.addEventListener("mouseleave",function(){ if(!popPinned){ hoverCloseTimer=setTimeout(function(){ if(!popPinned) hideTermPop(); },300); } });
document.addEventListener("keydown",function(e){ if(e.key==="Escape") hideTermPop(); });
window.addEventListener("resize",function(){ if(termPop.classList.contains("open")) hideTermPop(); });
annotateTerms(document.getElementById("guides"));

renderProductList(""); renderOffers(); renderCoupons(); renderStores(); renderDevices(); renderWallet();

;

(function(){
  var listings=document.getElementById("view-listings");
  var guidesView=document.getElementById("view-guides");
  if(!listings||!guidesView) return;
  var guidesLogged=false;
  function showGuides(pushScroll){
    listings.classList.add("view-hidden"); listings.setAttribute("hidden","");
    guidesView.classList.remove("view-hidden"); guidesView.removeAttribute("hidden");
    document.title="How-To Guides & Instructions — Retail Remedy";
    if(pushScroll!==false) window.scrollTo({top:0,behavior:"auto"});
    if(!guidesLogged && typeof trackEvent==="function"){
      try{ trackEvent("guide_view",{source:"guides_page",detail:"Opened separate How-To Guides & Instructions page"}); }catch(e){}
      guidesLogged=true;
    }
    var sec=document.getElementById("guides"); if(sec && pushScroll===false){ /* keep position */ }
  }
  function showListings(){
    guidesView.classList.add("view-hidden"); guidesView.setAttribute("hidden","");
    listings.classList.remove("view-hidden"); listings.removeAttribute("hidden");
    document.title="Retail Remedy \u2014 The remedy for high retail prices | Compare Prices, Clip Free Coupons";
    guidesLogged=false;
  }
  window.__showListings=showListings;
  window.__showGuides=showGuides;
  function route(){
    if(location.hash==="#guides"){ showGuides(true); }
    else { 
      var wasGuides=!guidesView.classList.contains("view-hidden");
      showListings();
      if(wasGuides && location.hash){
        var t=document.querySelector(location.hash);
        if(t){ setTimeout(function(){ t.scrollIntoView({behavior:"auto"}); },30); }
      }
    }
  }
  window.addEventListener("hashchange", route);
  document.addEventListener("click", function(e){
    var a=e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if(!a) return;
    var href=a.getAttribute("href");
    if(href==="#guides"){ e.preventDefault(); if(location.hash!=="#guides"){ history.pushState(null,"","#guides"); } showGuides(true); }
    else if(a.hasAttribute("data-back-to-listings")){
      e.preventDefault(); showListings(); history.pushState(null,"", href==="#top"?"#top":"#compare");
      var target=document.querySelector(href==="#top"?"#top":"#compare"); var doScroll=function(){ if(target) target.scrollIntoView({behavior:"auto"}); else window.scrollTo({top:0}); }; doScroll(); setTimeout(doScroll,60); setTimeout(doScroll,180);
    }
    else if(href && href.charAt(0)==="#" && href.length>1 && !guidesView.classList.contains("view-hidden")){
      // Leaving guides view for a listings anchor
      e.preventDefault(); showListings(); history.pushState(null,"",href);
      var el=document.querySelector(href); if(el) setTimeout(function(){ el.scrollIntoView({behavior:"smooth"}); },30);
    }
  });
  // Initial route
  if(location.hash==="#guides"){ showGuides(false); window.scrollTo({top:0}); }
  else { showListings(); }
})();
