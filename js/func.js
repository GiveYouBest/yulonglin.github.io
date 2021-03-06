var fnTextPopup = function(arr, options) {
    // arr参数是必须的
    if (!arr || !arr.length) {
        return;
    }
    // 主逻辑
    var index = 0;
    document.documentElement.addEventListener('click', function(event) {
        var x = event.pageX,
            y = event.pageY;
        var eleText = document.createElement('span');
        eleText.className = 'text-popup';
        this.appendChild(eleText);
        if (arr[index]) {
            eleText.innerHTML = arr[index];
        } else {
            index = 0;
            eleText.innerHTML = arr[0];
        }
        // 动画结束后删除自己
        eleText.addEventListener('animationend', function() {
            eleText.parentNode.removeChild(eleText);
        });
        // 位置
        eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
        eleText.style.top = (y - eleText.clientHeight) + 'px';
        // index递增
        index++;
    });
};

fnTextPopup(['CSS', 'HTML', 'JavaScript', 'jQuery', 'Php', 'Node.js', 'Vue', '法治', '爱国', '敬业', '诚信', '友善']);

var text = document.title
var timerId

function newtext() {
    clearTimeout(timerId)
    document.title = text.substring(1, text.length) + text.substring(0, 1)
    text = document.title.substring(0, text.length)
    timerId = setTimeout("newtext()", 1500)
}
newtext();



var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?456664e494b645c9b0b0d53341da9136";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();