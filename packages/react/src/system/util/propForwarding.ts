import { PropNameType } from '../../type';

const standardProps = {
    // >>> HTML
    // React-specific Attributes
    defaultChecked: true,
    defaultValue: true,

    // Standard HTML Attributes
    // accessKey: true, // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
    className: true,
    // contentEditable: true,
    // contextMenu: true, // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contextmenu
    // dir: true, // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
    // draggable: true,
    // hidden: true, // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
    id: true,
    lang: true, // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
    // placeholder: true,
    // slot: true, https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot
    // spellCheck: true, // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck
    style: true,
    tabIndex: true,
    title: true,
    translate: true, // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate

    // Unknown
    // radioGroup: true, // <command>, <menuitem>

    // WAI-ARIA
    role: true,

    // RDFa Attributes
    // about: true,
    // datatype: true,
    // inlist: true,
    // prefix: true,
    // property: true,
    // resource: true,
    // typeof: true,
    // vocab: true,

    // Non-standard Attributes
    // autoCapitalize: true,
    // autoCorrect: true,
    // autoSave: true,
    // color: true,
    // itemProp: true,
    // itemScope: true,
    // itemType: true,
    // itemID: true,
    // itemRef: true,
    // results: true,
    // security: true,
    // unselectable: true,

    // Living Standard
    // inputMode: true,
    // is: true,

    // >>> DOM
    children: true,
    dangerouslySetInnerHTML: true,

    // Clipboard Events
    // onCopy: true,
    // onCopyCapture: true,
    // onCut: true,
    // onCutCapture: true,
    // onPaste: true,
    // onPasteCapture: true,

    // Composition Events
    // onCompositionEnd: true,
    // onCompositionEndCapture: true,
    // onCompositionStart: true,
    // onCompositionStartCapture: true,
    // onCompositionUpdate: true,
    // onCompositionUpdateCapture: true,

    // Focus Events
    onFocus: true,
    // onFocusCapture: true,
    onBlur: true,
    // onBlurCapture: true,

    // Form Events
    onChange: true,
    // onChangeCapture: true,
    onBeforeInput: true, // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event
    // onBeforeInputCapture: true,
    onInput: true,
    // onInputCapture: true,
    // onReset: true,
    // onResetCapture: true,
    // onSubmit: true,
    // onSubmitCapture: true,
    // onInvalid: true,
    // onInvalidCapture: true,

    // Image Events
    // onLoad: true,
    // onLoadCapture: true,
    // onError: true, // also a Media Event
    // onErrorCapture: true, // also a Media Event

    // Keyboard Events
    onKeyDown: true,
    // onKeyDownCapture: true,
    onKeyPress: true,
    // onKeyPressCapture: true,
    onKeyUp: true,
    // onKeyUpCapture: true,

    // Media Events
    // onAbort: true,
    // onAbortCapture: true,
    // onCanPlay: true,
    // onCanPlayCapture: true,
    // onCanPlayThrough: true,
    // onCanPlayThroughCapture: true,
    // onDurationChange: true,
    // onDurationChangeCapture: true,
    // onEmptied: true,
    // onEmptiedCapture: true,
    // onEncrypted: true,
    // onEncryptedCapture: true,
    // onEnded: true,
    // onEndedCapture: true,
    // onLoadedData: true,
    // onLoadedDataCapture: true,
    // onLoadedMetadata: true,
    // onLoadedMetadataCapture: true,
    // onLoadStart: true,
    // onLoadStartCapture: true,
    // onPause: true,
    // onPauseCapture: true,
    // onPlay: true,
    // onPlayCapture: true,
    // onPlaying: true,
    // onPlayingCapture: true,
    // onProgress: true,
    // onProgressCapture: true,
    // onRateChange: true,
    // onRateChangeCapture: true,
    // onSeeked: true,
    // onSeekedCapture: true,
    // onSeeking: true,
    // onSeekingCapture: true,
    // onStalled: true,
    // onStalledCapture: true,
    // onSuspend: true,
    // onSuspendCapture: true,
    // onTimeUpdate: true,
    // onTimeUpdateCapture: true,
    // onVolumeChange: true,
    // onVolumeChangeCapture: true,
    // onWaiting: true,
    // onWaitingCapture: true,

    // MouseEvents
    onAuxClick: true, // https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event
    // onAuxClickCapture: true,
    onClick: true,
    // onClickCapture: true,
    onContextMenu: true,
    // onContextMenuCapture: true,
    onDoubleClick: true,
    // onDoubleClickCapture: true,
    onDrag: true,
    // onDragCapture: true,
    onDragEnd: true,
    // onDragEndCapture: true,
    onDragEnter: true,
    // onDragEnterCapture: true,
    onDragExit: true,
    // onDragExitCapture: true,
    onDragLeave: true,
    // onDragLeaveCapture: true,
    onDragOver: true,
    // onDragOverCapture: true,
    onDragStart: true,
    // onDragStartCapture: true,
    onDrop: true,
    // onDropCapture: true,
    onMouseDown: true,
    // onMouseDownCapture: true,
    onMouseEnter: true,
    onMouseLeave: true,
    onMouseMove: true,
    // onMouseMoveCapture: true,
    onMouseOut: true,
    // onMouseOutCapture: true,
    onMouseOver: true,
    // onMouseOverCapture: true,
    onMouseUp: true,
    // onMouseUpCapture: true,

    // // Selection Events
    // onSelect: true,
    // onSelectCapture: true,

    // Touch Events
    onTouchCancel: true,
    // onTouchCancelCapture: true,
    onTouchEnd: true,
    // onTouchEndCapture: true,
    onTouchMove: true,
    // onTouchMoveCapture: true,
    onTouchStart: true,
    // onTouchStartCapture: true,

    // Pointer Events
    onPointerDown: true,
    // onPointerDownCapture: true,
    onPointerMove: true,
    // onPointerMoveCapture: true,
    onPointerUp: true,
    // onPointerUpCapture: true,
    onPointerCancel: true,
    // onPointerCancelCapture: true,
    onPointerEnter: true,
    // onPointerEnterCapture: true,
    onPointerLeave: true,
    // onPointerLeaveCapture: true,
    onPointerOver: true,
    // onPointerOverCapture: true,
    onPointerOut: true,
    // onPointerOutCapture: true,
    // onGotPointerCapture: true,
    // onGotPointerCaptureCapture: true,
    // onLostPointerCapture: true,
    // onLostPointerCaptureCapture: true,

    // UI Events
    onScroll: true,
    // onScrollCapture: true,

    // Wheel Events
    onWheel: true,
    onWheelCapture: true,

    // // Animation Events
    // onAnimationStart: true,
    // onAnimationStartCapture: true,
    // onAnimationEnd: true,
    // onAnimationEndCapture: true,
    // onAnimationIteration: true,
    // onAnimationIterationCapture: true,

    // // Transition Events
    // onTransitionEnd: true,
    // onTransitionEndCapture: true,

    // >> Anchor attributes
    download: true,
    href: true,
    hrefLang: true,
    media: true,
    // ping: true,
    rel: true,
    target: true,
    type: true,
    referrerPolicy: true,

    // >> Button attributes
    autoFocus: true,
    disabled: true,
    form: true,
    formAction: true,
    formEncType: true,
    formMethod: true,
    // formNoValidate: true,
    formTarget: true,
    name: true,
    // type: true,
    value: true,

    // >> Form attributes
    // acceptCharset: true,
    // action: true,
    // autoComplete: true,
    // encType: true,
    // method: true,
    // name: true,
    // noValidate: true,
    // target: true,

    // >> Img attributes
    // alt: true,
    // crossOrigin: true,
    // decoding: true,
    // height: true,
    // loading: true,
    // referrerPolicy: true,
    // sizes: true,
    // src: true,
    // srcSet: true,
    // useMap: true,
    // width: true,

    // >> Input attributes
    accept: true,
    // alt: true,
    // autoComplete: true,
    // autoFocus: true,
    // capture: true, // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture
    checked: true,
    // crossOrigin: true,
    // disabled: true,
    // form: true,
    // formAction: true,
    // formEncType: true,
    // formMethod: true,
    // formNoValidate: true,
    // formTarget: true,
    // height: true,
    // list: true, // https://www.w3schools.com/tags/att_list.asp
    max: true,
    maxLength: true,
    min: true,
    minLength: true,
    multiple: true,
    // name: true,
    pattern: true,
    placeholder: true,
    readOnly: true,
    required: true,
    // size: true, // https://www.w3schools.com/tags/att_size.asp
    // src: true,
    step: true,
    // type: true,
    // value: true,
    // width: true,

    // onChange: true,

    // >> Label attributes
    // form: true,
    htmlFor: true,

    // >> Link attributes
    // as: true,
    // crossOrigin: true,
    // href: true,
    // hrefLang: true,
    // integrity: true,
    // media: true,
    // rel: true,
    // sizes: true,
    // type: true,
    // charSet: true,

    // >> Table attributes
    cellPadding: true,
    cellSpacing: true,
    summary: true,
    // width: true,

    // >> Textarea attributes
    // autoComplete: true,
    // autoFocus: true,
    cols: true,
    dirName: true,
    // disabled: true,
    // form: true,
    // maxLength: true,
    // minLength: true,
    // name: true,
    // placeholder: true,
    // readOnly: true,
    // required: true,
    rows: true,
    // value: true,
    wrap: true,

    // td attributes
    align: true,
    colSpan: true,
    headers: true,
    rowSpan: true,
    scope: true,
    // abbr: true, // https://www.geeksforgeeks.org/html-td-abbr-attribute/
    height: true,
    width: true,
    valign: true,

    // th attributes
    // align: true,
    // colSpan: true,
    // headers: true,
    // rowSpan: true,
    // scope: true,
    // abbr: true,
};

export const propsBlocker = {
    shouldForwardProp: (propName: PropNameType) => {
        if (propName in standardProps) {
            return true;
        }

        if (typeof propName === 'string') {
            if (propName.startsWith('data-') || propName.startsWith('aria-')) {
                return true;
            }
        }

        return false;
    },
};
