document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const minBalance = 1000;
    const maxBalance = 10000;
    
    // Генерация случайного баланса
    const randomBalance = Math.floor(Math.random() * (maxBalance - minBalance + 1)) + minBalance;
    balanceElement.textContent = `${randomBalance.toLocaleString()} RATC`;
    
    // Пример сохранения баланса в localStorage
    if (!localStorage.getItem('userBalance')) {
        localStorage.setItem('userBalance', randomBalance);
    } else {
        balanceElement.textContent = `${localStorage.getItem('userBalance')} RATC`;
    }
});
