// function to check recommended weight ,over weight,under weight
function checkWeight() {
  var age = document.getElementById("age").value; //get age from user.
  var weight = document.getElementById("weight").value; //get weight from user.
  if (age >= 5 && age <= 7 && weight >= 15 && weight <= 20) {
    // check condition
    document.getElementById("p").innerHTML = "recommended weight"; //print message
  } else {
    if (age >= 5 && age <= 7 && weight < 15) {
      document.getElementById("p").innerHTML = " You are under weight"; //print message
    } else {
      if (age >= 5 && age <= 7 && weight > 15) {
        document.getElementById("p").innerHTML = " You are over weight"; //print message
      } else {
        if (age >= 8 && age <= 10 && weight >= 21 && weight <= 25) {
          document.getElementById("p").innerHTML = "recommended weight"; //print message
        } else {
          if (age >= 8 && age <= 10 && weight < 21) {
            document.getElementById("p").innerHTML = " You are under weight"; //print message
          } else {
            if (age >= 8 && age <= 10 && weight > 25) {
              document.getElementById("p").innerHTML = " You are over weight"; //print message
            } else {
              if (age >= 11 && age <= 15 && weight >= 26 && weight <= 30) {
                document.getElementById("p").innerHTML = "recommended weight"; //print message
              } else {
                if (age >= 11 && age <= 15 && weight < 26) {
                  document.getElementById("p").innerHTML =
                    " You are under weight"; //print message
                } else {
                  if (age >= 11 && age <= 15 && weight > 26) {
                    document.getElementById("p").innerHTML =
                      " You are over weight"; //print message
                  } else {
                    if (
                      age >= 16 &&
                      age <= 20 &&
                      weight >= 31 &&
                      weight <= 40
                    ) {
                      document.getElementById("p").innerHTML =
                        "recommended weight"; //print message
                    } else {
                      if (age >= 16 && age <= 20 && weight < 31) {
                        document.getElementById("p").innerHTML =
                          " You are under weight"; //print message
                      } else {
                        if (age >= 16 && age <= 20 && weight > 31) {
                          document.getElementById("p").innerHTML =
                            " You are over weight"; //print message
                        } else {
                          document.getElementById("p").innerHTML =
                            "Enter valid age to check"; //print message
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
