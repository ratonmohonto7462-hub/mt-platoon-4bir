// ===== ৫ টা গাড়ি =====
const VEHICLES = [
  {id:'jeep', name:'JEEP', bn:'জিপ', img:'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600'},
  {id:'pickup', name:'PICKUP', bn:'পিকআপ', img:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600'},
  {id:'ton3', name:'3 TON', bn:'৩ টন', img:'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600'},
  {id:'bus', name:'BUS', bn:'বাস', img:'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600'},
  {id:'bike', name:'MOTORCYCLE', bn:'মোটরসাইকেল', img:'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600'},
];

// ===== JEEP =====
const JEEP_ASSEMBLY = [
  {id:'engine', name:'ENGINE', bn:'ইঞ্জিন'},
  {id:'radiator', name:'RADIATOR', bn:'রেডিয়েটর'},
  {id:'cabin', name:'CABIN', bn:'ক্যাবিন'},
  {id:'gearbox', name:'GEAR BOX', bn:'গিয়ার বক্স'},
];
const JEEP_PARTS = {
  engine: [{name:'PISTON', bn:'পিস্টন', stock:12},{name:'RING KIT', bn:'রিং কিট', stock:8},{name:'HEAD GASKET', bn:'হেড গ্যাসকেট', stock:15},{name:'LINER', bn:'লাইনার', stock:6},{name:'CRANK SHAFT', bn:'ক্র্যাংক', stock:2},{name:'OIL FILTER', bn:'অয়েল ফিল্টার', stock:20},{name:'AIR FILTER', bn:'এয়ার ফিল্টার', stock:18},{name:'OIL PUMP', bn:'অয়েল পাম্প', stock:4}],
  radiator: [{name:'RADIATOR CORE', bn:'কোর', stock:3},{name:'HOSE PIPE', bn:'হোস', stock:10},{name:'FAN BELT', bn:'ফ্যান বেল্ট', stock:12}],
  cabin: [{name:'CAB ASSY', bn:'ক্যাব অ্যাসি', stock:1},{name:'DOOR SHELL', bn:'ডোর', stock:4},{name:'BUMPER', bn:'বাম্পার', stock:2},{name:'MIRROR', bn:'মিরর', stock:6}],
  gearbox: [{name:'CLUTCH PLATE', bn:'ক্লাচ প্লেট', stock:5},{name:'GEAR OIL', bn:'গিয়ার অয়েল', stock:10}],
};

// ===== PICKUP =====
const PICKUP_ASSEMBLY = [
  {id:'engine', name:'ENGINE', bn:'ইঞ্জিন'},
  {id:'radiator', name:'RADIATOR', bn:'রেডিয়েটর'},
  {id:'cabin', name:'CABIN', bn:'ক্যাবিন'},
];
const PICKUP_PARTS = {
  engine: [{name:'PISTON', bn:'পিস্টন', stock:5},{name:'RING KIT', bn:'রিং কিট', stock:6},{name:'OIL FILTER', bn:'অয়েল ফিল্টার', stock:10}],
  radiator: [{name:'RADIATOR CORE', bn:'কোর', stock:2},{name:'FAN BELT', bn:'ফ্যান বেল্ট', stock:8}],
  cabin: [{name:'CAB ASSY', bn:'ক্যাব অ্যাসি', stock:1},{name:'DOOR SHELL', bn:'ডোর', stock:2}],
};

// ===== 3 TON =====
const TON3_ASSEMBLY = [
  {id:'engine', name:'ENGINE', bn:'ইঞ্জিন'},
  {id:'radiator', name:'RADIATOR', bn:'রেডিয়েটর'},
  {id:'cabin', name:'CABIN', bn:'ক্যাবিন'},
];
const TON3_PARTS = {
  engine: [{name:'PISTON', bn:'পিস্টন', stock:8},{name:'LINER', bn:'লাইনার', stock:4},{name:'OIL FILTER', bn:'অয়েল ফিল্টার', stock:12}],
  radiator: [{name:'RADIATOR CORE', bn:'কোর', stock:2}],
  cabin: [{name:'CAB ASSY', bn:'ক্যাব অ্যাসি', stock:1}],
};

// ===== BUS =====
const BUS_ASSEMBLY = [
  {id:'engine', name:'ENGINE', bn:'ইঞ্জিন'},
  {id:'radiator', name:'RADIATOR', bn:'রেডিয়েটর'},
];
const BUS_PARTS = {
  engine: [{name:'PISTON', bn:'পিস্টন', stock:6},{name:'OIL FILTER', bn:'অয়েল ফিল্টার', stock:9}],
  radiator: [{name:'RADIATOR CORE', bn:'কোর', stock:1},{name:'FAN BELT', bn:'ফ্যান বেল্ট', stock:5}],
};

// ===== MOTORCYCLE =====
const BIKE_ASSEMBLY = [
  {id:'engine', name:'ENGINE', bn:'ইঞ্জিন'},
];
const BIKE_PARTS = {
  engine: [{name:'PISTON', bn:'পিস্টন', stock:10},{name:'SPARK PLUG', bn:'স্পার্ক প্লাগ', stock:20},{name:'AIR FILTER', bn:'এয়ার ফিল্টার', stock:15}],
};