jQuery(document).ready(function($) {	
    $('*:first-child').addClass('first-child');
    $('*:last-child').addClass('last-child');
    $('*:nth-child(even)').addClass('even');
    $('*:nth-child(odd)').addClass('odd');
	
	var numwidgets = $('#footer-widgets div.widget').length;
	$('#footer-widgets').addClass('cols-'+numwidgets);
	$.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
          this.trigger(ev);
          return el.apply(this, arguments);
        };
      });

	$('.nav-footer ul.menu>li').after(function(){
		if(!$(this).hasClass('last-child') && $(this).hasClass('menu-item') && $(this).css('display')!='none'){
			return '<li class="separator">|</li>';
		}
	});
	$('form.gplaceholder .gfield_label').each(function(){
	    var placeholder = $(this).html();
	    if(!$(this).next('.ginput_container').hasClass('ginput_container_radio')){
    	    $(this).addClass('hidden');
            $(this).next('.ginput_container').find('input').attr('placeholder',placeholder.replace(/(<([^>]+)>)/ig,""));
            $(this).next('.ginput_container').find('select option.first-child').html(placeholder.replace(/(<([^>]+)>)/ig,""));
        }
	});
	if($( window ).width() > 480){
        $(".site-header").sticky();
    } else {
        $("nav.nav-primary").sticky({});
    }
    
    $('a').not('[href*="mailto:"]').each(function () {
        var isInternalLink = new RegExp('/' + window.location.host + '/');
        if ( ! isInternalLink.test(this.href) ) {
            $(this).attr('target', '_blank');
        }
    });

});
