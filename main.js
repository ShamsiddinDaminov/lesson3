const person = {
    name: "Muhammadalo",
    age: 11,
    country: "Uzbek",
    contact: 998887076460,
    point: 120
}

const person1 = {
    name: "Asomiddin",
    age: 30,
    country: "Uzbek",
    contact: 998887076460,
    point: 135
}


if (person.age == 11) {
    console.log("You should go home");
} else {
    console.log("You should stay with us");
};

if (person1.age == 30) {
    console.log("You should learn English very vell");
} else {
    console.log("You should learn JS very vell");
}

function maslahat(shaxs) {
    if (shaxs.point >= 120) {
        console.log("Siz JS darslarini davom ettira olasiz");
    } else {
        console.log("Siz JS darslarini davom ettira olmaysiz");
    }
}

maslahat(shaxs);


// uyga vazifa  



let result = 3;

if (result === 1) {
  console.log("Monday");
} else if (result === 2) {
  console.log("Tuesday");
} else if (result === 3) {
  console.log("Wednesday");
} else if (result === 4) {
  console.log("Thursday");
} else if (result === 5) {
  console.log("Friday")
} else if (result === 6 ) {
  console.log("Saturday");
} else if (result === 7) {
  console.log("Sunday");
}



function Chiqarator(result) {
  if (result === 1) {
    console.log("yomon");
  } else if (result === 2) {
    console.log("qoniqarsiz");
  } else if (result === 3) {
    console.log("qoniqarli");
  } else if (result === 4) {
    console.log("yaxshi");
  } else if (result === 5) {
    console.log("alo");
  }
}

Chiqarator(4);



let userName = prompt ("12","") - 0;

if (userName === 1) {
  console.log("yanvar");
}else if (userName === 2) {
  console.log("fevral");
}else if (userName === 3) {
  console.log("mart");
}else if (userName === 4) {
  console.log("aprel");
}else if (userName === 5) {
  console.log("aprel");
}else if (userName === 6) {
  console.log("aprel");
}else if (userName === 7) {
  console.log("aprel");
}else if (userName === 8) {
  console.log("aprel");
}else if (userName === 9) {
  console.log("aprel");
}else if (userName === 10) {
  console.log("aprel");
}else if (userName === 10) {
  console.log("aprel");
}else if (userName === 10) {
  console.log("aprel");
}


let year = 2016;
let month = 2;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:

    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 20;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1;
}

console.log(dayCount);






