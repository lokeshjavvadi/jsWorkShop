const rand=["loki" , "Ram" , "PawanKAlyan" ,"macha"];
ran.addEventListener('click',generateRandomName);

const nam=document.getElementById("nam");

function generateRandomName(){
    const rands=rand[Math.floor(Math.random()*rand.length)];
    nam.value=rands;
}

c=0
function onclick(){
    c=c+1;
}