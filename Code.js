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

function setDataFromSideBar(params, style) {
  var documentProperties = PropertiesService.getDocumentProperties();
  if(style == "statute"){ //title, code, sect, name, year
    documentProperties.setProperties({'title': params[0], 'code': params[1], 'sect':params[2], 'name':params[3], 'year':params[4], 'style':style}, true);
  }
  else if(style == "caseSC"){ //usVol, usReporter, usPage, sctVol, sctReporter, sctPage, ledVol, ledReporter, ledPage, term, caseName
    documentProperties.setProperties({'usVol': params[0], 'usReporter': params[1], 'usPage':params[2], 'sctVol': params[3], 'sctReporter': params[4], 'sctPage':params[5], 
                                      'ledVol': params[6], 'ledReporter': params[7], 'ledPage':params[8], 'term':params[9], 'caseName':params[10], 'style':style}, true);
  }
  else{ //court, vol, reporter, page, name, year
    documentProperties.setProperties({'court': params[0], 'vol': params[1], 'reporter': params[2], 'page': params[3], 'term':params[4], 'caseName':params[5], 'style':style}, true);
  }
}

function getDataFromDialog() {
  var documentProperties = PropertiesService.getDocumentProperties();
  var keys = documentProperties.getProperties(); 
  return keys;
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

//search functions
