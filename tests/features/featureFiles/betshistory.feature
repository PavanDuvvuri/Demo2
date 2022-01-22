Feature: To test bets history functionality in jennings website 

@betshistory
Scenario: Ensure that the user is able to see placed bets in Bet history

Given user is on login page of jennings
When user enters Username "test123" and Password as "Qwerty123" and clicks on login button
Then verify the user profile and balance displayed in page
Then user click on myaccount link
Then user page navigates to mybets link
Then verify user placed bet is displaying in openbets
And  verify betdetails stake amount returns are correct