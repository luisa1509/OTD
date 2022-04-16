let grupsTeam = [];
let datos =[];


const institutionsList = document.querySelector('.content-institutions');

const fetchDatabase = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.text();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
}

const getDataAsJsonFrom = async (url) => {
    const raw = await fetchDatabase(url);
    const json = await Papa.parse(raw);
    return json.data;
}

updateValues();
setTimeout(
    ()=>{
        renderInstitutions(grupsTeam)
    }
, 3000);
//const myTimeout = setTimeout(myGreeting, 5000);


async function updateValues() {
    /**
    * Request data from pages
    */
    const grups = "https://docs.google.com/spreadsheets/d/e/2PACX-1vScBDb9gEYhv0Fprocreyq41kXXwT1V7RFAdQlAGl5WlChscQc5qmhFNSb6ZW_GZQ/pub?gid=232416215&single=true&output=csv";
    
    let grupsArray = await getDataAsJsonFrom(grups);
    grupsArray.forEach((element, index) => {
        if(index!=0){
            grupsTeam.push(buildGrupsArray(element));
        }
    });
    //console.log(grupsTeam);

}

function renderInstitutions (grupsTeam) {
    console.log("-----------------------")
    console.log(grupsTeam.length)
    grupsTeam.forEach( (elem) => {
        datos = elem;
        console.log(datos)
        const newInstitution = document.createElement('div');
        newInstitution.classList.add('institution');
        newInstitution.innerHTML = `<h3 class="institution-title">${elem.institution}</h3>`;
        console.log(elem)
        institutionsList.appendChild(newInstitution);
        console.log(institutionsList);


        newInstitution.addEventListener("click", function(){

            console.log("hola");
            console.log(elem.name)
            datos = elem;
            console.log(datos);
            window.location.href = 'InstitucionEspecifico.html';
            })

    });
}

function buildGrupsArray(grupsItem) {
    return {
    code: grupsItem[0],
    name: grupsItem[1],
    vinculation: grupsItem[2],
    area1: grupsItem[3],
    area2: grupsItem[4],
    area3: grupsItem[5],
    cvlac: grupsItem[6],
    id: grupsItem[7],
    leader: grupsItem[8],
    institution: grupsItem[9],
    latitud:grupsItem[10],
    longitud: grupsItem[11],
    direction: grupsItem[12],
    sector: grupsItem[13],
    town:grupsItem[14],
    creationYear: grupsItem[15],
    description: grupsItem[16],
    lineOfResearch: grupsItem[17],
    lineOfResearch1: grupsItem[18],
    lineOfResearch2: grupsItem[19],
    lineOfResearch3: grupsItem[20],
    lineOfResearch4: grupsItem[21],
    lineOfResearch5: grupsItem[22],
    lineOfResearch6: grupsItem[23],
    numberOfInvest: grupsItem[24],
    }
    }