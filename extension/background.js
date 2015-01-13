// background.js
// manages visibility of the page action
// 1/13/2015 jbeardsley

chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule.
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          // When at a path like www.beeradvocate.com/beer/profile...
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'beeradvocate.com', pathPrefix: '/beer/profile' },
          }),
          // Or ratebeer.com/beer...
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'ratebeer.com', pathPrefix: '/beer' },
          })
        ],
        // Show the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});