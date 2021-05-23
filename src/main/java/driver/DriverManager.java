package driver;

import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class DriverManager {

    private WebDriver driver;
    public static ThreadLocal<WebDriver> drivers = new ThreadLocal<WebDriver>();

    public static WebDriver getDriver() {

        return drivers.get();

    }

    public static void setWebDriver(WebDriver driver) {
        drivers.set(driver);
    }

    protected void startWebDriver(String browser) throws IOException {
        switch (browser){
            case ("firefox"):
                driver = DesiredCapabilities.fireFoxOptions();
                break;
            case ("chrome"):
                driver = DesiredCapabilities.chromeOptions();
                break;
            }

            setWebDriver(driver);
        getDriver().manage().window().maximize();
        getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }

//        if (browser.equals("firefox")) {
//            driver = DesiredCapabilities.fireFoxOptions();
//        } else if (browser.equals("chrome")) {
//            driver = DesiredCapabilities.chromeOptions();
//        }
//
//        driver.manage().window().maximize();
//        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//    }

    public void navigateTo(String url) {
        getDriver().navigate().to(url);
    }

    protected void stopWebDriver() {
        getDriver().quit();
    }

//    private static ThreadLocal<WebDriver> drivers = new ThreadLocal();
//
//    public static void initDriver(String browser) throws IOException {
//        WebDriver driver = null;
//
//        if (driver == null) {
//            switch (browser) {
//                case "chrome":
//                    driver = DesiredCapabilities.chromeOptions();
//                    break;
//                case "firefox":
//                    driver = DesiredCapabilities.fireFoxOptions();
//                    break;
//            }
//        }
//
//        driver.manage().window().maximize();
//        drivers.set(driver);
//    }
//
//    public static WebDriver getDriver() {
//        return (WebDriver) drivers.get();
//    }




}
