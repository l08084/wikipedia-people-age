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
    window.alert(document.body.innerText);
    const bodyText = document.body.innerText;
    // TODO: YYYY年の文字列を全てYYYY年(当時XX歳)に置換する
    // TODO: YYYY年のインデックスを取得(search?)し、インデックスを元にsliceで取得、
    // TODO: 取得した文字列を元に、当時の年齢を計算する。
    // TODO: YYYY年(当時XX歳)をjoinで挿入する
    const spliteTextList = bodyText.split(/\s*(?:;|$)\s*/);
};