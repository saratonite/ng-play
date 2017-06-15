import { Ng4appPage } from './app.po';

describe('ng4app App', () => {
  let page: Ng4appPage;

  beforeEach(() => {
    page = new Ng4appPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
