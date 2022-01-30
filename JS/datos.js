const institutions = [
    {
        title: 'Servicio Nacional De Aprendizaje Sena',
        color: '#97D8C4'
    },

    {
        title: 'Universidad Pontificia Bolivariana',
        color: '#FFE9CE'
    },

    {
        title: 'Universidad Eafit',
        color: '#CCCFF1'
    },

    {
        title: 'Universidad Autonoma Del Caribe',
        color: '#DEC0C5'
    },

    {
        title: 'Fundación Universidad Del Norte',
        color: '#BAA3C0'
    },

    {
        title: 'Universidad Nacional De Colombia',
        color: '#FF9BAD'
    },

    {
        title: 'Universidad El Bosque',
        color: '#F2CD30'
    },

    {
        title: 'Universidad Jorge Tadeo Lozano',
        color: '#6B9AC4'
    },

    {
        title: 'Pontificia Universidad Javeriana',
        color: '#C4EE68'
    },

    {
        title: 'Universidad De Los Andes',
        color: '#E0D99D'
    },

    {
        title: 'Fundacion Universitaria Del Area Andina',
        color: ''
    },

    {
        title: 'Fundacion Universitaria Horizonte',
        color: '#97D8C4'
    },

    {
        title: 'Universidad Pedagógica Y Tecnológica De Colombia',
        color: '#97D8C4'
    },

    {
        title: 'Universidad De Boyacá',
        color: '#97D8C4'
    },

    {
        title: 'Universidad Autonoma De Manizales',
        color: '#97D8C4'
    },

    {
        title: 'Universidad De Caldas',
        color: '#97D8C4'
    },

    {
        title: 'Colegio Mayor Del Cauca - Institución Universitaria',
        color: '#97D8C4'
    },

    {
        title: 'Universidad De Nariño',
        color: '#97D8C4'
    },

    {
        title: 'Universidad Cesmag',
        color: '#97D8C4'
    },

    {
        title: 'Universidad Catolica De Pereira',
        color: '#97D8C4'
    }
    
];

const institutions = document.querySelector('.content-institutions');
const newInstitution = document.createElement('.institution');
newInstitution.classList.add('.institution');
newInstitution.innerHTML =  `
<h3 class="institution_title">Institución</h3>`;
institutions.appendChild(newInstitution);

