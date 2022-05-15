const groupList1 = document.querySelector('.content');
let loader2 =document.querySelector(".loader");
let loaderGeneral2 =document.querySelector(".loaderGeneral");

loader2.classList.add('loader--show');
setTimeout(
()=>{

const params = new URLSearchParams(window.location.search);
const code = params.get("cod");
console.log(" .................... ", code);
console.log("grupos: ", grupsTeam);
let result = grupsTeam.filter((item)=>item.code == code);
console.log("resultado: ", result);
renderGroups(result[0]);

loader2.classList.remove('loader--show');
loaderGeneral2.classList.add('loaderGeneral--hide');

console.log(result)
}
, 3000);

function renderGroups (elem) {
    console.log("Elemento a renderzar", elem);
const Group = document.createElement('div');
Group.classList.add('group');
Group.innerHTML = `
<h1 class="name__group">${elem.name}</h1>
<a target="_blank" href="${elem.cvlac}">${elem.cvlac}</a>
<div class ="numbers">
<img class ="numberImage" src="../Imgs/numero-invest-RAD.png">
<p class="number__invest">${elem.numberOfInvest}</p>
</div>

<h3 class="areas">${elem.area1}</h3>
<p class="leader"> <strong> Líder:</strong> ${elem.leader}</p>
<p class="leader"> <strong> Lugar:</strong> ${elem.town}</p>
<p class="leader"> <strong> Año de conformación:</strong> ${elem.creationYear}</p>
<p class="leader"> <strong> Descripción:</strong> ${elem.description}</p>
<p class="leader"> <strong> Línea de investigación:</strong> ${elem.lineOfResearch}</p>
`;
groupList1.appendChild(Group);

}