
import "./particles-latest";

declare var ParticleEmitter : any;
export function createCocos2dEmitter(emitter:any, data:any) {
	if(!emitter) {
		emitter = new ParticleEmitter();
	}

	var opts : any = {};
	opts.maxParticles = data.maxParticles;	
	opts.angle = data.angle.first;
	opts.angleVar = data.angle.second;
	opts.duration = data.duration;
	opts.blendFuncSource = data.blendFuncSource;
	opts.blendFuncDestination = data.blendFuncDestination;

	opts.startColorRed = data.startColorRed;
	opts.startColorGreen = data.startColorGreen;
	opts.startColorBlue = data.startColorBlue;
	opts.startColorAlpha = data.startColorAlpha;
	opts.startColorVarianceRed = data.startColorVarianceRed;
	opts.startColorVarianceGreen = data.startColorVarianceGreen;
	opts.startColorVarianceBlue = data.startColorVarianceBlue;
	opts.startColorVarianceAlpha = data.startColorVarianceAlpha;

	opts.finishColorRed = data.finishColorRed;
	opts.finishColorGreen = data.finishColorGreen;
	opts.finishColorBlue = data.finishColorBlue;
	opts.finishColorAlpha = data.finishColorAlpha;
	opts.finishColorVarianceRed = data.finishColorVarianceRed;
	opts.finishColorVarianceGreen = data.finishColorVarianceGreen;
	opts.finishColorVarianceBlue = data.finishColorVarianceBlue;
	opts.finishColorVarianceAlpha = data.finishColorVarianceAlpha;
	opts.startParticleSize = data.startParticleSize.first;
	opts.startParticleSizeVariance = data.startParticleSize.second;
	opts.finishParticleSize = data.finishParticleSize.first;
	opts.finishParticleSizeVariance = data.finishParticleSize.second;
	
	opts.sourcePositionx = data.sourcePositionx;
	opts.sourcePositiony = data.sourcePositiony;
	opts.sourcePositionVariancex = data.sourcePositionVariancex;
	opts.sourcePositionVariancey = data.sourcePositionVariancey;
	
	opts.rotationStart = data.rotationStart.first;
	opts.rotationStartVariance = data.rotationStart.second;
	opts.rotationEnd = data.rotationEnd.first;
	opts.rotationEndVariance = data.rotationEnd.second;
	opts.particleLifespan = data.particleLifespan.first;
	opts.particleLifespanVariance = data.particleLifespan.second;
	opts.emitterType = data.emitterType;
	opts.imageData = data.textureImageData;
	opts.imageData = "https://qtoolkit.github.io/demos/assets/theme/default/images/x2/info.png";

	if(data.maxRadius) {
		opts.maxRadius = data.maxRadius.first;
		opts.maxRadiusVariance = data.maxRadius.second;
		opts.rotatePerSecond = data.rotatePerSecond.first;
		opts.rotatePerSecondVariance = data.rotatePerSecond.second;
	}

	opts.speed = data.speed.first;
	opts.speedVariance = data.speed.first;
	opts.gravityx = data.gravityx;
	opts.gravityy = data.gravityy;
	opts.radialAcceleration = data.radialAcceleration.first;
	opts.radialAccelVariance = data.radialAcceleration.second;
	opts.tangentialAcceleration = data.tangentialAcceleration.first;
	opts.tangentialAccelVariance = data.tangentialAcceleration.second;

	emitter.reload(opts);

	return emitter;
}

