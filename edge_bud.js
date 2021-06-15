
//var svg_t = d3.select("#right").append("svg").attr("width", 600).attr("height", 400);

var color = d3.scaleOrdinal(d3.schemeCategory20c);

//UpdateTechnicalNet()

function UpdateEmailNet(){
  var color = d3.scaleOrdinal(d3.schemeCategory20c);

  var svg = d3.select("#middlesvg")

  svg.selectAll("*").remove();

  var data = eval(readTextFile(`new_final_network/p${forceProperties.selected_data.project}m${forceProperties.selected_data.month}_email.json`));
  // console.log(data)

//var svg = d3.select("#rightsvg")

//svg.append("text").attr("x",250).attr("y",70)
//  .attr("class","header").text("Technical Contribution Network");



var g = svg.append("g").attr("transform","translate(185,45)");

var bp=viz.bP()
    .data(data)
    .min(20)
    .pad(1)
    .height(250)
    .width(350)
    .barSize(20)
    .fill(d=>color(d.primary));


g.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", "-12em")
  .attr("x", "-10em")
  .style("text-anchor", "middle")
  .attr("fill", "white")
  .style("font-size", "14px")
  .text("Sender Nodes");

g.append("text")
  .attr("transform", "rotate(90)")
  .attr("y", "-40em")
  .attr("x", "7em")
  .style("text-anchor", "right")
  .attr("fill", "white")
  .style("font-size", "14px")
  .text("Receiver Nodes");

 


g.call(bp)
console.log(g)
//g.append("text").attr("x",-50).attr("y",-8).style("text-anchor","middle").text("Developer");
//g.append("text").attr("x", 250).attr("y",-8).style("text-anchor","middle").text("File Extension");

//g.append("line").attr("x1",-100).attr("x2",0);
//g.append("line").attr("x1",200).attr("x2",300);

//g.append("line").attr("y1",610).attr("y2",610).attr("x1",-100).attr("x2",0);
//g.append("line").attr("y1",610).attr("y2",610).attr("x1",200).attr("x2",300);

g.selectAll(".mainBars")
  .on("mouseover",mouseover)
  .on("mouseout",mouseout)
  .on("click",clixked);

g.selectAll(".mainBars").append("text").attr("class","label")
  .attr("x",d=>(d.part=="primary"? -32: 32))
  .attr("y",d=>+6)
  // .text(d=>d.part=="primary"? d.key: "." + d.key)
  .text(d=>d.part=="primary"? d.key: d.key)
  .attr("fill", "white")
  .attr("text-anchor",d=>(d.part=="primary"? "end": "start"))
  .style("font-size", "14px");


g.selectAll(".mainBars").append("text").attr("class","perc")
  .attr("x",d=>(d.part=="primary"? 23:-20))
  .attr("y",d=>+6)
  .text(function(d){ return d3.format("0.0%")(d.percent)})
  .attr("text-anchor",d=>(d.part=="primary"? "end": "start"))
  .attr("fill", "white")
  .style("font-size", "14px");

/*
g.selectAll(".mainBars").append("text").attr("class","perc")
  .attr("x",d=>(d.part=="primary"? -130: 130))
  .attr("y",d=>+6)
  .text(function(d){ return d.value})
  .attr("text-anchor",d=>(d.part=="primary"? "end": "start"));
*/
// console.log(data[0][0])
function clixked(d){
  
  var nodeTextS
  nodeTextS=d
  const namesS=[];
  var f=d3.select(this);
  // nodeTextS.each(d => namesS.push("  ".repeat(d.depth) + `${d.depth}: ${d.data.name}`));
  // console.log(namesS)
  // console.log('shshshyworked')
  // console.log(f)
  // console.log(f['_groups']['0'].text())
  console.log(d.key)
  console.log(Object.keys(g))
  console.log(d3.select(this))

  

  // console.log(f.text())
  // commit_node
  document.getElementById("current_node").innerHTML=d.key
  // document.getElementById("current_node").innerHTML =  commiter_name;
}

function mouseover(d){
  d3.select(this).attr("font-weight", "bold")
  // console.log()
  // d3.select(this).style("fill", "red");
  bp.mouseover(d);
  g.selectAll(".mainBars").select(".perc")
  .text(function(d){ return d3.format("0.0%")(d.percent)});

}

function mouseout(d){
  d3.select(this).attr("font-weight", null);
  bp.mouseout(d);
  g.selectAll(".mainBars").select(".perc")
  .text(function(d){ return d3.format("0.0%")(d.percent)});
}

//d3.select(self.frameElement).style("height", "800px");

}





//d3.select(self.frameElement).style("height", "800px");


// End tehnical net //////



