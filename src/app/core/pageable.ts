
import Pageable from 'pageable';

Pageable.prototype._start = function(e: any): boolean {
  const evt = this._getEvent(e);

  if (this.scrolling || this.dragging) {
    return false;
  } // preventing action here alows us to still have the event listener
  // attached so touch and mouse can be toggled at any time

  if (e.type === 'touchstart') {
    if (!this.events.touch) {
      if (
        !evt.target.closest('a') &&
        !evt.target.closest('input') &&
        !evt.target.closest('textarea') &&
        !evt.target.closest('button')
      ) {
        this._preventDefault(e);
      }
      return false;
    }
  }

  if (e.type === 'mousedown') {
    if (
      !this.events.mouse ||
      e.button !== 0 ||
      evt.target.closest('input') ||
      evt.target.closest('textarea') ||
      evt.target.closest('a')
    ) {
      return false;
    }
  } // prevent firing if not on a page

  if (!evt.target.closest(this.config.childSelector)) {
    return false;
  }

  this._preventDefault(e);

  this.dragging = this.config.freeScroll; // suspend slideshow

  if (this.config.slideshow) {
    this.slider.stop();
  }

  this.down = {
    x: evt.clientX,
    y: evt.clientY
  };
  this.startIndex = this.index;
  this.config.onBeforeStart.call(this, this.index);
};

export default Pageable;
