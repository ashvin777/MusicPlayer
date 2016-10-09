document.addSyncEventListener = function(events, callback){
  events = events.split(" ");
  if(!window.documentSynchCalls){
    window.documentSynchCalls = 0;
  }

  for(var i in events){
    document.addEventListener(events[i], function(){
      window.documentSynchCalls++;
      if( window.documentSynchCalls == events.length){
        callback();
      }
    });
  }
}

function initialize() {

  window.application = new Framework7({
    modalTitle: 'Framework7',
    material: true,
    pushState: true
  });

  var LibModule = ng.core.NgModule({
    imports: [ng.forms.FormsModule]
  }).Class({
    constructor: function() {

    }
  });

  var BodyComponent = ng.core.Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
  }).Class({
    constructor: function() {}
  });

  var MainModule = ng.core.NgModule({
      imports: [
        ng.platformBrowser.BrowserModule,
        LibModule,
        Router()
      ],
      declarations: [
        BodyComponent,
        MainLayoutComponent(),
        HomePageComponent()
      ],
      bootstrap: [BodyComponent],
      providers: []
    })
    .Class({
      constructor: function() {}
    });

  ng.platformBrowserDynamic
    .platformBrowserDynamic()
    .bootstrapModule(MainModule);
}

document.addEventListener('deviceready', initialize);
