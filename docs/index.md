<!DOCTYPE html>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
 
<style type="text/css">
/* Dash Borad */
.container {
  width: 100%;
  height: auto;
  /* background-color:#1d2951; */
  background-color:grey;
  color:white;
  
}
 
img {
    max-width: 100%;
    max-height: auto;
}
 
 
.leftpane {
    width: 15%;
    height: 75%;
    float: left;
}
.leftpane1 {
    width: auto;
    height: auto;
    float: left;
  margin: 5px;
  padding: 5px;
  /* color:white; */
  /* background-color: black; */

  /* border: thin solid black; */
}
 
.leftpane2 {
    width: auto;
    height: auto;
    display: inline-block;
  /* margin-right: 5px; */
  padding: 5px;
  margin: 5px;
  /* border: thin solid black; */
  /* margin-top: 1em; */

}
 
 
.middlepane {
    width: 45%;
    height: 75%;
    float: left;
}
 
.middlepane1 {
    width: auto;
    height: auto;
    float: center;
  margin: 5px;
  padding: 5px;
  /* border: thin solid black; */
}
.middlepane2 {
    width: auto;
    height: auto;
    float: bottom;
  margin: 5px;
  padding: 5px;
  /* border: thin solid black; */
}

.middlepane3 {
    width: auto;
    height: auto;
    float: bottom;
  margin: 5px;
  padding: 5px;
  resize:vertical;
  /* border: thin solid black; */
}

.middlepane4 {
    width: auto;
    height: auto;
    float: bottom;
  margin: 5px;
  padding: 5px;
  /* border: thin solid black; */
}


/* .sender_text {
    width: auto;
    height: auto;
    float: left;
  /* margin: 15px; */
  /* padding-left:150px; */
  /* text-decoration: underline dotted; */
  /* background-color: lightblue;
   */
  /* padding-top:200px; */
  /* transform: rotate(-90deg); */
  /* border: thin solid black; */
/* } */
/* .r_text { */
    /* width: auto; */
    /* height: auto; */
    /* float: right; */
  /* margin: 15px; */
  /* padding-right:190px; */
/* } * */

.rightpane4 {
    width: auto;
    height: auto;
  display: inline-block;
  /* float: left; */
  margin: 5px;
  padding: 5px;
  border: thin solid black;
  /* background-color: #7476b4; */
}

 
.rightpane {
  width: 39.5%;
  height: 75%;
  float: left;
}
 
.rightpane1 {
    width: auto;
    height: auto;
    float: bottom;
  margin: 5px;
  padding: 5px;
  /* border: thin solid black; */
}
.rightpane2 {
    width: auto;
    height: auto;
    float: bottom;
  margin: 5px;
  padding: 5px;
  /* border: thin solid black; */
}

.rightpane3 {
    width: auto;
    height: auto;
  display: inline-block;
  /* float: left; */
  margin: 5px;
  padding: 5px;
  /* border: thin solid black; */
  background-color:#555;
}


 
.toppane {
  width: 100%;
  height: 220px;
  /* border: thin solid black; */
 
}
.one {
  width: 45%;
  height: 200px;
  /* background:lightgoldenrodyellow; */
  float: left;
  /* margin-right: 5px; */
  margin: 5px;
  padding: 5px;
  /* border: thin solid black; */
}
 
.two {
  /* margin-left: 15%; */
  display: inline-block;
  height: 200px;
  width: 50%;
  margin: 5px;
  padding: 5px;
  /* float: center; */
  /* margin-left:; */
  /* background:lightblue; */
  /* border: thin solid black; */
  
 
}
 
</style>
 
<style>
 
.mainBars rect{
  shape-rendering: auto;
  fill-opacity: 0;
  stroke-width: 1.5px;
  stroke:whitesmoke;
  stroke-opacity: 0;
}
.subBars{
  shape-rendering:crispEdges;
}
.edges{
  stroke:none;
  fill: white;
  fill-opacity:0.5;
}
 
/* HTML styles */
html{
width: 100%;}
body{ 
  width: 100%; 
  margin: 0; padding: 0; 
  display: flex; 
  font-size: 110%; }
.controls {
  flex-basis: 200px;
  padding: 0 5px;
}
.controls .force {
  /* background-color:#eee; */
  /* background-color:black; */
  background-color:#555;
  border-radius: 3px;
  padding: 5px;
  margin: 5px 0;
}
 
.controls .title {
  background-color:#555;
  /* background-color:#eee; */
  /* background-color:black; */
  border-radius: 3px;
  padding: 5px;
  margin: 5px 0;
}
 
.controls .title p label { margin-right: .5em; font-size: 140%; font-weight: bold;}
.controls .force p label { margin-right: .5em; font-size: 130%;}
.controls .force p { margin-top: 0;}
.controls .force label { display: inline-block; }
.controls input[type="checkbox"] { transform: scale(1.2, 1.2); }
.controls input[type="range"] { margin: 0 5% 0.5em 5%; width: 500px; }
 
 
 
</style>
 
<style type="text/css">
.node {
  font: 300 14px "Helvetica Neue" ;
  fill: white;
  pointer-events: all;

}
 
.node:hover {
  fill: darkorange;
  /* fill:darkslateblue; */
}
 
.link {
  stroke: #008a5b;
  stroke-opacity: 0.5;
  fill: none;
  pointer-events: none;
}
 
.node:hover,
.node--source,
.node--target {
  font-weight: 700;
}
 
.node--source {
  fill: rgb(43, 158, 230);
}
 
.node--target {
  fill: #db4a69;
}
 
.link--source,
.link--target {
  stroke-opacity: 1;
  stroke-width: 3px;
}
 
.link--source {
  stroke: #db4a69;
}
 
.link--target {
  stroke: rgb(43, 158, 230);
}
 
 
 
</style>
 
 
<style>
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}
 
.dropdown {
  position: relative;
  display: inline-block;
}
 
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
 
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
 
.dropdown-content a:hover {background-color: #ddd;}
 
.dropdown:hover .dropdown-content {display: block;}
 
.dropdown:hover .dropbtn {background-color: #3e8e41;}
/* .dropdown:hover .dropbtn {background-color: purple;} */
 
/* title css */
.title .popupTitle {
                width: 100%;
                height: 35px;
                background-color:  #555;
                text-align: center;
                 font-size: 24px;
                color: white;
                line-height: 35px;

 
            }          
            #home a:link { color:#ffffff; text-decoration: underline; }
            #home a:visited { color:white; text-decoration: none; }
            #home a:hover { color:red; text-decoration: none; }
            #home a:active { color:#7476b4; text-decoration: underline; }

.title .popupTitle:hover {
  transform: scale(1.1);}
/* properties for the month slider */
.controls .force p label { margin-right: .5em; font-size: 100%;}
.controls .force p { margin-top: 0;}
.controls .force label { display: inline-block; }
.controls input[type="checkbox"] { transform: scale(1.2, 1.2); }
.controls input[type="range"] { margin: 0 5% 0.5em 5%; width: 500px; }
/* end of title css */
 
/* header properties  */
header {
    /* background-color:seashell; */
    float:center;
    width: auto;
    padding: 1px;
    font-size: 22px;
    /* border-bottom: thin solid black; */
}
/* end */
 
 
/* p class for the about the project */
p.outset {border-style: outset;
  font-size: 14px;}
/* ends */

/* links  */

#link  a:link { color:#ffffff; text-decoration: underline; }
#link a:visited { color:white; text-decoration: underline; }
#link a:hover { color:red; text-decoration:underline; }
#link a:active { color:#7476b4; text-decoration: underline; }


#repo_link  a:link { color:#ffffff; text-decoration: underline; }
#repo_link a:visited { color:white; text-decoration: underline; }
#repo_link a:hover { color:red; text-decoration:underline; }
#repo_link a:active { color:#7476b4; text-decoration: underline; }

/* for the graduation curve */
path { 
    stroke: white;
    stroke-width: 1;
    fill: none;
}

.axis path,
.axis line {
    fill: green;
    stroke: green;;
    stroke-width: 15;
    shape-rendering: crispEdges;
}

.rightpane {
  width: 39.5%;
  height: 75%;
  float: right;
}
/* .area { */
/* fill: lightpink; */
/* } */

</style>

<body>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="project_info.js"></script>
 
<div class="container">
<!-- title  -->
  <div class="title">
    <div id="home" class="popupTitle">
      <a><img src="feather-16.png" width="25" height="20"></a>
      <a class="new" href="https://github.com/lkyin/ASFI_Project_Explorer">ASFI Project Explorer (APEX)</a> 
      
  </div>
  
  </div>
 
<!-- title ends  -->
<script src="https://d3js.org/d3.v6.min.js"></script>
<section class="toppane">
  <div class="one" style="text-align:center;">
<div class="controls">
<div class="force">

  <header>Project Selector </header>
  <br>
<p>
<label>
Project

<input type="text" id="txt_ide" list="project_n" placeholder="Select a project here :)" oninput="myFunction();updateAll(); UpdateMaxIncubation();"/> 
<datalist id="project_n"> 
  <option value="Abdera [graduated]"/>
  <option value="Accumulo [graduated]"/>
  <option value="Ace [graduated]"/>
  <option value="Activemq [graduated]"/>
  <option value="Agila [retired]"/>
  <option value="Airavata [graduated]"/>
  <option value="Airflow [graduated]"/>
  <option value="Allura [graduated]"/>
  <option value="Alois [retired]"/>
  <option value="Ambari [graduated]"/>
  <option value="Amber [graduated]"/>
  <option value="Any23 [graduated]"/>
  <option value="Ariatosca [retired]"/>
  <option value="Aries [graduated]"/>
  <option value="Asterixdb [graduated]"/>
  <option value="Atlas [graduated]"/>
  <option value="Aurora [graduated]"/>
  <option value="Awf [retired]"/>
  <option value="Beam [graduated]"/>
  <option value="Bean validation [graduated]"/>
  <option value="Beehive [graduated]"/>
  <option value="Bigtop [graduated]"/>
  <option value="Bluesky [retired]"/>
  <option value="Blur [retired]"/>
  <option value="Brooklyn [graduated]"/>
  <option value="Buildr [graduated]"/>
  <option value="Calcite [graduated]"/>
  <option value="Carbondata [graduated]"/>
  <option value="Cassandra [graduated]"/>
  <option value="Cayenne [graduated]"/>
  <option value="Celix [graduated]"/>
  <option value="Chemistry [graduated]"/>
  <option value="Chukwa [graduated]"/>
  <option value="Clerezza [graduated]"/>
  <option value="Click [graduated]"/>
  <option value="Climate model diagnostic analyzer [retired]"/>
  <option value="Cloudstack [graduated]"/>
  <option value="Commonsrdf [graduated]"/>
  <option value="Concerted [retired]"/>
  <option value="Cordova [graduated]"/>
  <option value="Corinthia [retired]"/>
  <option value="Couchdb [graduated]"/>
  <option value="Crunch [graduated]"/>
  <option value="Ctakes [graduated]"/>
  <option value="Curator [graduated]"/>
  <option value="Cxf [graduated]"/>
  <option value="Datafu [graduated]"/>
  <option value="Deltacloud [graduated]"/>
  <option value="Deltaspike [graduated]"/>
  <option value="Derby [graduated]"/>
  <option value="Devicemap [graduated]"/>
  <option value="Directmemory [graduated]"/>
  <option value="Directory [graduated]"/>
  <option value="Distributedlog [graduated]"/>
  <option value="Drill [graduated]"/>
  <option value="Droids [retired]"/>
  <option value="Dubbo [graduated]"/>
  <option value="Eagle [graduated]"/>
  <option value="Easyant [graduated]"/>
  <option value="Empire-db [graduated]"/>
  <option value="Esme [graduated]"/>
  <option value="Etch [graduated]"/>
  <option value="Falcon [graduated]"/>
  <option value="Felix [graduated]"/>
  <option value="Fineract [graduated]"/>
  <option value="Flex [graduated]"/>
  <option value="Flink [graduated]"/>
  <option value="Flume [graduated]"/>
  <option value="Fluo [graduated]"/>
  <option value="Ftpserver [graduated]"/>
  <option value="Gearpump [retired]"/>
  <option value="Geode [graduated]"/>
  <option value="Giraph [graduated]"/>
  <option value="Gora [graduated]"/>
  <option value="Gossip [retired]"/>
  <option value="Graffito [retired]"/>
  <option value="Griffin [graduated]"/>
  <option value="Groovy [graduated]"/>
  <option value="Guacamole [graduated]"/>
  <option value="Hadoop development tools (hdt) [retired]"/>
  <option value="Hama [graduated]"/>
  <option value="Harmony [graduated]"/>
  <option value="Hawq [graduated]"/>
  <option value="Hcatalog [graduated]"/>
  <option value="Helix [graduated]"/>
  <option value="Heraldry [retired]"/>
  <option value="Hise [retired]"/>
  <option value="Ibatis [graduated]"/>
  <option value="Ignite [graduated]"/>
  <option value="Impala [graduated]"/>
  <option value="Imperius [retired]"/>
  <option value="Iota [retired]"/>
  <option value="Isis [graduated]"/>
  <option value="Ivy [graduated]"/>
  <option value="Jackrabbit [graduated]"/>
  <option value="Jclouds [graduated]"/>
  <option value="Jdo [graduated]"/>
  <option value="Jena [graduated]"/>
  <option value="Johnzon [graduated]"/>
  <option value="Joshua [graduated]"/>
  <option value="Jspwiki [graduated]"/>
  <option value="Juneau [graduated]"/>
  <option value="Kafka [graduated]"/>
  <option value="Kalumet [retired]"/>
  <option value="Kato [retired]"/>
  <option value="Knox [graduated]"/>
  <option value="Kudu [graduated]"/>
  <option value="Kylin [graduated]"/>
  <option value="Lens [graduated]"/>
  <option value="Lokahi [retired]"/>
  <option value="Lucene.net [graduated]"/>
  <option value="Lucy [graduated]"/>
  <option value="Madlib [graduated]"/>
  <option value="Manifoldcf [graduated]"/>
  <option value="Marmotta [graduated]"/>
  <option value="Mesos [graduated]"/>
  <option value="Metamodel [graduated]"/>
  <option value="Metron [graduated]"/>
  <option value="Mod_ftp [graduated]"/>
  <option value="Mrql [retired]"/>
  <option value="Mrunit [graduated]"/>
  <option value="Mynewt [graduated]"/>
  <option value="Netbeans [graduated]"/>
  <option value="Nifi [graduated]"/>
  <option value="Nmaven [retired]"/>
  <option value="Npanday [retired]"/>
  <option value="Nutch [graduated]"/>
  <option value="Nuvem [graduated]"/>
  <option value="Ode [graduated]"/>
  <option value="Odf toolkit [retired]"/>
  <option value="Olingo [graduated]"/>
  <option value="Olio [retired]"/>
  <option value="Onami [graduated]"/>
  <option value="Oodt [graduated]"/>
  <option value="Oozie [graduated]"/>
  <option value="Openaz [retired]"/>
  <option value="Openjpa [graduated]"/>
  <option value="Openmeetings [graduated]"/>
  <option value="Opennlp [graduated]"/>
  <option value="Openoffice.org [graduated]"/>
  <option value="Openwebbeans [graduated]"/>
  <option value="Openwhisk [graduated]"/>
  <option value="Parquet [graduated]"/>
  <option value="Pdfbox [graduated]"/>
  <option value="Phoenix [graduated]"/>
  <option value="Photark [retired]"/>
  <option value="Pig [graduated]"/>
  <option value="Pirk [retired]"/>
  <option value="Pivot [graduated]"/>
  <option value="Predictionio [graduated]"/>
  <option value="Provisionr [retired]"/>
  <option value="Pulsar [graduated]"/>
  <option value="Qpid [graduated]"/>
  <option value="Quickstep [retired]"/>
  <option value="Ranger [graduated]"/>
  <option value="Rave [graduated]"/>
  <option value="Reef [graduated]"/>
  <option value="Ripple [retired]"/>
  <option value="River [graduated]"/>
  <option value="Rocketmq [graduated]"/>
  <option value="Roller [graduated]"/>
  <option value="S4 [retired]"/>
  <option value="Samza [graduated]"/>
  <option value="Sanselan [graduated]"/>
  <option value="Sentry [graduated]"/>
  <option value="Servicecomb [graduated]"/>
  <option value="Servicemix [graduated]"/>
  <option value="Shindig [graduated]"/>
  <option value="Shiro [graduated]"/>
  <option value="Sirona [retired]"/>
  <option value="Sis [graduated]"/>
  <option value="Skywalking [graduated]"/>
  <option value="Slider [retired]"/>
  <option value="Sling [graduated]"/>
  <option value="Solr [graduated]"/>
  <option value="Spamassassin [graduated]"/>
  <option value="Spark [graduated]"/>
  <option value="Sqoop [graduated]"/>
  <option value="Stanbol [graduated]"/>
  <option value="Stdcxx [graduated]"/>
  <option value="Stonehenge [retired]"/>
  <option value="Storm [graduated]"/>
  <option value="Stratos [graduated]"/>
  <option value="Streams [graduated]"/>
  <option value="Syncope [graduated]"/>
  <option value="Systemml [graduated]"/>
  <option value="Tashi [retired]"/>
  <option value="Tez [graduated]"/>
  <option value="Thrift [graduated]"/>
  <option value="Tika [graduated]"/>
  <option value="Traffic control [graduated]"/>
  <option value="Traffic server [graduated]"/>
  <option value="Triplesoup [retired]"/>
  <option value="Tuscany [graduated]"/>
  <option value="Twill [graduated]"/>
  <option value="Uima [graduated]"/>
  <option value="Unomi [graduated]"/>
  <option value="Usergrid [graduated]"/>
  <option value="Vcl [graduated]"/>
  <option value="Wave [retired]"/>
  <option value="Whirr [graduated]"/>
  <option value="Wicket [graduated]"/>
  <option value="Xap [retired]"/>
  <option value="Yoko [retired]"/>
  <option value="Zeppelin [graduated]"/>
  <option value="Zeta components [retired]"/>
  <option value="Zipkin [retired]"/>
 
</datalist>
 
</label>
</p>
 
 
<p>
<label>
 
<a id="from"> </a> 
~
<a id="to"> </a> 
 
</label>
</p>
 
<label>
Month
<output id="Month">1</output>

<input id = "MaxIncubation" type="range" min="1" max="90" value="1" step="1" oninput="getMonth();yes();d3.select('#Month').text(value); forceProperties.selected_data.month=value; updateAll();new_chart();">
</label>

</div>
</div>
</div>

&nbsp;

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script> -->
<script src="https://d3js.org/d3.v6.min.js"></script>

<div class="two">
<div class="controls">
  <div class="force">
    <header>Graduation forecast</header>
    <br>
    <!-- <svg width="600" height="200" id="my_dataviz"></svg>
     -->
     <div id="my_dataviz"></svg>
    <!-- <script src="chart_mouseover.js"></script> -->
  </div> </div></div>
 
</section>
<script src="chart_mouseover.js"></script>
<!-- <script src="./js/d3.v4.min.js"></script> -->
<!--  
<script src="importantUpdate.js"></script>
<script src="./js/d3.v4.min.js"></script>
<script src="./js/viz.v1.1.0.min.js"></script>
<script src="https://d3js.org/d3-selection-multi.v1.js"></script>
  -->
 
 
 
<section class="leftpane" style="text-align:left;">
 
<div  class="leftpane1">
 
<div class="controls">
<div class="force" id = "leftp">
 
  <header>About the Project </header>
  <br>

<p><label>Project Name: <a id="project_name"> </a>
 
</label>
<label>
<a id="link"> </a> 
</label>
</p>
<p class="outset">
  <a id="intro">About the project</a>
</p> 
 
<p><label>Status:
<a id="status"> </a>
</label></p>
 
<p><label>Sponsor:
<a id="sponsor"></a>
</label></p>
 
<p><label>Starts:
<a id="start"></a>
</label>
 
<label>Ends:
 
<a id="end"></a>
</label></p>
 
</div>
</div>
</div>

<!-- <br> -->
<div class="leftpane2">
<div class="controls">
  <div class="force" id = "leftp">
    <header>Project Reports </header>
<br>

<p><label>Reports Link:   
  <a id="repo_link"></a>
  </label></p>   
  <div class="bottompane" style="border: thin solid black;overflow:auto;height:220px;width:250px;font: size 110%;resize: both;">
    <p><output id="textss">Project Reports</output></p>

</div>
 
</div>
</div>
</div>
 
</section>
 
 
<script src="importantUpdate.js"></script>
<script src="./js/d3.v4.min.js"></script>
<script src="./js/viz.v1.1.0.min.js"></script>
<script src="https://d3js.org/d3-selection-multi.v1.js"></script>
 
 

<section class="middlepane" style="text-align:center;">
  
  <div class="middlepane3">
    <div class="controls">
      <div class="force">
   
        <!-- <div class="bottompane" style="text-align:justify;border: thin solid black;overflow:auto;height:auto;width:auto;resize: both;"></div> -->
        <header>Social Network </header>

        <!-- <label class="sender_text">Sender</label> -->
        <!-- <label class="r_text">Receiver</label> -->
      <!-- </div> -->
  <svg id = "middlesvg" width="800" height="400"></svg>
<!-- </div> -->

  </div>
  </div>
  </div>
  
  <div class="middlepane2">
    <div class="controls" style="text-align:center;">
      <div class="force" style="text-align:center;width: auto;white-space: normal;">
        <header>Social Network Nodes </header>
        <p>
  <label>Current Node:
  <a id="current_node"></a>
  </label>
   
  <label>Outgoing Node:
    <a id="out_node"></a>
  </label>
  </p>
   
  </div>
  </div>
  </div>




  
  <div class="middlepane1">
  <!-- <div class="controls" style="text-align:center;"> -->
<!-- <div class="force" style="text-align:center;width: auto;white-space: normal;"> -->

<div class="rightpane3">

  <!-- <div class="controls"> -->
    <!-- <div class="force"> -->
<label>
  <h4>  <a id="num_emails"></a></h4>
Num of Emails
</label>
</div>
<!-- </div> -->
<!-- </div> -->

<div class="rightpane3">
  <!-- <div class="controls"> -->
    <!-- <div class="force"> -->
  <h4> <a id="num_senders"></a></h4>
<label>Commentors
</label>
<!-- </div> -->
<!-- </div> -->
</div>

<div class="rightpane3">
  <!-- <div class="controls"> -->
    <!-- <div class="force"> -->
  <h4> <a id="email_per_dev"></a></h4>
<label>Emails Per Dev
</label>
<!-- </div> -->
<!-- </div> -->
</div>
 
<!-- </div> -->
<!-- </div> -->
</div>


</section>
 
 
<section class="rightpane" id = "right" style="text-align:center">






<div class="middlepane3">
  <div class="controls">
    <div class="force">
      <header>Technical Network</header>

      <svg title = "Technical Network" id = "rightsvg" width="800" height="400" ></svg>

</div>
</div>
</div>

<div class="rightpane2">
  <div class="controls">
  <div class="force">
    <header>Technical Network Nodes </header>
<label>Current Committer:
<a id="commit_node"></a>

 
</div>
</div>
</div>



<div class="rightpane3">
  <!-- <div class="controls"> -->
    <!-- <div class="force"> -->
<h4><a id="num_commits"></a></h4>
<label>Num of Commits
</label> 
</div>
<!-- </div>
</div> -->



<div class="rightpane3">
  <!-- <div class="controls"> -->
    <!-- <div class="force"> -->
  <h4><a id="num_committers"></a></h4>
<label>Committers
</label>
<!-- </div> -->
<!-- </div> -->
</div>


<div class="rightpane3">
  <!-- <div class="controls"> -->
    <!-- <div class="force"> -->
  <h4><a id="commit_per_dev"></a></h4>
    <label>Commits Per Dev

</label>
<!-- </div> -->
<!-- </div> -->
</div>
 

</section>  
 
<script src="include.js"></script>
 
<script src="tech_net.js"></script>
<script src="edge_bud.js"></script>
 
 
</div>
 
 
</body>
 
