// main module

var mainModule = (function(window, $) {

	function init() {
		// open on new tab every link with the js-external class
		_eventListener('js-external', 'click', function() {
			this.setAttribute('target', '_blank');
		});
	}

	// module's private functions

	/*
	 * Add an event listener with the specified className and executes the
	 * provided action
	 * @className = string; can't be null;
	 * @eventName = string; default set to 'click'
	 * @action = function; can't be null;
	 */
	function _eventListener(className, eventName, action) {
		// check if className or action aren't null
		if (!className.length || !action) {
			console.error('className or action can\'t be null.');
			return;
		}

		if (!eventName.length) {
			eventName = 'click';
		}

		var elements = document.getElementsByClassName(className);

		if (!elements.length) return;

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			element.addEventListener(eventName, action, false);
		}
	}

	return {
		init: init
		, eventListener: _eventListener
	};
})(window, $);

document.addEventListener('DOMContentLoaded', function() {
	mainModule.init();
});