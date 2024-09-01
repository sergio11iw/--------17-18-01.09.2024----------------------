let title = 'MegaSite'
let navItems = [
    'Пункт 1',
    'Пункт 2',
    'Пункт 3'
]
let bgcolor = 'rgb(7, 133, 126)'
let fontcolor = 'white'
let result = '';
let date = new Date().getFullYear()
    for (let key of navItems)
        result += `<div style="border: 2px  solid; display: inline-block; padding: 10px; height: 100%; margin: 10px; ">${key}</div>`;
    result += `</div>`
function generateFooter() {
    document.write (
        `<footer style="` +
        `background-color: ${bgcolor};` +
        `font-family: Arial, Helvetica, sans-serif;` +
        `font-size: 20px;` +
        `padding: 10px;` +
        `color: ${fontcolor};">` +
        `<h1>${title}</h1>` +
        `<div style="` +
        `text-align: center;` +
        `background-color: ${bgcolor};` +
        `color: ${fontcolor};">` +
        result +
        `</div>` +
        `<h6 style="text-transform: lowercase; text-align: center">&#169 ${title}, ${date + 3}</h6>` +
        `</footer>`
    )
}

generateFooter() 









