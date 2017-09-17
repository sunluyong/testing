const {
  expect
} = require('chai');
const chromeDriver = require('selenium-webdriver/chrome')
const webdriver = require('selenium-webdriver');
const By = webdriver.By;


let driver;

describe('百度首页测试', function () {
  this.timeout(50000);

  before(() => {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
      .build();
  });

  it('首页标题', done => {
    driver.get('https://www.baidu.com/').then(() => {
      driver.getTitle().then(title => {
        expect(title).to.equal('百度一下，你就知道');
        done();
      });
    });
  });

  it('按钮文案', done => {
    driver.findElement(By.id('su')).then(element => {
      return element.getAttribute('value');
    }).then(btnName => {
      expect(btnName).to.equal('百度一下');
      done();
    });
  });

  it('搜索', done => {
    driver.findElement(By.id('kw')).then(input => {
      input.sendKeys('test');
    });
    driver.findElement(By.id('su')).then(button => {
      button.click();
    });

    driver.sleep(300);

    driver.getWindowHandle().then((cur) => {
      driver.switchTo().window(cur).then(() => {
        driver.getTitle().then(title => {
          expect(title).to.equal('test_百度搜索');
          done();
        });
      });
    });
  });

  after(() => {
    driver.quit();
  });

});
