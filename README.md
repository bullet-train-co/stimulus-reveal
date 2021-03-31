# Stimulus Reveal

Stimulus controller to hide/show elements with optional transitions

## Installation

```shell
$ yarn add stimulus-reveal
```

## Usage

Register the controller with Stimulus:

```javascript
// application.js
import { Application } from 'stimulus';
import RevealController from 'stimulus-reveal'

const application = Application.start()
application.register('reveal', RevealController)
```

Initialize the controller on a container element, add an action to toggle elements, and add `data-reveal` attributes to elements you want to toggle:

```html
<div data-controller="reveal">
  <button type="button" data-action="reveal#toggle">Click me</button>
  <div hidden data-reveal>I toggle</div>
</div>
```

### Deprecations

* Using `stimulus-reveal` on `<a>` tags will no longer prevent the default event chain. If you are using `<a>` tags, consider changing to `<button type="button">`.

### Options

#### Top Level options

##### `data-reveal-target-selector-value` (default: `[data-reveal]`)
Setting this attribute to a selector will allow you to change the selector pattern for toggling elements.

##### `data-reveal-toggle-keys-value`
Setting this attribute to a comma separated list of lower-case key names will toggle the reveal when they're pressed.

###### Example:
`<div data-reveal-toggle-keys-value="a">`

##### `data-reveal-show-keys-value`
Setting this attribute to a comma separated list of lower-case key names will show the reveal when they're pressed.

###### Example:
`<div data-reveal-toggle-keys-value="?">`

##### `data-reveal-hide-keys-value`
Setting this attribute to a comma separated list of lower-case key names will close the reveal when they're pressed.

###### Example:
`<div data-reveal-toggle-keys-value="escape">`

##### `data-reveal-away-value`
Setting this attribute will close the reveal when the user clicks away from the reveal element.

##### `data-reveal-open-value` (default: `false`)
Setting this attribute to "true" will tell the controller that the default state is open for the reveal. The next toggle will close it.

#### Trigger element options

##### `data-reveal-prevent-default`
If set on the trigger element, this will prevent the default action from being handled.

##### `data-reveal-stop-propagation`
If set on the trigger element, this will prevent the default action from being propagated.

#### Element options

You can set options per element to change how each one behaves.

##### `data-transition`
If set, this will enable transitions. A default transition will apply:

**In:**
- Opacity: 0 -> 1
- Transform Scale: 95% -> 100%
- Duration: 200ms

**Out:**
- Opacity: 1 -> 0
- Transform Scale: 100% -> 95%
- Duration: 150ms

###### Example

```html
<div data-controller="reveal">
  <button type="button" data-action="reveal#toggle">Click me</button>
  <div hidden data-reveal data-transition>I toggle with transitions</div>
</div>
```

##### `data-transition-(enter|leave)`, `data-transition-(enter|leave)-start`, `data-transition-(enter|leave)-end`
These options can be used to override the default transitions by setting classes at transition points.

###### Example

```html
<div data-controller="reveal">
  <button type="button" data-action="reveal#toggle">Click me</button>
  <div hidden data-reveal data-transition
    data-transition-enter="transition transform ease-out duration-200"
    data-transition-enter-start="opacity-0 -translate-y-6 bg-transparent"
    data-transition-enter-end="opacity-100 translate-y-0 bg-transparent"
    data-transition-leave="transition transform ease-out duration-150"
    data-transition-leave-start="opacity-100 translate-y-0 bg-transparent"
    data-transition-leave-end="opacity-0 -translate-y-6 bg-transparent">
    I toggle with custom transitions</div>
</div>
```

##### `data-(enter|leave)-(start|end)`
These attributes allow you to toggle an element before or after the main transition. For instance if you need to unhide
and element before an enter transition and hide it after a leave transition.

###### Example

```html
<div data-controller="reveal">
  <button type="button" data-action="reveal#toggle">Click me</button>
  <div hidden data-reveal data-enter-start data-leave-end>
    <div hidden data-reveal data-transition
      data-transition-enter="transition transform ease-out duration-200"
      data-transition-enter-start="opacity-0 -translate-y-6 bg-transparent"
      data-transition-enter-end="opacity-100 translate-y-0 bg-transparent"
      data-transition-leave="transition transform ease-out duration-150"
      data-transition-leave-start="opacity-100 translate-y-0 bg-transparent"
      data-transition-leave-end="opacity-0 -translate-y-6 bg-transparent">
      I toggle with custom transitions</div>
  </div>
</div>
```

### Methods

#### `show`

This will show toggled elements.

##### Example

```html
<div data-controller="reveal">
  <button type="button" data-action="reveal#show">Click me</button>
  <div hidden data-reveal data-transition>I can't be hidden again</div>
</div>
```

#### `hide`

This will hide toggled elements.

##### Example

```html
<div data-controller="reveal">
  <button type="button" data-action="reveal#hide">Click me</button>
  <div data-reveal data-transition>I can't be shown again</div>
</div>
```

#### `toggle`

This will toggle toggled elements.

##### Example

```html
<div data-controller="reveal">
  <button type="button" data-action="reveal#toggle">Click me</button>
  <div hidden data-reveal data-transition>I will show and hide again and again and again</div>
</div>
```

## Contributing

Fork the project.

Install dependencies
```shell
$ yarn install
```

Write some tests, and add your feature. Send a PR.
