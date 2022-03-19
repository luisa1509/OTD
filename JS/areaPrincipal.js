/*
*    main.js
*    Mastering Data Visualization with D3.js
*    5.2 - Looping with intervals
*/

const MARGIN = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH = 1000 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM

const svg = d3.select("#chart-area").append("svg")
  .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
  .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

const g = svg.append("g")
  .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

  // Tooltip
const tip = d3.tip()
.attr('class', 'd3-tip')
.html(d => {
  let text = `<strong>Área:</strong> <span style='color:#CC3454;text-transform:capitalize'>${d.area}</span><br>`
  text += `<strong>Cantidad:</strong> <span style='color:#CC3454;text-transform:capitalize'>${d.cantidad}</span><br>`
  return text
})
g.call(tip)

  
// X label
g.append("text")
  .attr("class", "x axis-label")
  .attr("x", WIDTH / 2)
  .attr("y", HEIGHT + 50)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("fill","#2A2A2F")
  .text("Área")
  

// Y label
g.append("text")
  .attr("class", "y axis-label")
  .attr("x", - (HEIGHT / 2))
  .attr("y", -40)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .attr("fill","#2A2A2F")
  .text("Cantidad de Grupos")
  



  let grupsTeam = [];
  let codeList = [];
  let areaList = [];
  let resultado =[];
  d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vScBDb9gEYhv0Fprocreyq41kXXwT1V7RFAdQlAGl5WlChscQc5qmhFNSb6ZW_GZQ/pub?output=csv&gid=232416215").then(data => {
  console.log(data);
  data.forEach((element) => {
  grupsTeam.push(buildGrupsArray(element));
  });
  
  for (let i=0; i<grupsTeam.length; i++){
  codeList.push(grupsTeam[i].code);
  areaList.push(grupsTeam[i].area1);
  

  
  grupsTeam.forEach(d => {
  d.area1 = (d.area1)
  })
  }
  console.log(grupsTeam);

  
   resultado= areaList.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), [])
  console.log({resultado});
  
  console.log(resultado['Ciencias Sociales'])
  console.log(resultado['Humanidades'])
  console.log(resultado['Ingeniería y Tecnología'])
  console.log(resultado['Otras Humanidades'])

  function buildGrupsArray(data) {
  return {
  code: data["Código del grupo de investigación"],
  name: data["Nombre del grupo de investigación"],
  vinculation: data["Grupo vinculado a la RAD (SI/NO)"],
  area1: data["Area de actuación principal del grupo"],
  area2: data["Area de actuación del grupo (2)"],
  area3: data["Area de actuación del grupo (3)"],
  cvlac: data["CVLac del grupo"],
  id: data["Identificador del grupo de investigación"],
  leader: data["Líder del grupo"],
  institution: data["IES a la que pertenece"],
  sector: data["Sector de la IES"],
  town: data["Ciudad en la que se ubica el grupo"],
  creationYear: data["Año conformación"],
  description: data["Descripción del grupo"],
  lineOfResearch: data["Líneas de investigación declaradas por el grupo"],
  lineOfResearch1: data["Líneas de investigación declaradas por el grupo (2)"],
  lineOfResearch2: data["Líneas de investigación declaradas por el grupo (3)"],
  lineOfResearch3: data["Líneas de investigación declaradas por el grupo (4)"],
  lineOfResearch4: data["Líneas de investigación declaradas por el grupo (5)"],
  lineOfResearch5: data["Líneas de investigación declaradas por el grupo (6)"],
  lineOfResearch6: data["Líneas de investigación declaradas por el grupo (7)"],
  }
  }
  

  const x = d3.scaleBand()
    .domain(grupsTeam.map(d => d.area1))
    .range([0, WIDTH])
    .paddingInner(0.3)
    .paddingOuter(0.2)
  
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.cantidad)])
    .range([HEIGHT, 0])

  const xAxisCall = d3.axisBottom(x)
  g.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${HEIGHT})`)
    .call(xAxisCall)
    .attr("color","#52525A")
    .selectAll("text")
      .attr("y", "10")
      .attr("x", "-5")
      .attr("text-anchor", "center")
      .attr("transform", "rotate(0)")
      .attr("font-family", "Avenir LT Std")

  const yAxisCall = d3.axisLeft(y)
    .ticks(10)
    .tickFormat(d => d + "")
  g.append("g")
    .attr("class", "y axis")
    .call(yAxisCall)
    .attr("color","#52525A")

  const rects = g.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", d => y(d.cantidad))
    .attr("x", (d) => x(d.area1))
    .attr("width", x.bandwidth)
    .attr("height", d => HEIGHT - y(d.cantidad))
    .attr("fill", d => d.color)
    .attr("rx","5px")

		.on("mouseover", tip.show)
		.on("mouseout", tip.hide)
		.merge(rects)



    
 

  


  
})







