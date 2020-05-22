document.getElementById("optionsPage").onclick = function() {
  console.log("fuck")
  chrome.runtime.openOptionsPage()
}

chrome.storage.sync.get(function(result) {
  console.log('Value currently is ' + result.bwSelectedOption);
  document.getElementById(result.bwSelectedOption).className += " active"
})

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  console.log(tabs[0].url)
  // use `url` here inside the callback because it's asynchronous!
});

// Get all buttons with class="btn" inside the container
var buttons = document.getElementsByClassName("button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    chrome.storage.sync.set({bwSelectedOption: this.id}, function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
          console.log(response.farewell);
        });
      });
    });
  });
}
