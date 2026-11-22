const grid = document.getElementById('grid');
const title = document.getElementById('title');
let curV = '', curA = '';
function showVehicles(){
  title.innerText = 'PARTS - 5 TA GARI';
  grid.innerHTML = VEHICLES.map(v=>`<div class="card" onclick="openVehicle('${v.id}')"><img src="${v.img}"><h3>${v.name}</h3><p>${v.bn}</p></div>`).join('');
}
function getAssembly(v){
  if(v=='jeep') return JEEP_ASSEMBLY;
  if(v=='pickup') return PICKUP_ASSEMBLY;
  if(v=='ton3') return TON3_ASSEMBLY;
  if(v=='bus') return BUS_ASSEMBLY;
  if(v=='bike') return BIKE_ASSEMBLY;
}
function getParts(v,a){
  if(v=='jeep') return JEEP_PARTS[a]||[];
  if(v=='pickup') return PICKUP_PARTS[a]||[];
  if(v=='ton3') return TON3_PARTS[a]||[];
  if(v=='bus') return BUS_PARTS[a]||[];
  if(v=='bike') return BIKE_PARTS[a]||[];
}
function openVehicle(id){
  curV=id; title.innerText = id.toUpperCase()+' - BORO PARTS';
  let list = getAssembly(id);
  grid.innerHTML = list.map(a=>`<div class="card" onclick="openParts('${a.id}')"><h3>${a.name}</h3><p>${a.bn}</p><p>Chap dao</p></div>`).join('') + `<div class="card" onclick="showVehicles()"><h3>⬅ BACK</h3></div>`;
}
function openParts(a){
  curA=a; title.innerText = curV.toUpperCase()+' '+a.toUpperCase()+' - CHOTO PARTS';
  let list = getParts(curV,a);
  grid.innerHTML = list.map(p=>`<div class="card"><h3>${p.name}</h3><p>${p.bn}</p><span class="stock">Stock: ${p.stock} ta</span></div>`).join('') + `<div class="card" onclick="openVehicle(curV)"><h3>⬅ BACK</h3></div>`;
}
showVehicles();