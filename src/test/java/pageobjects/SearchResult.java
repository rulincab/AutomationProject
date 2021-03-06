package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.List;

public class SearchResult {
    private WebDriver driver;
    private WebDriverWait wait;
    private Actions move;
    private Action action;

    public SearchResult(WebDriver browser) {
        driver = browser;
        PageFactory.initElements(driver, this);
        wait = new WebDriverWait(driver, 20);
    }

    //Locators
    @FindBy(css = "div[data-component-id='1']")
    private WebElement elementId1;

    @FindBy(css = "span[id=productTitle]")
    private WebElement productTitle;

    //Actions
    public void clickresultId1() {
        wait.until(ExpectedConditions.elementToBeClickable(elementId1));
        elementId1.click();
    }

    public String getResults() {

        return wait.until(ExpectedConditions.visibilityOf(productTitle)).getText();
    }
}
