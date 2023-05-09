jQuery(document).on('click', '#bulk_reinvite', function(e) {
        e.preventDefault();

        if (jQuery('#wdm_group tbody input[type="checkbox"]:checked').length == 0) {
            alert(wdm_data.no_user_selected);
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
