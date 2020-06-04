import { AppPage } from './app.po';
import { browser, logging, protractor, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should visit to landing page', () =>{
    page.navigateTo();
    expect(page.getNGRxBtnText().getText()).toBe('NgRx Example')
  });

  it('should route to NGRX page', () =>{
    page.navigateTo();
    //browser.sleep(2000);
    page.getNGRxBtnText().click();
    expect(page.getInsertBtn().getText()).toBe('Insert')
  });//span[contains(.,'Insert')]

  it('should visit Insert dialog', () =>{
    page.navigateTo();
    page.getInsertDialogBtn().click();
    expect(page.getInsertDialogHeader().getText()).toEqual('Insert Data');
  });
});
