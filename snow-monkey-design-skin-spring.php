<?php
/**
 * Plugin name: [ Snow Monkey Design Skin ] Spring
 * Description: A design skin of the Snow Monkey.
 * Version: 3.0.2
 * Tested up to: 5.9
 * Requires at least: 5.5
 * Requires PHP: 5.6
 * Text Domain: snow-monkey-design-skin-spring
 * Domain Path: /languages/
 *
 * @package snow-monkey-design-skin-spring
 * @author inc2734
 * @license GPL-2.0+
 */

use Inc2734\WP_GitHub_Plugin_Updater\Bootstrap as Updater;

require_once( __DIR__ . '/vendor/autoload.php' );

add_action(
	'plugins_loaded',
	function() {
		load_plugin_textdomain(
			'snow-monkey-design-skin-spring',
			false,
			basename( __DIR__ ) . '/languages'
		);

		add_action(
			'init',
			function() {
				new Updater(
					plugin_basename( __FILE__ ),
					'inc2734', // GitHub user name
					'snow-monkey-design-skin-spring', // GitHub repository name
					[
						'homepage' => 'https://snow-monkey.2inc.org',
					]
				);
			}
		);

		add_filter(
			'snow_monkey_design_skin_choices',
			function( $choices ) {
				$plugin_data = get_file_data(
					__FILE__,
					[
						'label' => 'Plugin Name',
					],
					'plugin'
				);

				$choices[ basename( __FILE__, '.php' ) ] = $plugin_data['label'];
				return $choices;
			}
		);
	}
);

add_action(
	'after_setup_theme',
	function() {
		if ( class_exists( '\Snow_Monkey\app\model\Design_Skin' ) ) {
			new \Snow_Monkey\app\model\Design_Skin( __FILE__ );
		}

		if ( class_exists( '\Framework\Model\Design_Skin' ) ) {
			new \Framework\Model\Design_Skin( __FILE__ );
		}
	}
);
