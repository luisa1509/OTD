/*
*    main.js
*    Mastering Data Visualization with D3.js
*    5.2 - Looping with intervals
*/

const MARGIN3 = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH3 = 600 - MARGIN3.LEFT - MARGIN3.RIGHT
const HEIGHT3 = 400 - MARGIN3.TOP - MARGIN3.BOTTOM

const svg3 = d3.select("#chart-area3").append("svg")
  .attr("width", WIDTH3 + MARGIN3.LEFT + MARGIN3.RIGHT)
  .attr("height", HEIGHT3 + MARGIN3.TOP + MARGIN3.BOTTOM)

const g3 = svg3.append("g")
  .attr("transform", `translate(${MARGIN3.LEFT}, ${MARGIN3.TOP})`)

  // Tooltip
  const tip3 = d3.tip()
  .attr('class', 'd3-tip')
  .html(d => {
    let text = `<strong>Área:</strong> <span style='color:#CC3454;text-transform:capitalize'>${d.area}</span><br>`
    text += `<strong>Cantidad:</strong> <span style='color:#CC3454;text-transform:capitalize'>${d.cantidad}</span><br>`
    return text
  })
  g3.call(tip3)
  

// X label
g3.append("text")
  .attr("class", "x axis-label")
  .attr("x", WIDTH3 / 2)
  .attr("y", HEIGHT3 + 100)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("fill","#2A2A2F")
  .text("Área")

// Y label
g3.append("text")
  .attr("class", "y axis-label")
  .attr("x", - (HEIGHT3 / 2))
  .attr("y", -40)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .attr("fill","#2A2A2F")
  .text("Cantidad de Grupos")

d3.csv("data/areaTercera.csv").then(data => {
  data.forEach(d => {
    d.cantidad = Number(d.cantidad)
    d.color = d.color;
  })

  const x = d3.scaleBand()
    .domain(data.map(d => d.area))
    .range([0, WIDTH3])
    .paddingInner(0.3)
    .paddingOuter(0.2)
  
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.cantidad)])
    .range([HEIGHT3, 0])

  const xAxisCall = d3.axisBottom(x)
  g3.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${HEIGHT3})`)
    .call(xAxisCall)
    .attr("color","#52525A")
    .selectAll("text")
      .attr("y", "10")
      .attr("x", "-5")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-40)")
      .attr("font-family", "Avenir LT Std")

  const yAxisCall = d3.axisLeft(y)
    .ticks(7)
    .tickFormat(d => d + "")
  g3.append("g")
    .attr("class", "y axis")
    .call(yAxisCall)
    .attr("color","#52525A")

  const rects = g3.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", d => y(d.cantidad))
    .attr("x", (d) => x(d.area))
    .attr("width", x.bandwidth)
    .attr("height", d => HEIGHT3 - y(d.cantidad))
    .attr("fill", d => d.color)
    .attr("rx","5px")

		.on("mouseover", tip3.show)
		.on("mouseout", tip3.hide)
		.merge(rects)


  
})