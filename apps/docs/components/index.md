# Components Overview

HeroUI Vue provides a comprehensive set of UI components for building modern web applications.

## Forms

Form components for user input and interaction.

- [Button](/components/button) - Clickable button element with multiple variants
- [Button Group](/components/button-group) - Group multiple buttons together
- [Checkbox](/components/checkbox) - Checkbox for boolean selections
- [Checkbox Group](/components/checkbox-group) - Group related checkbox values
- [Fieldset](/components/fieldset) - Form section layout with legend and actions
- [Input](/components/input) - Single-line text input field
- [Input Group](/components/input-group) - Input shell with prefix, suffix, and textarea slots
- [Input OTP](/components/input-otp) - One-time passcode input with visual slots
- [Number Field](/components/number-field) - Numeric input with increment/decrement controls
- [Radio](/components/radio) - Radio button for single selection from a group
- [Radio Group](/components/radio-group) - Group radio buttons with shared state
- [Switch](/components/switch) - Toggle switch for on/off states
- [Switch Group](/components/switch-group) - Layout wrapper for related switches
- [TextField](/components/textfield) - Complete form field with label and validation
- [Textarea](/components/textarea) - Multi-line text input field
- [Toggle Button](/components/toggle-button) - Pressable toggle control
- [Toggle Button Group](/components/toggle-button-group) - Group related toggle controls

## Form Elements

Helper components for building accessible forms.

- [Description](/components/description) - Descriptive text for form fields
- [Field Error](/components/field-error) - Error message display for form validation
- [Label](/components/label) - Label component for form fields

## General

General-purpose UI components.

- [Accordion](/components/accordion) - Collapsible content sections
- [Alert](/components/alert) - Status and feedback message
- [AlertDialog](/components/alert-dialog) - Confirmation dialog for consequential actions
- [Autocomplete](/components/autocomplete) - Searchable single-option picker
- [Avatar](/components/avatar) - User or entity avatar
- [Badge](/components/badge) - Compact status marker
- [Breadcrumbs](/components/breadcrumbs) - Hierarchical navigation path
- [Card](/components/card) - Structured surface container
- [Chip](/components/chip) - Compact label or status
- [Disclosure](/components/disclosure) - Collapsible section with trigger and animated panel
- [Disclosure Group](/components/disclosure-group) - Coordinate expanded state across disclosure items
- [Close Button](/components/close-button) - Button for closing/dismissing elements
- [Empty State](/components/empty-state) - Empty list or search result placeholder
- [Header](/components/header) - Section heading primitive
- [Kbd](/components/kbd) - Display keyboard shortcuts
- [Link](/components/link) - Accessible hyperlink component
- [Meter](/components/meter) - Known-range scalar measurement
- [Modal](/components/modal) - Dialog overlay for focused interactions
- [Drawer](/components/drawer) - Slide-out panel for supplementary content and actions
- [Pagination](/components/pagination) - Page navigation controls
- [Progress Bar](/components/progress-bar) - Linear progress indicator
- [Progress Circle](/components/progress-circle) - Circular progress indicator
- [Scroll Shadow](/components/scroll-shadow) - Scrollable region with edge shadows
- [Separator](/components/separator) - Visual divider between content sections
- [Skeleton](/components/skeleton) - Loading placeholder
- [Spinner](/components/spinner) - Loading indicator
- [Surface](/components/surface) - Base surface wrapper
- [Tag](/components/tag) - Selectable or removable tag
- [Tabs](/components/tabs) - Tabbed content navigation
- [Text](/components/text) - Styled text component
- [Toolbar](/components/toolbar) - Toolbar container for related actions

## Coming Soon

More components are being actively developed:

- Select
- DatePicker
- Tooltip
- Dropdown
- Calendar and date inputs
- Menus and overlays

## Usage Pattern

All components follow a consistent API pattern:

```vue
<script setup lang="ts">
import { ComponentName } from '@misaki-mei/heroui-vue'
</script>

<template>
  <ComponentName
    variant="primary"
    size="md"
    :disabled="false"
  >
    Content
  </ComponentName>
</template>
```
