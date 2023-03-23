function checkExceptions(age, weight) {
  if (age <= 0 || weight <= 0 || weight > 150) {
    return true;
  }
  return false;
}
function checkWeight() {
  const age = parseInt(document.getElementById("age").value);
  const weight = parseInt(document.getElementById("weight").value);
  let message = "Enter valid age to check (5-20 yrs)";

  const ageGroups = [
    { minAge: 5, maxAge: 7, weightRange: [15, 20] },
    { minAge: 8, maxAge: 10, weightRange: [21, 25] },
    { minAge: 11, maxAge: 15, weightRange: [26, 30] },
    { minAge: 16, maxAge: 20, weightRange: [31, 40] },
  ];
  if (checkExceptions(age, weight)) {
    message = "Please enter valid age and/or weight";
  } else {
    for (let i = 0; i < ageGroups.length; i++) {
      if (age >= ageGroups[i].minAge && age <= ageGroups[i].maxAge) {
        if (weight >= ageGroups[i].weightRange[0] && weight <= ageGroups[i].weightRange[1]) {
          message = "You're fit";
        } else if (weight < ageGroups[i].weightRange[0]) {
          message = "You are underweight";
        } else {
          message = "You are overweight";
        }
        break;
      }
    }
  }
  document.getElementById("p").innerHTML = message;
}
