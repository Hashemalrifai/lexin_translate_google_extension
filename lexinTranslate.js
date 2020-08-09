// A generic onclick callback function.
function genericOnClick(info, tab) {
  var selectionText = info.selectionText;
  var url = 'http://lexin.nada.kth.se/lexin/#searchinfo=both,swe_ara,' + selectionText;
  window.open(url, '_blank');
}

// Create one test item for each context type.
var contexts = ["selection","editable"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Lexin: '" + '%s';
  var id = chrome.contextMenus.create({"title": title, "contexts":[context], "onclick": genericOnClick});
}