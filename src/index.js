const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// Алгоритм:
// 1) разбить строку на символы сплитом
// 2) разбить массив на подгруппы по 10 символов
// 3) разбить подгруппы на пары элементов
// 4) объединить полученные пары
// 5) пперевести код в точки-тире
// 6) по данным из словаря побуквенно составить результирующую строку


// 1) разбить строку на символы сплитом
function splitExpr(expr) {
    let arrayOfSymbols = expr.split('');
    // console.log(arrayOfSymbols);
    return arrayOfSymbols;
}

// 2) разбить массив на подгруппы по 10 символов
// 3) разбить подгруппы на пары элементов
// 4) объединить полученные пары
function spliceIntoChunks(arrOfSymbols, chunkSize) {
    const res = [];
    while (arrOfSymbols.length > 0) {
        const chunk = arrOfSymbols.splice(0, chunkSize);
        let resPairs = [];
        while (chunk.length > 0) {
            const chunkPairs = chunk.splice(0, 2).join('');
            resPairs.push(chunkPairs);
        }
        // resPairs.reverse(); - неверно, так как в этом случае получаются другие буквы
        res.push(resPairs);
    }
    // console.log(res);
    return res;
}

// 5) пперевести код в точки-тире
// 6) по данным из словаря побуквенно составить результирующую строку
function translteIntoString(arrOfChunks) {
    let resString = '';
    for (chunk of arrOfChunks) {
        let rawString = '';
        for (partOfChunk of chunk) {
            if (partOfChunk == '10') {
                rawString = rawString + '.';
            } else if (partOfChunk == '11') {
                rawString = rawString + '-';
            } else if (partOfChunk == '**') {
                resString = resString + ' ';
                break;
            } else if (partOfChunk == '00') {
                rawString = rawString + '';
            }
            // console.log(rawString);
        }
        // console.log(rawString);
        if (!(rawString == '')) {
            resString = resString + MORSE_TABLE[rawString];
        }
    }
    // console.log(resString);
    return resString;
}


// let mas = splitExpr(expr);
// let mass = spliceIntoChunks(mas, 10);
// let massi = translteIntoString(mass);


function decode(expr) {
    let mas = splitExpr(expr);
    let mass = spliceIntoChunks(mas, 10);
    let stroka = translteIntoString(mass);

    return stroka;
}

module.exports = {
    decode
}