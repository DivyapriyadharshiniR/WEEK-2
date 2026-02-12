// Global variable
let browser = "Chrome"

// Function with callback
function checkBrowserVersion(callback) {
    setTimeout(function () {
        callback(browser)
    }, 2000)
}

// Call the function with a simple callback
checkBrowserVersion(function (version) {
    console.log(version)
})

