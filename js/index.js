window.addEventListener('load', function () {
    // 初始化两个轮播区域
    initCarousel('.focus-page2');
    initCarousel('.focus-page3');

    function initCarousel(selector) {
        // 1. 获取元素
        var focus = document.querySelector(selector);
        var arrowl = focus.querySelector('.arrow-l');
        var arrowr = focus.querySelector('.arrow-r');
        var ul = focus.querySelector('ul');
        var ol = focus.querySelector('.circle');
        
        // 2. 鼠标经过显示/隐藏按钮
        focus.addEventListener('mouseover', function () {
            arrowl.style.display = "block";
            arrowr.style.display = "block";
            clearInterval(this.timer);
            this.timer = null;
        })
        focus.addEventListener('mouseout', function () {
            arrowl.style.display = "none";
            arrowr.style.display = "none";
            startTimer(this);
        })
        
        // 3. 动态生成小圆圈
        for (var i = 0; i < ul.children.length; i++) {
            var li = document.createElement('li');
            li.setAttribute('index', i);
            ol.appendChild(li);
        }
        ol.children[0].className = 'current';
        var focusWidth = focus.offsetWidth;
        
        // 4. 点击小圆圈切换图片
        ol.addEventListener('click', function (e) {
            if (e.target.tagName === 'LI') {
                var index = e.target.getAttribute('index');
                num = index;
                circle = index;
                circleChange();
                animate(ul, -index * focusWidth);
            }
        })
        
        // 6. 克隆第一张图片放到最后
        var first = ul.children[0].cloneNode(true);
        ul.appendChild(first);
        
        // 7. 轮播控制变量
        var num = 0;
        var circle = 0;
        
        // 右侧按钮点击事件
        arrowr.addEventListener('click', function () {
            if (num == ol.children.length) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            circle++;
            if (circle == ol.children.length) circle = 0;
            circleChange();
            animate(ul, -num * focusWidth);
        })
        
        // 左侧按钮点击事件
        arrowl.addEventListener('click', function () {
            if (num == 0) {
                num = ol.children.length;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            circle--;
            if (circle < 0) circle = ol.children.length - 1;
            circleChange();
            animate(ul, -num * focusWidth);
        })
        
        // 小圆圈状态更新
        function circleChange() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
        
        // 启动自动播放
        function startTimer(el) {
            el.timer = setInterval(function () {
                arrowr.click();
            }, 2000);
        }
        startTimer(focus);
    }
});