

jQuery('body').on('click', '#bulk_reinvite', function(e) {
        e.preventDefault();

        if (jQuery('#wdm_group tbody input[type="checkbox"]:checked').length == 0) {
            alert(wdm_data.no_user_selected);
            return false;
        }

        jQuery('#wdm_group tbody input[type="checkbox"]:checked').each(function(){
            if (jQuery(this).closest('td').siblings('td.ldgr-actions').find('a').hasClass('request_sent')) {
                return;
            }

            // jQuery(this).closest('td.select_action').siblings('td.ldgr-actions').append('<img id="wdm_ajax_loader" src="' + wdm_data.ajax_loader + '">');
            jQuery(this).closest('td.select_action').siblings('td.ldgr-actions .dashicons-update').removeClass('hide');

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
                user_ids: user_ids,
                group_ids: group_ids
            },
            timeout: 30000,
            success: function(response) {
                jQuery.each(response, function(id, value) {
                    jQuery.each(value, function(status, message) {
                        switch (status) {
                            case 'success':
                                snackbar(message);
                                if(wdm_data.admin_approve == 'on'){
                                    jQuery('#wdm_search_submit').submit();                                }
                                else{
                                    jQuery('#wdm_group tr td.ldgr-actions a[data-user_id = "'+id+'"].wdm_remove').addClass('request_sent');
                                    jQuery('#wdm_group tr td.ldgr-actions a[data-user_id = "'+id+'"].wdm_remove').text(wdm_data.request_sent);
                                    // jQuery('#wdm_group tr td.ldgr-actions a[data-user_id = "'+id+'"].wdm_remove').siblings('#wdm_ajax_loader').remove();
                                    jQuery('#wdm_group tr td.ldgr-actions a[data-user_id = "'+id+'"].wdm_remove').siblings('.dashicons-update').addClass('hide');
                                    jQuery('#wdm_group tr td.ldgr-actions a[data-user_id = "'+id+'"].wdm_remove').removeClass('wdm_remove');
                                    jQuery('#wdm_group tr td.select_action input[data-user_id = "'+id+'"]').trigger('click');
                                }
                                break;
                            case 'error':
                                snackbar(message);
                                // jQuery('#wdm_group tr td.ldgr-actions a[data-user_id = "'+id+'"].wdm_remove').siblings('#wdm_ajax_loader').remove();
                                jQuery('#wdm_group tr td.ldgr-actions a[data-user_id = "'+id+'"].wdm_remove').siblings('.dashicons-update').addClass('hide');
                                break;
                        }
                    });
                });
                wdm_datatable.draw(false);
                jQuery('#wdm_group thead input[name="select_all"]').attr('checked', false);
            }
        });

    }); 