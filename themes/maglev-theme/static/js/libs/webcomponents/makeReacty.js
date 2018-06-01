//@skatejs/val

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _window = window,
    customElements = _window.customElements;

var cacheCtorLocalNames = new Map();
var cacheElementEventHandlers = new WeakMap();

// Override customElements.define() to cache constructor local names.
if (customElements) {
  var define = customElements.define;

  customElements.define = function (name, Ctor) {
    cacheCtorLocalNames.set(Ctor, name);
    return define.call(customElements, name, Ctor);
  };
}

// Applies attributes to the ref element. It doesn't traverse through
// existing attributes and assumes that the supplied object will supply
// all attributes that the applicator should care about, even ones that
// should be removed.
function applyAttrs(e, attrs) {
  if (!attrs) return;

  Object.keys(attrs).forEach(function (name) {
    var value = attrs[name];
    if (value == null) {
      e.removeAttribute(name);
    } else {
      e.setAttribute(name, value);
    }
  });
}

function applyEvents(e) {
  var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var handlers = cacheElementEventHandlers.get(e) || {};
  cacheElementEventHandlers.set(e, events);

  // Remove any old listeners that are different - or aren't specified
  // in - the new set.
  Object.keys(handlers).forEach(function (name) {
    if (handlers[name] && handlers[name] !== events[name]) {
      e.removeEventListener(name, handlers[name]);
    }
  });

  // Bind new listeners.
  Object.keys(events).forEach(function (name) {
    if (events[name] !== handlers[name]) {
      e.addEventListener(name, events[name]);
    }
  });
}

// Sets props. Straight up.
function applyProps(e, props) {
  Object.keys(props || {}).forEach(function (name) {
    e[name] = props[name];
  });
}

// Ensures that if a ref was specified that it's called as normal.
function applyRef(e, ref) {
  if (ref) {
    ref(e);
  }
}

// Ensures attrs, events and props are all set as the consumer intended.
function ensureAttrs(objs) {
  var _ref = objs || {},
      attrs = _ref.attrs,
      events = _ref.events,
      ref = _ref.ref,
      key = _ref.key,
      props = _objectWithoutProperties(_ref, ['attrs', 'events', 'ref', 'key']);

  var newRef = ensureRef({ attrs: attrs, events: events, props: props, ref: ref });
  return { ref: newRef, key: key };
}

// Ensures a ref is supplied that set each member appropriately and that
// the original ref is called.
function ensureRef(_ref2) {
  var attrs = _ref2.attrs,
      events = _ref2.events,
      props = _ref2.props,
      ref = _ref2.ref;

  return function (e) {
    if (e) {
      applyAttrs(e, attrs);
      applyEvents(e, events);
      applyProps(e, props);
    }
    applyRef(e, ref);
  };
}

// Returns the custom element local name if it exists or the original
// value.
function ensureLocalName(lname) {
  var temp = cacheCtorLocalNames.get(lname);
  return temp || lname;
}

// Provides a function that takes the original createElement that is being
// wrapped. It returns a function that you call like you normally would.
//
// It requires support for:
// - `ref`
function val(createElement) {
  return function () {
    var lname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var attrs = arguments[1];

    lname = ensureLocalName(lname);
    attrs = typeof lname === 'string' ? ensureAttrs(attrs) : attrs;

    for (var _len = arguments.length, chren = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      chren[_key - 2] = arguments[_key];
    }

    return createElement.apply(undefined, [lname, attrs].concat(chren));
  };
}

var h = val(React.createElement);

//makeReacty elements

var makeReacty = tagName => (props) => {
    let attrsObj = {}, funcObj = {}, objObj = {}, boolObj={}, numberObj={}, DaddyObj = {};
    let attrsKeys = [];
    Object.keys(props).map((item)=>{
        attrsKeys.push(item);
    })
    Object.values(props).forEach((item, index)=>{
        let name;
        switch (typeof item) {
            case 'string':
                name = attrsKeys[index];
                attrsObj[name] = item;
                break;
            case 'number':
                name = attrsKeys[index];
                numberObj[name] = item;
                break;
            case 'function':
                name = attrsKeys[index];
                funcObj[name] = item;
                break;
            case 'object':
                if (attrsKeys[index] !== 'children'){
                    name = attrsKeys[index];
                    objObj[name] = item;
                } else {
                    console.log('I am an object and children');
                }
                break;
            case 'boolean':
                name = attrsKeys[index];
                boolObj[name] = item;
                break;
        }
        
    })
    DaddyObj = Object.assign({ events: funcObj, attrs: attrsObj }, objObj, boolObj, numberObj);


    let addRef;
    let Arraytest=[]
    if (typeof props.children==='object') {
        Object.values(props.children).forEach((item,index)=>{
            if (item.props.slot === undefined){
                console.log("no slots detected")
            } else {
                addRef =  Object.assign(item, { ref: e => (e)? e.setAttribute('slot', item.props.slot):''}); 
            }
            //finalChildren = Object.assign(finalChildren, addRef)
            Arraytest.push(addRef)
        })
    } else if (typeof props.children==='string') {
        Arraytest = props.children
    }
    return h(tagName, DaddyObj, Arraytest); 
}

var DnxSidebar = makeReacty('dnx-sidebar');
var DnxButton = makeReacty('dnx-button');
var DnxTableContent = makeReacty('dnx-table-content');
var DnxTableHeader = makeReacty('dnx-table-header');
var DnxTableFooter = makeReacty('dnx-table-footer');
var DnxTableSearch = makeReacty('dnx-table-search');
var DnxTableShowMore = makeReacty('dnx-table-show-more');
var DnxTableShowMoreHeader = makeReacty('dnx-table-show-more-header');
var DnxTableShowMoreHeaderSearch = makeReacty('dnx-table-show-more-header-search');
var DnxIcon = makeReacty('dnx-icon');
var DnxDonut = makeReacty('dnx-donut-chart');
var DnxDoubleDonut = makeReacty('dnx-doubledonut-chart');
var DnxTimeline = makeReacty('dnx-timeline-chart');
var DnxTimelineT = makeReacty('dnx-timeline-t-chart');
var DnxBar = makeReacty('dnx-bar-chart');
var DnxBubble = makeReacty('dnx-bubble-chart');
var DnxHBar = makeReacty('dnx-hbar-chart');
var DnxTimelineT2X = makeReacty('dnx-timeline-t2x-chart');

var DnxTimelineS = makeReacty('dnx-timeline-slider-chart');