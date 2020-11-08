var toggle=false;

function cssDefault(){
    document.getElementById("css").value='h3{'+'\n'+'   color:blue;'+'\n'+'}'+'\n\n'+'p{'+'\n'+'font-family: cursive, arial;'+'\n'+'font-size: 25pt;'+'\n'+'}';
}

function htmlDefault(){
    document.getElementById("html").value='<h3>Hello!</h3>'+'\n\n'+'<p>applied?</p>';
}

function launch() {
    if(document.getElementById("html").value!=""){
        document.getElementById("preview").innerHTML=document.getElementById("html").value;
        if(toggle==false);
           document.getElementById("omaeWa").innerHTML='.preview{background-image: url(bg.jpg);';
    }
}

function clearThis() {
    document.getElementById("css").value=null;
    document.getElementById("html").value=null;
    document.getElementById("preview").innerHTML=null;
    document.getElementById("omaeWa").innerHTML=null;
} 

function changeTitle(){
    var title=prompt("Please enter the new title","New Title");
    if(title==null||title==""){
        //does nothing if user doesn't type anything in
    }
    else{
        document.title=title;
    }
}

function toggleThis(){
    if(toggle==false){
        document.getElementById("style").innerHTML=document.getElementById("css").value;
        document.getElementById("style").appendChild(document.createTextNode(".toggle {color:red;}"));
        if(document.getElementById("omaeWa").innerHTML=='.preview{background-image: url(bg.jpg);'&&document.getElementById("css").value!=""){
            document.getElementById("omaeWa").innerHTML='.preview{background-image: url(bg2.png);';
        }
        toggle=true;
    }
    else{
        document.getElementById("style").innerHTML=null;
        if(document.getElementById("omaeWa").innerHTML=='.preview{background-image: url(bg2.png);'&&document.getElementById("css").value!=""){
            document.getElementById("omaeWa").innerHTML='.preview{background-image: url(bg.jpg);';
        }
        toggle=false;
    }
}