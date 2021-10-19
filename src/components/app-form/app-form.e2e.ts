import { newE2EPage } from '@stencil/core/testing';

describe('app-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-form></app-form>');

    const element = await page.find('app-form');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/form/joseph' });

    const formElement = await page.find('app-root >>> app-form');
    const element = formElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });
});
