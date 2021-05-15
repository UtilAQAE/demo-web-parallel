package driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import java.io.IOException;
import java.nio.file.Paths;

public class DesiredCapabilities {

    public static WebDriver chromeOptions() throws IOException {
        System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty
                ("user.dir")).toRealPath() + "/drivers/chromedriver");

        ChromeOptions options = new ChromeOptions();
        options.addArguments(
                "start-maximized",
                "enable-automation",
                "--window-size=1920,1080",
                "--disable-infobars",
                "--disable-extensions",
                "--no-sandbox",
                "--verbose",
                "--whitelisted-ips",
                "--disable-dev-shm-usage"
        );

        return new ChromeDriver(options);
    }

    public static WebDriver fireFoxOptions() throws IOException {
        System.setProperty("webdriver.gecko.driver", Paths.get(System.getProperty
                ("user.dir")).toRealPath() + "/drivers/geckodriver.exe");

        FirefoxOptions options = new FirefoxOptions();
        options.addArguments(
                "start-maximized",
                "enable-automation",
                "--window-size=1920,1080",
                "--disable-infobars",
                "--disable-extensions",
                "--no-sandbox",
                "--verbose",
                "--whitelisted-ips",
                "--disable-dev-shm-usage"
        );

        return new FirefoxDriver(options);
    }


}
