const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const clickText = document.getElementById('text');

    clickText.textContent = 'ボタンをクリックしました';

});