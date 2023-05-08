<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://chirag.wisdmlabs.net
 * @since      1.0.0
 *
 * @package    Ldgr
 * @subpackage Ldgr/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Ldgr
 * @subpackage Ldgr/public
 * @author     Chirag Rakh <chirag.rakh@wisdmlabs.com>
 */
class Ldgr_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Ldgr_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Ldgr_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/ldgr-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Ldgr_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Ldgr_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/ldgr-public.js', array( 'jquery' ), $this->version, false );

	}



	function my_custom_button() {
		?>
		<!-- <div id="wdm_group_wrapper">
			<input type="button" id="bulk_reinvite" value="Bulk Re-invite">
		</div> -->
		
		<?php
	}

	function my_add_button_to_enrolled_users_tab( $tab_contents, $group_id ) {
		echo(plugin_dir_path( dirname( __FILE__ ) ));
		// Check if we're on the enrolled users tab
		$tab_contents[0]['template'] = plugin_dir_path( dirname( __FILE__ ) ) . '/modules/templates/ldgr-group-users/tabs/enrolled-users-tab.template.php';
			// Add the button HTML to the tab content
			
		
		return $tab_contents;
	}


}
