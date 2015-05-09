SC.initialize({
  client_id: 'ece5c17538e1b2e30cb10d327154cff0',
});

// initiate auth popup
SC.connect(function() {
     SC.get('/tracks', { genres: 'punk'}, function(tracks) {
    console.log(tracks);
  });
});