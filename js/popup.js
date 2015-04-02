// Pop Up JS Loads content via Ajax

	$('.signUpNow').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/registration.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;
				
			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});



	//Thank You Pop Up (Pops  Up After Registering) 
	$('.thankYou').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/thankyou.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;

			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});



	//Update Info Popup 
	$('.updateInfo').on('click', function(event){

		event.preventDefault();

		$('.overlay').hide();
		
		$.ajax('popUpContent/updateInfo.html', {
			success: function (response) {
				$('.popBox').html(response).fadeIn();
				$('.overlay').fadeIn();
				return response;
				

			},
			error : function(request, errorType, errorMessage){
				alert('There was a problem loading the content. Please try again later.'); 
				//+ errorType + ' Message: ' + errorMessage
				return;

			},
			timeout : 20000 ,
		});
		
		console.log('ajax btn clicked');
	});



	//Thank You Pop Up (Pops  Up After Registering) 
        $('.completeProfile').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/completeProfile.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });



        //Uploaded Receipt Popup 
		$('.uploadedReceipt').on('click', function(event){

			event.preventDefault();

			$('.overlay').hide();
		
			$.ajax('popUpContent/upload.html', {
				success: function (response) {
					$('.popBox').html(response).fadeIn();
					$('.overlay').fadeIn();
					return response;
				},
				error : function(request, errorType, errorMessage){
					alert('There was a problem loading the content. Please try again later.'); 
					//+ errorType + ' Message: ' + errorMessage
					return;

				},
				timeout : 20000 ,
			});
		
		console.log('ajax btn clicked');
		});


		//Enter Address Popup 
		$('.enterAddress').on('click', function(event){

			event.preventDefault();

			$('.overlay').hide();
		
			$.ajax('popUpContent/address.html', {
				success: function (response) {
					$('.popBox').html(response).fadeIn();
					$('.overlay').fadeIn();
					return response;
				},
				error : function(request, errorType, errorMessage){
					alert('There was a problem loading the content. Please try again later.'); 
					//+ errorType + ' Message: ' + errorMessage
					return;

				},
				timeout : 20000 ,
			});
		
		console.log('ajax btn clicked');
		});


/*------------- More Info Popups --------------*/


        //$2 Coupon Event Handler
        $('.2DollarCoupon').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/2DollarCoupon.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });
        
        //$2 Coupon Event Redeem Handler
        $('.2DollarCouponRedeem').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/2DollarCouponRedeem.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

        //$5 Coupon Event Handler
        $('.5DollarCoupon').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/5DollarCoupon.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

		//$5 Coupon Redeem Event Handler
        $('.5DollarCouponRedeem').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/5DollarCouponRedeem.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

        //New Baby Kit Event Handler
        $('.newBabyKit').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/newBabyKit.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });
        
        //New Baby Kit Event Handler
        $('.newBabyKitRedeem').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/newBabyKitRedeem.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

        //Baby Kit Event Handler
        $('.babyKit').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/babyKit.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

		//Baby Kit Event Handler
        $('.babyKitRedeem').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/babyKitRedeem.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

        //Baby Bag Event Handler
        $('.babyBag').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/babyBag.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

		//Baby Bag Event Handler
        $('.babyBagRedeem').on('click', function(event){

        event.preventDefault();

        $('.overlay').hide();
        
        $.ajax('popUpContent/babyBagRedeem.html', {
            success: function (response) {
                $('.popBox').html(response).fadeIn();
                $('.overlay').fadeIn();
                return response;
                

            },
            error : function(request, errorType, errorMessage){
                alert('There was a problem loading the content. Please try again later.'); 
                //+ errorType + ' Message: ' + errorMessage
                return;

            },
            timeout : 20000 ,
        });
        
        console.log('ajax btn clicked');
        });

	//Even Column Heights 
	//check and update height on resize
    $(window).on('resize', heightCheck); 

    function heightCheck() {

    var col = $('.col');

      if ($('.spacer').is(':visible')) {

            var height = $('.getHeight').height();
            col.css('height', height);

      } else {

            col.css('height', 'auto');

      } 
      console.log('heightCheck()');
         
    }

    //close button code can be found at the bottom of the external page
	
