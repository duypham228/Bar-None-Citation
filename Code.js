function onOpen() {
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Custom Menu')
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
    .setHeight(300);
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showModalDialog(html, 'Pop Up');
}