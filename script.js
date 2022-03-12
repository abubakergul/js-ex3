// const dolphinsAverage;
// const koalasAverage;
// const dolphinsTotal;
// const koalasTotal;

const dolphinsScore1=96;
const dolphinsScore2=108;
const dolphinsScore3=89;

const koalasScore1=88;
const koalasScore2=91;
const koalasScore3=110;

const dolphinsTotal=dolphinsScore1 + dolphinsScore2 + dolphinsScore3;
const dolphinsAverage= dolphinsTotal / 3;
console.log(dolphinsAverage)

const koalasTotal= koalasScore1 + koalasScore2 + koalasScore3;
const koalasAverage= koalasTotal / 3;
console.log(koalasAverage);

if(dolphinsAverage>koalasAverage && dolphinsAverage>=100){
    console.log("Team Dolphins Wins")
}
else if(dolphinsAverage<koalasAverage && koalasAverage>=100){
    console.log("Team Koalas Wins");
}
else if(dolphinsAverage===koalasAverage && dolphinsAverage>=100 && koalasAverage>=100) { 
    console.log("Draw both wins");
}
else{
    console.log("no one wins the trophy")
}

