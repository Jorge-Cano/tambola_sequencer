let ballRadius = 10;
let pegCount = 16;
let pegSize = 50;
let maximumBalls = 200;
let ballEveryNFrames = 5;

let w = 750;
let h = 900;
let countX = 10;
let countY = 20;
let m;

const { Bodies, Body, Composite, Engine, Events, World } = Matter;

let canvas;
let engine;

let wheel;

function setup() {
	engine = Engine.create();
	Engine.run(engine);

	canvas = createCanvas(windowWidth, windowHeight);

	m = min(width, height);
	let rat = 1 / 5 * 2;
	let r = m * rat;

	let parts = [];

	for(let i = 0; i < pegCount; i++) {
		let segment = TAU / pegCount;
		let angle = i / pegCount * TAU;
		let angle2 = i / pegCount * TAU + segment / 2;
		let x = cos(angle);
		let y = sin(angle);
		let x2 = cos(angle2);
		let y2 = sin(angle2);
		let cx = x * r;
		let cy = y * r;
		let cx2 = x2 * r;
		let cy2 = y2 * r;
		let circ = addCircle({ x: cx, y: cy, r: pegSize / 1000 * m, options: { isStatic: true, label: 'peg' } });
		let rect = addRect({ x: cx2, y: cy2, w: 100 / 1000 * m, h: 30 / 1000 * m, options: { angle: angle2 + HALF_PI, isStatic: true } });
		parts.push(circ, rect);
	}

	wheel = Body.create({ parts, isStatic: true });
}

function addBody(...bodies) {
	World.add(engine.world, bodies);
}

function removeBody(...bodies) {
	World.remove(engine.world, bodies);
}

function addRect({ x = 0, y = 0, w = 10, h = 10, options = {} } = {}) {
	let body = Bodies.rectangle(x, y, w, h, options);
	addBody(body);
	return body;
}
function addCircle({ x = 0, y = 0, r = 10, options = {} } = {}) {
	let body = Bodies.circle(x, y, r, options);
	addBody(body);
	return body;
}

function draw() {
	background(0);

	Body.rotate(wheel, 0.015 + cos(frameCount / 30 + HALF_PI) * 0.025);

	let bodies = Composite.allBodies(engine.world);

	if(bodies.length < maximumBalls && !(frameCount % ballEveryNFrames)) {
		addCircle({
				x: 0,
				y: 0,
				r: ballRadius / 1000 * m,
				options: {
					restitution: 0.8,
					torque: random(-0.05, 0.05),
					label: 'ball'
				}
			});
	}

	translate(width / 2, height / 2);

	bodies.forEach((n, i) => {
		let render = n.render;
		if(!render.visible) {
			return;
		}
		fill(render.fillStyle);
		stroke(render.strokeStyle);
		strokeWeight(render.lineWidth);
		if(['peg','ball'].includes(n.label)) {
			ellipse(n.position.x, n.position.y, n.circleRadius * 2);
		}
		else {
			beginShape();
			n.vertices.forEach(({ x, y, isInternal }) => vertex(x, y));
			endShape(CLOSE);
		}

		if(!n.isStatic && n.position.y > height * 2) {
			removeBody(n);
	  	}
	});
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
