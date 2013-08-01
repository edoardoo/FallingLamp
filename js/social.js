var social = {
	data:{
		h:0,
		w:0,
		elements: 2
	},
	destinations = [twitter, linkedin],

	

	Initialize: function(){

		var myBody = document.body;
		var social.data.h = myBody.height;
		var social.data.w = myBody.width;

	}
}

function renderFrame() {

				//RENDER THE PARTICLEEEEEEES!

				requestAnimationFrame(renderFrame);

				// Clearing screen to prevent trails
				ctx.clearRect(0,0, W, H);


				particles.forEach(function(particle) {


					// The bouncing objects simply go upwards
					// It MUST come down, so lets apply gravity
					particle.vy += 0.6;

					// Adding velocity to x and y axis
					particle.x += particle.vx;
					particle.y += particle.vy;

					// We're almost done! All we need to do now
					// is to reposition the bouncing objects as soon
					// as they move off the canvas.
					// We'll also need to re-set the velocities

					if (
						// off the right side
						particle.x + particle.radius > W ||
						// off the left side
						particle.x - particle.radius < 0 ||
						// off the bottom
						particle.y + particle.radius > H
						) {	

							console.log(particle.turn);
								// If any of the above conditions are met
								// then we need to re-position the bouncing objects
								// on the base :)


								// If we do not re-set the velocities then
								// the bouncing objects will stick to base :D

								// Velocity X
								particle.dead = false;
								particle.x = parseInt(Math.random() * W);
								particle.y = H;
								if (particle.x > W/2 ){

									particle.vx = Math.random() * (-15 - -5) + -5;

								}else{

									particle.vx = Math.random() * (15 - 5) + 5;


								}
								particle.vy = Math.random() * (-25 - -22) + -25;


							

						}

					if(particle.dead == false && particle.turn ==  Math.round(Math.random()*(10 - 1)+ 1)
){


					particle.draw();

					}
				

				});
			}