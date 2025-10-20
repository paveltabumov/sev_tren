const scenes = {
    intro1: {
        text: "Одним ранним утром ты пришёл на завод.",
        next: "intro2",
        bg: "../images/5.jpeg",
    },
    intro2: {
        text: "Поприветсвовал своего коллегу — своего лучшего друга, Серёгу.",
        next: "intro3",
    },
    intro3: {
        text: "Ты пришёл в свой цех, начал изготавливать деталь на токарном станке.",
        next: "intro4",
        bg: "../images/3.jpeg",
    },
    intro4: {
        text: "После обеда ты вернулся к станку, и вдруг почувствовал резкий запах дыма и гари.",
        next: "intro5",
    },
    intro5: {
        text: "Осмотрелся, и вдруг увидел столб дыма в цехе. Твои действия?",
        choices: [
            { text: "Включу пожарную сигнализацию", next: "activateSignalization1" },
            { text: "Попытаюсь выянить причину не поднимая тревогу.", next: "findingСause", damage: 20 }
        ],
        bg: "../images/5.jpeg",
    },
    // Левая ветка
    activateSignalization1: {
        text: "Быстро включаешь извещатель и зовёшь коллег. Что делать дальше?",
        choices: [
            {text: "Хватаю огнетушитель!", next: "fireExtinguisher1", damage: 15},
            {text: "Организую эвакуацию, жду пожарных!", next: "evacuation"}
        ],
        bg: "../images/6.jpeg",
    },
    evacuation: {
        text: "Выводишь всех людей, следишь, чтобы все выбежали!",
        next: "salvation1",
        bg: "../images/17.jpeg",
    },
    fireExtinguisher1: {
        text: "Ты начинаешь тушить огонь, но дым нарастает!",
        next: "fireExtinguisher2",
        bg: "../images/5.jpeg",
    },
    fireExtinguisher2: {
        text: "Что же делать если дым усиливается?",
        choices: [ 
            {text: "Беру маску/ткань и направляюсь к выходу", next: "salvation1"}, 
            {text: "Тяжело собраться с мыслями, охватывает паника!", next: "death1"} 
        ],
    },
    // Правая ветка
    findingСause: {
        text: "Ты только теряешь время, огонь распространяется всё быстрее!",
        next: "panicInWorkShop1",
        bg: "../images/21.png",
        damage: 20
    },
    panicInWorkShop1: {
        text: "Огонь увеличивается, начинается паника в цехе!",
        next: "panicInWorkShop2",
    },
    panicInWorkShop2: {
        text: "В воздухе очень много дыма, тебе тяжело дышать.",
        next: "helpingColleague1",
        bg: "../images/21d.png",
        damage: 20
    },
    helpingColleague1: {
        text: "Вдруг ты замечаешь что, коллега не может встать!",
        bg: "../images/19.jpeg",
        choices: [
            {text: "Помочь выбраться!", next: "helpingColleague2"},
            {text: "Оставить коллегу и бежать!", next: "lossInDark"}
        ],
    },
    helpingColleague2: {
        text: "Ты подаёшь руку коллеге и помогаешь встать, вы бежите на выход!",
        next: "salvation1",
    },
    lossInDark: {
        text: "Ты потерялся во тьме и дыму!",
        next: "death1",
        bg: "../images/21d.png",
    },
    // Спасение
    salvation1: {
        text: "Выходишь на свежий воздух",
        next: "salvation2",
        bg: "../images/20.jpeg",
    },
    salvation2: {
        text: "Ты спасён! На улице ты сообщаешь руководителю, встречаешь пожарных!",
        next: "salvation3",
    },
    salvation3: {
        text: "Пожарные тушат огонь. Группа в безопасности! Своими действиями ты спас много жизней!",
        next: "GoodFinal",
    },
    // Смерть
    death1: {
        text: "Ты теряешь ориентацию, задыхаешься",
        next: "death2",
        bg: "../images/21d.png",
        
    },
    death2: {
        text: "Ты потерял сознание от дыма",
        next: "death3",
        bg: "../images/21dd.png",
    },
    death3: {
        text: "Тебя спасли медики которые приехали на вызов",
        next: "death4",
        bg: "../images/20.jpeg",
    },
    death4: {
        text: "Твои действия (или бездействия) могли повлечь серьезные последствия!",
        next: "final"
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
