let grupsTeam = [];
let datos;

let loader = document.querySelector(".loader");
const order = document.querySelector(".filter");

const loaderGeneral = document.querySelector(".loaderGeneral");
const groupList = document.querySelector('.content-group');
let colors = document.querySelector('.colorsContent');
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

loader.classList.add('loader--show');
colors.classList.add('colorsContent--hide');

//const myTimeout = setTimeout(myGreeting, 5000);
async function updateValues() {
    /**
    * Request data from pages
    */
    const grups = "https://docs.google.com/spreadsheets/d/e/2PACX-1vScBDb9gEYhv0Fprocreyq41kXXwT1V7RFAdQlAGl5WlChscQc5qmhFNSb6ZW_GZQ/pub?gid=232416215&single=true&output=csv&gid=232416215";
    let grupsArray = await getDataAsJsonFrom(grups)
    grupsArray.forEach((element, index) => {
        if (index != 0) {
            grupsTeam.push(buildGrupsArray(element));
        }

    })
    loader.classList.remove('loader--show');
    loaderGeneral.classList.add('loaderGeneral--hide');
    colors.classList.remove('colorsContent--hide');
    renderGroup(grupsTeam)
}


function renderGroup(grupsTeam) {
    groupList.innerHTML = "";
    grupsTeam.forEach((elem) => {



        datos = elem;
        const newGroup = document.createElement('div');
        newGroup.classList.add('group');
        newGroup.style = "cursor:pointer;";
        newGroup.innerHTML = `
        <div style="cursor:pointer;" class="group-info">
        <h3 class="group-title">${elem.name}</h3>
        </div>
        <div style="cursor:pointer;" class="group-cantidad">
        <img class="group-img" src="./../Imgs/cantidad.png" alt="">
        <p class="group-number">${elem.numberOfInvest}</p>
        </div>
        <div class="group-subtitle">
        <p class="group-area">${elem.area1}</p>
        </div>

        `;
        groupList.appendChild(newGroup);



        newGroup.addEventListener("click", function () {
            datos = elem;
            window.location.href = 'GruposEspecifico.html?cod=' + elem.code;
        })

        if(elem.numberOfInvest>15 && elem.numberOfInvest<29){
            newGroup.style="background-color:#E0B8BF;";
            
            
            newGroup.addEventListener("mouseover", function(){
                
                newGroup.style="background:darken (#E0B8BF, 6%);";
            });
            newGroup.addEventListener("mouseout", function(){
                newGroup.style="background: #E0B8BF;";
            });
        }

        if(elem.numberOfInvest>30 ){
            newGroup.style="background-color:#DD8E9C;";
            
            
            newGroup.addEventListener("mouseover", function(){
                newGroup.style="background:darken (#DD8E9C, 6%);";
                
            });
            newGroup.addEventListener("mouseout", function(){
                newGroup.style="background: #DD8E9C;";
            });
        }




    });

}

let areas = []



function humReturns() {
    

    order.addEventListener('input', function () {
        let arrayFilter = [...grupsTeam];
        console.log(arrayFilter)

        let orderSelect = order.value;
        console.log(orderSelect);

        if (orderSelect == "original") {
            renderGroup(arrayFilter);
        }

        if (orderSelect == "hum") {
            //arrayFilter = [];
            arrayFilter = arrayFilter.filter(g => {
                return g.area1 == "Humanidades"
            })
            renderGroup(arrayFilter);
            console.log(arrayFilter);
        }

        if (orderSelect == "ing") {
            //arrayFilter = [];
            arrayFilter = arrayFilter.filter(g => {
                return g.area1 == "Ingeniería y Tecnología"
            })
            renderGroup(arrayFilter);
            console.log(arrayFilter);
        }

        if (orderSelect == "other") {
            //arrayFilter = [];
            arrayFilter = arrayFilter.filter(g => {
                return g.area1 == "Otras Humanidades"
            })
            renderGroup(arrayFilter);
            console.log(arrayFilter);
        }

        if (orderSelect == "soc") {
            //arrayFilter = [];
            arrayFilter = arrayFilter.filter(g => {
                return g.area1 == "Ciencias Sociales"
            })
            renderGroup(arrayFilter);
            console.log(arrayFilter);
        }



    })

}


humReturns();


setTimeout(
    () => {
        /*renderGroup(arrayFilter);
        loader.classList.remove('loader--show');
        loaderGeneral.classList.add('loaderGeneral--hide');
        colors.classList.remove('colorsContent--hide');*/
    }
    , 3000);







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
        latitud: grupsItem[10],
        longitud: grupsItem[11],
        direction: grupsItem[12],
        sector: grupsItem[13],
        town: grupsItem[14],
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
        logoIes: grupsItem[25],
    }
}