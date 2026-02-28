let dae=new Date();
console.log(dae);

let n=temporal.now.instant();
console.log(n);

let date=temporal.PlainDate.from({year: 2024, month: 6, day: 1});
console.log(date);
console.log(date.year);
console.log(date.month);
console.log(date.day);