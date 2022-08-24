const counters=document.querySelectorAll('.container');

counters.forEach((container)=>{
    container.innerHTML=0;

    const update=()=>{
        const target=+container.getAttribute('data-abc');
        //ye target me ab vo 4000 15000 aur 500 aa gye hai
        // elkin vo string me aaye hai ... console.log ker 
        //ke typeof ker ke dekhna ... isliye isko numbre me
        // laayengey... + laga ke ker dete hjai ... copy me 
        //page 95 pe dekhna 
        // console.log(typeof target );
       const start=+container.innerHTML; 
       const inc = target/100;
       if(start<target){
           container.innerHTML=`${Math.round(start+inc)}`;
           setTimeout(update, 5);
       }
       else{
           container.innerHTML=target;
       }
    }
    update();
})