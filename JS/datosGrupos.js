const group = [
    {
    title: 'INAMOD',
    area: 'Otras humanidades',
    cantidad: '6'
    },
    
    {
    title: 'Grupo de Investigación en Diseño Gráfico',
    area: 'Humanidades',
    cantidad: '7'
    },
    
    {
    title: 'Grupo de Investigación Diseño de Vestuario y Textiles',
    area: 'Humanidades',
    cantidad: '15'
    },
    
    {
    title: 'Grupo de Investigación de Estudios en Diseño',
    area: 'Humanidades',
    cantidad: '17'
    },
    
    {
    title: 'GRID',
    area: 'Ingeniería y Tecnología',
    cantidad: '13'
    },
    
    {
    title: 'Fibra Interior',
    area: 'Humanidades',
    cantidad: '8'
    },
    
    {
    title: 'Ellipsis',
    area: 'Humanidades',
    cantidad: '11'
    },
    
    {
    title: 'EcoDesarrollo',
    area: 'Otras humanidades',
    cantidad: '12'
    },
    
    {
    title: 'Grupo de investigación en Arquitectura, Urbanismo y Diseño',
    area: 'Humanidades',
    cantidad: '9'
    },
    
    {
    title: 'ILLATIO',
    area: 'Humanidades',
    cantidad: '15'
    },
    
    {
    title: 'MIMA-PRO',
    area: 'Humanidades',
    cantidad: '25'
    },
    
    {
    title: 'Diseño, Imagen y Comunicación',
    area: 'Humanidades',
    cantidad: '35'
    },
    
    {
    title: 'Estudios de la imagen',
    area: 'Humanidades',
    cantidad: '10'
    },
    
    {
    title: 'Gestión de Diseño',
    area: 'Otras humanidades',
    cantidad: '4'
    },
    
    {
    title: 'Diseño, Pensamiento, Creación',
    area: 'Humanidades',
    cantidad: '32'
    },
    
    {
    title: 'Grupo de Investigación en Diseño',
    area: 'Humanidades',
    cantidad: '43'
    },
    
    {
    title: 'Proyecta',
    area: 'Humanidades',
    cantidad: '27'
    },
    
    {
    title: 'Diseño, Ergonomía e Innovación',
    area: 'Humanidades',
    cantidad: '10'
    },
    
    {
    title: 'Poéticas Intertextuales',
    area: 'Humanidades',
    cantidad: '7'
    },
    
    {
    title: 'Responsabilidad social del Diseño en Colombia',
    area: 'Ingeniería y Tecnología',
    cantidad: '3'
    }
    ];
    
    let grupsTeam = [];
    
    
    const groupList = document.querySelector('.content-group');
    
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
    renderGroup(grupsTeam)
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
    }
    
    function renderGroup (grupsTeam) {
    grupsTeam.forEach( (elem) => {
    const newGroup = document.createElement('div');
    newGroup.classList.add('group');
    newGroup.innerHTML = `
    <div class="group-info">
    <h3 class="group-title">${elem.name}</h3>
    </div>
    
    <div class="group-cantidad">
    <img class="group-img" src="./../Imgs/cantidad.png" alt="">
    <p class="group-number">${elem.numberOfInvest}</p>
    
    </div>
    
    <div class="group-subtitle">
    
    <p class="group-area">${elem.area1}</p>
    
    </div>
    
    
    `;
    groupList.appendChild(newGroup);
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
    numberOfInvest: grupsItem[21],
    }
    }
    