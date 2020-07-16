(function() {
  var api = wp.customize;

  api.bind('ready', function() {
    api.control('accent-color').container.remove();
    api.control.remove('accent-color');

    api.control('archive-page-layout').container.remove();
    api.control.remove('archive-page-layout');

    api.control('singular-post-layout').container.remove();
    api.control.remove('singular-post-layout');

    api.control('header-layout').container.remove();
    api.control.remove('header-layout');

    api.control('breadcrumbs-position').container.remove();
    api.control.remove('breadcrumbs-position');

    api.control('header-position').container.remove();
    api.control.remove('header-position');

    api.control('header-position-lg').container.remove();
    api.control.remove('header-position-lg');

    api.control('default-page-header-image').container.remove();
    api.control.remove('default-page-header-image');

    api.control('post-eyecatch').container.remove();
    api.control.remove('post-eyecatch');

    api.control('page-eyecatch').container.remove();
    api.control.remove('page-eyecatch');

    api.section.remove('infobar');

    api.control('header-content').container.remove();
    api.control.remove('header-content');

    api.control('display-header-content-on-mobile').container.remove();
    api.control.remove('display-header-content-on-mobile');
  });
})(jQuery);
