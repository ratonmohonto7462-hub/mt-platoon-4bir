const grid = document.getElementById('grid'); const title = document.getElementById('title'); let curV = '', curA = '';
const PICS = {
'ENGINE':'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80',
'RADIATOR':'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80',
'CABIN':'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80',
'GEAR BOX':'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
'PISTON':'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80',
'RING KIT':'https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&q=80',
'CLUTCH':'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
'BRAKE':'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
'WHEEL':'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80',
'BATTERY':'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80',
'LIGHT':'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&q=80'
};
function autoPic(name){ return PICS[name.toUpperCase()] || PICS[name] || 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80'; }
function showVehicles(){ title.innerText = 'PARTS'; grid.innerHTML = VEHICLES.map(v=>`<div class="card" onclick="openVehicle('${v.id}')"><img src="${v.img}"><h3>${v.name}</h3><p>${v.bn}</p></div>`).join(''); } function getAssembly(v){ if(v=='jeep') return JEEP_ASSEMBLY; if(v=='pickup') return PICKUP_ASSEMBLY; if(v=='ton3') return TON3_ASSEMBLY; if(v=='bus') return BUS_ASSEMBLY; if(v=='bike') return BIKE_ASSEMBLY; } function getParts(v,a){ if(v=='jeep') return JEEP_PARTS[a]||[]; if(v=='pickup') return PICKUP_PARTS[a]||[]; if(v=='ton3') return TON3_PARTS[a]||[]; if(v=='bus') return BUS_PARTS[a]||[]; if(v=='bike') return BIKE_PARTS[a]||[]; } function openVehicle(id){ curV=id; title.innerText = id.toUpperCase()+' - BORO PARTS'; let list = getAssembly(id); grid.innerHTML = list.map(a=>`<div class="card" onclick="openParts('${a.id}')"><img src="${autoPic(a.name)}"><h3>${a.name}</h3><p>${a.bn}</p><p>Chap dao</p></div>`).join('') + `<div class="card" onclick="showVehicles()"><h3>⬅ BACK</h3></div>`; } function openParts(a){ curA=a; title.innerText = curV.toUpperCase()+' '+a.toUpperCase()+' - CHOTO PARTS'; let list = getParts(curV,a); grid.innerHTML = list.map(p=>`<div class="card"><img src="${autoPic(p.name)}"><h3>${p.name}</h3><p>${p.bn}</p><span class="stock">Stock: ${p.stock} ta</span></div>`).join('') + `<div class="card" onclick="openVehicle(curV)"><h3>⬅ BACK</h3></div>`; } showVehicles();