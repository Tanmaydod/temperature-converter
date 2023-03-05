function convert() {
    var temp = document.getElementById("temp").value;
    var tempType = document.getElementById("tempType").value;
    var result = document.getElementById("result");
    if (isNaN(temp)) {
      result.innerHTML = "Please enter a valid number.";
      return;
    }
    if (tempType === "celsius") {
      var fahrenheit = (temp * 9/5) + 32;
      var kelvin = parseFloat(temp) + 273.15;
      result.innerHTML = temp + "°C = " + fahrenheit.toFixed(2) + "°F = " + kelvin.toFixed(2) + "K";
    } else if (tempType === "fahrenheit") {
      var celsius = (temp - 32) * 5/9;
      var kelvin = (temp - 32) * 5/9 + 273.15;
      result.innerHTML = temp + "°F = " + celsius.toFixed(2) + "°C = " + kelvin.toFixed(2) + "K";
    } else if (tempType === "kelvin") {
      var celsius = parseFloat(temp) - 273.15;
      var fahrenheit = (temp - 273.15) * 9/5 + 32;
      result.innerHTML = temp + "K = " + celsius.toFixed(2) + "°C = " + fahrenheit.toFixed(2) + "°F";
    }
  }
  