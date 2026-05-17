// Перевірка знань з теми "Операційні системи"
function checkAnswer(questionId, selectedOption, correctOption) {
    const feedbackId = `feedback-${questionId}`;
    const feedbackElement = document.getElementById(feedbackId);
    
    if (!feedbackElement) return;

    if (selectedOption === correctOption) {
        feedbackElement.innerHTML = "🎉 Правильно! Чудова робота.";
        feedbackElement.style.color = "#2ecc71";
    } else {
        feedbackElement.innerHTML = "❌ Неправильно. Спробуй ще раз або зазирни в розділ 'Теорія'.";
        feedbackElement.style.color = "#e74c3c";
    }
}

// Функція для симуляції завантаження CPU (інтерактивний елемент)
function simulateCpuLoad() {
    const progressBar = document.getElementById("cpu-progress");
    if (!progressBar) return;
    
    let load = 0;
    const interval = setInterval(() => {
        if (load >= 100) {
            clearInterval(interval);
            alert("⚠️ ОС зреагувала: Процес завершено, ресурси звільнено!");
            progressBar.style.width = "0%";
        } else {
            load += Math.floor(Math.random() * 25) + 5;
            if (load > 100) load = 100;
            progressBar.style.width = `${load}%`;
        }
    }, 400);
}
