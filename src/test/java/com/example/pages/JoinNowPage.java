package com.example.pages;

import com.example.locators.BasePageLocators;
import com.example.locators.LoginPageLocators;
import org.openqa.selenium.By;
import org.springframework.stereotype.Component;

@Component
public class JoinNowPage extends BaseActions
{

    By  titleId = By.id("title");
    By  firstNameById = By.id("forename");
    By  sureNameByName = By.name("map(lastName)");
    By  termAndConditionCheckBox = By.name("map(terms)");
    By  joinNowButton = By.id("form");
    By  errorMsg =  By.xpath("//label[@for='dob']");



    public void selectOptionAsTitle(String title){
        action.selectOption(titleId,title);

    }

    public void enterFirstNameText(String firstName){
        action.typeInElement(firstNameById,firstName);
    }
    public void enterSureNameText(String lastName){
        action.typeInElement(sureNameByName,lastName);

    }

    public void clickOnAcceptanceCheckBox(){
        action.clickElement(termAndConditionCheckBox);
    }

    public void clickOnSubmitButton(){
        action.clickElement(joinNowButton);
    }

    public String getErrorMessageForDOB(){
        return get.elementText(errorMsg);
    }
}
