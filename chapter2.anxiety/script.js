const scenes = {
    intro1: {
        text: "Ты на смене. Важно соблюдать требования пожарной безопасности.",
        next: "intro2",
        bg: "../images/3.jpeg",
    },
    intro2: {
        text: "Замечаешь подтеки масла у оборудования, на котором работаешь.",
        next: "choice1",
    },
    choice1: {
        text: "Как поступишь?",
        choices: [
            {text: "Сообщить главному по смене и устранить!", next:"not_danger"},
            {text: "Продолжать работать.", next:"danger"},  
        ],
    },
    danger: {
        text: "Масло продолжает подтекать, что создает опасную ситуацию. Получаешь выговор!",
        next:"intro2",
        damage: 20,
    },
    not_danger: {
        text:"Твои действия предотвратили возможное возгорание!",
        next:"intro2",
    },
    intro2: {
        text:"Работая, замечаешь огнетушители и пожарные краны, планы эвакуации! Ты - ответственный работник!",
        next:"intro3",
        bg: "../images/3.jpeg",
    },
    intro3: {
        text: "Продолжая работы, понимаешь, что электрооборудование как-то барахлит!",
        bg: "../images/3.jpeg",
        next:"choice2",
    },
    choice2: {
        text:"Что сделаешь?",
        choices:[
            {text:"Продолжить пользоваться осторожно.", next:"not_right_use"},
            {text:"Сообщить главному по смене и не использовать!", next:"right_use"},
        ],
    },
    right_use: {
        text:"Руководитель подтвердил неисправность! Оборудование взяли в ремонт.",
        bg: "../images/9.jpeg",
        next:"cloth",
    },
    not_right_use: {
        text:"При очередном включении аппарат заискрил и выключился. Выговор!",
        next:"cloth",
        bg: "../images/9.jpeg",
        damage: 15,
    },
    cloth: {
        text: "Законное время перерыва! В комнате отдыха коллега сушит влажную одежду на обогревателе.",
        bg: "../images/18.jpeg",
        choices: [
            {text:"Предупредить коллегу о нарушении техники безопасности!", next:"right1",},
            {text:"Не обращать внимание, пройти мимо.", next:"not_right1"}
        ],
    },
    right1: {
        text: "Коллега вспомнил, что это нарушение! Ты предотвратил возможное возгорание!",
        bg: "../images/18.jpeg",
        next: "exit1",
    },
    not_right1: {
        text: "Коллега получил выговор от проходящего мимо начальства! Мог произойти пожар!",
        next:"exit1",
        bg: "../images/18.jpeg",
        damage: 30,
    },
    exit1: {
        text: "Возвращаясь на смену, замечаешь - проходы к эвакуационным выходам завалены. Что сделаешь?",
        bg: "../images/23.jpeg",              
        choices: [
            {text:"Организовать уборку препятствий с руководством.",next:"cleaning"},
            {text:"Это вопросы начальства (наверное, так надо).",next:"not_cleaning"}
        ],
    },
    cleaning: {
        text:"Руководство поощряет инициативу! Теперь эвакуация в экстренном случае возможна!",
        next:"fire",
        bg: "../images/23.jpeg",
    },
    not_cleaning: {
        text:"Есть риски - в случае опасной ситуации эвакуация будет затруднена или невозможна!",
        next:"fire",
        bg: "../images/23.jpeg",
        damage: 30,
    },
    fire: {
        text:"Работая, ты понимаешь, что пахнет горелым - в цехе, кажется, начинается пожар! Что делать?",
        choices: [
            {text:"Игнорировать, продолжая работать.",next:"bad_end"},
            {text:"Срочно сообщить в пожарную охрану!",next:"good_end"},
        ],
        bg: "../images/21.png",
        damage:10
    },
    bad_end:{
        text:"Важно реагировать на постороние запахи, особенно запахи горелого!",
        bg: "../images/21.png",
        next:"final"
    },
    good_end:{
        text:"Ты быстро оповестил коллег рядом и включил пожарную сигнализацию! Опасность предотвращена!",
        bg: "../images/21.png",
        next:"GoodFinal"
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
