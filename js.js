 function createSpot() {
            const spot = document.createElement('div');
            spot.classList.add('spot');
            
            // 随机大小 (2px 到 10px)
            const size = Math.random() * 8 + 2;
            spot.style.width = `${size}px`;
            spot.style.height = `${size}px`;
            
            // 随机水平位置
            const leftPos = Math.random() * 100;
            spot.style.left = `${leftPos}vw`;
            
            // 从页面底部开始
            spot.style.bottom = `0px`;
            
            // 随机动画持续时间 (5秒到15秒)
            const duration = Math.random() * 10 + 5;
            spot.style.animation = `floatUp ${duration}s linear forwards`;
            
            // 添加到页面
            document.body.appendChild(spot);
            
            // 动画结束后移除元素
            setTimeout(() => {
                spot.remove();
            }, duration * 1000);
        }
        
        // 定时创建新斑点
        setInterval(createSpot, 100);
        
        // 初始创建一些斑点
        for (let i = 0; i < 20; i++) {
            setTimeout(createSpot, i * 200);
        }