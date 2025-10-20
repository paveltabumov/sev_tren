const scenes = {
    Start: {
        text: "Ты - сотрудник завода, работаешь с газовым оборудованием. Важно строго соблюдать правила безопасности",
        next: "start2",
        bg: "../images/5.jpeg",
    },

    start2: {
        text: "Ты знаешь, что газы - опасны. Природный газ легче воздуха, без цвета и запаха.",
        next: "start3",
    },
    start3: {
        text:"Доменный и конвертерные газы - тяжелее воздуха и могут скапливаться в подвалах.",
        next:"start4"
    },

    start4: {
        text: "Коксовый газ пахнет нефталином. Сжиженные газы (пропан, бутан) тяжелее воздуха и опасны обморожением.",
        next: "start5",
    },

    start5: {
        text: "Ты начинаешь свой обычный рабочий день, ничего не предвещает беды.",
        next: "Koks_gas",
        bg: "../images/10.jpeg",
    },

    Koks_gas: {
        text: "Ты чувствуешь странный запах, когда поднимаешься по лестнице. Что будешь делать?",
        bg: "../images/10.jpeg",
        damage: 20,
        choices: [
            { text: "Игнорировать и работать дальше.", next: "LowOxygen" },
            { text: "Сообщить и покинуть помещение.", next: "After_Koks" }
        ]
    },

    LowOxygen: {
        text: "У тебя начинает темнеть в глазах, становится тяжелее дышать...",
        next: "toxic",
        damage: 50,
        bg: "../images/10d.png",
    },

    toxic: {
        text: "Коксовый газ легче воздуха и у него есть нафталиновый запах. Можно не успеть среагировать...Так и произошло!",
        bg: "../images/10dd.png",
        damage: 30,
        next: 'Final'
    },

    After_Koks: {
        text: "Ты выходишь из помещения, которое было заполнено коксовым газом.",
        bg: "../images/12.jpeg",
        next: "Propan"
    },

    Propan: {
        text: "Ты видишь снежную корку на баллоне - идёт утечка. Что будешь делать?",
        bg: "../images/22.jpeg",
        damage: 10,
        choices: [
            { text: "Попробовать устранить утечку!", next: "Cold" },
            { text: "Отойти и сообщить руководству!", next: "After_Propan" }
        ]
    },

    Cold: {
        text: "Ты получаешь обморожение рук, в баллоне - пропан. Он может вызвать обморожение при утечке",
        bg: "../images/22.jpeg",
        damage: 50,
        next: "ColdEnd"
    },

    ColdEnd: {
        text: "Ты не можешь спуститься с лестницы из-за обморожения и теряешь сознание от удушения.",
        bg: "../images/22dd.png",
        damage: 25,
        next:'Final'
    },

    After_Propan: {
        text: "Ты шёл на выход и нашел костюм с маской, который может помочь в случае выделения большого количества углекислого газа или пожара",
        bg: "../images/24.jpeg",
        next: "Fire"
    },

    Fire: {
        text: "Ты видишь как из-за двери вырывается темные клубы углекислого газа и кто-то просит о помощи",
        bg: "../images/26.jpeg",
        choices: [
            { text: "Помочь коллеге.", next: "Open_the_door" },
            { text: "Бежать к выходу и сообщить пожарным!", next: "nodoor" }
        ]
    },

    nodoor: {
        text: "Ты не помогаешь человеку выбраться из помещения, наполненного углекислым газом, но сам бежишь в безопасное место!",
        bg: "../images/12.jpeg",
        damage: 15,
        next: "BadEnd",
    },

    BadEnd: {
        text: "Ты выбрался, сообщаешь МЧС о местах опасности и о сотруднике в беде. Сотруднник сильно пострадал.",
        bg: "../images/20.jpeg",
        next:'GoodFinal'

    },

    Open_the_door: {
        text: "Ты помогаешь человеку выбраться из помещения, наполненного углекислым газом",
        bg: "../images/20.jpeg",
        damage: 20,
        next: "GoodEnd",
    },

    GoodEnd: {
        text: "Вы пришли в безопасное место и сообщили МЧС о местах опасности.",
        bg: "../images/20.jpeg",
        next: "GoodFinal"
    },
    Final: {
        text: "Нарушение правил безопасности может привести к серьезным травмам или фатальному исходу! Повтори правила, ведь на кону самая большая цена - жизнь!",
        bg: '../images/17.jpeg'
    },
    GoodFinal: {
        text: "Нарушение правил безопасности может привести к серьезным травмам или фатальному исходу! Но ты провел этот день без (почти без) угроз для жизни!",
        bg: '../images/17.jpeg'
    }
}

let currentScene = "Start";
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
        showScene("Final");
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
