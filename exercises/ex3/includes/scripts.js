var fnSize=3
var lnSize=6
var flag
var cards

window.onload=function(){
    flag=0
    var main=this.document.getElementsByTagName("main")
    for(var i=0;i<this.fnSize*this.lnSize;++i){
        var temp=this.document.createElement("div")
        temp.className="box8"
        if(i===0){
            var letter=this.document.createElement("span")
            letter.innerHTML="I";
            temp.appendChild(letter)
        }
        main[0].appendChild(temp)
    }
    cards=this.document.getElementsByClassName("box8")
    cards[0].onmouseover=function(){
        if(flag===1)
            cards[0].childNodes[0].style.color="white"
        else if(flag===0)
            cards[0].style.backgroundColor="#506270"
    }
    cards[0].onmouseout=function(){
        if(flag===1)
            cards[0].childNodes[0].style.color="#506270"
        else
            cards[0].style.backgroundColor="white"
    }
}

var start1=document.getElementById("start").onclick=function(){
    flag=1
    for(var i=0;i<fnSize;++i){
        cards[i].style.backgroundColor="#506270"
        if(i===0)
            cards[i].childNodes[0].style.color="#506270"
    }  
}

var reset=document.getElementById("reset").onclick=function(){
    flag=0
    for(var i=0;i<fnSize;++i){
        cards[i].style.backgroundColor="white"
        if(i===0)
            cards[i].childNodes[0].style.color="white"
    }
}

