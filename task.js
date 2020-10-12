"use strict";
function getResult(a,b,c){
    let x = [];
    if (a != 0) {
      let discriminant;
      discriminant = b ** 2 - 4 * a * c;
      if (discriminant < 0) {
        alert("Корней нет");
        x = [];
      } else if (discriminant === 0) {
        alert("Корней 2");
        let x1 = (-b + discriminant ** 1 / 2) / 2 * a;
        let x2 = (-b - discriminant ** 1 / 2) / 2 * a;
        x = [x1, x2];
      } else if (discriminant > 0) {
        alert("Корней 1");
        let x1 = (-b + discriminant ** 1 / 2) / 2 * a;
        x = [x1];
      }
    } else {
        alert("a не должен быть равен 0")
    }

     return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}