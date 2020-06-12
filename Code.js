function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
    
function autoCompletar(){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName('Profesores');
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var nombreProf = {};
    data.forEach(function(n){
        nombreProf[n[1]] = null;
        });
    return nombreProf;
}
function getEmail (nombre){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName('Profesores');
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == nombre)
      {
        var email = value[i] && value[i][3];
        i = lastrowbd + 1;
      }
    }
    return email;
}
function getSecc(nombre){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CJ2lBb3u6RjEkpEIFTetse4DYx_7WrnwIU3dtzMyOpQ/edit#gid=752756600');
    var sheet = ss.getSheetByName('Profesores');
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for (var j = 0; j < lastrowbd; j++)
    {
        if(value[j][1] == nombre)
        {
             var secc = value[j] && value[j][4];
            j = lastrowbd + 1;
        }
    }
    return secc;
}