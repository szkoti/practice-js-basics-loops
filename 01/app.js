const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);


if (randomNumber > 5) {
    for (let i = 5; i < randomNumber +1; i++) {
        let array = [];
        array += i;
        console.log(array);
    }

} else {
    console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}
