=== Group Registration for LearnDash ===
Contributors: WisdmLabs
Tags: Group Registration LearnDash, LearnDash Bulk Purchase, LearnDash multiple Courses
Requires WordPress version at least: 5.0
Tested up to: 6.1.1
LearnDash Version: 4.4.1.2
WooCommerce Version: 7.2.2
WooCommerce Subscriptions: 3.1.6
LD-WooCommerce Version: 1.9.6
License: GPL2


The Group Registration plugin for LearnDash allows Group leaders to purchase a course (or courses) on behalf of multiple students, and then enroll them to the course (or courses), by adding them as group members.

== Description ==
1. Group Leaders and Users have an option to purchase multiple copies/licenses of a single course during a single checkout.
2. A group is automatically created for the course which has been purchased in bulk, and the user making the purchase is set as the Group Leader.
3. Group Leaders have the option to enroll and unenroll multiple students for the courses they purchase, right from the front-end
4. Using the Pro Panel extension for LearnDash, Group Leaders can track user progress.
5. Admins can add multiple users as Group Leaders for a group created and can add or remove students from the group as well.

== Installation ==
Kindly note: The Group Registration plugin is an extension to LearnDash and WooCommerce. You will need to install and activate both these plugins along with the LD-WooCommerce Integration plugin.

1. Upon purchasing the Group Registration plugin, an email will be sent to the registered email id, with the download link for the plugin and a purchase receipt id. Download the plugin using the download link.
2. Go to Plugin-> Add New menu in your dashboard and click on the ‘Upload’ tab. Choose the downloaded plugin file to be uploaded and click on ‘Install Now’.
3. After the plugin has installed successfully, click on the Activate Plugin link or activate the plugin from your Plugins page.
4. An Group Registration for LearnDash License sub-menu will be created under Plugins menu in your dashboard. Click on this menu and enter your purchased product’s license key. Click on Activate License. If license is valid, an ‘Active’ status message will be displayed, else ‘Inactive’ will be displayed.
5. Upon entering a valid license key, and activating the license, you will find a ‘Course Author’ user role created, and ‘Course Creation Settings’ menu added to LearnDash settings.


== Frequently Asked Questions ==

Does the LD Group Registration plugin have any prerequisites?
Yes, you would need the WooCommerce plugin along with the LD-WooCommerce integration plugin to use the Group Registration plugin.

What will happen if my license expires?
Every purchased license is valid for one year from the date of purchase. During this time you will receive free updates and support. If the license expires, you will still be able to use the plugin, but you will not receive any support or updates.

I was using the plugin on my test site. Now, I need to activate the license on the live site. What do I do?
Don’t stress. Deactivate the license key from the staging site, by going to the Group Registration License sub-menu, and clicking on ‘Deactivate License’. You can then activate it on your live site and it should work fine.

Do you have a refund policy?
Please refer to our Terms and Conditions (https://wisdmlabs.com/terms-conditions/) to know more about our refund policy.

== Changelog ==
= 4.3.11 =
* New: We've included a new setting that allows the group name to be auto-filled. 
* Tweak: The default activation status of group code after creation is now active.
* Fix: Inconsistencies in the group name field have now been addressed.
* Fix: Now, when we add a user from the main group to a sub group he is transferred from main group to the subgroup.
* Fix: Minor bug fixes.
= 4.3.10 =
* New: In the group codes area, a new "Copy URL" capability has been added; you can now copy the URL and the group code registration page will automatically fill in the input field with the group code.
* New: We have added a new button "Add more seats" on the groups dashboard that will take you to the specific product of the group to increase the seats.
* New: Added HelpScout integration with LDGR now you can connect directly to our support team from admin panel itself.
* Tweak: Fixed the Email validation for new domains.
* Tweak: Increased the character limit of course grid title from 20 to 50 characters.
* Tweak: Now the back to groups button on group dash board will be hidden if the user is owner of only one group.
= 4.3.9 =
* New: Added setting to hide courses associated with the group product on product page.
* New: Added setting to hide the group information sticky footer bar on the product page.
* Update: Updated the group product sticky footer bar to display final group discounted price.
* Fix: Search and pagination fixes for filtered results on groups dashboard.
= 4.3.8 =
* Fix: Fixed total seats and seats left count for groups
* Fix: Fixed addition and removal of group seats from group edit page.
* Fix: Updated group seats calculation logic to consider users enrolled in group by admin from backend.
= 4.3.7 =
* Fix: Fixed issue with seat count not updating for groups created from backend.
= 4.3.6 =
* Update: Updated class methods to make singleton class controller.
* Fix: Fixed minor UI and styling issues.
* Fix: Updated JS validations for sub group creation/updation.
* Update: Updated class methods to have no HTML and moved them to templates.
= 4.3.5 =
* Fix: Fixed freeze first input issue for configuring custom fields.
= 4.3.4 =
* New Feature: Added dynamic field options for user registration through CSV, add new user form and group code registration form.
= 4.3.3 =
* Fix: Added compatibility fixes for variable products.

= 4.3.2 =
* Fix: Fixed subscription warnings thrown for subscriptions that do not have a parent order.
* Fix: Fixed product validation being thrown for resubscription/renewals.
* Fix: Fixed validation bug restricting group creation on group subscription purchases.
* Fix: Fixed loader and button styling on the groups dashboard.
* Fix: Translation fixes for group strings
* Fix: Updated total seat count on groups created from backend.
* Fix: Fixed loader and button styling on the groups dashboard.
* Fix: Fixed compatibility for simple variable products
* Fix: Fix to now show warning for multisite when adding existing users to group.
* Update: Updated group image template to pass group id as a parameter and added common function to fetch variation ids from a product.

= 4.3.1 =
Fix: #76974 Fixed related to compatibility with PHP 8+.
Fix: Header string formating in product page sticky footer.

= 4.3.0 =
New Feature: Additional groups option for group purchase.
Fix: #63217 Fixed price for unlimited members field accepts negative numbers as input.
Fix: #75102 Fixed not able to input value more than 100 for fixed bulk discounts.
Fix: #76556 Fixed infinite loop when trying to upload CSV with users more than group limit.

= 4.2.3 =
Fix: #73537 Fixed loading icon issue on reports screen.
Fix: #73102 Fixed sub-group user enrollment issue which removed other users from the group.
Fix: #72994 Fixed rewards column being added multiple times in reports table.
Fix: #72782 Fixed subscription notice on expiration on groups dashboard.
Fix: Updated template functions to properly filter arguments.
Fix: #72731 Fixed group code registration form displaying multiple times on the page.
Fix: #71692 Added fixes to hide unlimited seats checkbox if individual option chosen on product page.
Update: #72996 Updated hooks to filter localized variables and skip group creation process on order completion.

= 4.2.2 =
Fix: #70158 Fixed hardcoded groups dashboard tab ids issue.
Fix: #69105 Select 2 library UI fixes on sub-group creation/edit page.
Fix: #70129 Nonce verification for group user removal.
Fix: #70662 Added no reports text for empty group course reports.
Fix: #71413 Fixed fatal error when trying to upload users via CSV.
New Feature: #70591 Enforce minimum quantity for group products.
New Feature: #70680 New settings to set banner and accent color for the groups dashboard.
New Feature: #70694 New settings to set default image for group and course to be used on the groups dashboard.
Update: #70683 Group code registration form design updates.
Update: #71598 Hide Enroll new user button on groups dashboard if no seats remaining.
Update: #70219 Added new filter hooks for the sub-groups module.
Update: #70276 Updated sub-groups design when listing groups on groups dashboard.

= 4.2.1 =
Fix: #69670 Parent seat limit reducing even for the normal sub-group update
Fix: #69670 Sub-group leaders not able to see groups on the groups dashboard
Fix: Lesson count in dashboard reports.
Fix: #69531 Product ID was called incorrectly.
Fix: GDPR links adding slashes.
Fix: #69531 Missing translation strings.
Fix: Groups dashboard not displaying sub-groups
Fix: Group leader privilege update to allow image uploads for group image update.
Fix: No group code message fix when adding new group codes from groups dashboard.
Update: Add new user modal to only show 1 user upload box instead of 2.

= 4.2.0 =
New Feature: New and improved designs for the groups dashboard.
New Feature: Sub-groups feature on the groups dashboard.
New Feature: Bulk discounts for group purchases by woocommerce.
Update: Added product setup wizard
= 4.1.5 =
Fix: Removed display animation for product single page causing issues with quantity box.
Fix: Fixed escaping slashes for single quotes when entering group names.
Fix: Removed utf8 encoding while reading CSV data during CSV uploads.
Update: Added new filter hooks for group course list and group code form validation.
Update: Updated plugin language files.
= 4.1.4 =
Update: Updated quantity box animation to simple transition.
Update: Updated seat count updation for unlimited groups.
Update: Updated scrolling animation for notifications
Update: Added additional hidden order item meta to track group purchases to avoid translation conflicts.
Update: Added a new filter for tab users and fixed indentation issues.
Fix: Fixed date format issue causing wrong date displayed for group codes and also updated mailing to allow additional filters.
= 4.1.3 =
New Feature: Added new settings to support GDPR for the group code registration form.
Fix: Fixed group code date validation to check for start of the day for the from and end of day for the to date.
Fix: Styling fixes for group registration notifications.
Fix: Updated group code notification animations to cancel current animation if another is queued
Fix: Fix to clear group code registration form after successful submission.
= 4.1.2 =
Update: Updated the 'ldgr_send_group_mails' function to take in additional parameters to identify type of email and get related group ID.
Update: Updated report class template callbacks from include to ldgr_get_template and added filter to customize ajax course report data.
Update: Added a fix to support the quick view feature from the neve theme.
Update: Updated 'ldgr_get_template' function to add a new filter for arguments and updated action hooks arguments.
Update: Updated group name feature to work with package option.
Update: Added new action hook to allow adding custom fields before the group code field.
Fix: Fixed the infinite loading icon on group reports page while loading student statistics.
Fix: Fixed a bug with a static recaptcha test key being used instead of the configured one causing recaptcha issues.
Fix: Fixed an admin privilege check for sending reinvite emails.
Fix: Fixed group code image and updated the reports image for mobile view.

= 4.1.1 =
Update: Select whether to redirect users enrolled from group code to a page or display a custom message.
Fix: Removed the default seat limit when creating a group code instead added a filter to it.

= 4.1.0 =
New Feature : Group Enrollment Code - Users can add themselves to the groups using enrollment code. Secure, easy to create and manage with expiry dates to the code.
New Feature : A new [ldgr-group-code-registration-form] shortcode to enroll new as well as existing users using group code. A new user can register on the same page using the email address.
New Feature : An option to allow unlimited seats in the group.
Update: A placeholder to use in the registration email notification to reset the password.
Fix : An issue with default or empty emails being set for emails configured in group registration email settings.
Fix : An issue with individual and group checkbox selected for variable products.
Tweak : Styling improvements in the group management page.
Tweak : A toggle to enable/disable group registration email notifications.

= 4.0.3-beta =
Fix : Added fixes for group emails settings for reinvite email subject and group removal email body.
Fix : Fixed admin privileges for performing group registration functions.

= 4.0.2 =
Tweak : Added additional hooks and filters to the user registration and enrollment flow.

= 4.0.1 =
Tweak : Implemented ajax based batch processing for bulk user csv uploads.
Tweak : Added additional filters hooks.
Fix : Group name support for variable products.

= 4.0 =
Update : Updated the entire plugin structure and also updated coding standards to WordPress.
Update : Optimized the bulk user upload process on group registration page.

= 3.8.3 =
New Feature : Added functionality for bulk user removal request accept and remove for admin
Fixes : Updated survey form code and email setting templates and placeholders

= 3.8.2 =
New Feature : Custom group name feature with compatibility with some themes.
New Feature : Ajax based bulk student removal
Update : Updated 'wdm_modify_total_number_of_registrations' hook for additional parameters for order ID.
Update : Updated 'wdm_change_group_quantity' hook for additional parameters for order item details.
Fixes : Added fixes for hidden group name and description field on group edit page on admin end
Fixes : Code optimization for checking empty course lists fetches.


= 3.8.1 =
New Feature : Ajax based user CSV upload
New Feature : Show detailed course progress report to group leaders
New Feature : Settings in the backend to redirect users on certain pages after login. Role based login redirection.
Update : Added default messages in email settings
Update : Added settings link on plugins page
Update : Improve user removal alert message
Update : Updated the group registration settings on woocommerce product edit page.
Fixes : Changed text ‘select product’ word to Group’ on leader page
Fixes : Remove uppercase transform for header tags

= 3.8.0 =
New Feature : Display course wise report of group users on Group Registration Page
Support : Added support for resubscribe when a group leader cancels and resubscribes.

= 3.7.1 =
Bug Fix : For the Paid Course when subscription gets activated Group Leader gets access of courses.
Minor Fixes

= 3.7 =
Update : New Layout with responsiveness
Fixes : MAC users not able to work with CSV enrollment in group

= 3.6.4 =
Minor fixes related license
Update : Security Update for CSV enrollment
Bug Fix : Related Course selection gets removed on Product save
Update : Add filter to display the Remove button to Group Leader for user

= 3.6.3 =
Minor Fixes
Bug Fix : Enroll user into course(s) for variable product for individual purchase
New Feature : Allow Group Leader to reinvite Group Users
New Feature : Display Courses associated with Group on Group Registration Page
Update : POT File
Update : Compatible with LearnDash WooCommerce Integration version 1.5.0

= 3.6.2 =
Minor Fixes
Bug Fix : For variable products Group Leader was able to access the course even if he has not paid for it.
Compatibility of License code as per GDPR

= 3.6.1 =
Minor Fixes

= 3.6.0 =
Update Feature : Added setting for admin to avail the group's courses to Group Leader
Update Feature : Added setting for admin to select default option on Product Page for Group Registration
New Feature : Fixed Price packages for Group Purchase (WooCommerce Only
Compatibility : Make compatible with WooCommerce Variable Product type
Minor Fixes
Update : .pot files


= 3.5.2 =
Improvement : Updated .pot file
Minor Fixes

= 3.5.1 =
Improvement : Make Group Registration page Responsive
Update : Added all Group Registration setting under one page
Update : Change the sequence of parameters for the 'wdm_group_registration_label_below_product_name' filter
Update : Added missing strings for translation ready in /languages folder
Minor Fixes

= 3.5.0 =
New Feature : Modify email templates from learndash admin menu

= 3.4.0 =
New Feature : Restrict Product Quantity if Purchased for Single User
New Feature : Allow Group Leader to Remove User without Admin Approval
New Feature : Fix the Group Limit on User Removal
Fixes : Multiple Subscription Issue

= 3.3.0 =

Improvement: Admin can add multiple group leaders and these group leaders will be able to access the group registration page.

= 3.2.0 =
Bug Fixes

= 3.1.1 =

Bug Fix: Resolved issue with function check for subscriptions function

= 3.1.0 =
Compatibility : Compatible with WooCommerce Zapier
Bug Fix: Resolved issue with subscription renewals

= 3.0.0 =
New Feature : Group Purchase for WooCommerce Subscription Products
Improvement: WordPress 4.8 compatible

= 2.1.0 =
Compatibility: Compatible with LearnDash 2.4.2 & WooCommerce 3.0.1

= 2.0.2 =

Improvement: Updated License Integration
Bug Fix: Resolved plugin dependency issue

= 2.0.1 =
Bug Fixes

= 2.0.0 =
Made plugin integration with EDD plugin.

= 1.2.0 =
Made plugin compatible with LearnDash version 2.2.1.1.
Added new feature for enabling group registration checkbox on frontend.

= 1.0.1 =
PSR2 Standards compatible and code optimization to pass through all PHPMD checks.

= 1.0.0 =
*Plugin Released

== Upgrade Notice ==

= 4.1.0 =
<strong>Notice: </strong>We will be removing support for Easy Digital Downloads from the next update ( i.e. version 4.2.0 )
