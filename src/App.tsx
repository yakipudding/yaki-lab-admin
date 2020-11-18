import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import AppStyle from './AppStyle'
import Theme from './style/Theme'
import NavigationBar from './components/common/NavigationBar/NavigationBar'
import NotFound from './components/common/FeedBack/NotFound'
import CheckAdmin from './components/admin/CheckAdmin'
import AdminDashboard from './components/admin/Article/AdminDashboard'
import AdminNewArticle from './components/admin/Article/AdminNewArticle'
import AdminEditArticle from './components/admin/Article/AdminEditArticle'
import AdminProductDashboard from './components/admin/Product/AdminProductDashboard'
import AdminProductArticles from './components/admin/Product/AdminProductArticles'
import AdminNewProduct from './components/admin/Product/AdminNewProduct'
import AdminNewProductArticle from './components/admin/Product/AdminNewProductArticle'
import AdminEditProductArticle from './components/admin/Product/AdminEditProductArticle'
import AdminEditAbout from './components/admin/About/AdminEditAbout'

const App = () => {
  const classes = AppStyle();
  const theme = Theme;
  return (
    <BrowserRouter>
      <div>
        <ThemeProvider theme={theme}>
          <Route component={NavigationBar} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path='/' component={CheckAdmin(AdminDashboard)} />
              <Route exact path='/AdminNewArticle' component={CheckAdmin(AdminNewArticle)} />
              <Route exact path='/AdminEditArticle/:id' component={CheckAdmin(AdminEditArticle)} />
              <Route exact path='/AdminProductDashboard' component={CheckAdmin(AdminProductDashboard)} />
              <Route exact path='/AdminProductArticles/:id' component={CheckAdmin(AdminProductArticles)} />
              <Route exact path='/AdminNewProduct' component={CheckAdmin(AdminNewProduct)} />
              <Route exact path='/AdminNewProductArticle/:id' component={CheckAdmin(AdminNewProductArticle)} />
              <Route exact path='/AdminEditProductArticle/:productId/:articleId' component={CheckAdmin(AdminEditProductArticle)} />
              <Route exact path='/AdminEditAbout/' component={CheckAdmin(AdminEditAbout)} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
