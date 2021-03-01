  /**
 * File name: script.txt
 * Author: Moritz Wolff
 * Description: JS-script to automate Google Auctions 
 * Insights reports.
 * Initialization: Set-up the variable "Kontoname" to
 * the name of your Drive-folder and set up the variable
 * to the name of your Sheets-files.
 */



//Initialization of Report
var Kontoname = 'Folder-name';
var Kampagnen = ['campaign1', 'campaign2', 'campaign3', 'campaign4'];

  /**
 * Function name: main()
 * Parameters: None
 * Return Value: None
 * Description: Executes the script.
 * If there is no data available, deleteData() cannot be
 * exectued, so the execution jumps directly to 
 * updataData().
 */
 
function main() {
  
  try {
    deleteData();
  }
  finally {
    updateData();
  } 
}


  /**
 * Function name: deleteData()
 * Parameters: None
 * Return Value: None
 * Description: Deletes the data that populates the 
 * referenced sheet.
 */
 
function deleteData() {
  
  var app = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = app.getSheets()[0]; 
  var lastRow = sheet.getLastRow();
  var rowPosition = 2
  var howMany = lastRow - 1
  sheet.deleteRows(rowPosition, howMany)
  
}

  /**
 * Function name: updateData()
 * Parameters: None
 * Return Value: None
 * Description: Pulls the data from all tables in the Google
 * Drive Folder and inserts them into the new sheet.
 * It may be that updataData() has to be adjusted if the 
 * referenced tables have a non-standard-schema.
 */

function updateData() {
  
  var i;
  for (i = 0; i < Kampagnen.length; i++) {
    
    var currentSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      
    var lastRowCurrent = currentSheet.getLastRow();   
    var sourceSheet = SpreadsheetApp.openById(getFileID(i)).getActiveSheet();
    var lastRowSource = sourceSheet.getLastRow();
    var lastColumnSource = sourceSheet.getLastColumn();
    console.log(lastColumnSource)

    if (Kampagnen[i].includes('Shopping') | Kampagnen[i].includes('shopping')) {

      var sourceValues1 = sourceSheet.getRange(2, 1, lastRowSource, 5).getValues();
      var range1 = currentSheet.getRange(lastRowCurrent + 1, 1, lastRowSource, 5);
      range1.setValues(sourceValues1);

      var sourceValues2 = sourceSheet.getRange(2, 6, lastRowSource, 3).getValues();
      var range2 = currentSheet.getRange(lastRowCurrent + 1, 8, lastRowSource, 3);

      var j;
      for (j = 0; j < sourceValues2.length - 1; j++) {
        sourceValues2[j][2] = Kampagnen[i];

      }

      range2.setValues(sourceValues2);

    } else {

      var sourceValues = sourceSheet.getRange(2, 1, lastRowSource, lastColumnSource + 1).getValues();
    
      var j;
      for (j = 0; j < sourceValues.length - 1; j++) {
        sourceValues[j][9] = Kampagnen[i];
      }

      var range = currentSheet.getRange(lastRowCurrent + 1, 1, lastRowSource, lastColumnSource + 1);
      range.setValues(sourceValues);
    }   
  }
}

  /**
 * Function name: getFileID()
 * Parameters: List-index (number)
 * Return Value: File ID (number)
 * Description: Helperfunction for updateData() that 
 * returns the spreadsheet-ID with name
 * Kampagnen[index] in folder Kampagnen.
 */

function getFileID(index) {  

  var folderWettbewerbsanalysen = '1lWdBAqPjtlTHkoyc1TxEvfg6b4qzApQf';
  var folderKonto = DriveApp.getFolderById(folderWettbewerbsanalysen);
  var folders = folderKonto.getFolders(); 
  while (folders.hasNext()) {
    
    var isFolder = folders.next()    
    if (isFolder.getName() == Kontoname) {
     
      folderID = isFolder.getId();
      
    }              
  }
            

  var folder = DriveApp.getFolderById(folderID);
  var files = folder.getFiles();  
  while (files.hasNext()) {
    
    var file = files.next();
    if (file.getName() === Kampagnen[index]) {
      
      var fileID = file.getId();
      break;   
    }    
  }
  
  return fileID;    
}