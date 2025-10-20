const scenes = {
    Intro: {
        text: "Во время тяжёлого рабочего дня ты захотел попить воды",
        next: "kooler",
        bg: '../images/18.jpeg'
    },
    kooler: {
        text: "Ты заметил кулер в коридоре. Откуда будешь пить?",
        choices: [
            { text: "Из кулера с питьевой водой.", next: "kooler1" },
            { text: "Из крана с технической водой.", next: "kran" }
        ],
        bg: '../images/18.jpeg'
    },
    kooler1: {
        text: "Ты попил воду из кулера. Стало лучше и свежее!",
        next: "Petrovich",
        bg: '../images/18.jpeg'
    },
    kran: {
        text: "Ты попил воду из технического крана. Техническая вода не пригодна для питья!",
        damage: 35,
        next: "Petrovich",
        bg: '../images/18d.png'
    },
    Petrovich: {
        text: "Ты зашёл в столовую, подошёл к раковине. Нужно ли мыть руки с мылом?",
        choices: [
            { text: "Помою с мылом!", next: "milo" },
            { text: "Помою без мыла, руки не грязные", next: "BezMilo" }
        ],
        bg: '../images/18.jpeg'
    },
    milo: {
        text: "Ты помыл руки с мылом. Теперь они чистые!",
        next: "Gde_est",
    },

    BezMilo: {
        text: "Ты помыл руки без мыла. На них остаются микробы, даже если визуально они чистые!",
        damage: 35,
        next: "Gde_est",
        bg: '../images/18d.png'
    },

    Gde_est: {
        text: "Ты взял свой обед, Где будешь есть?",
        bg: '../images/18.jpeg',
        choices: [
            { text: "В столовой, вместе с коллегами!", next: "poel" },
            { text: "Вернусь на рабочее место, к станку, тут привычнее!", next: "stanok" }
        ],
    },
    stanok: {
        text: "Тебя выгнали из цеха, у станка есть нельзя!",
        damage: 35,
        next: "poel",
        bg: '../images/18d.png'
    },
    poel: {
        text: "Ты отлично поел! В конце рабочего дня можно идти в раздевалку переодеваться!",
        next: "intro1",
        bg: '../images/18.jpeg',
    },

    intro1: {
        text: "Ты зашёл в раздевалку, куда нужно идти?",
        choices: [
            { text: "Пойти принять в душ, одеться в гражданку", next: "razdivalka" },
            { text: "Можно идти домой в заводской форме, зачем её менять?", next: "forma" }
        ],
        bg: '../images/14e.png',
    },
    forma: {
        text: "Нельзя носить грязную спецовку вне работы!",
        next: "final",
        bg: '../images/14d.png',
        damage: 30
    },
    razdivalka: {
        text: "Уставший ты подошёл к своему шкафчику",
        next: "dush",
        bg: '../images/14e.png',
    },
    dush: {
        text: "В шкафчике есть сланцы. Должен ли ты надеть их?",
        choices: [
            { text: "Конечно, так он не подскользнётся", next: "dushevaya" },
            { text: "Зачем вообще нужны эти сланцы? Пойду босиком!", next: "upal" }
        ],
        bg: '../images/14e.png',
    },
    dushevaya: {
        text: "Ты зашёл в душевую в своих модных сланцах. Какую воду нужно включить сначала?",
        choices: [
            { text: "Сначала холодную, потом горячую", next: "shampooni" },
            { text: "Какая разница? Включу обе сразу", next: "svarilsya" },
        ],
        bg: '../images/18.jpeg',
    },
    svarilsya: {
        text: "Включая воду случайно, можно получить ожог или обморожение!",
        next: "shampooni",
        damage: 25,
        bg: '../images/14d.png',
    },
    upal: {
        text: "В душевой мокро! И скользко! Нужны сланцы! Ты возвращаешься за ними!",
        next: "dushevaya",
        damage: 30,
        bg: '../images/18.jpeg',
    },
    shampooni: {
        text: "Тебе нужны средства личной гигиены. Как ты их хранишь?",
        choices: [
            { text: "В пластиковых упаковках.", next: "not_porez" },
            { text: "В стеклянных упаковках.", next: "porez" }
        ]
    },
    porez: {
        text: "Ты взял стеклянную баночку с шампунем, она выскользнула! Ты мог получить порез!",
        next: "corridor",
        damage: 25,
        bg: '../images/14d.png',

    },
    not_porez: {
        text: "Ты взял пластиквую банку шампуня и успешно помылся! Даже если уронишь - ничего страшного!",
        next: "corridor",
        bg: '../images/14e.png',

    },
    corridor: {
        text: "Ты помылся и уже идешь по коридору к выходу.",
        bg: "img/coridor.jpg",
        next: "first_pomosch",
        bg: '../images/18.jpeg',
    },
    first_pomosch: {
        text: "Каждый раз проходя по коридору, ты замечаешь плакат 'Первая помощь'. Каждый раз подмечая что-то новое!",
        next: "chitaet",
    },
    chitaet: {
        text: "Каждый день ты запоминаешь новое правило!",
        next: "GoodFinal"
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


let currentScene = "Intro";
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
