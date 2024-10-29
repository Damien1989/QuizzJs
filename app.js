const responses = ["b", "a", "b"];
const emojis = ["✅", "🍻", "😱"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    
    const results = [];

    const radioButtons = document.querySelectorAll("input[type='radio']:checked")

        radioButtons.forEach((radioButton, index) => {
            if(radioButton.value === responses[index]) {
                results.push(true)
            } else {
                results.push(false)
            }
        })

        // console.log(radioButtons);
        // console.log(results);
        showResults(results)
}

const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results){
    const errorsNumber = results.filter(el => el === false).length;
    console.log(errorsNumber) {

        case 0
            titleResult.textContent = "Bravo c'est un sans faute !";
            helpResult.style.display = "block";
            helpResult.textContent = "Quelle culture...";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 5 / 5 </span>";
            break;

            case 1
            titleResult.textContent = "Vous y êtes presque !";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez...";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 4 / 5 </span>";
            break;

            case 2
            titleResult.textContent = "Encore un effort  🍻";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez...";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 3 / 5 </span>";
            break;

            case 3
            titleResult.textContent = "Bof...";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez...";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 2 / 5 </span>";
            break;

            case 4
            titleResult.textContent = "Aîe";
            helpResult.style.display = "block";
            helpResult.textContent = "Retentez...";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 1 / 5 </span>";
            break;

            case 5
            titleResult.textContent = "En vrai t'es nul !!";
            helpResult.style.display = "block";
            helpResult.textContent = "Finito";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span> 0 / 5 </span>";
            break;

            default:
                titleResult.textContent = "Oops";
    }
}