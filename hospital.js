


let slide=document.querySelectorAll(".patientReview");


let count=0;

slide.forEach(function(slides,index){
    slides.style.left=`${index *100}%`
})

function MyFun(){
    slide.forEach(function(CurVal){
        CurVal.style.transform=`translateX(-${count*100}%)`
    })
}

setInterval(function(){
    count++;
    if(count === slide.length){
        count=0;
    }
    MyFun()

},3000);





let card=document.querySelectorAll(".card");

card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards);

        document.querySelector(".detail").style.display="block"
        document.querySelector(".content").innerHTML=`
         <img src=${cards.firstElementChild.src} alt="">

                <div class="contentText">

                    <h1>Dr.Kumar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab, recusandae dignissimos
                        autem, architecto consequuntur praesentium animi, expedita tenetur debitis sapiente cupiditate?
                        Sequi amet vero nulla aliquid possimus alias iusto.</p>
                        
                </div>

                `


                let closebtn=document.getElementById("closebtn");

                closebtn.addEventListener("click",function(){
                    document.querySelector(".detail").style.display="none"
                })
    })
})




// let connectbtn=document.getElementById("connectBtn");

// connectbtn.addEventListener("click",function(){
   
//     let email=document.getElementById("email");
//     let password=document.getElementById("password");

//     if(email.value == "" || password.value == ""){
//         alert("place fill again");
        
//     }else{
//         alert("You Logged IN");
        
//     }

// })


