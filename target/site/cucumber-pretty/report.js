$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/PlayOnlineCasinoGame.feature");
formatter.feature({
  "line": 1,
  "name": "As a new moneygaming.com player",
  "description": "I want to be able to register using my full details\r\nSo that I can play online casino games",
  "id": "as-a-new-moneygaming.com-player",
  "keyword": "Feature"
});
formatter.before({
  "duration": 314886500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "JOIN Now into Moneygaming website",
  "description": "",
  "id": "as-a-new-moneygaming.com-player;join-now-into-moneygaming-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I navigated to moneygaming.com",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on JOIN NOW Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Select a title as \"Mr\" from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Enter your first name as \"John\" in the form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Enter your sure name as \"Paul\"  in the form",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Check the tickbox with text I accept the Terms and Conditions and certify that I am ove the age of 18",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Submit the form by clicking the JOIN NOW button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Validate that a validation message with text \"This field is required\" appears under the date of   birth box",
  "keyword": "Then "
});
formatter.match({
  "location": "PlayOnlineCasinoGameStepDefs.i_navigated_to_moneygaming_com()"
});
formatter.result({
  "duration": 36282543901,
  "status": "passed"
});
formatter.match({
  "location": "PlayOnlineCasinoGameStepDefs.i_click_on_JOIN_NOW_Link()"
});
formatter.result({
  "duration": 31713229400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 21
    }
  ],
  "location": "PlayOnlineCasinoGameStepDefs.i_Select_a_title_value_from_the_dropdown(String)"
});
formatter.result({
  "duration": 1121442300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 28
    }
  ],
  "location": "PlayOnlineCasinoGameStepDefs.i_Enter_your_first_name_in_the_form(String)"
});
formatter.result({
  "duration": 1809968101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paul",
      "offset": 27
    }
  ],
  "location": "PlayOnlineCasinoGameStepDefs.i_Enter_your_surname_in_the_form(String)"
});
formatter.result({
  "duration": 317113600,
  "status": "passed"
});
formatter.match({
  "location": "PlayOnlineCasinoGameStepDefs.i_Check_the_tickbox_with_text()"
});
formatter.result({
  "duration": 652393699,
  "status": "passed"
});
formatter.match({
  "location": "PlayOnlineCasinoGameStepDefs.i_Submit_the_form_by_clicking_the_JOIN_NOW_button()"
});
formatter.result({
  "duration": 759575800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This field is required",
      "offset": 48
    }
  ],
  "location": "PlayOnlineCasinoGameStepDefs.i_Validate_that_a_validation_message_with_text_appears_under_the_date_of_birth_box(String)"
});
formatter.result({
  "duration": 133691301,
  "status": "passed"
});
formatter.after({
  "duration": 243600,
  "status": "passed"
});
});