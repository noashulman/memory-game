const cardPictures = ["./ca1.jpg", "./ca2.jpg", "./ca3.jpg", "./ca4.jpg", "./ca5.jpg", "./ca6.jpg", "./ca1.jpg", "./ca2.jpg", "./ca3.jpg", "./ca4.jpg", "./ca5.jpg", "./ca6.jpg"];


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a
}
let shuffled = shuffle(cardPictures);
let cards = document.querySelectorAll(".cards");

// const button = document.querySelector(".button");
// button.addEventListener("click", startGame);

// function startGame() {


    for (let i = 0; i < cards.length; i++) {

        let div = document.createElement("div");
        div.classList.add("picture");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.backgroundRepeat = "round";
        div.style.backgroundImage = `url(${"./backcard.jpg"})`;

        cards[i].appendChild(div);

    }


    const elem = document.querySelectorAll(".picture");
    let counter = 0;
    let counterWin = 0;
    for (let i = 0; i < elem.length; i++) {
        elem[i].setAttribute("id", i);
        elem[i].addEventListener("click", switchOn);

    }

    function switchOn(event) {
        const index = event.target.id;
        event.target.style.backgroundImage = `url(${shuffled[index]})`;
        console.log(event.target);
        event.target.classList.add("pair");
        counter++;
        console.log(counter);

        if (counter % 2 == 0 && counter > 0) {
            let element = document.querySelectorAll(".pair");
            console.log(element);
            for (i = 0; i < element.length; i++) {
                element[i].classList.remove("pair");
            }
            if (element[0].style.backgroundImage == element[1].style.backgroundImage) {
                counter = 0;
                counterWin++;
            } else {
                setTimeout(function () { for (i = 0; i < element.length; i++) { element[i].style.backgroundImage = `url(${"./backcard.jpg"})` } }, 1000);

            }


            if (counterWin == 6) {
                const win = document.querySelector(".youwon");
                const content = document.createTextNode("You won!!!");
                win.appendChild(content);

            }
        }

        const button = document.querySelector(".button");
        button.addEventListener("click", start);

        function start() {
            const list = document.querySelectorAll(".containCards");
            list[3].removeChild(list[3].childNodes[0]);

            for (let i = 0; i < cards.length; i++) {

                while (cards[i].hasChildNodes()) {
                    cards[i].removeChild(cards[i].firstChild);
                }
            }


        }


    }


// }








//shuffle the cards
    //make two cards for each picture
    //flip pictures on event
    //when 2 pictures flipped, hold
    //if the same, stay open, if not switch off
    //if all cards not back







