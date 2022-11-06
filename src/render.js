import { h } from 'vue';

const withTabId = (content) => ({
    props: {
        tabId: {
            type: String
        }
    },
    ...content
});

export const TabContent = {
    name: 'TabContent',
    props: {
        tabId: {
            type: String,
            required: true
        }
    },
    render() {
        return h(this.$slots.default);
    }
}

export const Tab = {
    name: 'Tab',
    props: {
        tabId: {
            type: String,
            required: true
        }
    },
    render() {
        return h('div', h(this.$slots.default));
    }
}

export const TabContainer = {
    name: 'TabContainer',
    props: {
        activeTabId: String
    },
    render() {
        const $slots = this.$slots.default();
        const tabs = $slots
            .filter(slot => slot.type === Tab)
            .map(tab => {
                return h(tab, {
                   class: {
                       tab: true,
                       active: tab.props.tabId === this.activeTabId
                   },
                    onClick: () => {
                       this.$emit('update:activeTabId', tab.props.tabId)
                    }
                });
            });
        const content = $slots
            .find(slot =>
                slot.type === TabContent &&
                slot.props.tabId === this.activeTabId
            );
        return [
            h(() => h('div', { class: 'tabs' }, tabs)),
            h(() => h('div', { class: 'content' }, content))
        ];
    },
}


