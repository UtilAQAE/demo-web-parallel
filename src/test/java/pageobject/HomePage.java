package pageobject;

import lombok.Getter;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

@Getter
public class HomePage extends BasePage{

    @FindBy(id = "expertRegistration")
    private WebElement expertRegistrationButton;

    public HomePage(WebDriver driver) {
        super(driver);
    }

}
