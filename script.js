
let user = 'Madina';

if (user = user.includes('a') ) {
    console.log(user);
} else {
    console.log(user);
}



let str1 = 'Web';
let str2 = 'Brain';

console.log(str1.replace('Web','Brain'));
console.log(str2.replace('Brain','Web'));



let leapyear = 2011;

if (leapyear % 2 == 0 || leapyear % 4 == 0) {
    console.log('Kabisya yili');
} else {
    console.log('Kabisya yili emas');
}


var str = '#madina#web#brain#';
var str = str.replace('#madina#', '(madina)').replace('#web#', 'web').replace('#brain#', '(brain)' );
console.log(str);


var s = 'webBrain ';
var s = s.replace('web','IT')
var s = s.repeat(10);
console.log(s);