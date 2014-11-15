function NesUI() {
	var assetsDir = "ui/common/";
	
	//a default event handler for touchstart and touchend events so we can add the different background images
	function defaultEvent(e) {
		if(e.type == "touchstart") 
			this.backgroundImage = assetsDir + "btn_pressed.png";
		else if(e.type == "touchend")
			this.backgroundImage = assetsDir + "btn_normal.png";
	};
	
	var view = Ti.UI.createView({
		top: 0,
		left: 0,
		height: Ti.Platform.displayCaps.getPlatformHeight(),
		width: Ti.Platform.displayCaps.getPlatformWidth(),
		
		bind: function(eventName, buttonName, handler) {
			var buttons = ["up", "down", "left", "right", "a", "b"];
			var objects = [view.btnUp, view.btnDown, view.btnLeft, view.btnRight, view.btnA, view.btnB];
			
			for(var i = 0; i < buttons.length; i++) {
				if(buttonName == buttons[i]) {
					objects[i].addEventListener(eventName, handler);
				}	
			}
		},
		
		unbind: function(eventName, buttonName, handler) {
			var buttons = ["up", "down", "left", "right", "a", "b"];
			var objects = [view.btnUp, view.btnDown, view.btnLeft, view.btnRight, view.btnA, view.btnB];
			
			for(var i = 0; i < buttons.length; i++) {
				if(buttonName == buttons[i]) {
					objects[i].removeEventListener(eventName, handler);
				}	
			}			
		}
	});
	
	var size = Ti.Platform.displayCaps.getPlatformWidth() * 0.15;
	
	view.btnUp = Ti.UI.createView({
		top: 0,
		left: size,
		height: size,
		width: size,
		backgroundImage: assetsDir + 'btn_normal.png'
	});
	view.btnUp.addEventListener("touchstart", defaultEvent);
	view.btnUp.addEventListener("touchend", defaultEvent);
	
	view.btnDown = Ti.UI.createView({
		top: size*2,
		left: size,
		height: size,
		width: size,
		backgroundImage: assetsDir + 'btn_normal.png'
	});
	view.btnDown.addEventListener("touchstart", defaultEvent);
	view.btnDown.addEventListener("touchend", defaultEvent);
	
	view.btnLeft = Ti.UI.createView({
		left: 0,
		top: size,
		height: size,
		width: size,
		backgroundImage: assetsDir + 'btn_normal.png'
	});
	view.btnLeft.addEventListener("touchstart", defaultEvent);
	view.btnLeft.addEventListener("touchend", defaultEvent);
	
	view.btnRight = Ti.UI.createView({
		left: size*2,
		top: size,
		height: size,
		width: size,
		backgroundImage: assetsDir + 'btn_normal.png'
	});
	view.btnRight.addEventListener("touchstart", defaultEvent);
	view.btnRight.addEventListener("touchend", defaultEvent);
	
	view.btnA = Ti.UI.createView({
		left: Ti.Platform.displayCaps.getPlatformWidth() - size,
		top: size,
		height: size,
		width: size,
		backgroundImage: assetsDir + 'btn_normal.png'
	});
	view.btnA.addEventListener("touchstart", defaultEvent);
	view.btnA.addEventListener("touchend", defaultEvent);
	
	view.btnB = Ti.UI.createView({
		left: view.btnA.left - size,
		top: size,
		height: size,
		width: size,
		backgroundImage: assetsDir + 'btn_normal.png'	
	});
	view.btnB.addEventListener("touchstart", defaultEvent);
	view.btnB.addEventListener("touchend", defaultEvent);
	
	view.add(view.btnUp);
	view.add(view.btnDown);
	view.add(view.btnLeft);
	view.add(view.btnRight);
	view.add(view.btnA);
	view.add(view.btnB);
	
	return view;
}

module.exports = NesUI;