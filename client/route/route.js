import '../../imports/ui/home';
import '../../imports/ui/notFound';
import '../../client/layout';
let waterSystem = FlowRouter.group({
  prefix: '/water',
  name: 'admin'
})
FlowRouter.notFound = {
  // Subscriptions registered here don't have Fast Render support.
  subscriptions: function () {},
  action: function () {
    BlazeLayout.render('MainLayout', {content: 'notFound'})
  }
}
waterSystem.route('/home', {
  name: 'home',
  action: function (query, params) {
    BlazeLayout.render('MainLayout', {content: 'home'})
  }
})
