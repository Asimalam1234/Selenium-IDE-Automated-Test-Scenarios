import { test, expect } from '@playwright/test';
// Ticket # AP-299
test('test', async ({ page }) => {
  await page.goto('https://customer-non-prod.cloudwerkz.eu/login');
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('Muhammad.asim@kinectro.com.au');
  await page.getByPlaceholder('Client portal password').click();
  await page.getByPlaceholder('Client portal password').fill('Kin@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('complementary').getByRole('button').first().click();
  await page.frameLocator('iframe[name="chat-widget-minimized"]').getByLabel('Hide greeting').click();
  await expect(page.getByText('Live Chat')).not.toBeVisible({timeout:20000});
});