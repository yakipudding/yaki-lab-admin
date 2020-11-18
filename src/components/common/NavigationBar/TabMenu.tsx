import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// タブメニュー
export interface TabMenuProps {index: null | number}
const a11yProps = (index: number) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const TabMenu = (props: TabMenuProps) => {
  return (
    <Tabs value={props.index} centered>
      <Tab label="ARTICLES" {...a11yProps(0)} href="/" />
      <Tab label="PRODUCTS" {...a11yProps(1)} href="/AdminProductDashboard" />
      <Tab label="ABOUT" {...a11yProps(2)} href="/AdminEditAbout" />
    </Tabs>
  );
}

export default TabMenu