import { NgHeroAppPage } from './app.po';

describe('ng-hero-app App', () => {
  let page: NgHeroAppPage;

  beforeEach(() => {
    page = new NgHeroAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
