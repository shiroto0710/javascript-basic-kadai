const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {

    const clickText = document.getElementById('text');

    setTimeout(() => {
        clickText.textContent = 'ボタンをクリックしました';
    }, 2000);
});
