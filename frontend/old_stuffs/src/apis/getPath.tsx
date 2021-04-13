export const getVisitingHistory = (): any => {
  chrome.history.onVisited.addListener((result: any) => {
    if (result.url.indexOf("amazon") === -1) return result
    return result
  })
}