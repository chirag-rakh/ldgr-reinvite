jQuery(document).on('click', '#bulk_reinvite', function(e) {
        e.preventDefault();

        jQuery(this).parent().append('<img id="wdm_ajax_loader" src="' + wdm_data.ajax_loader + '">');

        if (jQuery('#wdm_group tbody input[type="checkbox"]:checked').length == 0) {
            alert(wdm_data.no_user_selected);
            jQuery('#wdm_ajax_loader').remove();
            return false;
        }

		var user_ids = [];
		var group_ids = [];
	

        jQuery('#wdm_group tbody input[type="checkbox"]:checked').each(function(){
			
            user_ids.push(jQuery(this).data('user_id'));
            group_ids.push(jQuery(this).data('group_id'));
            
        });
		

        if (user_ids.length === 0) {
            return false;
        }

        if (group_ids.length === 0) {
            return false;
        }
        

        jQuery.ajax({
            type: "post",
            dataType: 'json',
            url: wdm_data.ajaxurl,
            data: {
                action: 'bulk_reinvite',
                user_id: user_ids,
                group_id: group_ids
            },
            timeout: 30000,
           success: function(response) {
                    jQuery.each(response, function(j, k) {
                        switch (j) {
                            case 'success':
                                alert(k);
                                jQuery('#wdm_ajax_loader').remove();
                                break;
                            case 'error':
                                alert(k);
                                jQuery('#wdm_ajax_loader').remove();
                                break;
                        }
                    });
                }
        });

    }); 

jQuery(document).on('click', '.enroll-new-user', function() {
        jQuery('#ldgr-enroll-users-popup').css('display', 'flex');

});


jQuery(document).on('click', '.upload-csv-cancel', function() {    
    jQuery('#ldgr-enroll-users-popup').hide();

});


jQuery(document).on('click', '.add-usr-cancel', function() {    
    jQuery('#ldgr-enroll-users-popup').hide();

});


jQuery(document).on('click', '.ldgr-icon-Close', function() {    
    jQuery('#ldgr-enroll-users-popup').hide();

});