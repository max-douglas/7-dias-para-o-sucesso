const PICPAY_LINK = "https://link.picpay.com/p/177674016669e6e746a655d";
const PIX_KEY = "maxdoff5@gmail.com";

function openPicPayModal() {
    const modal = document.getElementById('picpayModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closePicPayModal() {
    const modal = document.getElementById('picpayModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function payWithPicPay() {
    window.open(PICPAY_LINK, '_blank');
}

function copyPixKey() {
    navigator.clipboard.writeText(PIX_KEY);
    alert('✅ Chave PIX copiada!\n\n' + PIX_KEY);
}

function openLesson(dayNumber) {
    const modal = document.getElementById('lessonModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modal && modalTitle && modalBody) {
        const lesson = lessonContent[dayNumber];
        if (lesson) {
            modalTitle.textContent = lesson.title;
            modalBody.innerHTML = lesson.content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
}

function closeLesson() {
    const modal = document.getElementById('lessonModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

const lessonContent = {
    1: {
        title: 'Dia 1 - O Despertar Financeiro',
        content: '<h3>Entenda por que você está onde está</h3><p>Os 4 Pilares da Riqueza: Renda, Economia, Investimento, Tempo</p>'
    },
    2: {
        title: 'Dia 2 - A Mentalidade do Rico',
        content: '<h3>7 Diferenças Fundamentais</h3><p>Rico vê oportunidades, pobre vê obstáculos</p>'
    },
    3: {
        title: 'Dia 3 - Os Segredos do Dinheiro',
        content: '<h3>4 Formas de Ganhar Dinheiro</h3><p>Trabalho, Comissão, Negócio, Investimento</p>'
    },
    4: {
        title: 'Dia 4 - Planejamento Financeiro',
        content: '<h3>Método 50-30-20</h3><p>50% Necessidades, 30% Desejos, 20% Investimento</p>'
    },
    5: {
        title: 'Dia 5 - Gerando Renda Extra',
        content: '<h3>10 Formas de Ganhar</h3><p>Freelancer, Afiliado, Curso, E-book, YouTube, Dropshipping</p>'
    },
    6: {
        title: 'Dia 6 - Investimentos Inteligentes',
        content: '<h3>Onde Investir</h3><p>Tesouro Direto, CDB, Ações - Poder dos Juros Compostos</p>'
    },
    7: {
        title: 'Dia 7 - Construindo Seu Império',
        content: '<h3>Seu Primeiro Milhão</h3><p>Plano de 10 anos: R$1.000.000 = R$80.000/mês passivo!</p>'
    }
};

function updateTimer() {
    let hours = 48;
    let minutes = 0;
    let seconds = 0;
    
    setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    document.getElementById('timer').textContent = '00:00:00';
                    return;
                }
                hours--;
                minutes = 59;
            } else {
                minutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }
        
        const timeString = 
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');
        
        document.getElementById('timer').textContent = timeString;
    }, 1000);
}

window.onclick = function(event) {
    const picpayModal = document.getElementById('picpayModal');
    const lessonModal = document.getElementById('lessonModal');
    
    if (event.target === picpayModal) {
        picpayModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (event.target === lessonModal) {
        lessonModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateTimer();
});
