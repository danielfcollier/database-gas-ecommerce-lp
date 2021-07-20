// ------------------------------------------------------------------------------------------------
class LeadDB extends DBConnection {
  // ----------------------------------------------------------------------------------------------
  constructor() {
    const dataObj = {
      SheetId: DB.LEAD.ID,
      SheetName: DB.LEAD.NAME,
      Keys: DB.LEAD.FIELD
    };

    super(dataObj);
  }
  // ----------------------------------------------------------------------------------------------
  applyDBRules(dataMember) {
    dataMember.Timestamp = new Date();
    dataMember.FirstName = Lib.toProperCase(dataMember.apply(Lib.getFirstName));
    dataMember.Email = dataMember.Email.toLowerCase();

    super.applyDBRules();
  }
  // ----------------------------------------------------------------------------------------------
}
// ------------------------------------------------------------------------------------------------