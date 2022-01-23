
const textArray = [
    "っじょ"
];

const hiraganaTextArray = [
    "っじょ"
];

// const textArray = [
//     "あのイーハトーヴォのすきとほった風",
//     "夏でも底に冷たさをもつ青いそら",
//     "うつくしい森で飾られたモーリオ市",
//     "郊外のぎらぎらひかる草の波"
// ];

// const hiraganaTextArray = [
//     "あのいーはとーヴぉのすきとほったかぜ",
//     "なつでもそこにつめたさをもつあおいそら",
//     "うつくしいもりでかざられたもーりおし",
//     "こうがいのぎらぎらひかるくさのなみ"
// ];

// const textArray = [
//     "お母さんゎね",
//     "本当ゎ虐待おばさんだったんだよ",
//     "小さい頃ゎ",
//     "可愛がって育てられた拓也だけど",
//     "なぜか夫婦仲が悪くなって",
//     "離婚した",
//     "したら",
//     "こんな子産まなきゃ良かった！",
//     "って",
//     "虐待が始まったんだ",
//     "それで拓也ゎぐれて不良になったんだ",
//     "学校でゎ子分たくさん引き連れていたけどね",
//     "先生に殴られて",
//     "家でも殴られて",
//     "一人になると毎日泣いてた",
//     "中学に上がったら",
//     "オマエ生意気だぞって",
//     "年長の不良グループにイジめられて",
//     "しょっちゅうボコボコにされてた",
//     "だからオレ",
//     "いる場所がなくて",
//     "それで水泳部に入ったんだ",
//     "水の中なら全てが忘れられる",
//     "青いプールが大好きだった",
//     "でもって",
//     "なるべく遅くに帰宅して",
//     "冷えた飯食って",
//     "夜になると同い年の不良がやって来て",
//     "部屋の窓ガラスに極小の石を投げつけると「ピシッ」って音がするから",
//     "そっと家を飛び出して遊び歩いてた。",
//     "お母さんさんのことゎ",
//     "ずっと心底、大嫌いだった",
//     "けどね、",
//     "母が入院して",
//     "オレしか頼る人がいなくて",
//     "急に思ったんだよ",
//     "最初の１０年間ゎ",
//     "大事にしてくれた",
//     "だから",
//     "１０年分の愛ゎ",
//     "お返ししなきゃってね！",
//     "だから",
//     "入院した時に",
//     "初めて思った。",
//     "お母さん、今死んじゃだめだよ!!",
//     "絶対に死ぬなよ!!",
//     "オレが絶対に寂しくさせないからねって"
// ];

// const hiraganaTextArray = [
//     "おかあさんゎね",
//     "ほんとうゎぎゃくたいおばさんだったんだよ",
//     "ちいさいころゎ",
//     "かわいがってそだてられたたくやだけど",
//     "なぜかふうふなかがわるくなって",
//     "りこんした",
//     "したら",
//     "こんなこうまなきゃよかった！",
//     "って",
//     "ぎゃくたいがはじまったんだ",
//     "それでたくやゎぐれてふりょうになったんだ",
//     "がっこうでゎこぶんたくさんひきつれていたけどね",
//     "せんせいになぐられて",
//     "いえでもなぐられて",
//     "ひとりになるとまいにちないてた",
//     "ちゅうがくにあがったら",
//     "オマエなまいきだぞって",
//     "ねんちょうのふりょうグループにイジめられて",
//     "しょっちゅうボコボコにされてた",
//     "だからオレ",
//     "いるばしょがなくて",
//     "それですいえいぶにはいったんだ",
//     "みずのなかならすべてがわすれられる",
//     "あおいプールがだいすきだった",
//     "でもって",
//     "なるべくおそくにきたくして",
//     "ひえためしくって",
//     "よるになるとおないどしのふりょうがやってきて",
//     "へやのまどがらすにきょくしょうのいしをなげつけると「ピシッ」っておとがするから",
//     "そっといえをとびだしてあそびあるいてた。",
//     "おかあさんさんのことゎ",
//     "ずっとしんそこ、だいきらいだった",
//     "けどね、",
//     "ははがにゅういんして",
//     "オレしかたよるひとがいなくて",
//     "きゅうにおもったんだよ",
//     "さいしょの１０ねんかんゎ",
//     "だいじにしてくれた",
//     "だから",
//     "１０ねんぶんのあいゎ",
//     "おかえししなきゃってね！",
//     "だから",
//     "にゅういんしたときに",
//     "はじめておもった。",
//     "おかあさん、いましんじゃだめだよ！！",
//     "ぜったいにしぬなよ！！",
//     "オレがぜったいにさびしくさせないからねって"
// ];

// const textArray = [
//     "1: ピカチュウ", "2: カイリュー", "3: ヤドラン", "4: ピジョン", "5: コダック", "6: コラッタ", "7: ズバット", "8: ギャロップ", "9: サンダース", "10: メノクラゲ",
//     "11: パウワウ", "12: カラカラ", "13: タマタマ", "14: ガラガラ", "15: フシギダネ", "16: アーボ", "17: イーブイ", "18: ウツドン", "19: エレブー", "20: カビゴン",
//     "21: カブト", "22: サイドン", "23: ジュゴン", "24: ポリゴン", "25: ディグダ", "26: ドードリオ", "27: ゲンガー", "28: ドガース", "29: ルージュラ", "30: ニャース",
//     "31: シャワーズ", "32: クサイハナ", "33: コクーン", "34: ゴースト", "35: イワーク", "36: ヒトカゲ", "37: ラッキー", "38: ラッタ", "39: オニドリル", "40: コイル",
//     "41: レアコイル", "42: プクリン", "43: ゼニガメ", "44: ニョロゾ", "45: トサキント", "46: ファイヤー", "47: ブースター", "48: フーディン", "49: ブーバー", "50: ストライク",
//     "51: キャタピー", "52: ピクシー", "53: シードラ", "54: ライチュウ", "55: ヒトデマン", "56: クラブ", "57: ニドクイン", "58: サンドパン", "59: アズマオウ", "60: トランセル",
//     "61: ドードー", "62: タッツー", "63: ガーディ", "64: マンキー", "65: ドククラゲ", "66: オニスズメ", "67: サンド", "68: パラセクト", "69: スリープ", "70: ビードル",
//     "71: カイロス", "72: ピジョット", "73: コイキング", "74: サイホーン", "75: マタドガス", "76: フシギソウ", "77: カメックス", "78: シェルダー", "79: サンダー", "80: リザード",
//     "81: ナッシー", "82: べトべトン", "83: ポッポ", "84: ウツボット", "85: プリン", "86: ケーシィ", "87: べトべター", "88: ガルーラ", "89: ギャラドス", "90: ゴローニャ",
//     "91: ピッピ", "92: イシツブテ", "93: ゴルダック", "94: オムナイト", "95: ゴルバット", "96: アーボック", "97: ニドラン（メス）", "98: ニドラン（オス）", "99: ナゾノクサ", "100: ニョロボン",
//     "101: カモネギ", "102: ラプラス", "103: ラフレシア", "104: カブトプス", "105: ニドリーナ", "106: バリヤード", "107: マルマイン", "108: フシギバナ", "109: パラス", "110: リザードン",
//     "111: コンパン", "112: ヤドン", "113: メタモン", "114: ゴース", "115: ビリリダマ", "116: ユンゲラー", "117: キングラー", "118: サワムラー", "119: エビワラー", "120: カイリキー",
//     "121: スリーパー", "122: ゴーリキー", "123: スターミー", "124: マダツボミ", "125: プテラ", "126: ニドリーノ", "127: ぺルシアン", "128: ハクリュー", "129: ミュウツー", "130: キュウコン",
//     "131: スピアー", "132: べロリンガ", "133: バタフリー", "134: ダグトリオ", "135: ニドキング", "136: オムスター", "137: パルシェン", "138: ニョロモ", "139: ゴローン", "140: ロコン",
//     "141: ケンタロス", "142: ポニータ", "143: モンジャラ", "144: ミニリュウ", "145: ワンリキー", "146: モルフォン", "147: カメール", "148: ウィンディ", "149: フリーザー", "150: オコリザル"
// ];

// const hiraganaTextArray = [
//     "ピカチュウ", "カイリュー", "ヤドラン", "ピジョン", "コダック", "コラッタ", "ズバット", "ギャロップ", "サンダース", "メノクラゲ",
//     "パウワウ", "カラカラ", "タマタマ", "ガラガラ", "フシギダネ", "アーボ", "イーブイ", "ウツドン", "エレブー", "カビゴン",
//     "カブト", "サイドン", "ジュゴン", "ポリゴン", "ディグダ", "ドードリオ", "ゲンガー", "ドガース", "ルージュラ", "ニャース",
//     "シャワーズ", "クサイハナ", "コクーン", "ゴースト", "イワーク", "ヒトカゲ", "ラッキー", "ラッタ", "オニドリル", "コイル",
//     "レアコイル", "プクリン", "ゼニガメ", "ニョロゾ", "トサキント", "ファイヤー", "ブースター", "フーディン", "ブーバー", "ストライク",
//     "キャタピー", "ピクシー", "シードラ", "ライチュウ", "ヒトデマン", "クラブ", "ニドクイン", "サンドパン", "アズマオウ", "トランセル",
//     "ドードー", "タッツー", "ガーディ", "マンキー", "ドククラゲ", "オニスズメ", "サンド", "パラセクト", "スリープ", "ビードル",
//     "カイロス", "ピジョット", "コイキング", "サイホーン", "マタドガス", "フシギソウ", "カメックス", "シェルダー", "サンダー", "リザード",
//     "ナッシー", "べトべトン", "ポッポ", "ウツボット", "プリン", "ケーシィ", "べトべター", "ガルーラ", "ギャラドス", "ゴローニャ",
//     "ピッピ", "イシツブテ", "ゴルダック", "オムナイト", "ゴルバット", "アーボック", "ニドランメス", "ニドランオス", "ナゾノクサ", "ニョロボン",
//     "カモネギ", "ラプラス", "ラフレシア", "カブトプス", "ニドリーナ", "バリヤード", "マルマイン", "フシギバナ", "パラス", "リザードン",
//     "コンパン", "ヤドン", "メタモン", "ゴース", "ビリリダマ", "ユンゲラー", "キングラー", "サワムラー", "エビワラー", "カイリキー",
//     "スリーパー", "ゴーリキー", "スターミー", "マダツボミ", "プテラ", "ニドリーノ", "ぺルシアン", "ハクリュー", "ミュウツー", "キュウコン",
//     "スピアー", "べロリンガ", "バタフリー", "ダグトリオ", "ニドキング", "オムスター", "パルシェン", "ニョロモ", "ゴローン", "ロコン",
//     "ケンタロス", "ポニータ", "モンジャラ", "ミニリュウ", "ワンリキー", "モルフォン", "カメール", "ウィンディ", "フリーザー", "オコリザル"
// ];

const $typingText = $("#typing-text");
const $typedRoman = $("#typed");
const $notTypedRoman = $("#not-typed");
const $okCount = $("#ok-count");
const $ngCount = $("#ng-count");

let okCount = 0;
let ngCount = 0;

let textIndex = 0; // 28 44 97
let currentText = new Text(hiraganaTextArray[textIndex]);

$typingText.text(textArray[textIndex]);
setupExpectRoman();

$(window).keydown(function(e) {
    const roman = e.key;
    if (TypingManager.validRoman(roman) === false) return;

    switch (currentText.inputRoman(roman)) {
        case TEXT_NG:
            console.log(roman, "NG");
            $ngCount.text(++ngCount);
            break;
        case TEXT_KEEP:
            console.log(roman, "KEEP");
            $okCount.text(++okCount);
            updateExpectRoman(roman);
            break;
        case TEXT_COMPLETE:
            console.log(roman, "OK");
            $okCount.text(++okCount);
            updateExpectRoman(roman);
            if (textIndex < hiraganaTextArray.length - 1) {
                currentText = new Text(hiraganaTextArray[++textIndex]);
                $typingText.text(textArray[textIndex]);
                setupExpectRoman();
            }
            break;
    }
});

function setupExpectRoman() {
    $typedRoman.text("");
    $notTypedRoman.text(currentText.remainExpectRoman);
}

function updateExpectRoman(key) {
    $typedRoman.text($typedRoman.text() + key);
    $notTypedRoman.text(currentText.remainExpectRoman);
}

