import {
  getOpenGmailTabsInCurrentWindow,
  isCurrentTabInCurrentWindowGmail,
  openNewGmailTab,
  switchToFirstTabAndActivate
} from './tab/tab.js';

const onClickIcon = async () => {
  // check if Gmail tab exists already
  let openGmailTabs = [];
  try {
    openGmailTabs = [...openGmailTabs, ...(await getOpenGmailTabsInCurrentWindow())];
  } catch (err) {
    console.error(`An error occurred: ${err}`);
    return;
  }

  if (openGmailTabs.length !== 0) {
    // if current tab is already Gmail, do nothing
    if (await isCurrentTabInCurrentWindowGmail()) {
      return;
    }
    // switch focus to the Gmail tab
    try {
      await switchToFirstTabAndActivate(openGmailTabs);
    } catch (err) {
      console.error(`An error occurred: ${err}`);
      return;
    }
  } else {
    await openNewGmailTab();
  }
};

browser.browserAction.onClicked.addListener(onClickIcon);
