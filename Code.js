function onOpen() {
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createAddonMenu()
      .addItem('Show sidebar', 'showSidebar')
      .addItem('Show Popup', 'showDialog')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('home')
      .setTitle('Bar None Citations')
      .setWidth(300);
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('popup')
    .setTitle('Bar None Citations')
    .setWidth(400)
    .setHeight(600);
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showModalDialog(html, 'Pop Up');
}

function openSheet() {
  var sheet = SpreadsheetApp.openById("1KQg3Gj_PwUzf-JHPgKni-Y0RWcXPrQv3-lRNS6zOUas");
}

function createCitation(name, vol, reporter, page, year, style){
  var citation = "";
  switch(style){
    case "SC":
      citation = name +", "+vol+" "+reporter+" "+page+" ("+year+")";
      break;
    case "TX":
      citation = "";
      break;
    case "FED":
      citation = "";
      break;
  }
    return citation;
}

// function testString() {
//   var returnString = "";
//   return returnString;
// }