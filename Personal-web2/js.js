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

        // 当页面鼠标移动时尝试播放音乐（解决浏览器自动播放限制）
document.body.addEventListener('mousemove', function() {
    setTimeout(() => {
        music.play(); // 延迟2000毫秒后播放音乐
    }, 2000);
}, false);

// 初始化音乐播放相关变量
let music = document.getElementById('music')    //获取音乐元素
let isPlaying = true; // 标记音乐是否在播放
let tem = true; // 标记音乐播放状态
let rootUrl = '' // 根目录路径
let songs = [ // 音乐列表
    'resource/song/1.pv曲.mp3',
    'resource/song/2.主界面.mp3',
    'resource/song/3.战斗曲1.mp3',
    'resource/song/4.战斗曲2.mp3',
    'resource/song/5.玉门.mp3',
    'resource/song/6.江雪.mp3',
    
];
let i = 0; // 当前播放索引

// 初始设置音乐源并尝试自动播放
music.src = rootUrl + songs[i];

// 当音乐播放结束时自动播放下一首
music.addEventListener('ended', function () {  
    i=(i+1)%songs.length; // 循环播放音乐列表
    music.src = rootUrl + songs[i];// 切换到下一首音乐地址
    music.play().catch(err =>{
        console.log('自动播放被浏览器阻止:', err);
    }); // 自动播放下一首
}, false);

function nextMusic(){
    i=(i+1)%songs.length;
    music.src = rootUrl + songs[i];
    music.play().catch(err =>{
        console.log('自动播放被浏览器阻止:', err);
    });
    tem = true;
    document.getElementById('musicico').style.animationPlayState = 'running';
}

// 音乐播放/暂停控制函数
function musiccc(){
    if(tem == false){
        music.play().catch (err =>{
            console.log('自动播放被浏览器阻止:', err);
        });  // 播放音乐
        tem = true;  
        document.getElementById('musicico').style.animationPlayState = 'running';  // 播放音乐图标动画
    }else{
        music.pause();  // 暂停音乐
        tem = false;
        document.getElementById('musicico').style.animationPlayState = 'paused';  // 暂停音乐图标动画
    }
}

// 获取header元素（注意：原代码中header的获取方式有误，HTML中是class="header"而非id）
let header = document.querySelector('.header');
let lastScrollTop = 0; // 记录上一次滚动位置

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 当向下滚动且滚动距离超过50px时，隐藏header
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease';
    } else {
        // 向上滚动时显示header
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease';
    }
    
    lastScrollTop = scrollTop;
});

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取点击元素和目标容器
    const scrollTrigger = document.getElementById('scrollToContainer');
    const container = document.querySelector('.container');
    
    if (scrollTrigger && container) {
        // 绑定点击事件
        scrollTrigger.addEventListener('click', function() {
            // 平滑滚动到container区域
            container.scrollIntoView({
                behavior: 'smooth', // 平滑滚动效果
                block: 'start' // 对齐容器顶部
            });
        });
    }
});