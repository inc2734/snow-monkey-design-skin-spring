<?php
/**
 * @package snow-monkey-design-skin-spring
 * @author inc2734
 * @license GPL-2.0+
 */

add_filter(
	'theme_mod_accent-color',
	function() {
		return '#ee85b5';
	}
);

add_filter(
	'theme_mod_archive-post-layout',
	function() {
		return 'right-sidebar';
	}
);

add_filter(
	'theme_mod_singular-post-layout',
	function() {
		return 'right-sidebar';
	}
);

add_filter(
	'theme_mod_header-layout',
	function() {
		return '1row';
	}
);

add_filter(
	'theme_mod_breadcrumbs-position',
	function() {
		return 'content-width';
	}
);

add_filter(
	'theme_mod_header-position',
	function() {
		return 'overlay';
	}
);

add_filter(
	'theme_mod_header-position-lg',
	function() {
		return 'overlay';
	}
);

add_filter(
	'theme_mod_default-page-header-image',
	function() {
		return plugins_url( 'img/pink-1326168_1920.jpg', __FILE__ );
	}
);

add_filter(
	'theme_mod_post-eyecatch',
	function() {
		return 'page-header';
	}
);

add_filter(
	'theme_mod_page-eyecatch',
	function() {
		return 'page-header';
	}
);

add_filter(
	'snow_monkey_page_header_thumbnail_size',
	function() {
		return 'xlarge';
	}
);

add_filter(
	'theme_mod_infobar-content',
	function() {
		return false;
	}
);

add_filter(
	'theme_mod_header-content',
	function() {
		return false;
	}
);

add_filter(
	'theme_mod_display-header-content-on-mobile',
	function() {
		return false;
	}
);
