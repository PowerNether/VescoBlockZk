var itemSlider = tns({
  container: ".item__outer",
  items: 1,
  controls: false,
  mouseDrag: true,
  navAsThumbnails: true,
  navContainer: ".item__inner",
  loop: false,
});
var itemNav = tns({
  container: ".item__inner",
  controls: false,
  nav: false,
  mouseDrag: true,
  autoWidth: true,
  loop: false,
});
$(".item__remove").on("click", function (e) {
  e.preventDefault();
  $(this).css("display", "none");
  $(this).parent().find(".item__remove-why").css("display", "block");
  $(this).parent().find(".item__update").css("display", "none");
  $(this).parent().find(".item__why").css("display", "block");
});
$(".item__why-tag").on("click", function (e) {
  e.preventDefault();
  $(this).parent().find(".item__why-tag").removeClass("active");
  $(this).addClass("active");
});
$(".item__why-btn").on("click", function () {
  $(this).parent().parent().find(".item__remove-why").css("display", "none");
  $(this).parent().parent().find(".item__why").css("display", "none");
  $(this).parent().parent().find(".item__undo-text").css("display", "block");
  $(this).parent().parent().find(".item__undo-link").css("display", "block");
});
$(".item__undo-link").on("click", function (e) {
  e.preventDefault();
  $(this).parent().find(".item__remove").css("display", "block");
  $(this).parent().find(".item__update").css("display", "block");
  $(this).parent().find(".item__undo-text").css("display", "none");
  $(this).parent().find(".item__undo-link").css("display", "none");
});
$(".tooltipped").tooltip();
$(".partner__copy").on("click", function () {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = $(this).attr("data-link");
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  $(this).attr(
    "data-tooltip",
    "<img class='coppied' src='./img/coppied.png' alt='copy'/>Ссылка скопирована в буфер обмена"
  );
  let tooltip = M.Tooltip.getInstance($(this));
  tooltip.close();
  setTimeout(function () {
    tooltip.open();
  }, 250);
});
$(".partner__copy").hover(function () {
  $(this).attr("data-tooltip", "Копировать ссылку в буфер обмена");
});
$(".partnerFourth__more").on("click", function (e) {
  e.preventDefault();
  $(this).parent().parent().find(".patner-hide").slideToggle();
  console.log($(this).text())
  if ($(this).text() == "Показать всех") {
    $(this).text("Свернуть");
  } else {
    $(this).text("Показать всех");
  }
});
