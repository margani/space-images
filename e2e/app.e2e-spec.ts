import { SpaceImagesPage } from './app.po';

describe('space-images App', () => {
  let page: SpaceImagesPage;

  beforeEach(() => {
    page = new SpaceImagesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
