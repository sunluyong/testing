const { expect } = require('chai');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const chromeDriver = require('selenium-webdriver/chrome');

describe('百度首页 UI 测试', function (){
  this.timeout(50000);

  let driver;

  before(() => {
    driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
    .build();
  });

  it('should have title "百度一下，你就知道"', done => {
    driver.get('https://www.baidu.com').then(() => {
      driver.getTitle().then(title => {
        expect(title).to.equal('百度一下，你就知道');
        done();
      });
    });
  });

  it('should have button value 百度一下', done => {
    driver.findElement(By.id('su')).then(button => {
      button.getAttribute('value').then(val => {
        expect(val).to.equal('百度一下');
        done();
      });
    });
  });

  it('搜索 test', async () => {
    const input = await driver.findElement(By.id('kw'));
    await input.sendKeys('test');
    const button = await driver.findElement(By.id('su'));
    await button.click();
    const handler = await driver.getWindowHandle();
    await driver.switchTo().window(handler);
    driver.sleep(1000);
    const title = await driver.getTitle();
    expect(title).to.equal('test_百度搜索');
  });

  after(() => {
    driver.quit();
  });
});
