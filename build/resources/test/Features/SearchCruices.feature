@searchSails

Feature: Search Sail
  This feature allows searching a sail with some searching parameters
  it allows wants to see more information about a sail

  Background:
    Given The User is on the home page
    When  the user defines the parameters to search for sails
    And   the user confirms the searching to get results

    @story1
      @case1
  Scenario: successfully search for sails
  This scenario consists of doing a searching that
  it returns all of the results on the set parameters
    Then  it shows the sails that meet the searching parameters with "Grid view active"

  @story1
  @case2
  Scenario: successfully validate the filter function by price
  This scenario consists of doing a filter by price
  all of the results are between the ranges
    When  the user wants to filter by price
    And   the user sets the ranges values
    Then  the sails results amount are "4 Results"

  @story1
  @case3
  Scenario: successfully validate the filter function by price
  This scenario consists of doing a filter by price
  all of the results are between the ranges
    When  the user wants to sort by price
    Then  the results are ordered by "price"

  @story2
  @case4
  Scenario: successfully validate the selection show itinerary
  This scenario consists of doing a filter by price
  all of the results are between the ranges
    When  the user wants to filter by price
    And The user selects a sail
    Then the user sees the itinerary page
    And The user sees the bookNow button


