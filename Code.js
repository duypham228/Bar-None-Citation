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
  // var html;
  // switch(style){
  //   case("citeCase"):
  //     html = HtmlService.createHtmlOutputFromFile('citeCase')
  //     .setTitle('Bar None Citations')
  //     .setWidth(400)
  //     .setHeight(600);
  //     break;
  //   case("citeRule"):
  //     break;
  //   case("citeStatute"):
  //     break;
  // }

  var html = HtmlService.createHtmlOutputFromFile('citeCase')
    .setTitle('Bar None Citations')
    .setWidth(400)
    .setHeight(600);
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showModalDialog(html, 'Pop Up');
    var test = "test string \u00a7";
    console.log(test);
}

function showCaseDialog() {
  var html = HtmlService.createHtmlOutputFromFile('citeCase')
  .setTitle('Bar None Citations')
  .setWidth(400)
  .setHeight(600);
DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .showModalDialog(html, 'Pop Up');
  var test = "test string \u00a7";
  console.log(test);
}

function showStatuteDialog() {
  var html = HtmlService.createHtmlOutputFromFile('citeStatute')
  .setTitle('Bar None Citations')
  .setWidth(400)
  .setHeight(600);
DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .showModalDialog(html, 'Pop Up');
  var test = "test string \u00a7";
  console.log(test);
}

function showRuleDialog() {
  var html = HtmlService.createHtmlOutputFromFile('citeRule')
  .setTitle('Bar None Citations')
  .setWidth(400)
  .setHeight(600);
DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .showModalDialog(html, 'Pop Up');
  var test = "test string \u00a7";
  console.log(test);
}

function showHelp() {
  var html = HtmlService.createHtmlOutputFromFile('help')
    .setTitle('Help')
    .setWidth(427)
    .setHeight(223);
  DocumentApp.getUi()
    .showModalDialog(html, 'Help for BarNoneCitations');
}

function openSheet() {
  var sheet = SpreadsheetApp.openById("1lvpUwAUj17WYopkuaVkizHa14OLa_o3UjfN7SCS6q64");
  var data = sheet.getDataRange().getValues();
  return data[0][0];
}

function contactPage() {
  var html = HtmlService.createHtmlOutputFromFile('contact')
  .setTitle('Contact')
  .setWidth(300)
  .setHeight(300);
DocumentApp.getUi()
  .showModalDialog(html, 'Contact Us'); 
}

// function testString() {
//   var returnString = "";
//   return returnString;
// }

function setDataFromSideBar() {
   var documentProperties = PropertiesService.getDocumentProperties();
   documentProperties.setProperty('Name', 'Duy');
}

function getDataFromDialog() {
  var documentProperties = PropertiesService.getDocumentProperties();
  var keys = documentProperties.getKeys();
  return keys[0];
}

function setCitation(citation){
  var documentProperties = PropertiesService.getDocumentProperties();
  documentProperties.deleteAllProperties();
  documentProperties.setProperty('citation', citation);
  Logger.log(citation);
  return citation;
}

function getCitation() {
  var documentProperties = PropertiesService.getDocumentProperties();
  var citation = documentProperties.getProperty('citation');
  Logger.log(citation);
  return citation;
}

