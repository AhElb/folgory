













$(document).ready(function(){

var owl = $(".owl-carousel");
 
  owl.owlCarousel({

     items:4,
    loop:true,
    margin:10,
    autoPlay:2000,
    navigation : false,
    pagination :false,
    RTL:true,
    center:true,


          responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:5,
            
        }
    },





  });




  $('.open-links').click(function() {

  	$(".dash-link").toggleClass("open-dash");
  	 $('.open-links').toggleClass("btn-60",1000 );
  	  $('.open-links .fas').toggleClass("fa-chevron-left  fa-chevron-right",1000 );



});





  $('.withdraw').click(function() {


  	  	  	  	$(".Withdraw-div").removeClass("nodisplay");

  	$(".display-").addClass("nodisplay");
  	  	$(".history-active").removeClass("history-active");
  	  	  	  	$(".display-").removeClass("display-");




  	$(this).addClass('history-active');
  		$('.Withdraw-div').addClass('display-');
});




  $('.cancelled').click(function() {


  	  	  	  	$(".cancelled-div").removeClass("nodisplay");

  	$(".display-").addClass("nodisplay");
  	  	$(".history-active").removeClass("history-active");
  	  	  	  	$(".display-").removeClass("display-");




  	$(this).addClass('history-active');
  		$('.cancelled-div').addClass('display-');
});



 $('.complete').click(function() {


  	  	  	  	$(".complete-div").removeClass("nodisplay");

  	$(".display-").addClass("nodisplay");
  	  	$(".history-active").removeClass("history-active");
  	  	  	  	$(".display-").removeClass("display-");




  	$(this).addClass('history-active');
  		$('.complete-div').addClass('display-');
});





 $('.mining').click(function() {


  	  	  	  	$(".mining-div").removeClass("nodisplay");

  	$(".display-").addClass("nodisplay");
  	  	$(".history-active").removeClass("history-active");
  	  	  	  	$(".display-").removeClass("display-");




  	$(this).addClass('history-active');
  		$('.mining-div').addClass('display-');
});





});







 var app = new Vue({
  el: '#app',
  data: {
coins:[



				{ 
				logo:"../img/btc.png",
				name:"BTC",
				price:'45000',
				value:"+4.2",
				market: "../img/ADABUSD.svg",


				},

				{ 
				logo:"../img/3a8c9fe6-2a76-4ace-aa07-415d994de6f0.png",
				name:"ETH",
				price:'3280',
				value:"+1.2",
				market: "../img/ADABUSD.svg",


				},

				{ 
				logo:"../img/fil.png",
				name:"FIL",
				price:'200',
				value:"-0.2",
				market: "../img/ADABUSD.svg",


				},

					{ 
				logo:"../img/ada.png",
				name:"ADA",
				price:'50',
				value:"-0.2",
				market: "../img/ADABUSD.svg",


				},






],





  },
});






 var app = new Vue({
  el: '#main_app',
  data: {

  	top:[

  	{
  		name:'BTC',
  		price:"3258.20",
  		amount:"-3.05"
  	},

  	{
  		name:'ETH',
  		price:"4008.20",
  		amount:"+1.05"
  	},
  		{
  		name:'FlI',
  		price:"4008.20",
  		amount:"-1.05"
  	},
 	{
  		name:'BTC',
  		price:"3258.20",
  		amount:"-3.05"
  	},
  	 	{
  		name:'BTC',
  		price:"3258.20",
  		amount:"-3.05"
  	},

  	{
  		name:'ETH',
  		price:"4008.20",
  		amount:"+1.05"
  	},
  		{
  		name:'FlI',
  		price:"4008.20",
  		amount:"-1.05"
  	},

  	 	{
  		name:'BTC',
  		price:"3258.20",
  		amount:"-3.05"
  	},

  	{
  		name:'ETH',
  		price:"4008.20",
  		amount:"+1.05"
  	},
  		{
  		name:'FlI',
  		price:"4008.20",
  		amount:"-1.05"
  	},




  	]

  },



});




 var app = new Vue({
  el: '#trading',
  data: {

  	coins:[

  	{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},


  		{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},




  		{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},


  		{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},

{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},

{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},


{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},


{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},


{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},


{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},


{

		logo:'../img/btc.png',
		kicker:'btc',
		name:'Bitcoin',
		crypto:'0.00000000',
		balance:'€ 0.00',


  	},







  	],


  },



});



  var app = new Vue({
  el: '#convert',
  data: {

  	ticker:['BTC','ETH','ZRX','LTC','EOS','BCH'],
  	value:"",
  	amount:"",

  	 ticker2:['','ETH','ZRX','LTC','EOS','BCH'],


  },
});












