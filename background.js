chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    		let url = tabs[0].url;
    		if ((typeof url !== "undefined")&&(url.includes("/adfs/ls/"))){
			console.log("ADFS sign in page found; injecting autocomplete");
			chrome.tabs.executeScript(tab.ib, {
				file: 'inject.js'
			});
		}
	});

  }
})
