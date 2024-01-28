const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        //    console.log(BMI)


        // to show the result
        results.innerHTML = `Your BMI is ${BMI}`;
        if(BMI<18.5){
            
            results.innerHTML += ` and you are underweight`;
        }
        else if(BMI>=18.5 && BMI<=24.9){
            results.innerHTML += ` and you are normal`;
        }
        else{
            results.innerHTML += ` and you are overweight`;
        }




    }
});

