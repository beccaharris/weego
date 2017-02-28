import { WeegoPage } from './app.po';

describe('weego App', () => {
  let page: WeegoPage;

  beforeEach(() => {
    page = new WeegoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
