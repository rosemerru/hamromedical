if (window.addthis_product === undefined) { window.addthis_product = "wpf"; } if (window.wp_product_version === undefined) { window.wp_product_version = "wpf-4.1.1"; } if (window.wp_blog_version === undefined) { window.wp_blog_version = "4.8.1"; } if (window.addthis_share === undefined) { window.addthis_share = {}; } if (window.addthis_config === undefined) { window.addthis_config = {"data_track_clickback":true,"ui_atversion":300}; } if (window.addthis_plugin_info === undefined) { window.addthis_plugin_info = {"info_status":"enabled","cms_name":"WordPress","plugin_name":"Follow Buttons by AddThis","plugin_version":"4.1.1","plugin_mode":"AddThis","anonymous_profile_id":"wp-df267246c5620bc5b8aa6798fc5d58f4","page_info":{"template":false}}; } 
                    (function() {
                      var first_load_interval_id = setInterval(function () {
                        if (typeof window.addthis !== 'undefined') {
                          window.clearInterval(first_load_interval_id);
                          if (typeof window.addthis_layers !== 'undefined' && Object.getOwnPropertyNames(window.addthis_layers).length > 0) {
                            window.addthis.layers(window.addthis_layers);
                          }
                          if (Array.isArray(window.addthis_layers_tools)) {
                            for (i = 0; i < window.addthis_layers_tools.length; i++) {
                              window.addthis.layers(window.addthis_layers_tools[i]);
                            }
                          }
                        }
                     },1000)
                    }());
                