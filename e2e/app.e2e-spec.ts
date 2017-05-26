import { RmonitorPage } from './app.po';

describe('rmonitor App', () => {
  let page: RmonitorPage;

  beforeEach(() => {
    page = new RmonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
