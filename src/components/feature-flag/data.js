const ApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordion: true,
  showQRCodeGenerator: true,
  showNavigationMenu: true,
  showTabs: true
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (ApiResponse)
      setTimeout(() => {
        resolve(ApiResponse);
      }, 500);
    else reject("An error occurred! Please try again.");
  });
}

export default featureFlagDataServiceCall;
