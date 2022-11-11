//  alert(888);
let i; //順番
let html;
let key;
let value;

// console.log('データが取れてるかチェック');

$(document).on('click', '.item', function(){
// $(".item").on('click', function () {
    // console.log(this.id, 'データが取れてるかチェック');
    // let key = $(this).attr("id");
    key = i;
    value = $(this).text();
    console.log(key + '番目');
    console.log(value, 'value');
    localStorage.setItem(key, value)  //localStorageに変数を格納

    html = `
    <p class="user_item">
    ${value}
    </P>
    `;
    $(".user_area").append(html);  //一番後ろに指定したHTMLやエレメントを挿入
    i++;
    $(".item").off(); //イベントをOFF
});

//2.5 クリックしたデータを消す

$(document).on('click', '.user_item', function(){
    // $(this).off();
    console.log('クリック反応');
    let key_no = $(this).index();
    console.log(key_no, '消すデータの番号');
    // let key_name = localStorage.key(key_no);
    // console.log(key_name, '消すkey名');
    localStorage.removeItem(key_no);
    $(".user_item").off(); //イベントをOFF

    location.reload();
});


//3.ページ読み込み：保存データ取得表示

// if(i === undefined ){
    // console.log('iはs未定義');
    //  i = 0;
    // console.log(i, i + '番目の読み込み');
// }

for (i = 0; i < localStorage.length; i++) {
    console.log(i, i + '番目の読み込み');
    key = localStorage.key(i); //i番目のkey名を取得してkeyに代入
    value = localStorage.getItem(key);  //key名の値をvalueに代入
    html = `
    <p class="user_item">
    ${value}
    </P>
    `;
    // 画面上に埋め込み
    $(".user_area").append(html)
    console.log(key, i + '番目のキー');

    //採番し直す
    // localStorage.removeItem(key);
    // localStorage.setItem(i, value);

}

