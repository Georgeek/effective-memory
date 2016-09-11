// alert ( Math.random () * 10 );

function randomInteger(min, max) {
    return Math.round( min - 0.5 + Math.random() * (max - min + 1) );
}

alert ( randomInteger(1, 100) );