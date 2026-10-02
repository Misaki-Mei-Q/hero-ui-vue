<template>
  <Tabs default-value="preview" class="w-full max-w-xl">
    <TabList>
      <Tab value="preview">Preview</Tab>
      <Tab value="code">Code</Tab>
      <Tab value="api">API</Tab>
      <TabIndicator />
    </TabList>
    <TabPanel value="preview">
      <Card variant="secondary">
        <CardContent>Component examples render with local Vue source.</CardContent>
      </Card>
    </TabPanel>
    <TabPanel value="code">
      <Card variant="secondary">
        <CardContent>Slot names mirror the React package where CSS depends on them.</CardContent>
      </Card>
    </TabPanel>
    <TabPanel value="api">
      <Card variant="secondary">
        <CardContent>Props use Vue names while preserving React-compatible state attributes.</CardContent>
      </Card>
    </TabPanel>
  </Tabs>
</template>

<script setup>
import { Card, CardContent, Tab, TabIndicator, TabList, TabPanel, Tabs } from '@misaki-mei/heroui-vue'
</script>
