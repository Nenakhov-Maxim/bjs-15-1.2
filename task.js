"use strict";
function getResult(a,b,c){
    let x = [];
    if (a != 0) {
      let discriminant;
      discriminant = b ** 2 - 4 * a * c;      
      if (discriminant < 0) {        
        x = [];
      } else if (discriminant === 0) {        
        let x1 = (-b + discriminant ** (1 / 2)) / (2 * a);        
        x = [x1];
      } else if (discriminant > 0) {        
        let x1 = (-b + discriminant ** (1 / 2)) / (2 * a);
        let x2 = (-b - discriminant ** (1 / 2)) / (2 * a);
        x = [x1, x2];
      }
    } else {
        alert("a не должен быть равен 0")
    }
     return x;
}

function getAverageMark(marks){
    let allGrades = marks;
    let averageMark = 0;
    let allGradesSlice;
    if (allGrades.length === 0) {
        averageMark = 0;
    } else if (allGrades.length <= 5 ) {
        averageMark = averageScoreMath(allGrades);
    } else if (allGrades.length > 5) {
        alert('Оценок больше 5. Будут псчитаны первые 5.');
        allGradesSlice = allGrades.slice(0, 5);
        allGrades = allGradesSlice;
        averageMark = averageScoreMath(allGrades);
    }    
    return averageMark;
}

function averageScoreMath(allGrades) {
    let gradeSumm = 0;
    let averageMark = 0;
    for (let i = 0, len = allGrades.length; i < len; i++) {
        gradeSumm = gradeSumm + allGrades[i];        
    }
    averageMark = gradeSumm / allGrades.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}