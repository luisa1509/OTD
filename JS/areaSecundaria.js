/*
*    main.js
*    Mastering Data Visualization with D3.js
*    5.2 - Looping with intervals
*/

const MARGIN2 = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH2 = 1000 - MARGIN2.LEFT - MARGIN2.RIGHT
const HEIGHT2 = 400 - MARGIN2.TOP - MARGIN2.BOTTOM

const svg2 = d3.select("#chart-area2").append("svg")
  .attr("width", WIDTH2 + MARGIN2.LEFT + MARGIN2.RIGHT)
  .attr("height", HEIGHT2 + MARGIN2.TOP + MARGIN2.BOTTOM)

const g2 = svg2.append("g")
  .attr("transform", `translate(${MARGIN2.LEFT}, ${MARGIN2.TOP})`)


  // Tooltip
  const tip2 = d3.tip()
  .attr('class', 'd3-tip')
  .html(d => {
    let text = `<strong>Área:</strong> <span style='color:#CC3454;text-transform:capitalize'>${d.area}</span><br>`
    text += `<strong>Cantidad:</strong> <span style='color:#CC3454;text-transform:capitalize'>${d.cantidad}</span><br>`
    return text
  })
  g2.call(tip2)
  

// X label
g2.append("text")
  .attr("class", "x axis-label")
  .attr("x", WIDTH2 / 2)
  .attr("y", HEIGHT2 + 100)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("fill","#2A2A2F")
  .text("Área")

// Y label
g2.append("text")
  .attr("class", "y axis-label")
  .attr("x", - (HEIGHT2 / 2))
  .attr("y", -40)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .attr("fill","#2A2A2F")
  .text("Cantidad de Grupos")

d3.csv(".././data/areaSecundaria.csv").then(data => {
  data.forEach(d => {
    d.cantidad = Number(d.cantidad)
    d.color = d.color;
  })

  const x = d3.scaleBand()
    .domain(data.map(d => d.area))
    .range([0, WIDTH2])
    .paddingInner(0.3)
    .paddingOuter(0.2)
  
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.cantidad)])
    .range([HEIGHT2, 0])

  const xAxisCall = d3.axisBottom(x)
  g2.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${HEIGHT2})`)
    .call(xAxisCall)
    .attr("color","#52525A")
    .selectAll("text")
      .attr("y", "10")
      .attr("x", "-5")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-30)")
      .attr("font-family", "Avenir LT Std")

  const yAxisCall = d3.axisLeft(y)
    .ticks(5)
    .tickFormat(d => d + "")
  g2.append("g")
    .attr("class", "y axis")
    .call(yAxisCall)
    .attr("color","#52525A")

  const rects = g2.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", d => y(d.cantidad))
    .attr("x", (d) => x(d.area))
    .attr("width", x.bandwidth)
    .attr("height", d => HEIGHT2 - y(d.cantidad))
    .attr("fill", d => d.color)
    .attr("rx","5px")

		.on("mouseover", tip2.show)
		.on("mouseout", tip2.hide)
		.merge(rects)


})