var text = document.title
var timerId

function newtext() {
    clearTimeout(timerId)
    document.title = text.substring(1, text.length) + text.substring(0, 1)
    text = document.title.substring(0, text.length)
    timerId = setTimeout("newtext()", 500)
}
newtext();