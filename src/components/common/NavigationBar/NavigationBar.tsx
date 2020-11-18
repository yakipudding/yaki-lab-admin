import React from 'react';
import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TabMenu from './TabMenu'
import { PageProps } from '../../../biz/Definition/Types'

// ナビゲーションバー
const NavigationStyle = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid #ddd`,
  },
  toolbar: {
    marginTop: 10,
    padding: 0,
    display: 'flex',
    alignItems: 'baseline',
    minHeight: 30,
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
  },
  section: {
    display: 'flex',
  },
}));

const NavigationBar = (props: PageProps) => {
  const classes = NavigationStyle();
  const path = props.location.pathname
  let tabIndex = 0
  tabIndex = path === "/"
          || path === "/AdminNewArticle" 
          || path.startsWith("/AdminEditArticle") ? 0
            : path === "/AdminEditAbout" ? 2
            : 1

  return (
    <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Typography variant="body1" align="center" className={classes.title}>
            <Link href="/" color="inherit">
              焼きらぼ。
            </Link>
          </Typography>
          {"管理者モード"}
        </Toolbar>
        <TabMenu index={tabIndex} />
      </Container>
    </AppBar>
  );
}
export default NavigationBar