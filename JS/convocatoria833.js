/*
*    main.js
*    Mastering Data Visualization with D3.js
*    5.2 - Looping with intervals
*/

const MARGIN4 = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH4 = 1000 - MARGIN4.LEFT - MARGIN4.RIGHT
const HEIGHT4 = 400 - MARGIN4.TOP - MARGIN4.BOTTOM

const svg4 = d3.select("#chart-area").append("svg")
  .attr("width", WIDTH4 + MARGIN4.LEFT + MARGIN4.RIGHT)
  .attr("height", HEIGHT4 + MARGIN4.TOP + MARGIN4.BOTTOM)

const g4 = svg4.append("g")
  .attr("transform", `translate(${MARGIN4.LEFT}, ${MARGIN4.TOP})`)

    // Tooltip
const tip4 = d3.tip()
.attr('class', 'd3-tip')
.html(d => {
  let text = `<strong>Categoría:</strong> <span style='color:#CC3454;text-transform:capitalize'>${d.categoria}</span><br>`
  text += `<strong>Cantidad:</strong> <span style='color:#CC3454;text-transform:capitalize'>${d.cantidad}</span><br>`
  return text
})
g4.call(tip4)

// X label
g4.append("text")
  .attr("class", "x axis-label")
  .attr("x", WIDTH4 / 2)
  .attr("y", HEIGHT4 + 60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Categoría")
  .attr("fill","#2A2A2F")

// Y label
g4.append("text")
  .attr("class", "y axis-label")
  .attr("x", - (HEIGHT4 / 2))
  .attr("y", -60)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Cantidad")
  .attr("fill","#2A2A2F")

d3.csv("../data/convocatoria833.csv").then(data => {
  data.forEach(d => {
    d.cantidad = Number(d.cantidad);
    d.color = d.color;
    console.log(d.color);
  })

  const x = d3.scaleBand()
    .domain(data.map(d => d.categoria))
    .range([0, WIDTH4])
    .paddingInner(0.3)
    .paddingOuter(0.2)
  
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.cantidad)])
    .range([HEIGHT4, 0])

  const xAxisCall = d3.axisBottom(x)
    .ticks(6)
  g4.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${HEIGHT4})`)
    .call(xAxisCall)
    .attr("color","#52525A")
    
    .selectAll("text")
      .attr("y", "10")
      .attr("x", "0")
      .attr("text-anchor", "center")
      .attr("transform", "rotate(0)")
      

  const yAxisCall = d3.axisLeft(y)
    .ticks(5)
    .tickFormat(d => d + "")
  g4.append("g")
    .attr("class", "y axis")
    .call(yAxisCall)
    .attr("color","#52525A")


    

  const rects = g4.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", d => y(d.cantidad))
    .attr("x", (d) => x(d.categoria))
    .attr("width", x.bandwidth)
    .attr("height", d => HEIGHT4 - y(d.cantidad))
    .attr("fill", d => d.color)
    .attr("rx","5px")
    .attr("createPattern","img/arrow.png")
    .on("mouseover", tip4.show)
		.on("mouseout", tip4.hide)
		.merge(rects)


    // var img = new Image();
    // img.src = "img/arrow.png";
    // img.onload = function() {
    // var pattern = rects.createPattern(img, "repeat");
    // rects.fillStyle = pattern;
    // rects.fillRect(0, 0, 300, 300);
    // };



})

