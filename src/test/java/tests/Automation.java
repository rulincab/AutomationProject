package tests;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.*;
import pageobjects.SearchResult;
import pageobjects.HeaderSearch;

public class Automation {

    private WebDriver driver;
    SearchResult searchResult;

    @BeforeClass
    public void setUp(){
        //System.setProperty("webdriver.gecko.driver", "D:\\CURSO\\Drivers\\geckodriver.exe");
        System.setProperty("webdriver.chrome.driver", "D:\\Drivers\\chromedriver.exe");

        driver = new ChromeDriver();
        //driver = new FirefoxDriver();

        driver.get("https://www.amazon.com/");

    }

    @Test
    public void testResultId1() {
        HeaderSearch search = new HeaderSearch(driver);
        search.sendTextSearchBox("Software Test Design");
        searchResult = new SearchResult(driver);
        Assert.assertEquals(searchResult.getResults(),"A Practitioner's Guide to Software Test Design");

    }

    @AfterClass
    public void tearDown(){
    }
}
