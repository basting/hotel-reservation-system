import { test, expect } from '@playwright/test'
import { chromium, type Browser, type Page } from 'playwright'

let browser: Browser
let page: Page

test('Hotel Reservation Search Test with No Filter', async () => {
  browser = await chromium.launch()
  const context = await browser.newContext()
  page = await context.newPage()

  await page.goto('http://localhost:3000')

  const tableSelector = 'table'

  await page.waitForSelector(tableSelector)
  const tableRows = await page.$$(tableSelector + ' tr')

  expect(tableRows.length).toBe(4)

  await context.close()
  await browser.close()
})
