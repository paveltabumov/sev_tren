const scenes = {
    intro1: {
        text: "Ты пришел на завод, на твоем пути возникают рельсы! Надо соблюсти правила, чтобы не попасть под поезд!",
        next: "intro2",
        bg: "../images/25.jpeg",
    },
    intro2: {
        text: "Подходя к ж/д переходу, видишь запрещающий сигнал светофора! Ждёшь разрешающего сигала?",
        bg: "../images/25.jpeg",
        choices: [
            {text:"Да, перехожу строго по сигналу!", next: "Reputation_good"},
            {text: "Если поезда нет - можно перебежать!", next: "Reputation_bad"}
        ]
    },
    Reputation_good: {
        text: "Ты перешел по разрешающему сигналу! Ты с безопасности!",
        bg: "../images/20.jpeg",
        next: "railway1"
    },
    Reputation_bad: {
        text: "Ты начал переход, но почти попал под проезжающий поезд!",
        bg: "../images/8.jpeg",
        damage: 40,
        next: "railway1"
    },
    railway1: {
        text: "Переходя ж/д пути всегда надо убеждаться в безопасности, даже если сигнал разрешает! Путь свободен?",
        bg: "../images/20.jpeg",
        choices: [
            {text:"Да, все безопасно, поезда не приближаются/стоят!", next: "railway2"},
            {text: "Нет, есть посторонние на пути / состав приближается.", next: "Vygovor"}
        ],
    },
    railway2: {
        text: "Путь свободен! А в темное время суток на тебе есть отражающие элементы?",
        bg: "../images/20.jpeg",
        choices: [
            {text:"Да, я всегда ношу светоотражатели и защитное оборудование!", next: "Safe"},
            {text: "Нет, я просто следую общим рекомендациям!", next: "Danger"}
        ],
    },
    Vygovor: {
        text: "Важно не только знать общие рекомендации, а следовать правилам безопасности!",
        bg: "../images/20d.png",
        damage: 40,
        next: "railway3"
    },
    Safe: {
        text: "Следование правилам - залог безопасной работы!",
        next: "railway3"
    },
    Danger: {
        text: "Не соблюдая правила - есть риск аварии или получения травмы!",
        bg: "../images/20d.png",
        damage: 30,
        next: "railway3"
    },
    railway3: {
        text: "По пути в цех ты понимаешь, что можно срезать, но дорога будет лежать через рельсовый путь! Срежем дорогу?",
        bg: "../images/25.jpeg",
        choices: [
            {text:"Перемещаться стоит по установленным маршрутам и переходам!", next: "GoodFinal"},
            {text: "Да, так короче, рельсы можно и перебежать, если поезда нет!", next: "final"}
        ],
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
