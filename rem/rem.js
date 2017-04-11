(function (window, document) {
    function isMobile() {
        return /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
    }
    // only support mobile
    if (!isMobile()) return

    var designWidth, // 设计稿尺寸
        rem2px, // 1rem=N像素
        domRoot = window,
        widthProperty = 'innerWidth',
        lastWidth = 0

    designWidth = 640
    rem2px = 100

    var metaTags = document.getElementsByTagName('meta')

    for (var i = 0; i < metaTags.length; i++) {
        var e = metaTags[i]
        if (e.getAttribute('name') == 'rem:config') {
            var content = e.getAttribute('content')
            designWidth = parseInt(content.match(/width=(\d+)/)[1]);
            rem2px = parseInt(content.match(/rem2px=(\d+)/)[1]);
            break;
        }
    }

    console.log(designWidth, rem2px)

    if (!(widthProperty in window)) {
        widthProperty = 'clientWidth'
        domRoot = document.documentElement || document.body
    }

    function refreshRem() {
        var newWidth = domRoot[widthProperty]
        if (lastWidth !== newWidth) {
            document.documentElement.style.fontSize = newWidth / designWidth * rem2px + 'px'
            lastWidth = newWidth
        }
    }

    refreshRem()

    // window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', refreshRem, false)
    window.addEventListener('resize', refreshRem, false)

})(window, document)
