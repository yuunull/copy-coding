document.addEventListener("DOMContentLoaded", function () {
  /*=================================================
    スマホメニュー
   ===================================================*/
  document.querySelector(".toggle_btn").addEventListener("click", function () {
    const header = document.getElementById("header");
    if (header.classList.contains("open")) {
      header.classList.remove("open");
    } else {
      header.classList.add("open");
    }
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  document.getElementById("mask").addEventListener("click", function () {
    document.getElementById("header").classList.remove("open");
  });

  // リンクをクリックした時にメニューを閉じる
  document.querySelectorAll("#navi a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.getElementById("header").classList.remove("open");
    });
  });

  /*=================================================
    PICK UP スライダー
    ===================================================*/
  document.querySelector(".prev").addEventListener("click", function () {
    document.querySelector(".slider").scrollBy({
      left: -200, // スクロール量を設定
      behavior: "smooth",
    });
  });

  document.querySelector(".next").addEventListener("click", function () {
    document.querySelector(".slider").scrollBy({
      left: 200, // スクロール量を設定
      behavior: "smooth",
    });
  });

  /*=================================================
    スクロール時の画像フェード表示
    ===================================================*/
  const $lazy = document.querySelectorAll(".lazyload");
  const isntersectionObserver = new IntersectionObserver(inViewport, {
    threshold: [0.3],
  });

  Array.from($lazy).forEach((element) => {
    isntersectionObserver.observe(element);
  });

  function inViewport(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        const imgEl = entry.target;
        imgEl.src = imgEl.dataset.src;

        imgEl.addEventListener("load", () => {
          imgEl.classList.add("is-lazyloaded");
        });

        observer.unobserve(entry.target);
      }
    });
  }
});
