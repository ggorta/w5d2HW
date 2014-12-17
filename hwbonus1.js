var http = require("http");
var msg ="";
var Server = http.createServer(function(request,respond){
  var path = request.url;
  if(path === "/artists"){
    msg = "<html><body><h1>Artists</h1><ul><li><a href='http://localhost:2000/artists/blur'>Blur</a></li><li><a href='http://localhost:2000/artists/pulp'>Pulp</a></li><li><a href='http://localhost:2000/artists/supergrass'>Supergrass</a></li></ul></body></html>"
  }
  else if(path === "/artists/blur"){
    msg = "<html><body><h1>Blur Albums</h1><ul><li><a href='http://localhost:2000/artists/blur/blur'>Blur</a></li><li><a href='http://localhost:2000/artists/blur/parklife'>Parklife</a></li></ul><p><a href='http://localhost:2000/artists'>Home</a></p></body></html>"
  }
  else if(path === "/artists/pulp"){
    msg = "<html><body><h1>Pulp Albums</h1><ul><li><a href='http://localhost:2000/artists/pulp/different_class'>Different Class</a></li><li><a href='http://localhost:2000/artists/pulp/his_n_hers'>His 'n' Hers</a></li></ul><p><a href='http://localhost:2000/artists'>Home</a></p></body></html>"
  }
  else if(path === "/artists/supergrass"){
    msg = "<html><body><h1>Supergrass Albums</h1><ul><li><a href='http://localhost:2000/artists/supergrass/i_should_coco'>I Should Coco</a></li><li><a href='http://localhost:2000/artists/supergrass/in_it_for_the_money'>In It for the Money</a></li></ul><p><a href='http://localhost:2000/artists'>Home</a></p></body></html>"
  }
  else if(path === "/artists/blur/blur"){
    msg = "<html><body><h1>Blur Tracks</h1><ul><li>Beetlebum</li><li>M.O.R.</li><li>Song 2</li></ul><p><a href='http://localhost:2000/artists'>Home</a> *** <a href='http://localhost:2000/artists/blur'>Blur Albums</a></p></body></html>"
  }
  else if(path === "/artists/blur/parklife"){
    msg = "<html><body><h1>Parklife Tracks</h1><ul><li>Girls &amp; Boys</li><li>Magic America</li><li>Parklife</li></ul><p><a href='http://localhost:2000/artists'>Home</a> *** <a href='http://localhost:2000/artists/blur'>Blur Albums</a></p></body></html>"
  }
  else if(path === "/artists/pulp/different_class"){
    msg = "<html><body><h1>Different Class Tracks</h1><ul><li>Common People</li><li>Disco 2000</li><li>Mis-Shapes</li></ul><p><a href='http://localhost:2000/artists'>Home</a> *** <a href='http://localhost:2000/artists/pulp'>Pulp Albums</a></p></body></html>"
  }
  else if(path === "/artists/pulp/his_n_hers"){
    msg = "<html><body><h1>His 'n' Hers Tracks</h1><ul><li>Babies</li><li>Do You Remember the First Time</li><li>She's a Lady</li></ul><p><a href='http://localhost:2000/artists'>Home</a> *** <a href='http://localhost:2000/artists/pulp'>Pulp Albums</a></p></body></html>"
  }
  else if(path === "/artists/supergrass/i_should_coco"){
    msg = "<html><body><h1>I Should Coco Tracks</h1><ul><li>Alright</li><li>Caught by the Fuzz</li><li>Strange Ones</li></ul><p><a href='http://localhost:2000/artists'>Home</a> *** <a href='http://localhost:2000/artists/supergrass'>Supergrass Albums</a></p></body></html>"
  }
  else if(path === "/artists/supergrass/in_it_for_the_money"){
    msg = "<html><body><h1>In It for the Money Tracks</h1><ul><li>Late in the Day</li><li>Richard III</li><li>Sun Hits the Sky</li></ul><p><a href='http://localhost:2000/artists'>Home</a> *** <a href='http://localhost:2000/artists/supergrass'>Supergrass Albums</a></p></body></html>"
  }

  respond.end(msg);
});
Server.listen(2000);
