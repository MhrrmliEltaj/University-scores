let score = [81, 81, 81, 91, 78];

let lowestGrade = Infinity;

for (let i = 0; i < score.length; i++) {
    let currentGrade = score[i];

    

    if (currentGrade < lowestGrade) {
        lowestGrade = currentGrade;
    }
}



if (lowestGrade >= 91 && lowestGrade <= 100) {
    console.log("Əlaçı");
} 
else if (lowestGrade >= 67 && lowestGrade <= 69) {
    if (lowestGrade >= 71 && 91<=lowestGrade<=100) {
        score[i] = 71;
    }
    console.log("Zərbəçi");
}  

else if(lowestGrade>=71 && 91<=lowestGrade<=100){
    console.log("Zərbəçi");
}

else if (lowestGrade >= 51) {
    console.log("Adi");
}
