package com.example.stepDefs;

import com.example.PageRepository;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class PlayOnlineCasinoGameStepDefs extends PageRepository
{

    @Given("^I navigated to moneygaming.com$")
    public void i_navigated_to_moneygaming_com()  {
        playOnlineCasinoGameHomePage.openPlayOnlineCasinoGamePage();
    }

    @When("^I click on JOIN NOW Link$")
    public void i_click_on_JOIN_NOW_Link()  {
        playOnlineCasinoGameHomePage.clickOnJoinNow();
    }

    @When("^I Select a title as \"([^\"]*)\" from the dropdown$")
    public void i_Select_a_title_value_from_the_dropdown(String title)  {
        joinNowPage.selectOptionAsTitle(title);
    }

    @When("^I Enter your first name as \"([^\"]*)\" in the form$")
    public void i_Enter_your_first_name_in_the_form(String firstName)  {
        joinNowPage.enterFirstNameText(firstName);


    }

    @When("^I Enter your sure name as \"([^\"]*)\"  in the form$")
    public void i_Enter_your_surname_in_the_form(String sureName)  {
        joinNowPage.enterSureNameText(sureName);

    }

    @When("^I Check the tickbox with text I accept the Terms and Conditions and certify that I am ove the age of 18$")
    public void i_Check_the_tickbox_with_text()  {
        joinNowPage.clickOnAcceptanceCheckBox();

    }

    @When("^I Submit the form by clicking the JOIN NOW button$")
    public void i_Submit_the_form_by_clicking_the_JOIN_NOW_button()  {
        joinNowPage.clickOnSubmitButton();
    }

    @Then("^I Validate that a validation message with text \"([^\"]*)\" appears under the date of   birth box$")
    public void i_Validate_that_a_validation_message_with_text_appears_under_the_date_of_birth_box(String   msg)  {

        Assert.assertEquals(msg, joinNowPage.getErrorMessageForDOB());
    }

    
}
