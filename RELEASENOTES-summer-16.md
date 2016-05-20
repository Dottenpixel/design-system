# Salesforce Lightning Design System
# Release notes

## Release 2.0.0 - Future, 2016

**SITE IA/ENHANCEMENTS**

The following site enhancements are now available:

- New states added for button-groups showing overflow dropdown

**NEW COMPONENTS AND VARIANTS**

The following components are now available:

- Checkbox Toggle - [Checkbox toggle component](/components/forms/#checkbox-toggle)
- Radio Group Alternate - [Radio group alternate component](/components/forms/#radio-group-alternate)
- Checkbox Alternate - [Checkbox alternate component](/components/forms/#checkbox-alternate)
- Tree Grid - [Tree grid component](/components/trees/#grid)
- Slide out Panel with Inline Edit Form - [Slide out panel component](/components/panels/#slide-out)
- Voice Integration - [Voice docked composer](/components/docked-composer/#voice)

**ADDED**

The following classes are now available:

- Utility - Light version theme texture - [Theme texture](/components/utilities/themes/#color)
- Text Utility - Heading label normal - [Heading label normal](/components/utilities/text/#heading-label-normal)

**CHANGES**

The following changes have been made in this release:

- Added additional space between buttons in the modal footer
- Page Header markup structure is refactored for new design.
- Font sizes have been reduced
- Page Headers are visually smaller
- Page Header details are now on white and align to the left
- Modals are visually tighter
- All buttons are visually smaller
- Form Elements are visually smaller
- Reduced data table row heights
- Activity timeline sizing & spacing is reduced
- Visual density changes in cards
- Visual density changes in popovers
- "View all" links in cards and popover panels are now aligned to the right
- `slds-modal--content` should use the additive class of `slds-p-vertical--large` and `slds-p-horizontal--x-large`, instead of `slds-p-around--medium`.
- Removed first and last cell padding from Data Tables to allow nesting. New
  class `.slds-table--cell-buffer` can be added to the table or `.slds-cell-buffer--left` and `.slds-cell-buffer--right` for individual cell application.
- Field level help icon moved to the right of the input label
- Reduced vertical padding on page header
- Removed over-reaching a:focus styles due to a recent FFOX visual change

**FIXED**

The following issues have now been resolved:

- Truncation class is added to headings in the Edit Form for Touch
- Removed max-height and animation on `.slds-section__content` to prevent collision with JavaScript implementations
- Fixed IE11 page header truncation bug

**DEPRECATED**

The following features are being marked as deprecated in this release and will be removed in three releases:

- `.slds-toggle-visibility` is no longer needed in button-groups. The final button will no longer disappear if it is a button-icon, but instead will gray down like a normal disabled button.

**REMOVED**

The following features are being removed in this release:

- Removed `slds-button--small`, since it’s the same as the new default button size
- Removed `slds-input--small`, since it’s the same as the new default input size
- Removed the `$static-icon-path` configuration variable, since it wasn’t used anywhere in the codebase