import { newE2EPage } from '@stencil/core/testing';

describe('app-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-form></app-form>');
  });
});
