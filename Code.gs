// Google Apps Script for PT Tablet Follow-up System
// This script handles all data operations with Google Sheets

// Get the active spreadsheet
function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('PT_Data');
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet('PT_Data');
    // Add headers
    sheet.getRange(1, 1, 1, 6).setValues([
      ['ID', 'Registration Number', 'Next Visit Date', 'Completed', 'Recorded At', 'Completed At']
    ]);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#0066cc').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

// Enable CORS for web app
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({status: 'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}

// Main function to handle POST requests
function doPost(e) {
  try {
    const sheet = getSheet();
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    
    let response = {};
    
    switch(action) {
      case 'getAllVisits':
        response = getAllVisits(sheet);
        break;
      case 'addVisit':
        response = addVisit(sheet, data.visit);
        break;
      case 'updateVisit':
        response = updateVisit(sheet, data.visit);
        break;
      case 'deleteVisit':
        response = deleteVisit(sheet, data.id);
        break;
      case 'clearAllData':
        response = clearAllData(sheet);
        break;
      default:
        response = {success: false, error: 'Invalid action'};
    }
    
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Get all visits from sheet
function getAllVisits(sheet) {
  const lastRow = sheet.getLastRow();
  
  if (lastRow <= 1) {
    return {success: true, visits: []};
  }
  
  const data = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
  const visits = data.map(row => ({
    id: row[0],
    regNumber: row[1],
    nextVisitDate: row[2],
    completed: row[3],
    recordedAt: row[4],
    completedAt: row[5]
  }));
  
  return {success: true, visits: visits};
}

// Add new visit
function addVisit(sheet, visit) {
  const lastRow = sheet.getLastRow();
  
  sheet.getRange(lastRow + 1, 1, 1, 6).setValues([[
    visit.id,
    visit.regNumber,
    visit.nextVisitDate,
    visit.completed || false,
    visit.recordedAt,
    visit.completedAt || ''
  ]]);
  
  return {success: true, message: 'Visit added successfully'};
}

// Update existing visit
function updateVisit(sheet, visit) {
  const lastRow = sheet.getLastRow();
  const data = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == visit.id) {
      const rowNum = i + 2;
      sheet.getRange(rowNum, 1, 1, 6).setValues([[
        visit.id,
        visit.regNumber,
        visit.nextVisitDate,
        visit.completed,
        visit.recordedAt,
        visit.completedAt || ''
      ]]);
      
      // Highlight completed rows in light green
      if (visit.completed) {
        sheet.getRange(rowNum, 1, 1, 6).setBackground('#e8f5e9');
      } else {
        sheet.getRange(rowNum, 1, 1, 6).setBackground('#ffffff');
      }
      
      return {success: true, message: 'Visit updated successfully'};
    }
  }
  
  return {success: false, error: 'Visit not found'};
}

// Delete visit
function deleteVisit(sheet, id) {
  const lastRow = sheet.getLastRow();
  const data = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == id) {
      sheet.deleteRow(i + 2);
      return {success: true, message: 'Visit deleted successfully'};
    }
  }
  
  return {success: false, error: 'Visit not found'};
}

// Clear all data
function clearAllData(sheet) {
  const lastRow = sheet.getLastRow();
  
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
  
  return {success: true, message: 'All data cleared successfully'};
}
