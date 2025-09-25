document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "💛志歩、君の笑顔が僕の宝物だよ💛",
        "💖君といるだけで、毎日が記念日💖",
        "💞僕の心のすべては志歩でいっぱい💞",
        "✨世界中を探しても君以上の人なんていない✨",
        "💐君の幸せが僕の幸せだよ、いつまでも💐",
        "💫ずっと、ずっと、愛してる💫"
    ];

    const surpriseButton = document.getElementById('surprise-button');
    const changeableMessage = document.getElementById('changeable-message');
    const appContainer = document.getElementById('app-container');
    const heartContainer = document.getElementById('heart-container');

    let messageIndex = 0;

    // ボタンをクリックした時のイベント
    surpriseButton.addEventListener('click', () => {
        // メッセージを切り替える
        changeableMessage.textContent = messages[messageIndex];
        changeableMessage.style.animation = 'none'; // アニメーションをリセット
        void changeableMessage.offsetWidth; // 強制リフロー
        changeableMessage.style.animation = 'fade-in-up 1.5s ease-out forwards';

        messageIndex = (messageIndex + 1) % messages.length;

        // ハートと星のエフェクトを生成
        for (let i = 0; i < 20; i++) {
            createParticle('heart');
            createParticle('star');
        }
    });

    // 定期的にハートのエフェクトを生成
    setInterval(() => {
        createParticle('heart');
    }, 500);

    function createParticle(type) {
        const particle = document.createElement('div');
        particle.classList.add(type);
        
        if (type === 'heart') {
            particle.textContent = '💛';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 3 + 4}s`; // 4-7秒
            particle.style.fontSize = `${Math.random() * 2 + 1}em`;
        } else {
            particle.textContent = '⭐';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 3 + 4}s`;
            particle.style.fontSize = `${Math.random() * 1.5 + 0.5}em`;
            particle.style.animationName = 'float-up';
        }
        
        // ランダムな位置からスタート
        particle.style.left = `${Math.random() * 100}vw`;
        
        heartContainer.appendChild(particle);

        // アニメーション終了後に要素を削除
        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
});
