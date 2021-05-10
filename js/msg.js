// JavaScript Document

var showText = function (target, message, index, interval) {   
	interval = 100;
	if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(showText, interval, target, message, index, interval);
  }
}

$(function () {
  showText("#msg", "A wild portfolio has appeared!", 0, 500);   
});

$(function () {
  showText("#msg1", "A wild portfolio has appeared!", 0, 500);   
});

$(function () {
  showText("#msg2", "A wild portfolio has appeared!", 0, 500);   
});