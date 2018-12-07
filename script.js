var input = document.getElementById("input-text")
var button = document.getElementById("generate-button")
var output = document.getElementById("output-text")

var L = "L"
var R = "R"
button.addEventListener("click", generate)

function generate () {
    if (input.value == "") {
        alert("Input is empty, fill the input field");
    } else {
        var inputString = input.value.toUpperCase();
        var inputString = inputString.split(' ').join("").split('');
        console.log(inputString)
        var outputString = "<p>";
        for (var i = 0; i < inputString.length; i++) {
            switch (inputString[i]) {
                case "A":
                case "M":
                    outputString += L + L + L + L;
                    break;


                case "Ą":
                case "N":
                    outputString += R + L + L + L;
                    break;

                case "B":
                case "Ń":
                    outputString += L + R + L + L;
                    break;

                case "C":
                case "R":
                    outputString += L + L + R + L;
                    break;

                case "Ć":
                case "O":
                case "Ó":
                    outputString += L + L + L + R;
                    break;

                case "D":
                case "P":
                case "Q":
                    outputString += R + R + L + L;
                    break;

                case "E":
                case "R":
                    outputString += L + R + R + L;
                    break;

                case "Ę":
                case "S":
                    outputString += L + L + R + R;
                    break;

                case "F":
                case "Ś":
                    outputString += R + L + L + R;
                    break;

                case "G":
                case "T":
                    outputString += R + L + R + L;
                    break;

                case "H":
                case "U":
                    outputString += L + R + L + R;
                    break;

                case "I":
                case "W":
                case "V":
                    outputString += R + R + R + L;
                    break;

                case "J":
                case "X":
                case "Y":
                    outputString += L + R + R + R;
                    break;

                case "K":
                case "Z":
                    outputString += R + L + R + R;
                    break;

                case "L":
                case "Ż":
                    outputString += R + R + L + R;
                    break;

                case "Ł":
                case "Ź":
                    outputString += R + R + R + R;
                    break;

            }


            if ((i + 1) % 4 == 0) {
                outputString += " </p><p>"
            } else if (i == inputString.length - 1) {
                break;
            } else {
                outputString += " | "
            }
        }
        output.innerHTML = outputString + "</p>"

    }
}