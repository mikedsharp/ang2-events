import { Ang2EventsPage } from './app.po';

describe('ang2-events App', function() {
  let page: Ang2EventsPage;

  beforeEach(() => {
    page = new Ang2EventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
