function findRide() {
	$(function() {
		$('#description').css('display', 'none');
		$('#container').animate({margin:'4% 20% 0 20%'}, 800);
		$('#container').append('<form>Desired Pickup Time<br/><input type="text" name="time"><br/><br/>' +
			'Convention Code<br/><input type="text" name="code"><br/><br/>' +
			'Airport<br/><input type="text" name="airport"><br/><br/>' +
			'Flight Number<br/><input type="text" name="flightno"><br/><br/>');
	});
}
