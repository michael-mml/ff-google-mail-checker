export const getOpenGmailTabsInCurrentWindow = () => browser.tabs.query(
  {
    currentWindow: true,
    url: '*://mail.google.com/*'
  }
);

/**
 * Sets the focus to the first Gmail tab in the current window
 * @param {tabs.Tab[]} openGmailTabs
 * @returns {Promise<tabs.Tab[]>} the tab that was opened
 */
export const switchToFirstTabAndActivate = (openGmailTabs) => {
  const [firstOpenGmailTab] = openGmailTabs;
  return browser.tabs.update(
    firstOpenGmailTab.id,
    {
      active: true
    }
  );
};

export const openNewGmailTab = async () => {
  try {
    await browser.tabs.create(
      {
        active: true,
        url: 'https://gmail.com'
      }
    );
  } catch (err) {
    console.error(`An error occurred: ${err}`);
  }
};

export const isCurrentTabInCurrentWindowGmail = async () => {
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
  }
};
