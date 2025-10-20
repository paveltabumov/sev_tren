const scenes = {
    intro1: {
        text: "Ты — водитель на крупном промышленном заводе. Сегодня у тебя смена — тебе предстоит перевозить сотрудников между цехами!",
        next: "intro2",
        bg: "../images/17.jpeg",
    },
    intro2: {
        text: "Всё должно быть по правилам: ПДД, требования охраны труда, внутренний регламент предприятия.",
        next: "intro3",
        bg: "../images/17.jpeg",
    },
    intro3: {
        text: "Ты понимаешь: безопасность — не просто слова, а обязанность.",
        next: "intro4",
        bg: "../images/17.jpeg",
    },
    intro4: {
        text: "Перед началом смены ты подходишь к дежурному инженеру.",
        next: "intro5",
        bg: "../images/6.jpeg",
    },
    intro5: {
        bg: "../images/6.jpeg",
        text: "Дежурный спрашивает, прошел ли ты медосмотр?",
        choices: [
            { text: "Да, состояние в норме!", next: "documents" },
            { text: "Нет, я же пришел на работу - значит здоров!", next: "med1" }
        ],
    },
    med1: {
        text: "Без медосмотра - нет допуска на маршрут! Задерживаешься, потому что вынужден сейчас проходить осмотр!",
        next: "med2",
        bg: "../images/18.jpeg",
        damage: 20
    },
    med2: {
        text: "Дежурный спрашивает, прошел ли ты медосмотр?",
        bg: "../images/6.jpeg",
        choices: [
            { text: "Да, состояние в норме!", next: "documents" },
        ],
    },
    documents: {
        text: "Теперь ты готовишь документы: пропуск, водительские права, путевой лист. Все на месте — можно начинать.",
        next: "bus1",
        bg: "../images/17.jpeg",
    },
    bus1: {
        text: "Перед тем как тронуться, проверяешь пассажиров: все ли пристёгнуты?",
        bg: "../images/17.jpeg",
        choices: [
            { text: "Да, все пассажиры с фиксирующим ремнем безопасности!", next: "bus2" },
            { text: "Нет, замечаю, что многие не пристегнуты!", next: "bus3" }
        ],
    },
    bus2: {
        text: "Все пристегнуты, начинаем движение",
        next: "bus4",
        bg: "../images/17.jpeg",
    },
    bus3: {
        text: "Сделал замечание! Попросил всех пристегнутся! После того, как убедился - начинаем движение!",
        next: "bus4",
        bg: "../images/17.jpeg",
    },
    bus4: {
        bg: "../images/20.jpeg",
        text: "По дороге ты замечаешь, как кто-то паркуется прямо на газоне рядом с административным корпусом. Это явное нарушение — газон не предназначен для стоянки. Твоя реакция? ",
        choices: [
            { text: "Доложить о нарушении!", next: "breach1" },
            { text: "Проигнорировать, промолчать!", next: "breach2" }
        ],
    },
    breach1: {
        text: "Ты решаешь не промолчать. Вызываешь охрану через рацию. Через несколько минут приезжает охранник, устраняет нарушение. Порядок восстановлен.",
        next: "bus5",
        bg: "../images/20.jpeg",
    },
    breach2: {
        text: "Ты решаешь промолчать и наршуние не было устранено, оно может повлечь последствия - из-за твоего бездействия могла случиться авария!",
        next: "bus5",
        bg: "../images/20.jpeg",
        damage: 20
    },
    bus5: {
        text: "Двигаясь, ты видишь: навстречу едет спецтранспорт с проблесковыми маячками и грузом. Он маневрирует, и его путь пересекается с твоей полосой. Твои действия?",
        choices: [
            { text: "Пропустить", next: "danger1" },
            { text: "Ехать дальше", next: "danger2" }
        ],
        bg: "../images/8.jpeg",
    },
    danger1: {
        text: "Ты понимаешь: пропустить его — безопаснее всего. уступаем дорогу! Ты снижаешь скорость, пропускаешь спецмашину. Она проезжает, и ты продолжишь путь без происшествий.",
        next: "parking1",
        bg: "../images/8.jpeg",
    },
    danger2: {
        text: "Ты решил не пропускать спецтранспорт и создал опасную ситуацию. Вы едва не столкнулись!",
        next: "parking1",
        bg: "../images/8.jpeg",
        damage: 30
    },
    parking1: {
        text: "В конце смены ты подъезжаешь к своей точке назначения. Где припарковаться? ",
        choices: [
            { text: "На глазах — свободные места на оборудованной парковке.", next: "parking4" },
            { text: "Быстро припарковаться на газоне, чтобы не терять время.", next: "parking3" },
        ],
        bg: "../images/20.jpeg",
    },
    parking3: {
        text: "Ты решил припарковаться на газоне, чтобы не тратить время и получил выговор!",
        next: "parking5",
        bg: "../images/20d.png",
        damage: 20
    },
    parking4: {
        text: "Ты заезжаешь на официальную парковку. Всё по правилам.",
        next: "parking5",
        bg: "../images/20.jpeg",
    },
    parking5: {
        text: "Когда ты выходишь из машины, к тебе подходит сотрудник охраны труда и просит показать документы.",
        choices: [
            { text: "Без проблем показываешь документы, так как подготовил все заранее!", next: "parking7" },
            { text: "Игнорируешь требование работника!", next: "parking8" }
        ],
        bg: "../images/6.jpeg",
    },
    parking7: {
        text: "Ты достаешь из сумки пропуск, путевой лист, права — всё аккуратно, в порядке.",
        next: "parking9",
        bg: "../images/6.jpeg",
    },
    parking8: {
        text: "Не можешь предьявить документы - отстранён от работы.",
        bg: "../images/6.jpeg",
        damage: 30,
        next: 'final'
    },
    parking9: {
        text: "Он осматривает бумаги, кивает: — Всё в порядке. Смена закончена.",
        bg: "../images/6.jpeg",
        next:'GoodFinal'
    },
    final: {
        text: "Нарушение правил безопасности может привести к серьезным травмам или фатальному исходу! Повтори правила, ведь на кону самая большая цена - жизнь!",
        bg: '../images/17.jpeg'
    },
    GoodFinal: {
        text: "Нарушение правил безопасности может привести к серьезным травмам или фатальному исходу! Но ты провел этот день без (почти без) угроз для жизни!",
        bg: '../images/17.jpeg'
    }
}


let currentScene = "intro1";
let playerHP = 100;
const hpbar = document.getElementById("hp-fill");
const hptext = document.getElementById("hp-txt");
const text = document.getElementById("text");
const choices = document.getElementById("choices");
const image = document.getElementById("image");

function updateHP(playerHP) {
    hptext.textContent = playerHP;
    if (playerHP < 30) {
        hpbar.style.background = "#31ffee";
    }
    else if (playerHP < 60) {
        hpbar.style.background = "#00cab9";
    }
    else {
        hpbar.style.background = "#00635b";
    }
}

function applyDamage(damage) {
    playerHP -= damage;
    if (playerHP < 0) {
        playerHP = 0;
    }
    updateHP(playerHP);
    if (playerHP === 0) {
        showScene("final");
        return false;
    }
    return true;
}

function showScene(sceneName) {
    const scene = scenes[sceneName];
    text.textContent = scene.text;
    choices.innerHTML = "";

    if (scene.bg) {
        image.style.backgroundImage = "url('" + scene.bg + "')";
        image.style.backgroundSize = "cover";
        image.style.backgroundPosition = "center"
    }
    image.innerHTML = "";

    if (scene.heroLeft) {
        const hero = document.createElement("img");
        hero.src = scene.heroLeft;
        hero.className = "hero-left";
        image.appendChild(hero);
    }
    if (scene.heroRight) {
        const hero = document.createElement("img");
        hero.src = scene.heroRight;
        hero.className = "hero-right";
        image.appendChild(hero);
    }

    if (scene.choices) {
        scene.choices.forEach(choice => {
            const button = document.createElement("div");
            button.className = "choice-btn"
            button.textContent = choice.text;
            button.onclick = () => {
                currentScene = choice.next;
                showScene(currentScene);
            }
            choices.appendChild(button);
        })
    }

    else if (scene.next) {
        const btn = document.createElement("div");
        btn.className = "next"
        btn.textContent = "дальше";
        btn.onclick = () => showScene(scene.next);
        choices.appendChild(btn);
    }
    if (scene.damage) {
        const alive = applyDamage(scene.damage)
        if (!alive) return;
    }
}

document.addEventListener("DOMContentLoaded", function () { showScene(currentScene); });
