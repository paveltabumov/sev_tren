const scenes = {
    intro1: {
        text: "Ты садишься за рабочее место с компьютером!",
        next: "intro3",
        bg: "../images/7.jpeg",
    },
    intro3: {
        text: "Важно ли проверить как настроен свет, есть ли блики на экране?",
        choices: [
            {text: "Да, всё нужно настроить!", next: "intro4"},
            {text: "Нет, сразу к работе!", next: "intro5"}
       ],
    },
    intro4: {
        text: "Все настроил, сел правильно по правилам, чтобы не получить профессиональные заболевания!",
        next: "intro6",
        bg: "../images/13.jpeg",
    },
    intro5: {
        text: "Появляются блики, усталость от неудобной позы.",
        next: "intro6",
        bg: "../images/13d.png",
        damage: 20
    },
    intro6: {
        text: "Перед включением замечаешь, что задняя стенка с вентиляцией забита пылью. Что делать?",
        choices: [
            {text: "Сообщить о нарушении руководству / системному администратору!", next: "intro8"},
            {text: "Игнорировать забитые вентиляционные отверстия.", next: "intro9"}
       ],
    },
    intro8: {
        text: "Работаешь с комфортом, закрываешь задачи перед отдыхом.",
        next: "intro10",
    },
    intro9: {
        text: "Техника греется из-за плохой продуваемости, есть риск замыкания или возгорания!",
        next: "intro10",
        bg: "../images/13d.png",
        damage: 25
    },
    intro10: {
        text: "Иногда возникает желание что-то переставить или подключить. Соблюдаешь ли запреты на подключение?",
        bg: "../images/16.jpeg",
        choices: [
            {text: "Не трогаю, не ремонтирую, не кладу предметы сверху системного блока.", next: "intro11"},
            {text: "Сам чиню, переставляю, если нет места на столе - кладу бумаги на корпус.", next: "intro12"}
       ],
    },
    intro11: {
        text: "Это безопасно, техника исправно работает на протяжении всего срока эксплуатации!",
        next: "intro13",
        bg: "../images/16.jpeg",
    },
    intro12: {
        text: "Возникает и увеличивается риск повреждения техники и возгорания бумаг!",
        next: "intro13",
        bg: "../images/13d.png",
        damage: 30
    },
    intro13: {
        text: "Работая за компьтером, заметил неисправность оборудования или запах гари - что делать?",
        bg: "../images/15.jpeg",
        choices: [
            {text: "Отключаю питание, сообщаю руководству.", next: "intro14"},
            {text: "Игнорирую, продолжаю работать, ведь технику проверяют специалисты!", next: "intro15"}
       ],
    },
    intro14: {
        text: "Своими действиями ты возможно избегаешь аварии или пожара! Всё под контролем.",
        next: "intro16",
        bg: "../images/7.jpeg",
    },
    intro15: {
        text: "Технику проверяют с определенной периодичностью! Но ее нужно проверять и самостоятельно!",
        next: "intro16",
        bg: "../images/13d.png",
        damage: 20
    },
    intro16: {
        text: "Чувствуешь резь в глазах, боли в руках. Твои действия?",
        bg: "../images/15.jpeg",
        choices: [
            {text: "Покидаю место, сообщаю и даю глазам отдых / иду к врачу.", next: "intro17"},
            {text: "Сижу, терплю дискомфорт, проблема незначительна.", next: "intro18"}
       ],
    },
    intro17: {
        text: "Забота о безопасности и здоровье сотрудников - главная задача!",
        next: "intro19",
        bg: "../images/7.jpeg",
    },
    intro18: {
        text: "Системный незначительный дискомфорт может развиться в серьёзные проблемы со здоровьем!.",
        next: "intro19",
        bg: "../images/13d.png",
        damage: 20
    },
    intro19: {
        text: "Рабочий день завершён - правила помогли избежать проишествий и проблем!",
        bg: "../images/7.jpeg",
        next: "GoodFinal",
    },
    
    intro24: {
        text: "Рабочий день завершён - нарушение правил могут привести к проишествиям и пролемам со здоровьем!!",
        bg: "../images/7.jpeg",
        next: "final",
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
