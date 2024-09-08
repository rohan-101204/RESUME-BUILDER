// function addNewWEField() {

//     console.log("bkbjdchvd");
//     let newnode=document.createElement('textarea');
//     newnode.classList.add('form-control');
//     newnode.classList.add('weFeild');
//     newnode.setAttribute("row",3);
   
//     let weOb=document.getElementById("we");
//     let weAddButtonob=document.getElementById("weAddButton");

//     weOb.insertBefore(newnode,weAddButtonob);
// }

function addNew() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField'); // corrected class name
    newNode.setAttribute("rows", 3); // corrected attribute name
    newNode.classList.add("my-2");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    if (weOb && weAddButtonOb) { // added error handling
        weOb.insertBefore(newNode, weAddButtonOb);
    } else {
        console.error("Elements not found");
    }

    
}

function addnewAQ(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField'); // corrected class name
    newNode.setAttribute("rows", 3); // corrected attribute name
    newNode.classList.add("my-2");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    if (aqOb && aqAddButtonOb) { // added error handling
        aqOb.insertBefore(newNode, aqAddButtonOb);
    } else {
        console.error("Elements not found");
    }

    
    
}


function addskill(){
    let newskill = document.createElement('textarea');
    newskill.classList.add('form-control');
    newskill.classList.add('skill'); // corrected class name
    newskill.setAttribute("rows", 3); // corrected attribute name
    newskill.classList.add("my-2");

    let skOb = document.getElementById("skills");
    let skAddButtonOb = document.getElementById("skAddButton");

    if (skOb && skAddButtonOb) { // added error handling
        skOb.insertBefore(newskill, skAddButtonOb);
    } else {
        console.error("Elements not found");
    }

    
    
}

function generateCV() {
    let name = document.getElementById("nameField").value;
    let nameTemp = document.getElementById("t-name");
    nameTemp.innerHTML = name;
     document.getElementById("name-temp").innerHTML=document.getElementById("nameField").value;
    document.getElementById("con-template").innerHTML=document.getElementById("contactField").value;
    document.getElementById("con-template").innerHTML=document.getElementById("contactField").value;
    document.getElementById("email-temp").innerHTML=document.getElementById("emailField").value;

    document.getElementById("location-T").innerHTML=document.getElementById("location").value;
    document.getElementById("facebook").innerHTML=document.getElementById("fbField").value;
    document.getElementById("insta").innerHTML=document.getElementById("InstaField").value;
    document.getElementById("linkedIn").innerHTML=document.getElementById("LinkedIn").value;

    document.getElementById("objective-temp").innerHTML=document.getElementById("objective").value;
 

                           //work exp//
    let wes=document.getElementsByClassName("weField");

    let str='';

    for(let e of wes){
        str=str+`<li>${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML=str;


    let edu=document.getElementsByClassName("aqField");
    let str2='';
    for(let e of edu){
        str2=str2+`<li>${e.value}</li>`
        }
        document.getElementById("eqT").innerHTML=str2;

         let file=document.getElementById("image").files[0];
         let reader = new FileReader();
         reader.readAsDataURL(file);

        reader.onloadend=function(){
            document.getElementById("image-temp").src=reader.result;
        }

        document.getElementById('cv-form').style.display='none';
        document.getElementById('cv-template').style.display='block';

     //skill//

        let sk=document.getElementsByClassName("skill");

        let str3='';

      for(let e of sk){
        str3=str3+`<li>${e.value}</li>`;
       }

    document.getElementById("skill-T").innerHTML=str3;

}        


function printCV() {
    document.querySelectorAll(".down-btn").forEach(function(element) {
        element.parentNode.removeChild(element);
    });
    window.print();
}