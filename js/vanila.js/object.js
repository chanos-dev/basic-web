let memberArr = ['hello', 'world', 'js'];

console.log(memberArr[0]);
console.log(memberArr[2]);
console.log("memberArr[2]", memberArr[2]);

let memberObj = {
    manager: 'person1',
    developer: 'person2',
    designer: 'person3',
}

console.log('memberObj.manager', memberObj.manager);
memberObj.manager = "modified person";
console.log('memberObj["manager"]', memberObj['manager']);
delete memberObj.developer;
console.log('memberObj["developer"]', memberObj['developer']);

console.group('array loop');
let i=0;
while(i < memberArr.length) {
    console.log(memberArr[i]);
    i=i+1;
}
console.groupEnd('array loop');

memberObj.teacher = 'kim';
console.group('object for-in');
for(let key in memberObj) {
    console.log(key, "-",memberObj[key]);
}
console.groupEnd('object for-in');