const mySwiper = new Swiper ('.swiper', {
    // 以下にオプションを設定
    loop: true, //最後に達したら先頭に戻る
    slidesPerView: '1.3', //何枚表示するか
    speed: 2000, // スライドアニメーションのスピード（ミリ秒）
    centeredSlides : true,
     autoplay: { //自動再生する
         delay: 2500, //次のスライドに切り替わるまでの時間
       disableOnInteraction: true, //ユーザーが操作したら止めるか
       waitForTransition: false, // アニメーションの間にスライドを止めるか
     },
    //ページネーション表示の設定
    pagination: { 
      el: '.swiper-pagination', //ページネーション要素のクラス名
      clickable: true, //クリック可能にするか
      type: 'bullets', //ページネーションの種類
    },
  });
 
document.getElementbyId("p1").style.display = "none";

function clickBtn() {
  const p1 = document.getElementById("p1");
  if(p1.style.display=="flex"){
    p1.style.display ="none";
  }else{
    p1.style.display ="flex";
  }
}