<template>
  <div class="demo-accordion-disabled">
    <div class="demo-accordion-section">
      <h3 class="demo-accordion-heading">Entire accordion disabled</h3>
      <Accordion is-disabled class="demo-accordion">
        <AccordionItem value="disabled-1">
          <AccordionHeading>
            <AccordionTrigger>
              Disabled Item 1
              <AccordionIndicator />
            </AccordionTrigger>
          </AccordionHeading>
          <AccordionPanel>
            <AccordionBody>This content cannot be accessed when the accordion is disabled.</AccordionBody>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="disabled-2">
          <AccordionHeading>
            <AccordionTrigger>
              Disabled Item 2
              <AccordionIndicator />
            </AccordionTrigger>
          </AccordionHeading>
          <AccordionPanel>
            <AccordionBody>This content cannot be accessed when the accordion is disabled.</AccordionBody>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>

    <div class="demo-accordion-section">
      <h3 class="demo-accordion-heading">Individual items disabled</h3>
      <Accordion class="demo-accordion">
        <AccordionItem value="active">
          <AccordionHeading>
            <AccordionTrigger>
              Active Item
              <AccordionIndicator />
            </AccordionTrigger>
          </AccordionHeading>
          <AccordionPanel>
            <AccordionBody>This item is active and can be toggled normally.</AccordionBody>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem is-disabled value="disabled">
          <AccordionHeading>
            <AccordionTrigger>
              Disabled Item
              <AccordionIndicator />
            </AccordionTrigger>
          </AccordionHeading>
          <AccordionPanel>
            <AccordionBody>This content cannot be accessed when the item is disabled.</AccordionBody>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="another-active">
          <AccordionHeading>
            <AccordionTrigger>
              Another Active Item
              <AccordionIndicator />
            </AccordionTrigger>
          </AccordionHeading>
          <AccordionPanel>
            <AccordionBody>This item is also active and can be toggled.</AccordionBody>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionBody,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@misaki-mei/heroui-vue'
</script>

<style lang="less">
.demo-accordion-disabled {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: left;
}

.demo-accordion-section,
.demo-accordion {
  width: 100%;
  max-width: 28rem;
}

.demo-accordion-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-accordion-disabled .demo-accordion-heading {
  margin: 0;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
