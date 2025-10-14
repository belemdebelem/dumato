$(document).ready(function() {
        
    // LÓGICA DO DARK MODE (COMPLETAMENTE FUNCIONAL E PERSISTENTE)
    const toggleButton = $('#toggle-theme');

    function updateTheme(isDarkMode) {
        if (isDarkMode) {
            $('body').addClass('dark-mode');
            toggleButton.html('<i class="fa-solid fa-sun"></i>'); 
            localStorage.setItem('darkMode', 'enabled');
        } else {
            $('body').removeClass('dark-mode');
            toggleButton.html('<i class="fa-solid fa-moon"></i>'); 
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // Carregar a preferência salva
    if (localStorage.getItem('darkMode') === 'enabled') {
        updateTheme(true);
    } else {
         updateTheme(false);
    }

    // Listener para alternar
    toggleButton.on('click', function() {
        updateTheme(!$('body').hasClass('dark-mode'));
    });
            
    // LÓGICA DO RELÓGIO DE CONTATO (ADICIONADO)
    function startCountdown(duration, display) {
        let timer = duration, hours, minutes, seconds;
        
        // Tenta buscar o tempo restante no localStorage, se não existir usa a duração completa
        let storedTime = localStorage.getItem('countdownTime');
        if (storedTime) {
            let now = new Date().getTime();
            let timeLeft = Math.floor((storedTime - now) / 1000);
            if (timeLeft > 0) {
                timer = timeLeft;
            } else {
                localStorage.removeItem('countdownTime'); // Reseta se o tempo expirou
            }
        }
        
        if (!localStorage.getItem('countdownTime')) {
             // Salva a hora de expiração (3 horas a partir de agora)
             let expiryTime = new Date().getTime() + duration * 1000;
             localStorage.setItem('countdownTime', expiryTime);
        }

        const interval = setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(hours + ":" + minutes + ":" + seconds);

            if (--timer < 0) {
                clearInterval(interval);
                display.text("PROMO EXPIRADA!");
                localStorage.removeItem('countdownTime'); 
            }
        }, 1000);
    }

    const timerDisplay = $('#timer');
    // Duração de 3 horas em segundos (3 * 60 * 60)
    const threeHours = 3 * 3600; 

    if (timerDisplay.length) {
        startCountdown(threeHours, timerDisplay);
    }
});