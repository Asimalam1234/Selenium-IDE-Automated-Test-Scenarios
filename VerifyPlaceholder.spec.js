import { test, expect } from '@playwright/test';
// Ticket # AP-305
test('test', async ({ page }) => {
    //Go to Afterprime EU URL

    await page.goto('https://customer-non-prod.cloudwerkz.eu/live');
    //Locate element by label

    const fname = page.getByLabel('First Name');
    //Get placeholder Attribute for fname Element 

    const placeholderfname = await fname.getAttribute('placeholder');
    //Verify first name placeholder

    expect(placeholderfname).toBe('As shown on Documents');
    //Locate Element by label

    const lname = page.getByLabel('Last Name');
    //Get placeholder Attribute for lname Element

    const placeholderlname = await lname.getAttribute('placeholder');
    //Verify last name placeholder

    expect(placeholderlname).toBe('As shown on Documents');




});