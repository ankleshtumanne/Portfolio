
var typed = new Typed('#element', {
    strings: ['Web Devloper', 'React Devloper',"Front-End Developer.."],
    typeSpeed:150,
    loop:true
   
});

// ********************************* project slidder ************************************************************************

let arr=[
  
  //  "C:\Users\Admin\Desktop\Portfolio\Screenshot (10).png",
  //  "C:\Users\Admin\Desktop\Portfolio\amazone.png",
  //  "C:\Users\Admin\Desktop\Portfolio\mc_donald.png"
]
// console.log(arr)
let i=0
// let image=document.getElementById("image1");
let body=document.getElementsByClassName("cont7_cld1")
let image=document.createElement("img")
image.src=arr[0]
body.append(image)
// let arr=document.getElementsByClassName("cont7_cld1")
let btn1=document.getElementById('prev');
let btn2=document.getElementById('next');
// let curr_value=0
// image.setAttribute('src',arr[curr_value]); //setAttribute pr koi value assign kiya HU


// image=arr[i]
// image.src=arr[i]
// setInterval(()=>{
//    i++
//    if(i>arr.length-1){
//         i=0
//         image.src=arr[i]
//    }
//    image.src=arr[i]
  
// },8000)

btn1.addEventListener('click',function(){
     image.src=arr[i]
     i--
    //  if(curr_value<0){
    //    curr_value=arr.length-1
      

    //  }
    //  image.setAttribute('src',arr[curr_value])
});

btn2.addEventListener('click',function(){
  image.src=arr[i]
   i++
  //  if(curr_value>=arr.length){
  //      curr_value=0
       
  //  }
  //  image.setAttribute('src',arr[curr_value])
});
