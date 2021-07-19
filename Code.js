const sheetObj = {
  id: "18sQdclGR2sS0yC-DDDAVfq54gm_W4eMSuQrv1IwtPS4"
};

function doPost(e) {
  const ss = SpreadsheetApp.openById(sheetObj.id);
  const sheet = ss.getSheets()[0];

  //const sheet = SpreadsheetApp.getActiveSheet();
  const data = [];

  const body = JSON.parse(e.postData.contents)

  Object.values(body).forEach(value => data.push(value));
  sheet.appendRow(data);
}
