//1.Приветствие по имени
function helloName(name) {
    return "Hello" + " " + name + "!";
}
console.log(helloName("Bob"));
console.log(helloName("Alice"));
console.log(helloName("X"));

// 2.Вставка слова в строку
function insertWordIntoString(str1, str2) {
    let start = str1.substring(0, 2)
    let end = str1.substring(2, 4)
    let result = start + str2 + end;
    console.log(result)
}
insertWordIntoString("<<>>", "Yay");
insertWordIntoString("<<>>", "WooHoo");
insertWordIntoString("[[]]", "WooHoo");

// 3.Первая половина строки
function firstHalf(word) {
    console.log(word.slice(0, word.length / 2))
}
firstHalf("WooHoo")
firstHalf("HelloThere")
firstHalf("abcdef")

// 4.Конкатенация без первого символа
function nonStart(word1, word2) {
    console.log(word1.slice(1).concat(word2.slice(1)))
}
nonStart("Hello", "There")
nonStart("java", "code")
nonStart("shotl", "java")

// 5.Выбор символа из начала или конца строки
function theEnd(word1, word2) {
    if (word2 == true) {
        console.log(word1[0])
    } else
        console.log(word1[word1.length - 1])
}
theEnd("Hello", true)
theEnd("Hello", false)
theEnd("oh", true)

// 6.Проверка окончания строки на "ly"
function endsLy(word) {
    if (word.endsWith("ly")) {
        return true
    } else
        return false
}
console.log(endsLy("oddly"))
console.log(endsLy("y"))
console.log(endsLy("oddy"))

//7. Средние три символа строки нечетной длины
function middleThree(word) {
    let str = Math.floor(word.length / 2)
    console.log(word[str - 1] + word[str] + word[str + 1])
}
middleThree("Current")
middleThree("solving")
middleThree("and")

//8. Символы с начала и конца двух строк
function lastChars(a, b) {
    if (a.length == 0) {
        console.log("@" + b[length - 1])
    } else if (b.length == 0) {
        console.log(a[0] + "@")
    } else console.log(a[0] + b[b.length - 1])
}
lastChars("last", "chars");
lastChars("hi", "");

//9.Определение цвета
function seeColor(word) {
    if (word.startsWith("red")) {
        console.log("red")
    } else if (word.startsWith("blue")) {
        console.log("blue")
    } else
        console.log("")
}
seeColor("redxx")
seeColor("xxred")
seeColor("blueTimes")

//10.Три копии первых двух символов строки
function extraFront(word) {
    let str
    if (word.length > 0 && word.length <= 1) {
        console.log(word.concat(word.slice(0, 1), (word.slice(0, 1), (word.slice(0, 1)))))
    } else console.log(word.slice(0, 2) + word.slice(0, 2) + word.slice(0, 2))
}
extraFront("Hello")
extraFront("H")
