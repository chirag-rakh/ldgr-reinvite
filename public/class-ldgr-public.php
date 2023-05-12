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


	function my_add_button_to_enrolled_users_tab( $tab_contents, $group_id ) {
		
		// Assign the new path for template override
		if(in_array("enrolled-users", $tab_contents[0]))
		$tab_contents[0]['template'] = plugin_dir_path( dirname( __FILE__ ) ) . '/modules/templates/ldgr-group-users/tabs/enrolled-users-tab.template.php';
		
		return $tab_contents;
	}

	public function handle_bulk_reinvite() {
		
		$return    = array();
		$user_ids  = filter_input( INPUT_POST, 'user_id', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
		$group_ids = filter_input( INPUT_POST, 'group_id', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );
		
		$success = "Re-invitation mail has been sent successfully to:";
		$failed = "Failed to re-invite:";

		if ( ! is_array( $user_ids ) || empty( $user_ids ) ) {
			echo json_encode( array( 'error' => __( 'Oops Something went wrong', 'wdm_ld_group' ) ) );
			die();
		}
		
		
		foreach ( $user_ids as $key => $user_id ) {
			
			$return[$user_id] = $this->send_reinvite_mail($user_id, $group_ids[ $key ]);
			if($return[$user_id] == true ){
				$user_data   = get_user_by( 'id', $user_id );
				$success_msg .=  "\n ".$user_data->first_name;
			}
			elseif($return[$user_id] == false ){
				$user_data   = get_user_by( 'id', $user_id );
				$failed_msg .=  "\n ".$user_data->first_name;
			}
		}
		if(empty($success_msg)){
			$success = "";
		}
		if(empty($failed_msg)){
			$failed = "";
		}

		echo json_encode( array( 'success' => "$success $success_msg \n $failed $failed_msg ") );
			die();
	}

	public function send_reinvite_mail($user_ids, $group_ids) {

		if ( is_user_logged_in() ) {
			if ( learndash_is_group_leader_user( get_current_user_id() ) || learndash_is_group_leader_user( get_current_user_id() ) || current_user_can( 'manage_options' ) ) {
				$admin_group_ids = learndash_get_administrators_group_ids( get_current_user_id() );
				$user_id         = $user_ids;
				$group_id        = $group_ids;
				
				if ( ! in_array( $group_id, $admin_group_ids ) ) {
					echo json_encode( array( 'error' => __( 'You are not the owner of this group', 'wdm_ld_group' ) ) );
					die();
				}
				if ( '' != $user_id && '' != $group_id ) {
					// Fetch enable/disable email setting
					
					$wdm_gr_reinvite_enable = get_option( 'wdm_gr_reinvite_enable' );
					if ( apply_filters( 'wdm_send_reinvite_email_status', true, $group_id ) && 'off' != $wdm_gr_reinvite_enable ) {
						$user_data   = get_user_by( 'id', $user_id );
						$group_title = get_the_title( $group_id );
						$leader_data = get_user_by( 'id', get_current_user_id() );

						

						$user_login = $user_data->user_login;

						// Calculation for Reset Password link.
						global $wpdb;
						$key       = get_password_reset_key( $user_data );
						$reset_arg = array(
							'action' => 'rp',
							'key'    => $key,
							'login'  => rawurlencode( $user_login ),
						);

						$reset_password_link = add_query_arg( $reset_arg, network_site_url( 'wp-login.php', 'login' ) );

						// fetch enrolled courses.
						$courses         = learndash_group_enrolled_courses( $group_id, true );
						$enrolled_course = array();
						foreach ( $courses as $key => $value ) {
							$enrolled_course[] = get_the_title( $value );
							$url               = get_permalink( $value );
							unset( $key );
						}

						

						$tsub = get_option( 'wdm-reinvite-sub' );
						if ( empty( $tsub ) ) {
							$tsub = WDM_REINVITE_SUB;
						}
						$subject = stripslashes( $tsub );
						$subject = str_replace( '{group_title}', get_the_title( $group_id ), $subject );
						$subject = str_replace( '{site_name}', get_bloginfo(), $subject );
						$subject = str_replace( '{user_first_name}', ucfirst( $user_data->first_name ), $subject );
						$subject = str_replace( '{user_last_name}', ucfirst( $user_data->last_name ), $subject );
						$subject = str_replace( '{user_email}', $user_data->user_email, $subject );
						$subject = str_replace( '{reset_password}', $reset_password_link, $subject );
						//$subject = str_replace( '{course_list}', $this->get_course_list_html( $enrolled_course, $group_id, $user_id ), $subject );
						$subject = str_replace( '{group_leader_name}', ucfirst( strtolower( $leader_data->first_name ) ) . ' ' . ucfirst( strtolower( $leader_data->last_name ) ), $subject );
						$subject = str_replace( '{login_url}', wp_login_url(), $subject );
						$subject = apply_filters( 'wdm_reinvite_email_subject', $subject, $group_id, get_current_user_id(), $user_id );
						
						$tbody = get_option( 'wdm-reinvite-body' );
						if ( empty( $tbody ) ) {
							$tbody = WDM_REINVITE_BODY;
						}

						

						$body = stripslashes( $tbody );
						// $body = $reset_password_link;
						$body = str_replace( '{group_title}', get_the_title( $group_id ), $body );
						$body = str_replace( '{site_name}', get_bloginfo(), $body );
						$body = str_replace( '{user_first_name}', ucfirst( $user_data->first_name ), $body );
						$body = str_replace( '{user_last_name}', ucfirst( $user_data->last_name ), $body );
						$body = str_replace( '{user_email}', $user_data->user_email, $body );
						$body = str_replace( '{reset_password}', $reset_password_link, $body );
						//$body = str_replace( '{course_list}', $this->get_course_list_html( $enrolled_course, $group_id, $user_id ), $body );
						$body = str_replace( '{group_leader_name}', ucfirst( strtolower( $leader_data->first_name ) ) . ' ' . ucfirst( strtolower( $leader_data->last_name ) ), $body );
						$body = str_replace( '{login_url}', wp_login_url(), $body );

						$body = apply_filters( 'wdm_reinvite_email_body', $body, $group_id, get_current_user_id(), $user_id );

						ldgr_send_group_mails(
							$user_data->user_email,
							$subject,
							$body,
							array(),
							array(),
							array(
								'email_type' => 'WDM_REINVITE_BODY',
								'group_id'   => $group_id,
							)
						);
						

						/* echo json_encode(
							array(
								'success' => __( 'Re Invitation mail has been sent successfully.', 'wdm_ld_group' ),
							)
						); */
						return true;
					}
				} else {
					/* echo json_encode( array( 'error' => __( 'Oops Something went wrong', 'wdm_ld_group' ) ) );
					die(); */
					return false;
				}
			} else {
				/* echo json_encode( array( 'error' => __( "You don't have privilege to do this action", 'wdm_ld_group' ) ) ); */
				return false;
			}
		} else {
			/* echo json_encode( array( 'error' => __( "You don't have privilege to do this action", 'wdm_ld_group' ) ) ); */
			return false;
		}
	}


}
