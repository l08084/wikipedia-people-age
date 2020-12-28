window.onload = function() {
    const birthdayElements = document.getElementsByClassName('bday');
    if (birthdayElements.length === 0) {
        return;
    }
    const birthdayText = birthdayElements[0].textContent;
    if (!birthdayText) {
        return;
    }
    const birthdayYearNumber
        = Number(new Date(birthdayText.slice(0, 4), '01', '01').getFullYear());
    const bodyText = document.body.innerText;
    // TODO: YYYY年の文字列を全てYYYY年(当時XX歳)に置換する
    // TODO: YYYY年のインデックスを取得(search?)し、インデックスを元にsliceで取得、
    // TODO: 取得した文字列を元に、当時の年齢を計算する。
    // TODO: YYYY年(当時XX歳)をjoinで挿入する
    // TODO: どうやって文章を更新するのか.........
    while (bodyText.search(/\d{4}年/g) !== -1) {
        const yearText = bodyText.slice(search(/\d{4}年/g), search(/\d{4}年/g) + 4);
        const age = Number(yearText) - birthdayYearNumber;
        if (age > 0) {
            const ageText = `(当時${age}歳)`;
        }
    }
    document.body.innerText = bodyText;
};