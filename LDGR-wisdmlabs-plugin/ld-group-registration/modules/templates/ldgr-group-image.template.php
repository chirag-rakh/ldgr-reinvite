<?php
/**
 * Group Image Template
 *
 * @var string $src         Group Image URL.
 * @var int    $width       Image width in pixels.
 * @var int    $group_id    ID of the Group.
 *
 * @since 4.2.0
 */
?>
<div class="ldgr-group-image">
	<img style="width: <?php echo esc_attr( $width ); ?>px;" src="<?php echo esc_attr( $src ); ?>"/>
</div>
