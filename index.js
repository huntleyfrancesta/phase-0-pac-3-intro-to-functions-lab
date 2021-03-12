function shout(string) {
    return string.toUpperCase();
    'Hello!'.toUpperCase(); // 'HELLO!'
}

function whisper(string) {
    return string.toLowerCase();
    'Hello'.toLowerCase(); // 'hello'
}

function logShout(string) {
    console.log('Hello'.toUpperCase()); // 'HELLO'
}

function logWhisper(string) {
    console.log('HELLO'.toLowerCase()); // 'hello'
}

function sayHiToGrandma(string) {
    if (string === string.toLowerCase())
        return "I can't hear you!";

    else if (string === string.toUpperCase())
        return "YES INDEED!";

    else if (string === "I love you, Grandma.")
        return "I love you, too.";
}