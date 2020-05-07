var checkboxcounter = 0;
var input = document.getElementById("todoinput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) 
    {
        var list = document.getElementById("list");
        var listitem = document.createElement("li");
        list.appendChild(listitem); 
        var div = document.createElement("div");
        div.setAttribute("class", "view");
        listitem.appendChild(div);
        listitem.setAttribute("class", "active");
        var checkbox = document.createElement("input");
        checkbox.setAttribute("class", "toggle");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "checkbox" +checkboxcounter);
        div.appendChild(checkbox);
        var label =document.createElement("label");
        label.setAttribute("for", "checkbox" +checkboxcounter);
        checkboxcounter=checkboxcounter+1;
        div.appendChild(label);
        var txtspan=document.createElement("span");
        div.appendChild(txtspan);
        var txt = input.value;
        input.value="";
        var textnode = document.createTextNode(txt);
        txtspan.appendChild(textnode);
        var destroybutton = document.createElement("button");
        destroybutton.appendChild(document.createTextNode("X"));
        destroybutton.setAttribute("class", "destroy");
        div.appendChild(destroybutton);
        var itemcount = document.getElementById("Items left");
        itemcount.textContent=parseInt (itemcount.textContent) +1;

        destroybutton.addEventListener("click", function(event) {
            if (listitem.getAttribute("class") =="active") {
                itemcount.textContent=parseInt (itemcount.textContent) -1;
            }
            listitem.remove();
        });

        checkbox.addEventListener("click", function(event) {
            if (listitem.getAttribute("class") =="active") {
                listitem.setAttribute("class", "completed");
                itemcount.textContent=parseInt (itemcount.textContent) -1;
            } else {
                listitem.setAttribute("class", "active");
                itemcount.textContent=parseInt (itemcount.textContent) +1;
            }
        })
    }
});

var showall=document.getElementById("showall");
showall.addEventListener("click", function(event) {
    var list = document.getElementById("list");
    list.setAttribute("class", "todo-list");
});

var hidecompleted=document.getElementById("hidecompleted");
hidecompleted.addEventListener("click", function(event) {
    var list = document.getElementById("list");
    list.setAttribute("class", "hidecompleted todo-list");
});

var showcompleted=document.getElementById("showcompleted");
showcompleted.addEventListener("click", function(event) {
    var list = document.getElementById("list");
    list.setAttribute("class", "showcompleted todo-list");
});

var clearcompleted=document.getElementById("clearcompleted");
clearcompleted.addEventListener("click", function(event) {
    var list = document.getElementById("list");
    var listitems = list.getElementsByTagName("li");
    listitems = Array.prototype.slice.call(listitems,0); 
    listitems.forEach(function(item) {
        if(item.getAttribute("class") =="completed") {
            item.remove();
        }
    });
});
    
var toggleall=document.getElementById("toggle-all");
toggleall.addEventListener("click", function(event) {
    var itemcount = document.getElementById("Items left");
    var makeactive = itemcount.textContent == "0";
    var list = document.getElementById("list");
    var listitems = list.getElementsByTagName("li");
    listitems = Array.prototype.slice.call(listitems,0); 
    listitems.forEach(function(item) {
        if(makeactive){
            itemcount.textContent=parseInt (itemcount.textContent) +1;
            item.setAttribute("class", "active");
            var checkbox = item.querySelector(".toggle");
            checkbox.checked=false;
        }else{
            if(item.getAttribute("class") =="active") {
                itemcount.textContent=parseInt (itemcount.textContent) -1;
                item.setAttribute("class", "completed");
                var checkbox = item.querySelector(".toggle");
                checkbox.checked=true;
            }
        }
    });
});
