				jQuery(document).ready(function($){
					jQuery('#panjang-vol_widget-2, #lebar-vol_widget-2, #tinggi-vol_widget-2').keyup(function(){
						var panjang = jQuery('#panjang-vol_widget-2').val();
						var lebar = jQuery('#lebar-vol_widget-2').val();
						var tinggi = jQuery('#tinggi-vol_widget-2').val();
						
						if(panjang == ''){
							panjang = 0;
						}else{
							panjang = jQuery('#panjang-vol_widget-2').val();
						}
						
						if(lebar == ''){
							lebar = 0;
						}else{
							lebar = jQuery('#lebar-vol_widget-2').val();
						}
						
						if(tinggi == ''){
							tinggi = 0;
						}else{
							tinggi = jQuery('#tinggi-vol_widget-2').val();
						}
						
						var hasil = panjang*lebar*tinggi;
						
						jQuery('#hasil-vol_widget-2').val(hasil.toFixed(2));					
						
					});
					
					
				});
			