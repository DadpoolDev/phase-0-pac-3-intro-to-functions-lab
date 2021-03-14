// Shouting HELLO
function shout(string) {
    return `Hello`.toUpperCase();
}
//Whispering hello
function whisper(string){
    return `Hello`.toLowerCase();
}
// Logging HELLO
function logShout(string){
    console.log(`HELLO`);
}
//Logging hello
function logWhisper(string){
    console.log(`hello`);
}

const string = "Hello"
//Saying hi to grandma
function sayHiToGrandma(string){
    if (string === string.toLowerCase())
    return "I can't hear you!";

//Shouting YES INDEED
    else if (string === string.toUpperCase())
    return "YES INDEED!";

// Saying I love you Grandma!
   else if (string === "I love you, Grandma.")
    return "I love you, too.";
}