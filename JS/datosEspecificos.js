const groupList1 = document.querySelector('.content');

setTimeout(
()=>{
renderGroups(datos);
console.log(datos)
}
, 3000);

function renderGroups (elem) {
const Group = document.createElement('div');
Group.classList.add('group');
Group.innerHTML = `
<h1 class="name__group">${elem.name}</h1>
<a href="${elem.cvlac}">${elem.cvlac}</a>
<div class ="numbers">
<img class ="numberImage" src="../Imgs/número-investwhite.png">
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