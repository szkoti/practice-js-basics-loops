> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e04-js-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#02` JavaScript: Podstawy – pętle

W pliku `app.js` są zadeklarowane dwie zmienne: `x` oraz `result`, do których odpowiednio zostały przypisane wartości `5` oraz `0`. Twoim zadaniem będzie obliczenie sumy wszystkich kolejnych liczb od `1` do `x`.

Deklaracja dla `x` została wykonana przy pomocy słowa kluczowego `const`, co oznacza, że przechowywana w tej zmiennej wartość nie będzie zmieniana w trakcie działania programu. W przypadku `result` wykorzystałem `let`, ponieważ ma ona przechowywać sumę kolejnych liczb od `1` do wartości z `x`. Docelowo `result = 1 + 2 + 3 + 4 + 5`, jeśli `x = 5`.

Do uzyskania kolejnych liczb użyj pętli `for`, która będzie generować poszczególne liczby. Liczby te będziesz dodawać do częściowej sumy całego wyniku. Każda iteracja pętli `for` to inna wartość dla `result`. Początkowo `result` będzie równe `0`, ale każda iteracja to nowa wartość, czyli:

1. result = 0 + 1
2. result = 1 + 2
3. result = 3 + 3
4. result = 6 + 4
5. result = 10 + 5

Ostatecznie `result = 15`, czyli tyle co `result = 1 + 2 + 3 + 4 + 5` – mamy nasz wynik! Zwróć uwagę, że w powyższym przykładzie pierwszy składnik sumy to wartość `result` z poprzedniego działania (lub zero przy pierwszej iteracji), natomiast drugi składnik to kolejna liczba większa o 1.

Gdy wykonasz to zadanie z użyciem pętli `for` , zrób to samo przy pomocy pętli `while`.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-basics/)*

> :arrow_left: [*poprzednie zadanie*](./../01) | [*następne zadanie*](./../03) :arrow_right:
