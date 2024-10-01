// for

for (let i = 0; i <= 10; i++) {
    // const element = i;
    // if(i == 5)  console.log("5 is best num");
    // console.log(i);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`inner loop $`);
    
    for (let J = 1; J <= 10; J++) {
        // console.log(`inner loop ${J} and outer loop ${i}`);
        // console.log(`${J} * ${i} = ${i*J}`);
        
    }
    
}

array = ["flash","batman","superman"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);   
}

for (let i = 0; i <= 10; i++) {
    console.log(`the value of i is ${i}`)
    if(i == 5) break;
    
}


for (let i = 0; i <= 10; i++) {
    if(i == 5) {
        console.log(`Detected 5`)  
        continue;
    }
    
    console.log(`the value of i is ${i}`)
    
}

