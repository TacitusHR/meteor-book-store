Feature: Book list

  I want to see all books from database in the list

  @watch
  Scenario: Books listing
    Given There are some books in database
    Then I see all of them
