var letter, k, i;

while(!letter) {
    letter = prompt("Please enter a letter");
}

for(var i = 0; i < 10; i += 1) {
   for(k = 0; k <= i; k += 1) {
       document.write(letter);
    }
    document.write("<br>");
}
