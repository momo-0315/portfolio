$(window).on("load", function () {
  $("#splash-logo").delay(5000).fadeOut("slow"); //ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash")
    .delay(5000)
    .fadeOut("slow", function () {
      //ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

      $("body").addClass("appear"); 
      //フェードアウト後bodyにappearクラス付与
    });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

  //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $(".splashbg").on("animationend", function () {
    //この中に動かしたいJSを記載
  });
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
});

$(".openbtn").click(function () {
  $(this).toggleClass("active");
});

introMessages = [["大学生から始めたプログラミング。",""],["生粋の動物好き。",""],["４ヶ月間のカナダ留学から帰ってきたばかり。",""],["食べることが何よりもの至福。",""],["学生時代のノートは落書きだらけ。",""],];

$("#introMessage1").html(introMessages[0][0]);
$("#introMessage2").html(introMessages[1][0]);
$("#introMessage3").html(introMessages[2][0]);
$("#introMessage4").html(introMessages[3][0]);
$("#introMessage5").html(introMessages[4][0]);

$('.slider').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
});

processMessages = [
    ["まずはmiroを使ったイメージ作りから。<br>案件者様がいる場合はミーティング中に同じキャンバスを使って<br>アイデア出しをすることもあります。","eng"],
    ["概要が固まってきたらfigmaにて形に起こす作業を行います。<br>この時点で細部の色までこだわることで、完成時のイメージのずれを極力少なくします。","eng"],
    ["今回のサイトは、24時間自主ハッカソン形式で作ったため、一番慣れ親しんでいる<br>css, jsとその他ライブラリのみで作成しました。チーム開発ではgithubでのissue切りの粒感<br>の大切さを実感しました。","eng"]
];

$("#processMessage1").html(processMessages[0][0]);
$("#processMessage2").html(processMessages[1][0]);
$("#processMessage3").html(processMessages[2][0]);

portfolioMessages = [
    ["プログラミングを始めて約半年目のハッカソンにて要件定義から作り上げた<br>サークル新歓サイト。二泊三日という短時間でコンセプトに合ったデザイン作りから<br>企業へのプレゼンテーションまでを行った。",""],
    ["プログラミングを始めて約半年目のハッカソンにて要件定義から作り上げた<br>サークル新歓サイト。二泊三日という短時間でコンセプトに合ったデザイン作りから<br>企業へのプレゼンテーションまでを行った。",""],
];

$("#portfolioMessage1").html(portfolioMessages[0][0]);