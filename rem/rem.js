(function (window, document) { 
    var designWidth = 640, // 设计稿尺寸
        rem2px = 100, // 1rem=N像素
        domRoot = window,
        widthProperty = 'innerWidth',
        lastWidth = 0

    var configMeta = document.getElementsByTagName('meta')['rem:config']
    if (typeof configMeta !== 'undefined') {
        var content = configMeta.getAttribute('content')
        designWidth = parseInt(content.match(/width=(\d+)/)[1])
        rem2px = parseInt(content.match(/rem2px=(\d+)/)[1])
    }

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

    window.addEventListener('resize', refreshRem, false)
    // window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', refreshRem, false)
})(window, document)