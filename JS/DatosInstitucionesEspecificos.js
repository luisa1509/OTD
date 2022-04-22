const groupList1 = document.querySelector('.content__i');
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
}
, 3000);

function renderGroups (elem) {
const Group = document.createElement('div');
Group.classList.add('content__ins');
Group.innerHTML = `
<div class="group__ins">
<h1 class="name__ins">${elem.institution}</h1>
<a href="${elem.cvlac}">${elem.cvlac}</a>
<p class="where"> <strong> Lugar:</strong> ${elem.town}</p>
</div>

<div class="group__as">
    <p class="group__name">Grupo de investigación <br> asociado</p>
    <h1 class="name__groupInst">${elem.name}</h1>
    <p class="year"> <strong>Año de conformación del <br> grupo:</strong> ${elem.creationYear}</p>
</div>
`;
groupList1.appendChild(Group);

}