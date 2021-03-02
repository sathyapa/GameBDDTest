package com.example.pages;

import org.openqa.selenium.By;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class PlayOnlineCasinoGameHomePage extends BaseActions{

    @Value("${BaseUrl}")
    protected String baseUrl;

     By  joinNowLink = By.xpath("//a[text()='Join Now!']");


    public void openPlayOnlineCasinoGamePage()
    {
        action.navigateTo(baseUrl);
    }

    public void clickOnJoinNow(){
         action.clickElement(joinNowLink);
    }

}
