//QUESTION 1
function cimg1(){
    const i=document.getElementsByTagName('img');
    url="http://www.freeimageslive.com/galleries/workplace/education/preview/colouring_pencils.jpg";
    i[0].src=url;
}
function cimg2(){
    const i=document.getElementsByTagName('img');
    url="http://www.freeimageslive.com/galleries/workplace/education/preview/color_numbers.jpg";
    i[0].src=url;
}
function cimg0(){
    const i=document.getElementsByTagName('img');
    url="https://bit.ly/fcc-relaxing-cat";
    i[0].src=url;
}




//QUESTION 2 
function copyText(){
    const i=document.getElementsByTagName('input');
    i[1].value=i[0].value;
}




//QUESTION 3
let list=[
    {
      name:"hari",
      age:18,
      country:"India",
      hobbies:["playing games","reading","watching tv"]
    },
    {
      name:"virat",
      age:31,
      country:"India",
      hobbies:["playing cricket","reading","Instagram"]
    },
    {
      name:"ronaldo",
      age:34,
      country:"Portugal",
      hobbies:["playing football","reading","Instagram"]
    },
    {
      name:"arya stark",
      age:16,
      country:"England",
      hobbies:["playing","watching web series","Instagram"]
    }
    ];
list.forEach(function(obj){
    console.log(obj);
});




//QUESTION 4 
function age(arg){
    arg.forEach(function(obj){
        if(obj.age<30){
            console.log(obj);
        }
    });
}

function indian(arg){
    arg.forEach(function(obj){
        if(obj.country=="India"){
            console.log(obj);
        }
    });
}
