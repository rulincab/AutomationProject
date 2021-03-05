package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import pageobjects.HeaderSearch;
import pageobjects.SearchResult;

import java.net.MalformedURLException;

public class SearchItemSteps {

    private WebDriver driver;
    HeaderSearch searchItem;
    SearchResult searchResult;

    @Before
    public void setUp() throws MalformedURLException {
        //System.setProperty("webdriver.gecko.driver", "D:\\CURSO\\Drivers\\geckodriver.exe");
        System.setProperty("webdriver.chrome.driver", "D:\\Drivers\\chromedriver.exe");

        driver = new ChromeDriver();
        //driver = new FirefoxDriver();

        //DesiredCapabilities capabilities = DesiredCapabilities.firefox();
        //DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        //driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
        //driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
    }

    @Given("^The User is on the home page$")
    public void theUserHasDoneASearching() throws Throwable {
        driver.get("https://www.amazon.com/");
    }

    @When("^the user defines the parameters to search any \"([^\"]*)\"$")
    public void theUserDefinesTheParametersToSearch(String item) {
        searchItem = new HeaderSearch(driver);
        searchItem.sendTextSearchBox("Software Test Design");
    }

    @When("^the user selects the specific item with the data Asin field$")
    public void TheUserSelectsTheSpecificItemWithTheDataAsinField() {
        searchResult = new SearchResult(driver);
            searchResult.clickResultWithDataAsin();
    }

    @When("^the user selects the specific item with id \"([^\"]*)\"$")
    public void TheUserSelectsTheSpecificItem(String item) {
        searchResult = new SearchResult(driver);
        int id = Integer.parseInt(item);
        if(id == 1) {
            searchResult.clickResultId1();
        }
    }

    @Then("^the search results are \"([^\"]*)\"$")
    public void theSailsResultsAmountAre(String resultItem) throws Throwable {
        searchResult = new SearchResult(driver);
        searchResult.getResults();
        Assert.assertEquals(searchResult.getResults(), resultItem);
    }

    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed())
            takeScreenshot(scenario);
        driver.quit();
    }

    private void takeScreenshot(Scenario scenario){
        final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenshot, "image/png");
    }
}
