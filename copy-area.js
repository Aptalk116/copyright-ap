var interval = setInterval(function () {
  var _0x1f42x2 = $("[type='application/rss+xml']").attr("title");
  var _0x1f42x3 = _0x1f42x2.split("-")[0];
  $(".copy-area").html('<a id="mycontent" rel="dofollow" title="Blogger ' + _0x1f42x3 + '" style="display: inline-block!important; font-size: inherit!important; visibility: visible!important;z-index:99!important; opacity: 1!important;" href="' + window.location + '">' + _0x1f42x3 + '</a> All Rights Resereved.');
}, 100);
setTimeout(function () {
  _0x1f42x4();
  function _0x1f42x4() {
    clearInterval(interval);
  }
}, 3e4);
