function Router() {
  var router;
  router = ng.router.RouterModule.forRoot([{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: '',
    component: MainLayoutComponent(),
    children: [{
      path: 'home',
      component: HomePageComponent()
    }]
  }], {
    useHash: true
  });
  return router;
}
