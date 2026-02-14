import { test } from '@playwright/test'
import { chromium, webkit } from 'playwright'

test('Navigate RedBus and Flipkart', async () => {

  // Launch Edge
  const edgeBrowser = await chromium.launch({
    channel: 'msedge',
    headless: false
  })

  const edgePage = await edgeBrowser.newPage()
  await edgePage.goto('https://www.redbus.in')

  console.log('RedBus Title:', await edgePage.title())
  console.log('RedBus URL:', edgePage.url())

  // Launch Webkit
  const webkitBrowser = await webkit.launch({ headless: false })

  const webkitPage = await webkitBrowser.newPage()
  await webkitPage.goto('https://www.flipkart.com')

  console.log('Flipkart Title:', await webkitPage.title())
  console.log('Flipkart URL:', webkitPage.url())

})
