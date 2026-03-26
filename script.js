function convert() {
    let val = document.getElementById("inputValue").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let resultDisplay = document.getElementById("result");
    if (val === "") { resultDisplay.innerHTML = "০.০০"; return; }
    let meters = (from === "meter") ? val : (from === "kilometer") ? val * 1000 : (from === "inch") ? val * 0.0254 : val * 0.3048;
    let final = (to === "meter") ? meters : (to === "kilometer") ? meters / 1000 : (to === "inch") ? meters / 0.0254 : meters / 0.3048;
    resultDisplay.innerHTML = final.toFixed(2);
}
