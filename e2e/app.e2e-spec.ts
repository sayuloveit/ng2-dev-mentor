import { DevMentorPage } from './app.po';

describe('dev-mentor App', () => {
  let page: DevMentorPage;

  beforeEach(() => {
    page = new DevMentorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
