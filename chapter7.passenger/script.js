const scenes = {
    intro1: {
        text: "Ты пришел на завод. Цех далеко, нужен трансопрт. Где будешь ожидать автобус?",
        choices: [
            {text:"На тротуаре или посадочной площадке.", next: "happy_end"},
            {text: "На проезжей части, может рядом с остановкой", next: "sad_end"}
        ],
        bg: "../images/4.jpeg",
    },
    sad_end: {
        text: "Это опасно! Может зацепить проезжающим транспортом!",
        next: "intro3",
        damage: 20,
        bg: "../images/4.jpeg",
    },
    happy_end: {
        text: "Ты зашел в остановочный павильон, ожидая транспорт!",
        next: "intro3",
        bg: "../images/4.jpeg",
    },
    intro3: {
        text: "Ты видишь подъезжающий автобус! Что будешь делать?",
        choices: [
            {text: "Бегу на посадку раньше всех до полной остановки.", next: "sad_end1"},
            {text: "Жду полной остановки автобуса, пропускаю выходящих.", next: "happy_end1"}
        ],
        bg: "../images/4.jpeg",
    },
    sad_end1: {
        text: "Рискуешь подскальзнутся или попасть под автобус.",
        next: "intro5",
        damage: 30,
        bg: "../images/4d.png",
    },
    happy_end1: {
        text: "Заходишь спокойно, уступая выходящим людям и другим людям на остановке.",
        next: "intro5",
        bg: "../images/4.jpeg",
    },
    intro5: {
        text: "В салоне есть свободные места. Ты выбрал место и сел. Пристегнешь ремень?",
        damage: 0,
        bg: "../images/4.jpeg",
        choices:[
            {text: "Конечно! Безопасность - превыше всего!", next: "happy_end2"},
            {text: "Нет, ехать недалеко, можно не пристегиваться!", next: "sad_end2"}
        ]
    },
    happy_end2: {
        text: "Ты обезопасил себя. В случае экстренного торможения ты не пострадаешь!",
        next: "intro6",
        bg: "../images/11.jpeg",
    },
    sad_end2: {
        text: "Не пристегнувшись - рискуешь при резком торможении.",
        next: "intro6",
        damage: 20,
        bg: "../images/4d.png",
    },
    intro6: {
        text:"Автобус трогается, водитель сосредоточен. Как будешь вести себя? Начнешь шумно себя вести, болтать с коллегами??",
        choices: [
            {text: "Да, буду громко разговаривать и отвлекать водителя.", next: "sad_end3"},
            {text:"Нет, буду вести себя спокойно.", next: "happy_end3"}
        ],
        bg: "../images/4.jpeg",
    },
    happy_end3: {
        text: "Ты ответственный сотрудник, не отвлекаешь коллег и водителя.",
        next: "intro7",
        bg: "../images/11.jpeg",

        damage: 0
    },    
    sad_end3: {
        text: "Водитель недоволен и требует перестать.",
        next: "intro9",
        damage: 20,
        bg: "../images/4d.png",

    },
    intro9: {
        text:"Автобус тормозит перед остановкой. Когда будешь выходить?",
        choices: [
            {text:"После полной остановки.", next: "happy_end5"},
            {text: "Не дожидаюсь остановки, иду к выходу по пути!", next: "sad_end5"}
        ],
        bg: "../images/17.jpeg",
    },
    happy_end5: {
        text: "Выходишь аккуратно, по правилам, держась за поручни!",
        next: "intro11",
        bg: "../images/17.jpeg",
    },
    sad_end5: {
        text: "Перемещаясь по автобусу или выходя, не дожидаясь остановки, можно получить травму или попасть под колеса!",
        next: "intro11",
        damage: 30,
        bg: "../images/17.jpeg",
    },
    intro11: {
        text:"На улице дождливо, лужи, скользко. Как дойдешь до цеха?",
        choices: [
            {text: "Не глядя под ноги, я уже опаздываю!", next: "sad_end6"},
            {text:"Несмотря ни на что, передвигаешься аккуратно, глядя под ноги!", next: "happy_end6"}
        ],
        bg: "../images/4.jpeg",
    },
    happy_end6: {
        text: "Ты избежал падения и в безопасности добрался до проходной!",
        next: "intro13",
        bg: "../images/4.jpeg",
    },
    sad_end6: {
        text: "Есть риск поскользнуться и получить травму! А еще и попасть под другой транспорт!",
        next: "intro14",
        bg: "../images/4d.png",
        damage: 40
    },
    intro13: {
        text:"Ты дошел до места назначения, не нарушая правил!",
        bg: "../images/4.jpeg",
        next: "GoodFinal"
    },
    intro14: {
        text:"Ты дошел до места назначения, но мог серьезно пострадать!",
        bg: "../images/4d.png",
        next: "GoodFinal",
        damage: 30
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
