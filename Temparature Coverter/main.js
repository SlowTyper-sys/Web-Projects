let convertform = document.getElementById("convertform");
let err = document.getElementById("error");

convertform.addEventListener("submit", (e) =>{
    e.preventDefault();
    let userinput= document.getElementById("FromNumber");
    var digit = parseFloat(userinput.value);
    console.log(digit);
    let new_digit ;

    let fromUnit= document.getElementById("FromUnit");
    var fromV = fromUnit.value;

    let toUnit= document.getElementById("ToUnit");
    var toV = toUnit.value;

    let ans = document.getElementById("ToNumber")

    if (fromV == "" || toUnit == "") {
        console.log("values were not captured");
        err.innerHTML = "Please select the units that will be converted"
        err.style.color="red";
        err.style.visibility="visible"
      } else if(userinput == NaN){
        err.innerHTML = "Please enter the temperature to be converted"
        err.style.color="red";
        err.style.visibility="visible";
      }else {
        switch(fromV) {
            case "fahrenheit":
              if (toV =="celsius") {
                new_digit = (digit -32)* (5/9);
              } else if (toV =="kelvin") {
                new_digit = (digit -32)* (5/9) + 273.15;
              } else{
                new_digit = digit;
              }
              break;
            case "celsius":
                if (toV =="fahrenheit") {
                    new_digit = digit* (9/5) + 32;
                  } else if (toV =="kelvin") {
                    new_digit = digit + 273.15;
                  }else{
                    new_digit = digit;
                  }
              break;
              case "kelvin":
                if (toV =="celsius") {
                    new_digit = digit - 273.15;
                  } else if (toV =="fahrenheit") {
                    new_digit = (digit - 273.15)* (9/5) + 32;
                  } else{
                    new_digit = digit;
                  }
                break;
            default:
              new_digit= digit;
          }
          ans.value= new_digit.toFixed(2)
      }
})