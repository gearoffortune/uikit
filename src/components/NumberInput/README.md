<!--GITHUB_BLOCK-->

# NumberInput

<!--/GITHUB_BLOCK-->

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

NumberInput allow users to enter numbers into a UI.

## Appearance

The appearance of `NumberInput` is controlled by the `view` and `pin` properties.

### View

`normal` - the main view of `NumberInput` (used by default).

<!--LANDING_BLOCK
<ExampleBlock code={`<NumberInput placeholder="Placeholder" />`}>
    <UIKit.NumberInput placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - can be used with a custom wrapper for `NumberInput`.

<!--LANDING_BLOCK
<ExampleBlock code={`<NumberInput view="clear" placeholder="Placeholder" />`}>
    <UIKit.NumberInput view="clear" placeholder="Placeholder" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput view="normal" />
<NumberInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

Allows you to control view of right and left edges of `NumberInput`'s border.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<NumberInput placeholder="Placeholder" pin="round-brick" />
<NumberInput placeholder="Placeholder" pin="brick-brick" />
<NumberInput placeholder="Placeholder" pin="brick-round" />
`}
>
    <UIKit.NumberInput placeholder="Placeholder" pin="round-brick" />
    <UIKit.NumberInput placeholder="Placeholder" pin="brick-brick" />
    <UIKit.NumberInput placeholder="Placeholder" pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput pin="round-brick" />
<NumberInput pin="brick-brick" />
<NumberInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## States

### Disabled

The state of the `NumberInput` where you don't want the user to be able to interact with the component.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<NumberInput placeholder="Placeholder" disabled={true} />
`}
>
    <UIKit.NumberInput placeholder="Placeholder" disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput disabled />
```

<!--/GITHUB_BLOCK-->

### Error

The state of the `NumberInput` in which you want to indicate incorrect user input. To change `NumberInput` appearance, use the `validationState` property with the `"invalid"` value. An optional message text can be added via the `errorMessage` property. By default, message text is rendered outside the component.
This behaviour can be changed with the `errorPlacement` property.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<NumberInput placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
<NumberInput placeholder="Placeholder" errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
`}
>
    <UIKit.NumberInput placeholder="Placeholder" errorMessage="Error message" validationState="invalid" />
    <UIKit.NumberInput placeholder="Placeholder" errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput errorMessage="Error message" validationState="invalid" />
<NumberInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Size

`s` – Used when standard controls are too big (tables, small cards).

`m` – Basic size, used in most components.

`l` – Basic controls performed in a page's header, modal windows, or pop-ups.

`xl` – Used on promo and landing pages.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<NumberInput placeholder="Placeholder" size="s" />
<NumberInput placeholder="Placeholder" size="m" />
<NumberInput placeholder="Placeholder" size="l" />
<NumberInput placeholder="Placeholder" size="xl" />
`}
>
    <UIKit.NumberInput placeholder="Placeholder" size="s" />
    <UIKit.NumberInput placeholder="Placeholder" size="m" />
    <UIKit.NumberInput placeholder="Placeholder" size="l" />
    <UIKit.NumberInput placeholder="Placeholder" size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput size="s" />
<NumberInput size="m" />
<NumberInput size="l" />
<NumberInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Label

Allows you to set the label to the left of control.

- label is located to the right of the elements added via `startContent` property.
- label can take up no more than half the width of the entire NumberInput's space.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<NumberInput placeholder="Placeholder" label="Label" />
<NumberInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
`}
>
    <UIKit.NumberInput placeholder="Placeholder" label="Label" />
    <UIKit.NumberInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## Additional content

### Start content

Allows you to add content to the left of the control. Located to the left of the label added via `label` property.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<NumberInput placeholder="Placeholder" label="Label" startContent={<Label size="s">Start</Label>} />`}
>
    <UIKit.NumberInput
        placeholder="Search"
        label="Label"
        startContent={<UIKit.Label size="s">Left</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### End content

Allows you to add content to the right of the control. Located to the right of the clear button added via `hasClear` property and inside-placed error icon.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<NumberInput placeholder="Placeholder" endContent={<Label size="s">Right</Label>} hasClear/>`}
>
    <UIKit.NumberInput
        hasClear
        placeholder="Placeholder"
        endContent={<UIKit.Label size="s">Right</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

### Controls

Visibility of incrementing/decrementing arrow-controls in the rightmost position in the component can be managed by `hiddenControls` property.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
    <NumberInput/>
    <NumberInput hiddenControls/>
    `}
>
    <UIKit.NumberInput/>
    <UIKit.NumberInput hiddenControls/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput />
<NumberInput hiddenControls />
```

<!--/GITHUB_BLOCK-->

## Behaviour

### Min/max values

Allow you to set minimum and maximum values, which can be entered to the input. Values which are not fit into defined range would be clamped on blur to the nearest allowed value.

<!--LANDING_BLOCK
<ExampleBlock
    code={`<NumberInput min={-100} max={100}/>`}
>
    <UIKit.NumberInput
        min={-100}
        max={100}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-100} max={100} />
```

<!--/GITHUB_BLOCK-->

### Step

Allows you to set the amount on which value in the input is incremented or decremented with arrow buttons in component controls or on keyboard.

It also adds restrictions on allowed values and enabled clamping entered number on blur to allowed values by the following rules:

- if step and min value are defined with integer values, then allowed values are defined as `min + (step * n)`, where `n` is an integer number;
- if step is an integer number and min value is not defined, then allowed values are defined as a divisible by step;
- if step or min values are decimal, then clamping is not applicable

<!--LANDING_BLOCK
<ExampleBlock
    code={`<NumberInput min={-10} step={4}/>`}
>
    <UIKit.NumberInput
        min={-10}
        step={4}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-10} step={4} />
```

<!--/GITHUB_BLOCK-->

### Step multiplier

Allows you to set the value by which the step value is multiplied when the Shift button on the keyboard is pressed by defining `shiftMultiplier` property.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
    <NumberInput shiftMultiplier={50}/>
    <NumberInput shiftMultiplier={8} step={4}/>
    `}
>
    <UIKit.NumberInput
        shiftMultiplier={50}
    />
    <UIKit.NumberInput
        shiftMultiplier={8}
        step={4}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput shiftMultiplier={50} />
<NumberInput shiftMultiplier={8} step={4} />
```

<!--/GITHUB_BLOCK-->

### Decimal values restriction

Allows you to switch ability to enter only integer or also decimal values by `allowDecimal` property.
With `allowDecimal={false}` property a dot entered to the input would be ignored and pasted decimal values would be rounded down.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
    <NumberInput allowDecimal/>
    <NumberInput allowDecimal={false}/>
    `}
>
    <UIKit.NumberInput allowDecimal/>
    <UIKit.NumberInput allowDecimal={false}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput allowDecimal />
<NumberInput allowDecimal={false} />
```

<!--/GITHUB_BLOCK-->

## Properties

| Name            | Description                                                                                                             |                     Type                      |      Default       |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :----------------: |
| allowDecimal    | Enables ability to enter decimal numbers                                                                                |                   `boolean`                   |      `false`       |
| autoComplete    | The control's `autocomplete` attribute                                                                                  |              `boolean` `string`               |                    |
| autoFocus       | The control's `autofocus` attribute                                                                                     |                   `boolean`                   |                    |
| className       | The control's wrapper class name                                                                                        |                   `string`                    |                    |
| controlProps    | The control's html attributes                                                                                           | `React.InputHTMLAttributes<HTMLInputElement>` |                    |
| controlRef      | React ref provided to the control                                                                                       |         `React.Ref<HTMLInputElement>`         |                    |
| defaultValue    | The control's default value, used when the component is not controlled                                                  |             `number` `undefined`              |                    |
| disabled        | Indicates that the user cannot interact with the control                                                                |                   `boolean`                   |      `false`       |
| endContent      | User`s node rendered after the input node, clear button and inside error icon                                           |               `React.ReactNode`               |                    |
| errorMessage    | Error text                                                                                                              |                   `string`                    |                    |
| errorPlacement  | Error placement                                                                                                         |              `outside` `inside`               |     `outside`      |
| hasClear        | Shows the icon for clearing control's value                                                                             |                   `boolean`                   |      `false`       |
| hiddenControls  | Hides increment/decrement buttons at the end of control                                                                 |                   `boolean`                   |                    |
| id              | The control's `id` attribute                                                                                            |                   `string`                    |                    |
| label           | Help text rendered to the left of the input node                                                                        |                   `string`                    |                    |
| max             | max allowed value. It is used for clamping entered value to allowed range                                               |                   `number`                    | `MAX_SAFE_INTEGER` |
| min             | min allowed value. It is used for clamping entered value to allowed range                                               |                   `number`                    | `MIN_SAFE_INTEGER` |
| name            | The `name` attribute of the control. If unspecified, it will be autogenerated if not specified                          |                   `string`                    |                    |
| note            | An optional element displayed under the bottom-right corner of the control that shares a space with the error container |               `React.ReactNode`               |                    |
| onBlur          | Fires when the control lost focus. Provides focus event as a callback's argument                                        |                  `function`                   |                    |
| onChange        | Fires when the input’s value is changed by the user. Provides change event as an callback's argument                    |                  `function`                   |                    |
| onFocus         | Fires when the control gets focus. Provides focus event as a callback's argument                                        |                  `function`                   |                    |
| onKeyDown       | Fires when a key is pressed. Provides keyboard event as a callback's argument                                           |                  `function`                   |                    |
| onKeyUp         | Fires when a key is released. Provides keyboard event as a callback's argument                                          |                  `function`                   |                    |
| onUpdate        | Fires when the input’s value is changed by the user. Provides new value as an callback's argument                       |                  `function`                   |                    |
| pin             | The control's border view                                                                                               |                   `string`                    |  `'round-round'`   |
| placeholder     | Text that appears in the control when it has no value set                                                               |                   `string`                    |                    |
| qa              | Test ID attribute (`data-qa`)                                                                                           |                   `string`                    |                    |
| readonly        | Indicates that the user cannot change control's value                                                                   |                   `boolean`                   |      `false`       |
| shiftMultiplier | Step multiplier when shift button is pressed                                                                            |                   `number`                    |        `10`        |
| size            | The size of the control                                                                                                 |           `"s"` `"m"` `"l"` `"xl"`            |       `"m"`        |
| step            | Delta for incrementing/decrementing entered value with arrow keyboard buttons or component controls                     |                   `number`                    |        `1`         |
| startContent    | The user`s node rendered before label and input                                                                         |               `React.ReactNode`               |                    |
| tabIndex        | The `tabindex` attribute of the control                                                                                 |                   `string`                    |                    |
| validationState | Validation state                                                                                                        |                  `"invalid"`                  |                    |
| value           | The value of the control                                                                                                |             `number` `undefined`              |                    |
| view            | The view of the control                                                                                                 |             `"normal"` `"clear"`              |     `"normal"`     |

## CSS API

Component does not have its own css api, but it extends parent TextInput component api
