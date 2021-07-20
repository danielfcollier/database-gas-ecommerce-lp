// ------------------------------------------------------------------------------------------------
function apiRequestTest(dataObj) {

    const urlRootTest = "https://script.google.com/macros/s/AKfycbzirntklCx9Mh8tXf7TTPtiDCz1XpWh-UPiq_McE992brKb02M2R_XKzE54CfFt5N6Mtw/exec";

    // Initialization
    const params = {
        method: "post",
        'content-type': 'application/json'
    };

    // Payload
    params.payload = JSON.stringify(dataObj);

    // Action
    UrlFetchApp.fetch(urlRootTest, params);
}
// ------------------------------------------------------------------------------------------------
function mainTest() {

    const dataObj = {
        FullName: "DANIEL",
        Email: "Danielfcollier@gmail.com",
        Platform: "window.navigator.platform",
        Vendor: "window.navigator.vendor",
        Geolocation: "window.navigator.geolocation"
    };

    apiRequestTest(dataObj);
}
// ------------------------------------------------------------------------------------------------