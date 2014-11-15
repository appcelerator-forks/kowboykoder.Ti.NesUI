function Example() {
	var NesUI = require("ui/common/NesUI");
	var controller = new NesUI();
	
	var self = Ti.UI.createView({});
	var player = Ti.UI.createView({
		top: 300,
		left: 0,
		height: 50,
		width: 50,
		backgroundColor: 'red'
	});
	
	self.add(player);
	self.add(controller);
	
	/*
		Use bind to add an event handler to an event.
		The first argument is the name of the event to listen for (same as all supported Titanium events)
		The second argument is one of:
			- up
			- down
			- left
			- right
			- a
			- b
		The third argument is a callback function
	*/
	controller.bind("touchstart", "right", function(e){
		player.left += 10;	
	});
	
	/*
		Currently NesUI doesn't allow you to add new buttons (feel free to mod the code to support that). But you can easily remove buttons like this. Supported objects
		are:
		
		- controller.btnLeft
		- controller.btnRight
		- controller.btnUp
		- controller.btnDown
		- controller.btnA
		- controller.btnB
	 */
	controller.remove(controller.btnA);
	
	return self;
}

module.exports = Example;
