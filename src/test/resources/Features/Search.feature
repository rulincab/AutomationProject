@searchItem

Feature: Search Item
  This feature allows searching a item with specific name
  it allows wants to see more information about an item

  Background:
    Given The User is on the home page
    When  the user defines the parameters to search any "item"

    @searchStory
      @case1
  Scenario: successfully search for Item with id 1
  This scenario consists of doing a searching that
  it returns all of the results on the set parameters
    When the user selects the specific item with id "1"
    Then  the search results are "A Practitioner's Guide to Software Test Design"

  @case2
  Scenario: successfully search for Item with data asin field
  This scenario consists of doing a searching that
  it returns all of the results on the set parameters with other locator
    When the user selects the specific item with the data Asin field
    Then  the search results are "A Practitioner's Guide to Software Test Design"