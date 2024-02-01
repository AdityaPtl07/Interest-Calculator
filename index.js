let result = 0;
const display = document.querySelector(".display");
display.style.display = "none";

const calcButton = document.querySelector("#calcBtn");

calcButton.addEventListener("click", function () {
  getUserInput();
});

function simpleInterest(principal, roi, time) {
  result = principal * roi * time;
  console.log("Simple Interest: " + result);
  return result;
}
function compoundInterestAnnually(principal, roi, time) {
  result = principal * Math.pow(1 + roi, time);
  console.log("Compound Interest: " + Number(result));
  return result;
}
function compoundInterestHalfYearly(principal, roi, time) {
  result = principal * Math.pow(1 + roi / 2, 2 * time);
  console.log("Compound Interest (Half Yearly): " + result);
  return result;
}
function compoundInterestQuarterly(principal, roi, time) {
  result = principal * Math.pow(1 + roi / 4, 4 * time);
  console.log("Compound Interest (Quarterly): " + result);
  return result;
}
function compoundInterestMonthly(principal, roi, time) {
  result = principal * Math.pow(1 + roi / 12, 12 * time);
  console.log("Compound Interest (Monthly): " + result);
  return result;
}
function compoundInterestDaily(principal, roi, time) {
  result = principal * Math.pow(1 + roi / 365, 365 * time);
  console.log("Compound Interest (Daily): " + result);
  return result;
}

function getUserInput() {
  let interestType = document.getElementById("interestType").value;
  let principal = Number(document.getElementById("principal").value);
  let roi = Number(document.getElementById("roi").value);

  let time = Number(document.getElementById("time").value);
  if (principal < 1 || roi < 1 || time < 1) {
    console.log("Interest Type: " + interestType);
    console.log("Principal Amount: " + principal);
    console.log("Rate of Interest: " + roi);
    console.log("Time Period: " + time);
    return;
  }
  display.style.display = "block";
  roi = roi / 100;
  let amount = document.getElementById("disp-amt").value;
  let Interest = document.getElementById("disp-int").value;

  if (interestType === "simpleInterest") {
    Interest = simpleInterest(principal, roi, time);
    amount = principal + Interest;
    document.getElementById("disp-amt").innerHTML = amount;
    document.getElementById("disp-int").innerHTML = Interest;
  } else if (interestType === "compoundInterest-Annually") {
    amount = compoundInterestAnnually(principal, roi, time);
    Interest = amount - principal;
    document.getElementById("disp-amt").innerHTML = amount;
    document.getElementById("disp-int").innerHTML = Interest;
  } else if (interestType === "compoundInterest-HalfYearly") {
    amount = compoundInterestHalfYearly(principal, roi, time);
    Interest = amount - principal;
    document.getElementById("disp-amt").innerHTML = amount;
    document.getElementById("disp-int").innerHTML = Interest;
  } else if (interestType === "compoundInterest-Quarterly") {
    amount = compoundInterestQuarterly(principal, roi, time);
    Interest = amount - principal;
    document.getElementById("disp-amt").innerHTML = amount;
    document.getElementById("disp-int").innerHTML = Interest;
  } else if (interestType === "compoundInterest-Monthly") {
    amount = compoundInterestMonthly(principal, roi, time);
    Interest = amount - principal;
    document.getElementById("disp-amt").innerHTML = amount;
    document.getElementById("disp-int").innerHTML = Interest;
  } else if (interestType === "compoundInterest-Days") {
    amount = compoundInterestDaily(principal, roi, time);
    Interest = amount - principal;
    document.getElementById("disp-amt").innerHTML = amount;
    document.getElementById("disp-int").innerHTML = Interest;
  }
}

function reset() {
  document.getElementById("interestType").value = "Select Interest Type";
  document.getElementById("principal").value = "";
  document.getElementById("roi").value = "";
  document.getElementById("time").value = "";
  document.getElementById("disp-amt").innerHTML = "";
  document.getElementById("disp-int").innerHTML = "";
  display.style.display = "none";
}
