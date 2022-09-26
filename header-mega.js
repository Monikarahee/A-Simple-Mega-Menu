const headerApp = {
  init() {
    this.header = document.querySelector('#mega-menu');
    if (!this.header) return;
    
  	this.drawerToggle = this.header.querySelector('.header__icon--summary');
    
    this.drawer = this.header.querySelector('#mega-drawer');
    
    this.submenuToggles = this.header.querySelectorAll('.mega__summary');
    
    this.setupEventListeners() 
  },
  
  setupEventListeners() {
  	this.drawerToggle.onclick = this.toggleDrawer.bind(this); 
    this.submenuToggles.forEach(summary => summary.onclick = this.toggleSubmenu.bind(this));
  },
  
  toggleDrawer() {
    this.drawer.classList.toggle('visible');
  },
  
  toggleSubmenu ({ target }) {
    const summary = target;
    const submenu = summary.parentNode.querySelector('.mega__submenu');
    if ( !submenu ) return;
    if (submenu.classList.contains('visible')){
     submenu.style.height = '0';      
     submenu.classList.remove('visible');
    } else {
      const height = submenu.scrollHeight + 20;
      submenu.style.height = `${height}px`;
      submenu.classList.add('visible');
    }    
  }
}

if (window.screen.width < 1100){
 headerApp.init(); 
}
