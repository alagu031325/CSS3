## General Suggestions to organize CSS Files

- use comments to create headers within css files
  > /_ || RESET _/
- sort properties alphabetically - easier to debug redundant properties
  > ctrl + p --> and '>' --> sort lines in ascending order
- Larger projects - follow a naming convention methodology
  - BEM - Block, Element and Modifier
  - Block or aka components - it has semantic meaning like button components and has starting styles that is applied to all btn components in the page
  - Modifiers - incremental style changes that are applied to components like btn--secondary class (blocks with modifiers usually with '--' - styles added in addition to the block class)
  - If it is a common btn styles used across the page we can leave it as btn class itself or if we use specific btn styles only for headers then we can use header\_\_btn class since it is dependent on that main component
- After html and body elements - mostly classes are used to style the pages
- It is always good to have even specificity than the odd ones like .class (10 specificity) and .class element (11 specificity)
