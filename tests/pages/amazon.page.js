
  const NativePage = require('./native.page.js');
  const amazonPageData = require('../files/testData/amazon.data.js');
  
  class sampleHomePage extends NativePage {
  
    get webdriverIOHomePageElement() {
      return this.getPage('amazon.locators');
    }
  
      openamazonHomepage() {
      browser.url(amazonPageData['url'])
      console.log(browser.getTitle())
      expect(browser).toHaveTitleContaining('Amazon')
 
    }
  
    selectBasics(){
  
      const basics_seemore = $(amazonPageData['seemore'])
      console.log(basics_seemore.$$('a').length)
      console.log(basics_seemore.$$('a')[1].getText())
      console.log(basics_seemore.$$('a')[1].getAttribute('href'))
      expect(basics_seemore.$$('a')[1]).toHaveLinkContaining("kitchen")
      basics_seemore.$$('a')[1].click()
      
    }
  
    verifyBasics(){
  
      const basics_label = $(amazonPageData['label'])
      let text = basics_label.$$('span')[2].getText()
      expect(basics_label.$$('span')[2]).toHaveAttribute('dir','auto')
      console.log(basics_label.$$('span').length)
      console.log("Kitchen text::"+ text)
    }
  
    selectourBrand(){
  
     console.log(browser.$("//li[@id='p_n_feature_forty-seven_browse-bin/21180942011']").getAttribute('aria-label'))
    
     expect(browser.$("//li[@id='p_n_feature_forty-seven_browse-bin/21180942011']").$('a')).toHaveLinkContaining("kitchen")
     browser.$(amazonPageData['ourbrand']).$('i').click()
      
  
    }
  
    selectProduct(product){
      browser.pause(3000)
    // $("//div[@class='sg-col-inner']")[3].waitForDisplayed({ timeout: 3000 })
     let total_products = browser.$$(amazonPageData['totalproducts'])
     console.log("total item::" + total_products.length)
     browser.pause(2000)
     for(let i=0;i<total_products.length; i++)
     {
       console.log(total_products[i].$('img').getAttribute('alt'))
       if(total_products[i].$('img').getAttribute('alt')==="YIOU Air Purifier for Home Large Room Up to 547ft², H13 True HEPA Filter for Allergies Pets, 23db Smart Air Filter Remove ...")
       {
        total_products[i].click()
        console.log('title::'+ browser.getTitle())
        break
       }
     }
    }
  
    checkTitle(){

      browser.waitUntil(()=>(browser.getTitle()===('Amazon.com: YIOU Air Purifier for Home Large Room Up to 547ft², H1...'), { timeout:5000, timeoutMsg:'product page not opened' }))
      expect(browser).toHaveTitleContaining('YIOU Air Purifier') 
  
    }
    
    sheetcount(){
      $("//div[@id='dp-container']").waitForDisplayed({ timeout: 3000 })
      console.log("sheet size:::"+ $("//div[@id='twister_feature_div']").$$('span')[2].getText())
      expect($("//div[@id='twister_feature_div']").$$('span')[2].getText()==='Grey')
     // expect($("//div[@id='productOverview_feature_div']")).toHaveAttribute("data-feature-name", "productOverview")
    }
   
    addtocart(){
      $("//input[@id='add-to-cart-button']").waitForDisplayed({ timeout: 3000 })
      $(amazonPageData['addtocart']).click() 
      
    }
    
    cartcount(){

     $("//span[@id='nav-cart-count']").waitForDisplayed({ timeout: 3000 })
     console.log($("//span[@id='nav-cart-count']").getText())
     expect($(amazonPageData['cartcount'])).toHaveText('1')
    }
  
  }
  
  module.exports = sampleHomePage;
  