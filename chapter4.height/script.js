const scenes = {
    intro1: {
        text: "Ты рабочий-высотник - нужна максимальная осторожность.",
        next: "choice1",
        bg: "../images/10.jpeg",
    },
    choice1: {
        bg: "../images/11.jpeg",
        text: "Перед началом работы проверишь страховку и оборудование?",
        choices: [
            { text: "Да, буду использовать только исправные средства.", next: "good_choice" },
            { text: "Зачем? Оборудование ведь проверяют другие!", next: "bad_choice" }
        ],
       
    },
    good_choice: {
        bg: "../images/20.jpeg",
        text: "Отлично! Ты убедился, что все твое оборудование исправно! Можно приступать к работе!",
        next: "choice2"
    },
    bad_choice: {
        bg: "../images/20d.png",
        text: "Во время работы твой трос рвется! В последний момент ты успел схватиться за поручень!",
        next: "choice2",
        damage: 40
    },
    choice2: {
        bg: "../images/12.jpeg",
        text: "Кстати, а к какой точке ты привяжешь страховочный трос?",
        choices: [
            { text: "К разрешенной опорной анкерной точке.", next: "good_choice2" },
            { text: "К любой зафиксированной точке.", next: "bad_choice2" }
        ],  
    },
    good_choice2: {
        bg: "../images/20.jpeg",
        text: "Анкерная точка - гарант твоей безопасности! Молодец!",
        next: "intro2"
    },
    bad_choice2: {
        bg: "../images/20d.png",
        text: "Не все, что выглядит зафиксированным - прочное! Крепление может сломаться, потому что не расчитано на такие нагрузки!",
        next: "intro2",
        damage: 40
    },
    intro2:{
        text: "Ты готов к подъему! Подъемную площадку осматривать будем?",
        choices: [
            { text: "Даже если ее посмотрел специалист - важно осмотреть ее самому!", next: "good_choice3" },
            { text: "Ее уже проверил главный по смене, мне проверять не надо!", next: "bad_choice3" }
        ],
        bg: "../images/10.jpeg",
    },
    good_choice3: {
        bg: "../images/20.jpeg",
        text: "Ты сам убедился, что платформа в порядке, устойчива и безопасна! Можно подниматься!",
        next: "choice4"
    },
    bad_choice3: {
        bg: "../images/20d.png",
        text: "Во время работы ты понял, что твоя площадка сместилась! Рискуешь сам и подставляешь людей, работающих внизу!",
        next: "choice4",
        damage: 40
    },
    choice4: {
        bg: "../images/11.jpeg",
        text: "Во время работы, всегда используешь страховку?",
        choices: [
            { text: "Конечно, я всегда закреплен за анкерной точкой!", next: "good_choice4" },
            { text: "Если работаю на небольшой высоте, страховка не обязательна!", next: "bad_choice4" }
        ],
    },
    good_choice4: {
        bg: "../images/20.jpeg",
        text: "Травму можно получить, даже если падаешь с небольшой высоты! Ты всегда в безопасности, когда закреплен страховкой!",
        next: "choice5"
    },
    bad_choice4: {
        bg: "../images/20d.png",
        text: "Без страховки ты чуть не упал с высоты! Даже падая с 2 метров, можно получить травму!",
        next: "choice5",
        damage: 40
    },
    choice5: {
        bg: "../images/4.jpeg",
        text: "Работая на высоте, ты контролируешь зону возможного падения предметов и оборудования?",
        choices: [
            { text: "Да, все мои инструменты надежно закреплены, падение исключено!", next: "good_choice5" },
            { text: "Люди должны сами понимать опасность работы на предприятии, особенно, когда НАД ними проводятся работы!", next: "bad_choice5" }
        ],
        
    },
    good_choice5: {
        bg: "../images/20.jpeg",
        text: "Ты молодец! Соблюдение правил - залог жизни!",
        next: "GoodFinal"
    },
    bad_choice5: {
        bg: "../images/20d.png",
        text: "Люди понимают опасность, но твоя задача убедиться в безопасности своей работы и безопасности твоих коллег!", 
        next:'final'        
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
