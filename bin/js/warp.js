var canvas = document.getElementById('artwork1');
var hover = true;

var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {view: canvas});
renderer.backgroundColor = 0x0E0D0C;

/*////////////////////////////////////////*/

var container = new PIXI.Container();
container.position.x = renderer.width/2.3;
container.position.y = renderer.height/3;
stage.addChild(container);


/*////////////////////////////////////////*/

var originalVertices = [],
    mesh;

var texture = new PIXI.Texture.fromImage('/img/artworks/day&night.jpg');
texture.on('update',function(){
  
  mesh = new PIXI.mesh.Plane( this, 20, 20 );
  mesh.width = this.width; //renderer.width * 0.35;
  mesh.height = this.height;//renderer.width * 0.5;
  container.addChild(mesh);//, 0);
  mesh.pivot.x = mesh.width * 0.4;
  mesh.pivot.y = mesh.height * 0.3;
  
  originalVertices = mesh.vertices.slice(0);
  
  renderer.render(stage);
  animate();
});

/*////////////////////////////////////////*/

var count = 0;

function animate() {
  requestAnimationFrame(animate);

  if (hover) {
    count += .15;
  }
  
  if ( mesh && mesh.vertices ) { 
    
    for (let i = 0; i < mesh.vertices.length; i++) {
      mesh.vertices[i] = originalVertices[i] + (3 * Math.cos(count + i * 0.15));
    }
  }

  renderer.render(stage);
}

$('li.track a').mouseenter(function() {
  // hover = true;
  $('li.track canvas').fadeIn();
  $('li.track .extras').fadeIn();
});
$('li.track a').mouseleave(function() {
  // hover = false;
  $('li.track canvas').fadeOut();
  $('li.track .extras').fadeOut();
});