<template>
  <tab-container v-model:activeTabId="activeTabId">
    <tab tabId="1">Tab #1</tab>
    <tab tabId="2">Tab #2</tab>
    <tab-content tabId="1">Content #1</tab-content>
    <tab-content tabId="2">Content #2</tab-content>
  </tab-container>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Tab, TabContent, TabContainer } from './render';

export default {
  name: 'App',
  data() {
    return {
      activeTabId: 1
    }
  },
  components: {
    HelloWorld,
    Tab,
    TabContainer,
    TabContent
  }
}
</script>

<style>
.tabs {
  display: flex;
}
.tab {
  border: 1px solid;
  cursor: pointer;
  padding: 10px;
  width: 100px;
  text-align: center;
}
.tab:first-child {
  border-right: none;
}
.active {
  color: blue;
  border-bottom: 5px solid blue;
}
.content {
  margin: 10px;
  font-size: 1.5rem;
}
</style>
