//Ajax call(httprequest)
function loadjson(file,callback) {
var na=new XMLHttpRequest();
na.overrideMimeType("application/json");
na.open("GET",file,true);
na.onreadystatechange = function() {
  if(na.readyState ===4 && na.status =="200") {
  callback(na.responseText);
    }
  }
na.send();
}
//function calling
loadjson("data1.json", function(text) {
let js=JSON.parse(text);
console.log(js);
basics(js.left);
 education(js.education);
 skill(js.skills);
// basics(data.left);
})
// for main div class calling
// var main=document.queryselection('.main');
// for main div id calling
var main=document.getElementById("main");
// element creation
var left=document.createElement('div');
// add class name to element
left.classList.add("left");
// add id to element
left.setAttribute("id","left");
// addibg text to div
left.textContent="profile Details:"
left.appendChild(document.createElement("HR"))
// appearing to main div
main.appendChild(left);
function basics(leftside){
var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h2");
  email.textContent=leftside.email;
name.appendChild(email);
var ph=document.createElement("p");
  ph.textContent=leftside.phone;
  email.appendChild(ph);
  console.log(left);
}
var right=document.createElement("div");
right.classList.add("right");
// education div setAttribute
var edu=document.createElement("div");
edu.classList.add("edu1");
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function education(educa){
  for(i in educa){
    var e1=document.createElement("h1");
    e1.classList.add("edu2");
    e1.textContent=educa[i].course;
var ul=document.createElement("ul");
for(j in educa[i].college){
  var li=document.createElement("li");
  li.textContent=educa[i].college[j];
  ul.appendChild(li);
  e1.appendChild(ul);
  edu.appendChild(e1);
}
}
}
main.appendChild(right);
function skill(skills){
  var skill_title=document.createElement("div");
  skill_title.classList.add("tech_skills");
  skill_title.textContent="Technical Skills:";
  skill_title.appendChild(document.createElement("HR"));
  right.appendChild(skill_title);
  // table creation
  var table=document.createElement("table");
  // table.setAttribute("id","tab");
  var row="";
  for(i=0;i<skills.length;i++){
    row+="<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td></tr>"
  }
table.innerHTML=row;
skill_title.appendChild(table);
}
