// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.cookies.onChanged.addListener(function (info) {
  chrome.storage.local.get(["tabId"], function (result) {
    if (info.cookie.name === "taekwondo_u") {
      chrome.tabs.sendMessage(result.tabId, {
        cookie: info.cookie.value,
      });
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.storage.local.set({ tabId });
});
