chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  console.log(333, request.cookie);
  localStorage.setItem("usercookie", request.cookie);
});
