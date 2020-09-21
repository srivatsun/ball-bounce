const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies; 
 
  var engine, world; 
  var object 
  var ball
  

  function setup () { 
    createCanvas(400,400);
    
   
    engine = Engine.create(); 
     world = engine.world;
     


     var object_option =
      { isStatic: true }
     
      var ball_option = {
        restitution: 1
      }
      ball = Bodies.circle(200,100,20,ball_option);

     object = Bodies.rectangle(200,350,400,50,object_option);
       
     World.add(world,object); 
     World.add(world,ball); 
     
        console.log(object); 
        console.log(object.position.x); 
        console.log(object.position.y); 
      }
         function draw() {
            background(0) 
           

           Engine.update(engine); 
            ellipseMode(RADIUS)
           ellipse(ball.position.x,ball.position.y,20,20);
            rectMode(CENTER); 
            rect(object.position.x,object.position.y,400,50); 
          }