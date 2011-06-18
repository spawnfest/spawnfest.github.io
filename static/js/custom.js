$(document).ready(function() {
		      var today = new Date();
		      var timeout = new Date(2011,6,9);
		      var diff = timeout - today;
		      var days = Math.round(diff / 86400000);
		      if (days >= 0) {
			  $("div#remainingDays span").html(days);
		      } else {
			  
		      }
});