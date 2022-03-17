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

const groupList = document.querySelector('.content-group');

function renderGroup (list) {
    groupList.innerHTML = '';
    list.forEach(function (elem) {
        const newGroup = document.createElement('div');
        newGroup.classList.add('group');
    
      newGroup.innerHTML = `
      
      <div class="group-info">
        <h3 class="group-title">${elem.title}</h3>

        
      </div>

      <div class="group-cantidad">
      <img class="group-img" src="./../Imgs/cantidad.png" alt="">
      <p class="group-number">${elem.cantidad}</p>

      </div>

      <div class="group-subtitle">

      <p class="group-area">${elem.area}</p>

      </div>

      
      `;
    
      groupList.appendChild(newGroup);
    });
  }


  renderGroup(group);

