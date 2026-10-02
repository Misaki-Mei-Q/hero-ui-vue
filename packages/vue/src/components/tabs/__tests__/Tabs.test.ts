import { afterEach, describe, expect, it } from 'vitest'
import { enableAutoUnmount, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Tab from '../Tab.vue'
import TabIndicator from '../TabIndicator.vue'
import TabList from '../TabList.vue'
import TabPanel from '../TabPanel.vue'
import Tabs from '../Tabs.vue'

enableAutoUnmount(afterEach)

const basicTabs = {
  components: { Tabs, TabList, Tab, TabPanel, TabIndicator },
  template: `
    <Tabs default-value="preview">
      <TabList>
        <Tab value="preview">Preview</Tab>
        <Tab value="code">Code</Tab>
        <Tab value="api" disabled>API</Tab>
        <TabIndicator />
      </TabList>
      <TabPanel value="preview"><span data-test="panel-preview">Preview panel</span></TabPanel>
      <TabPanel value="code"><span data-test="panel-code">Code panel</span></TabPanel>
      <TabPanel value="api"><span data-test="panel-api">API panel</span></TabPanel>
    </Tabs>
  `,
}

describe('Tabs', () => {
  it('renders a tablist with one tab per item', () => {
    const wrapper = mount(basicTabs, { attachTo: document.body })
    expect(wrapper.find('[data-slot="tabs-list"]').attributes('role')).toBe('tablist')
    expect(wrapper.findAll('[data-slot="tab"]')).toHaveLength(3)
  })

  it('marks the default value tab as selected', () => {
    const wrapper = mount(basicTabs, { attachTo: document.body })
    const selected = wrapper.findAll('[data-slot="tab"]').filter(
      (tab) => tab.attributes('data-selected') === 'true',
    )
    expect(selected).toHaveLength(1)
    expect(selected[0]!.text()).toContain('Preview')
  })

  it('registers the indicator inside the tab list', () => {
    const wrapper = mount(basicTabs, { attachTo: document.body })
    expect(wrapper.findComponent(TabIndicator).exists()).toBe(true)
  })

  it('shows only the active panel', () => {
    const wrapper = mount(basicTabs, { attachTo: document.body })
    expect(wrapper.find('[data-test="panel-preview"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="panel-code"]').exists()).toBe(false)
  })

  it('switches tabs when an enabled tab is clicked', async () => {
    const wrapper = mount(basicTabs, { attachTo: document.body })
    const tabs = wrapper.findAll('[data-slot="tab"]')
    await tabs[1]!.trigger('mousedown')
    await nextTick()
    expect(wrapper.find('[data-test="panel-code"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="panel-preview"]').exists()).toBe(false)
    expect(tabs[1]!.attributes('data-selected')).toBe('true')
    expect(wrapper.findComponent(Tabs).emitted('update:value')?.at(-1)).toEqual(['code'])
  })

  it('does not select a disabled tab', async () => {
    const wrapper = mount(basicTabs, { attachTo: document.body })
    const disabledTab = wrapper.findAll('[data-slot="tab"]')[2]!
    expect(disabledTab.attributes('data-disabled')).toBeDefined()
    expect(disabledTab.attributes('disabled')).toBeDefined()
    await disabledTab.trigger('mousedown')
    await nextTick()
    expect(wrapper.find('[data-test="panel-api"]').exists()).toBe(false)
    expect(wrapper.find('[data-test="panel-preview"]').exists()).toBe(true)
  })

  it('renders a vertical tablist', () => {
    const wrapper = mount(
      {
        components: { Tabs, TabList, Tab, TabPanel, TabIndicator },
        template: `
          <Tabs default-value="a" orientation="vertical">
            <TabList>
              <Tab value="a">A</Tab>
              <TabIndicator />
            </TabList>
            <TabPanel value="a">A panel</TabPanel>
          </Tabs>
        `,
      },
      { attachTo: document.body },
    )
    expect(wrapper.find('[data-slot="tabs"]').attributes('data-orientation')).toBe('vertical')
    expect(wrapper.find('[data-slot="tabs-list"]').attributes('data-orientation')).toBe('vertical')
  })

  it('applies the secondary variant modifier', () => {
    const wrapper = mount(
      {
        components: { Tabs, TabList, Tab, TabPanel },
        template: `
          <Tabs default-value="a" variant="secondary">
            <TabList>
              <Tab value="a">A</Tab>
            </TabList>
            <TabPanel value="a">A panel</TabPanel>
          </Tabs>
        `,
      },
      { attachTo: document.body },
    )
    expect(wrapper.find('[data-slot="tabs"]').classes()).toContain('tabs--secondary')
  })
})
