import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/');
});

test('has title DEMOQA and main buttons', async ({ page }) => {
  await expect(page).toHaveTitle('DEMOQA');
  await expect(page.getByText('Elements')).toBeVisible();
  await expect(page.getByText('Forms')).toBeVisible();
  await expect(page.getByText('Alerts, Frame & Windows')).toBeVisible();
  await expect(page.getByText('Widgets')).toBeVisible();
  await expect(page.getByText('Interactions')).toBeVisible();
  await expect(page.getByText('Book Store Application')).toBeVisible();
});

test('should fill out the Practice Form', async ({ page }) => {
  await page.getByText('Forms').click();
  await page.getByText('Practice Form').click();
  await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
  await expect(page.getByText('Student Registration Form')).toBeVisible();
  await page.getByPlaceholder('First Name').fill("testUserName");
  await page.getByPlaceholder('Last Name').fill("testUserLastName");
  await page.getByPlaceholder('name@example.com').fill("testUser@testUserMail.com");
  await page.getByText('Female').click();
  await page.getByPlaceholder('Mobile Number').fill("1234567890");
  
  //filling date of birth control
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('2070');
  await page.getByRole('option', { name: 'Choose Sunday, August 31st,' }).click();
  
  await page.locator('.subjects-auto-complete__value-container').click();
  await page.locator('#subjectsInput').fill('Math');
  await page.getByText('Maths', { exact: true }).click();
  await page.getByText('Sports').click();
  await page.getByText('Reading').click();
  await page.getByText('Music').click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('testUserAddress');
  //await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
  await page.getByText('Select State').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.getByText('Select City').click();
  await page.getByText('Delhi', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  expect(page.locator('.h4')).toHaveText('Thanks for submitting the formm');
  await page.getByRole('button', { name: 'Close' }).click();
});