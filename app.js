function openWeb(){
    window.open("http://dinseangmeng.xyz/")
}

var wrapper=document.querySelector("#wrapper");

const randomColor=()=>{
    var string="#";
    var HexChar=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    for(let i=0;i<6 ;i++){
        string+=HexChar[Math.round(Math.random()*HexChar.length -1 )];
    }
    return string;
}

const BallBounch=(leftPos)=>{
    const ball=document.createElement("div");
    ball.className="ball";
    ball.style.left=`${leftPos}px`;
    ball.style.backgroundColor=randomColor();
    wrapper.appendChild(ball);
    setTimeout(()=>{
        wrapper.removeChild(ball);
    },2000)

}
window.addEventListener("mousemove",(e)=>BallBounch(e.clientX))