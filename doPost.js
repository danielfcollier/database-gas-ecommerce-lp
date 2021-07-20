// ------------------------------------------------------------------------------------------------
function doPost(e) {
  // Init database connection
  const leadDB = new LeadDB();

  // New dataMember
  const leadMember = new Member(leadDB);

  // Parse data
  const dataReceiver = JSON.parse(e.postData.contents);

  // Transfer data to dataMember
  leadMember.init(dataReceiver);

  // Post data at the database
  leadDB.createDBRow(leadMember);
}
// ------------------------------------------------------------------------------------------------