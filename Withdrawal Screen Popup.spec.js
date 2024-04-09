import { test, expect } from '@playwright/test';
// Ticket # AP-296

test('test', async ({ page }) => {
  //Go to URL
  await page.goto('https://customer-non-prod.cloudwerkz.com.au/login');
  //Click on email address field
  await page.getByPlaceholder('Your email address').click();

  //Enter email address
  await page.getByPlaceholder('Your email address').fill('Muhammad.asim@kinectro.com.au');

  //Click on password field
  await page.getByPlaceholder('Client portal password').click();

  //Enter password
  await page.getByPlaceholder('Client portal password').fill('Kin@1234');

  //Click on login button
  await page.getByRole('button', { name: 'Login' }).click();

  //Click on Manage Banking 
  await page.getByRole('link', { name: 'Manage Banking' }).click();

  //Click on Withdaw
  await page.getByRole('link', { name: 'Withdraw' }).click();

  //Validate popup Message
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible({ timeout: 30000 });

});