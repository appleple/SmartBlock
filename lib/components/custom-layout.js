"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var imagesLoaded = require("imagesloaded");
var utils_1 = require("../utils");
var useState = React.useState, useEffect = React.useEffect;
var getCustomLayout = function (props) {
    var menu = props.menu, view = props.view;
    var node = (0, utils_1.getParentNodeFromState)(view.state);
    if (!node || !menu || !menu.length) {
        return;
    }
    var name = node.type.name;
    var selectedItem = menu.find(function (item) {
        if (item.name === name) {
            return true;
        }
        return false;
    });
    if (!selectedItem) {
        return null;
    }
    if (selectedItem.customLayout) {
        return selectedItem.customLayout;
    }
    return null;
};
var useImagesLoaded = function (dom) {
    var _a = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0
    }), size = _a[0], setSize = _a[1];
    useEffect(function () {
        imagesLoaded(dom, function () {
            var newSize = dom.getBoundingClientRect();
            if (size.height !== newSize.height) {
                setSize(newSize);
            }
        });
    });
    return size;
};
exports.default = (function (props) {
    var customLayout = getCustomLayout(props);
    if (!customLayout) {
        return null;
    }
    var view = props.view;
    var pos = (0, utils_1.calculateStyle)(props.view);
    var parentNode = (0, utils_1.getParentNodeFromState)(view.state);
    var parentPos = (0, utils_1.findNodePosition)(view.state.doc, parentNode);
    var dom = view.nodeDOM(parentPos);
    var style = {
        position: 'absolute',
        zIndex: 10,
        top: pos.top,
        left: 0,
        right: 0
    };
    var size = useImagesLoaded(dom);
    if (!size.height) {
        return null;
    }
    return React.createElement("div", { style: style }, customLayout(props.view, dom));
});
//# sourceMappingURL=custom-layout.js.map