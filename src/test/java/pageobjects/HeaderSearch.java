package pageobjects;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HeaderSearch {

    private WebDriver driver;
    private WebDriverWait wait;

    //Constructor
    public HeaderSearch(WebDriver browser) {
        driver = browser;
        PageFactory.initElements(driver, this);
        wait = new WebDriverWait(driver, 20);
    }

    //Locator

    @FindBy(css = "input[id=twotabsearchtextbox]")
    private WebElement searchBox;

    //Actions
    public void sendTextSearchBox(String text) {
        wait.until(ExpectedConditions.elementToBeClickable(searchBox)).sendKeys(text);
        wait.until(ExpectedConditions.elementToBeClickable(searchBox)).sendKeys(Keys.ENTER);

    }
}
