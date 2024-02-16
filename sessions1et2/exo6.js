main();
function main() {
    alert("exo6");

    let temp = "0";
    let unit;
    do {
        isNaN(temp) ? console.log("temp est un NaN!!!") : console.log("temp est à 0 par default");
        temp = prompt("type  a temperature");
        console.log(temp + typeof (temp))
    } while (isNaN(temp));
    console.log("temp ok")

    do {
        unit = prompt("type  a unit (C° or F°)");
        unit = unit.trim().toLowerCase();
        console.log("celsius: " + unit.includes("c") + " Fahrenheit: " + unit.includes("f"));
    } while (!(unit.includes("c") || unit.includes("f")));
    console.log("unit ok");

    if (unit.includes("c")) {

        let convert = parseInt((temp * 9 / 5) + 32);
        console.log(`${temp} °C font ${convert} °F`)
    } else {
        convert = parseInt((temp - 32) * 5 / 9);
        console.log(`${temp} °F font ${convert} °C`);
    }
}


