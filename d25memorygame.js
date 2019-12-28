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
let shuffled = shuffle(cardPictures)
let cards = document.querySelectorAll(".cards");
for (let i = 0; i < cards.length+1; i++) {

    let div = document.createElement("div");
    div.classList.add("background")
    div.style.backgroundImage = `url(${"./backcard.jpg"})`


    let background = document.querySelectorAll(".background");
    let counter = 0

    for (let i = 0; i < background.length; i++) {
        background[i].addEventListener("click", switchOn)
        console.log(background)

        function switchOn(e) {

            background[i].style.backgroundImage = `url(${shuffled[i]})`;
            background[i].classList.add("pair")
            var counter = 0;
            return function private() {
                counter++;
                console.log(counter);
            }

        var count_self_calls = switchOn();
        count_self_calls(); // 1
        count_self_calls(); //2

            if (count_self_calls == 2) {
                element = document.querySelectorAll(".pair")
                console.log(element[0].style.backgroundImage)
                if (element[0].style.backgroundImage == element[1].style.backgroundImage) {
                    counter--
                } else {
                    counter++
                }
            }








        }

    }
    cards[i].appendChild(div);
    div.style.width = "100%"
    div.style.height = "100%"
    div.style.backgroundRepeat = "round"


}




    //shuffle the cards
    //make two cards for each picture
    //flip pictures on event
    //when 2 pictures flipped, hold
    //if the same, stay open, if not switch off







