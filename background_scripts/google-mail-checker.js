(async function init() {
  const onClickIcon = async () => {
    // check if Gmail tab exists already
    let openGmailTabs = [];
    try {
      openGmailTabs = [...openGmailTabs, ...await getOpenGmailTabsInCurrentWindow()];
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
      // open a new Gmail tab
      await openNewGmailTab();
    }
  };

  const getOpenGmailTabsInCurrentWindow = () => browser.tabs.query(
    {
      currentWindow: true,
      url: '*://mail.google.com/*',
    }
  );

  const switchToFirstTabAndActivate = (openGmailTabs) => {
    const [firstOpenGmailTab] = openGmailTabs;
    return browser.tabs.update(
      firstOpenGmailTab.id,
      {
        active: true
      }
    );
  };

  const openNewGmailTab = async () => {
    try {
      await browser.tabs.create(
        {
          active: true,
          url: 'https://gmail.com'
        }
      );
    } catch (err) {
      console.error(`An error occurred: ${err}`);
      return;
    }
  };

  const isCurrentTabInCurrentWindowGmail = async () => {
    // precondition: >= 1 Gmail tabs are open
    try {
      const [currentTab] = await browser.tabs.query(
        {
          active: true,
          currentWindow: true,
        }
      );
      return currentTab.active && currentTab.url.includes('mail.google.com');
    } catch (err) {
      console.error(`An error occurred: ${err}`);
      return;
    }
  };

  browser.browserAction.onClicked.addListener(onClickIcon);
})();
