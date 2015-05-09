SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

// initiate auth popup
     SC.get('/tracks', { genres: 'punk'}, function(tracks) {
    console.log(tracks);
});