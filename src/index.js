import { Controller } from 'stimulus'

/**
 * Stimulus controller to toggle element visibility
 * @extends Controller
 */
export default class RevealController extends Controller {
  connect () {
    this.data.set('open', this.isOpen)
    this._initCloseKeypressListener()
    this._initToggleKeypressListener()
  }

  /**
   * Shows elements connected to the controller.
   * @param {Event} event - an event with a currentTarget DOMElement
   */
  show (event) {
    if (this.isOpen || this.isTransitioning) return

    this._init(event, true)
  }

  /**
   * Hides elements connected to the controller.
   * @param {Event} event - an event with a currentTarget DOMElement
   */
  hide (event) {
    if (!this.isOpen || this.isTransitioning) return

    this._init(event, false)
  }

  /**
   * Toggles elements connected to the controller.
   * @param {Event} event - an event with a currentTarget DOMElement
   */
  toggle (event) {
    if (this.isTransitioning) return

    this._init(event, !this.isOpen)
  }

  // Private methods

  /**
   * @private
   * @param {Event} event
   */
  _init (event, shouldOpen) {
    event?.preventDefault()
    const targetSelector = this.data.has('targets')
      ? this.data.get('targets')
      : '[data-reveal]'
    const targets = this.element.querySelectorAll(targetSelector)

    for (const target of targets) {
      this._doInitTransition(target, shouldOpen)
    }

    this._initAwayListener()
  }

  /**
   * @private
   */
  _initCloseKeypressListener () {
    if (this.data.has('close-keypress')) {
      document.addEventListener('keydown', (event) => {
        if (!this.isOpen) return
        if (
          !this.data
            .get('close-keypress')
            .split(',')
            .includes(event.key.toLowerCase())
        ) {
          return
        }

        event.stopPropagation()
        this.toggle(event)
      })
    }
  }

  /**
   * @private
   */
  _initToggleKeypressListener () {
    if (this.data.has('keypress')) {
      document.addEventListener('keydown', (event) => {
        if (
          !this.data
            .get('keypress')
            .split(',')
            .includes(event.key.toLowerCase())
        ) {
          return
        }

        event.stopPropagation()

        this.toggle(event)
      })
    }
  }

  /**
   * @private
   */
  _initAwayListener () {
    if (this.isOpen && this.data.has('away')) {
      this.awayHandler = (event) => {
        if (this.isOpen && !this.element.contains(event.target)) {
          this.toggle(event)
          document.removeEventListener('click', this.awayHandler)
        }
      }

      document.addEventListener('click', this.awayHandler)
    }
  }

  /**
   * @private
   * @param {DOMElement} target
   * @param {boolean} openState
   */
  _doInitTransition (target, openState) {
    target.dispatchEvent(
      new Event(`reveal:${openState ? 'show' : 'hide'}`, {
        bubbles: true,
        cancelable: false
      })
    )

    if ('transition' in target.dataset) {
      this.transitionEndHandler = () => {
        this._didEndTransition(target, openState)
      }

      requestAnimationFrame(() => {
        this._transitionSetup(target, openState)

        target.addEventListener('transitionend', this.transitionEndHandler)

        requestAnimationFrame(() => {
          this._doStartTransition(target, openState)
        })
      })
    } else {
      if (openState) target.hidden = !target.hidden
      this._doCompleteTransition(target, openState)
    }
  }

  /**
   * @private
   * @param {DOMElement} target
   */
  _doStartTransition (target, openState) {
    this.data.set('transitioning', 'true')
    if (target.dataset.useTransitionClasses === 'true') {
      const transitionClasses = this._transitionClasses(
        target,
        this.transitionType
      )
      target.classList.add(...transitionClasses.end.split(' '))
      target.classList.remove(...transitionClasses.start.split(' '))
    } else {
      const transitions = this._transitionDefaults(openState)
      target.style.transformOrigin = transitions.origin
      target.style.transitionProperty = 'opacity transform'
      target.style.transitionDuration = `${transitions.duration / 1000}s`
      target.style.transitionTimingFunction = 'cubic-bezier(0.4, 0.0, 0.2, 1)'

      target.style.opacity = transitions.to.opacity
      target.style.transform = `scale(${transitions.to.scale / 100})`
    }
  }

  /**
   * @private
   * @param {DOMElement} target
   * @param {boolean} openState
   */
  _didEndTransition (target, openState) {
    target.removeEventListener('transitionend', this.transitionEndHandler)
    if (target.dataset.useTransitionClasses === 'true') {
      const transitionClasses = this._transitionClasses(
        target,
        this.transitionType
      )
      target.classList.remove(...transitionClasses.before.split(' '))
    } else {
      target.style.opacity = target.dataset.opacityCache
      target.style.transform = target.dataset.transformCache
      target.style.transformOrigin = target.dataset.transformOriginCache
    }
    this._doCompleteTransition(target, openState)
  }

  /**
   * @private
   * @param {DOMElement} target
   * @param {boolean} openState
   */
  _doCompleteTransition (target, openState) {
    this.data.set('transitioning', 'false')

    if (!openState) target.hidden = !target.hidden
    this.data.set('open', openState)

    target.dispatchEvent(
      new Event(`reveal:${openState ? 'shown' : 'hidden'}`, {
        bubbles: true,
        cancelable: false
      })
    )

    target.dispatchEvent(
      new Event('reveal:complete', { bubbles: true, cancelable: false })
    )
  }

  /**
   * @private
   * @param {DOMElement} target
   * @param {boolean} openState
   */
  _transitionSetup (target, openState) {
    this.transitionType = openState ? 'transitionEnter' : 'transitionLeave'

    if (this.transitionType in target.dataset) {
      target.dataset.useTransitionClasses = true
      const transitionClasses = this._transitionClasses(
        target,
        this.transitionType
      )
      target.classList.add(...transitionClasses.before.split(' '))
      target.classList.add(...transitionClasses.start.split(' '))
    } else {
      target.dataset.useTransitionClasses = false
      const transitions = this._transitionDefaults(openState)
      target.dataset.opacityCache = target.style.opacity
      target.dataset.transformCache = target.style.transform
      target.dataset.transformOriginCache = target.style.transformOrigin

      target.style.opacity = transitions.from.opacity
      target.style.transform = `scale(${transitions.from.scale / 100})`
    }
    if (openState) target.hidden = !target.hidden
  }

  /**
   * @private
   * @param {boolean} openState
   */
  _transitionDefaults (openState) {
    return {
      duration: openState ? 200 : 150,
      origin: 'center',
      from: {
        opacity: openState ? 0 : 1,
        scale: openState ? 95 : 100
      },
      to: {
        opacity: openState ? 1 : 0,
        scale: openState ? 100 : 95
      }
    }
  }

  /**
   * @private
   * @param {DOMElement} target
   * @param {string} transitionType
   */
  _transitionClasses (target, transitionType) {
    return {
      before: target.dataset[transitionType],
      start: target.dataset[`${transitionType}Start`],
      end: target.dataset[`${transitionType}End`]
    }
  }

  /**
   * @private
   */
  get isOpen () {
    return this.data.get('open') === 'true'
  }

  /**
   * @private
   */
  get isTransitioning () {
    return this.data.get('transitioning') === 'true'
  }
}

export {
  RevealController
}
