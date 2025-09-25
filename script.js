document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "💖志歩、君の笑顔が僕の宝物だよ、永遠に💖",
        "💞君といるだけで、毎日が夢のように輝くんだ💞",
        "✨僕の心のすべては志歩でいっぱいで、あふれそう✨",
        "🌟世界中を探しても君以上の人なんて絶対いないよ🌟",
        "🌸君の幸せが僕の究極の幸せだよ、ずっと見守らせて🌸",
        "💫ずっと、ずっと、ずーーーーーっと愛してる！💛💛💛💫"
    ];

    const surpriseButton = document.getElementById('surprise-button');
    const changeableMessage = document.getElementById('changeable-message');
    const heartSparkleContainer = document.getElementById('heart-sparkle-container');
    const backgroundHeartsContainer = document.getElementById('background-hearts');

    let messageIndex = 0;

    // ボタンをクリックした時のイベント
    surpriseButton.addEventListener('click', () => {
        // メッセージを切り替える
        changeableMessage.textContent = messages[messageIndex];
        changeableMessage.style.animation = 'none'; // アニメーションをリセット
        void changeableMessage.offsetWidth; // 強制リフロー
        changeableMessage.style.animation = 'fade-in-up 1.5s ease-out forwards';

        messageIndex = (messageIndex + 1) % messages.length;

        // 大量のハートと星、キラキラのエフェクトを生成
        for (let i = 0; i < 50; i++) { // 生成数を増やす！
            createParticle('heart');
            createParticle('star');
            createParticle('sparkle');
        }
    });

    // 定期的にハートとキラキラを生成
    setInterval(() => {
        createParticle('heart');
        createParticle('star');
        createParticle('sparkle');
    }, 200); // 間隔を短くして頻繁に発生させる

    // 背景のハートを定期的に生成
    setInterval(() => {
        createBackgroundHeart();
    }, 1000); // 1秒ごとに背景ハートを出す

    function createParticle(type) {
        const particle = document.createElement('div');
        particle.classList.add(`particle-${type}`); // クラス名を変更
        
        if (type === 'heart') {
            particle.textContent = '💛';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 3 + 4}s`; // 4-7秒
            particle.style.fontSize = `${Math.random() * 2 + 2}em`; // サイズを大きく
        } else if (type === 'star') {
            particle.textContent = '⭐';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 3 + 4}s`;
            particle.style.fontSize = `${Math.random() * 1.5 + 1}em`; // サイズを大きく
        } else if (type === 'sparkle') {
            particle.textContent = '✨'; // キラキラマーク
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 3 + 4}s`;
            particle.style.fontSize = `${Math.random() * 1 + 0.8}em`; // サイズ
        }
        
        // ランダムな位置からスタート
        particle.style.left = `${Math.random() * 100}vw`;
        heartSparkleContainer.appendChild(particle);

        // アニメーション終了後に要素を削除
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    function createBackgroundHeart() {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.textContent = '💖'; // 背景はピンクのハートに
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`; // 画面内のどこからでもスタート
        heart.style.fontSize = `${Math.random() * 4 + 3}em`; // かなり大きく
        heart.style.animationDuration = `${Math.random() * 10 + 15}s`; // 15-25秒でゆっくり動く
        heart.style.animationDelay = `-${Math.random() * 10}s`; // ランダムな遅延で最初からバラバラに動く
        backgroundHeartsContainer.appendChild(heart);

        // アニメーション終了後に要素を削除 (無限ループなので実際にはあまり削除されないかも)
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
});
