
function new_chart(){
    var this_project = document.getElementById("txt_ide").value;
    var name_to_id = JSON.parse(readTextFile("name_to_id.json")); 
    // we have stored the name_to_id conversion in order to convert the project name to ids
    var ids=name_to_id[this_project]
    console.log(ids)
    
    // this gets the current month being used 
    var this_month= document.getElementById("MaxIncubation").value;
    console.log(this_month)
}

create_chart()

function create_chart(){
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 120 - margin.top - margin.bottom;

// parse the date / time
// var parseTime = d3.timeParse("%d-%b-%y"),
    // formatDate = d3.timeFormat("%d-%b"),
var bisectDate = d3.bisector(function(d) { return d.date; }).left;

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

var  area = d3.area()
	.x(function(d) { return x(d.date); })
	.y0(height)
	.y1(function(d) { return y(d.close); });    

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#my_dataviz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Adding a separate group to 'layer' the objects
var lineSvg = svg.append("g");

var focus = svg.append("g") 
    .style("display", "none");

// Get the data
link="f_data.csv"
var data_path= `${link}`
d3.csv(data_path).then(function(data) {

  // format the data
  data.forEach(function(d) {
      d.date = +d.date
      d.close = +d.close;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);

  // Add the valueline path.
  lineSvg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

    // Add the x Axis
// svg.append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x));  
svg.append("g")
// .attr("class", "axis")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x).ticks(15))
.style("stroke-width", "0.3px")
.style('fill', 'white')
.style("stroke", 'white')
.selectAll("text")	
  .style("text-anchor", "end")
  .attr("dx", "-.8em")
  .attr("dy", ".15em")
  .style('fill', 'white')
  .attr("transform", "rotate(-45)");


  // Add the y Axis
  svg.append("g")
  .style('fill', 'white')
  .style("stroke-width", "0.5px")
  .style("stroke", 'white')
  .call(d3.axisLeft(y).ticks(5))
  .selectAll("text")	
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.1em")
    .style('fill', 'white');
    // .attr("transform", "rotate(-45)"); 
svg.append("text")             
    .attr("transform",
          "translate(" + (width/2) + " ," + 
                         (height + margin.top + 11) + ")")
    .style("text-anchor", "middle")
    .text("Date");

  // Add the X Axis
//   svg.append("g")
//       .attr("transform", "translate(0," + height+ ")")
//       .style("stroke-width", "1px")
//       .style("stroke", "white")

//       .call(d3.axisBottom(x));

//   // Add the Y Axis
//   svg.append("g")
//       .call(d3.axisLeft(y))
//       .style("stroke", "white");
var color = d3.scaleOrdinal(d3.schemeCategory20c);
//  area filling color 
  svg.append("path")
      .datum(data)
      .attr("class", "area")
      .style("opacity", 0.5)
      .style('fill',color)
      .attr("d", area);

  // append the x line
  focus.append("line")
      .attr("class", "x")
      .style("stroke", "red")
      .style("stroke-dasharray", "3,3")
      .style("opacity", 1)
      .attr("y1", 0)
      .attr("y2", height);

  // append the y line
  focus.append("line")
      .attr("class", "y")
      .style("stroke", "red")
      .style("stroke-dasharray", "3,3")
      .style("opacity", 0.5)
      .attr("x1", width)
      .attr("x2", width);

  // append the circle at the intersection 
  focus.append("circle")
      .attr("class", "y")
      .style("fill", "none")
      .style("stroke", "red")
      .attr("r", 4);
//  where you need to change the text 
    // place the value at the intersection
    focus.append("text")
        .attr("class", "y1")
        // .style("stroke", "white")
        // .style("stroke-width", "15px")
        .style('fill', 'white')
        .style("opacity", 1)
        .attr("dx", 8)
        .attr("dy", "-.3em");
    // focus.append("text")
    //     .attr("class", "y2")
    //     .style('fill', 'white')
    //     .attr("dx", 8)
    //     .attr("dy", "-.3em");

    // place the date at the intersection
    // focus.append("text")
    //     .attr("class", "y3")
    //     .style("stroke", "white")
    //     // .style("stroke-width", "3.5px")
    //     // .style("opacity", 0.8)
    //     .attr("dx", 8)
    //     .attr("dy", "1em");
    focus.append("text")
        .attr("class", "y4")
        .style('fill', 'white')
        .attr("dx", 8)
        .attr("dy", "1.5em");
  
  // append the rectangle to capture mouse
  svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", function() { focus.style("display", null);})
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
	  var x0 = x.invert(d3.pointer(event,this)[0]),
		  i = bisectDate(data, x0, 1),
		  d0 = data[i - 1],
		  d1 = data[i],
		  d = x0 - d0.date > d1.date - x0 ? d1 : d0;

	focus.select("circle.y")
    .style("stroke", "red")
    .style("fill", "red")
	   .attr("transform",
	         "translate(" + x(d.date) + "," +
	                        y(d.close) + ")");

		focus.select("text.y1")
		    .attr("transform",
		          "translate(" + x(d.date) + "," +
		                         y(d.close) + ")")
		    .text(d.close);

		focus.select("text.y2")
		    .attr("transform",
		          "translate(" + x(d.date) + "," +
		                         y(d.close) + ")")
		    .text(d.close);

		focus.select("text.y3")
		    .attr("transform",
		          "translate(" + x(d.date) + "," +
		                         y(d.close) + ")")
                                .text((d.date));

		focus.select("text.y4")
		    .attr("transform",
		          "translate(" + x(d.date) + "," +
		                         y(d.close) + ")")
                            .text((d.date));

		focus.select(".x")
		    .attr("transform",
		          "translate(" + x(d.date) + "," +
		                         y(d.close) + ")")
		               .attr("y2", height - y(d.close));

		focus.select(".y")
		    .attr("transform",
		          "translate(" + width * -1 + "," +
		                         y(d.close) + ")")
		               .attr("x2", width + width);
    
  }
  console.log('finallY>>>')
});

}
//  }
//  end of function 

// ----------------------------------//



// // Set the dimensions of the canvas / graph
// var margin = {top: 15, right: 20, bottom: 25, left: 50},
//     width = 900 - margin.left - margin.right,
//     height = 120 - margin.top - margin.bottom;

// // Parse the date / time
// // var parseDate = d3.time.format("%d-%b-%y").parse,
//     // formatDate = d3.time.format("%d-%b"),
// var bisectDate = d3.bisector(function(d) { return d.date; }).left;

// // Set the ranges
// // var x = d3.time.scale().range([0, width]);
// var x = d3.scale.linear().range([0, width]);
// var y = d3.scale.linear().range([height, 0]);


// // Define the axes
// var xAxis = d3.svg.axis().scale(x)
//     .orient("bottom").ticks(5);

// var yAxis = d3.svg.axis().scale(y)
//     .orient("left").ticks(5);



// // Define the line
// var valueline = d3.svg.line()
//     .x(function(d) { return x(d.date); })
//     .y(function(d) { return y(d.close); });
//  //here 
   
// // Adds the svg canvas
// var svg = d3.select("#my_dataviz")
//     .append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
  
//     .append("g")
//         .attr("transform", 
//               "translate(" + margin.left + "," + margin.top + ")");

// var lineSvg = svg.append("g"); 

// var focus = svg.append("g") 
//     .style("display", "none");

// var  area = d3.svg.area()
// 	.x(function(d) { return x(d.date); })
// 	.y0(height)
// 	.y1(function(d) { return y(d.close); });    

// // Get the data
// d3.csv("f_data.csv", function(error, data) {
//     data.forEach(function(d) {
//         // d.date = parseDate(d.date);
//         d.date = +d.date;
//         d.close = +d.close;
//     });

//     // Scale the range of the data
//     x.domain(d3.extent(data, function(d) { return d.date; }));
//     y.domain([0, d3.max(data, function(d) { return d.close; })]);

    

//     // Add the valueline path.
//     lineSvg.append("path")
//         .attr("class", "line")
//         .attr("d", valueline(data));

//     // Add the X Axis
//     svg.append("g")
//         .attr("class", "x axis")
//         .attr("transform", "translate(0," + height + ")")
//         .style("fill", "white")
//         .call(xAxis);

//     // Add the Y Axis
//     svg.append("g")
//         .attr("class", "y axis")
//         .style("fill", "white")
//         .call(yAxis);

//     svg.append("path")
// 		.datum(data)
// 		.attr("class", "area")
//         .style("opacity", 0.3)
// 		.attr("d", area);

//    // append the x line
//     focus.append("line")
//         .attr("class", "x")
//         .style("stroke", "salmon")
//         .style("stroke-dasharray", "3,3")
//         .style("opacity", 0.5)
//         .attr("y1", 0)
//         .attr("y2", height);

//     // append the y line
//     focus.append("line")
//         .attr("class", "y")
//         .style("stroke", "salmon")
//         .style("stroke-dasharray", "3,3")
//         .style("opacity", 0.7)
//         .attr("x1", width)
//         .attr("x2", width);

//     // append the circle at the intersection
//     focus.append("circle")
//         .attr("class", "y")
//         .style("fill", "red")
//         .style("stroke", "red")
//         .attr("r", 4);


//     // place the value at the intersection
//     // focus.append("text")
//     //     .attr("class", "y1")
//     //     .style("stroke", "white")
//     //     .style("stroke-width", "3.5px")
//     //     .style("opacity", 0.8)
//     //     .attr("dx", 8)
//     //     .attr("dy", "-.5em");
//     focus.append("text")
//         .attr("class", "y2")
//         .attr("dx", 8)
//         .style("fill", "white")
//         .attr("dy", "0em");

//     // place the date at the intersection
//     // focus.append("text")
//     //     .attr("class", "y3")
//     //     .style("stroke", "white")
//     //     .style("stroke-width", "3.5px")
//     //     .style("opacity", 0.8)
//     //     .attr("dx", 8)
//     //     .attr("dy", "1em");
//     focus.append("text")
//         .attr("class", "y4")
//         .style("fill", "white")
//         .attr("dx", 8)
//         .attr("dy", "2em");
    
//     // append the rectangle to capture mouse
//     svg.append("rect")
//         .attr("width", width)
//         .attr("height", height)
//         .style("fill", "none")
//         .style("pointer-events", "all")
//         .on("mouseover", function() { focus.style("display", null); })
//         .on("mouseout", function() { focus.style("display", "none"); })
//         .on("mousemove", mousemove);

//     function mousemove() {
// 		var x0 = x.invert(d3.mouse(this)[0]),
// 		    i = bisectDate(data, x0, 1),
// 		    d0 = data[i - 1],
// 		    d1 = data[i],
// 		    d = x0 - d0.date > d1.date - x0 ? d1 : d0;

// 		focus.select("circle.y")
// 		    .attr("transform",
// 		          "translate(" + x(d.date) + "," +
// 		                         y(d.close) + ")");

// 		focus.select("text.y1")
// 		    .attr("transform",
// 		          "translate(" + x(d.date) + "," +
// 		                         y(d.close) + ")")
// 		    .text(d.close);

// 		focus.select("text.y2")
// 		    .attr("transform",
// 		          "translate(" + x(d.date) + "," +
// 		                         y(d.close) + ")")
// 		    .text(d.close);

// 		focus.select("text.y3")
// 		    .attr("transform",
// 		          "translate(" + x(d.date) + "," +
// 		                         y(d.close) + ")")
// 		    // .text(formatDate(d.date));
//             .text((d.date));

// 		focus.select("text.y4")
// 		    .attr("transform",
// 		          "translate(" + x(d.date) + "," +
// 		                         y(d.close) + ")")
// 		    // .text(formatDate(d.date));
//             .text((d.date));

// 		focus.select(".x")
// 		    .attr("transform",
// 		          "translate(" + x(d.date) + "," +
// 		                         y(d.close) + ")")
// 		               .attr("y2", height - y(d.close));

// 		focus.select(".y")
// 		    .attr("transform",
// 		          "translate(" + width * -1 + "," +
// 		                         y(d.close) + ")")
// 		               .attr("x2", width + width);
// 	}

// });