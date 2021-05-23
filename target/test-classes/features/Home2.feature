Feature: Scenarios file 2

  @Test
  Scenario Outline: test file 2.1
    Given I open the <browserName> browser and navigate to <url>
    Then the element on organizations page is present
    Examples:
      | browserName | url                                         |
      | chrome      | http://localhost:83/#!/organizations/search |
      | firefox     | http://localhost:83/#!/organizations/search |

  @Test
  Scenario Outline: test file 2.2
    Given I open the <browserName> browser and navigate to <url>
    Then the element on funding page is present
    Examples:
      | browserName | url                                   |
      | chrome      | http://localhost:83/#!/tenders/search |
      | firefox     | http://localhost:83/#!/tenders/search |

  @Test
  Scenario Outline: test file 2.3
    Given I open the <browserName> browser and navigate to <url>
    Then the element on donors page is present
    Examples:
      | browserName | url                           |
      | chrome      | http://localhost:83/#!/donors |
      | firefox     | http://localhost:83/#!/donors |