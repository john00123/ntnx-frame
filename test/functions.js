( function( $ ) {

	// Enable menu toggle for small screens
	( function() {
		var nav = $( '#site-navigation' ), button, menu;
		if ( ! nav )
			return;

		button = nav.find( '.menu-toggle' );
		menu   = nav.find( '.nav-menu' );
		if ( ! button )
			return;

		
		$( '.menu-toggle' ).on( 'click.simpledesign', function() {
			nav.toggleClass( 'toggled-on' );
		} );
		
	} )();

} )( jQuery );