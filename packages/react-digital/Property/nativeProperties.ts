export const nativeProperties = new Set([
    "accessKey", "autocapitalize", "autofocus", "className", "contentEditable", "dir", "draggable",
    "enterKeyHint", "hidden", "id", "inert", "inputMode", "is", "itemId", "itemProp", "itemRef",
    "itemScope", "itemType", "lang", "nonce", "part", "slot", "spellCheck", "style", "tabIndex",
    "title", "translate",

    // Boolean Attributes
    "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", 
    "formNoValidate", "hidden", "loop", "multiple", "muted", "noValidate", "open", "readOnly",
    "required", "reversed", "scoped", "selected",

    // Input-specific attributes
    "accept", "alt", "autocomplete", "capture", "checked", "crossOrigin", "defaultChecked",
    "defaultValue", "disabled", "form", "formAction", "formEncType", "formMethod", "formNoValidate",
    "formTarget", "height", "list", "max", "maxLength", "min", "minLength", "multiple", "name",
    "pattern", "placeholder", "readOnly", "required", "size", "src", "step", "type", "value",
    "width",

    // Form attributes
    "action", "autoComplete", "encType", "method", "name", "noValidate", "target",

    // Media attributes
    "autoPlay", "controls", "crossOrigin", "loop", "muted", "playsInline", "poster", "preload",
    "src", "srcObject",

    // Table attributes
    "align", "bgColor", "border", "cellPadding", "cellSpacing", "frame", "rules", "summary",
    "width",

    // ARIA attributes
    "aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked",
    "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby",
    "aria-details", "aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-expanded", "aria-flowto",
    "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label",
    "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable",
    "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly",
    "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan",
    "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext",

    // Event handlers
    "onAbort", "onAnimationEnd", "onAnimationIteration", "onAnimationStart", "onAuxClick", "onBeforeInput",
    "onBlur", "onCanPlay", "onCanPlayThrough", "onChange", "onClick", "onClose", "onContextMenu", "onCopy",
    "onCut", "onDblClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver",
    "onDragStart", "onDrop", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onError",
    "onFocus", "onFocusIn", "onFocusOut", "onInput", "onInvalid", "onKeyDown", "onKeyPress", "onKeyUp",
    "onLoad", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onMouseDown", "onMouseEnter", "onMouseLeave",
    "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onPaste", "onPause", "onPlay", "onPlaying",
    "onPointerCancel", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerMove", "onPointerOut",
    "onPointerOver", "onPointerUp", "onProgress", "onRateChange", "onReset", "onResize", "onScroll", "onSeeked",
    "onSeeking", "onSelect", "onStalled", "onSubmit", "onSuspend", "onTimeUpdate", "onTouchCancel", "onTouchEnd",
    "onTouchMove", "onTouchStart", "onTransitionEnd", "onVolumeChange", "onWaiting", "onWheel"
]);
