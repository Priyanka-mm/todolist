
var list=document.getElementById("list")
var input=document.getElementById("input")
function add(){
  var appends=document.createElement("li")
  appends.innerHTML=input.value+ "<button onclick='del(event)'>Delete</button>"
  list.append(appends)
}
function del(event){
event.target.parentElement.remove()
}