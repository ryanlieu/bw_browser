function setBW() {
  chrome.storage.sync.get(function(result) {
    console.log("huh")
    if (result.bwSelectedOption !== "none" && 
       (result.blockedSites.includes(window.location.host) || result.bwSelectedOption === "all")) {
      console.log("should be enabled")
      var html = document.documentElement;
      html.style['filter'] = 'grayscale(1)';
    }
    else {
      console.log("oops not enabled")
      var html = document.documentElement;
      html.style['filter'] = 'grayscale(0)';
    }
  })  
}
setBW();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("got message")
    setBW();
  }
);

