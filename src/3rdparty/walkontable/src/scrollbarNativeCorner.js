function WalkontableCornerScrollbarNative(instance) {
  this.instance = instance;
  this.init();
  this.clone = this.makeClone('corner');
}

WalkontableCornerScrollbarNative.prototype = new WalkontableOverlay();

WalkontableCornerScrollbarNative.prototype.resetFixedPosition = function () {
	if (!this.instance.wtTable.holder.parentNode) {
    return; //removed from DOM
  }
  var elem = this.clone.wtTable.holder.parentNode;

  var box;
	console.log(this.scrollHandler===window);
  if (this.scrollHandler === window) {
		var fixedColumns = this.instance.getSetting('fixedColumnsLeft') > 0,
			fixedRows = this.instance.getSetting('fixedRowsTop') > 0,
			fixedElements = fixedColumns && fixedRows;

    box = this.instance.wtTable.hider.getBoundingClientRect();
    var top = Math.ceil(box.top, 10);
    var bottom = Math.ceil(box.bottom, 10);

    if (top < 0 && bottom > 0) {
			if(fixedElements) {
				elem.style.top = '0';
			} else {
				elem.style.visibility = 'hidden';
			}
    }
    else {
      elem.style.top = top + 'px';
			elem.style.visibility = 'visible';
    }

    var left = Math.ceil(box.left, 10);
    var right = Math.ceil(box.right, 10);

    if (left < 0 && right > 0) {
			if(fixedElements) {
				elem.style.left = '0';
			} else {
				elem.style.visibility = 'hidden';
			}
    }
    else {
      elem.style.left = left + 'px';
			elem.style.visibility = 'visible';
    }
  }
  else {
    box = this.scrollHandler.getBoundingClientRect();
    elem.style.top = Math.ceil(box.top, 10) + 'px';
    elem.style.left = Math.ceil(box.left, 10) + 'px';
  }

  elem.style.width = Handsontable.Dom.outerWidth(this.clone.wtTable.TABLE) + 4 + 'px';
  elem.style.height = Handsontable.Dom.outerHeight(this.clone.wtTable.TABLE) + 4 + 'px';
};

WalkontableCornerScrollbarNative.prototype.prepare = function () {
};

WalkontableCornerScrollbarNative.prototype.refresh = function (selectionsOnly) {
  this.measureBefore = 0;
  this.measureAfter = 0;
  this.clone && this.clone.draw(selectionsOnly);
};

WalkontableCornerScrollbarNative.prototype.getScrollPosition = function () {
};

WalkontableCornerScrollbarNative.prototype.getLastCell = function () {
};

WalkontableCornerScrollbarNative.prototype.applyToDOM = function () {
};

WalkontableCornerScrollbarNative.prototype.scrollTo = function () {
};

WalkontableCornerScrollbarNative.prototype.readWindowSize = function () {
};

WalkontableCornerScrollbarNative.prototype.readSettings = function () {
};