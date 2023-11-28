// masala 1 

// includes bilan

let user = 'Madina';

if (user = user.includes('a') ) {
    console.log(user);
} else {
    console.log(user);
}

// toLowerCase / trim / includes bilan

let user2 = 'Nasiba';

console.log(str.trim().toLowerCase().includes('n'));

// masala 2 replace bilan

let str1 = 'Web';
let str2 = 'Brain';

console.log(str1.replace('Web','Brain'));
console.log(str2.replace('Brain','Web'));

// masala 3 if/else bilan

let leapyear = 2011;

if (leapyear % 2 == 0 || leapyear % 4 == 0) {
    console.log('Kabisya yili');
} else {
    console.log('Kabisya yili emas');
}

// masala 4 replace bilan

var str = '#madina#web#brain#';
var str = str.replace('#madina#', '(madina)').replace('#web#', 'web').replace('#brain#', '(brain)' );
console.log(str);

// masala 5 replace va repeat bilan

var s = 'webBrain ';
var s = s.replace('web','IT')
var s = s.repeat(10);
console.log(s);