function divFunction(){$(document).on('click','.send_form', function(){var input_blanter = document.getElementById('wa_select'); var walink = 'https://web.whatsapp.com/send', phone = '62895341417438', walink2 = 'Hai admin, saya *<?php echo html_escape($this->user->data['us_name']);?>*. ', text_yes = 'Pesan Terkirim.', text_no = 'Silakan pilih topik permasalahan.'; if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { var walink = 'whatsapp://send'; } if("" != input_blanter.value){var input_select1 = $("#wa_select :selected").text(), input_name1 = $("#wa_name").val(), input_email1 = $("#wa_email").val(), input_number1 = $("#wa_number").val(), input_url1 = $("#wa_url").val(), input_textarea1 = $("#wa_textarea").val(); var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' + 'Tolong cek pesanan ' + '*' + input_number1 + '*' + '.%0A%0A' + input_select1 + '.%0A%0A' + '*💬* : ' + input_textarea1 + '%0A%0A' + 'Ditunggu min, terima kasih.%0A%0A' + 'Rujukan ' + input_url1; window.open(blanter_whatsapp,'_blank');document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';}else{document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';}});}
