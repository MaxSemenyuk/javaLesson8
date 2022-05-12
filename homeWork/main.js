// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
const idP = document.getElementById('content')
console.log(idP.innerText)
// -- отримує текст з блоку з id "rules"
const idDiv = document.getElementById('rules')
console.log(idDiv.innerText)
// -- замініть текст параграфа з id 'content' на будь-який інший
idP.innerText = 'enother text'
// -- замініть текст параграфа з id 'rules' на будь-який інший
idDiv.innerText = 'more enother text'
// -- змініть кожному елементу колір фону на червоний
idP.style.backgroundColor = 'red'
idDiv.style.backgroundColor = 'red'
// -- змініть кожному елементу колір тексту на синій
idP.style.color = 'blue'
idDiv.style.color = 'blue'
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
const allClassesById = document.getElementById('rules')
console.log(allClassesById.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const elByClass = document.getElementsByClassName('fc_rules')
for (const elByClassKey of elByClass) {
    elByClassKey.style.color = 'red';
}
