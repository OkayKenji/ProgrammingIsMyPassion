passion();
async function passion() {
    const alphabetSoup = [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        []
    ];
    let str = ""

    for (let i = 0; i < alphabetSoup[0].length; i++) {
        alphabetSoup[1].push(alphabetSoup[0][i].toLowerCase());
    }

    while (str != "P") {
        str = alphabetSoup[Math.trunc(alphabetSoup.length * Math.random())][Math.trunc(alphabetSoup[0].length * Math.random())]
    }

    let j = 0;
    while (String.fromCharCode(j, j - 3) !== "ro") {
        j++;
    }
    str += String.fromCharCode(j, j - 3);

    let full = new Intl.NumberFormat('en-US', {
        style: 'unit',
        unit: 'gram',
        unitDisplay: 'long'
    }).format(123456789);

    str += full.substring(full.indexOf(' ') + 1, full.indexOf('s'));

    let dayOfWeek = new Intl.DateTimeFormat('en-US', {
        weekday: 'long'
    }).format(new Date('December 3, 2018 18:34'));

    str += dayOfWeek.charAt(0).toLowerCase();

    str += document.getElementsByTagName("title")[0].tagName.charAt(1).toLowerCase();

    let encoded = btoa(document.getElementsByTagName("title")[0].innerText);

    const changedChanged = "" + encoded++;

    encoded = btoa(document.getElementsByTagName("title")[0].innerText);

    str += changedChanged.charAt(0).toLowerCase();

    const launchObj = await fetch("https://raw.githubusercontent.com/OkayKenji/ReuseableRockets/gh-pages/database.json");
    const launchObjJSON = await launchObj.json();

    str += launchObjJSON.spacex.boosters[0].flights[0].missionName.charAt(3) + String.fromCharCode(32);

    str += document.getElementsByTagName("div")[0].tagName.charAt(1).toLowerCase();

    str += document.getElementsByTagName("script")[0].getAttributeNames()[0].charAt(0);

    const iterator = str[Symbol.iterator]();

    let buffer;
    for (let ch of iterator) {
        if (ch == " ") {
            buffer = " ";
        }
    }

    str += buffer;

    str += str.charAt(Math.trunc(str.length / 2));

    if ("y" == "why".charAt(2)) str += "y";

    str += String.fromCharCode(0) + str.charAt("x"*"x").toLowerCase();

    str += encoded.charAt(16);

    str += atob(encoded).substring(19,atob(encoded).length-1);

    str += changedChanged.charAt(2).toLowerCase();

    console.log(str);

    document.getElementById("containner").textContent = "Programming is my passion"
}