/**
 * 根据屏幕宽度自动设置font-size 更新rem
 * @author 清扬陌客
 * @param {number} designWidth 设计稿的宽度
 * @param {number} rem2px 1rem=100px 
 * @description 根据屏幕宽度自动设置font-size 更新rem,应尽早引入，放到head中
 * @version 1.0.0
 * @example 
 * var refreshRem = require('ui/refreshRem')
 * refreshRem(750,100);
 */
function refreshRem(designWidth, rem2px) {
    var designWidth = designWidth || 640, // 设计稿尺寸
        rem2px = rem2px || 100, // 1rem=N像素
        domRoot = window,
        widthProperty = 'innerWidth',
        lastWidth = 0;

    if (!(widthProperty in window)) {
        widthProperty = 'clientWidth'
        domRoot = document.documentElement;
    }

    function _refresh() {
        var newWidth = domRoot[widthProperty]
        if (lastWidth !== newWidth) {
            document.documentElement.style.fontSize = newWidth / designWidth * rem2px + 'px'
            lastWidth = newWidth
        }
    }

    _refresh()

    // if (!w) {
    //     // 魅族等某些机型开始获取的高度可能不对，因此延迟重新设置一遍
    //     setTimeout(function () {
    //         if (!w) {
    //             try {
    //                 w = parseInt(getComputedStyle(document.documentElement).width, 10);
    //                 document.documentElement.style.fontSize = w / 375 * 100 + 'px';
    //             } catch (e) { }
    //         }
    //     }, 1000);
    // }

    window.addEventListener('resize', _refresh, false)
}

module.exports = refreshRem;