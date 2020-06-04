import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getNGRxBtnText() {
    return element(by.name('ngrx'));
  }

  getInsertBtn() {
    return element(by.name('insert'))
  }

  getInsertDialogBtn() {
    return element(by.xpath('//span[contains(.,"Insert")]'));
    //return element(by.css("app-root app-employee button .insertbtn"));
    //return element(by.name('insert'))
  }

  getInsertDialogHeader() {
    return element(by.id('mat-dialog-title-0'));
  }
}
