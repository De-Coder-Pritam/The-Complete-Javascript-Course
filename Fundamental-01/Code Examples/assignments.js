// const country = "India";
// const continent = "Asia";
// let population = 1428;
// // console.log(country);
// // console.log(continent);
// // console.log(population);
// let finlandPopulation = 6;
// const isIsland = false;
// let language;
// // console.log(typeof isIsland);
// // console.log(typeof population);
// // console.log(typeof country);
// language = "Hindi";
// // console.log(typeof language);
// // console.log(++population);
// let averagePopulation = 33;
// // console.log(population < averagePopulation);
// let description = `${country} is in ${continent}, and it's ${population} millon people speak ${language}.`
// console.log(description);

//Coding challenge 1
//sample 1
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

//sample 2
// let markMass = 95;
// let markHeight = 1.88;

// let johnMass = 85;
// let johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / ( johnHeight * johnHeight );

markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//Coding challenge 2

if (markHigherBMI){
console.log(`Mark's BMI (${markBMI}) is Higher than John's (${johnBMI})`)
}else{
    console.log(`John's BMI (${johnBMI}) is Higher than Mark's (${markBMI})`)
}


