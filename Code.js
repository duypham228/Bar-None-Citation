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

function showHelp() {
  var html = HtmlService.createHtmlOutputFromFile('help')
    .setTitle('Help')
    .setWidth(427)
    .setHeight(223);
  DocumentApp.getUi()
    .showModalDialog(html, 'Help for BarNoneCitations');
}

function openSheet() {
  var sheet = SpreadsheetApp.openById("1KQg3Gj_PwUzf-JHPgKni-Y0RWcXPrQv3-lRNS6zOUas");

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