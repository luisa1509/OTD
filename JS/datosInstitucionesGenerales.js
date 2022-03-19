let grupsTeam = [];
let nameInstList = [];


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
        renderInstitutions(nameInstList)
    }
, 10000);
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
    
    for (let i=0; i<grupsTeam.length; i++){
        nameInstList.push(grupsTeam[i].institution);
    }
    console.log(nameInstList);
}

function renderInstitutions (grupsTeam) {
    console.log("-----------------------")
    console.log(grupsTeam.length)
    grupsTeam.forEach( (elem) => {
        const newInstitution = document.createElement('div');
        newInstitution.classList.add('institution');
        newInstitution.innerHTML = `<h3 class="institution-title">${elem}</h3>`;
        console.log(elem)
        institutionsList.appendChild(newInstitution);
        console.log(institutionsList);
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
        sector: grupsItem[10],
        town: grupsItem[11],
        creationYear: grupsItem[12],
        description: grupsItem[13],
        lineOfResearch: grupsItem[14],
        lineOfResearch1: grupsItem[15],
        lineOfResearch2: grupsItem[16],
        lineOfResearch3: grupsItem[17],
        lineOfResearch4: grupsItem[18],
        lineOfResearch5: grupsItem[19],
        lineOfResearch6: grupsItem[20],
    }
}



