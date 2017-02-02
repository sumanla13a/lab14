import { Lab14Page } from './app.po';

describe('lab14 App', function() {
  let page: Lab14Page;

  beforeEach(() => {
    page = new Lab14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
