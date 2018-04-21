<?php
/**
 * Plugin name: Snow Monkey Design Skin Spring
 * Description: A design skin of the Snow Monkey
 * Version: 0.1.0
 */

add_action( 'plugins_loaded', function() {
	add_filter( 'snow_monkey_design_skin_choices', function( $choices ) {
		$plugin_data = get_file_data( __FILE__, [
			'label' => 'Plugin Name',
		], 'plugin');
		$choices[ basename( __FILE__, '.php' ) ] = $plugin_data['label'];
		return $choices;
	} );
} );

add_action( 'after_setup_theme', function() {
	new \Snow_Monkey\app\model\Design_Skin( __FILE__ );
} );
