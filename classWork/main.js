// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
const mainHeader = document.getElementById('main_header')
mainHeader.classList.add('march-2022-full-CHAT')
// b) робить ширину елементу ul 400px
const byTag = document.getElementsByTagName('ul')
for (const byTagElement of byTag) {
    byTagElement.style.width = '400px'
}
// c) робить ширину всіх елементів з класом linkList шириною 50%
const byClass = document.getElementsByClassName('linkList')
for (const byClass1 of byClass) {
    byClass1.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
const txtByClass = document.getElementsByClassName('listElement2')
for (const txtByClass1 of txtByClass) {
    console.log(txtByClass1.innerText)
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
const elLi = document.getElementsByTagName('li')
for (const elLiElement of elLi) {
    elLiElement.style.backgroundColor = 'gray'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
const allElA = document.getElementsByTagName('a')
for (const allElAElement of allElA) {
    allElAElement.classList.add('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
const allElA2 = document.getElementsByTagName('a')
for (const allElA2Element of allElA2) {
    if (allElA2Element.innerText === 'link3') allElA2Element.style.fontSize = '40px'
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const allElA3 = document.getElementsByTagName('a')
for (const allElA3Element of allElA3) {
    allElA3Element.classList.add('element_' + allElA3Element.innerText)
}
console.log(allElA3)
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const allElByClass = document.getElementsByClassName('sub-header')
for (const allElByClass1 of allElByClass) {
    allElByClass1.style.backgroundColor = prompt('color?')
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
const allElByClass2 = document.getElementsByClassName('sub-header')
for (const allElByClass2Element of allElByClass2) {
    if (allElByClass2Element.innerText === 'content 2 segment'){allElByClass2Element.style.color = prompt('font color?')}
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const elByClass2 = document.getElementsByClassName('content_1')
for (const elByClass2Element of elByClass2) {
    elByClass2Element.innerText = prompt('what new text?')
}
// l) отримати елементи p та змінити їм padding на 20px
const allElP = document.getElementsByTagName('p')
for (const allElPElement of allElP) {
    allElPElement.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const allElByClass3 = document.getElementsByClassName('text2')
for (const allElByClass3Element of allElByClass3) {
    allElByClass3Element.innerText = 'march-2022-full-CHAT'
}