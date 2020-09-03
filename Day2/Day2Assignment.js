// 1)program to search for a particular character in a string.
let string="string";
character="r";
console.log(string.indexOf(character));


// 2)program to convert minutes to seconds.
let minutes=2;
let seconds=minutes*60;


// 3)program to search for a element in a array of string.
let array=["zero","one","two","three","four"];
let index=array.indexOf("one");
console.log(index);


// 4) program to display only elements containing 'a' in them from a array.
let list=["apple","orange","red","blue"];
for(let i=0;i<list.length;i++){
    if(list[i].includes("a")){
        console.log(list[i]);
    }
}


// 5) print an array in reverse order.
array.reverse();
console.log(array);