function onOpen() {
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createAddonMenu()
      .addItem('Autocite', 'showSidebar')
      .addItem('Manual Citation', 'showDialog')
      .addSeparator()
      .addItem('Help', 'showHelp')
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

function showHelp() {
  var html = HtmlService.createHtmlOutputFromFile('help')
    .setTitle('Help')
    .setWidth(300)
    .setHeight(300);
  DocumentApp.getUi()
    .showModalDialog(html, 'Pop Up');
}

function openSheet() {
  var sheet = SpreadsheetApp.openById("1KQg3Gj_PwUzf-JHPgKni-Y0RWcXPrQv3-lRNS6zOUas");

}

// function testString() {
//   var returnString = "";
//   return returnString;
// }