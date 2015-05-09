SC.initialize({
  client_id: 'ece5c17538e1b2e30cb10d327154cff0',
  // redirect_uri: 'REDIRECT_URL'
});

// initiate auth popup
SC.connect(function() {
  SC.get('/me', function(me) { 
    alert('Hello, ' + me.username); 
  });
});