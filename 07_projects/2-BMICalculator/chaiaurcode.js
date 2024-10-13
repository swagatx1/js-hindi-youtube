const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault()

    const height = form.querySelector('#height').value
    const weight = form.querySelector('#weight').value
    const result = form.querySelector('#results')

    if(height<=0 || isNaN(height) ){
        result.textContent = (`please give valid Height not -> ${height}`)
    }else if(weight<=0 || isNaN(weight) ){
        result.textContent = (`please give valid Weight not -> ${weight}`)
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let bmiCatagory
        if(bmi<18.6) bmiCatagory='Under Weight'
        if(bmi>18.6 && bmi<24.9) bmiCatagory='Normal Range'
        if(bmi>24.9) bmiCatagory='Overweight '
        result.innerHTML = (`Your BMI is '${bmi}'<br> Your are ${bmiCatagory}`)
    }
})