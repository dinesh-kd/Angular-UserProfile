import { AngularUserProfilePage } from './app.po';

describe('angular-user-profile App', () => {
  let page: AngularUserProfilePage;

  beforeEach(() => {
    page = new AngularUserProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
