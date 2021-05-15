package driver;

import org.openqa.selenium.WebDriver;

import java.io.IOException;

public class DriverManager {

    private static ThreadLocal<WebDriver> drivers = new ThreadLocal();

    public static void initDriver(String browser) throws IOException {
        WebDriver driver = null;

        if (driver == null) {
            switch (browser) {
                case "chrome":
                    driver = DesiredCapabilities.chromeOptions();
                    break;
                case "firefox":
                    driver = DesiredCapabilities.fireFoxOptions();
                    break;
            }
        }

        driver.manage().window().maximize();
        drivers.set(driver);
    }

    public static WebDriver getDriver() {
        return (WebDriver) drivers.get();
    }


}
