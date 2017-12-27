(function(e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      exports: {},
      id: n,
      loaded: false
    };
    e[n].call(a.exports, a, a.exports, r);
    a.loaded = true;
    return a.exports
  }
  r.m = e;
  r.c = t;
  r.p = "";
  return r(0)
})([function(e, t, r) {
  r(1);
  r(3);
  e.exports = r(4)
}, function(e, t, r) {
  e.exports = r(2)(587)
}, function(e, t) {
  e.exports = vendor_84f4b31cdc756748de32
}, function(e, t, r) {
  e.exports = r(2)(845)
}, function(e, t, r) {
  "use strict";
  var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) {
        if (Object.prototype.hasOwnProperty.call(r, n)) {
          e[n] = r[n]
        }
      }
    }
    return e
  };
  var a = r(5);
  var o = O(a);
  var i = r(6);
  var s = O(i);
  var u = r(14);
  var l = O(u);
  var c = r(17);
  var d = O(c);
  var f = r(18);
  var p = O(f);
  var v = r(19);
  var h = O(v);
  var y = r(20);
  var m = O(y);
  var g = r(22);
  var _ = O(g);
  var b = r(36);
  var k = r(38);
  var w = O(k);
  var T = r(39);
  var C = O(T);

  function O(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function E(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) {
        r[t] = e[t]
      }
      return r
    } else {
      return Array.from(e)
    }
  }
  window.customerComponents = {
    loadComponent: function e(t, r, a) {
      switch (t) {
        case "main-menu-shortcuts":
          return o.default.createElement(s.default, a);
        case "main-menu-workflownavigation":
          a.modules = [].concat(E(a.modules), [{
            name: "SmartVision",
            additionalButtons: (0, b.getAdditionalMainMenuButtons)()
          }]);
          return o.default.createElement(r, a);
        case "editor-field-revertState":
          if (a.certificate.isTemplateBased && a.certificate.riskOfWork !== "Normal" && a.certificate.kind === "Permit" && a.certificate.state === "Approved") {
            return o.default.createElement("span", null)
          }
          return o.default.createElement(r, a);
        case "editor-field-initialRisk":
          return o.default.createElement(r, n({}, a, {
            riskMatrix: l.default,
            riskValue: d.default
          }));
        case "editor-field-residualRisk":
          return o.default.createElement(r, n({}, a, {
            riskMatrix: l.default,
            riskValue: d.default
          }));
        case "editor-field-riskAssessmentTasks":
          return o.default.createElement(_.default, n({}, a, {
            riskMatrix: l.default,
            riskValue: p.default
          }));
        case "editor-field-isolationCertificateRequirement":
          return o.default.createElement(m.default, a);
        case "editor-field-highestResidualRisk":
          return o.default.createElement(h.default, a);
        case "editor-signaturefield-informAboutAmendedIccAttachment":
          return o.default.createElement(w.default, {
            registrationNumber: a.certificate.registrationNumber
          });
        case "editor-field-riskAssessmentLevel":
          {
            var i = function e(t, r) {
              if (r !== "Level2") {
                a.onChange({
                  authorities: "RiskAssessmentFacilitator"
                }, [])
              }
              a.onChange(t, r)
            };
            return o.default.createElement(r, n({}, a, {
              onChange: i
            }))
          }
        case "editor-field-partlySignedWarning":
          {
            return o.default.createElement(C.default, a)
          }
        case "editor-action-goToWizardStep":
          {
            var u = a.certificate;
            var c = u.origins || [];
            if (c.some(function(e) {
                return e === "Template"
              }) && (u.riskOfWork === "Low" || !u.riskOfWork)) {
              if (a.action.wizardStepId === "Revalidation" || a.action.titleResource === "RevertPermitToSuspendedAction") {
                return o.default.createElement("span", null)
              }
            }
            return o.default.createElement(r, a)
          }
        default:
          return null
      }
    },
    preWizardConfig: function e(t, r, n) {
      var a = {
        questionnaire: {
          show: n && r.toLowerCase() === "draft",
          showRiskRecommendation: true,
          showRiskOfWorkRecommendation: false
        },
        workorder: {
          show: !!t.workspace.workOrder && r.toLowerCase() === "draft" && t.name.toLowerCase() !== "leak"
        },
        newCertificate: {
          show: r.toLowerCase() === "draft" || t.name.toLowerCase() === "operationalriskassessment" && r.toLowerCase() === "requested" || t.name.toLowerCase() === "lolcoperationalinspection" && r.toLowerCase() === "record"
        }
      };
      if (t.name === "Permit") {
        a.templates = [{
          key: "LrpTemplate",
          show: r.toLowerCase() === "draft",
          filter: {
            risksOfWork: ["Low", null]
          },
          creationState: "Approved"
        }, {
          key: "PermitTemplate",
          show: r.toLowerCase() === "draft",
          filter: {
            risksOfWork: ["Normal"]
          },
          creationState: "Approved"
        }]
      }
      if (t.name === "Isolation") {
        a.template = {
          show: r.toLowerCase() === "draft",
          creationState: "WaitingForAuthorization"
        }
      }
      return a
    }
  }
}, function(e, t, r) {
  e.exports = r(2)(1)
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(5);
  var o = u(a);
  var i = r(7);
  var s = u(i);

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function l(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function c(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function d(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var f = function(e) {
    d(t, e);

    function t() {
      l(this, t);
      return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    n(t, [{
      key: "render",
      value: function e() {
        return o.default.createElement("ul", null, o.default.createElement(s.default, {
          id: "draftPermits",
          resourceKey: "PermitVision.label_shortcuts_draftpermits",
          href: "permitvision/workspace/#/Permit/Draft/new",
          cssClass: "icon-buttons-Permit_Draft"
        }), o.default.createElement(s.default, {
          id: "draftIsolations",
          resourceKey: "PermitVision.label_shortcuts_draftisolation",
          href: "permitvision/workspace/#/Isolation/Draft/new",
          cssClass: "icon-buttons-Isolation_Draft"
        }), o.default.createElement(s.default, {
          id: "searchPermits",
          resourceKey: "PermitVision.label_shortcuts_search",
          href: "permitvision/SearchCertificates/#/Permit",
          cssClass: "icon-buttons-SearchCertificates"
        }), o.default.createElement(s.default, {
          id: "showCCR",
          resourceKey: "PermitVision.CommandDefinition_CCR",
          href: "permitvision/ShowCcr/#/Permit",
          cssClass: "icon-buttons-ShowCcr"
        }), o.default.createElement(s.default, {
          id: "taskMonitoring",
          resourceKey: "PermitVision.CommandDefinition_TaskMonitoringOverview",
          href: "permitvision/showtaskmonitoringoverview/#/Permit",
          cssClass: "icon-buttons-ShowTaskMonitoringOverview"
        }), o.default.createElement(s.default, {
          id: "pbuOverview",
          resourceKey: "PermitVision.CommandDefinition_PbuOverview",
          href: "permitvision/showpbuoverview/#/Isolation",
          cssClass: "icon-buttons-ShowPbuOverview"
        }), o.default.createElement(s.default, {
          id: "gasMeasurementsOverview",
          resourceKey: "PermitVision.CommandDefinition_GasMeasurementsOverview",
          href: "permitvision/showgasmeasurementsoverview/#/Permit",
          cssClass: "icon-buttons-ShowGasMeasurementsOverview"
        }), o.default.createElement(s.default, {
          id: "lolcRegister",
          resourceKey: "PermitVision.CommandDefinition_LolcRegistry",
          href: "permitvision/ShowLockOpenLockClosedRegistry/#/LolcMovement",
          cssClass: "icon-buttons-ShowLockOpenLockClosedRegistry"
        }), o.default.createElement(s.default, {
          id: "scan",
          resourceKey: "PermitVision.Shortcuts_Scan",
          onClick: this.props.openBarcodeScanner,
          cssClass: "icon-buttons-scan"
        }))
      }
    }]);
    return t
  }(o.default.PureComponent);
  f.propTypes = {
    openBarcodeScanner: o.default.PropTypes.func.isRequired
  };
  t.default = f
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = r(8);
  var a = s(n);
  var o = r(9);
  var i = s(o);

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var u = a.default.createClass({
    displayName: "ShortcutItem",
    propTypes: {
      onClick: a.default.PropTypes.func,
      resourceKey: a.default.PropTypes.string.isRequired,
      cssClass: a.default.PropTypes.string.isRequired,
      href: a.default.PropTypes.string
    },
    render: function e() {
      var t = this.props.href || "#";
      var r;
      var n = a.default.createElement("div", {
        className: "menu-btn menu-btn-alt"
      }, a.default.createElement("div", {
        className: "menu-btn-icon " + this.props.cssClass
      }), a.default.createElement(i.default, {
        content: this.props.resourceKey,
        className: "menu-btn-title"
      }));
      if (t && t !== "#") {
        r = a.default.createElement("a", {
          onClick: this.props.onClick,
          href: t
        }, n)
      } else {
        r = a.default.createElement("a", {
          onClick: this.props.onClick
        }, n)
      }
      return a.default.createElement("li", {
        className: "shortcut-item",
        "data-shortcut-key": this.props.resourceKey.split(".")[1]
      }, r)
    }
  });
  t.default = u
}, function(e, t, r) {
  e.exports = r(2)(583)
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(8);
  var o = c(a);
  var i = r(10);
  var s = c(i);
  var u = r(13);
  var l = c(u);

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function d(e, t) {
    var r = {};
    for (var n in e) {
      if (t.indexOf(n) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
      r[n] = e[n]
    }
    return r
  }

  function f(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function p(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function v(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var h = function(e) {
    v(t, e);

    function t() {
      f(this, t);
      return p(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    n(t, [{
      key: "shouldComponentUpdate",
      value: function e(t) {
        return !(0, l.default)(this.props, t)
      }
    }, {
      key: "_searchResource",
      value: function e(t, r, n) {
        var a = s.default.translate(t, r);
        if (n && a.indexOf("missing translation:") !== -1) {
          if (n[0] === ":") {
            a = s.default.translate(n.substring(1, n.length))
          } else {
            a = n
          }
        }
        return a
      }
    }, {
      key: "render",
      value: function e() {
        var t = this.props,
          r = t.with,
          n = t.fallback,
          a = t.content,
          i = t.component,
          u = t.attributes,
          l = d(t, ["with", "fallback", "content", "component", "attributes"]);
        if (u) {
          Object.keys(u).forEach(function(e) {
            l[e] = s.default.translate(u[e])
          })
        }
        if (!a) {
          return o.default.createElement(i, l, this.props.children)
        }
        var c = this._searchResource(a, r, n);
        return o.default.createElement(i, l, c)
      }
    }]);
    return t
  }(o.default.Component);
  h.propTypes = {
    content: o.default.PropTypes.string,
    component: o.default.PropTypes.oneOfType([o.default.PropTypes.string, o.default.PropTypes.func]),
    with: o.default.PropTypes.object,
    attributes: o.default.PropTypes.object,
    fallback: o.default.PropTypes.string,
    children: o.default.PropTypes.node
  };
  h.defaultProps = {
    component: "span",
    with: {}
  };
  t.default = h
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = r(11);
  var a = i(n);
  var o = r(12);

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  if (!a.default.translateOrig) {
    a.default.translateOrig = a.default.translate.bind(a.default);
    a.default.translate = function(e) {
      for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
        r[n - 1] = arguments[n]
      }
      try {
        return a.default.translateOrig.apply(a.default, [e].concat(r))
      } catch (t) {
        var i = "translation failed: " + e + " " + t.message;
        (0, o.addGlobalError)(i, false);
        return i
      }
    }
  }
  t.default = a.default
}, function(e, t, r) {
  e.exports = r(2)(822)
}, function(e, t, r) {
  e.exports = r(2)(302)
}, function(e, t, r) {
  e.exports = r(2)(392)
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(5);
  var o = v(a);
  var i = r(11);
  var s = v(i);
  var u = r(15);
  var l = v(u);
  var c = r(16);
  var d = v(c);
  var f = r(9);
  var p = v(f);

  function v(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function h(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function y(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function m(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var g = function(e) {
    m(t, e);

    function t(e) {
      h(this, t);
      var r = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      r.state = {
        annotationText: ""
      };
      return r
    }
    n(t, [{
      key: "_onRiskRatingClicked",
      value: function e(r, n, a) {
        var o = d.default.find(t._areas, function(e) {
          var t = e.ratings;
          return t.some(function(e) {
            return e === a
          })
        });
        this.props.onRiskRatingClicked(r, n, a, o.value)
      }
    }, {
      key: "_getLikelihoodHeaders",
      value: function e() {
        return t._likelihoods.map(function(e) {
          return o.default.createElement("th", {
            className: "likelihood",
            key: "likelihoodHeader" + e
          }, o.default.createElement("div", {
            className: "likelihoodTitle"
          }, e), o.default.createElement(p.default, {
            component: "div",
            className: "likelihoodSubTitle",
            content: "PermitVision.RiskMatrix_Likelihood_SubTitle_" + e
          }))
        })
      }
    }, {
      key: "_getProbabilityHeaders",
      value: function e() {
        return t._likelihoods.map(function(e) {
          return o.default.createElement(p.default, {
            component: "th",
            content: "PermitVision.RiskMatrix_Probability_" + e,
            className: "probability",
            key: "probabilityHeader" + e
          })
        })
      }
    }, {
      key: "_getCell",
      value: function e(t, r) {
        var n = this;
        var a = "" + t + r;
        return o.default.createElement("td", {
          className: "severityLevel " + a,
          key: "severitycell" + a
        }, o.default.createElement("button", {
          className: "severitybutton " + a,
          onClick: this._onRiskRatingClicked.bind(this, t, r, a),
          onMouseEnter: function e() {
            return n.setState({
              annotationText: s.default.translate("PermitVision.RiskMatrix_Risk_" + a + "_Annotation")
            })
          },
          onMouseLeave: function e() {
            return n.setState({
              annotationText: ""
            })
          }
        }, o.default.createElement(p.default, {
          component: "div",
          content: "PermitVision.RiskMatrix_RiskRating_" + a
        })))
      }
    }, {
      key: "render",
      value: function e() {
        var r = this.props.hazard;
        var n = r ? o.default.createElement("div", {
          className: "hazard-header"
        }, o.default.createElement(p.default, {
          content: "PermitVision.Label_SelectInitialOrResidualRisk",
          component: "label"
        }), o.default.createElement("span", {
          className: "unlisted"
        }, r.unlistedDescription)) : null;
        return o.default.createElement("div", {
          className: "riskMatrixColors"
        }, n, o.default.createElement("table", null, o.default.createElement("thead", null, o.default.createElement("tr", null, o.default.createElement("th", {
          colSpan: "2",
          rowSpan: "2"
        }), o.default.createElement(p.default, {
          component: "th",
          content: "PermitVision.RiskMatrix_Likelihood_Header",
          colSpan: t._likelihoods.length,
          className: "likelihoodHeader"
        })), o.default.createElement("tr", null, this._getLikelihoodHeaders()), o.default.createElement("tr", null, o.default.createElement(p.default, {
          component: "th",
          content: "PermitVision.RiskMatrix_Probability_Header",
          colSpan: "2",
          className: "probabilityHeader"
        }), this._getProbabilityHeaders("A", "1"))), o.default.createElement("tbody", null, o.default.createElement("tr", {
          key: "severityRowA"
        }, o.default.createElement("td", {
          rowSpan: "8",
          className: "severityHeader"
        }, o.default.createElement("div", {
          className: "wrapper"
        }, o.default.createElement(p.default, {
          component: "div",
          className: "innerWrapper",
          content: "PermitVision.RiskMatrix_Severity_Header"
        }))), o.default.createElement("td", {
          className: "levelHeader"
        }, "A"), this._getCell("A", "1"), this._getCell("A", "2"), this._getCell("A", "3"), this._getCell("A", "4"), this._getCell("A", "5"), this._getCell("A", "6"), this._getCell("A", "7"), this._getCell("A", "8"), o.default.createElement("td", {
          rowSpan: "4",
          className: "severityLevel A8 area"
        }, "Area V")), o.default.createElement("tr", {
          key: "severityRowB"
        }, o.default.createElement("td", {
          className: "levelHeader"
        }, "B"), this._getCell("B", "1"), this._getCell("B", "2"), this._getCell("B", "3"), this._getCell("B", "4"), this._getCell("B", "5"), this._getCell("B", "6"), this._getCell("B", "7"), this._getCell("B", "8")), o.default.createElement("tr", {
          key: "severityRowC"
        }, o.default.createElement("td", {
          className: "levelHeader"
        }, "C"), this._getCell("C", "1"), this._getCell("C", "2"), this._getCell("C", "3"), this._getCell("C", "4"), this._getCell("C", "5"), this._getCell("C", "6"), this._getCell("C", "7"), this._getCell("C", "8")), o.default.createElement("tr", {
          key: "severityRowD"
        }, o.default.createElement("td", {
          className: "levelHeader"
        }, "D"), this._getCell("D", "1"), this._getCell("D", "2"), this._getCell("D", "3"), this._getCell("D", "4"), this._getCell("D", "5"), this._getCell("D", "6"), this._getCell("D", "7"), this._getCell("D", "8")), o.default.createElement("tr", {
          key: "severityRowE"
        }, o.default.createElement("td", {
          className: "levelHeader"
        }, "E"), this._getCell("E", "1"), this._getCell("E", "2"), this._getCell("E", "3"), this._getCell("E", "4"), this._getCell("E", "5"), this._getCell("E", "6"), this._getCell("E", "7"), this._getCell("E", "8"), o.default.createElement("td", {
          className: "severityLevel E8 area"
        }, "Area IV")), o.default.createElement("tr", {
          key: "severityRowF"
        }, o.default.createElement("td", {
          className: "levelHeader"
        }, "F"), this._getCell("F", "1"), this._getCell("F", "2"), this._getCell("F", "3"), this._getCell("F", "4"), this._getCell("F", "5"), this._getCell("F", "6"), this._getCell("F", "7"), this._getCell("F", "8"), o.default.createElement("td", {
          className: "severityLevel F8 area"
        }, "Area III")), o.default.createElement("tr", {
          key: "severityRowG"
        }, o.default.createElement("td", {
          className: "levelHeader"
        }, "G"), this._getCell("G", "1"), this._getCell("G", "2"), this._getCell("G", "3"), this._getCell("G", "4"), this._getCell("G", "5"), this._getCell("G", "6"), this._getCell("G", "7"), this._getCell("G", "8"), o.default.createElement("td", {
          className: "severityLevel G8 area"
        }, "Area II")), o.default.createElement("tr", {
          key: "severityRowH"
        }, o.default.createElement("td", {
          className: "levelHeader"
        }, "H"), this._getCell("H", "1"), this._getCell("H", "2"), this._getCell("H", "3"), this._getCell("H", "4"), this._getCell("H", "5"), this._getCell("H", "6"), this._getCell("H", "7"), this._getCell("H", "8"), o.default.createElement("td", {
          className: "severityLevel H8 area"
        }, "Area I")))), o.default.createElement("div", {
          className: "riskMatrixAnnotation"
        }, o.default.createElement("div", {
          className: (0, l.default)("alert", {
            hidden: !this.state.annotationText
          })
        }, o.default.createElement("span", {
          className: "glyphicon glyphicon-info-sign"
        }), o.default.createElement("p", {
          className: "alert-content"
        }, this.state.annotationText))))
      }
    }]);
    return t
  }(o.default.Component);
  g._likelihoods = ["1", "2", "3", "4", "5", "6", "7", "8"];
  g._severityLevels = [{
    level: "A",
    ratings: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"]
  }, {
    level: "B",
    ratings: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"]
  }, {
    level: "C",
    ratings: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"]
  }, {
    level: "D",
    ratings: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"]
  }, {
    level: "E",
    ratings: ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"]
  }, {
    level: "F",
    ratings: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"]
  }, {
    level: "G",
    ratings: ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"]
  }, {
    level: "H",
    ratings: ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"]
  }];
  g._areas = [{
    value: "1",
    ratings: ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "G1", "G2", "G3", "G4", "F1", "F2", "F3", "E1", "E2"]
  }, {
    value: "2",
    ratings: ["D1", "D2", "E3", "F4", "G5", "G6", "G7", "G8"]
  }, {
    value: "3",
    ratings: ["F5", "F6", "F7", "F8"]
  }, {
    value: "4",
    ratings: ["A1", "B1", "B2", "C1", "C2", "C3", "D3", "D4", "D5", "E4", "E5", "E6", "E7", "E8"]
  }, {
    value: "5",
    ratings: ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B3", "B4", "B5", "B6", "B7", "B8", "C4", "C5", "C6", "C7", "C8", "D6", "D7", "D8"]
  }];
  g.propTypes = {
    onRiskRatingClicked: o.default.PropTypes.func.isRequired,
    hazard: o.default.PropTypes.object
  };
  t.default = g
}, function(e, t, r) {
  e.exports = r(2)(9)
}, function(e, t, r) {
  e.exports = r(2)(976)
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(5);
  var o = u(a);
  var i = r(9);
  var s = u(i);

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function l(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function c(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function d(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var f = function(e) {
    d(t, e);

    function t() {
      l(this, t);
      return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    n(t, [{
      key: "render",
      value: function e() {
        var t = this.props.risk;
        if (!t || !t.rating) {
          return null
        }
        return o.default.createElement("div", {
          className: "risk-box " + t.rating
        }, o.default.createElement("span", {
          className: "rating"
        }, o.default.createElement(s.default, {
          content: "PermitVision.RiskMatrix_RiskRating_" + t.rating
        })), o.default.createElement("span", {
          className: "severityandlikelihood"
        }, t.rating))
      }
    }]);
    return t
  }(o.default.Component);
  f.propTypes = {
    risk: o.default.PropTypes.shape({
      rating: o.default.PropTypes.string,
      severity: o.default.PropTypes.string,
      likelihood: o.default.PropTypes.string
    })
  };
  t.default = f
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = r(5);
  var a = d(n);
  var o = r(15);
  var i = d(o);
  var s = r(9);
  var u = d(s);
  var l = r(11);
  var c = d(l);

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var f = function e(t) {
    var r = t.risk,
      n = t.typeOfRisk,
      o = t.editMode,
      s = t.onRiskClicked,
      l = t.visible,
      d = t.className;
    if (!l) return null;
    var f = (0, i.default)("risk-box risk-box-for-task-steps " + d + " " + n + "-risk-column " + r.rating, {
      editable: o
    });
    if (!r || !r.rating) {
      var p = f + " not-set";
      var v = o ? c.default.translate("PermitVision.label_risk_value_set_risk") : c.default.translate("PermitVision.label_risk_value_not_set");
      return a.default.createElement("div", {
        onClick: o ? s : null,
        className: p
      }, v)
    }
    return a.default.createElement("div", {
      onClick: o ? s : null,
      className: f
    }, a.default.createElement("span", null, a.default.createElement("span", {
      className: "rating"
    }, a.default.createElement(u.default, {
      content: "PermitVision.RiskMatrix_RiskRating_" + r.rating,
      className: "rating"
    })), r.rating))
  };
  f.propTypes = {
    risk: a.default.PropTypes.shape({
      rating: a.default.PropTypes.string,
      severity: a.default.PropTypes.string,
      likelihood: a.default.PropTypes.string
    }),
    typeOfRisk: a.default.PropTypes.oneOf(["initial", "residual"]).isRequired,
    onRiskClicked: a.default.PropTypes.func,
    editMode: a.default.PropTypes.bool,
    visible: a.default.PropTypes.bool,
    className: a.default.PropTypes.string
  };
  f.defaultProps = {
    editMode: false,
    risk: {
      rating: ""
    },
    visible: true,
    onRiskClicked: function e() {},
    className: ""
  };
  t.default = f
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(5);
  var o = v(a);
  var i = r(11);
  var s = v(i);
  var u = r(16);
  var l = v(u);
  var c = r(9);
  var d = v(c);
  var f = r(17);
  var p = v(f);

  function v(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function h(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function y(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function m(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var g = function(e) {
    m(t, e);

    function t() {
      h(this, t);
      return y(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    n(t, [{
      key: "render",
      value: function e() {
        if (this.props.certificate.riskAssessmentLevel !== "Level2") {
          return null
        }
        var t = [].concat.apply([], this.props.certificate.riskAssessmentTasks.map(function(e) {
          return e.hazards
        })).filter(function(e) {
          return e.residualRisk
        });
        var r = l.default.maxBy(t, function(e) {
          var t = s.default.translate("PermitVision.RiskMatrix_RiskRating_" + e.residualRisk.rating);
          return +t
        });
        return o.default.createElement("div", {
          className: "row risk-field editrow"
        }, o.default.createElement("div", {
          className: "fieldname"
        }, o.default.createElement(d.default, {
          content: "PermitVision.Label_TaskStepField_HighestResidualRisk"
        })), o.default.createElement("div", {
          className: "fieldvalue"
        }, r ? o.default.createElement(p.default, {
          risk: r.residualRisk
        }) : null))
      }
    }]);
    return t
  }(o.default.Component);
  g.rowClass = "highestResidualRisk-field";
  g.propTypes = {
    certificate: o.default.PropTypes.object.isRequired
  };
  t.default = g
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(5);
  var o = c(a);
  var i = r(9);
  var s = c(i);
  var u = r(21);
  var l = c(u);

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function d(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function f(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function p(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var v = function(e) {
    p(t, e);

    function t(e) {
      d(this, t);
      var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      r._onRequirementChanged = r._onRequirementChanged.bind(r);
      r._onInterlockChanged = r._onInterlockChanged.bind(r);
      r._getDisplayValue = r._getDisplayValue.bind(r);
      r._getAllowedRequirementsOptions = r._getAllowedRequirementsOptions.bind(r);
      r._getCheckedCode = r._getCheckedCode.bind(r);
      return r
    }
    n(t, [{
      key: "componentWillMount",
      value: function e() {
        var t = this._getCheckedCode();
        if (!this.props.data && t) {
          this.props.onChange(this.props.options.propertyName, t)
        }
      }
    }, {
      key: "_onRequirementChanged",
      value: function e(t) {
        this.props.onChange(this.props.options.propertyName, t.target.value)
      }
    }, {
      key: "_onInterlockChanged",
      value: function e(t) {
        this.props.onChange({
          textProperties: "Interlocked"
        }, t.target.checked ? "Yes" : "No")
      }
    }, {
      key: "_getDisplayValue",
      value: function e(t, r) {
        var n = this.props.certificate.textProperties;
        var a = !!n.Interlocked && n.Interlocked === "Yes";
        var i = r && a ? "Interlocked" : "";
        return t ? o.default.createElement(s.default, {
          content: "PermitVision.IsolationcertificateRequirement" + i + "_" + t
        }) : ""
      }
    }, {
      key: "_getAllowedRequirementsOptions",
      value: function e() {
        return this.props.options.field.allowedRequirementOptions ? this.props.options.field.allowedRequirementOptions.split(",").map(function(e) {
          return e.trim()
        }) : ["None", "Personal", "Full"]
      }
    }, {
      key: "_getCheckedCode",
      value: function e() {
        return this.props.data ? this.props.data : this.props.options.field.defaultOption || "None"
      }
    }, {
      key: "render",
      value: function e() {
        var t = this;
        if (this.props.editMode) {
          var r = this._getCheckedCode();
          var n = this._getAllowedRequirementsOptions().map(function(e, n) {
            var a = t._getDisplayValue(e, false);
            var i = e === r;
            return o.default.createElement("div", {
              key: n,
              className: "radio radio-inline"
            }, o.default.createElement("label", {
              key: n
            }, o.default.createElement("input", {
              type: "radio",
              id: "isolationCertificateRequirement_" + e,
              name: "isolationCertificateRequirement",
              value: e || "",
              onChange: t._onRequirementChanged,
              checked: i
            }), " ", a))
          });
          var a = o.default.createElement("div", {
            className: "checkbox checkbox-inline"
          }, o.default.createElement("label", null, o.default.createElement("input", {
            type: "checkbox",
            id: "isolationCertificateRequirementInterlocked",
            onChange: this._onInterlockChanged,
            checked: this.props.certificate.textProperties.Interlocked === "Yes"
          }), " ", o.default.createElement(s.default, {
            content: "PermitVision.Label_IsolationCertificateRequirement_Interlocked"
          })));
          var i = this.props.options.field.isRequired ? "is-required" : "";
          return o.default.createElement("div", {
            className: "isolationCertificateRequirementField"
          }, o.default.createElement("div", {
            className: "row editrow"
          }, o.default.createElement("div", {
            className: "fieldname"
          }, o.default.createElement(s.default, {
            content: "PermitVision.Label_IsolationCertificateRequirement",
            className: "control-label " + i
          })), o.default.createElement("div", {
            className: "fieldvalue"
          }, o.default.createElement("div", {
            className: "form-inline"
          }, n, a))))
        }
        var u = this._getDisplayValue(this.props.data, true);
        return o.default.createElement(l.default, {
          resourceKey: "PermitVision.Label_IsolationCertificateRequirement",
          fieldValue: u
        })
      }
    }]);
    return t
  }(o.default.Component);
  v.propTypes = {
    data: o.default.PropTypes.string,
    onChange: o.default.PropTypes.func.isRequired,
    options: o.default.PropTypes.object.isRequired,
    editMode: o.default.PropTypes.bool.isRequired,
    certificate: o.default.PropTypes.object.isRequired
  };
  v.rowClass = "isolationCertificateRequirement-field";
  t.default = v
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
    return typeof e
  } : function(e) {
    return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  var a = r(5);
  var o = u(a);
  var i = r(9);
  var s = u(i);

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = o.default.createClass({
    displayName: "ReadonlyRow",
    propTypes: {
      resourceKey: o.default.PropTypes.string.isRequired,
      fieldValue: o.default.PropTypes.oneOfType([o.default.PropTypes.string, o.default.PropTypes.object, o.default.PropTypes.bool, o.default.PropTypes.node])
    },
    render: function e() {
      var t = o.default.createElement("span", null, this.props.fieldValue || "");
      if (typeof this.props.fieldValue === "boolean") {
        t = o.default.createElement(s.default, {
          content: "PermitVision." + (this.props.fieldValue ? "Label_Yes" : "Label_No")
        })
      }
      if (n(this.props.fieldValue) === "object") {
        t = this.props.fieldValue
      }
      return o.default.createElement("div", {
        className: "row readonlyrow"
      }, o.default.createElement("div", {
        className: "fieldname"
      }, o.default.createElement(s.default, {
        content: this.props.resourceKey
      })), o.default.createElement("div", {
        className: "fieldvalue"
      }, t))
    }
  });
  t.default = l
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(5);
  var o = T(a);
  var i = r(11);
  var s = T(i);
  var u = r(15);
  var l = T(u);
  var c = r(16);
  var d = T(c);
  var f = r(12);
  var p = r(23);
  var v = T(p);
  var h = r(28);
  var y = T(h);
  var m = r(32);
  var g = T(m);
  var _ = r(34);
  var b = T(_);
  var k = r(35);
  var w = T(k);

  function T(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function C(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function O(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function E(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var R = function(e) {
    E(t, e);

    function t(e) {
      C(this, t);
      var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      r.state = {
        showModal: false,
        showModalButton: false,
        showLevelWarning: false,
        showRisk: false
      };
      r._onShowModal = r._onShowModal.bind(r);
      r._onHideModal = r._onHideModal.bind(r);
      r._getGroupedHazards = r._getGroupedHazards.bind(r);
      r._onSave = r._onSave.bind(r);
      r._update = r._update.bind(r);
      return r
    }
    n(t, [{
      key: "componentWillMount",
      value: function e() {
        this._update(this.props)
      }
    }, {
      key: "componentWillReceiveProps",
      value: function e(t) {
        this._update(t)
      }
    }, {
      key: "_getGroupedHazards",
      value: function e() {
        var t = this;
        var r = this.props.options.field.categories;
        var n = "api/groupedhazards/{category}";
        var a = new v.default(n, {
          category: r
        }, "get").buildUrl();
        return y.default.query(a).then(function(e) {
          return {
            data: e,
            category: r
          }
        }, function(e) {
          t._onError(e);
          return e
        })
      }
    }, {
      key: "_getHazardTypes",
      value: function e() {
        var t = this;
        var r = "api/hazardtypes";
        var n = new v.default(r, {}, "get").buildUrl();
        return y.default.query(n).then(function(e) {
          return e || []
        }, function(e) {
          t._onError(e);
          return e
        })
      }
    }, {
      key: "_getControlTypes",
      value: function e() {
        var t = this;
        var r = "api/controlmeasuretypes";
        var n = new v.default(r, {}, "get").buildUrl();
        return y.default.query(n).then(function(e) {
          return e || []
        }, function(e) {
          t._onError(e);
          return e
        })
      }
    }, {
      key: "_update",
      value: function e(t) {
        var r = t.certificate,
          n = t.showRiskColumn,
          a = t.editMode;
        var o = r.riskAssessmentLevel.toLowerCase();
        this.setState({
          showModalButton: a && !!o.length,
          showLevelWarning: !o,
          showRisk: n && o === "level2"
        })
      }
    }, {
      key: "_onShowModal",
      value: function e() {
        this.setState({
          showModal: true
        })
      }
    }, {
      key: "_onHideModal",
      value: function e() {
        this.setState({
          showModal: false
        })
      }
    }, {
      key: "_onTranslateExternal",
      value: function e(t, r) {
        return s.default.translate("PermitVision." + t, {
          fallback: r
        })
      }
    }, {
      key: "_onError",
      value: function e(t) {
        (0, f.addGlobalError)(t, true)
      }
    }, {
      key: "_onSave",
      value: function e(t) {
        var r = this;
        var n = d.default.max(this.props.data.map(function(e) {
          return e.number
        }), function(e) {
          return e.number
        }) || 0;
        var a = t.map(function(e) {
          var t = d.default.find(r.props.data, function(t) {
            return t.identifier === e.identifier
          });
          var a = void 0;
          if (t) {
            a = t.number
          } else {
            a = n + 1;
            n = a
          }
          return {
            identifier: e.identifier,
            number: a,
            displayOrder: e.number,
            description: e.description,
            hazards: e.hazards
          }
        });
        this.props.onChange("riskAssessmentTasks", a)
      }
    }, {
      key: "render",
      value: function e() {
        var t = this.props,
          r = t.options,
          n = t.visible,
          a = t.editMode;
        if (!n) return null;
        var i = (0, l.default)("row", {
          editrow: a,
          readonlyrow: !a
        });
        var u = (0, l.default)("control-label", {
          "is-required": a && r.field.isRequired
        });
        var c = this.props.data.map(function(e) {
          return {
            identifier: e.identifier,
            number: e.displayOrder,
            description: e.description,
            hazards: e.hazards
          }
        });
        return o.default.createElement("div", {
          className: i
        }, o.default.createElement("div", {
          className: "fieldname"
        }, o.default.createElement("span", {
          className: u
        }, s.default.translate("permitvision.label_risk_assessment_tasks_fieldname"))), o.default.createElement("div", {
          className: "fieldvalue"
        }, o.default.createElement(g.default, {
          show: this.state.showLevelWarning
        }), o.default.createElement(b.default, {
          show: this.state.showModalButton,
          onShowModal: this._onShowModal
        })), o.default.createElement(w.default, {
          data: c,
          onSave: this._onSave,
          showModal: this.state.showModal,
          onHideModal: this._onHideModal,
          category: this.props.options.field.categories,
          showRisk: this.state.showRisk,
          editMode: a,
          onError: this._onError,
          getGroupedHazards: this._getGroupedHazards,
          getHazardTypes: this._getHazardTypes,
          getControlTypes: this._getControlTypes,
          onTranslateExternal: this._onTranslateExternal,
          riskValue: this.props.riskValue,
          riskMatrix: this.props.riskMatrix,
          isAllowed: this.props.evaluatePolicies
        }))
      }
    }]);
    return t
  }(o.default.Component);
  R.propTypes = {
    data: a.PropTypes.array.isRequired,
    certificate: a.PropTypes.shape({
      state: a.PropTypes.string.isRequired,
      riskAssessmentLevel: a.PropTypes.string
    }).isRequired,
    editMode: a.PropTypes.bool.isRequired,
    options: a.PropTypes.shape({
      field: a.PropTypes.shape({
        name: a.PropTypes.string.isRequired,
        isRequired: a.PropTypes.bool.isRequired,
        categories: a.PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    evaluatePolicies: a.PropTypes.func.isRequired,
    onChange: a.PropTypes.func.isRequired,
    visible: a.PropTypes.bool,
    showRiskColumn: a.PropTypes.bool,
    riskMatrix: a.PropTypes.func.isRequired,
    riskValue: a.PropTypes.func.isRequired
  };
  R.defaultProps = {
    visible: true,
    showRiskColumn: true,
    certificate: {
      riskAssessmentLevel: ""
    }
  };
  t.default = R
}, function(e, t, r) {
  "use strict";
  var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
    return typeof e
  } : function(e) {
    return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  var a = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var o = r(24);
  var i = d(o);
  var s = r(25);
  var u = d(s);
  var l = r(27);
  var c = d(l);

  function d(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function f(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }
  var p = function() {
    function e(t, r, n) {
      f(this, e);
      this.url = t.toLowerCase();
      this.query = null;
      this.method = n || "get";
      for (var a in r) {
        if (r.hasOwnProperty(a)) {
          var o = a.toLowerCase();
          var i = "{" + o + "}";
          if (this.url.indexOf(i) > -1) {
            this.url = this.url.replace(i, this.formatparam(r[a]))
          } else {
            var s = r[a];
            if (s) {
              if (!this.query) {
                this.query = {}
              }
              if (u.default.usesSiteTime(s)) {
                s = u.default.toStringSite(s)
              }
              this.query[o] = s
            }
          }
        }
      }
    }
    a(e, [{
      key: "formatparam",
      value: function e(t) {
        var r = this;
        if (u.default.usesSiteTime(t)) {
          return u.default.toStringSite(t)
        }
        if (u.default.usesUtc(t)) {
          return u.default.toStringUtc(t)
        }
        if (typeof t === "string") {
          return encodeURIComponent(t)
        }
        if (t.constructor === Array) {
          return t.map(function(e) {
            return r.formatparam(e)
          }).join(",")
        }
        if ((typeof t === "undefined" ? "undefined" : n(t)) === "object") {
          var a = JSON.stringify(t);
          return a.substr(1, a.length - 2)
        }
        return t.toString()
      }
    }, {
      key: "buildUrl",
      value: function e() {
        if (!this.query) {
          return this.url
        }
        if (this.method === "post") {
          return this.url
        } else {
          return this.url + (0, c.default)(this.query)
        }
      }
    }]);
    return e
  }();
  e.exports = p
}, function(e, t) {
  e.exports = jQuery
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  t.Clock = undefined;
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(26);
  var o = i(a);

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function s(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }
  var u = t.Clock = function() {
    function e() {
      s(this, e)
    }
    n(e, null, [{
      key: "today",
      value: function t(r) {
        var n = e.utc(r);
        return {
          year: n.year(),
          month: n.month() + 1,
          day: n.date()
        }
      }
    }, {
      key: "todayAt",
      value: function t(r, n) {
        if (!r) {
          throw new Error("timezone is required")
        }
        var a = e.utc(n).tz(r);
        return {
          siteYear: a.year(),
          siteMonth: a.month() + 1,
          siteDay: a.date()
        }
      }
    }, {
      key: "utcNow",
      value: function t(r) {
        var n = e.utc(r);
        return e.utcDateTimeFromMoment(n)
      }
    }, {
      key: "utcToday",
      value: function t(r) {
        var n = e.utcNow(r);
        n.hours = 0;
        n.minutes = 0;
        n.seconds = 0;
        return n
      }
    }, {
      key: "utcNowMoment",
      value: function t(r) {
        return e.utc(r)
      }
    }, {
      key: "utcDateTimeFromMoment",
      value: function e(t) {
        return {
          year: t.year(),
          month: t.month() + 1,
          day: t.date(),
          hours: t.hours(),
          minutes: t.minutes(),
          seconds: t.seconds()
        }
      }
    }, {
      key: "jsDateFromSiteDateTime",
      value: function e(t) {
        if (!t) {
          return null
        }
        return new Date(t.siteYear, t.siteMonth - 1, t.siteDay, t.hours || 0, t.minutes || 0, t.seconds || 0)
      }
    }, {
      key: "jsDateFromUtcDateTime",
      value: function e(t) {
        if (!t) {
          return null
        }
        var r = new Date(t.year, t.month - 1, t.day, 0, 0, 0);
        return r
      }
    }, {
      key: "siteDateFromJsDate",
      value: function e(t) {
        if (!t) {
          return null
        }
        return {
          siteYear: t.getFullYear(),
          siteMonth: t.getMonth() + 1,
          siteDay: t.getDate()
        }
      }
    }, {
      key: "utcDateFromJsDate",
      value: function e(t) {
        if (!t) {
          return null
        }
        return {
          year: t.getFullYear(),
          month: t.getMonth() + 1,
          day: t.getDate()
        }
      }
    }, {
      key: "utcDateTimeFromJsDateTime",
      value: function e(t) {
        if (!t) {
          return null
        }
        return {
          year: t.getFullYear(),
          month: t.getMonth() + 1,
          day: t.getDate(),
          hours: t.getHours(),
          minutes: t.getMinutes(),
          seconds: t.getSeconds()
        }
      }
    }, {
      key: "siteDateTimeFromJsDate",
      value: function e(t) {
        if (!t) {
          return null
        }
        return {
          siteYear: t.getFullYear(),
          siteMonth: t.getMonth() + 1,
          siteDay: t.getDate(),
          hours: t.getHours(),
          minutes: t.getMinutes(),
          seconds: t.getSeconds()
        }
      }
    }, {
      key: "nowAt",
      value: function t(r, n) {
        if (!r) {
          throw new Error("timezone is required")
        }
        var a = e.utc(n).tz(r);
        return {
          siteYear: a.year(),
          siteMonth: a.month() + 1,
          siteDay: a.date(),
          hours: a.hours(),
          minutes: a.minutes(),
          seconds: a.seconds()
        }
      }
    }, {
      key: "timeNow",
      value: function t(r) {
        var n = e.utc(r);
        return {
          hours: n.hours(),
          minutes: n.minutes(),
          seconds: n.seconds()
        }
      }
    }, {
      key: "timeNowAt",
      value: function t(r, n) {
        if (!r) {
          throw new Error("timezone is required")
        }
        var a = e.utc(n).tz(r);
        return {
          hours: a.hours(),
          minutes: a.minutes(),
          seconds: a.seconds()
        }
      }
    }, {
      key: "formatTime",
      value: function t(r, n) {
        if (!r || r.hours === undefined || r.minutes === undefined) {
          return ""
        }
        var a = e.pad(r.hours, 2);
        var o = e.pad(r.minutes, 2);
        var i = "";
        if (n) {
          i = ":" + e.pad(r.seconds, 2)
        }
        return a + ":" + o + i
      }
    }, {
      key: "formatSiteTime",
      value: function t(r) {
        if (!r || r.hours === undefined || r.minutes === undefined) {
          return ""
        }
        var n = e.pad(r.hours, 2);
        var a = e.pad(r.minutes, 2);
        return n + ":" + a
      }
    }, {
      key: "formatSiteDate",
      value: function e(t, r) {
        if (!t || t.siteYear === undefined || t.siteMonth === undefined || t.siteDay === undefined) {
          return ""
        }
        var n = new Date(t.siteYear, t.siteMonth - 1, t.siteDay);
        return (0, o.default)(n).format(r || "DD MMM YYYY")
      }
    }, {
      key: "formatUtcDateTime",
      value: function t(r) {
        return e.formatUtcDate(r) + " " + e.formatTime(r)
      }
    }, {
      key: "formatUtcDate",
      value: function e(t, r) {
        if (!t || t.year === undefined || t.month === undefined || t.day === undefined) {
          return ""
        }
        var n = new Date(t.year, t.month - 1, t.day);
        return (0, o.default)(n).format(r || "DD MMM YYYY")
      }
    }, {
      key: "formatSiteDateTime",
      value: function t(r) {
        if (!r) {
          return ""
        }
        return e.formatSiteDate(r) + " " + e.formatSiteTime(r)
      }
    }, {
      key: "toStringSite",
      value: function t(r) {
        if (!r) {
          return ""
        }
        var n = e.pad(r.siteYear, 4);
        var a = e.pad(r.siteMonth, 2);
        var o = e.pad(r.siteDay, 2);
        var i = e.pad(r.hours, 2);
        var s = e.pad(r.minutes, 2);
        var u = e.pad(r.seconds, 2);
        return n + "-" + a + "-" + o + "T" + i + ":" + s + ":" + u + ".000"
      }
    }, {
      key: "toStringUtc",
      value: function t(r) {
        if (!r) {
          return ""
        }
        var n = e.pad(r.year, 4);
        var a = e.pad(r.month, 2);
        var o = e.pad(r.day, 2);
        var i = e.pad(r.hours, 2);
        var s = e.pad(r.minutes, 2);
        var u = e.pad(r.seconds, 2);
        return n + "-" + a + "-" + o + "T" + i + ":" + s + ":" + u + ".000Z"
      }
    }, {
      key: "toUtc",
      value: function t(r, n) {
        if (!n) {
          throw new Error("timezone is required")
        }
        var a = e.siteDateTimeToUtcMoment(r, n);
        return {
          year: a.year(),
          month: a.month() + 1,
          day: a.date(),
          hours: a.hour(),
          minutes: a.minutes(),
          seconds: a.seconds()
        }
      }
    }, {
      key: "siteDateTimeToUtcMoment",
      value: function t(r, n) {
        if (!n) {
          throw new Error("timezone is required")
        }
        var a = e.toStringSite(r);
        return o.default.tz(a, n).utc()
      }
    }, {
      key: "utcDateTimeToUtcMoment",
      value: function t(r) {
        var n = e.toStringUtc(r);
        return (0, o.default)(n).utc()
      }
    }, {
      key: "toSite",
      value: function t(r, n) {
        if (!n) {
          throw new Error("timezone is required")
        }
        var a = e.toStringUtc(r);
        var i = (0, o.default)(a).tz(n);
        return {
          siteYear: i.year(),
          siteMonth: i.month() + 1,
          siteDay: i.date(),
          hours: i.hour(),
          minutes: i.minutes(),
          seconds: i.seconds()
        }
      }
    }, {
      key: "usesUtc",
      value: function e(t) {
        if (!t) {
          return false
        }
        if (t.year) {
          return true
        }
        return false
      }
    }, {
      key: "usesSiteTime",
      value: function e(t) {
        if (!t) {
          return false
        }
        if (t.siteYear) {
          return true
        }
        return false
      }
    }, {
      key: "TimeEquals",
      value: function e(t, r) {
        if (t === null && r === null) {
          return true
        }
        if (t === null) {
          return false
        }
        if (r === null) {
          return false
        }
        return t.hours === r.hours && t.minutes === r.minutes && t.seconds === r.seconds
      }
    }, {
      key: "siteDateTimeEquals",
      value: function t(r, n) {
        if (r === null && n === null) {
          return true
        }
        if (r === null) {
          return false
        }
        if (n === null) {
          return false
        }
        return r.siteYear === n.siteYear && r.siteMonth === n.siteMonth && r.siteDay === n.siteDay && e.TimeEquals(r, n)
      }
    }, {
      key: "sitePeriodEquals",
      value: function t(r, n) {
        if (r === null && n === null) {
          return true
        }
        if (r === null) {
          return false
        }
        if (n === null) {
          return false
        }
        return e.siteDateTimeEquals(r.siteFrom, n.siteFrom) && e.siteDateTimeEquals(r.siteTo, n.siteTo)
      }
    }, {
      key: "buildUtcDateTime",
      value: function t(r, n) {
        if (e.usesSiteTime(r)) {
          throw new Error("you cannot use this method on a site based date object")
        }
        r = r || {
          year: null,
          month: null,
          day: null
        };
        n = n || {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        return {
          year: r.year,
          month: r.month,
          day: r.day,
          hours: n.hours,
          minutes: n.minutes,
          seconds: n.seconds
        }
      }
    }, {
      key: "buildSiteDateTime",
      value: function t(r, n) {
        if (e.usesUtc(r)) {
          throw new Error("you cannot use this method on an utc based date object")
        }
        r = r || {
          siteYear: null,
          siteMonth: null,
          siteDay: null
        };
        n = n || {
          hours: null,
          minutes: null,
          seconds: null
        };
        return {
          siteYear: r.siteYear,
          siteMonth: r.siteMonth,
          siteDay: r.siteDay,
          hours: n.hours,
          minutes: n.minutes,
          seconds: n.seconds
        }
      }
    }, {
      key: "compareTime",
      value: function t(r, n) {
        var a = e.compareComponent(r.hours, n.hours);
        if (a !== 0) {
          return a
        }
        a = e.compareComponent(r.minutes, n.minutes);
        if (a !== 0) {
          return a
        }
        a = e.compareComponent(r.seconds, n.seconds);
        if (a !== 0) {
          return a
        }
      }
    }, {
      key: "compareUtcDates",
      value: function t(r, n) {
        var a = e.compareComponent(r.year, n.year);
        if (a !== 0) {
          return a
        }
        a = e.compareComponent(r.month, n.month);
        if (a !== 0) {
          return a
        }
        a = e.compareComponent(r.day, n.day);
        if (a !== 0) {
          return a
        }
        return e.compareTime(r, n)
      }
    }, {
      key: "addToUtcDate",
      value: function t(r, n, a) {
        var o = e.utcDateTimeToUtcMoment(r);
        o.add(n, a);
        return e.utcDateTimeFromMoment(o)
      }
    }, {
      key: "parseTime",
      value: function e(t) {
        var r = t.split(":");
        if (r.length < 2) {
          throw new Error("input string should have at least hours:minutes")
        }
        var n = r[0];
        var a = r[1];
        var o = 0;
        if (r.length > 2) {
          o = +r[2]
        }
        return {
          hours: +n,
          minutes: +a,
          seconds: o
        }
      }
    }, {
      key: "differenceInUtc",
      value: function t(r, n, a) {
        var o = e.utcDateTimeToUtcMoment(r);
        var i = e.utcDateTimeToUtcMoment(n);
        return o.diff(i, a)
      }
    }, {
      key: "newUtcDateTime",
      value: function e(t, r, n, a, o, i) {
        return {
          year: t,
          month: r,
          day: n,
          hours: a || 0,
          minutes: o || 0,
          seconds: i || 0
        }
      }
    }, {
      key: "newSiteDateTime",
      value: function e(t, r, n, a, o, i) {
        return {
          siteYear: t,
          siteMonth: r,
          siteDay: n,
          hours: a || 0,
          minutes: o || 0,
          seconds: i || 0
        }
      }
    }, {
      key: "add",
      value: function e(t, r, n) {
        var a = o.default.utc(t);
        a = a.add(r, n);
        return {
          year: a.year(),
          month: a.month() + 1,
          day: a.date(),
          hours: a.hours(),
          minutes: a.minutes(),
          seconds: a.seconds()
        }
      }
    }, {
      key: "pad",
      value: function e(t, r) {
        t = t || 0;
        var n = t + "";
        while (n.length < r) {
          n = "0" + n
        }
        return n
      }
    }, {
      key: "compareComponent",
      value: function e(t, r) {
        t = t || 0;
        r = r || 0;
        if (t < r) {
          return -1
        }
        if (t > r) {
          return 1
        }
        return 0
      }
    }, {
      key: "utc",
      value: function e(t) {
        return t ? o.default.utc(t) : o.default.utc()
      }
    }]);
    return e
  }();
  t.default = u
}, function(e, t, r) {
  e.exports = r(2)(983)
}, function(e, t, r) {
  "use strict";
  var n = r(24);
  var a = o(n);

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function i(e) {
    if (e) {
      return "?" + a.default.param(e)
    }
    return ""
  }
  e.exports = i
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) {
        if (Object.prototype.hasOwnProperty.call(r, n)) {
          e[n] = r[n]
        }
      }
    }
    return e
  };
  var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
    return typeof e
  } : function(e) {
    return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  t.downloadFile = m;
  t.post = g;
  t.query = _;
  t.uploadBinary = b;
  t.uploadBinaryWithStream = k;
  var o = r(24);
  var i = p(o);
  var s = r(12);
  var u = r(29);
  var l = p(u);
  var c = r(30);
  var d = r(31);
  var f = p(d);

  function p(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var v = [408, 429, 502, 503, 504];

  function h(e) {
    return (0, f.default)({
      retryInterval: [50, 100, 200],
      createRequest: function t() {
        return (0, c.getJSON)(e).then(function(e) {
          var t = e.data,
            r = e.xhr;
          if (t && (typeof t === "undefined" ? "undefined" : a(t)) === "object") {
            t.__etag = r.getResponseHeader("etag")
          }
          return t
        }, function(e) {
          return Promise.reject({
            xhr: e,
            retry: v.indexOf(e.status) !== -1
          })
        })
      }
    })
  }

  function y(e) {
    return (0, f.default)({
      retryInterval: [50, 100, 300, 500, 1e3],
      createRequest: function t() {
        return (0, c.getJSON)(e, {
          ifModified: true
        }).then(function(e) {
          var t = e.xhr,
            r = e.status,
            n = e.data;
          if (r === "notmodified") {
            return Promise.reject({
              xhr: t,
              retry: true
            })
          }
          if (n && (typeof n === "undefined" ? "undefined" : a(n)) === "object") {
            n.__etag = t.getResponseHeader("etag")
          }
          return n
        }, function(e) {
          return Promise.reject({
            xhr: e,
            retry: v.indexOf(e.status) !== -1
          })
        })
      }
    })
  }

  function m(e, t, r, n, a, o) {
    var i = (new Error).stack;
    var u = new XMLHttpRequest;
    u.open(r, e);
    if (o) {
      u.setRequestHeader("Accept", o)
    }
    if (a) {
      u.setRequestHeader("content-type", a)
    }
    u.responseType = "blob";
    u.onload = function() {
      if (this.status >= 400) {
        var t = new l.default(e, u, "post", i);
        (0, s.addGlobalError)(t)
      } else if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(u.response, n)
      } else {
        var r = URL.createObjectURL(u.response);
        window.location.href = r
      }
    };
    u.send(t)
  }

  function g(e, t, r) {
    r = n({
      rejectAllRequestErrors: false
    }, r);
    if (e.indexOf("#") !== -1) {
      console.error("Requesting a resource with a non encoded URL:", e)
    }
    var o = (new Error).stack;
    return new Promise(function(n, i) {
      (0, f.default)({
        retryInterval: [50, 100, 200],
        createRequest: function r() {
          return (0, c.ajax)({
            method: "POST",
            url: e,
            data: JSON.stringify(t),
            contentType: "application/json",
            dataType: "json"
          }, function(e) {
            return Promise.reject({
              xhr: e,
              retry: v.indexOf(e.status) !== -1
            })
          })
        }
      }).then(function(e) {
        var t = e.data,
          r = e.xhr;
        if (t && (typeof t === "undefined" ? "undefined" : a(t)) === "object") {
          t.__etag = r.getResponseHeader("etag")
        }
        n(t)
      }).catch(function(t) {
        var n = new l.default(e, t, "post", o);
        if (!r.rejectAllRequestErrors && (!t || t.status >= 500)) {
          (0, s.addGlobalError)(n)
        } else {
          i(n)
        }
      })
    })
  }

  function _(e, t) {
    t = n({
      waitForNewVersion: false,
      rejectAllRequestErrors: false
    }, t);
    if (e.indexOf("#") !== -1) {
      console.error("Requesting a resource with a non encoded URL:", e)
    }
    var r = t.waitForNewVersion ? y(e) : h(e);
    var a = (new Error).stack;
    return new Promise(function(n, o) {
      r.then(n).catch(function(r) {
        var n = new l.default(e, r, "json", a);
        if (!t.rejectAllRequestErrors && (!r || r.status >= 500)) {
          (0, s.addGlobalError)(n)
        } else {
          o(n)
        }
      })
    })
  }

  function b(e, t, r, n) {
    r = r || "api/blobs";
    var a = new FormData;
    a.append(e, t);
    if (n) {
      a.append("metaData", JSON.stringify(n))
    }
    return i.default.ajax({
      url: r,
      type: "POST",
      data: a,
      async: true,
      cache: false,
      processData: false,
      contentType: false
    })
  }

  function k(e, t, r, n) {
    var a = new FormData;
    a.append("file", t);
    return (0, c.ajax)({
      method: "POST",
      url: r,
      data: a,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      xhrFields: {
        onprogress: n
      }
    })
  }
  t.default = {
    downloadFile: m,
    post: g,
    query: _,
    uploadBinary: b,
    uploadBinaryWithStream: k
  }
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function n(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function a(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var o = function(e) {
    a(t, e);

    function t(e) {
      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        o = a.status,
        i = o === undefined ? "" : o,
        s = a.statusText,
        u = s === undefined ? "" : s;
      var l = arguments[2];
      var c = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      r(this, t);
      var d = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, ""));
      if (c) {
        d.stack = c
      }
      d.message = i + " '" + u + "' on '" + e + "' type " + l;
      d.name = d.constructor.name;
      d.status = i;
      d.url = e;
      d.type = l;
      return d
    }
    return t
  }(Error);
  t.default = o
}, function(e, t, r) {
  e.exports = r(2)(586)
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  t.default = function(e) {
    var t = e.retryInterval,
      r = e.createRequest;
    var n = t;
    return new Promise(function(e, t) {
      function a() {
        var o = r();
        o.then(e, function(e) {
          var r = e.xhr,
            o = e.retry;
          if (!n.length || !o) {
            t(r);
            return
          }
          setTimeout(a, n.shift())
        })
      }
      a()
    })
  }
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = r(5);
  var a = u(n);
  var o = r(33);
  var i = r(11);
  var s = u(i);

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var l = function e(t) {
    if (!t.show) return null;
    return a.default.createElement(o.AlertBox, {
      type: "warning",
      message: s.default.translate("PermitVision.Label_FieldReadonlyBecauseNoRiskLevelSelected")
    })
  };
  l.propTypes = {
    show: n.PropTypes.bool.isRequired
  };
  t.default = l
}, function(e, t, r) {
  e.exports = r(2)(582)
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = r(5);
  var a = s(n);
  var o = r(11);
  var i = s(o);

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var u = function e(t) {
    var r = t.show,
      n = t.onShowModal;
    if (!r) return null;
    return a.default.createElement("button", {
      className: "btn btn-sm btn-add task-steps-modal-btn",
      onClick: n
    }, a.default.createElement("span", {
      className: "btn-icon glyphicon glyphicon-new-window"
    }), i.default.translate("permitvision.label_risk_assessment_tasks_modal_btn"))
  };
  u.propTypes = {
    show: n.PropTypes.bool.isRequired,
    onShowModal: n.PropTypes.func.isRequired
  };
  t.default = u
}, function(e, t, r) {
  (function n(a, o) {
    if (true) e.exports = o(r(5), r(33));
    else if (typeof define === "function" && define.amd) define(["react", "@evision/react-interfacey"], o);
    else if (typeof t === "object") t["taskStepsField"] = o(require("react"), require("@evision/react-interfacey"));
    else a["taskStepsField"] = o(a["react"], a["@evision/react-interfacey"])
  })(this, function(e, t) {
    return function(e) {
      var t = {};

      function r(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
          exports: {},
          id: n,
          loaded: false
        };
        e[n].call(a.exports, a, a.exports, r);
        a.loaded = true;
        return a.exports
      }
      r.m = e;
      r.c = t;
      r.p = "";
      return r(0)
    }([function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = f(a);
      var i = r(2);
      var s = r(160);
      var u = f(s);
      var l = r(170);
      var c = f(l);
      var d = r(132);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function v(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function h(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var y = function(e) {
        h(t, e);

        function t(e) {
          p(this, t);
          var r = v(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.state = {
            tasks: []
          };
          r._updateTasks = r._updateTasks.bind(r);
          r._registerResources = r._registerResources.bind(r);
          r._registerExternalComponents = r._registerExternalComponents.bind(r);
          r._onSave = r._onSave.bind(r);
          r._registerResources();
          r._registerExternalComponents();
          return r
        }
        n(t, [{
          key: "componentWillMount",
          value: function e() {
            this._updateTasks(this.props.data)
          }
        }, {
          key: "componentWillReceiveProps",
          value: function e(t) {
            this._updateTasks(t.data)
          }
        }, {
          key: "componentWillUnmount",
          value: function e() {
            i.translator.unRegisterExternalTranslator();
            i.externalComponents.unregisterComponents()
          }
        }, {
          key: "_registerResources",
          value: function e() {
            var t = this.props,
              r = t.localResources,
              n = t.onTranslateExternal;
            if (r) {
              i.translator.registerResources(r)
            }
            i.translator.registerExternalTranslator(n)
          }
        }, {
          key: "_registerExternalComponents",
          value: function e() {
            var t = this.props,
              r = t.riskValue,
              n = t.riskMatrix;
            i.externalComponents.register("RiskValue", r);
            i.externalComponents.register("RiskMatrix", n)
          }
        }, {
          key: "_updateTasks",
          value: function e(t) {
            var r = t.map(function(e) {
              return d.TaskStep.transform(e)
            });
            this.setState({
              tasks: r
            })
          }
        }, {
          key: "_onSave",
          value: function e(t) {
            var r = t.filter(function(e) {
              return e.description.trim().length > 0
            });
            this.props.onSave(r)
          }
        }, {
          key: "render",
          value: function e() {
            var t = this.props,
              r = t.editMode,
              n = t.showRisk,
              a = t.category,
              i = t.onSave;
            return o.default.createElement("div", {
              className: "react-task-steps-field"
            }, o.default.createElement(u.default, {
              tasks: this.state.tasks,
              showRisk: n,
              editMode: r,
              onSave: i,
              category: a
            }), o.default.createElement(c.default, {
              show: this.props.showModal,
              tasks: this.state.tasks,
              category: a,
              showRisk: n,
              onError: this.props.onError,
              getGroupedHazards: this.props.getGroupedHazards,
              getHazardTypes: this.props.getHazardTypes,
              getControlTypes: this.props.getControlTypes,
              isAllowed: this.props.isAllowed,
              onHide: this.props.onHideModal,
              onSave: this._onSave
            }))
          }
        }]);
        return t
      }(o.default.Component);
      y.propTypes = {
        data: a.PropTypes.array.isRequired,
        editMode: a.PropTypes.bool.isRequired,
        riskValue: a.PropTypes.func.isRequired,
        riskMatrix: a.PropTypes.func.isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        isAllowed: a.PropTypes.func.isRequired,
        onError: a.PropTypes.func.isRequired,
        getGroupedHazards: a.PropTypes.func.isRequired,
        getHazardTypes: a.PropTypes.func.isRequired,
        getControlTypes: a.PropTypes.func.isRequired,
        localResources: a.PropTypes.object,
        onTranslateExternal: a.PropTypes.func.isRequired,
        showModal: a.PropTypes.bool.isRequired,
        onHideModal: a.PropTypes.func.isRequired,
        category: a.PropTypes.string.isRequired,
        onSave: a.PropTypes.func.isRequired
      };
      y.defaultProps = {
        localResources: null
      };
      t.default = y
    }, function(t, r) {
      t.exports = e
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.getHighestNumber = t.reorderItem = t.updateNumbers = t.getHazardFromGroupedHazards = t.keyCodes = t.externalComponents = t.searchHazardsAndControls = t.getIndexes = t.translator = t.dnd = t.Scroller = undefined;
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = r(3);
      Object.defineProperty(t, "Scroller", {
        enumerable: true,
        get: function e() {
          return f(a).default
        }
      });
      var o = r(4);
      Object.defineProperty(t, "dnd", {
        enumerable: true,
        get: function e() {
          return f(o).default
        }
      });
      var i = r(5);
      Object.defineProperty(t, "translator", {
        enumerable: true,
        get: function e() {
          return f(i).default
        }
      });
      var s = r(7);
      Object.defineProperty(t, "getIndexes", {
        enumerable: true,
        get: function e() {
          return f(s).default
        }
      });
      var u = r(128);
      Object.defineProperty(t, "searchHazardsAndControls", {
        enumerable: true,
        get: function e() {
          return f(u).default
        }
      });
      var l = r(157);
      Object.defineProperty(t, "externalComponents", {
        enumerable: true,
        get: function e() {
          return f(l).default
        }
      });
      var c = r(158);
      var d = f(c);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t]
          }
          return r
        } else {
          return Array.from(e)
        }
      }
      var v = t.keyCodes = {
        enter: 13,
        upArrow: 38,
        downArrow: 40,
        escape: 27
      };
      var h = t.getHazardFromGroupedHazards = function e(t, r, n) {
        var a = (0, d.default)(t, function(e) {
          return e.code === n
        });
        return a && a.hazards ? (0, d.default)(a.hazards, function(e) {
          return e.code === r
        }) : null
      };
      var y = t.updateNumbers = function e(t, r) {
        return t.map(function(e, t) {
          return new r(n({}, e, {
            number: t + 1
          }))
        })
      };
      var m = t.reorderItem = function e(t, r, n, a) {
        var o = [].concat(p(t.slice(0, n)), p(t.slice(n + 1)));
        return [].concat(p(o.slice(0, a)), [r], p(o.slice(a)))
      };
      var g = t.getHighestNumber = function e(t) {
        if (!t || !t.length || !t[0].number) return 0;
        return Math.max.apply(Math, p(t.map(function(e) {
          return e.number
        })))
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();

      function n(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var a = function() {
        function e(t, r) {
          n(this, e);
          this._container = t;
          this._duration = r || 250
        }
        r(e, [{
          key: "scrollTo",
          value: function e(t, r) {
            var n = this;
            clearTimeout(this._scrollToTimeout);
            var a = r || 0;
            var o = this._container;
            var i = o.querySelector('[data-scroll-id="' + t + '"]');
            if (i) {
              var s = i.getBoundingClientRect().top;
              var u = i.getBoundingClientRect().bottom;
              var l = o.getBoundingClientRect().top;
              var c = o.getBoundingClientRect().bottom;
              var d = s >= l && s <= c;
              var f = u >= l && u <= c;
              var p = d && f;
              if (!p) {
                var v = o.scrollTop + (u - l) - 150;
                clearTimeout(this._recursiveScrollTimeout);
                this._recursiveScroll(v, this._duration)
              }
            } else if (a <= 3) {
              a += 1;
              this._scrollToTimeout = setTimeout(function() {
                n.scrollTo(t, a)
              }, 10)
            }
          }
        }, {
          key: "_recursiveScroll",
          value: function e(t, r) {
            var n = this;
            if (!r) return;
            var a = this._container;
            var o = t - a.scrollTop;
            var i = o / r * 10;
            this._recursiveScrollTimeout = setTimeout(function() {
              a.scrollTop += i;
              if (a.scrollTop === t) return;
              n._recursiveScroll(t, r - 10)
            }, 10)
          }
        }]);
        return e
      }();
      t.default = a
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = function e(t) {
        return {
          connectDropTarget: t.dropTarget()
        }
      };
      var n = function e(t, r) {
        return {
          connectDragSource: t.dragSource(),
          connectDragPreview: t.dragPreview(),
          isDragging: r.isDragging()
        }
      };
      var a = {
        TASKSTEP: "taskStep",
        HAZARD: "hazard",
        CONTROL: "controlMeasure"
      };
      var o = function e(t) {
        var r = t.dragIndex,
          n = t.hoverIndex,
          a = t.hoverBoundingRect,
          o = t.clientOffset;
        var i = (a.bottom - a.top) / 2;
        var s = o.y - a.top;
        if (r < n && s < i) return false;
        if (r > n && s > i) return false;
        return true
      };
      t.default = {
        connectTarget: r,
        connectSource: n,
        types: a,
        hasCrossedMiddle: o
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(6);
      var a = o(n);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var i = {
        translate: function e(t) {
          if (this._externalTranslator) {
            return this._externalTranslator(t, a.default[t])
          }
          return a.default[t]
        },
        registerExternalTranslator: function e(t) {
          this._externalTranslator = t
        },
        unRegisterExternalTranslator: function e() {
          this._externalTranslator = null
        },
        registerResources: function e(t) {
          Object.keys(t).forEach(function(e) {
            if (!a.default[e]) {
              throw new Error("Cannot register a resource with the key: " + e + " in react-task-steps-field!")
            }
            a.default[e] = t[e]
          })
        }
      };
      t.default = i
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = {
        label_rat_edit_tasks_btn: "Edit tasks",
        label_rat_fieldname: "Risk Assessment Tasks",
        label_rat_modal_title: "Edit Risk Assessment Tasks",
        label_rat_table_header_hazards: "Hazards",
        label_rat_table_header_controls: "Control Measures",
        label_rat_table_header_initial_risk: "Inital Risk",
        label_rat_table_header_residual_risk: "Residual Risk",
        placeholder_task_description: "Task step description",
        tooltip_task_description_save: "Save changes",
        tooltip_task_description_discard: "Cancel changes",
        tooltip_task_drag_to_reorder: "Drag to reorder task step",
        tooltip_move_up: "Move up",
        tooltip_move_down: "Move down",
        tooltip_edit_description: "Edit",
        tooltip_remove_task: "Delete task",
        label_confirm_remove_task_modal_title: "Delete taskstep?",
        label_confirm_remove_task_modal_body: "Deleting this taskstep will also remove linked hazards and controls. Continue?",
        label_prerequisite_abbreviated: "P",
        label_prerequisite: "Pre-requisite",
        label_supplementary_abbreviated: "S",
        label_supplementary: "Supplementary",
        label_specify_controls: "Specify Control Measure(s)",
        label_add_control: "Add Control Measure",
        tooltip_drag_to_reorder_control: "Drag to reorder control measure",
        label_specify_hazards: "Specify Hazard(s)",
        label_add_hazard: "Add Hazard",
        tooltip_drag_to_reorder_hazard: "Drag to reorder hazard",
        label_confirm_remove_hazard_modal_title: "Delete hazard?",
        label_confirm_remove_hazard_modal_body: "Deleting this hazard will also remove linked controls. Continue?",
        tooltip_click_to_edit: "Click to edit",
        tooltip_delete: "Delete",
        tooltip_cancel: "Cancel (Escape)",
        tooltip_save: "Save (Ctrl + Enter)",
        label_type_extension: "Type:",
        label_add_taskstep: "Add Taskstep",
        label_save_changes: "Save",
        label_save_and_close: "Save and Close",
        label_close_modal: "Close",
        label_hide_wizard: "Minimize",
        label_task_step_selector: "Task step",
        label_prerequisite_checkbox: "Prerequisite",
        label_add_as_unlisted: "Add as unlisted",
        tooltip_add_as_unlisted: "Add as unlisted (Ctrl + Enter)",
        tooltip_reset_fiter: "Remove search filter",
        label_pending_changes: "You have pending changes",
        label_search: "Search",
        label_missing_task_description: "Missing task description",
        label_cm_description: "Description",
        label_hazard_selector: "Hazard",
        label_control_already_selected: "Control already selected",
        label_no_suggested_controls: "No suggested control measures",
        label_new_control_measure_title: "New Control Measure",
        placeholder_controlmeasure_description_textarea: "Filter available control measures or create an unlisted control measure",
        label_control_measure_type: "Type",
        label_select_control_type: "Select a Control Measure Type",
        label_suggested_by_selected_hazard: "suggested by selected Hazard",
        label_filtered_by: "filtered by",
        label_control_measures: "Control Measures",
        tooltip_search_available_controls: "Search available control measures",
        tooltip_control_already_exists: "Control Measure already exists in this hazard. Change the existing control measure to make this available.",
        label_no_suggested_hazards: "No suggested hazards",
        label_hazard_description: "Description",
        label_new_hazard_title: "New Hazard",
        label_hazard_group: "Group",
        label_hazard_type: "Type",
        placeholder_hazard_description_textarea: "Filter available hazards or create an unlisted hazard",
        label_initial_suggested_hazards_header: "Select a Hazard Group or search to see available hazards",
        label_hazards_for_group: "Hazards for Group",
        label_hazards_filtered_by: "Hazards filtered by",
        label_select_hazard_group: "Select a Hazard Group",
        label_select_hazard_type: "Select a Hazard Type",
        tooltip_search_available_hazards: "Search available hazards",
        tooltip_hazard_already_exists: "Hazard already exists in this taskstep. Change the existing hazard to make this available.",
        label_confirm_modal_title: "Save changes before closing?",
        label_confirm_modal_body: 'Clicking "No" will discard unsaved changes.'
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(8);
      var a = o(n);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, t, r, n) {
        if (!e || !t) {
          throw new Error("getIndexes requires tasks and a taskId")
        }
        var o = (0, a.default)(e, {
          identifier: t
        });
        var i = void 0;
        var s = void 0;
        if (o > -1 && r) {
          i = (0, a.default)(e[o].hazards, {
            uniqueId: r
          })
        }
        if (i > -1 && n) {
          s = (0, a.default)(e[o].hazards[i].controlMeasures, {
            uniqueId: n
          })
        }
        return {
          taskIndex: o,
          hazardIndex: i,
          controlIndex: s
        }
      }
      t.default = i
    }, function(e, t, r) {
      var n = r(9),
        a = r(10),
        o = r(125);
      var i = Math.max;

      function s(e, t, r) {
        var s = e == null ? 0 : e.length;
        if (!s) {
          return -1
        }
        var u = r == null ? 0 : o(r);
        if (u < 0) {
          u = i(s + u, 0)
        }
        return n(e, a(t, 3), u)
      }
      e.exports = s
    }, function(e, t) {
      function r(e, t, r, n) {
        var a = e.length,
          o = r + (n ? 1 : -1);
        while (n ? o-- : ++o < a) {
          if (t(e[o], o, e)) {
            return o
          }
        }
        return -1
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(11),
        a = r(105),
        o = r(121),
        i = r(73),
        s = r(122);

      function u(e) {
        if (typeof e == "function") {
          return e
        }
        if (e == null) {
          return o
        }
        if (typeof e == "object") {
          return i(e) ? a(e[0], e[1]) : n(e)
        }
        return s(e)
      }
      e.exports = u
    }, function(e, t, r) {
      var n = r(12),
        a = r(102),
        o = r(104);

      function i(e) {
        var t = a(e);
        if (t.length == 1 && t[0][2]) {
          return o(t[0][0], t[0][1])
        }
        return function(r) {
          return r === e || n(r, e, t)
        }
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(13),
        a = r(57);
      var o = 1,
        i = 2;

      function s(e, t, r, s) {
        var u = r.length,
          l = u,
          c = !s;
        if (e == null) {
          return !l
        }
        e = Object(e);
        while (u--) {
          var d = r[u];
          if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) {
            return false
          }
        }
        while (++u < l) {
          d = r[u];
          var f = d[0],
            p = e[f],
            v = d[1];
          if (c && d[2]) {
            if (p === undefined && !(f in e)) {
              return false
            }
          } else {
            var h = new n;
            if (s) {
              var y = s(p, v, f, e, t, h)
            }
            if (!(y === undefined ? a(v, p, o | i, s, h) : y)) {
              return false
            }
          }
        }
        return true
      }
      e.exports = s
    }, function(e, t, r) {
      var n = r(14),
        a = r(22),
        o = r(23),
        i = r(24),
        s = r(25),
        u = r(26);

      function l(e) {
        var t = this.__data__ = new n(e);
        this.size = t.size
      }
      l.prototype.clear = a;
      l.prototype["delete"] = o;
      l.prototype.get = i;
      l.prototype.has = s;
      l.prototype.set = u;
      e.exports = l
    }, function(e, t, r) {
      var n = r(15),
        a = r(16),
        o = r(19),
        i = r(20),
        s = r(21);

      function u(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        this.clear();
        while (++t < r) {
          var n = e[t];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n;
      u.prototype["delete"] = a;
      u.prototype.get = o;
      u.prototype.has = i;
      u.prototype.set = s;
      e.exports = u
    }, function(e, t) {
      function r() {
        this.__data__ = [];
        this.size = 0
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(17);
      var a = Array.prototype;
      var o = a.splice;

      function i(e) {
        var t = this.__data__,
          r = n(t, e);
        if (r < 0) {
          return false
        }
        var a = t.length - 1;
        if (r == a) {
          t.pop()
        } else {
          o.call(t, r, 1)
        }--this.size;
        return true
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(18);

      function a(e, t) {
        var r = e.length;
        while (r--) {
          if (n(e[r][0], t)) {
            return r
          }
        }
        return -1
      }
      e.exports = a
    }, function(e, t) {
      function r(e, t) {
        return e === t || e !== e && t !== t
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(17);

      function a(e) {
        var t = this.__data__,
          r = n(t, e);
        return r < 0 ? undefined : t[r][1]
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(17);

      function a(e) {
        return n(this.__data__, e) > -1
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(17);

      function a(e, t) {
        var r = this.__data__,
          a = n(r, e);
        if (a < 0) {
          ++this.size;
          r.push([e, t])
        } else {
          r[a][1] = t
        }
        return this
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(14);

      function a() {
        this.__data__ = new n;
        this.size = 0
      }
      e.exports = a
    }, function(e, t) {
      function r(e) {
        var t = this.__data__,
          r = t["delete"](e);
        this.size = t.size;
        return r
      }
      e.exports = r
    }, function(e, t) {
      function r(e) {
        return this.__data__.get(e)
      }
      e.exports = r
    }, function(e, t) {
      function r(e) {
        return this.__data__.has(e)
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(14),
        a = r(27),
        o = r(42);
      var i = 200;

      function s(e, t) {
        var r = this.__data__;
        if (r instanceof n) {
          var s = r.__data__;
          if (!a || s.length < i - 1) {
            s.push([e, t]);
            this.size = ++r.size;
            return this
          }
          r = this.__data__ = new o(s)
        }
        r.set(e, t);
        this.size = r.size;
        return this
      }
      e.exports = s
    }, function(e, t, r) {
      var n = r(28),
        a = r(33);
      var o = n(a, "Map");
      e.exports = o
    }, function(e, t, r) {
      var n = r(29),
        a = r(41);

      function o(e, t) {
        var r = a(e, t);
        return n(r) ? r : undefined
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(30),
        a = r(38),
        o = r(37),
        i = r(40);
      var s = /[\\^$.*+?()[\]{}|]/g;
      var u = /^\[object .+?Constructor\]$/;
      var l = Function.prototype,
        c = Object.prototype;
      var d = l.toString;
      var f = c.hasOwnProperty;
      var p = RegExp("^" + d.call(f).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

      function v(e) {
        if (!o(e) || a(e)) {
          return false
        }
        var t = n(e) ? p : u;
        return t.test(i(e))
      }
      e.exports = v
    }, function(e, t, r) {
      var n = r(31),
        a = r(37);
      var o = "[object AsyncFunction]",
        i = "[object Function]",
        s = "[object GeneratorFunction]",
        u = "[object Proxy]";

      function l(e) {
        if (!a(e)) {
          return false
        }
        var t = n(e);
        return t == i || t == s || t == o || t == u
      }
      e.exports = l
    }, function(e, t, r) {
      var n = r(32),
        a = r(35),
        o = r(36);
      var i = "[object Null]",
        s = "[object Undefined]";
      var u = n ? n.toStringTag : undefined;

      function l(e) {
        if (e == null) {
          return e === undefined ? s : i
        }
        return u && u in Object(e) ? a(e) : o(e)
      }
      e.exports = l
    }, function(e, t, r) {
      var n = r(33);
      var a = n.Symbol;
      e.exports = a
    }, function(e, t, r) {
      var n = r(34);
      var a = typeof self == "object" && self && self.Object === Object && self;
      var o = n || a || Function("return this")();
      e.exports = o
    }, function(e, t, r) {
      var n = "object" == "object" && {} && {}.Object === Object && {};
      e.exports = n
    }, function(e, t, r) {
      var n = r(32);
      var a = Object.prototype;
      var o = a.hasOwnProperty;
      var i = a.toString;
      var s = n ? n.toStringTag : undefined;

      function u(e) {
        var t = o.call(e, s),
          r = e[s];
        try {
          e[s] = undefined;
          var n = true
        } catch (e) {}
        var a = i.call(e);
        if (n) {
          if (t) {
            e[s] = r
          } else {
            delete e[s]
          }
        }
        return a
      }
      e.exports = u
    }, function(e, t) {
      var r = Object.prototype;
      var n = r.toString;

      function a(e) {
        return n.call(e)
      }
      e.exports = a
    }, function(e, t) {
      function r(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(39);
      var a = function() {
        var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
      }();

      function o(e) {
        return !!a && a in e
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(33);
      var a = n["__core-js_shared__"];
      e.exports = a
    }, function(e, t) {
      var r = Function.prototype;
      var n = r.toString;

      function a(e) {
        if (e != null) {
          try {
            return n.call(e)
          } catch (e) {}
          try {
            return e + ""
          } catch (e) {}
        }
        return ""
      }
      e.exports = a
    }, function(e, t) {
      function r(e, t) {
        return e == null ? undefined : e[t]
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(43),
        a = r(51),
        o = r(54),
        i = r(55),
        s = r(56);

      function u(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        this.clear();
        while (++t < r) {
          var n = e[t];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n;
      u.prototype["delete"] = a;
      u.prototype.get = o;
      u.prototype.has = i;
      u.prototype.set = s;
      e.exports = u
    }, function(e, t, r) {
      var n = r(44),
        a = r(14),
        o = r(27);

      function i() {
        this.size = 0;
        this.__data__ = {
          hash: new n,
          map: new(o || a),
          string: new n
        }
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(45),
        a = r(47),
        o = r(48),
        i = r(49),
        s = r(50);

      function u(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        this.clear();
        while (++t < r) {
          var n = e[t];
          this.set(n[0], n[1])
        }
      }
      u.prototype.clear = n;
      u.prototype["delete"] = a;
      u.prototype.get = o;
      u.prototype.has = i;
      u.prototype.set = s;
      e.exports = u
    }, function(e, t, r) {
      var n = r(46);

      function a() {
        this.__data__ = n ? n(null) : {};
        this.size = 0
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(28);
      var a = n(Object, "create");
      e.exports = a
    }, function(e, t) {
      function r(e) {
        var t = this.has(e) && delete this.__data__[e];
        this.size -= t ? 1 : 0;
        return t
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(46);
      var a = "__lodash_hash_undefined__";
      var o = Object.prototype;
      var i = o.hasOwnProperty;

      function s(e) {
        var t = this.__data__;
        if (n) {
          var r = t[e];
          return r === a ? undefined : r
        }
        return i.call(t, e) ? t[e] : undefined
      }
      e.exports = s
    }, function(e, t, r) {
      var n = r(46);
      var a = Object.prototype;
      var o = a.hasOwnProperty;

      function i(e) {
        var t = this.__data__;
        return n ? t[e] !== undefined : o.call(t, e)
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(46);
      var a = "__lodash_hash_undefined__";

      function o(e, t) {
        var r = this.__data__;
        this.size += this.has(e) ? 0 : 1;
        r[e] = n && t === undefined ? a : t;
        return this
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(52);

      function a(e) {
        var t = n(this, e)["delete"](e);
        this.size -= t ? 1 : 0;
        return t
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(53);

      function a(e, t) {
        var r = e.__data__;
        return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
      }
      e.exports = a
    }, function(e, t) {
      function r(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(52);

      function a(e) {
        return n(this, e).get(e)
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(52);

      function a(e) {
        return n(this, e).has(e)
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(52);

      function a(e, t) {
        var r = n(this, e),
          a = r.size;
        r.set(e, t);
        this.size += r.size == a ? 0 : 1;
        return this
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(58),
        a = r(82);

      function o(e, t, r, i, s) {
        if (e === t) {
          return true
        }
        if (e == null || t == null || !a(e) && !a(t)) {
          return e !== e && t !== t
        }
        return n(e, t, r, i, o, s)
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(13),
        a = r(59),
        o = r(65),
        i = r(69),
        s = r(97),
        u = r(73),
        l = r(83),
        c = r(87);
      var d = 1;
      var f = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]";
      var h = Object.prototype;
      var y = h.hasOwnProperty;

      function m(e, t, r, h, m, g) {
        var _ = u(e),
          b = u(t),
          k = _ ? p : s(e),
          w = b ? p : s(t);
        k = k == f ? v : k;
        w = w == f ? v : w;
        var T = k == v,
          C = w == v,
          O = k == w;
        if (O && l(e)) {
          if (!l(t)) {
            return false
          }
          _ = true;
          T = false
        }
        if (O && !T) {
          g || (g = new n);
          return _ || c(e) ? a(e, t, r, h, m, g) : o(e, t, k, r, h, m, g)
        }
        if (!(r & d)) {
          var E = T && y.call(e, "__wrapped__"),
            R = C && y.call(t, "__wrapped__");
          if (E || R) {
            var P = E ? e.value() : e,
              S = R ? t.value() : t;
            g || (g = new n);
            return m(P, S, r, h, g)
          }
        }
        if (!O) {
          return false
        }
        g || (g = new n);
        return i(e, t, r, h, m, g)
      }
      e.exports = m
    }, function(e, t, r) {
      var n = r(60),
        a = r(63),
        o = r(64);
      var i = 1,
        s = 2;

      function u(e, t, r, u, l, c) {
        var d = r & i,
          f = e.length,
          p = t.length;
        if (f != p && !(d && p > f)) {
          return false
        }
        var v = c.get(e);
        if (v && c.get(t)) {
          return v == t
        }
        var h = -1,
          y = true,
          m = r & s ? new n : undefined;
        c.set(e, t);
        c.set(t, e);
        while (++h < f) {
          var g = e[h],
            _ = t[h];
          if (u) {
            var b = d ? u(_, g, h, t, e, c) : u(g, _, h, e, t, c)
          }
          if (b !== undefined) {
            if (b) {
              continue
            }
            y = false;
            break
          }
          if (m) {
            if (!a(t, function(e, t) {
                if (!o(m, t) && (g === e || l(g, e, r, u, c))) {
                  return m.push(t)
                }
              })) {
              y = false;
              break
            }
          } else if (!(g === _ || l(g, _, r, u, c))) {
            y = false;
            break
          }
        }
        c["delete"](e);
        c["delete"](t);
        return y
      }
      e.exports = u
    }, function(e, t, r) {
      var n = r(42),
        a = r(61),
        o = r(62);

      function i(e) {
        var t = -1,
          r = e == null ? 0 : e.length;
        this.__data__ = new n;
        while (++t < r) {
          this.add(e[t])
        }
      }
      i.prototype.add = i.prototype.push = a;
      i.prototype.has = o;
      e.exports = i
    }, function(e, t) {
      var r = "__lodash_hash_undefined__";

      function n(e) {
        this.__data__.set(e, r);
        return this
      }
      e.exports = n
    }, function(e, t) {
      function r(e) {
        return this.__data__.has(e)
      }
      e.exports = r
    }, function(e, t) {
      function r(e, t) {
        var r = -1,
          n = e == null ? 0 : e.length;
        while (++r < n) {
          if (t(e[r], r, e)) {
            return true
          }
        }
        return false
      }
      e.exports = r
    }, function(e, t) {
      function r(e, t) {
        return e.has(t)
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(32),
        a = r(66),
        o = r(18),
        i = r(59),
        s = r(67),
        u = r(68);
      var l = 1,
        c = 2;
      var d = "[object Boolean]",
        f = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        y = "[object RegExp]",
        m = "[object Set]",
        g = "[object String]",
        _ = "[object Symbol]";
      var b = "[object ArrayBuffer]",
        k = "[object DataView]";
      var w = n ? n.prototype : undefined,
        T = w ? w.valueOf : undefined;

      function C(e, t, r, n, w, C, O) {
        switch (r) {
          case k:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
              return false
            }
            e = e.buffer;
            t = t.buffer;
          case b:
            if (e.byteLength != t.byteLength || !C(new a(e), new a(t))) {
              return false
            }
            return true;
          case d:
          case f:
          case h:
            return o(+e, +t);
          case p:
            return e.name == t.name && e.message == t.message;
          case y:
          case g:
            return e == t + "";
          case v:
            var E = s;
          case m:
            var R = n & l;
            E || (E = u);
            if (e.size != t.size && !R) {
              return false
            }
            var P = O.get(e);
            if (P) {
              return P == t
            }
            n |= c;
            O.set(e, t);
            var S = i(E(e), E(t), n, w, C, O);
            O["delete"](e);
            return S;
          case _:
            if (T) {
              return T.call(e) == T.call(t)
            }
        }
        return false
      }
      e.exports = C
    }, function(e, t, r) {
      var n = r(33);
      var a = n.Uint8Array;
      e.exports = a
    }, function(e, t) {
      function r(e) {
        var t = -1,
          r = Array(e.size);
        e.forEach(function(e, n) {
          r[++t] = [n, e]
        });
        return r
      }
      e.exports = r
    }, function(e, t) {
      function r(e) {
        var t = -1,
          r = Array(e.size);
        e.forEach(function(e) {
          r[++t] = e
        });
        return r
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(70);
      var a = 1;
      var o = Object.prototype;
      var i = o.hasOwnProperty;

      function s(e, t, r, o, s, u) {
        var l = r & a,
          c = n(e),
          d = c.length,
          f = n(t),
          p = f.length;
        if (d != p && !l) {
          return false
        }
        var v = d;
        while (v--) {
          var h = c[v];
          if (!(l ? h in t : i.call(t, h))) {
            return false
          }
        }
        var y = u.get(e);
        if (y && u.get(t)) {
          return y == t
        }
        var m = true;
        u.set(e, t);
        u.set(t, e);
        var g = l;
        while (++v < d) {
          h = c[v];
          var _ = e[h],
            b = t[h];
          if (o) {
            var k = l ? o(b, _, h, t, e, u) : o(_, b, h, e, t, u)
          }
          if (!(k === undefined ? _ === b || s(_, b, r, o, u) : k)) {
            m = false;
            break
          }
          g || (g = h == "constructor")
        }
        if (m && !g) {
          var w = e.constructor,
            T = t.constructor;
          if (w != T && ("constructor" in e && "constructor" in t) && !(typeof w == "function" && w instanceof w && typeof T == "function" && T instanceof T)) {
            m = false
          }
        }
        u["delete"](e);
        u["delete"](t);
        return m
      }
      e.exports = s
    }, function(e, t, r) {
      var n = r(71),
        a = r(74),
        o = r(77);

      function i(e) {
        return n(e, o, a)
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(72),
        a = r(73);

      function o(e, t, r) {
        var o = t(e);
        return a(e) ? o : n(o, r(e))
      }
      e.exports = o
    }, function(e, t) {
      function r(e, t) {
        var r = -1,
          n = t.length,
          a = e.length;
        while (++r < n) {
          e[a + r] = t[r]
        }
        return e
      }
      e.exports = r
    }, function(e, t) {
      var r = Array.isArray;
      e.exports = r
    }, function(e, t, r) {
      var n = r(75),
        a = r(76);
      var o = Object.prototype;
      var i = o.propertyIsEnumerable;
      var s = Object.getOwnPropertySymbols;
      var u = !s ? a : function(e) {
        if (e == null) {
          return []
        }
        e = Object(e);
        return n(s(e), function(t) {
          return i.call(e, t)
        })
      };
      e.exports = u
    }, function(e, t) {
      function r(e, t) {
        var r = -1,
          n = e == null ? 0 : e.length,
          a = 0,
          o = [];
        while (++r < n) {
          var i = e[r];
          if (t(i, r, e)) {
            o[a++] = i
          }
        }
        return o
      }
      e.exports = r
    }, function(e, t) {
      function r() {
        return []
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(78),
        a = r(92),
        o = r(96);

      function i(e) {
        return o(e) ? n(e) : a(e)
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(79),
        a = r(80),
        o = r(73),
        i = r(83),
        s = r(86),
        u = r(87);
      var l = Object.prototype;
      var c = l.hasOwnProperty;

      function d(e, t) {
        var r = o(e),
          l = !r && a(e),
          d = !r && !l && i(e),
          f = !r && !l && !d && u(e),
          p = r || l || d || f,
          v = p ? n(e.length, String) : [],
          h = v.length;
        for (var y in e) {
          if ((t || c.call(e, y)) && !(p && (y == "length" || d && (y == "offset" || y == "parent") || f && (y == "buffer" || y == "byteLength" || y == "byteOffset") || s(y, h)))) {
            v.push(y)
          }
        }
        return v
      }
      e.exports = d
    }, function(e, t) {
      function r(e, t) {
        var r = -1,
          n = Array(e);
        while (++r < e) {
          n[r] = t(r)
        }
        return n
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(81),
        a = r(82);
      var o = Object.prototype;
      var i = o.hasOwnProperty;
      var s = o.propertyIsEnumerable;
      var u = n(function() {
        return arguments
      }()) ? n : function(e) {
        return a(e) && i.call(e, "callee") && !s.call(e, "callee")
      };
      e.exports = u
    }, function(e, t, r) {
      var n = r(31),
        a = r(82);
      var o = "[object Arguments]";

      function i(e) {
        return a(e) && n(e) == o
      }
      e.exports = i
    }, function(e, t) {
      function r(e) {
        return e != null && typeof e == "object"
      }
      e.exports = r
    }, function(e, t, r) {
      (function(e) {
        var n = r(33),
          a = r(85);
        var o = typeof t == "object" && t && !t.nodeType && t;
        var i = o && typeof e == "object" && e && !e.nodeType && e;
        var s = i && i.exports === o;
        var u = s ? n.Buffer : undefined;
        var l = u ? u.isBuffer : undefined;
        var c = l || a;
        e.exports = c
      }).call(t, r(84)(e))
    }, function(e, t) {
      e.exports = function(e) {
        if (!e.webpackPolyfill) {
          e.deprecate = function() {};
          e.paths = [];
          e.children = [];
          e.webpackPolyfill = 1
        }
        return e
      }
    }, function(e, t) {
      function r() {
        return false
      }
      e.exports = r
    }, function(e, t) {
      var r = 9007199254740991;
      var n = /^(?:0|[1-9]\d*)$/;

      function a(e, t) {
        t = t == null ? r : t;
        return !!t && (typeof e == "number" || n.test(e)) && (e > -1 && e % 1 == 0 && e < t)
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(88),
        a = r(90),
        o = r(91);
      var i = o && o.isTypedArray;
      var s = i ? a(i) : n;
      e.exports = s
    }, function(e, t, r) {
      var n = r(31),
        a = r(89),
        o = r(82);
      var i = "[object Arguments]",
        s = "[object Array]",
        u = "[object Boolean]",
        l = "[object Date]",
        c = "[object Error]",
        d = "[object Function]",
        f = "[object Map]",
        p = "[object Number]",
        v = "[object Object]",
        h = "[object RegExp]",
        y = "[object Set]",
        m = "[object String]",
        g = "[object WeakMap]";
      var _ = "[object ArrayBuffer]",
        b = "[object DataView]",
        k = "[object Float32Array]",
        w = "[object Float64Array]",
        T = "[object Int8Array]",
        C = "[object Int16Array]",
        O = "[object Int32Array]",
        E = "[object Uint8Array]",
        R = "[object Uint8ClampedArray]",
        P = "[object Uint16Array]",
        S = "[object Uint32Array]";
      var D = {};
      D[k] = D[w] = D[T] = D[C] = D[O] = D[E] = D[R] = D[P] = D[S] = true;
      D[i] = D[s] = D[_] = D[u] = D[b] = D[l] = D[c] = D[d] = D[f] = D[p] = D[v] = D[h] = D[y] = D[m] = D[g] = false;

      function M(e) {
        return o(e) && a(e.length) && !!D[n(e)]
      }
      e.exports = M
    }, function(e, t) {
      var r = 9007199254740991;

      function n(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r
      }
      e.exports = n
    }, function(e, t) {
      function r(e) {
        return function(t) {
          return e(t)
        }
      }
      e.exports = r
    }, function(e, t, r) {
      (function(e) {
        var n = r(34);
        var a = typeof t == "object" && t && !t.nodeType && t;
        var o = a && typeof e == "object" && e && !e.nodeType && e;
        var i = o && o.exports === a;
        var s = i && n.process;
        var u = function() {
          try {
            return s && s.binding && s.binding("util")
          } catch (e) {}
        }();
        e.exports = u
      }).call(t, r(84)(e))
    }, function(e, t, r) {
      var n = r(93),
        a = r(94);
      var o = Object.prototype;
      var i = o.hasOwnProperty;

      function s(e) {
        if (!n(e)) {
          return a(e)
        }
        var t = [];
        for (var r in Object(e)) {
          if (i.call(e, r) && r != "constructor") {
            t.push(r)
          }
        }
        return t
      }
      e.exports = s
    }, function(e, t) {
      var r = Object.prototype;

      function n(e) {
        var t = e && e.constructor,
          n = typeof t == "function" && t.prototype || r;
        return e === n
      }
      e.exports = n
    }, function(e, t, r) {
      var n = r(95);
      var a = n(Object.keys, Object);
      e.exports = a
    }, function(e, t) {
      function r(e, t) {
        return function(r) {
          return e(t(r))
        }
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(30),
        a = r(89);

      function o(e) {
        return e != null && a(e.length) && !n(e)
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(98),
        a = r(27),
        o = r(99),
        i = r(100),
        s = r(101),
        u = r(31),
        l = r(40);
      var c = "[object Map]",
        d = "[object Object]",
        f = "[object Promise]",
        p = "[object Set]",
        v = "[object WeakMap]";
      var h = "[object DataView]";
      var y = l(n),
        m = l(a),
        g = l(o),
        _ = l(i),
        b = l(s);
      var k = u;
      if (n && k(new n(new ArrayBuffer(1))) != h || a && k(new a) != c || o && k(o.resolve()) != f || i && k(new i) != p || s && k(new s) != v) {
        k = function(e) {
          var t = u(e),
            r = t == d ? e.constructor : undefined,
            n = r ? l(r) : "";
          if (n) {
            switch (n) {
              case y:
                return h;
              case m:
                return c;
              case g:
                return f;
              case _:
                return p;
              case b:
                return v
            }
          }
          return t
        }
      }
      e.exports = k
    }, function(e, t, r) {
      var n = r(28),
        a = r(33);
      var o = n(a, "DataView");
      e.exports = o
    }, function(e, t, r) {
      var n = r(28),
        a = r(33);
      var o = n(a, "Promise");
      e.exports = o
    }, function(e, t, r) {
      var n = r(28),
        a = r(33);
      var o = n(a, "Set");
      e.exports = o
    }, function(e, t, r) {
      var n = r(28),
        a = r(33);
      var o = n(a, "WeakMap");
      e.exports = o
    }, function(e, t, r) {
      var n = r(103),
        a = r(77);

      function o(e) {
        var t = a(e),
          r = t.length;
        while (r--) {
          var o = t[r],
            i = e[o];
          t[r] = [o, i, n(i)]
        }
        return t
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(37);

      function a(e) {
        return e === e && !n(e)
      }
      e.exports = a
    }, function(e, t) {
      function r(e, t) {
        return function(r) {
          if (r == null) {
            return false
          }
          return r[e] === t && (t !== undefined || e in Object(r))
        }
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(57),
        a = r(106),
        o = r(118),
        i = r(109),
        s = r(103),
        u = r(104),
        l = r(117);
      var c = 1,
        d = 2;

      function f(e, t) {
        if (i(e) && s(t)) {
          return u(l(e), t)
        }
        return function(r) {
          var i = a(r, e);
          return i === undefined && i === t ? o(r, e) : n(t, i, c | d)
        }
      }
      e.exports = f
    }, function(e, t, r) {
      var n = r(107);

      function a(e, t, r) {
        var a = e == null ? undefined : n(e, t);
        return a === undefined ? r : a
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(108),
        a = r(117);

      function o(e, t) {
        t = n(t, e);
        var r = 0,
          o = t.length;
        while (e != null && r < o) {
          e = e[a(t[r++])]
        }
        return r && r == o ? e : undefined
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(73),
        a = r(109),
        o = r(111),
        i = r(114);

      function s(e, t) {
        if (n(e)) {
          return e
        }
        return a(e, t) ? [e] : o(i(e))
      }
      e.exports = s
    }, function(e, t, r) {
      var n = r(73),
        a = r(110);
      var o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;

      function s(e, t) {
        if (n(e)) {
          return false
        }
        var r = typeof e;
        if (r == "number" || r == "symbol" || r == "boolean" || e == null || a(e)) {
          return true
        }
        return i.test(e) || !o.test(e) || t != null && e in Object(t)
      }
      e.exports = s
    }, function(e, t, r) {
      var n = r(31),
        a = r(82);
      var o = "[object Symbol]";

      function i(e) {
        return typeof e == "symbol" || a(e) && n(e) == o
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(112);
      var a = /^\./,
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var i = /\\(\\)?/g;
      var s = n(function(e) {
        var t = [];
        if (a.test(e)) {
          t.push("")
        }
        e.replace(o, function(e, r, n, a) {
          t.push(n ? a.replace(i, "$1") : r || e)
        });
        return t
      });
      e.exports = s
    }, function(e, t, r) {
      var n = r(113);
      var a = 500;

      function o(e) {
        var t = n(e, function(e) {
          if (r.size === a) {
            r.clear()
          }
          return e
        });
        var r = t.cache;
        return t
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(42);
      var a = "Expected a function";

      function o(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") {
          throw new TypeError(a)
        }
        var r = function() {
          var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            o = r.cache;
          if (o.has(a)) {
            return o.get(a)
          }
          var i = e.apply(this, n);
          r.cache = o.set(a, i) || o;
          return i
        };
        r.cache = new(o.Cache || n);
        return r
      }
      o.Cache = n;
      e.exports = o
    }, function(e, t, r) {
      var n = r(115);

      function a(e) {
        return e == null ? "" : n(e)
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(32),
        a = r(116),
        o = r(73),
        i = r(110);
      var s = 1 / 0;
      var u = n ? n.prototype : undefined,
        l = u ? u.toString : undefined;

      function c(e) {
        if (typeof e == "string") {
          return e
        }
        if (o(e)) {
          return a(e, c) + ""
        }
        if (i(e)) {
          return l ? l.call(e) : ""
        }
        var t = e + "";
        return t == "0" && 1 / e == -s ? "-0" : t
      }
      e.exports = c
    }, function(e, t) {
      function r(e, t) {
        var r = -1,
          n = e == null ? 0 : e.length,
          a = Array(n);
        while (++r < n) {
          a[r] = t(e[r], r, e)
        }
        return a
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(110);
      var a = 1 / 0;

      function o(e) {
        if (typeof e == "string" || n(e)) {
          return e
        }
        var t = e + "";
        return t == "0" && 1 / e == -a ? "-0" : t
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(119),
        a = r(120);

      function o(e, t) {
        return e != null && a(e, t, n)
      }
      e.exports = o
    }, function(e, t) {
      function r(e, t) {
        return e != null && t in Object(e)
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(108),
        a = r(80),
        o = r(73),
        i = r(86),
        s = r(89),
        u = r(117);

      function l(e, t, r) {
        t = n(t, e);
        var l = -1,
          c = t.length,
          d = false;
        while (++l < c) {
          var f = u(t[l]);
          if (!(d = e != null && r(e, f))) {
            break
          }
          e = e[f]
        }
        if (d || ++l != c) {
          return d
        }
        c = e == null ? 0 : e.length;
        return !!c && s(c) && i(f, c) && (o(e) || a(e))
      }
      e.exports = l
    }, function(e, t) {
      function r(e) {
        return e
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(123),
        a = r(124),
        o = r(109),
        i = r(117);

      function s(e) {
        return o(e) ? n(i(e)) : a(e)
      }
      e.exports = s
    }, function(e, t) {
      function r(e) {
        return function(t) {
          return t == null ? undefined : t[e]
        }
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(107);

      function a(e) {
        return function(t) {
          return n(t, e)
        }
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(126);

      function a(e) {
        var t = n(e),
          r = t % 1;
        return t === t ? r ? t - r : t : 0
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(127);
      var a = 1 / 0,
        o = 1.7976931348623157e308;

      function i(e) {
        if (!e) {
          return e === 0 ? e : 0
        }
        e = n(e);
        if (e === a || e === -a) {
          var t = e < 0 ? -1 : 1;
          return t * o
        }
        return e === e ? e : 0
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(37),
        a = r(110);
      var o = 0 / 0;
      var i = /^\s+|\s+$/g;
      var s = /^[-+]0x[0-9a-f]+$/i;
      var u = /^0b[01]+$/i;
      var l = /^0o[0-7]+$/i;
      var c = parseInt;

      function d(e) {
        if (typeof e == "number") {
          return e
        }
        if (a(e)) {
          return o
        }
        if (n(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = n(t) ? t + "" : t
        }
        if (typeof e != "string") {
          return e === 0 ? e : +e
        }
        e = e.replace(i, "");
        var r = u.test(e);
        return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : s.test(e) ? o : +e
      }
      e.exports = d
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(129);
      var a = s(n);
      var o = r(2);
      var i = r(132);

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var u = [];
      var l = [];
      var c = function e(t) {
        return t.hazards.map(function(e) {
          var r = i.AvailableHazard.getResourceKey(e.code);
          var n = o.translator.translate(r);
          return new i.FlattenedAvailableHazard({
            hazard: e,
            translatedDescription: n,
            groupCode: t.code
          })
        })
      };
      var d = function e(t) {
        return t.controlMeasures.map(function(e) {
          var t = i.AvailableControlMeasure.getResourceKey(e.code);
          var r = o.translator.translate(t);
          return new i.FlattenedAvailableControlMeasure({
            control: e,
            translatedDescription: r
          })
        })
      };
      var f = function e(t) {
        var r = (0, a.default)(t.map(function(e) {
          return c(e)
        }));
        var n = (0, a.default)(r.map(function(e) {
          return d(e)
        }));
        u = r;
        l = n
      };
      var p = function e(t, r) {
        var n = t.filter(function(e) {
          var t = e.translatedDescription.toLowerCase();
          return t.indexOf(r.toLowerCase()) !== -1
        });
        return new Promise(function(e) {
          return e(n)
        })
      };
      var v = function e(t) {
        return p(u, t)
      };
      var h = function e(t) {
        return p(l, t)
      };
      var y = function e(t, r, n) {
        if (!r || !n) {
          return null
        }
        var a = (0, o.getIndexes)(t, r, n),
          s = a.taskIndex,
          u = a.hazardIndex;
        var l = t[s].hazards[u];
        if (l) {
          return l.unlistedDescription ? l.unlistedDescription : o.translator.translate(i.AvailableHazard.getResourceKey(l.code))
        }
        return null
      };
      t.default = {
        flattenAndStore: f,
        getHazards: v,
        getControls: h,
        getHazardDescription: y
      }
    }, function(e, t, r) {
      var n = r(130);

      function a(e) {
        var t = e == null ? 0 : e.length;
        return t ? n(e, 1) : []
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(72),
        a = r(131);

      function o(e, t, r, i, s) {
        var u = -1,
          l = e.length;
        r || (r = a);
        s || (s = []);
        while (++u < l) {
          var c = e[u];
          if (t > 0 && r(c)) {
            if (t > 1) {
              o(c, t - 1, r, i, s)
            } else {
              n(s, c)
            }
          } else if (!i) {
            s[s.length] = c
          }
        }
        return s
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(32),
        a = r(80),
        o = r(73);
      var i = n ? n.isConcatSpreadable : undefined;

      function s(e) {
        return o(e) || a(e) || !!(i && e && e[i])
      }
      e.exports = s
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(133);
      Object.defineProperty(t, "HazardGroup", {
        enumerable: true,
        get: function e() {
          return v(n).default
        }
      });
      var a = r(134);
      Object.defineProperty(t, "AvailableHazard", {
        enumerable: true,
        get: function e() {
          return v(a).default
        }
      });
      var o = r(136);
      Object.defineProperty(t, "AvailableControlMeasure", {
        enumerable: true,
        get: function e() {
          return v(o).default
        }
      });
      var i = r(135);
      Object.defineProperty(t, "Property", {
        enumerable: true,
        get: function e() {
          return v(i).default
        }
      });
      var s = r(137);
      Object.defineProperty(t, "Risk", {
        enumerable: true,
        get: function e() {
          return v(s).default
        }
      });
      var u = r(138);
      Object.defineProperty(t, "TaskStep", {
        enumerable: true,
        get: function e() {
          return v(u).default
        }
      });
      var l = r(144);
      Object.defineProperty(t, "IdentifiedHazard", {
        enumerable: true,
        get: function e() {
          return v(l).default
        }
      });
      var c = r(153);
      Object.defineProperty(t, "IdentifiedControlMeasure", {
        enumerable: true,
        get: function e() {
          return v(c).default
        }
      });
      var d = r(154);
      Object.defineProperty(t, "FlattenedAvailableHazard", {
        enumerable: true,
        get: function e() {
          return v(d).default
        }
      });
      var f = r(155);
      Object.defineProperty(t, "FlattenedAvailableControlMeasure", {
        enumerable: true,
        get: function e() {
          return v(f).default
        }
      });
      var p = r(156);
      Object.defineProperty(t, "ActiveItem", {
        enumerable: true,
        get: function e() {
          return v(p).default
        }
      });

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(134);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var u = function() {
        function e(t, r, n) {
          s(this, e);
          if (!t) {
            throw new Error("HazardGroup requires a code")
          }
          if (!n) {
            throw new Error("HazardGroup requires a category")
          }
          this.code = t;
          this.hazards = r;
          this.category = n || ""
        }
        n(e, null, [{
          key: "FromJSON",
          value: function t(r, n) {
            return new e(r.code, (r.hazards || []).map(function(e) {
              return new o.default.FromJSON(e, r.code)
            }), n)
          }
        }, {
          key: "getResourceKey",
          value: function e(t) {
            return "HazardGroup_" + t
          }
        }]);
        return e
      }();
      t.default = u
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(135);
      var o = u(a);
      var i = r(136);
      var s = u(i);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var c = function() {
        function e(t) {
          var r = t.code,
            n = t.controlMeasures,
            a = t.groupCode,
            o = t.properties,
            i = t.categories,
            s = t.uniqueId,
            u = t.type;
          l(this, e);
          if (!r) {
            throw new Error("AvailableHazard requires a code")
          }
          if (!a) {
            throw new Error("AvailableHazard requires a groupCode")
          }
          this.code = r;
          this.controlMeasures = n;
          this.groupCode = a;
          this.properties = o;
          this.categories = i;
          this.uniqueId = s;
          this.type = u
        }
        n(e, null, [{
          key: "FromJSON",
          value: function t(r, n) {
            var a = r.code,
              i = r.controlMeasures,
              u = r.properties,
              l = r.categories,
              c = r.type;
            return new e({
              code: a,
              controlMeasures: (i || []).map(function(e) {
                return new s.default.FromJSON(e)
              }),
              groupCode: n,
              properties: (u || []).map(function(e) {
                return new o.default.FromJSON(e)
              }),
              categories: l,
              type: c
            })
          }
        }, {
          key: "getResourceKey",
          value: function e(t) {
            return "Hazard_" + t
          }
        }]);
        return e
      }();
      t.default = c
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();

      function n(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var a = function() {
        function e(t) {
          var r = t.name,
            a = t.isRequired,
            o = t.type;
          n(this, e);
          this.name = r;
          this.isRequired = a;
          this.type = o
        }
        r(e, null, [{
          key: "FromJSON",
          value: function t(r) {
            var n = r.name,
              a = r.isRequired,
              o = r.type;
            return new e({
              name: n,
              isRequired: a,
              type: o
            })
          }
        }]);
        return e
      }();
      t.default = a
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(135);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var u = function() {
        function e(t) {
          var r = t.code,
            n = t.isRequired,
            a = t.properties,
            o = t.categories,
            i = t.uniqueId,
            u = t.type;
          s(this, e);
          if (!r) {
            throw new Error("AvailableControlMeasure requires a code")
          }
          this.code = r;
          this.isRequired = !!n;
          this.properties = a;
          this.categories = o || [];
          this.uniqueId = i;
          this.type = u
        }
        n(e, null, [{
          key: "FromJSON",
          value: function t(r) {
            var n = r.code,
              a = r.isRequired,
              i = r.properties,
              s = r.categories,
              u = r.type;
            return new e({
              code: n,
              isRequired: a,
              properties: (i || []).map(function(e) {
                return new o.default.FromJSON(e)
              }),
              categories: s,
              type: u
            })
          }
        }, {
          key: "getResourceKey",
          value: function e(t) {
            return "ControlMeasure_" + t
          }
        }]);
        return e
      }();
      t.default = u
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });

      function r(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var n = function e(t) {
        r(this, e);
        this.severity = t ? t.severity : "";
        this.likelihood = t ? t.likelihood : "";
        this.rating = t ? t.rating : "";
        this.area = t ? t.area : ""
      };
      t.default = n
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(139);
      var o = u(a);
      var i = r(144);
      var s = u(i);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var c = function() {
        function e(t) {
          var r = t.number,
            n = t.description,
            a = t.hazards,
            i = t.identifier;
          l(this, e);
          if (typeof r !== "number") {
            throw new Error("TaskStep requires a number")
          }
          this.number = r;
          this.description = n || "";
          this.hazards = a || [];
          this.identifier = i || o.default.v4()
        }
        n(e, null, [{
          key: "transform",
          value: function t(r) {
            var n = r.number,
              a = r.description,
              o = r.hazards,
              i = r.identifier;
            return new e({
              number: n,
              description: a,
              hazards: o.map(function(e, t) {
                return s.default.transform(e, t)
              }),
              identifier: i
            })
          }
        }]);
        return e
      }();
      t.default = c
    }, function(e, t, r) {
      var n = r(140);
      var a = r(143);
      var o = a;
      o.v1 = n;
      o.v4 = a;
      e.exports = o
    }, function(e, t, r) {
      var n = r(141);
      var a = r(142);
      var o = n();
      var i = [o[0] | 1, o[1], o[2], o[3], o[4], o[5]];
      var s = (o[6] << 8 | o[7]) & 16383;
      var u = 0,
        l = 0;

      function c(e, t, r) {
        var n = t && r || 0;
        var o = t || [];
        e = e || {};
        var c = e.clockseq !== undefined ? e.clockseq : s;
        var d = e.msecs !== undefined ? e.msecs : (new Date).getTime();
        var f = e.nsecs !== undefined ? e.nsecs : l + 1;
        var p = d - u + (f - l) / 1e4;
        if (p < 0 && e.clockseq === undefined) {
          c = c + 1 & 16383
        }
        if ((p < 0 || d > u) && e.nsecs === undefined) {
          f = 0
        }
        if (f >= 1e4) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
        }
        u = d;
        l = f;
        s = c;
        d += 122192928e5;
        var v = ((d & 268435455) * 1e4 + f) % 4294967296;
        o[n++] = v >>> 24 & 255;
        o[n++] = v >>> 16 & 255;
        o[n++] = v >>> 8 & 255;
        o[n++] = v & 255;
        var h = d / 4294967296 * 1e4 & 268435455;
        o[n++] = h >>> 8 & 255;
        o[n++] = h & 255;
        o[n++] = h >>> 24 & 15 | 16;
        o[n++] = h >>> 16 & 255;
        o[n++] = c >>> 8 | 128;
        o[n++] = c & 255;
        var y = e.node || i;
        for (var m = 0; m < 6; ++m) {
          o[n + m] = y[m]
        }
        return t ? t : a(o)
      }
      e.exports = c
    }, function(e, t, r) {
      var n;
      var a = {}.crypto || {}.msCrypto;
      if (a && a.getRandomValues) {
        var o = new Uint8Array(16);
        n = function e() {
          a.getRandomValues(o);
          return o
        }
      }
      if (!n) {
        var i = new Array(16);
        n = function() {
          for (var e = 0, t; e < 16; e++) {
            if ((e & 3) === 0) t = Math.random() * 4294967296;
            i[e] = t >>> ((e & 3) << 3) & 255
          }
          return i
        }
      }
      e.exports = n
    }, function(e, t) {
      var r = [];
      for (var n = 0; n < 256; ++n) {
        r[n] = (n + 256).toString(16).substr(1)
      }

      function a(e, t) {
        var n = t || 0;
        var a = r;
        return a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + "-" + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]] + a[e[n++]]
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(141);
      var a = r(142);

      function o(e, t, r) {
        var o = t && r || 0;
        if (typeof e == "string") {
          t = e == "binary" ? new Array(16) : null;
          e = null
        }
        e = e || {};
        var i = e.random || (e.rng || n)();
        i[6] = i[6] & 15 | 64;
        i[8] = i[8] & 63 | 128;
        if (t) {
          for (var s = 0; s < 16; ++s) {
            t[o + s] = i[s]
          }
        }
        return t || a(i)
      }
      e.exports = o
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(139);
      var o = h(a);
      var i = r(145);
      var s = h(i);
      var u = r(153);
      var l = h(u);
      var c = r(134);
      var d = h(c);
      var f = r(137);
      var p = h(f);
      var v = r(2);

      function h(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function y(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var m = function e(t) {
        return (0, s.default)(t, function(e) {
          return e.value.length
        })
      };
      var g = function() {
        function e(t) {
          var r = t.number,
            n = t.code,
            a = t.hazardGroupCode,
            i = t.isUnlisted,
            s = t.unlistedDescription,
            u = t.controlMeasures,
            l = t.categories,
            c = t.initialRisk,
            d = t.residualRisk,
            f = t.uniqueId,
            p = t.type;
          y(this, e);
          if (!n) {
            throw new Error("IdentifiedHazard requires a code")
          }
          if (typeof r !== "number") {
            throw new Error("IdentifiedHazard requires a number")
          }
          if (!l) {
            throw new Error("IdentifiedHazard requires a category")
          }
          this.number = r;
          this.code = n;
          this.hazardGroupCode = a || "Other";
          this.isUnlisted = i;
          this.unlistedDescription = s || "";
          this.controlMeasures = u || [];
          this.categories = l;
          this.initialRisk = c;
          this.residualRisk = d;
          this.properties = [];
          this.uniqueId = f || o.default.v4();
          this.type = p
        }
        n(e, [{
          key: "IsCompleted",
          value: function e() {
            return !!this.initialRisk && !!this.residualRisk
          }
        }], [{
          key: "transform",
          value: function t(r, n) {
            var a = [];
            if (r.controlMeasures && r.controlMeasures.length) {
              a = r.controlMeasures.map(function(e, t) {
                return l.default.transform(e, t)
              })
            }
            var o = r.isUnlisted;
            var i = r.unlistedDescription || "";
            if (m(r.properties)) {
              o = true;
              if (!i) {
                var s = d.default.getResourceKey(r.code);
                i = v.translator.translate(s)
              }
              var u = r.properties.map(function(e) {
                return e.value
              });
              u.join(" ");
              i += " - " + u
            }
            var c = typeof r.number === "number" ? r.number : n + 1;
            return new e({
              number: c,
              code: r.code,
              hazardGroupCode: r.hazardGroupCode,
              isUnlisted: o,
              unlistedDescription: i,
              controlMeasures: a,
              categories: r.categories,
              initialRisk: new p.default(r.initialRisk),
              residualRisk: new p.default(r.residualRisk),
              uniqueId: r.uniqueId,
              type: r.type
            })
          }
        }]);
        return e
      }();
      t.default = g
    }, function(e, t, r) {
      var n = r(63),
        a = r(10),
        o = r(146),
        i = r(73),
        s = r(152);

      function u(e, t, r) {
        var u = i(e) ? n : o;
        if (r && s(e, t, r)) {
          t = undefined
        }
        return u(e, a(t, 3))
      }
      e.exports = u
    }, function(e, t, r) {
      var n = r(147);

      function a(e, t) {
        var r;
        n(e, function(e, n, a) {
          r = t(e, n, a);
          return !r
        });
        return !!r
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(148),
        a = r(151);
      var o = a(n);
      e.exports = o
    }, function(e, t, r) {
      var n = r(149),
        a = r(77);

      function o(e, t) {
        return e && n(e, t, a)
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(150);
      var a = n();
      e.exports = a
    }, function(e, t) {
      function r(e) {
        return function(t, r, n) {
          var a = -1,
            o = Object(t),
            i = n(t),
            s = i.length;
          while (s--) {
            var u = i[e ? s : ++a];
            if (r(o[u], u, o) === false) {
              break
            }
          }
          return t
        }
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(96);

      function a(e, t) {
        return function(r, a) {
          if (r == null) {
            return r
          }
          if (!n(r)) {
            return e(r, a)
          }
          var o = r.length,
            i = t ? o : -1,
            s = Object(r);
          while (t ? i-- : ++i < o) {
            if (a(s[i], i, s) === false) {
              break
            }
          }
          return r
        }
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(18),
        a = r(96),
        o = r(86),
        i = r(37);

      function s(e, t, r) {
        if (!i(r)) {
          return false
        }
        var s = typeof t;
        if (s == "number" ? a(r) && o(t, r.length) : s == "string" && t in r) {
          return n(r[t], e)
        }
        return false
      }
      e.exports = s
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(145);
      var o = d(a);
      var i = r(139);
      var s = d(i);
      var u = r(136);
      var l = d(u);
      var c = r(2);

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function f(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var p = function e(t) {
        return (0, o.default)(t, function(e) {
          return e.value.length
        })
      };
      var v = function() {
        function e(t) {
          var r = t.number,
            n = t.code,
            a = t.isPrerequisite,
            o = t.isUnlisted,
            i = t.unlistedDescription,
            u = t.categories,
            l = t.uniqueId,
            c = t.type;
          f(this, e);
          if (!n) {
            throw new Error("IdentifiedControlMeasure requires a code")
          }
          if (typeof r !== "number") {
            throw new Error("IdentifiedControlMeasure requires a number")
          }
          this.number = r;
          this.code = n;
          this.isPrerequisite = a || false;
          this.isUnlisted = o || false;
          this.unlistedDescription = i || "";
          this.categories = u || [];
          this.properties = [];
          this.uniqueId = l || s.default.v4();
          this.type = c
        }
        n(e, null, [{
          key: "transform",
          value: function t(r, n) {
            if (!r) {
              throw new Error("IdentifiedControlMeasure.transform requires a source")
            }
            var a = r.unlistedDescription;
            var o = r.isUnlisted;
            if (p(r.properties)) {
              o = true;
              if (!a) {
                var i = l.default.getResourceKey(r.code);
                a = c.translator.translate(i)
              }
              var s = r.properties.map(function(e) {
                return e.value
              });
              s.join(" ");
              a += " - " + s
            }
            var u = typeof r.number === "number" ? r.number : n + 1;
            return new e({
              number: u,
              code: r.code,
              isPrerequisite: r.isPrerequisite,
              isUnlisted: o,
              unlistedDescription: a,
              categories: r.categories,
              uniqueId: r.uniqueId,
              type: r.type
            })
          }
        }]);
        return e
      }();
      t.default = v
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(134);
      var a = o(n);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function s(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function u(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var l = function(e) {
        u(t, e);

        function t(e) {
          var r = e.hazard,
            n = e.groupCode,
            a = e.translatedDescription;
          i(this, t);
          if (!n) {
            throw new Error("FlattenedAvailableHazard requires a groupCode")
          }
          if (!a) {
            throw new Error("FlattenedAvailableHazard requires a translatedDescription")
          }
          var o = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
          o.groupCode = n;
          o.translatedDescription = a;
          return o
        }
        return t
      }(a.default);
      t.default = l
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(136);
      var a = o(n);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function s(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function u(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var l = function(e) {
        u(t, e);

        function t(e) {
          var r = e.control,
            n = e.translatedDescription;
          i(this, t);
          if (!n) {
            throw new Error("FlattenedAvailableControlMeasure requires a translatedDescription")
          }
          var a = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
          a.translatedDescription = n;
          return a
        }
        return t
      }(a.default);
      t.default = l
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });

      function r(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var n = function e(t) {
        var n = t.type,
          a = t.taskId,
          o = t.hazardId,
          i = t.controlId;
        r(this, e);
        this.type = n || "";
        this.taskId = a || "";
        this.hazardId = o || "";
        this.controlId = i || ""
      };
      t.default = n
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = {
        componentNames: [],
        register: function e(t, r) {
          this[t] = r;
          this.componentNames.push(t)
        },
        unregisterComponents: function e() {
          var t = this;
          this.componentNames.forEach(function(e) {
            delete t[e]
          });
          this.componentNames = []
        }
      };
      t.default = r
    }, function(e, t, r) {
      var n = r(159),
        a = r(8);
      var o = n(a);
      e.exports = o
    }, function(e, t, r) {
      var n = r(10),
        a = r(96),
        o = r(77);

      function i(e) {
        return function(t, r, i) {
          var s = Object(t);
          if (!a(t)) {
            var u = n(r, 3);
            t = o(t);
            r = function(e) {
              return u(s[e], e, s)
            }
          }
          var l = e(t, r, i);
          return l > -1 ? s[u ? t[l] : l] : undefined
        }
      }
      e.exports = i
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = v(a);
      var i = r(2);
      var s = r(161);
      var u = v(s);
      var l = r(167);
      var c = v(l);
      var d = r(168);
      var f = v(d);
      var p = r(132);

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t]
          }
          return r
        } else {
          return Array.from(e)
        }
      }

      function y(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function m(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function g(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var _ = function(e) {
        g(t, e);

        function t(e) {
          y(this, t);
          var r = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.state = {
            showRiskModal: false,
            activeTaskId: "",
            activeHazardId: "",
            activeHazardDescription: "",
            activeTypeOfRisk: ""
          };
          r._onShowRiskModal = r._onShowRiskModal.bind(r);
          r._onHideRiskModal = r._onHideRiskModal.bind(r);
          r._onSetRiskRating = r._onSetRiskRating.bind(r);
          return r
        }
        n(t, [{
          key: "_onHideRiskModal",
          value: function e() {
            this.setState({
              showRiskModal: false
            })
          }
        }, {
          key: "_onShowRiskModal",
          value: function e(t, r, n) {
            this.setState({
              showRiskModal: true,
              activeTaskId: t,
              activeHazardId: n,
              activeHazardDescription: i.searchHazardsAndControls.getHazardDescription(this.props.tasks, t, n),
              activeTypeOfRisk: r
            })
          }
        }, {
          key: "_onSetRiskRating",
          value: function e(t) {
            var r = this.state,
              n = r.activeTaskId,
              a = r.activeHazardId,
              o = r.activeTypeOfRisk;
            var s = this.props.tasks;
            var u = (0, i.getIndexes)(s, n, a),
              l = u.taskIndex,
              c = u.hazardIndex;
            var d = [].concat(h(s));
            var f = new p.Risk(t);
            var v = o + "Risk";
            d[l].hazards[c][v] = f;
            this.props.onSave(d);
            this._onHideRiskModal()
          }
        }, {
          key: "render",
          value: function e() {
            var t = this;
            var r = this.props,
              n = r.tasks,
              a = r.showRisk,
              s = r.editMode,
              l = r.category;
            var d = i.externalComponents.RiskMatrix;
            if (!n.length) {
              return null
            }
            var p = n.map(function(e) {
              return o.default.createElement(u.default, {
                key: e.identifier,
                task: e,
                showRisk: a,
                editMode: s,
                onShowRiskModal: t._onShowRiskModal,
                category: l
              })
            });
            var v = this.state.activeHazardDescription ? {
              isUnlisted: true,
              unlistedDescription: this.state.activeHazardDescription
            } : null;
            return o.default.createElement("div", {
              className: "risk-assessment-tasks"
            }, o.default.createElement(c.default, {
              showRisk: a
            }), p, this.props.showRisk ? o.default.createElement(f.default, {
              show: this.state.showRiskModal,
              onHide: this._onHideRiskModal,
              onSetRiskRating: this._onSetRiskRating,
              riskMatrix: d,
              hazard: v
            }) : null)
          }
        }]);
        return t
      }(o.default.Component);
      _.propTypes = {
        tasks: a.PropTypes.arrayOf(a.PropTypes.instanceOf(p.TaskStep)).isRequired,
        onSave: a.PropTypes.func.isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        editMode: a.PropTypes.bool.isRequired,
        category: a.PropTypes.string.isRequired
      };
      _.defaultProps = {
        tasks: []
      };
      t.default = _
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = r(1);
      var o = d(a);
      var i = r(162);
      var s = d(i);
      var u = r(165);
      var l = d(u);
      var c = r(132);

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var f = function e(t) {
        var r = t.task,
          a = t.showRisk,
          i = t.editMode,
          u = t.onShowRiskModal,
          c = t.category;
        var d = r.hazards.map(function(e) {
          var t = {
            hazard: e,
            taskIdentifier: r.identifier,
            showRisk: a,
            editMode: i,
            onShowRiskModal: u
          };
          return o.default.createElement("div", {
            key: e.uniqueId,
            className: "task-step-hazard-row"
          }, o.default.createElement(s.default, n({}, t, {
            category: c
          })), o.default.createElement(l.default, t))
        });
        return o.default.createElement("div", {
          className: "task-step"
        }, o.default.createElement("div", {
          className: "task-step-header"
        }, o.default.createElement("strong", {
          className: "step-header-number"
        }, r.number, "."), o.default.createElement("span", {
          className: "step-header-description"
        }, r.description)), o.default.createElement("div", {
          className: "task-step-body"
        }, d))
      };
      f.propTypes = {
        task: a.PropTypes.instanceOf(c.TaskStep).isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        editMode: a.PropTypes.bool.isRequired,
        onShowRiskModal: a.PropTypes.func.isRequired,
        category: a.PropTypes.string.isRequired
      };
      t.default = f
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = f(a);
      var i = r(163);
      var s = f(i);
      var u = r(2);
      var l = r(132);
      var c = r(164);
      var d = f(c);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function v(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function h(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var y = function(e) {
        h(t, e);

        function t(e) {
          p(this, t);
          var r = v(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r._onShowRiskModal = r._onShowRiskModal.bind(r);
          return r
        }
        n(t, [{
          key: "_onShowRiskModal",
          value: function e() {
            this.props.onShowRiskModal(this.props.taskIdentifier, "initial", this.props.hazard.uniqueId)
          }
        }, {
          key: "render",
          value: function e() {
            var t = u.externalComponents.RiskValue;
            var r = this.props,
              n = r.hazard,
              a = r.category;
            var i = n.isUnlisted ? n.unlistedDescription : u.translator.translate(l.AvailableHazard.getResourceKey(n.code));
            var c = n.type ? o.default.createElement("span", {
              className: "type-text"
            }, "(", u.translator.translate("label_type_extension"), " ", u.translator.translate("HazardType_" + n.type), ")") : null;
            var f = (0, s.default)("item-text", {
              "is-unlisted": n.isUnlisted
            });
            return o.default.createElement("div", {
              className: "task-step-hazard-wrapper"
            }, o.default.createElement(d.default, {
              code: n.hazardGroupCode,
              category: a
            }), o.default.createElement("div", {
              className: "task-step-hazard"
            }, o.default.createElement("span", {
              className: f
            }, i, c)), o.default.createElement(t, {
              typeOfRisk: "initial",
              risk: n.initialRisk,
              editMode: this.props.editMode,
              visible: this.props.showRisk,
              onRiskClicked: this._onShowRiskModal
            }))
          }
        }]);
        return t
      }(o.default.PureComponent);
      y.propTypes = {
        taskIdentifier: a.PropTypes.string.isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        hazard: a.PropTypes.instanceOf(l.IdentifiedHazard).isRequired,
        editMode: a.PropTypes.bool.isRequired,
        onShowRiskModal: a.PropTypes.func.isRequired,
        category: a.PropTypes.string.isRequired
      };
      t.default = y
    }, function(e, t, r) {
      var n, a;
      /*!
      		  Copyright (c) 2016 Jed Watson.
      		  Licensed under the MIT License (MIT), see
      		  http://jedwatson.github.io/classnames
      		*/
      (function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function o() {
          var e = [];
          for (var t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (!n) continue;
            var a = typeof n;
            if (a === "string" || a === "number") {
              e.push(n)
            } else if (Array.isArray(n)) {
              e.push(o.apply(null, n))
            } else if (a === "object") {
              for (var i in n) {
                if (r.call(n, i) && n[i]) {
                  e.push(i)
                }
              }
            }
          }
          return e.join(" ")
        }
        if (typeof e !== "undefined" && e.exports) {
          e.exports = o
        } else if (true) {
          !(n = [], a = function() {
            return o
          }.apply(t, n), a !== undefined && (e.exports = a))
        } else {
          window.classNames = o
        }
      })()
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = s(n);
      var o = r(132);
      var i = r(2);

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var u = function e(t) {
        var r = o.HazardGroup.getResourceKey(t) + "_abbr";
        var n = i.translator.translate(r);
        return a.default.createElement("strong", null, n)
      };
      var l = function e(t) {
        var r = t.category,
          n = t.code,
          s = t.className;
        if (!n) return null;
        if (n.toLowerCase() === "other") return null;
        var l = i.translator.translate(o.HazardGroup.getResourceKey(n));
        if (r.toLowerCase() === "orahazards") {
          var c = "text-icon-" + r.toLowerCase();
          return a.default.createElement("span", {
            className: s + " hazardgroup-icon " + c,
            title: l
          }, u(n))
        } else if (r.toLowerCase() === "permithazards") {
          var d = "icon-" + r.toLowerCase() + "-" + n;
          return a.default.createElement("span", {
            className: s + " hazardgroup-icon " + d,
            title: l
          })
        }
        return null
      };
      l.propTypes = {
        category: n.PropTypes.string.isRequired,
        code: n.PropTypes.string.isRequired,
        className: n.PropTypes.string
      };
      l.defaultProps = {
        className: ""
      };
      t.default = l
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = c(a);
      var i = r(166);
      var s = c(i);
      var u = r(132);
      var l = r(2);

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function d(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function f(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function p(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var v = function(e) {
        p(t, e);

        function t(e) {
          d(this, t);
          var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r._onShowRiskModal = r._onShowRiskModal.bind(r);
          return r
        }
        n(t, [{
          key: "_onShowRiskModal",
          value: function e() {
            this.props.onShowRiskModal(this.props.taskIdentifier, "residual", this.props.hazard.uniqueId)
          }
        }, {
          key: "render",
          value: function e() {
            var t = this.props.hazard;
            var r = l.externalComponents.RiskValue;
            if (!t.controlMeasures || !t.controlMeasures.length) {
              return o.default.createElement("div", {
                className: "task-step-controls-wrapper"
              }, o.default.createElement("div", {
                className: "task-step-controls"
              }, o.default.createElement("div", {
                className: "new-item-button-wrapper"
              })))
            }
            var n = t.controlMeasures.map(function(e) {
              return o.default.createElement(s.default, {
                key: e.uniqueId,
                controlMeasure: e
              })
            });
            return o.default.createElement("div", {
              className: "task-step-controls-wrapper"
            }, o.default.createElement("div", {
              className: "task-step-controls"
            }, o.default.createElement("div", {
              className: "task-step-controls-inner"
            }, n)), o.default.createElement(r, {
              typeOfRisk: "residual",
              risk: t.residualRisk,
              editMode: this.props.editMode,
              visible: this.props.showRisk,
              onRiskClicked: this._onShowRiskModal
            }))
          }
        }]);
        return t
      }(o.default.PureComponent);
      v.propTypes = {
        taskIdentifier: a.PropTypes.string.isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        hazard: a.PropTypes.instanceOf(u.IdentifiedHazard).isRequired,
        editMode: a.PropTypes.bool.isRequired,
        onShowRiskModal: a.PropTypes.func.isRequired
      };
      t.default = v
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = l(n);
      var o = r(163);
      var i = l(o);
      var s = r(132);
      var u = r(2);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = function e(t) {
        var r = t.controlMeasure;
        var n = r;
        var o = n.isUnlisted ? n.unlistedDescription : u.translator.translate(s.AvailableControlMeasure.getResourceKey(n.code));
        var l = n.type ? a.default.createElement("span", {
          className: "type-text"
        }, "(", u.translator.translate("label_type_extension"), " ", u.translator.translate("ControlMeasureType_" + n.type), ")") : null;
        var c = n.isPrerequisite ? "label_prerequisite" : "label_supplementary";
        var d = (0, i.default)("item-text", {
          "is-unlisted": n.isUnlisted
        });
        return a.default.createElement("div", {
          className: "task-step-control"
        }, a.default.createElement("span", {
          className: d
        }, o, l), a.default.createElement("label", {
          className: "control-measure-prerequisite",
          title: u.translator.translate(c)
        }, u.translator.translate(c + "_abbreviated")))
      };
      c.propTypes = {
        controlMeasure: n.PropTypes.instanceOf(s.IdentifiedControlMeasure).isRequired
      };
      t.default = c
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = i(n);
      var o = r(2);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = function e(t) {
        var r = t.showRisk;
        var n = null;
        var i = null;
        if (r) {
          n = a.default.createElement("span", {
            className: "risk-box risk-box-for-task-steps"
          }, o.translator.translate("label_rat_table_header_initial_risk"));
          i = a.default.createElement("span", {
            className: "risk-box risk-box-for-task-steps"
          }, o.translator.translate("label_rat_table_header_residual_risk"))
        }
        return a.default.createElement("div", {
          className: "tasks-header"
        }, a.default.createElement("div", {
          className: "tasks-header-inner"
        }, a.default.createElement("strong", {
          className: "tasks-header-inner-label"
        }, o.translator.translate("label_rat_table_header_hazards")), n), a.default.createElement("div", {
          className: "tasks-header-inner"
        }, a.default.createElement("strong", {
          className: "tasks-header-inner-label"
        }, o.translator.translate("label_rat_table_header_controls")), i))
      };
      s.propTypes = {
        showRisk: n.PropTypes.bool
      };
      s.defaultProps = {
        showRisk: false
      };
      t.default = s
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = u(a);
      var i = r(169);
      var s = r(2);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function c(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function d(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var f = function(e) {
        d(t, e);

        function t(e) {
          l(this, t);
          var r = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r._onRiskRatingClicked = r._onRiskRatingClicked.bind(r);
          return r
        }
        n(t, [{
          key: "_onRiskRatingClicked",
          value: function e(t, r, n, a) {
            this.props.onSetRiskRating({
              severity: t,
              likelihood: r,
              rating: n,
              area: a
            })
          }
        }, {
          key: "render",
          value: function e() {
            var t = this.props.riskMatrix;
            return o.default.createElement(i.Modal, {
              show: this.props.show,
              onHide: this.props.onHide,
              className: "riskMatrixModal " + this.props.className,
              keyboard: this.props.keyboard
            }, o.default.createElement(i.Modal.Header, null, o.default.createElement(i.Modal.Title, null, s.translator.translate("Label_PopupTitleRiskRating"))), o.default.createElement(i.Modal.Body, null, o.default.createElement(t, {
              hazard: this.props.hazard,
              onRiskRatingClicked: this._onRiskRatingClicked
            })))
          }
        }]);
        return t
      }(o.default.Component);
      f.propTypes = {
        show: a.PropTypes.bool.isRequired,
        onHide: a.PropTypes.func.isRequired,
        onSetRiskRating: a.PropTypes.func.isRequired,
        riskMatrix: a.PropTypes.func.isRequired,
        className: a.PropTypes.string,
        keyboard: a.PropTypes.bool,
        hazard: a.PropTypes.shape({
          isUnlisted: a.PropTypes.bool.isRequired,
          unlistedDescription: a.PropTypes.string.isRequired
        })
      };
      f.defaultProps = {
        className: "",
        keyboard: true,
        hazard: null
      };
      t.default = f
    }, function(e, r) {
      e.exports = t
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = P(a);
      var i = r(171);
      var s = r(254);
      var u = P(s);
      var l = r(169);
      var c = r(275);
      var d = r(281);
      var f = P(d);
      var p = r(2);
      var v = r(168);
      var h = P(v);
      var y = r(167);
      var m = P(y);
      var g = r(282);
      var _ = P(g);
      var b = r(297);
      var k = P(b);
      var w = r(298);
      var T = P(w);
      var C = r(318);
      var O = P(C);
      var E = r(284);
      var R = r(132);

      function P(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function S(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function D(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function M(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var I = (0, c.createStore)(O.default);
      var x = function(e) {
        M(t, e);

        function t(e) {
          S(this, t);
          var r = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.state = {
            tasks: I.getState().tasks,
            activeItem: I.getState().activeItem,
            dirty: I.getState().dirty,
            groupedHazards: [],
            hazardTypes: [],
            controlTypes: [],
            activeTypeOfRisk: "",
            showNewHazard: false,
            showNewControlMeasures: false,
            showRiskModal: false,
            showConfirmModal: false
          };
          r._onNewTask = r._onNewTask.bind(r);
          r._onNewHazard = r._onNewHazard.bind(r);
          r._onNewControlMeasure = r._onNewControlMeasure.bind(r);
          r._onSetRiskRating = r._onSetRiskRating.bind(r);
          r._getGroupedHazards = r._getGroupedHazards.bind(r);
          r._getHazardTypes = r._getHazardTypes.bind(r);
          r._getControlTypes = r._getControlTypes.bind(r);
          r._onSetActiveTask = r._onSetActiveTask.bind(r);
          r._scrollToActiveItem = r._scrollToActiveItem.bind(r);
          r._onShowRiskModal = r._onShowRiskModal.bind(r);
          r._onHideRiskModal = r._onHideRiskModal.bind(r);
          r._onHideModal = r._onHideModal.bind(r);
          r._onHideConfirmModal = r._onHideConfirmModal.bind(r);
          r._onHideNewWizard = r._onHideNewWizard.bind(r);
          r._onSave = r._onSave.bind(r);
          r._onSaveAndClose = r._onSaveAndClose.bind(r);
          r._unmount = r._unmount.bind(r);
          return r
        }
        n(t, [{
          key: "componentWillReceiveProps",
          value: function e(t) {
            var r = this;
            if (t.show && !this.props.show) {
              this.unsubscribe = I.subscribe(function() {
                var e = I.getState(),
                  t = e.tasks,
                  n = e.activeItem,
                  a = e.dirty;
                r.setState({
                  tasks: t,
                  activeItem: n,
                  dirty: a
                })
              });
              this._getGroupedHazards();
              this._getHazardTypes();
              this._getControlTypes();
              this._initScroller();
              I.dispatch((0, E.setTasks)(t.tasks));
              if (!t.tasks.length) {
                I.dispatch((0, E.addTask)(t.tasks))
              }
            }
            if (t.show && this.props.show) {
              I.dispatch((0, E.setTasks)(t.tasks))
            }
            if (!t.show && this.props.show) {
              this.setState({
                showNewHazard: false,
                showNewControlMeasures: false
              });
              I.dispatch((0, E.resetActiveItem)());
              this._unmount()
            }
          }
        }, {
          key: "componentDidUpdate",
          value: function e(t, r) {
            if (!(0, f.default)(r.activeItem, this.state.activeItem)) {
              this._scrollToActiveItem(r.activeItem, this.state.activeItem)
            }
          }
        }, {
          key: "_unmount",
          value: function e() {
            this.unsubscribe();
            this.scroller = null
          }
        }, {
          key: "_initScroller",
          value: function e() {
            var t = this;
            clearTimeout(this._initScrollerTimeout);
            this._initScrollerTimeout = setTimeout(function() {
              if (!t.scroller) {
                t.scroller = new p.Scroller(t._scrollingContainer, 300)
              }
            }, 0)
          }
        }, {
          key: "_scrollToActiveItem",
          value: function e() {
            if (!this.scroller) return;
            var t = this.state.activeItem;
            var r = t.type;
            if (r === "TASK") {
              this.scroller.scrollTo(t.taskId)
            } else if (r === "HAZARD") {
              this.scroller.scrollTo(t.hazardId)
            } else if (r === "CONTROL") {
              this.scroller.scrollTo(t.controlId)
            }
          }
        }, {
          key: "_getGroupedHazards",
          value: function e() {
            var t = this;
            this.props.getGroupedHazards().then(function(e) {
              var r = e.data.map(function(t) {
                return new R.HazardGroup.FromJSON(t, e.category)
              });
              t.setState({
                groupedHazards: r
              });
              p.searchHazardsAndControls.flattenAndStore(r)
            }).catch(this.props.onError)
          }
        }, {
          key: "_getHazardTypes",
          value: function e() {
            var t = this;
            this.props.getHazardTypes().then(function(e) {
              t.setState({
                hazardTypes: e
              })
            }).catch(this.props.onError)
          }
        }, {
          key: "_getControlTypes",
          value: function e() {
            var t = this;
            this.props.getControlTypes().then(function(e) {
              t.setState({
                controlTypes: e
              })
            }).catch(this.props.onError)
          }
        }, {
          key: "_onNewTask",
          value: function e() {
            I.dispatch((0, E.addTask)(this.state.tasks));
            this.setState({
              showNewHazard: false,
              showNewControlMeasures: false
            })
          }
        }, {
          key: "_onSetActiveTask",
          value: function e(t) {
            I.dispatch((0, E.setActiveItem)({
              TYPE: "TASK",
              taskId: t
            }));
            this.setState({
              showNewHazard: false,
              showNewControlMeasures: false
            })
          }
        }, {
          key: "_onNewHazard",
          value: function e(t) {
            I.dispatch((0, E.setActiveItem)({
              type: "TASK",
              taskId: t
            }));
            this.setState({
              showNewControlMeasures: false,
              showNewHazard: true
            })
          }
        }, {
          key: "_onNewControlMeasure",
          value: function e(t, r) {
            I.dispatch((0, E.updateActiveItem)({
              type: "HAZARD",
              taskId: t,
              hazardId: r
            }));
            this.setState({
              showNewHazard: false,
              showNewControlMeasures: true
            })
          }
        }, {
          key: "_onSetRiskRating",
          value: function e(t) {
            var r = this.state,
              n = r.activeItem,
              a = r.activeTypeOfRisk,
              o = r.tasks,
              i = r.showNewControlMeasures,
              s = r.showNewHazard;
            var u = n.taskId,
              l = n.hazardId;
            I.dispatch((0, E.updateHazardRisk)(o, u, l, a, t));
            this.setState({
              showRiskModal: false
            }, function() {
              if (!(i || s)) {
                I.dispatch((0, E.resetActiveItem)())
              }
            })
          }
        }, {
          key: "_onHideNewWizard",
          value: function e() {
            this.setState({
              showNewHazard: false,
              showNewControlMeasures: false
            });
            I.dispatch((0, E.resetActiveItem)())
          }
        }, {
          key: "_onHideModal",
          value: function e() {
            if (this.state.dirty) {
              this.setState({
                showConfirmModal: true
              })
            } else {
              this.props.onHide()
            }
          }
        }, {
          key: "_onShowRiskModal",
          value: function e(t, r, n) {
            this.setState({
              showRiskModal: true,
              activeTypeOfRisk: r
            });
            I.dispatch((0, E.updateActiveItem)({
              type: "HAZARD",
              taskId: t,
              hazardId: n
            }))
          }
        }, {
          key: "_onHideRiskModal",
          value: function e() {
            this.setState({
              showRiskModal: false
            })
          }
        }, {
          key: "_onHideConfirmModal",
          value: function e() {
            this.setState({
              showConfirmModal: false
            })
          }
        }, {
          key: "_onSave",
          value: function e() {
            I.dispatch((0, E.setClean)());
            this.props.onSave(this.state.tasks)
          }
        }, {
          key: "_onSaveAndClose",
          value: function e() {
            this._onSave();
            this.props.onHide()
          }
        }, {
          key: "_renderTasks",
          value: function e() {
            var t = this;
            var r = this.state.tasks.map(function(e, r) {
              return o.default.createElement(_.default, {
                key: e.identifier,
                task: e,
                store: I,
                activeItem: t.state.activeItem,
                isAllowed: t.props.isAllowed,
                showRisk: t.props.showRisk,
                activeHazardId: t.state.activeItem.hazardId,
                onNewHazard: t._onNewHazard,
                onSetActiveTask: t._onSetActiveTask,
                onNewControlMeasure: t._onNewControlMeasure,
                onShowRiskModal: t._onShowRiskModal,
                onHideRiskModal: t._onHideRiskModal,
                index: r,
                maxIndex: t.state.tasks.length - 1,
                category: t.props.category
              })
            });
            return o.default.createElement("div", {
              className: "risk-assessment-tasks"
            }, o.default.createElement(m.default, {
              showRisk: this.props.showRisk
            }), r)
          }
        }, {
          key: "render",
          value: function e() {
            var t = this;
            var r = p.externalComponents.RiskMatrix;
            var n = this.state,
              a = n.showNewControlMeasures,
              i = n.showNewHazard,
              s = n.activeItem;
            var u = null;
            if (s.hazardId) {
              var c = p.searchHazardsAndControls.getHazardDescription(this.state.tasks, s.taskId, s.hazardId);
              u = c ? {
                isUnlisted: true,
                unlistedDescription: c
              } : null
            }
            return o.default.createElement(l.Modal, {
              className: "risk-assessment-tasks-modal modal-full-height modal-full-width",
              show: this.props.show,
              onHide: this._onHideModal
            }, o.default.createElement(l.Modal.Header, null, o.default.createElement(l.Modal.Title, null, p.translator.translate("label_rat_modal_title"))), o.default.createElement(l.Modal.Body, {
              ref: function e(r) {
                t.modalBodyRef = r
              }
            }, o.default.createElement("div", {
              className: "scrolling-container",
              ref: function e(r) {
                t._scrollingContainer = r
              }
            }, this._renderTasks())), o.default.createElement(k.default, {
              show: a || i,
              onClick: this._onHideNewWizard
            }), o.default.createElement(T.default, {
              store: I,
              activeItem: this.state.activeItem,
              showNewHazard: i,
              showNewControlMeasures: a,
              isAllowed: this.props.isAllowed,
              groupedHazards: this.state.groupedHazards,
              hazardTypes: this.state.hazardTypes,
              controlTypes: this.state.controlTypes,
              tasks: this.state.tasks,
              onHideNewWizard: this._onHideNewWizard,
              onHideModal: this._onHideModal,
              onNewTaskStep: this._onNewTask,
              onNewHazard: this._onNewHazard,
              onSave: this._onSave,
              onSaveAndClose: this._onSaveAndClose,
              onFooterTransitionEnd: this._scrollToActiveItem,
              dirty: this.state.dirty,
              onError: this.props.onError
            }), this.props.showRisk ? o.default.createElement(h.default, {
              className: "modal-stacked",
              show: this.state.showRiskModal,
              onHide: this._onHideRiskModal,
              onSetRiskRating: this._onSetRiskRating,
              riskMatrix: r,
              hazard: u
            }) : null, o.default.createElement(l.ConfirmModal, {
              className: "modal-stacked",
              show: this.state.showConfirmModal,
              onConfirm: this._onSaveAndClose,
              onDeny: this.props.onHide,
              onHide: this._onHideConfirmModal,
              title: p.translator.translate("label_confirm_modal_title"),
              closeButton: true
            }, p.translator.translate("label_confirm_modal_body")))
          }
        }]);
        return t
      }(o.default.Component);
      x.propTypes = {
        tasks: a.PropTypes.arrayOf(a.PropTypes.instanceOf(R.TaskStep)).isRequired,
        category: a.PropTypes.string.isRequired,
        onSave: a.PropTypes.func.isRequired,
        onError: o.default.PropTypes.func.isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        isAllowed: a.PropTypes.func.isRequired,
        getGroupedHazards: a.PropTypes.func.isRequired,
        getHazardTypes: a.PropTypes.func.isRequired,
        getControlTypes: a.PropTypes.func.isRequired,
        show: a.PropTypes.bool.isRequired,
        onHide: a.PropTypes.func.isRequired
      };
      t.default = (0, i.DragDropContext)(u.default)(x)
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(172);
      Object.defineProperty(t, "DragDropContext", {
        enumerable: true,
        get: function e() {
          return u(n).default
        }
      });
      var a = r(230);
      Object.defineProperty(t, "DragDropContextProvider", {
        enumerable: true,
        get: function e() {
          return u(a).default
        }
      });
      var o = r(231);
      Object.defineProperty(t, "DragLayer", {
        enumerable: true,
        get: function e() {
          return u(o).default
        }
      });
      var i = r(234);
      Object.defineProperty(t, "DragSource", {
        enumerable: true,
        get: function e() {
          return u(i).default
        }
      });
      var s = r(249);
      Object.defineProperty(t, "DropTarget", {
        enumerable: true,
        get: function e() {
          return u(s).default
        }
      });

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.unpackBackendForEs5Users = t.createChildContext = t.CHILD_CONTEXT_TYPES = undefined;
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var o = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e
      } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      t.default = C;
      var i = r(1);
      var s = m(i);
      var u = r(173);
      var l = m(u);
      var c = r(178);
      var d = r(189);
      var f = m(d);
      var p = r(228);
      var v = m(p);
      var h = r(229);
      var y = m(h);

      function m(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function g(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function _(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function b(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var k = t.CHILD_CONTEXT_TYPES = {
        dragDropManager: l.default.object.isRequired
      };
      var w = t.createChildContext = function e(t, r) {
        return {
          dragDropManager: new c.DragDropManager(t, r)
        }
      };
      var T = t.unpackBackendForEs5Users = function e(t) {
        var r = t;
        if ((typeof r === "undefined" ? "undefined" : o(r)) === "object" && typeof r.default === "function") {
          r = r.default
        }(0, f.default)(typeof r === "function", "Expected the backend to be a function or an ES6 module exporting a default function. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html");
        return r
      };

      function C(e) {
        y.default.apply(undefined, ["DragDropContext", "backend"].concat(Array.prototype.slice.call(arguments)));
        var t = T(e);
        var r = w(t);
        return function e(t) {
          var o, u;
          var l = t.displayName || t.name || "Component";
          var c = (u = o = function(e) {
            b(o, e);

            function o() {
              g(this, o);
              return _(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments))
            }
            a(o, [{
              key: "getDecoratedComponentInstance",
              value: function e() {
                (0, f.default)(this.child, "In order to access an instance of the decorated component it can " + "not be a stateless component.");
                return this.child
              }
            }, {
              key: "getManager",
              value: function e() {
                return r.dragDropManager
              }
            }, {
              key: "getChildContext",
              value: function e() {
                return r
              }
            }, {
              key: "render",
              value: function e() {
                var r = this;
                return s.default.createElement(t, n({}, this.props, {
                  ref: function e(t) {
                    return r.child = t
                  }
                }))
              }
            }]);
            return o
          }(i.Component), o.DecoratedComponent = t, o.displayName = "DragDropContext(" + l + ")", o.childContextTypes = k, u);
          return (0, v.default)(c, t)
        }
      }
    }, function(e, t, r) {
      if (false) {
        var n = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
        var a = function(e) {
          return typeof e === "object" && e !== null && e.$$typeof === n
        };
        var o = true;
        e.exports = require("./factoryWithTypeCheckers")(a, o)
      } else {
        e.exports = r(174)()
      }
    }, function(e, t, r) {
      "use strict";
      var n = r(175);
      var a = r(176);
      var o = r(177);
      e.exports = function() {
        function e(e, t, r, n, i, s) {
          if (s === o) {
            return
          }
          a(false, "Calling PropTypes validators directly is not supported by the `prop-types` package. " + "Use PropTypes.checkPropTypes() to call them. " + "Read more at http://fb.me/use-check-prop-types")
        }
        e.isRequired = e;

        function t() {
          return e
        }
        var r = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t
        };
        r.checkPropTypes = n;
        r.PropTypes = r;
        return r
      }
    }, function(e, t) {
      "use strict";

      function r(e) {
        return function() {
          return e
        }
      }
      var n = function e() {};
      n.thatReturns = r;
      n.thatReturnsFalse = r(false);
      n.thatReturnsTrue = r(true);
      n.thatReturnsNull = r(null);
      n.thatReturnsThis = function() {
        return this
      };
      n.thatReturnsArgument = function(e) {
        return e
      };
      e.exports = n
    }, function(e, t, r) {
      "use strict";
      var n = function e(t) {};
      if (false) {
        n = function e(t) {
          if (t === undefined) {
            throw new Error("invariant requires an error message argument")
          }
        }
      }

      function a(e, t, r, a, o, i, s, u) {
        n(t);
        if (!e) {
          var l;
          if (t === undefined) {
            l = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.")
          } else {
            var c = [r, a, o, i, s, u];
            var d = 0;
            l = new Error(t.replace(/%s/g, function() {
              return c[d++]
            }));
            l.name = "Invariant Violation"
          }
          l.framesToPop = 1;
          throw l
        }
      }
      e.exports = a
    }, function(e, t) {
      "use strict";
      var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      e.exports = r
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(179);
      Object.defineProperty(t, "DragDropManager", {
        enumerable: true,
        get: function e() {
          return s(n).default
        }
      });
      var a = r(225);
      Object.defineProperty(t, "DragSource", {
        enumerable: true,
        get: function e() {
          return s(a).default
        }
      });
      var o = r(226);
      Object.defineProperty(t, "DropTarget", {
        enumerable: true,
        get: function e() {
          return s(o).default
        }
      });
      var i = r(227);
      Object.defineProperty(t, "createTestBackend", {
        enumerable: true,
        get: function e() {
          return s(i).default
        }
      });

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(180);
      var o = p(a);
      var i = r(186);
      var s = p(i);
      var u = r(188);
      var l = f(u);
      var c = r(220);
      var d = p(c);

      function f(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function v(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var h = function() {
        function e(t) {
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          v(this, e);
          var n = (0, o.default)(s.default);
          this.context = r;
          this.store = n;
          this.monitor = new d.default(n);
          this.registry = this.monitor.registry;
          this.backend = t(this);
          n.subscribe(this.handleRefCountChange.bind(this))
        }
        n(e, [{
          key: "handleRefCountChange",
          value: function e() {
            var t = this.store.getState().refCount > 0;
            if (t && !this.isSetUp) {
              this.backend.setup();
              this.isSetUp = true
            } else if (!t && this.isSetUp) {
              this.backend.teardown();
              this.isSetUp = false
            }
          }
        }, {
          key: "getContext",
          value: function e() {
            return this.context
          }
        }, {
          key: "getMonitor",
          value: function e() {
            return this.monitor
          }
        }, {
          key: "getBackend",
          value: function e() {
            return this.backend
          }
        }, {
          key: "getRegistry",
          value: function e() {
            return this.registry
          }
        }, {
          key: "getActions",
          value: function e() {
            var t = this;
            var r = this.store.dispatch;

            function n(e) {
              return function() {
                for (var n = arguments.length, a = Array(n), o = 0; o < n; o++) {
                  a[o] = arguments[o]
                }
                var i = e.apply(t, a);
                if (typeof i !== "undefined") {
                  r(i)
                }
              }
            }
            return Object.keys(l).filter(function(e) {
              return typeof l[e] === "function"
            }).reduce(function(e, t) {
              var r = l[t];
              e[t] = n(r);
              return e
            }, {})
          }
        }]);
        return e
      }();
      t.default = h
    }, function(e, t, r) {
      "use strict";
      t.__esModule = true;
      t.ActionTypes = undefined;
      t["default"] = l;
      var n = r(181);
      var a = s(n);
      var o = r(183);
      var i = s(o);

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var u = t.ActionTypes = {
        INIT: "@@redux/INIT"
      };

      function l(e, t, r) {
        var n;
        if (typeof t === "function" && typeof r === "undefined") {
          r = t;
          t = undefined
        }
        if (typeof r !== "undefined") {
          if (typeof r !== "function") {
            throw new Error("Expected the enhancer to be a function.")
          }
          return r(l)(e, t)
        }
        if (typeof e !== "function") {
          throw new Error("Expected the reducer to be a function.")
        }
        var o = e;
        var s = t;
        var c = [];
        var d = c;
        var f = false;

        function p() {
          if (d === c) {
            d = c.slice()
          }
        }

        function v() {
          return s
        }

        function h(e) {
          if (typeof e !== "function") {
            throw new Error("Expected listener to be a function.")
          }
          var t = true;
          p();
          d.push(e);
          return function r() {
            if (!t) {
              return
            }
            t = false;
            p();
            var n = d.indexOf(e);
            d.splice(n, 1)
          }
        }

        function y(e) {
          if (!(0, a["default"])(e)) {
            throw new Error("Actions must be plain objects. " + "Use custom middleware for async actions.")
          }
          if (typeof e.type === "undefined") {
            throw new Error('Actions may not have an undefined "type" property. ' + "Have you misspelled a constant?")
          }
          if (f) {
            throw new Error("Reducers may not dispatch actions.")
          }
          try {
            f = true;
            s = o(s, e)
          } finally {
            f = false
          }
          var t = c = d;
          for (var r = 0; r < t.length; r++) {
            t[r]()
          }
          return e
        }

        function m(e) {
          if (typeof e !== "function") {
            throw new Error("Expected the nextReducer to be a function.")
          }
          o = e;
          y({
            type: u.INIT
          })
        }

        function g() {
          var e;
          var t = h;
          return e = {
            subscribe: function e(r) {
              if (typeof r !== "object") {
                throw new TypeError("Expected the observer to be an object.")
              }

              function n() {
                if (r.next) {
                  r.next(v())
                }
              }
              n();
              var a = t(n);
              return {
                unsubscribe: a
              }
            }
          }, e[i["default"]] = function() {
            return this
          }, e
        }
        y({
          type: u.INIT
        });
        return n = {
          dispatch: y,
          subscribe: h,
          getState: v,
          replaceReducer: m
        }, n[i["default"]] = g, n
      }
    }, function(e, t, r) {
      var n = r(31),
        a = r(182),
        o = r(82);
      var i = "[object Object]";
      var s = Function.prototype,
        u = Object.prototype;
      var l = s.toString;
      var c = u.hasOwnProperty;
      var d = l.call(Object);

      function f(e) {
        if (!o(e) || n(e) != i) {
          return false
        }
        var t = a(e);
        if (t === null) {
          return true
        }
        var r = c.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && l.call(r) == d
      }
      e.exports = f
    }, function(e, t, r) {
      var n = r(95);
      var a = n(Object.getPrototypeOf, Object);
      e.exports = a
    }, function(e, t, r) {
      e.exports = r(184)
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(185);
      var a = o(n);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var i;
      if (typeof self !== "undefined") {
        i = self
      } else if (typeof window !== "undefined") {
        i = window
      } else if (true) {
        i = {}
      } else if (typeof e !== "undefined") {
        i = e
      } else {
        i = Function("return this")()
      }
      var s = (0, a["default"])(i);
      t["default"] = s
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t["default"] = r;

      function r(e) {
        var t;
        var r = e.Symbol;
        if (typeof r === "function") {
          if (r.observable) {
            t = r.observable
          } else {
            t = r("observable");
            r.observable = t
          }
        } else {
          t = "@@observable"
        }
        return t
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = v;
      var n = r(187);
      var a = p(n);
      var o = r(191);
      var i = p(o);
      var s = r(209);
      var u = p(s);
      var l = r(210);
      var c = p(l);
      var d = r(219);
      var f = p(d);

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function v() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments[1];
        return {
          dirtyHandlerIds: (0, c.default)(e.dirtyHandlerIds, t, e.dragOperation),
          dragOffset: (0, a.default)(e.dragOffset, t),
          refCount: (0, u.default)(e.refCount, t),
          dragOperation: (0, i.default)(e.dragOperation, t),
          stateId: (0, f.default)(e.stateId)
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      t.default = s;
      t.getSourceClientOffset = u;
      t.getDifferenceFromInitialOffset = l;
      var a = r(188);
      var o = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null
      };

      function i(e, t) {
        if (e === t) {
          return true
        }
        return e && t && e.x === t.x && e.y === t.y
      }

      function s() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o;
        var t = arguments[1];
        switch (t.type) {
          case a.BEGIN_DRAG:
            return {
              initialSourceClientOffset: t.sourceClientOffset,
              initialClientOffset: t.clientOffset,
              clientOffset: t.clientOffset
            };
          case a.HOVER:
            if (i(e.clientOffset, t.clientOffset)) {
              return e
            }
            return n({}, e, {
              clientOffset: t.clientOffset
            });
          case a.END_DRAG:
          case a.DROP:
            return o;
          default:
            return e
        }
      }

      function u(e) {
        var t = e.clientOffset,
          r = e.initialClientOffset,
          n = e.initialSourceClientOffset;
        if (!t || !r || !n) {
          return null
        }
        return {
          x: t.x + n.x - r.x,
          y: t.y + n.y - r.y
        }
      }

      function l(e) {
        var t = e.clientOffset,
          r = e.initialClientOffset;
        if (!t || !r) {
          return null
        }
        return {
          x: t.x - r.x,
          y: t.y - r.y
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.END_DRAG = t.DROP = t.HOVER = t.PUBLISH_DRAG_SOURCE = t.BEGIN_DRAG = undefined;
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      t.beginDrag = g;
      t.publishDragSource = _;
      t.hover = b;
      t.drop = k;
      t.endDrag = w;
      var a = r(189);
      var o = f(a);
      var i = r(73);
      var s = f(i);
      var u = r(37);
      var l = f(u);
      var c = r(190);
      var d = f(c);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var p = t.BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
      var v = t.PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
      var h = t.HOVER = "dnd-core/HOVER";
      var y = t.DROP = "dnd-core/DROP";
      var m = t.END_DRAG = "dnd-core/END_DRAG";

      function g(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          publishSource: true,
          clientOffset: null
        };
        var r = t.publishSource,
          n = t.clientOffset,
          a = t.getSourceClientOffset;
        (0, o.default)((0, s.default)(e), "Expected sourceIds to be an array.");
        var i = this.getMonitor();
        var u = this.getRegistry();
        (0, o.default)(!i.isDragging(), "Cannot call beginDrag while dragging.");
        for (var c = 0; c < e.length; c++) {
          (0, o.default)(u.getSource(e[c]), "Expected sourceIds to be registered.")
        }
        var d = null;
        for (var f = e.length - 1; f >= 0; f--) {
          if (i.canDragSource(e[f])) {
            d = e[f];
            break
          }
        }
        if (d === null) {
          return
        }
        var v = null;
        if (n) {
          (0, o.default)(typeof a === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
          v = a(d)
        }
        var h = u.getSource(d);
        var y = h.beginDrag(i, d);
        (0, o.default)((0, l.default)(y), "Item must be an object.");
        u.pinSource(d);
        var m = u.getSourceType(d);
        return {
          type: p,
          itemType: m,
          item: y,
          sourceId: d,
          clientOffset: n,
          sourceClientOffset: v,
          isSourcePublic: r
        }
      }

      function _() {
        var e = this.getMonitor();
        if (!e.isDragging()) {
          return
        }
        return {
          type: v
        }
      }

      function b(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          r = t.clientOffset,
          n = r === undefined ? null : r;
        (0, o.default)((0, s.default)(e), "Expected targetIds to be an array.");
        var a = e.slice(0);
        var i = this.getMonitor();
        var u = this.getRegistry();
        (0, o.default)(i.isDragging(), "Cannot call hover while not dragging.");
        (0, o.default)(!i.didDrop(), "Cannot call hover after drop.");
        for (var l = 0; l < a.length; l++) {
          var c = a[l];
          (0, o.default)(a.lastIndexOf(c) === l, "Expected targetIds to be unique in the passed array.");
          var f = u.getTarget(c);
          (0, o.default)(f, "Expected targetIds to be registered.")
        }
        var p = i.getItemType();
        for (var v = a.length - 1; v >= 0; v--) {
          var y = a[v];
          var m = u.getTargetType(y);
          if (!(0, d.default)(m, p)) {
            a.splice(v, 1)
          }
        }
        for (var g = 0; g < a.length; g++) {
          var _ = a[g];
          var b = u.getTarget(_);
          b.hover(i, _)
        }
        return {
          type: h,
          targetIds: a,
          clientOffset: n
        }
      }

      function k() {
        var e = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var r = this.getMonitor();
        var a = this.getRegistry();
        (0, o.default)(r.isDragging(), "Cannot call drop while not dragging.");
        (0, o.default)(!r.didDrop(), "Cannot call drop twice during one drag operation.");
        var i = r.getTargetIds().filter(r.canDropOnTarget, r);
        i.reverse();
        i.forEach(function(i, s) {
          var u = a.getTarget(i);
          var c = u.drop(r, i);
          (0, o.default)(typeof c === "undefined" || (0, l.default)(c), "Drop result must either be an object or undefined.");
          if (typeof c === "undefined") {
            c = s === 0 ? {} : r.getDropResult()
          }
          e.store.dispatch({
            type: y,
            dropResult: n({}, t, c)
          })
        })
      }

      function w() {
        var e = this.getMonitor();
        var t = this.getRegistry();
        (0, o.default)(e.isDragging(), "Cannot call endDrag while not dragging.");
        var r = e.getSourceId();
        var n = t.getSource(r, true);
        n.endDrag(e, r);
        t.unpinSource();
        return {
          type: m
        }
      }
    }, function(e, t, r) {
      "use strict";
      var n = function(e, t, r, n, a, o, i, s) {
        if (false) {
          if (t === undefined) {
            throw new Error("invariant requires an error message argument")
          }
        }
        if (!e) {
          var u;
          if (t === undefined) {
            u = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.")
          } else {
            var l = [r, n, a, o, i, s];
            var c = 0;
            u = new Error(t.replace(/%s/g, function() {
              return l[c++]
            }));
            u.name = "Invariant Violation"
          }
          u.framesToPop = 1;
          throw u
        }
      };
      e.exports = n
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = i;
      var n = r(73);
      var a = o(n);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, t) {
        if ((0, a.default)(e)) {
          return e.some(function(e) {
            return e === t
          })
        } else {
          return e === t
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      t.default = c;
      var a = r(192);
      var o = u(a);
      var i = r(188);
      var s = r(208);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var l = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: false,
        isSourcePublic: null
      };

      function c() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l;
        var t = arguments[1];
        switch (t.type) {
          case i.BEGIN_DRAG:
            return n({}, e, {
              itemType: t.itemType,
              item: t.item,
              sourceId: t.sourceId,
              isSourcePublic: t.isSourcePublic,
              dropResult: null,
              didDrop: false
            });
          case i.PUBLISH_DRAG_SOURCE:
            return n({}, e, {
              isSourcePublic: true
            });
          case i.HOVER:
            return n({}, e, {
              targetIds: t.targetIds
            });
          case s.REMOVE_TARGET:
            if (e.targetIds.indexOf(t.targetId) === -1) {
              return e
            }
            return n({}, e, {
              targetIds: (0, o.default)(e.targetIds, t.targetId)
            });
          case i.DROP:
            return n({}, e, {
              dropResult: t.dropResult,
              didDrop: true,
              targetIds: []
            });
          case i.END_DRAG:
            return n({}, e, {
              itemType: null,
              item: null,
              sourceId: null,
              dropResult: null,
              didDrop: false,
              isSourcePublic: null,
              targetIds: []
            });
          default:
            return e
        }
      }
    }, function(e, t, r) {
      var n = r(193),
        a = r(199),
        o = r(207);
      var i = a(function(e, t) {
        return o(e) ? n(e, t) : []
      });
      e.exports = i
    }, function(e, t, r) {
      var n = r(60),
        a = r(194),
        o = r(198),
        i = r(116),
        s = r(90),
        u = r(64);
      var l = 200;

      function c(e, t, r, c) {
        var d = -1,
          f = a,
          p = true,
          v = e.length,
          h = [],
          y = t.length;
        if (!v) {
          return h
        }
        if (r) {
          t = i(t, s(r))
        }
        if (c) {
          f = o;
          p = false
        } else if (t.length >= l) {
          f = u;
          p = false;
          t = new n(t)
        }
        e: while (++d < v) {
          var m = e[d],
            g = r == null ? m : r(m);
          m = c || m !== 0 ? m : 0;
          if (p && g === g) {
            var _ = y;
            while (_--) {
              if (t[_] === g) {
                continue e
              }
            }
            h.push(m)
          } else if (!f(t, g, c)) {
            h.push(m)
          }
        }
        return h
      }
      e.exports = c
    }, function(e, t, r) {
      var n = r(195);

      function a(e, t) {
        var r = e == null ? 0 : e.length;
        return !!r && n(e, t, 0) > -1
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(9),
        a = r(196),
        o = r(197);

      function i(e, t, r) {
        return t === t ? o(e, t, r) : n(e, a, r)
      }
      e.exports = i
    }, function(e, t) {
      function r(e) {
        return e !== e
      }
      e.exports = r
    }, function(e, t) {
      function r(e, t, r) {
        var n = r - 1,
          a = e.length;
        while (++n < a) {
          if (e[n] === t) {
            return n
          }
        }
        return -1
      }
      e.exports = r
    }, function(e, t) {
      function r(e, t, r) {
        var n = -1,
          a = e == null ? 0 : e.length;
        while (++n < a) {
          if (r(t, e[n])) {
            return true
          }
        }
        return false
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(121),
        a = r(200),
        o = r(202);

      function i(e, t) {
        return o(a(e, t, n), e + "")
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(201);
      var a = Math.max;

      function o(e, t, r) {
        t = a(t === undefined ? e.length - 1 : t, 0);
        return function() {
          var o = arguments,
            i = -1,
            s = a(o.length - t, 0),
            u = Array(s);
          while (++i < s) {
            u[i] = o[t + i]
          }
          i = -1;
          var l = Array(t + 1);
          while (++i < t) {
            l[i] = o[i]
          }
          l[t] = r(u);
          return n(e, this, l)
        }
      }
      e.exports = o
    }, function(e, t) {
      function r(e, t, r) {
        switch (r.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, r[0]);
          case 2:
            return e.call(t, r[0], r[1]);
          case 3:
            return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(203),
        a = r(206);
      var o = a(n);
      e.exports = o
    }, function(e, t, r) {
      var n = r(204),
        a = r(205),
        o = r(121);
      var i = !a ? o : function(e, t) {
        return a(e, "toString", {
          configurable: true,
          enumerable: false,
          value: n(t),
          writable: true
        })
      };
      e.exports = i
    }, function(e, t) {
      function r(e) {
        return function() {
          return e
        }
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(28);
      var a = function() {
        try {
          var e = n(Object, "defineProperty");
          e({}, "", {});
          return e
        } catch (e) {}
      }();
      e.exports = a
    }, function(e, t) {
      var r = 800,
        n = 16;
      var a = Date.now;

      function o(e) {
        var t = 0,
          o = 0;
        return function() {
          var i = a(),
            s = n - (i - o);
          o = i;
          if (s > 0) {
            if (++t >= r) {
              return arguments[0]
            }
          } else {
            t = 0
          }
          return e.apply(undefined, arguments)
        }
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(96),
        a = r(82);

      function o(e) {
        return a(e) && n(e)
      }
      e.exports = o
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.addSource = i;
      t.addTarget = s;
      t.removeSource = u;
      t.removeTarget = l;
      var r = t.ADD_SOURCE = "dnd-core/ADD_SOURCE";
      var n = t.ADD_TARGET = "dnd-core/ADD_TARGET";
      var a = t.REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
      var o = t.REMOVE_TARGET = "dnd-core/REMOVE_TARGET";

      function i(e) {
        return {
          type: r,
          sourceId: e
        }
      }

      function s(e) {
        return {
          type: n,
          targetId: e
        }
      }

      function u(e) {
        return {
          type: a,
          sourceId: e
        }
      }

      function l(e) {
        return {
          type: o,
          targetId: e
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = a;
      var n = r(208);

      function a() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments[1];
        switch (t.type) {
          case n.ADD_SOURCE:
          case n.ADD_TARGET:
            return e + 1;
          case n.REMOVE_SOURCE:
          case n.REMOVE_TARGET:
            return e - 1;
          default:
            return e
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = f;
      t.areDirty = p;
      var n = r(211);
      var a = l(n);
      var o = r(216);
      var i = l(o);
      var s = r(188);
      var u = r(208);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = [];
      var d = [];

      function f() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : c;
        var t = arguments[1];
        var r = arguments[2];
        switch (t.type) {
          case s.HOVER:
            break;
          case u.ADD_SOURCE:
          case u.ADD_TARGET:
          case u.REMOVE_TARGET:
          case u.REMOVE_SOURCE:
            return c;
          case s.BEGIN_DRAG:
          case s.PUBLISH_DRAG_SOURCE:
          case s.END_DRAG:
          case s.DROP:
          default:
            return d
        }
        var n = t.targetIds;
        var o = r.targetIds;
        var i = (0, a.default)(n, o);
        var l = false;
        if (i.length === 0) {
          for (var f = 0; f < n.length; f++) {
            if (n[f] !== o[f]) {
              l = true;
              break
            }
          }
        } else {
          l = true
        }
        if (!l) {
          return c
        }
        var p = o[o.length - 1];
        var v = n[n.length - 1];
        if (p !== v) {
          if (p) {
            i.push(p)
          }
          if (v) {
            i.push(v)
          }
        }
        return i
      }

      function p(e, t) {
        if (e === c) {
          return false
        }
        if (e === d || typeof t === "undefined") {
          return true
        }
        return (0, i.default)(t, e).length > 0
      }
    }, function(e, t, r) {
      var n = r(75),
        a = r(199),
        o = r(212),
        i = r(207);
      var s = a(function(e) {
        return o(n(e, i))
      });
      e.exports = s
    }, function(e, t, r) {
      var n = r(193),
        a = r(130),
        o = r(213);

      function i(e, t, r) {
        var i = e.length;
        if (i < 2) {
          return i ? o(e[0]) : []
        }
        var s = -1,
          u = Array(i);
        while (++s < i) {
          var l = e[s],
            c = -1;
          while (++c < i) {
            if (c != s) {
              u[s] = n(u[s] || l, e[c], t, r)
            }
          }
        }
        return o(a(u, 1), t, r)
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(60),
        a = r(194),
        o = r(198),
        i = r(64),
        s = r(214),
        u = r(68);
      var l = 200;

      function c(e, t, r) {
        var c = -1,
          d = a,
          f = e.length,
          p = true,
          v = [],
          h = v;
        if (r) {
          p = false;
          d = o
        } else if (f >= l) {
          var y = t ? null : s(e);
          if (y) {
            return u(y)
          }
          p = false;
          d = i;
          h = new n
        } else {
          h = t ? [] : v
        }
        e: while (++c < f) {
          var m = e[c],
            g = t ? t(m) : m;
          m = r || m !== 0 ? m : 0;
          if (p && g === g) {
            var _ = h.length;
            while (_--) {
              if (h[_] === g) {
                continue e
              }
            }
            if (t) {
              h.push(g)
            }
            v.push(m)
          } else if (!d(h, g, r)) {
            if (h !== v) {
              h.push(g)
            }
            v.push(m)
          }
        }
        return v
      }
      e.exports = c
    }, function(e, t, r) {
      var n = r(100),
        a = r(215),
        o = r(68);
      var i = 1 / 0;
      var s = !(n && 1 / o(new n([, -0]))[1] == i) ? a : function(e) {
        return new n(e)
      };
      e.exports = s
    }, function(e, t) {
      function r() {}
      e.exports = r
    }, function(e, t, r) {
      var n = r(116),
        a = r(217),
        o = r(199),
        i = r(218);
      var s = o(function(e) {
        var t = n(e, i);
        return t.length && t[0] === e[0] ? a(t) : []
      });
      e.exports = s
    }, function(e, t, r) {
      var n = r(60),
        a = r(194),
        o = r(198),
        i = r(116),
        s = r(90),
        u = r(64);
      var l = Math.min;

      function c(e, t, r) {
        var c = r ? o : a,
          d = e[0].length,
          f = e.length,
          p = f,
          v = Array(f),
          h = Infinity,
          y = [];
        while (p--) {
          var m = e[p];
          if (p && t) {
            m = i(m, s(t))
          }
          h = l(m.length, h);
          v[p] = !r && (t || d >= 120 && m.length >= 120) ? new n(p && m) : undefined
        }
        m = e[0];
        var g = -1,
          _ = v[0];
        e: while (++g < d && y.length < h) {
          var b = m[g],
            k = t ? t(b) : b;
          b = r || b !== 0 ? b : 0;
          if (!(_ ? u(_, k) : c(y, k, r))) {
            p = f;
            while (--p) {
              var w = v[p];
              if (!(w ? u(w, k) : c(e[p], k, r))) {
                continue e
              }
            }
            if (_) {
              _.push(k)
            }
            y.push(b)
          }
        }
        return y
      }
      e.exports = c
    }, function(e, t, r) {
      var n = r(207);

      function a(e) {
        return n(e) ? e : []
      }
      e.exports = a
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = r;

      function r() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return e + 1
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(189);
      var o = v(a);
      var i = r(73);
      var s = v(i);
      var u = r(190);
      var l = v(u);
      var c = r(221);
      var d = v(c);
      var f = r(187);
      var p = r(210);

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var y = function() {
        function e(t) {
          h(this, e);
          this.store = t;
          this.registry = new d.default(t)
        }
        n(e, [{
          key: "subscribeToStateChange",
          value: function e(t) {
            var r = this;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var a = n.handlerIds;
            (0, o.default)(typeof t === "function", "listener must be a function.");
            (0, o.default)(typeof a === "undefined" || (0, s.default)(a), "handlerIds, when specified, must be an array of strings.");
            var i = this.store.getState().stateId;
            var u = function e() {
              var n = r.store.getState();
              var o = n.stateId;
              try {
                var s = o === i || o === i + 1 && !(0, p.areDirty)(n.dirtyHandlerIds, a);
                if (!s) {
                  t()
                }
              } finally {
                i = o
              }
            };
            return this.store.subscribe(u)
          }
        }, {
          key: "subscribeToOffsetChange",
          value: function e(t) {
            var r = this;
            (0, o.default)(typeof t === "function", "listener must be a function.");
            var n = this.store.getState().dragOffset;
            var a = function e() {
              var a = r.store.getState().dragOffset;
              if (a === n) {
                return
              }
              n = a;
              t()
            };
            return this.store.subscribe(a)
          }
        }, {
          key: "canDragSource",
          value: function e(t) {
            var r = this.registry.getSource(t);
            (0, o.default)(r, "Expected to find a valid source.");
            if (this.isDragging()) {
              return false
            }
            return r.canDrag(this, t)
          }
        }, {
          key: "canDropOnTarget",
          value: function e(t) {
            var r = this.registry.getTarget(t);
            (0, o.default)(r, "Expected to find a valid target.");
            if (!this.isDragging() || this.didDrop()) {
              return false
            }
            var n = this.registry.getTargetType(t);
            var a = this.getItemType();
            return (0, l.default)(n, a) && r.canDrop(this, t)
          }
        }, {
          key: "isDragging",
          value: function e() {
            return Boolean(this.getItemType())
          }
        }, {
          key: "isDraggingSource",
          value: function e(t) {
            var r = this.registry.getSource(t, true);
            (0, o.default)(r, "Expected to find a valid source.");
            if (!this.isDragging() || !this.isSourcePublic()) {
              return false
            }
            var n = this.registry.getSourceType(t);
            var a = this.getItemType();
            if (n !== a) {
              return false
            }
            return r.isDragging(this, t)
          }
        }, {
          key: "isOverTarget",
          value: function e(t) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              shallow: false
            };
            var n = r.shallow;
            if (!this.isDragging()) {
              return false
            }
            var a = this.registry.getTargetType(t);
            var o = this.getItemType();
            if (!(0, l.default)(a, o)) {
              return false
            }
            var i = this.getTargetIds();
            if (!i.length) {
              return false
            }
            var s = i.indexOf(t);
            if (n) {
              return s === i.length - 1
            } else {
              return s > -1
            }
          }
        }, {
          key: "getItemType",
          value: function e() {
            return this.store.getState().dragOperation.itemType
          }
        }, {
          key: "getItem",
          value: function e() {
            return this.store.getState().dragOperation.item
          }
        }, {
          key: "getSourceId",
          value: function e() {
            return this.store.getState().dragOperation.sourceId
          }
        }, {
          key: "getTargetIds",
          value: function e() {
            return this.store.getState().dragOperation.targetIds
          }
        }, {
          key: "getDropResult",
          value: function e() {
            return this.store.getState().dragOperation.dropResult
          }
        }, {
          key: "didDrop",
          value: function e() {
            return this.store.getState().dragOperation.didDrop
          }
        }, {
          key: "isSourcePublic",
          value: function e() {
            return this.store.getState().dragOperation.isSourcePublic
          }
        }, {
          key: "getInitialClientOffset",
          value: function e() {
            return this.store.getState().dragOffset.initialClientOffset
          }
        }, {
          key: "getInitialSourceClientOffset",
          value: function e() {
            return this.store.getState().dragOffset.initialSourceClientOffset
          }
        }, {
          key: "getClientOffset",
          value: function e() {
            return this.store.getState().dragOffset.clientOffset
          }
        }, {
          key: "getSourceClientOffset",
          value: function e() {
            return (0, f.getSourceClientOffset)(this.store.getState().dragOffset)
          }
        }, {
          key: "getDifferenceFromInitialOffset",
          value: function e() {
            return (0, f.getDifferenceFromInitialOffset)(this.store.getState().dragOffset)
          }
        }]);
        return e
      }();
      t.default = y
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e
      } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      var o = r(189);
      var i = v(o);
      var s = r(73);
      var u = v(s);
      var l = r(222);
      var c = v(l);
      var d = r(208);
      var f = r(224);
      var p = v(f);

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var y = {
        SOURCE: "SOURCE",
        TARGET: "TARGET"
      };

      function m(e) {
        (0, i.default)(typeof e.canDrag === "function", "Expected canDrag to be a function.");
        (0, i.default)(typeof e.beginDrag === "function", "Expected beginDrag to be a function.");
        (0, i.default)(typeof e.endDrag === "function", "Expected endDrag to be a function.")
      }

      function g(e) {
        (0, i.default)(typeof e.canDrop === "function", "Expected canDrop to be a function.");
        (0, i.default)(typeof e.hover === "function", "Expected hover to be a function.");
        (0, i.default)(typeof e.drop === "function", "Expected beginDrag to be a function.")
      }

      function _(e, t) {
        if (t && (0, u.default)(e)) {
          e.forEach(function(e) {
            return _(e, false)
          });
          return
        }(0, i.default)(typeof e === "string" || (typeof e === "undefined" ? "undefined" : a(e)) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
      }

      function b(e) {
        var t = (0, p.default)().toString();
        switch (e) {
          case y.SOURCE:
            return "S" + t;
          case y.TARGET:
            return "T" + t;
          default:
            (0, i.default)(false, "Unknown role: " + e)
        }
      }

      function k(e) {
        switch (e[0]) {
          case "S":
            return y.SOURCE;
          case "T":
            return y.TARGET;
          default:
            (0, i.default)(false, "Cannot parse handler ID: " + e)
        }
      }
      var w = function() {
        function e(t) {
          h(this, e);
          this.store = t;
          this.types = {};
          this.handlers = {};
          this.pinnedSourceId = null;
          this.pinnedSource = null
        }
        n(e, [{
          key: "addSource",
          value: function e(t, r) {
            _(t);
            m(r);
            var n = this.addHandler(y.SOURCE, t, r);
            this.store.dispatch((0, d.addSource)(n));
            return n
          }
        }, {
          key: "addTarget",
          value: function e(t, r) {
            _(t, true);
            g(r);
            var n = this.addHandler(y.TARGET, t, r);
            this.store.dispatch((0, d.addTarget)(n));
            return n
          }
        }, {
          key: "addHandler",
          value: function e(t, r, n) {
            var a = b(t);
            this.types[a] = r;
            this.handlers[a] = n;
            return a
          }
        }, {
          key: "containsHandler",
          value: function e(t) {
            var r = this;
            return Object.keys(this.handlers).some(function(e) {
              return r.handlers[e] === t
            })
          }
        }, {
          key: "getSource",
          value: function e(t, r) {
            (0, i.default)(this.isSourceId(t), "Expected a valid source ID.");
            var n = r && t === this.pinnedSourceId;
            var a = n ? this.pinnedSource : this.handlers[t];
            return a
          }
        }, {
          key: "getTarget",
          value: function e(t) {
            (0, i.default)(this.isTargetId(t), "Expected a valid target ID.");
            return this.handlers[t]
          }
        }, {
          key: "getSourceType",
          value: function e(t) {
            (0, i.default)(this.isSourceId(t), "Expected a valid source ID.");
            return this.types[t]
          }
        }, {
          key: "getTargetType",
          value: function e(t) {
            (0, i.default)(this.isTargetId(t), "Expected a valid target ID.");
            return this.types[t]
          }
        }, {
          key: "isSourceId",
          value: function e(t) {
            var r = k(t);
            return r === y.SOURCE
          }
        }, {
          key: "isTargetId",
          value: function e(t) {
            var r = k(t);
            return r === y.TARGET
          }
        }, {
          key: "removeSource",
          value: function e(t) {
            var r = this;
            (0, i.default)(this.getSource(t), "Expected an existing source.");
            this.store.dispatch((0, d.removeSource)(t));
            (0, c.default)(function() {
              delete r.handlers[t];
              delete r.types[t]
            })
          }
        }, {
          key: "removeTarget",
          value: function e(t) {
            var r = this;
            (0, i.default)(this.getTarget(t), "Expected an existing target.");
            this.store.dispatch((0, d.removeTarget)(t));
            (0, c.default)(function() {
              delete r.handlers[t];
              delete r.types[t]
            })
          }
        }, {
          key: "pinSource",
          value: function e(t) {
            var r = this.getSource(t);
            (0, i.default)(r, "Expected an existing source.");
            this.pinnedSourceId = t;
            this.pinnedSource = r
          }
        }, {
          key: "unpinSource",
          value: function e() {
            (0, i.default)(this.pinnedSource, "No source is pinned at the time.");
            this.pinnedSourceId = null;
            this.pinnedSource = null
          }
        }]);
        return e
      }();
      t.default = w
    }, function(e, t, r) {
      "use strict";
      var n = r(223);
      var a = [];
      var o = [];
      var i = n.makeRequestCallFromTimer(s);

      function s() {
        if (o.length) {
          throw o.shift()
        }
      }
      e.exports = u;

      function u(e) {
        var t;
        if (a.length) {
          t = a.pop()
        } else {
          t = new l
        }
        t.task = e;
        n(t)
      }

      function l() {
        this.task = null
      }
      l.prototype.call = function() {
        try {
          this.task.call()
        } catch (e) {
          if (u.onerror) {
            u.onerror(e)
          } else {
            o.push(e);
            i()
          }
        } finally {
          this.task = null;
          a[a.length] = this
        }
      }
    }, function(e, t, r) {
      "use strict";
      e.exports = n;

      function n(e) {
        if (!a.length) {
          i();
          o = true
        }
        a[a.length] = e
      }
      var a = [];
      var o = false;
      var i;
      var s = 0;
      var u = 1024;

      function l() {
        while (s < a.length) {
          var e = s;
          s = s + 1;
          a[e].call();
          if (s > u) {
            for (var t = 0, r = a.length - s; t < r; t++) {
              a[t] = a[t + s]
            }
            a.length -= s;
            s = 0
          }
        }
        a.length = 0;
        s = 0;
        o = false
      }
      var c = true ? {} : self;
      var d = c.MutationObserver || c.WebKitMutationObserver;
      if (typeof d === "function") {
        i = f(l)
      } else {
        i = p(l)
      }
      n.requestFlush = i;

      function f(e) {
        var t = 1;
        var r = new d(e);
        var n = document.createTextNode("");
        r.observe(n, {
          characterData: true
        });
        return function e() {
          t = -t;
          n.data = t
        }
      }

      function p(e) {
        return function t() {
          var r = setTimeout(a, 0);
          var n = setInterval(a, 50);

          function a() {
            clearTimeout(r);
            clearInterval(n);
            e()
          }
        }
      }
      n.makeRequestCallFromTimer = p
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = n;
      var r = 0;

      function n() {
        return r++
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();

      function n(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var a = function() {
        function e() {
          n(this, e)
        }
        r(e, [{
          key: "canDrag",
          value: function e() {
            return true
          }
        }, {
          key: "isDragging",
          value: function e(t, r) {
            return r === t.getSourceId()
          }
        }, {
          key: "endDrag",
          value: function e() {}
        }]);
        return e
      }();
      t.default = a
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();

      function n(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var a = function() {
        function e() {
          n(this, e)
        }
        r(e, [{
          key: "canDrop",
          value: function e() {
            return true
          }
        }, {
          key: "hover",
          value: function e() {}
        }, {
          key: "drop",
          value: function e() {}
        }]);
        return e
      }();
      t.default = a
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      t.default = l;
      var a = r(215);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var u = function() {
        function e(t) {
          s(this, e);
          this.actions = t.getActions()
        }
        n(e, [{
          key: "setup",
          value: function e() {
            this.didCallSetup = true
          }
        }, {
          key: "teardown",
          value: function e() {
            this.didCallTeardown = true
          }
        }, {
          key: "connectDragSource",
          value: function e() {
            return o.default
          }
        }, {
          key: "connectDragPreview",
          value: function e() {
            return o.default
          }
        }, {
          key: "connectDropTarget",
          value: function e() {
            return o.default
          }
        }, {
          key: "simulateBeginDrag",
          value: function e(t, r) {
            this.actions.beginDrag(t, r)
          }
        }, {
          key: "simulatePublishDragSource",
          value: function e() {
            this.actions.publishDragSource()
          }
        }, {
          key: "simulateHover",
          value: function e(t, r) {
            this.actions.hover(t, r)
          }
        }, {
          key: "simulateDrop",
          value: function e() {
            this.actions.drop()
          }
        }, {
          key: "simulateEndDrag",
          value: function e() {
            this.actions.endDrag()
          }
        }]);
        return e
      }();

      function l(e) {
        return new u(e)
      }
    }, function(e, t) {
      "use strict";
      var r = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };
      var n = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        arguments: true,
        arity: true
      };
      var a = typeof Object.getOwnPropertySymbols === "function";
      e.exports = function e(t, o, i) {
        if (typeof o !== "string") {
          var s = Object.getOwnPropertyNames(o);
          if (a) {
            s = s.concat(Object.getOwnPropertySymbols(o))
          }
          for (var u = 0; u < s.length; ++u) {
            if (!r[s[u]] && !n[s[u]] && (!i || !i[s[u]])) {
              try {
                t[s[u]] = o[s[u]]
              } catch (e) {}
            }
          }
        }
        return t
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = n;

      function n(e, t) {
        if (false) {
          for (var r = 0; r < (arguments.length <= 2 ? 0 : arguments.length - 2); r += 1) {
            var n = arguments.length <= r + 2 ? undefined : arguments[r + 2];
            if (n && n.prototype && n.prototype.render) {
              console.error("You seem to be applying the arguments in the wrong order. " + ("It should be " + e + "(" + t + ")(Component), not the other way around. ") + "Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order");
              return
            }
          }
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = undefined;
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a, o;
      var i = r(1);
      var s = r(173);
      var u = c(s);
      var l = r(172);

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function d(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function f(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function p(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var v = (o = a = function(e) {
        p(t, e);

        function t(e, r) {
          d(this, t);
          var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
          n.backend = (0, l.unpackBackendForEs5Users)(e.backend);
          return n
        }
        n(t, [{
          key: "getChildContext",
          value: function e() {
            var t = this;
            var r = function e() {
              if (t.props && t.props.window) {
                return t.props.window
              } else if (t.context && t.context.window) {
                return t.context.window
              } else if (typeof window !== "undefined") {
                return window
              }
              return undefined
            };
            return (0, l.createChildContext)(this.backend, {
              window: r()
            })
          }
        }, {
          key: "render",
          value: function e() {
            return i.Children.only(this.props.children)
          }
        }]);
        return t
      }(i.Component), a.propTypes = {
        backend: u.default.oneOfType([u.default.func, u.default.object]).isRequired,
        children: u.default.element.isRequired,
        window: u.default.object
      }, a.defaultProps = {
        window: undefined
      }, a.childContextTypes = l.CHILD_CONTEXT_TYPES, a.displayName = "DragDropContextProvider", a.contextTypes = {
        window: u.default.object
      }, o);
      t.default = v
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e
      } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      var o = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      t.default = E;
      var i = r(1);
      var s = w(i);
      var u = r(173);
      var l = w(u);
      var c = r(228);
      var d = w(c);
      var f = r(181);
      var p = w(f);
      var v = r(189);
      var h = w(v);
      var y = r(232);
      var m = w(y);
      var g = r(233);
      var _ = w(g);
      var b = r(229);
      var k = w(b);

      function w(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function T(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function C(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function O(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }

      function E(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        k.default.apply(undefined, ["DragLayer", "collect[, options]"].concat(Array.prototype.slice.call(arguments)));
        (0, h.default)(typeof e === "function", 'Expected "collect" provided as the first argument to DragLayer ' + "to be a function that collects props to inject into the component. ", "Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html", e);
        (0, h.default)((0, p.default)(t), 'Expected "options" provided as the second argument to DragLayer to be ' + "a plain object when specified. " + "Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html", t);
        return function r(u) {
          var c, f;
          var p = t.arePropsEqual,
            v = p === undefined ? _.default : p;
          var y = u.displayName || u.name || "Component";
          var g = (f = c = function(t) {
            O(r, t);
            o(r, [{
              key: "getDecoratedComponentInstance",
              value: function e() {
                (0, h.default)(this.child, "In order to access an instance of the decorated component it can " + "not be a stateless component.");
                return this.child
              }
            }, {
              key: "shouldComponentUpdate",
              value: function e(t, r) {
                return !v(t, this.props) || !(0, m.default)(r, this.state)
              }
            }]);

            function r(e, t) {
              T(this, r);
              var n = C(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e));
              n.handleChange = n.handleChange.bind(n);
              n.manager = t.dragDropManager;
              (0, h.default)(a(n.manager) === "object", "Could not find the drag and drop manager in the context of %s. " + "Make sure to wrap the top-level component of your app with DragDropContext. " + "Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context", y, y);
              n.state = n.getCurrentState();
              return n
            }
            o(r, [{
              key: "componentDidMount",
              value: function e() {
                this.isCurrentlyMounted = true;
                var t = this.manager.getMonitor();
                this.unsubscribeFromOffsetChange = t.subscribeToOffsetChange(this.handleChange);
                this.unsubscribeFromStateChange = t.subscribeToStateChange(this.handleChange);
                this.handleChange()
              }
            }, {
              key: "componentWillUnmount",
              value: function e() {
                this.isCurrentlyMounted = false;
                this.unsubscribeFromOffsetChange();
                this.unsubscribeFromStateChange()
              }
            }, {
              key: "handleChange",
              value: function e() {
                if (!this.isCurrentlyMounted) {
                  return
                }
                var t = this.getCurrentState();
                if (!(0, m.default)(t, this.state)) {
                  this.setState(t)
                }
              }
            }, {
              key: "getCurrentState",
              value: function t() {
                var r = this.manager.getMonitor();
                return e(r)
              }
            }, {
              key: "render",
              value: function e() {
                var t = this;
                return s.default.createElement(u, n({}, this.props, this.state, {
                  ref: function e(r) {
                    return t.child = r
                  }
                }))
              }
            }]);
            return r
          }(i.Component), c.DecoratedComponent = u, c.displayName = "DragLayer(" + y + ")", c.contextTypes = {
            dragDropManager: l.default.object.isRequired
          }, f);
          return (0, d.default)(g, u)
        }
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = r;

      function r(e, t) {
        if (e === t) {
          return true
        }
        var r = Object.keys(e);
        var n = Object.keys(t);
        if (r.length !== n.length) {
          return false
        }
        var a = Object.prototype.hasOwnProperty;
        for (var o = 0; o < r.length; o += 1) {
          if (!a.call(t, r[o]) || e[r[o]] !== t[r[o]]) {
            return false
          }
          var i = e[r[o]];
          var s = t[r[o]];
          if (i !== s) {
            return false
          }
        }
        return true
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e
      } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      t.default = n;

      function n(e, t) {
        if (e === t) {
          return true
        }
        if ((typeof e === "undefined" ? "undefined" : r(e)) !== "object" || e === null || (typeof t === "undefined" ? "undefined" : r(t)) !== "object" || t === null) {
          return false
        }
        var n = Object.keys(e);
        var a = Object.keys(t);
        if (n.length !== a.length) {
          return false
        }
        var o = Object.prototype.hasOwnProperty;
        for (var i = 0; i < n.length; i += 1) {
          if (!o.call(t, n[i])) {
            return false
          }
          var s = e[n[i]];
          var u = t[n[i]];
          if (s !== u || (typeof s === "undefined" ? "undefined" : r(s)) === "object" || (typeof u === "undefined" ? "undefined" : r(u)) === "object") {
            return false
          }
        }
        return true
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = w;
      var n = r(189);
      var a = k(n);
      var o = r(181);
      var i = k(o);
      var s = r(229);
      var u = k(s);
      var l = r(235);
      var c = k(l);
      var d = r(241);
      var f = k(d);
      var p = r(242);
      var v = k(p);
      var h = r(243);
      var y = k(h);
      var m = r(244);
      var g = k(m);
      var _ = r(248);
      var b = k(_);

      function k(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function w(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        u.default.apply(undefined, ["DragSource", "type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments)));
        var o = e;
        if (typeof e !== "function") {
          (0, a.default)((0, b.default)(e), 'Expected "type" provided as the first argument to DragSource to be ' + "a string, or a function that returns a string given the current props. " + "Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", e);
          o = function t() {
            return e
          }
        }(0, a.default)((0, i.default)(t), 'Expected "spec" provided as the second argument to DragSource to be ' + "a plain object. Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", t);
        var s = (0, v.default)(t);
        (0, a.default)(typeof r === "function", 'Expected "collect" provided as the third argument to DragSource to be ' + "a function that returns a plain object of props to inject. " + "Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", r);
        (0, a.default)((0, i.default)(n), 'Expected "options" provided as the fourth argument to DragSource to be ' + "a plain object when specified. " + "Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", r);
        return function e(t) {
          return (0, c.default)({
            connectBackend: function e(t, r) {
              return t.connectDragSource(r)
            },
            containerDisplayName: "DragSource",
            createHandler: s,
            registerHandler: f.default,
            createMonitor: y.default,
            createConnector: g.default,
            DecoratedComponent: t,
            getType: o,
            collect: r,
            options: n
          })
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e
      } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      var o = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      t.default = O;
      var i = r(1);
      var s = k(i);
      var u = r(173);
      var l = k(u);
      var c = r(236);
      var d = r(181);
      var f = k(d);
      var p = r(189);
      var v = k(p);
      var h = r(228);
      var y = k(h);
      var m = r(232);
      var g = k(m);
      var _ = r(233);
      var b = k(_);

      function k(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function w(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function T(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function C(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }

      function O(e) {
        var t, r;
        var u = e.DecoratedComponent,
          d = e.createHandler,
          p = e.createMonitor,
          h = e.createConnector,
          m = e.registerHandler,
          _ = e.containerDisplayName,
          k = e.getType,
          O = e.collect,
          E = e.options;
        var R = E.arePropsEqual,
          P = R === undefined ? b.default : R;
        var S = u.displayName || u.name || "Component";
        var D = (r = t = function(e) {
          C(t, e);
          o(t, [{
            key: "getHandlerId",
            value: function e() {
              return this.handlerId
            }
          }, {
            key: "getDecoratedComponentInstance",
            value: function e() {
              return this.decoratedComponentInstance
            }
          }, {
            key: "shouldComponentUpdate",
            value: function e(t, r) {
              return !P(t, this.props) || !(0, g.default)(r, this.state)
            }
          }]);

          function t(e, r) {
            w(this, t);
            var n = T(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r));
            n.handleChange = n.handleChange.bind(n);
            n.handleChildRef = n.handleChildRef.bind(n);
            (0, v.default)(a(n.context.dragDropManager) === "object", "Could not find the drag and drop manager in the context of %s. " + "Make sure to wrap the top-level component of your app with DragDropContext. " + "Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context", S, S);
            n.manager = n.context.dragDropManager;
            n.handlerMonitor = p(n.manager);
            n.handlerConnector = h(n.manager.getBackend());
            n.handler = d(n.handlerMonitor);
            n.disposable = new c.SerialDisposable;
            n.receiveProps(e);
            n.state = n.getCurrentState();
            n.dispose();
            return n
          }
          o(t, [{
            key: "componentDidMount",
            value: function e() {
              this.isCurrentlyMounted = true;
              this.disposable = new c.SerialDisposable;
              this.currentType = null;
              this.receiveProps(this.props);
              this.handleChange()
            }
          }, {
            key: "componentWillReceiveProps",
            value: function e(t) {
              if (!P(t, this.props)) {
                this.receiveProps(t);
                this.handleChange()
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function e() {
              this.dispose();
              this.isCurrentlyMounted = false
            }
          }, {
            key: "receiveProps",
            value: function e(t) {
              this.handler.receiveProps(t);
              this.receiveType(k(t))
            }
          }, {
            key: "receiveType",
            value: function e(t) {
              if (t === this.currentType) {
                return
              }
              this.currentType = t;
              var r = m(t, this.handler, this.manager),
                n = r.handlerId,
                a = r.unregister;
              this.handlerId = n;
              this.handlerMonitor.receiveHandlerId(n);
              this.handlerConnector.receiveHandlerId(n);
              var o = this.manager.getMonitor();
              var i = o.subscribeToStateChange(this.handleChange, {
                handlerIds: [n]
              });
              this.disposable.setDisposable(new c.CompositeDisposable(new c.Disposable(i), new c.Disposable(a)))
            }
          }, {
            key: "handleChange",
            value: function e() {
              if (!this.isCurrentlyMounted) {
                return
              }
              var t = this.getCurrentState();
              if (!(0, g.default)(t, this.state)) {
                this.setState(t)
              }
            }
          }, {
            key: "dispose",
            value: function e() {
              this.disposable.dispose();
              this.handlerConnector.receiveHandlerId(null)
            }
          }, {
            key: "handleChildRef",
            value: function e(t) {
              this.decoratedComponentInstance = t;
              this.handler.receiveComponent(t)
            }
          }, {
            key: "getCurrentState",
            value: function e() {
              var t = O(this.handlerConnector.hooks, this.handlerMonitor);
              if (false) {
                (0, v.default)((0, f.default)(t), "Expected `collect` specified as the second argument to " + "%s for %s to return a plain object of props to inject. " + "Instead, received %s.", _, S, t)
              }
              return t
            }
          }, {
            key: "render",
            value: function e() {
              return s.default.createElement(u, n({}, this.props, this.state, {
                ref: this.handleChildRef
              }))
            }
          }]);
          return t
        }(i.Component), t.DecoratedComponent = u, t.displayName = _ + "(" + S + ")", t.contextTypes = {
          dragDropManager: l.default.object.isRequired
        }, r);
        return (0, y.default)(D, u)
      }
    }, function(e, t, r) {
      "use strict";
      var n = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      };
      t.__esModule = true;
      var a = r(237);
      var o = n(a);
      t.isDisposable = o["default"];
      var i = r(238);
      var s = n(i);
      t.Disposable = s["default"];
      var u = r(239);
      var l = n(u);
      t.CompositeDisposable = l["default"];
      var c = r(240);
      var d = n(c);
      t.SerialDisposable = d["default"]
    }, function(e, t) {
      "use strict";
      t.__esModule = true;
      t["default"] = r;

      function r(e) {
        return Boolean(e && typeof e.dispose === "function")
      }
      e.exports = t["default"]
    }, function(e, t) {
      "use strict";
      var r = function(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      };
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      t.__esModule = true;
      var a = function e() {};
      var o = function() {
        function e(t) {
          r(this, e);
          this.isDisposed = false;
          this.action = t || a
        }
        e.prototype.dispose = function e() {
          if (!this.isDisposed) {
            this.action.call(null);
            this.isDisposed = true
          }
        };
        n(e, null, [{
          key: "empty",
          enumerable: true,
          value: {
            dispose: a
          }
        }]);
        return e
      }();
      t["default"] = o;
      e.exports = t["default"]
    }, function(e, t, r) {
      "use strict";
      var n = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      };
      var a = function(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      };
      t.__esModule = true;
      var o = r(237);
      var i = n(o);
      var s = function() {
        function e() {
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n]
          }
          a(this, e);
          if (Array.isArray(r[0]) && r.length === 1) {
            r = r[0]
          }
          for (var o = 0; o < r.length; o++) {
            if (!i["default"](r[o])) {
              throw new Error("Expected a disposable")
            }
          }
          this.disposables = r;
          this.isDisposed = false
        }
        e.prototype.add = function e(t) {
          if (this.isDisposed) {
            t.dispose()
          } else {
            this.disposables.push(t)
          }
        };
        e.prototype.remove = function e(t) {
          if (this.isDisposed) {
            return false
          }
          var r = this.disposables.indexOf(t);
          if (r === -1) {
            return false
          }
          this.disposables.splice(r, 1);
          t.dispose();
          return true
        };
        e.prototype.dispose = function e() {
          if (this.isDisposed) {
            return
          }
          var t = this.disposables.length;
          var r = new Array(t);
          for (var n = 0; n < t; n++) {
            r[n] = this.disposables[n]
          }
          this.isDisposed = true;
          this.disposables = [];
          this.length = 0;
          for (var n = 0; n < t; n++) {
            r[n].dispose()
          }
        };
        return e
      }();
      t["default"] = s;
      e.exports = t["default"]
    }, function(e, t, r) {
      "use strict";
      var n = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      };
      var a = function(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      };
      t.__esModule = true;
      var o = r(237);
      var i = n(o);
      var s = function() {
        function e() {
          a(this, e);
          this.isDisposed = false;
          this.current = null
        }
        e.prototype.getDisposable = function e() {
          return this.current
        };
        e.prototype.setDisposable = function e() {
          var t = arguments[0] === undefined ? null : arguments[0];
          if (t != null && !i["default"](t)) {
            throw new Error("Expected either an empty value or a valid disposable")
          }
          var r = this.isDisposed;
          var n = undefined;
          if (!r) {
            n = this.current;
            this.current = t
          }
          if (n) {
            n.dispose()
          }
          if (r && t) {
            t.dispose()
          }
        };
        e.prototype.dispose = function e() {
          if (this.isDisposed) {
            return
          }
          this.isDisposed = true;
          var t = this.current;
          this.current = null;
          if (t) {
            t.dispose()
          }
        };
        return e
      }();
      t["default"] = s;
      e.exports = t["default"]
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = r;

      function r(e, t, r) {
        var n = r.getRegistry();
        var a = n.addSource(e, t);

        function o() {
          n.removeSource(a)
        }
        return {
          handlerId: a,
          unregister: o
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      t.default = f;
      var a = r(189);
      var o = u(a);
      var i = r(181);
      var s = u(i);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var c = ["canDrag", "beginDrag", "isDragging", "endDrag"];
      var d = ["beginDrag"];

      function f(e) {
        Object.keys(e).forEach(function(t) {
          (0, o.default)(c.indexOf(t) > -1, "Expected the drag source specification to only have " + "some of the following keys: %s. " + 'Instead received a specification with an unexpected "%s" key. ' + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", c.join(", "), t);
          (0, o.default)(typeof e[t] === "function", "Expected %s in the drag source specification to be a function. " + "Instead received a specification with %s: %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", t, t, e[t])
        });
        d.forEach(function(t) {
          (0, o.default)(typeof e[t] === "function", "Expected %s in the drag source specification to be a function. " + "Instead received a specification with %s: %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", t, t, e[t])
        });
        var t = function() {
          function t(e) {
            l(this, t);
            this.monitor = e;
            this.props = null;
            this.component = null
          }
          n(t, [{
            key: "receiveProps",
            value: function e(t) {
              this.props = t
            }
          }, {
            key: "receiveComponent",
            value: function e(t) {
              this.component = t
            }
          }, {
            key: "canDrag",
            value: function t() {
              if (!e.canDrag) {
                return true
              }
              return e.canDrag(this.props, this.monitor)
            }
          }, {
            key: "isDragging",
            value: function t(r, n) {
              if (!e.isDragging) {
                return n === r.getSourceId()
              }
              return e.isDragging(this.props, this.monitor)
            }
          }, {
            key: "beginDrag",
            value: function t() {
              var r = e.beginDrag(this.props, this.monitor, this.component);
              if (false) {
                (0, o.default)((0, s.default)(r), "beginDrag() must return a plain object that represents the dragged item. " + "Instead received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html", r)
              }
              return r
            }
          }, {
            key: "endDrag",
            value: function t() {
              if (!e.endDrag) {
                return
              }
              e.endDrag(this.props, this.monitor, this.component)
            }
          }]);
          return t
        }();
        return function e(r) {
          return new t(r)
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      t.default = d;
      var a = r(189);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var u = false;
      var l = false;
      var c = function() {
        function e(t) {
          s(this, e);
          this.internalMonitor = t.getMonitor()
        }
        n(e, [{
          key: "receiveHandlerId",
          value: function e(t) {
            this.sourceId = t
          }
        }, {
          key: "canDrag",
          value: function e() {
            (0, o.default)(!u, "You may not call monitor.canDrag() inside your canDrag() implementation. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");
            try {
              u = true;
              return this.internalMonitor.canDragSource(this.sourceId)
            } finally {
              u = false
            }
          }
        }, {
          key: "isDragging",
          value: function e() {
            (0, o.default)(!l, "You may not call monitor.isDragging() inside your isDragging() implementation. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html");
            try {
              l = true;
              return this.internalMonitor.isDraggingSource(this.sourceId)
            } finally {
              l = false
            }
          }
        }, {
          key: "getItemType",
          value: function e() {
            return this.internalMonitor.getItemType()
          }
        }, {
          key: "getItem",
          value: function e() {
            return this.internalMonitor.getItem()
          }
        }, {
          key: "getDropResult",
          value: function e() {
            return this.internalMonitor.getDropResult()
          }
        }, {
          key: "didDrop",
          value: function e() {
            return this.internalMonitor.didDrop()
          }
        }, {
          key: "getInitialClientOffset",
          value: function e() {
            return this.internalMonitor.getInitialClientOffset()
          }
        }, {
          key: "getInitialSourceClientOffset",
          value: function e() {
            return this.internalMonitor.getInitialSourceClientOffset()
          }
        }, {
          key: "getSourceClientOffset",
          value: function e() {
            return this.internalMonitor.getSourceClientOffset()
          }
        }, {
          key: "getClientOffset",
          value: function e() {
            return this.internalMonitor.getClientOffset()
          }
        }, {
          key: "getDifferenceFromInitialOffset",
          value: function e() {
            return this.internalMonitor.getDifferenceFromInitialOffset()
          }
        }]);
        return e
      }();

      function d(e) {
        return new c(e)
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = u;
      var n = r(245);
      var a = s(n);
      var o = r(247);
      var i = s(o);

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u(e) {
        var t = void 0;
        var r = void 0;
        var n = void 0;
        var o = void 0;
        var s = void 0;
        var u = void 0;
        var l = void 0;

        function c() {
          if (o) {
            o();
            o = null
          }
          if (t && r) {
            o = e.connectDragSource(t, r, n)
          }
        }

        function d() {
          if (l) {
            l();
            l = null
          }
          if (t && s) {
            l = e.connectDragPreview(t, s, u)
          }
        }

        function f(e) {
          if (e === t) {
            return
          }
          t = e;
          c();
          d()
        }
        var p = (0, a.default)({
          dragSource: function e(t, a) {
            if (t === r && (0, i.default)(a, n)) {
              return
            }
            r = t;
            n = a;
            c()
          },
          dragPreview: function e(t, r) {
            if (t === s && (0, i.default)(r, u)) {
              return
            }
            s = t;
            u = r;
            d()
          }
        });
        return {
          receiveHandlerId: f,
          hooks: p
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = l;
      var n = r(1);
      var a = r(246);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e) {
        if (typeof e.type === "string") {
          return
        }
        var t = e.type.displayName || e.type.name || "the component";
        throw new Error("Only native element nodes can now be passed to React DnD connectors." + ("You can either wrap " + t + " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
      }

      function u(e) {
        return function() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          if (!(0, n.isValidElement)(t)) {
            var a = t;
            e(a, r);
            return undefined
          }
          var i = t;
          s(i);
          var u = r ? function(t) {
            return e(t, r)
          } : e;
          return (0, o.default)(i, u)
        }
      }

      function l(e) {
        var t = {};
        Object.keys(e).forEach(function(r) {
          var n = e[r];
          var a = u(n);
          t[r] = function() {
            return a
          }
        });
        return t
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = s;
      var n = r(189);
      var a = i(n);
      var o = r(1);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        var r = e.ref;
        (0, a.default)(typeof r !== "string", "Cannot connect React DnD to an element with an existing string ref. " + "Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. " + "Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute");
        if (!r) {
          return (0, o.cloneElement)(e, {
            ref: t
          })
        }
        return (0, o.cloneElement)(e, {
          ref: function e(n) {
            t(n);
            if (r) {
              r(n)
            }
          }
        })
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = i;
      var n = r(232);
      var a = o(n);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i(e, t) {
        if (t === e) {
          return true
        }
        return t !== null && e !== null && (0, a.default)(t, e)
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e
      } : function(e) {
        return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
      t.default = s;
      var a = r(73);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        return typeof e === "string" || (typeof e === "undefined" ? "undefined" : n(e)) === "symbol" || t && (0, o.default)(e) && e.every(function(e) {
          return s(e, false)
        })
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = w;
      var n = r(189);
      var a = k(n);
      var o = r(181);
      var i = k(o);
      var s = r(229);
      var u = k(s);
      var l = r(235);
      var c = k(l);
      var d = r(250);
      var f = k(d);
      var p = r(251);
      var v = k(p);
      var h = r(252);
      var y = k(h);
      var m = r(253);
      var g = k(m);
      var _ = r(248);
      var b = k(_);

      function k(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function w(e, t, r) {
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        u.default.apply(undefined, ["DropTarget", "type, spec, collect[, options]"].concat(Array.prototype.slice.call(arguments)));
        var o = e;
        if (typeof e !== "function") {
          (0, a.default)((0, b.default)(e, true), 'Expected "type" provided as the first argument to DropTarget to be ' + "a string, an array of strings, or a function that returns either given " + "the current props. Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", e);
          o = function t() {
            return e
          }
        }(0, a.default)((0, i.default)(t), 'Expected "spec" provided as the second argument to DropTarget to be ' + "a plain object. Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", t);
        var s = (0, v.default)(t);
        (0, a.default)(typeof r === "function", 'Expected "collect" provided as the third argument to DropTarget to be ' + "a function that returns a plain object of props to inject. " + "Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", r);
        (0, a.default)((0, i.default)(n), 'Expected "options" provided as the fourth argument to DropTarget to be ' + "a plain object when specified. " + "Instead, received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", r);
        return function e(t) {
          return (0, c.default)({
            connectBackend: function e(t, r) {
              return t.connectDropTarget(r)
            },
            containerDisplayName: "DropTarget",
            createHandler: s,
            registerHandler: f.default,
            createMonitor: y.default,
            createConnector: g.default,
            DecoratedComponent: t,
            getType: o,
            collect: r,
            options: n
          })
        }
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = r;

      function r(e, t, r) {
        var n = r.getRegistry();
        var a = n.addTarget(e, t);

        function o() {
          n.removeTarget(a)
        }
        return {
          handlerId: a,
          unregister: o
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      t.default = d;
      var a = r(189);
      var o = u(a);
      var i = r(181);
      var s = u(i);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var c = ["canDrop", "hover", "drop"];

      function d(e) {
        Object.keys(e).forEach(function(t) {
          (0, o.default)(c.indexOf(t) > -1, "Expected the drop target specification to only have " + "some of the following keys: %s. " + 'Instead received a specification with an unexpected "%s" key. ' + "Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", c.join(", "), t);
          (0, o.default)(typeof e[t] === "function", "Expected %s in the drop target specification to be a function. " + "Instead received a specification with %s: %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", t, t, e[t])
        });
        var t = function() {
          function t(e) {
            l(this, t);
            this.monitor = e;
            this.props = null;
            this.component = null
          }
          n(t, [{
            key: "receiveProps",
            value: function e(t) {
              this.props = t
            }
          }, {
            key: "receiveMonitor",
            value: function e(t) {
              this.monitor = t
            }
          }, {
            key: "receiveComponent",
            value: function e(t) {
              this.component = t
            }
          }, {
            key: "canDrop",
            value: function t() {
              if (!e.canDrop) {
                return true
              }
              return e.canDrop(this.props, this.monitor)
            }
          }, {
            key: "hover",
            value: function t() {
              if (!e.hover) {
                return
              }
              e.hover(this.props, this.monitor, this.component)
            }
          }, {
            key: "drop",
            value: function t() {
              if (!e.drop) {
                return undefined
              }
              var r = e.drop(this.props, this.monitor, this.component);
              if (false) {
                (0, o.default)(typeof r === "undefined" || (0, s.default)(r), "drop() must either return undefined, or an object that represents the drop result. " + "Instead received %s. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html", r)
              }
              return r
            }
          }]);
          return t
        }();
        return function e(r) {
          return new t(r)
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      t.default = c;
      var a = r(189);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var u = false;
      var l = function() {
        function e(t) {
          s(this, e);
          this.internalMonitor = t.getMonitor()
        }
        n(e, [{
          key: "receiveHandlerId",
          value: function e(t) {
            this.targetId = t
          }
        }, {
          key: "canDrop",
          value: function e() {
            (0, o.default)(!u, "You may not call monitor.canDrop() inside your canDrop() implementation. " + "Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html");
            try {
              u = true;
              return this.internalMonitor.canDropOnTarget(this.targetId)
            } finally {
              u = false
            }
          }
        }, {
          key: "isOver",
          value: function e(t) {
            return this.internalMonitor.isOverTarget(this.targetId, t)
          }
        }, {
          key: "getItemType",
          value: function e() {
            return this.internalMonitor.getItemType()
          }
        }, {
          key: "getItem",
          value: function e() {
            return this.internalMonitor.getItem()
          }
        }, {
          key: "getDropResult",
          value: function e() {
            return this.internalMonitor.getDropResult()
          }
        }, {
          key: "didDrop",
          value: function e() {
            return this.internalMonitor.didDrop()
          }
        }, {
          key: "getInitialClientOffset",
          value: function e() {
            return this.internalMonitor.getInitialClientOffset()
          }
        }, {
          key: "getInitialSourceClientOffset",
          value: function e() {
            return this.internalMonitor.getInitialSourceClientOffset()
          }
        }, {
          key: "getSourceClientOffset",
          value: function e() {
            return this.internalMonitor.getSourceClientOffset()
          }
        }, {
          key: "getClientOffset",
          value: function e() {
            return this.internalMonitor.getClientOffset()
          }
        }, {
          key: "getDifferenceFromInitialOffset",
          value: function e() {
            return this.internalMonitor.getDifferenceFromInitialOffset()
          }
        }]);
        return e
      }();

      function c(e) {
        return new l(e)
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = u;
      var n = r(245);
      var a = s(n);
      var o = r(247);
      var i = s(o);

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u(e) {
        var t = void 0;
        var r = void 0;
        var n = void 0;
        var o = void 0;

        function s() {
          if (o) {
            o();
            o = null
          }
          if (t && r) {
            o = e.connectDropTarget(t, r, n)
          }
        }

        function u(e) {
          if (e === t) {
            return
          }
          t = e;
          s()
        }
        var l = (0, a.default)({
          dropTarget: function e(t, a) {
            if (t === r && (0, i.default)(a, n)) {
              return
            }
            r = t;
            n = a;
            s()
          }
        });
        return {
          receiveHandlerId: u,
          hooks: l
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.getEmptyImage = t.NativeTypes = undefined;
      t.default = d;
      var n = r(255);
      var a = c(n);
      var o = r(274);
      var i = c(o);
      var s = r(273);
      var u = l(s);

      function l(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.NativeTypes = u;
      t.getEmptyImage = i.default;

      function d(e) {
        return new a.default(e)
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(256);
      var o = y(a);
      var i = r(266);
      var s = y(i);
      var u = r(267);
      var l = y(u);
      var c = r(269);
      var d = r(270);
      var f = r(272);
      var p = r(273);
      var v = h(p);

      function h(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function y(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function m(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var g = function() {
        function e(t) {
          m(this, e);
          this.actions = t.getActions();
          this.monitor = t.getMonitor();
          this.registry = t.getRegistry();
          this.context = t.getContext();
          this.sourcePreviewNodes = {};
          this.sourcePreviewNodeOptions = {};
          this.sourceNodes = {};
          this.sourceNodeOptions = {};
          this.enterLeaveCounter = new l.default;
          this.dragStartSourceIds = [];
          this.dropTargetIds = [];
          this.dragEnterTargetIds = [];
          this.currentNativeSource = null;
          this.currentNativeHandle = null;
          this.currentDragSourceNode = null;
          this.currentDragSourceNodeOffset = null;
          this.currentDragSourceNodeOffsetChanged = false;
          this.altKeyPressed = false;
          this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
          this.handleTopDragStart = this.handleTopDragStart.bind(this);
          this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
          this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
          this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
          this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
          this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
          this.handleTopDragOver = this.handleTopDragOver.bind(this);
          this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
          this.handleTopDrop = this.handleTopDrop.bind(this);
          this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
          this.handleSelectStart = this.handleSelectStart.bind(this);
          this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
          this.endDragNativeItem = this.endDragNativeItem.bind(this);
          this.asyncEndDragNativeItem = this.asyncEndDragNativeItem.bind(this)
        }
        n(e, [{
          key: "setup",
          value: function e() {
            if (this.window === undefined) {
              return
            }
            if (this.window.__isReactDndBackendSetUp) {
              throw new Error("Cannot have two HTML5 backends at the same time.")
            }
            this.window.__isReactDndBackendSetUp = true;
            this.addEventListeners(this.window)
          }
        }, {
          key: "teardown",
          value: function e() {
            if (this.window === undefined) {
              return
            }
            this.window.__isReactDndBackendSetUp = false;
            this.removeEventListeners(this.window);
            this.clearCurrentDragSourceNode();
            if (this.asyncEndDragFrameId) {
              this.window.cancelAnimationFrame(this.asyncEndDragFrameId)
            }
          }
        }, {
          key: "addEventListeners",
          value: function e(t) {
            t.addEventListener("dragstart", this.handleTopDragStart);
            t.addEventListener("dragstart", this.handleTopDragStartCapture, true);
            t.addEventListener("dragend", this.handleTopDragEndCapture, true);
            t.addEventListener("dragenter", this.handleTopDragEnter);
            t.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
            t.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
            t.addEventListener("dragover", this.handleTopDragOver);
            t.addEventListener("dragover", this.handleTopDragOverCapture, true);
            t.addEventListener("drop", this.handleTopDrop);
            t.addEventListener("drop", this.handleTopDropCapture, true)
          }
        }, {
          key: "removeEventListeners",
          value: function e(t) {
            t.removeEventListener("dragstart", this.handleTopDragStart);
            t.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
            t.removeEventListener("dragend", this.handleTopDragEndCapture, true);
            t.removeEventListener("dragenter", this.handleTopDragEnter);
            t.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
            t.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
            t.removeEventListener("dragover", this.handleTopDragOver);
            t.removeEventListener("dragover", this.handleTopDragOverCapture, true);
            t.removeEventListener("drop", this.handleTopDrop);
            t.removeEventListener("drop", this.handleTopDropCapture, true)
          }
        }, {
          key: "connectDragPreview",
          value: function e(t, r, n) {
            var a = this;
            this.sourcePreviewNodeOptions[t] = n;
            this.sourcePreviewNodes[t] = r;
            return function() {
              delete a.sourcePreviewNodes[t];
              delete a.sourcePreviewNodeOptions[t]
            }
          }
        }, {
          key: "connectDragSource",
          value: function e(t, r, n) {
            var a = this;
            this.sourceNodes[t] = r;
            this.sourceNodeOptions[t] = n;
            var o = function e(r) {
              return a.handleDragStart(r, t)
            };
            var i = function e(r) {
              return a.handleSelectStart(r, t)
            };
            r.setAttribute("draggable", true);
            r.addEventListener("dragstart", o);
            r.addEventListener("selectstart", i);
            return function() {
              delete a.sourceNodes[t];
              delete a.sourceNodeOptions[t];
              r.removeEventListener("dragstart", o);
              r.removeEventListener("selectstart", i);
              r.setAttribute("draggable", false)
            }
          }
        }, {
          key: "connectDropTarget",
          value: function e(t, r) {
            var n = this;
            var a = function e(r) {
              return n.handleDragEnter(r, t)
            };
            var o = function e(r) {
              return n.handleDragOver(r, t)
            };
            var i = function e(r) {
              return n.handleDrop(r, t)
            };
            r.addEventListener("dragenter", a);
            r.addEventListener("dragover", o);
            r.addEventListener("drop", i);
            return function() {
              r.removeEventListener("dragenter", a);
              r.removeEventListener("dragover", o);
              r.removeEventListener("drop", i)
            }
          }
        }, {
          key: "getCurrentSourceNodeOptions",
          value: function e() {
            var t = this.monitor.getSourceId();
            var r = this.sourceNodeOptions[t];
            return (0, o.default)(r || {}, {
              dropEffect: this.altKeyPressed ? "copy" : "move"
            })
          }
        }, {
          key: "getCurrentDropEffect",
          value: function e() {
            if (this.isDraggingNativeItem()) {
              return "copy"
            }
            return this.getCurrentSourceNodeOptions().dropEffect
          }
        }, {
          key: "getCurrentSourcePreviewNodeOptions",
          value: function e() {
            var t = this.monitor.getSourceId();
            var r = this.sourcePreviewNodeOptions[t];
            return (0, o.default)(r || {}, {
              anchorX: .5,
              anchorY: .5,
              captureDraggingState: false
            })
          }
        }, {
          key: "getSourceClientOffset",
          value: function e(t) {
            return (0, d.getNodeClientOffset)(this.sourceNodes[t])
          }
        }, {
          key: "isDraggingNativeItem",
          value: function e() {
            var t = this.monitor.getItemType();
            return Object.keys(v).some(function(e) {
              return v[e] === t
            })
          }
        }, {
          key: "beginDragNativeItem",
          value: function e(t) {
            this.clearCurrentDragSourceNode();
            var r = (0, f.createNativeDragSource)(t);
            this.currentNativeSource = new r;
            this.currentNativeHandle = this.registry.addSource(t, this.currentNativeSource);
            this.actions.beginDrag([this.currentNativeHandle]);
            if ((0, c.isFirefox)()) {
              this.window.addEventListener("mouseover", this.asyncEndDragNativeItem, true)
            }
          }
        }, {
          key: "asyncEndDragNativeItem",
          value: function e() {
            this.asyncEndDragFrameId = this.window.requestAnimationFrame(this.endDragNativeItem);
            if ((0, c.isFirefox)()) {
              this.window.removeEventListener("mouseover", this.asyncEndDragNativeItem, true);
              this.enterLeaveCounter.reset()
            }
          }
        }, {
          key: "endDragNativeItem",
          value: function e() {
            if (!this.isDraggingNativeItem()) {
              return
            }
            this.actions.endDrag();
            this.registry.removeSource(this.currentNativeHandle);
            this.currentNativeHandle = null;
            this.currentNativeSource = null
          }
        }, {
          key: "endDragIfSourceWasRemovedFromDOM",
          value: function e() {
            var t = this.currentDragSourceNode;
            if (document.body.contains(t)) {
              return
            }
            if (this.clearCurrentDragSourceNode()) {
              this.actions.endDrag()
            }
          }
        }, {
          key: "setCurrentDragSourceNode",
          value: function e(t) {
            this.clearCurrentDragSourceNode();
            this.currentDragSourceNode = t;
            this.currentDragSourceNodeOffset = (0, d.getNodeClientOffset)(t);
            this.currentDragSourceNodeOffsetChanged = false;
            this.window.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true)
          }
        }, {
          key: "clearCurrentDragSourceNode",
          value: function e() {
            if (this.currentDragSourceNode) {
              this.currentDragSourceNode = null;
              this.currentDragSourceNodeOffset = null;
              this.currentDragSourceNodeOffsetChanged = false;
              this.window.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
              return true
            }
            return false
          }
        }, {
          key: "checkIfCurrentDragSourceRectChanged",
          value: function e() {
            var t = this.currentDragSourceNode;
            if (!t) {
              return false
            }
            if (this.currentDragSourceNodeOffsetChanged) {
              return true
            }
            this.currentDragSourceNodeOffsetChanged = !(0, s.default)((0, d.getNodeClientOffset)(t), this.currentDragSourceNodeOffset);
            return this.currentDragSourceNodeOffsetChanged
          }
        }, {
          key: "handleTopDragStartCapture",
          value: function e() {
            this.clearCurrentDragSourceNode();
            this.dragStartSourceIds = []
          }
        }, {
          key: "handleDragStart",
          value: function e(t, r) {
            this.dragStartSourceIds.unshift(r)
          }
        }, {
          key: "handleTopDragStart",
          value: function e(t) {
            var r = this;
            var n = this.dragStartSourceIds;
            this.dragStartSourceIds = null;
            var a = (0, d.getEventClientOffset)(t);
            this.actions.beginDrag(n, {
              publishSource: false,
              getSourceClientOffset: this.getSourceClientOffset,
              clientOffset: a
            });
            var o = t.dataTransfer;
            var i = (0, f.matchNativeItemType)(o);
            if (this.monitor.isDragging()) {
              if (typeof o.setDragImage === "function") {
                var s = this.monitor.getSourceId();
                var u = this.sourceNodes[s];
                var l = this.sourcePreviewNodes[s] || u;
                var c = this.getCurrentSourcePreviewNodeOptions(),
                  p = c.anchorX,
                  v = c.anchorY;
                var h = {
                  anchorX: p,
                  anchorY: v
                };
                var y = (0, d.getDragPreviewOffset)(u, l, a, h);
                o.setDragImage(l, y.x, y.y)
              }
              try {
                o.setData("application/json", {})
              } catch (e) {}
              this.setCurrentDragSourceNode(t.target);
              var m = this.getCurrentSourcePreviewNodeOptions(),
                g = m.captureDraggingState;
              if (!g) {
                setTimeout(function() {
                  return r.actions.publishDragSource()
                })
              } else {
                this.actions.publishDragSource()
              }
            } else if (i) {
              this.beginDragNativeItem(i)
            } else if (!o.types && (!t.target.hasAttribute || !t.target.hasAttribute("draggable"))) {
              return
            } else {
              t.preventDefault()
            }
          }
        }, {
          key: "handleTopDragEndCapture",
          value: function e() {
            if (this.clearCurrentDragSourceNode()) {
              this.actions.endDrag()
            }
          }
        }, {
          key: "handleTopDragEnterCapture",
          value: function e(t) {
            this.dragEnterTargetIds = [];
            var r = this.enterLeaveCounter.enter(t.target);
            if (!r || this.monitor.isDragging()) {
              return
            }
            var n = t.dataTransfer;
            var a = (0, f.matchNativeItemType)(n);
            if (a) {
              this.beginDragNativeItem(a)
            }
          }
        }, {
          key: "handleDragEnter",
          value: function e(t, r) {
            this.dragEnterTargetIds.unshift(r)
          }
        }, {
          key: "handleTopDragEnter",
          value: function e(t) {
            var r = this;
            var n = this.dragEnterTargetIds;
            this.dragEnterTargetIds = [];
            if (!this.monitor.isDragging()) {
              return
            }
            this.altKeyPressed = t.altKey;
            if (!(0, c.isFirefox)()) {
              this.actions.hover(n, {
                clientOffset: (0, d.getEventClientOffset)(t)
              })
            }
            var a = n.some(function(e) {
              return r.monitor.canDropOnTarget(e)
            });
            if (a) {
              t.preventDefault();
              t.dataTransfer.dropEffect = this.getCurrentDropEffect()
            }
          }
        }, {
          key: "handleTopDragOverCapture",
          value: function e() {
            this.dragOverTargetIds = []
          }
        }, {
          key: "handleDragOver",
          value: function e(t, r) {
            this.dragOverTargetIds.unshift(r)
          }
        }, {
          key: "handleTopDragOver",
          value: function e(t) {
            var r = this;
            var n = this.dragOverTargetIds;
            this.dragOverTargetIds = [];
            if (!this.monitor.isDragging()) {
              t.preventDefault();
              t.dataTransfer.dropEffect = "none";
              return
            }
            this.altKeyPressed = t.altKey;
            this.actions.hover(n, {
              clientOffset: (0, d.getEventClientOffset)(t)
            });
            var a = n.some(function(e) {
              return r.monitor.canDropOnTarget(e)
            });
            if (a) {
              t.preventDefault();
              t.dataTransfer.dropEffect = this.getCurrentDropEffect()
            } else if (this.isDraggingNativeItem()) {
              t.preventDefault();
              t.dataTransfer.dropEffect = "none"
            } else if (this.checkIfCurrentDragSourceRectChanged()) {
              t.preventDefault();
              t.dataTransfer.dropEffect = "move"
            }
          }
        }, {
          key: "handleTopDragLeaveCapture",
          value: function e(t) {
            if (this.isDraggingNativeItem()) {
              t.preventDefault()
            }
            var r = this.enterLeaveCounter.leave(t.target);
            if (!r) {
              return
            }
            if (this.isDraggingNativeItem()) {
              this.endDragNativeItem()
            }
          }
        }, {
          key: "handleTopDropCapture",
          value: function e(t) {
            this.dropTargetIds = [];
            t.preventDefault();
            if (this.isDraggingNativeItem()) {
              this.currentNativeSource.mutateItemByReadingDataTransfer(t.dataTransfer)
            }
            this.enterLeaveCounter.reset()
          }
        }, {
          key: "handleDrop",
          value: function e(t, r) {
            this.dropTargetIds.unshift(r)
          }
        }, {
          key: "handleTopDrop",
          value: function e(t) {
            var r = this.dropTargetIds;
            this.dropTargetIds = [];
            this.actions.hover(r, {
              clientOffset: (0, d.getEventClientOffset)(t)
            });
            this.actions.drop({
              dropEffect: this.getCurrentDropEffect()
            });
            if (this.isDraggingNativeItem()) {
              this.endDragNativeItem()
            } else {
              this.endDragIfSourceWasRemovedFromDOM()
            }
          }
        }, {
          key: "handleSelectStart",
          value: function e(t) {
            var r = t.target;
            if (typeof r.dragDrop !== "function") {
              return
            }
            if (r.tagName === "INPUT" || r.tagName === "SELECT" || r.tagName === "TEXTAREA" || r.isContentEditable) {
              return
            }
            t.preventDefault();
            r.dragDrop()
          }
        }, {
          key: "window",
          get: function e() {
            if (this.context && this.context.window) {
              return this.context.window
            } else if (typeof window !== "undefined") {
              return window
            }
            return undefined
          }
        }]);
        return e
      }();
      t.default = g
    }, function(e, t, r) {
      var n = r(201),
        a = r(257),
        o = r(199),
        i = r(265);
      var s = o(function(e) {
        e.push(undefined, i);
        return n(a, undefined, e)
      });
      e.exports = s
    }, function(e, t, r) {
      var n = r(258),
        a = r(261),
        o = r(262);
      var i = a(function(e, t, r, a) {
        n(t, o(t), e, a)
      });
      e.exports = i
    }, function(e, t, r) {
      var n = r(259),
        a = r(260);

      function o(e, t, r, o) {
        var i = !r;
        r || (r = {});
        var s = -1,
          u = t.length;
        while (++s < u) {
          var l = t[s];
          var c = o ? o(r[l], e[l], l, r, e) : undefined;
          if (c === undefined) {
            c = e[l]
          }
          if (i) {
            a(r, l, c)
          } else {
            n(r, l, c)
          }
        }
        return r
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(260),
        a = r(18);
      var o = Object.prototype;
      var i = o.hasOwnProperty;

      function s(e, t, r) {
        var o = e[t];
        if (!(i.call(e, t) && a(o, r)) || r === undefined && !(t in e)) {
          n(e, t, r)
        }
      }
      e.exports = s
    }, function(e, t, r) {
      var n = r(205);

      function a(e, t, r) {
        if (t == "__proto__" && n) {
          n(e, t, {
            configurable: true,
            enumerable: true,
            value: r,
            writable: true
          })
        } else {
          e[t] = r
        }
      }
      e.exports = a
    }, function(e, t, r) {
      var n = r(199),
        a = r(152);

      function o(e) {
        return n(function(t, r) {
          var n = -1,
            o = r.length,
            i = o > 1 ? r[o - 1] : undefined,
            s = o > 2 ? r[2] : undefined;
          i = e.length > 3 && typeof i == "function" ? (o--, i) : undefined;
          if (s && a(r[0], r[1], s)) {
            i = o < 3 ? undefined : i;
            o = 1
          }
          t = Object(t);
          while (++n < o) {
            var u = r[n];
            if (u) {
              e(t, u, n, i)
            }
          }
          return t
        })
      }
      e.exports = o
    }, function(e, t, r) {
      var n = r(78),
        a = r(263),
        o = r(96);

      function i(e) {
        return o(e) ? n(e, true) : a(e)
      }
      e.exports = i
    }, function(e, t, r) {
      var n = r(37),
        a = r(93),
        o = r(264);
      var i = Object.prototype;
      var s = i.hasOwnProperty;

      function u(e) {
        if (!n(e)) {
          return o(e)
        }
        var t = a(e),
          r = [];
        for (var i in e) {
          if (!(i == "constructor" && (t || !s.call(e, i)))) {
            r.push(i)
          }
        }
        return r
      }
      e.exports = u
    }, function(e, t) {
      function r(e) {
        var t = [];
        if (e != null) {
          for (var r in Object(e)) {
            t.push(r)
          }
        }
        return t
      }
      e.exports = r
    }, function(e, t, r) {
      var n = r(18);
      var a = Object.prototype;
      var o = a.hasOwnProperty;

      function i(e, t, r, i) {
        if (e === undefined || n(e, a[r]) && !o.call(i, r)) {
          return t
        }
        return e
      }
      e.exports = i
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = r;

      function r(e, t) {
        if (e === t) {
          return true
        }
        var r = Object.keys(e);
        var n = Object.keys(t);
        if (r.length !== n.length) {
          return false
        }
        var a = Object.prototype.hasOwnProperty;
        for (var o = 0; o < r.length; o += 1) {
          if (!a.call(t, r[o]) || e[r[o]] !== t[r[o]]) {
            return false
          }
          var i = e[r[o]];
          var s = t[r[o]];
          if (i !== s) {
            return false
          }
        }
        return true
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(268);
      var o = u(a);
      var i = r(192);
      var s = u(i);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var c = function() {
        function e() {
          l(this, e);
          this.entered = []
        }
        n(e, [{
          key: "enter",
          value: function e(t) {
            var r = this.entered.length;
            var n = function e(r) {
              return document.documentElement.contains(r) && (!r.contains || r.contains(t))
            };
            this.entered = (0, o.default)(this.entered.filter(n), [t]);
            return r === 0 && this.entered.length > 0
          }
        }, {
          key: "leave",
          value: function e(t) {
            var r = this.entered.length;
            this.entered = (0, s.default)(this.entered.filter(function(e) {
              return document.documentElement.contains(e)
            }), t);
            return r > 0 && this.entered.length === 0
          }
        }, {
          key: "reset",
          value: function e() {
            this.entered = []
          }
        }]);
        return e
      }();
      t.default = c
    }, function(e, t, r) {
      var n = r(130),
        a = r(199),
        o = r(213),
        i = r(207);
      var s = a(function(e) {
        return o(n(e, 1, i, true))
      });
      e.exports = s
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.isSafari = t.isFirefox = undefined;
      var n = r(113);
      var a = o(n);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var i = t.isFirefox = (0, a.default)(function() {
        return /firefox/i.test(navigator.userAgent)
      });
      var s = t.isSafari = (0, a.default)(function() {
        return Boolean(window.safari)
      })
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.getNodeClientOffset = u;
      t.getEventClientOffset = l;
      t.getDragPreviewOffset = c;
      var n = r(269);
      var a = r(271);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = 1;

      function u(e) {
        var t = e.nodeType === s ? e : e.parentElement;
        if (!t) {
          return null
        }
        var r = t.getBoundingClientRect(),
          n = r.top,
          a = r.left;
        return {
          x: a,
          y: n
        }
      }

      function l(e) {
        return {
          x: e.clientX,
          y: e.clientY
        }
      }

      function c(e, t, r, a) {
        var i = t.nodeName === "IMG" && ((0, n.isFirefox)() || !document.documentElement.contains(t));
        var s = i ? e : t;
        var l = u(s);
        var c = {
          x: r.x - l.x,
          y: r.y - l.y
        };
        var d = e.offsetWidth,
          f = e.offsetHeight;
        var p = a.anchorX,
          v = a.anchorY;
        var h = i ? t.width : d;
        var y = i ? t.height : f;
        if ((0, n.isSafari)() && i) {
          y /= window.devicePixelRatio;
          h /= window.devicePixelRatio
        }
        var m = new o.default([0, .5, 1], [c.x, c.x / d * h, c.x + h - d]);
        var g = new o.default([0, .5, 1], [c.y, c.y / f * y, c.y + y - f]);
        var _ = m.interpolate(p);
        var b = g.interpolate(v);
        if ((0, n.isSafari)() && i) {
          b += (window.devicePixelRatio - 1) * y
        }
        return {
          x: _,
          y: b
        }
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();

      function n(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }
      var a = function() {
        function e(t, r) {
          n(this, e);
          var a = t.length;
          var o = [];
          for (var i = 0; i < a; i++) {
            o.push(i)
          }
          o.sort(function(e, r) {
            return t[e] < t[r] ? -1 : 1
          });
          var s = [];
          var u = [];
          var l = [];
          var c = void 0;
          var d = void 0;
          for (var f = 0; f < a - 1; f++) {
            c = t[f + 1] - t[f];
            d = r[f + 1] - r[f];
            u.push(c);
            s.push(d);
            l.push(d / c)
          }
          var p = [l[0]];
          for (var v = 0; v < u.length - 1; v++) {
            var h = l[v];
            var y = l[v + 1];
            if (h * y <= 0) {
              p.push(0)
            } else {
              c = u[v];
              var m = u[v + 1];
              var g = c + m;
              p.push(3 * g / ((g + m) / h + (g + c) / y))
            }
          }
          p.push(l[l.length - 1]);
          var _ = [];
          var b = [];
          var k = void 0;
          for (var w = 0; w < p.length - 1; w++) {
            k = l[w];
            var T = p[w];
            var C = 1 / u[w];
            var O = T + p[w + 1] - k - k;
            _.push((k - T - O) * C);
            b.push(O * C * C)
          }
          this.xs = t;
          this.ys = r;
          this.c1s = p;
          this.c2s = _;
          this.c3s = b
        }
        r(e, [{
          key: "interpolate",
          value: function e(t) {
            var r = this.xs,
              n = this.ys,
              a = this.c1s,
              o = this.c2s,
              i = this.c3s;
            var s = r.length - 1;
            if (t === r[s]) {
              return n[s]
            }
            var u = 0;
            var l = i.length - 1;
            var c = void 0;
            while (u <= l) {
              c = Math.floor(.5 * (u + l));
              var d = r[c];
              if (d < t) {
                u = c + 1
              } else if (d > t) {
                l = c - 1
              } else {
                return n[c]
              }
            }
            s = Math.max(0, l);
            var f = t - r[s];
            var p = f * f;
            return n[s] + a[s] * f + o[s] * p + i[s] * f * p
          }
        }]);
        return e
      }();
      t.default = a
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a;
      t.createNativeDragSource = p;
      t.matchNativeItemType = v;
      var o = r(273);
      var i = s(o);

      function s(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function u(e, t) {
        for (var r in t) {
          var n = t[r];
          n.configurable = n.enumerable = true;
          if ("value" in n) n.writable = true;
          Object.defineProperty(e, r, n)
        }
        return e
      }

      function l(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function c(e, t, r) {
        if (t in e) {
          Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          e[t] = r
        }
        return e
      }

      function d(e, t, r) {
        var n = t.reduce(function(t, r) {
          return t || e.getData(r)
        }, null);
        return n != null ? n : r
      }
      var f = (a = {}, c(a, i.FILE, {
        exposeProperty: "files",
        matchesTypes: ["Files"],
        getData: function e(t) {
          return Array.prototype.slice.call(t.files)
        }
      }), c(a, i.URL, {
        exposeProperty: "urls",
        matchesTypes: ["Url", "text/uri-list"],
        getData: function e(t, r) {
          return d(t, r, "").split("\n")
        }
      }), c(a, i.TEXT, {
        exposeProperty: "text",
        matchesTypes: ["Text", "text/plain"],
        getData: function e(t, r) {
          return d(t, r, "")
        }
      }), a);

      function p(e) {
        var t = f[e],
          r = t.exposeProperty,
          a = t.matchesTypes,
          o = t.getData;
        return function() {
          function e() {
            var t, n;
            l(this, e);
            this.item = (t = {}, n = {}, n[r] = n[r] || {}, n[r].get = function() {
              console.warn("Browser doesn't allow reading \"" + r + '" until the drop event.');
              return null
            }, u(t, n), t)
          }
          n(e, [{
            key: "mutateItemByReadingDataTransfer",
            value: function e(t) {
              delete this.item[r];
              this.item[r] = o(t, a)
            }
          }, {
            key: "canDrag",
            value: function e() {
              return true
            }
          }, {
            key: "beginDrag",
            value: function e() {
              return this.item
            }
          }, {
            key: "isDragging",
            value: function e(t, r) {
              return r === t.getSourceId()
            }
          }, {
            key: "endDrag",
            value: function e() {}
          }]);
          return e
        }()
      }

      function v(e) {
        var t = Array.prototype.slice.call(e.types || []);
        return Object.keys(f).filter(function(e) {
          var r = f[e].matchesTypes;
          return r.some(function(e) {
            return t.indexOf(e) > -1
          })
        })[0] || null
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = t.FILE = "__NATIVE_FILE__";
      var n = t.URL = "__NATIVE_URL__";
      var a = t.TEXT = "__NATIVE_TEXT__"
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.default = n;
      var r = void 0;

      function n() {
        if (!r) {
          r = new Image;
          r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        }
        return r
      }
    }, function(e, t, r) {
      "use strict";
      t.__esModule = true;
      t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = undefined;
      var n = r(180);
      var a = h(n);
      var o = r(276);
      var i = h(o);
      var s = r(278);
      var u = h(s);
      var l = r(279);
      var c = h(l);
      var d = r(280);
      var f = h(d);
      var p = r(277);
      var v = h(p);

      function h(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function y() {}
      if (false) {
        (0, v["default"])("You are currently using minified code outside of NODE_ENV === 'production'. " + "This means that you are running a slower development build of Redux. " + "You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify " + "or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) " + "to ensure you have the correct code for your production build.")
      }
      t.createStore = a["default"];
      t.combineReducers = i["default"];
      t.bindActionCreators = u["default"];
      t.applyMiddleware = c["default"];
      t.compose = f["default"]
    }, function(e, t, r) {
      "use strict";
      t.__esModule = true;
      t["default"] = f;
      var n = r(180);
      var a = r(181);
      var o = u(a);
      var i = r(277);
      var s = u(i);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l(e, t) {
        var r = t && t.type;
        var n = r && '"' + r.toString() + '"' || "an action";
        return "Given action " + n + ', reducer "' + e + '" returned undefined. ' + "To ignore an action, you must explicitly return the previous state."
      }

      function c(e, t, r, a) {
        var i = Object.keys(t);
        var s = r && r.type === n.ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
        if (i.length === 0) {
          return "Store does not have a valid reducer. Make sure the argument passed " + "to combineReducers is an object whose values are reducers."
        }
        if (!(0, o["default"])(e)) {
          return "The " + s + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + i.join('", "') + '"')
        }
        var u = Object.keys(e).filter(function(e) {
          return !t.hasOwnProperty(e) && !a[e]
        });
        u.forEach(function(e) {
          a[e] = true
        });
        if (u.length > 0) {
          return "Unexpected " + (u.length > 1 ? "keys" : "key") + " " + ('"' + u.join('", "') + '" found in ' + s + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + i.join('", "') + '". Unexpected keys will be ignored.')
        }
      }

      function d(e) {
        Object.keys(e).forEach(function(t) {
          var r = e[t];
          var a = r(undefined, {
            type: n.ActionTypes.INIT
          });
          if (typeof a === "undefined") {
            throw new Error('Reducer "' + t + '" returned undefined during initialization. ' + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined.")
          }
          var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if (typeof r(undefined, {
              type: o
            }) === "undefined") {
            throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined.")
          }
        })
      }

      function f(e) {
        var t = Object.keys(e);
        var r = {};
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          if (false) {
            if (typeof e[a] === "undefined") {
              (0, s["default"])('No reducer provided for key "' + a + '"')
            }
          }
          if (typeof e[a] === "function") {
            r[a] = e[a]
          }
        }
        var o = Object.keys(r);
        if (false) {
          var i = {}
        }
        var u;
        try {
          d(r)
        } catch (e) {
          u = e
        }
        return function e() {
          var t = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
          var n = arguments[1];
          if (u) {
            throw u
          }
          if (false) {
            var a = c(t, r, n, i);
            if (a) {
              (0, s["default"])(a)
            }
          }
          var d = false;
          var f = {};
          for (var p = 0; p < o.length; p++) {
            var v = o[p];
            var h = r[v];
            var y = t[v];
            var m = h(y, n);
            if (typeof m === "undefined") {
              var g = l(v, n);
              throw new Error(g)
            }
            f[v] = m;
            d = d || m !== y
          }
          return d ? f : t
        }
      }
    }, function(e, t) {
      "use strict";
      t.__esModule = true;
      t["default"] = r;

      function r(e) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
          console.error(e)
        }
        try {
          throw new Error(e)
        } catch (e) {}
      }
    }, function(e, t) {
      "use strict";
      t.__esModule = true;
      t["default"] = n;

      function r(e, t) {
        return function() {
          return t(e.apply(undefined, arguments))
        }
      }

      function n(e, t) {
        if (typeof e === "function") {
          return r(e, t)
        }
        if (typeof e !== "object" || e === null) {
          throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + ". " + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?')
        }
        var n = Object.keys(e);
        var a = {};
        for (var o = 0; o < n.length; o++) {
          var i = n[o];
          var s = e[i];
          if (typeof s === "function") {
            a[i] = r(s, t)
          }
        }
        return a
      }
    }, function(e, t, r) {
      "use strict";
      t.__esModule = true;
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      t["default"] = s;
      var a = r(280);
      var o = i(a);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r]
        }
        return function(e) {
          return function(r, a, i) {
            var s = e(r, a, i);
            var u = s.dispatch;
            var l = [];
            var c = {
              getState: s.getState,
              dispatch: function e(t) {
                return u(t)
              }
            };
            l = t.map(function(e) {
              return e(c)
            });
            u = o["default"].apply(undefined, l)(s.dispatch);
            return n({}, s, {
              dispatch: u
            })
          }
        }
      }
    }, function(e, t) {
      "use strict";
      t.__esModule = true;
      t["default"] = r;

      function r() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
          t[r] = arguments[r]
        }
        if (t.length === 0) {
          return function(e) {
            return e
          }
        }
        if (t.length === 1) {
          return t[0]
        }
        var n = t[t.length - 1];
        var a = t.slice(0, -1);
        return function() {
          return a.reduceRight(function(e, t) {
            return t(e)
          }, n.apply(undefined, arguments))
        }
      }
    }, function(e, t, r) {
      var n = r(57);

      function a(e, t) {
        return n(e, t)
      }
      e.exports = a
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = y(a);
      var i = r(163);
      var s = y(i);
      var u = r(171);
      var l = r(2);
      var c = r(283);
      var d = y(c);
      var f = r(291);
      var p = y(f);
      var v = r(132);
      var h = r(284);

      function y(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function m(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function g(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function _(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var b = function(e) {
        _(t, e);

        function t(e) {
          m(this, t);
          var r = g(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r._onNewHazard = r._onNewHazard.bind(r);
          return r
        }
        n(t, [{
          key: "_onNewHazard",
          value: function e() {
            this.props.onNewHazard(this.props.task.identifier)
          }
        }, {
          key: "render",
          value: function e() {
            var t = this;
            var r = this.props,
              n = r.task,
              a = r.activeItem,
              i = r.category,
              u = r.connectDropTarget,
              c = r.connectDragPreview,
              f = r.connectDragSource;
            var v = n.hazards.map(function(e, r) {
              var a = t.props.activeItem.hazardId === e.uniqueId;
              return o.default.createElement(p.default, {
                store: t.props.store,
                key: e.uniqueId,
                isAllowed: t.props.isAllowed,
                hazard: e,
                category: i,
                showRisk: t.props.showRisk,
                taskIdentifier: n.identifier,
                onNewHazard: t._onNewHazard,
                onNewControlMeasure: t.props.onNewControlMeasure,
                active: a,
                onShowRiskModal: t.props.onShowRiskModal,
                onHideRiskModal: t.props.onHideRiskModal,
                total: n.hazards.length,
                index: r
              })
            });
            if (!n.hazards || !n.hazards.length) {
              v = o.default.createElement("div", {
                className: "task-step-hazard-row"
              }, o.default.createElement("div", {
                className: "task-step-hazard-wrapper"
              }, o.default.createElement("div", {
                className: "task-step-hazard"
              }, o.default.createElement("div", {
                className: "new-item-button-wrapper"
              }, o.default.createElement("button", {
                className: "btn btn-primary btn-sm new-item-button new-hazard-button",
                onClick: this._onNewHazard,
                disabled: !this.props.task.description
              }, o.default.createElement("span", {
                className: "btn-icon glyphicon glyphicon-plus"
              }), l.translator.translate("label_specify_hazards"))))))
            }
            var h = (0, s.default)("task-step", {
              "is-active": n.identifier === a.taskId,
              "is-dragging": this.props.isDragging
            });
            return c(u(o.default.createElement("div", {
              key: this.props.task.identifier,
              ref: function e(r) {
                t._nodeRef = r
              },
              className: h,
              "data-scroll-id": this.props.task.identifier
            }, o.default.createElement(d.default, {
              task: this.props.task,
              store: this.props.store,
              index: this.props.index,
              maxIndex: this.props.maxIndex,
              connectDragSource: f,
              onSetActiveTask: this.props.onSetActiveTask
            }), o.default.createElement("div", {
              className: "task-step-body"
            }, v))))
          }
        }]);
        return t
      }(o.default.Component);
      var k = {
        hover: function e(t, r, n) {
          var a = r.getItem().index;
          var o = t.task,
            i = t.index;
          var s = i;
          if (a === s) return;
          var u = l.dnd.hasCrossedMiddle({
            dragIndex: a,
            hoverIndex: s,
            hoverBoundingRect: n._nodeRef.getBoundingClientRect(),
            clientOffset: r.getClientOffset()
          });
          if (u) {
            r.getItem().index = s;
            t.store.dispatch((0, h.reorderTask)(o, s, a))
          }
        }
      };
      var w = {
        beginDrag: function e(t) {
          return {
            index: t.index
          }
        }
      };
      b.propTypes = {
        activeItem: a.PropTypes.instanceOf(v.ActiveItem).isRequired,
        task: a.PropTypes.instanceOf(v.TaskStep).isRequired,
        store: a.PropTypes.shape({
          dispatch: a.PropTypes.func.isRequired
        }).isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        isAllowed: a.PropTypes.func.isRequired,
        onNewHazard: a.PropTypes.func.isRequired,
        onSetActiveTask: a.PropTypes.func.isRequired,
        onNewControlMeasure: a.PropTypes.func.isRequired,
        onShowRiskModal: a.PropTypes.func.isRequired,
        onHideRiskModal: a.PropTypes.func.isRequired,
        index: a.PropTypes.number.isRequired,
        maxIndex: a.PropTypes.number.isRequired,
        category: a.PropTypes.string.isRequired,
        connectDragSource: a.PropTypes.func.isRequired,
        connectDropTarget: a.PropTypes.func.isRequired,
        connectDragPreview: a.PropTypes.func.isRequired,
        isDragging: a.PropTypes.bool.isRequired
      };
      t.default = (0, u.DragSource)(l.dnd.types.TASKSTEP, w, l.dnd.connectSource)((0, u.DropTarget)(l.dnd.types.TASKSTEP, k, l.dnd.connectTarget)(b))
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = f(a);
      var i = r(163);
      var s = f(i);
      var u = r(169);
      var l = r(2);
      var c = r(132);
      var d = r(284);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function v(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function h(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var y = function e(t) {
        setTimeout(function() {
          var e = t;
          e.selectionStart = t.value.length;
          e.focus()
        }, 10)
      };
      var m = function(e) {
        h(t, e);

        function t(e) {
          p(this, t);
          var r = v(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.state = {
            isEditingDescription: false,
            isEditingNumber: false,
            description: r.props.task.description,
            number: r.props.task.number,
            showConfirmModal: false
          };
          r._handleBodyClick = r._handleBodyClick.bind(r);
          r._onChangeStepOrderUp = r._onChangeStepOrderUp.bind(r);
          r._onChangeStepOrderDown = r._onChangeStepOrderDown.bind(r);
          r._onNumberInput = r._onNumberInput.bind(r);
          r._onKeyPress = r._onKeyPress.bind(r);
          r._saveChanges = r._saveChanges.bind(r);
          r._onDescriptionInput = r._onDescriptionInput.bind(r);
          r._onTaskRemove = r._onTaskRemove.bind(r);
          r._reorderStep = r._reorderStep.bind(r);
          r._onConfirmTaskRemove = r._onConfirmTaskRemove.bind(r);
          r._onHideConfirmModal = r._onHideConfirmModal.bind(r);
          r._onClickDescription = r._onClickDescription.bind(r);
          r._onClickNumber = r._onClickNumber.bind(r);
          r._onHighlightTask = r._onHighlightTask.bind(r);
          return r
        }
        n(t, [{
          key: "componentDidMount",
          value: function e() {
            if (!this.state.description.length) {
              this._onClickDescription()
            }
          }
        }, {
          key: "componentWillReceiveProps",
          value: function e(t) {
            this.setState({
              number: t.task.number,
              description: t.task.description
            })
          }
        }, {
          key: "componentWillUnmount",
          value: function e() {
            this._removeBodyClickListener()
          }
        }, {
          key: "_addBodyClickListener",
          value: function e() {
            document.body.addEventListener("click", this._handleBodyClick)
          }
        }, {
          key: "_removeBodyClickListener",
          value: function e() {
            document.body.removeEventListener("click", this._handleBodyClick)
          }
        }, {
          key: "_handleBodyClick",
          value: function e(t) {
            var r = this.state,
              n = r.isEditingDescription,
              a = r.isEditingNumber;
            var o = null;
            if (n) {
              o = this._descriptionInputRef
            } else if (a) {
              o = this._numberInputRef
            }
            if (!o) return;
            var i = t.target;
            while (i) {
              if (o === i) return;
              i = i.parentNode
            }
            this._saveChanges()
          }
        }, {
          key: "_onClickNumber",
          value: function e() {
            var t = this;
            this.setState({
              isEditingNumber: true
            }, function() {
              t._onHighlightTask();
              t._addBodyClickListener();
              setTimeout(function() {
                t._numberInputRef.focus()
              }, 10)
            })
          }
        }, {
          key: "_onClickDescription",
          value: function e() {
            var t = this;
            this.setState({
              isEditingDescription: true
            }, function() {
              y(t._descriptionInputRef);
              t._addBodyClickListener()
            })
          }
        }, {
          key: "_onHighlightTask",
          value: function e() {
            var t = this.props,
              r = t.onSetActiveTask,
              n = t.task;
            r(n.identifier)
          }
        }, {
          key: "_descriptionValid",
          value: function e() {
            return this.state.description.trim().length > 0
          }
        }, {
          key: "_numberValid",
          value: function e() {
            return ("" + this.state.number).trim().length > 0
          }
        }, {
          key: "_formValid",
          value: function e() {
            return this._descriptionValid() && this._numberValid()
          }
        }, {
          key: "_saveChanges",
          value: function e() {
            if (this._formValid()) {
              var t = this.state,
                r = t.isEditingDescription,
                n = t.isEditingNumber;
              var a = this.props,
                o = a.store,
                i = a.task;
              if (r) {
                this.setState({
                  isEditingDescription: false
                });
                if (i.description !== this.state.description) {
                  o.dispatch((0, d.updateTask)(i, {
                    description: this.state.description
                  }))
                }
              }
              if (n) {
                this.setState({
                  isEditingNumber: false
                });
                if (i.number !== this.state.number) {
                  var s = Math.max(this.state.number - 1, 0);
                  this._reorderStep(s)
                }
              }
              this.props.store.dispatch((0, d.resetActiveItem)());
              this._removeBodyClickListener()
            }
          }
        }, {
          key: "_reorderStep",
          value: function e(t) {
            var r = this.props,
              n = r.task,
              a = r.index,
              o = r.store;
            o.dispatch((0, d.reorderTask)(n, a, t))
          }
        }, {
          key: "_onChangeStepOrderUp",
          value: function e() {
            this._reorderStep(this.props.index - 1)
          }
        }, {
          key: "_onChangeStepOrderDown",
          value: function e() {
            this._reorderStep(this.props.index + 1)
          }
        }, {
          key: "_onTaskRemove",
          value: function e() {
            var t = this.props,
              r = t.store,
              n = t.task;
            r.dispatch((0, d.removeTask)(n.identifier));
            if (r.getState().tasks.length === 0 || r.getState().activeItem.taskId === n.identifier) {
              r.dispatch((0, d.resetActiveItem)())
            }
          }
        }, {
          key: "_onConfirmTaskRemove",
          value: function e() {
            this.setState({
              showConfirmModal: true
            })
          }
        }, {
          key: "_onHideConfirmModal",
          value: function e() {
            this.setState({
              showConfirmModal: false
            })
          }
        }, {
          key: "_renderTaskHeaderButtons",
          value: function e() {
            var t = this.props.task.hazards;
            var r = t && t.length ? this._onConfirmTaskRemove : this._onTaskRemove;
            var n = this.state,
              a = n.isEditingDescription,
              i = n.isEditingNumber;
            if (a || i) {
              return o.default.createElement("div", {
                className: "step-header-buttons"
              }, o.default.createElement("button", {
                className: "btn btn-sm step-header-button glyphicon glyphicon-ok",
                onClick: this._saveChanges,
                disabled: !this._formValid(),
                title: l.translator.translate("tooltip_task_description_save")
              }), o.default.createElement("button", {
                className: "btn btn-sm step-header-button glyphicon glyphicon-trash btn-remove",
                title: l.translator.translate("tooltip_remove_task"),
                onClick: r
              }))
            }
            var s = this.props.maxIndex === 0 ? o.default.createElement("a", {
              disabled: true,
              className: "btn step-header-button glyphicon glyphicon-move btn-drag",
              title: l.translator.translate("tooltip_task_drag_to_reorder")
            }) : this.props.connectDragSource(o.default.createElement("a", {
              className: "btn step-header-button glyphicon glyphicon-move btn-drag",
              title: l.translator.translate("tooltip_task_drag_to_reorder")
            }));
            return o.default.createElement("div", {
              className: "step-header-buttons"
            }, o.default.createElement("button", {
              className: "btn btn-sm step-header-button glyphicon glyphicon-chevron-up",
              title: l.translator.translate("tooltip_move_up"),
              onClick: this._onChangeStepOrderUp,
              disabled: this.props.index === 0
            }), o.default.createElement("button", {
              className: "btn btn-sm step-header-button glyphicon glyphicon-chevron-down",
              title: l.translator.translate("tooltip_move_down"),
              onClick: this._onChangeStepOrderDown,
              disabled: this.props.index === this.props.maxIndex
            }), s, o.default.createElement("button", {
              className: "btn btn-sm step-header-button glyphicon glyphicon-trash btn-remove",
              title: l.translator.translate("tooltip_remove_task"),
              onClick: r
            }))
          }
        }, {
          key: "_onKeyPress",
          value: function e(t) {
            if (t.charCode === l.keyCodes.enter) {
              this._saveChanges()
            }
          }
        }, {
          key: "_renderTaskNumber",
          value: function e() {
            var t = this;
            if (!this.state.isEditingNumber) {
              var r = this._formValid();
              var n = (0, s.default)("step-header-number", {
                "is-editable": r
              });
              var a = r ? this._onClickNumber : null;
              return o.default.createElement("strong", {
                className: n,
                onClick: a
              }, "" + this.state.number, ".")
            }
            return o.default.createElement("input", {
              ref: function e(r) {
                t._numberInputRef = r
              },
              type: "number",
              min: "0",
              className: "form-control step-header-number",
              value: this.state.number,
              onKeyPress: this._onKeyPress,
              onBlur: this._saveChanges,
              onInput: this._onNumberInput,
              onChange: function e() {}
            })
          }
        }, {
          key: "_onNumberInput",
          value: function e(t) {
            this.setState({
              number: t.target.value
            })
          }
        }, {
          key: "_renderTaskDescription",
          value: function e() {
            var t = this;
            if (!this.state.isEditingDescription) {
              var r = this._formValid();
              var n = (0, s.default)("step-header-description", {
                "is-editable": r
              });
              var a = r ? this._onClickDescription : null;
              return o.default.createElement("span", {
                className: n,
                onClick: a
              }, this.state.description)
            }
            return o.default.createElement("input", {
              type: "text",
              ref: function e(r) {
                t._descriptionInputRef = r
              },
              onKeyPress: this._onKeyPress,
              className: "form-control step-header-description",
              maxLength: 255,
              value: this.state.description,
              onInput: this._onDescriptionInput,
              onBlur: this._saveChanges,
              onFocus: this._onHighlightTask,
              onChange: function e() {},
              placeholder: l.translator.translate("placeholder_task_description")
            })
          }
        }, {
          key: "_onDescriptionInput",
          value: function e(t) {
            this.setState({
              description: t.target.value
            })
          }
        }, {
          key: "render",
          value: function e() {
            return o.default.createElement("div", {
              className: "task-step-header"
            }, this._renderTaskNumber(), this._renderTaskDescription(), this._renderTaskHeaderButtons(), o.default.createElement(u.ConfirmModal, {
              className: "modal-stacked",
              show: this.state.showConfirmModal,
              onConfirm: this._onTaskRemove,
              onHide: this._onHideConfirmModal,
              onDeny: this._onHideConfirmModal,
              title: l.translator.translate("label_confirm_remove_task_modal_title")
            }, l.translator.translate("label_confirm_remove_task_modal_body")))
          }
        }]);
        return t
      }(o.default.Component);
      m.propTypes = {
        store: a.PropTypes.shape({
          dispatch: a.PropTypes.func.isRequired
        }).isRequired,
        task: a.PropTypes.instanceOf(c.TaskStep).isRequired,
        index: a.PropTypes.number.isRequired,
        maxIndex: a.PropTypes.number.isRequired,
        connectDragSource: a.PropTypes.func.isRequired,
        onSetActiveTask: a.PropTypes.func.isRequired
      };
      t.default = m
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(285);
      Object.keys(n).forEach(function(e) {
        if (e === "default" || e === "__esModule") return;
        Object.defineProperty(t, e, {
          enumerable: true,
          get: function t() {
            return n[e]
          }
        })
      });
      var a = r(287);
      Object.keys(a).forEach(function(e) {
        if (e === "default" || e === "__esModule") return;
        Object.defineProperty(t, e, {
          enumerable: true,
          get: function t() {
            return a[e]
          }
        })
      });
      var o = r(288);
      Object.keys(o).forEach(function(e) {
        if (e === "default" || e === "__esModule") return;
        Object.defineProperty(t, e, {
          enumerable: true,
          get: function t() {
            return o[e]
          }
        })
      });
      var i = r(289);
      Object.keys(i).forEach(function(e) {
        if (e === "default" || e === "__esModule") return;
        Object.defineProperty(t, e, {
          enumerable: true,
          get: function t() {
            return i[e]
          }
        })
      });
      var s = r(290);
      Object.keys(s).forEach(function(e) {
        if (e === "default" || e === "__esModule") return;
        Object.defineProperty(t, e, {
          enumerable: true,
          get: function t() {
            return s[e]
          }
        })
      })
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.reorderTask = t.removeTask = t.updateTask = t.addTask = t.setTasks = undefined;
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = r(132);
      var o = r(2);
      var i = r(286);
      var s = u(i);

      function u(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }
      var l = t.setTasks = function e(t) {
        return {
          type: s.SET_TASKS,
          tasks: t
        }
      };
      var c = t.addTask = function e(t) {
        var r = (0, o.getHighestNumber)(t) + 1;
        return {
          type: s.ADD_TASK,
          task: new a.TaskStep({
            number: r
          })
        }
      };
      var d = t.updateTask = function e(t, r) {
        var o = r.description;
        return {
          type: s.UPDATE_TASK,
          task: new a.TaskStep(n({}, t, {
            description: o
          }))
        }
      };
      var f = t.removeTask = function e(t) {
        return {
          type: s.REMOVE_TASK,
          taskId: t
        }
      };
      var p = t.reorderTask = function e(t, r, n) {
        return {
          type: s.REORDER_TASK,
          task: t,
          index: r,
          newIndex: n
        }
      }
    }, function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var r = t.SET_TASKS = "SET_TASKSTEPS";
      var n = t.ADD_TASK = "ADD_TASKSTEP";
      var a = t.UPDATE_TASK = "UPDATE_TASKSTEP";
      var o = t.REMOVE_TASK = "REMOVE_TASKSTEP";
      var i = t.REORDER_TASK = "REORDER_TASKSTEP";
      var s = t.ADD_HAZARD = "ADD_HAZARD";
      var u = t.REMOVE_HAZARD = "REMOVE_HAZARD";
      var l = t.UPDATE_HAZARD = "UPDATE_HAZARD";
      var c = t.UPDATE_HAZARD_RISK = "UPDATE_HAZARD_RISK";
      var d = t.REORDER_HAZARD = "REORDER_HAZARD";
      var f = t.ADD_CONTROL = "ADD_CONTROL";
      var p = t.REMOVE_CONTROL = "REMOVE_CONTROL";
      var v = t.UPDATE_CONTROL = "UPDATE_CONTROL";
      var h = t.REORDER_CONTROL = "REORDER_CONTROL";
      var y = t.UPDATE_ACTIVE_ITEM = "UPDATE_ACTIVE_ITEM";
      var m = t.SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";
      var g = t.RESET_ACTIVE_ITEM = "RESET_ACTIVE_ITEM";
      var _ = t.SET_CLEAN = "SET_CLEAN"
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.reorderHazard = t.updateHazardRisk = t.removeHazard = t.updateHazardDescription = t.addAvailableHazard = t.addHazard = undefined;
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = r(139);
      var o = p(a);
      var i = r(158);
      var s = p(i);
      var u = r(2);
      var l = r(132);
      var c = r(286);
      var d = f(c);

      function f(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var v = function e(t, r) {
        var n = (0, s.default)(t, {
          identifier: r
        });
        return (0, u.getHighestNumber)(n.hazards)
      };
      var h = function e(t) {
        var r = t.filter(function(e) {
          return e.isRequired
        }).map(function(e, t) {
          return new l.IdentifiedControlMeasure(n({}, e, {
            number: t + 1
          }))
        });
        return r
      };
      var y = t.addHazard = function e(t) {
        var r = t.taskId,
          n = t.tasks,
          a = t.description,
          i = t.hazardGroupCode,
          s = t.category,
          u = t.hazardTypeCode;
        var c = v(n, r) + 1;
        var f = new l.IdentifiedHazard({
          number: c,
          code: o.default.v4(),
          hazardGroupCode: i,
          isUnlisted: true,
          controlMeasures: [],
          unlistedDescription: a,
          categories: [s],
          type: u
        });
        return {
          type: d.ADD_HAZARD,
          taskId: r,
          hazard: f
        }
      };
      var m = t.addAvailableHazard = function e(t) {
        var r = t.taskId,
          n = t.tasks,
          a = t.hazard;
        var o = v(n, r) + 1;
        var i = h(a.controlMeasures);
        var s = new l.IdentifiedHazard({
          number: o,
          code: a.code,
          hazardGroupCode: a.groupCode,
          isUnlisted: false,
          controlMeasures: i,
          categories: a.categories,
          type: a.type
        });
        return {
          type: d.ADD_HAZARD,
          taskId: r,
          hazard: s
        }
      };
      var g = t.updateHazardDescription = function e(t, r, a) {
        var i = r.controlMeasures.map(function(e) {
          if (!e.isUnlisted) {
            var t = l.AvailableControlMeasure.getResourceKey(e.code);
            return new l.IdentifiedControlMeasure(n({}, e, {
              code: o.default.v4(),
              isUnlisted: true,
              unlistedDescription: u.translator.translate(t)
            }))
          }
          return e
        });
        var s = {
          code: o.default.v4(),
          isUnlisted: true,
          unlistedDescription: a,
          controlMeasures: i
        };
        var c = new l.IdentifiedHazard(n({}, r, s));
        return {
          type: d.UPDATE_HAZARD,
          taskId: t,
          hazard: c
        }
      };
      var _ = t.removeHazard = function e(t, r) {
        return {
          type: d.REMOVE_HAZARD,
          taskId: t,
          hazardId: r
        }
      };
      var b = t.updateHazardRisk = function e(t, r, a, o, i) {
        var u = (0, s.default)(t, {
          identifier: r
        });
        var c = (0, s.default)(u.hazards, {
          uniqueId: a
        });
        var f = new l.Risk(i);
        c[o + "Risk"] = f;
        var p = new l.IdentifiedHazard(n({}, c));
        return {
          type: d.UPDATE_HAZARD,
          taskId: r,
          hazard: p
        }
      };
      var k = t.reorderHazard = function e(t) {
        var r = t.taskId,
          n = t.hazard,
          a = t.index,
          o = t.newIndex;
        return {
          type: d.REORDER_HAZARD,
          taskId: r,
          hazard: n,
          index: a,
          newIndex: o
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.reorderControl = t.updateControlPrerequisite = t.updateControlDescription = t.removeControl = t.addAvailableControl = t.addControl = undefined;
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = r(139);
      var o = p(a);
      var i = r(158);
      var s = p(i);
      var u = r(2);
      var l = r(132);
      var c = r(286);
      var d = f(c);

      function f(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var v = function e(t, r, n) {
        var a = (0, s.default)(t, {
          identifier: r
        });
        var o = (0, s.default)(a.hazards, {
          uniqueId: n
        });
        return (0, u.getHighestNumber)(o.controlMeasures)
      };
      var h = t.addControl = function e(t) {
        var r = t.tasks,
          n = t.taskId,
          a = t.hazardId,
          i = t.description,
          s = t.isPrerequisite,
          u = t.controlType;
        var c = v(r, n, a) + 1;
        var f = new l.IdentifiedControlMeasure({
          number: c,
          code: o.default.v4(),
          isPrerequisite: s,
          isUnlisted: true,
          unlistedDescription: i,
          type: u
        });
        return {
          type: d.ADD_CONTROL,
          taskId: n,
          hazardId: a,
          control: f
        }
      };
      var y = t.addAvailableControl = function e(t) {
        var r = t.tasks,
          n = t.taskId,
          a = t.hazardId,
          i = t.isPrerequisite,
          s = t.control;
        var c = v(r, n, a) + 1;
        var f = l.AvailableControlMeasure.getResourceKey(s.code);
        var p = new l.IdentifiedControlMeasure({
          number: c,
          code: o.default.v4(),
          isPrerequisite: i,
          isUnlisted: true,
          unlistedDescription: u.translator.translate(f),
          categories: s.categories,
          type: s.type
        });
        return {
          type: d.ADD_CONTROL,
          taskId: n,
          hazardId: a,
          control: p
        }
      };
      var m = t.removeControl = function e(t, r, n) {
        return {
          type: d.REMOVE_CONTROL,
          taskId: t,
          hazardId: r,
          controlId: n
        }
      };
      var g = t.updateControlDescription = function e(t) {
        var r = t.taskId,
          a = t.hazardId,
          i = t.control,
          s = t.unlistedDescription;
        var u = {
          code: o.default.v4(),
          isUnlisted: true,
          unlistedDescription: s
        };
        var c = new l.IdentifiedControlMeasure(n({}, i, u));
        return {
          type: d.UPDATE_CONTROL,
          taskId: r,
          hazardId: a,
          control: c
        }
      };
      var _ = t.updateControlPrerequisite = function e(t) {
        var r = t.taskId,
          a = t.hazardId,
          o = t.control,
          i = t.isPrerequisite;
        var s = new l.IdentifiedControlMeasure(n({}, o, {
          isPrerequisite: i
        }));
        return {
          type: d.UPDATE_CONTROL,
          taskId: r,
          hazardId: a,
          control: s
        }
      };
      var b = t.reorderControl = function e(t) {
        var r = t.taskId,
          n = t.hazardId,
          a = t.control,
          o = t.index,
          i = t.newIndex;
        return {
          type: d.REORDER_CONTROL,
          taskId: r,
          hazardId: n,
          control: a,
          index: o,
          newIndex: i
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.resetActiveItem = t.setActiveItem = t.updateActiveItem = undefined;
      var n = r(132);
      var a = r(286);
      var o = i(a);

      function i(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }
      var s = t.updateActiveItem = function e(t) {
        return {
          type: o.UPDATE_ACTIVE_ITEM,
          item: t
        }
      };
      var u = t.setActiveItem = function e(t) {
        return {
          type: o.SET_ACTIVE_ITEM,
          item: new n.ActiveItem(t)
        }
      };
      var l = t.resetActiveItem = function e() {
        return {
          type: o.SET_ACTIVE_ITEM,
          item: new n.ActiveItem({})
        }
      }
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.setClean = undefined;
      var n = r(286);
      var a = o(n);

      function o(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }
      var i = t.setClean = function e() {
        return {
          type: a.SET_CLEAN
        }
      };
      t.default = i
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var o = r(1);
      var i = m(o);
      var s = r(163);
      var u = m(s);
      var l = r(171);
      var c = r(292);
      var d = m(c);
      var f = r(295);
      var p = m(f);
      var v = r(2);
      var h = r(284);
      var y = r(132);

      function m(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function g(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function _(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function b(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var k = function(e) {
        b(t, e);

        function t() {
          g(this, t);
          return _(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        a(t, [{
          key: "render",
          value: function e() {
            var t = this;
            var r = this.props,
              a = r.connectDragSource,
              o = r.connectDragPreview,
              s = r.connectDropTarget,
              l = r.isDragging,
              c = r.index,
              f = r.total;
            var h = (0, u.default)("task-step-hazard-row", {
              "is-active": this.props.active,
              "is-dragging": l
            });
            var y = {
              store: this.props.store,
              taskIdentifier: this.props.taskIdentifier,
              hazard: this.props.hazard,
              isAllowed: this.props.isAllowed,
              onShowRiskModal: this.props.onShowRiskModal,
              onHideRiskModal: this.props.onHideRiskModal,
              showRisk: this.props.showRisk
            };
            var m = this.props.total > 1 ? a(i.default.createElement("button", {
              className: "drag-handler",
              title: v.translator.translate("tooltip_drag_to_reorder_hazard")
            }, i.default.createElement("span", {
              className: "glyphicon glyphicon-move"
            }))) : null;
            return s(o(i.default.createElement("div", {
              className: h,
              ref: function e(r) {
                t._nodeRef = r
              }
            }, i.default.createElement(d.default, n({}, y, {
              onNewHazard: this.props.onNewHazard,
              showNewHazardButton: c === f - 1,
              total: this.props.total,
              category: this.props.category
            }), m), i.default.createElement(p.default, n({}, y, {
              onNewControlMeasure: this.props.onNewControlMeasure
            })))))
          }
        }]);
        return t
      }(i.default.PureComponent);
      var w = {
        hover: function e(t, r, n) {
          var a = r.getItem().index;
          var o = t.taskIdentifier,
            i = t.hazard,
            s = t.index;
          var u = s;
          if (this.canDrop(t, r)) {
            var l = v.dnd.hasCrossedMiddle({
              dragIndex: a,
              hoverIndex: u,
              hoverBoundingRect: n._nodeRef.getBoundingClientRect(),
              clientOffset: r.getClientOffset()
            });
            if (l) {
              r.getItem().index = u;
              t.store.dispatch((0, h.reorderHazard)({
                taskId: o,
                hazard: i,
                index: u,
                newIndex: a
              }))
            }
          }
        },
        canDrop: function e(t, r) {
          return t.taskIdentifier === r.getItem().taskIdentifier && t.index !== r.getItem().index
        }
      };
      var T = {
        beginDrag: function e(t) {
          return {
            index: t.index,
            taskIdentifier: t.taskIdentifier
          }
        }
      };
      k.propTypes = {
        store: o.PropTypes.shape({
          dispatch: o.PropTypes.func.isRequired
        }).isRequired,
        hazard: o.PropTypes.instanceOf(y.IdentifiedHazard).isRequired,
        isAllowed: o.PropTypes.func.isRequired,
        taskIdentifier: o.PropTypes.string.isRequired,
        onNewHazard: o.PropTypes.func.isRequired,
        onNewControlMeasure: o.PropTypes.func.isRequired,
        active: o.PropTypes.bool.isRequired,
        showRisk: o.PropTypes.bool.isRequired,
        onShowRiskModal: o.PropTypes.func.isRequired,
        onHideRiskModal: o.PropTypes.func.isRequired,
        total: o.PropTypes.number.isRequired,
        index: o.PropTypes.number.isRequired,
        category: o.PropTypes.string.isRequired,
        connectDragSource: o.PropTypes.func.isRequired,
        connectDropTarget: o.PropTypes.func.isRequired,
        connectDragPreview: o.PropTypes.func.isRequired,
        isDragging: o.PropTypes.bool.isRequired
      };
      t.default = (0, l.DragSource)(v.dnd.types.HAZARD, T, v.dnd.connectSource)((0, l.DropTarget)(v.dnd.types.HAZARD, w, v.dnd.connectTarget)(k))
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = v(a);
      var i = r(169);
      var s = r(2);
      var u = r(293);
      var l = v(u);
      var c = r(164);
      var d = v(c);
      var f = r(132);
      var p = r(284);

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function y(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function m(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var g = function(e) {
        m(t, e);

        function t(e) {
          h(this, t);
          var r = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r._onShowRiskModal = r._onShowRiskModal.bind(r);
          r._onHazardDescriptionChange = r._onHazardDescriptionChange.bind(r);
          r._onHazardRemove = r._onHazardRemove.bind(r);
          r._onHideConfirmModal = r._onHideConfirmModal.bind(r);
          r._onConfirmHazardRemove = r._onConfirmHazardRemove.bind(r);
          r.state = {
            showConfirmModal: false
          };
          return r
        }
        n(t, [{
          key: "_onShowRiskModal",
          value: function e() {
            this.props.onShowRiskModal(this.props.taskIdentifier, "initial", this.props.hazard.uniqueId)
          }
        }, {
          key: "_onHideConfirmModal",
          value: function e() {
            this.setState({
              showConfirmModal: false
            })
          }
        }, {
          key: "_onHazardDescriptionChange",
          value: function e(t) {
            var r = this.props,
              n = r.store,
              a = r.taskIdentifier,
              o = r.hazard;
            n.dispatch((0, p.updateHazardDescription)(a, o, t))
          }
        }, {
          key: "_onHazardRemove",
          value: function e() {
            var t = this.props,
              r = t.store,
              n = t.taskIdentifier,
              a = t.hazard;
            r.dispatch((0, p.removeHazard)(n, a.uniqueId))
          }
        }, {
          key: "_onConfirmHazardRemove",
          value: function e() {
            this.setState({
              showConfirmModal: true
            })
          }
        }, {
          key: "render",
          value: function e() {
            var t = s.externalComponents.RiskValue;
            var r = this.props,
              n = r.hazard,
              a = r.category;
            var u = n.isUnlisted ? n.unlistedDescription : s.translator.translate(f.AvailableHazard.getResourceKey(n.code));
            var c = n.type ? s.translator.translate("HazardType_" + n.type) : null;
            var p = this.props.showNewHazardButton ? o.default.createElement("div", {
              className: "new-item-button-wrapper"
            }, o.default.createElement("button", {
              className: "btn btn-sm new-item-button new-hazard-button",
              title: s.translator.translate("label_add_hazard"),
              onClick: this.props.onNewHazard
            }, o.default.createElement("span", {
              className: "btn-icon glyphicon glyphicon-plus"
            }), s.translator.translate("label_add_hazard"))) : null;
            var v = this.props.isAllowed(["IdentifyUnlistedRiskAssessmentHazard"]);
            return o.default.createElement("div", {
              className: "task-step-hazard-wrapper",
              "data-scroll-id": this.props.hazard.uniqueId
            }, o.default.createElement("div", {
              className: "task-step-hazard"
            }, o.default.createElement("div", {
              className: "task-step-hazard-content"
            }, o.default.createElement(d.default, {
              code: n.hazardGroupCode,
              category: a
            }), o.default.createElement(l.default, {
              initialText: u,
              isUnlisted: n.isUnlisted,
              editMode: v,
              onConfirmChange: this._onHazardDescriptionChange,
              onRemove: this._onConfirmHazardRemove,
              typeText: c
            })), p), this.props.children, o.default.createElement(t, {
              visible: this.props.showRisk,
              risk: n.initialRisk,
              typeOfRisk: "initial",
              editMode: true,
              onRiskClicked: this._onShowRiskModal
            }), o.default.createElement(i.ConfirmModal, {
              className: "modal-stacked",
              show: this.state.showConfirmModal,
              onConfirm: this._onHazardRemove,
              onHide: this._onHideConfirmModal,
              onDeny: this._onHideConfirmModal,
              title: s.translator.translate("label_confirm_remove_hazard_modal_title")
            }, s.translator.translate("label_confirm_remove_hazard_modal_body")))
          }
        }]);
        return t
      }(o.default.Component);
      g.propTypes = {
        store: a.PropTypes.shape({
          dispatch: a.PropTypes.func.isRequired
        }).isRequired,
        hazard: a.PropTypes.instanceOf(f.IdentifiedHazard).isRequired,
        children: a.PropTypes.node,
        taskIdentifier: a.PropTypes.string.isRequired,
        onShowRiskModal: a.PropTypes.func.isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        showNewHazardButton: a.PropTypes.bool.isRequired,
        onNewHazard: a.PropTypes.func.isRequired,
        isAllowed: a.PropTypes.func.isRequired,
        category: a.PropTypes.string.isRequired
      };
      g.defaultProps = {
        children: null
      };
      t.default = g
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = d(a);
      var i = r(163);
      var s = d(i);
      var u = r(294);
      var l = d(u);
      var c = r(2);

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function f(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function p(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function v(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var h = function(e) {
        v(t, e);

        function t(e) {
          f(this, t);
          var r = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.state = {
            text: r.props.initialText,
            isEditing: false
          };
          r._onKeyDown = r._onKeyDown.bind(r);
          r._onClick = r._onClick.bind(r);
          r._focusTextArea = r._focusTextArea.bind(r);
          r._onRemove = r._onRemove.bind(r);
          r._handleBodyClick = r._handleBodyClick.bind(r);
          return r
        }
        n(t, [{
          key: "componentWillReceiveProps",
          value: function e(t) {
            if (!this.state.isEditing) {
              this.setState({
                text: t.initialText
              })
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function e() {
            this._removeListeners()
          }
        }, {
          key: "_onClick",
          value: function e() {
            var t = this;
            if (this.props.editMode) {
              this.setState({
                isEditing: true
              }, function() {
                t._focusTextArea();
                t._addListeners()
              })
            }
          }
        }, {
          key: "_addListeners",
          value: function e() {
            document.body.addEventListener("click", this._handleBodyClick);
            this._textArea.addEventListener("keydown", this._onKeyDown)
          }
        }, {
          key: "_removeListeners",
          value: function e() {
            document.body.removeEventListener("click", this._handleBodyClick);
            if (this._textArea) {
              this._textArea.removeEventListener("keydown", this._onKeyDown)
            }
          }
        }, {
          key: "_handleBodyClick",
          value: function e(t) {
            var r = this._textArea;
            var n = t.target;
            while (n) {
              if (r === n) return;
              n = n.parentNode
            }
            if (this.state.text === this.props.initialText) {
              this._onCancelEdit()
            }
          }
        }, {
          key: "_focusTextArea",
          value: function e() {
            var t = this;
            setTimeout(function() {
              var e = t._textArea.querySelector("textarea");
              e.selectionStart = t.state.text.length;
              e.focus()
            }, 10)
          }
        }, {
          key: "_onConfirmEdit",
          value: function e() {
            this.setState({
              isEditing: false
            }, this._removeListeners);
            if (this.state.text !== this.props.initialText) {
              this.props.onConfirmChange(this.state.text)
            }
          }
        }, {
          key: "_onCancelEdit",
          value: function e() {
            this.setState({
              text: this.props.initialText,
              isEditing: false
            }, this._removeListeners)
          }
        }, {
          key: "_onInput",
          value: function e(t) {
            var r = t.target.value;
            this.setState({
              text: r
            })
          }
        }, {
          key: "_onKeyDown",
          value: function e(t) {
            if (t.ctrlKey && t.which === c.keyCodes.enter) {
              this._onConfirmEdit()
            }
          }
        }, {
          key: "_onRemove",
          value: function e() {
            this._onCancelEdit();
            this.props.onRemove()
          }
        }, {
          key: "render",
          value: function e() {
            var t = this;
            var r = null;
            var n = null;
            var a = null;
            var i = this.props.onRemove ? o.default.createElement("button", {
              className: "btn btn-sm remove-btn glyphicon glyphicon-trash",
              onClick: this._onRemove,
              title: c.translator.translate("tooltip_delete")
            }) : null;
            if (this.props.typeText) {
              a = o.default.createElement("span", {
                className: "type-text"
              }, "(", c.translator.translate("label_type_extension"), " ", this.props.typeText, ")")
            }
            if (!this.state.isEditing) {
              var u = (0, s.default)("item-text", {
                "is-editable": this.props.editMode,
                "is-unlisted": this.props.isUnlisted
              });
              r = o.default.createElement("span", {
                onClick: function e() {
                  return t._onClick()
                },
                className: u,
                title: c.translator.translate("tooltip_click_to_edit")
              }, this.state.text, a)
            } else {
              r = o.default.createElement(l.default, {
                className: "form-control",
                value: this.state.text,
                fitOnMount: true,
                onInput: function e(r) {
                  return t._onInput(r)
                },
                onChange: function e() {},
                maxLength: 2e3
              });
              n = o.default.createElement("div", {
                className: "btn-group"
              }, o.default.createElement("button", {
                className: "btn btn-sm btn-primary glyphicon glyphicon-ok",
                onClick: function e() {
                  return t._onConfirmEdit()
                },
                disabled: !this.state.text.trim().length,
                title: c.translator.translate("tooltip_save")
              }), o.default.createElement("button", {
                className: "btn btn-sm glyphicon glyphicon-remove",
                onClick: function e() {
                  return t._onCancelEdit()
                },
                title: c.translator.translate("tooltip_cancel")
              }), i)
            }
            var d = (0, s.default)("item-text-wrapper", {
              "is-editing": this.state.isEditing
            });
            return o.default.createElement("div", {
              className: d,
              ref: function e(r) {
                t._textArea = r
              }
            }, r, n)
          }
        }]);
        return t
      }(o.default.Component);
      h.propTypes = {
        initialText: a.PropTypes.string,
        onConfirmChange: a.PropTypes.func.isRequired,
        editMode: a.PropTypes.bool.isRequired,
        onRemove: a.PropTypes.func,
        isUnlisted: a.PropTypes.bool.isRequired,
        typeText: a.PropTypes.string
      };
      h.defaultProps = {
        initialText: "",
        onRemove: null,
        typeText: ""
      };
      t.default = h
    }, function(e, t, r) {
      ! function(n, a) {
        true ? e.exports = a(r(1)) : "function" == typeof define && define.amd ? define(["react"], a) : "object" == typeof t ? t.ReactResizableTextarea = a(require("react")) : n.ReactResizableTextarea = a(n.react)
      }(this, function(e) {
        return function(e) {
          function t(n) {
            if (r[n]) return r[n].exports;
            var a = r[n] = {
              exports: {},
              id: n,
              loaded: !1
            };
            return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
          }
          var r = {};
          return t.m = e, t.c = r, t.p = "", t(0)
        }([function(e, t, r) {
          "use strict";

          function n(e) {
            return e && e.__esModule ? e : {
              default: e
            }
          }

          function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }

          function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }

          function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
          var s = function() {
              function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
              }
              return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
              }
            }(),
            u = r(1),
            l = n(u),
            c = function(e) {
              function t(e) {
                a(this, t);
                var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r._lastY = 0, r._lastX = 0, r._textAreaHeight = 0, r._textAreaWidth = 0, r._onEnableDrag = r._onEnableDrag.bind(r), r._onDisableDrag = r._onDisableDrag.bind(r), r._onMouseMove = r._onMouseMove.bind(r), r._autoSizeTextarea = r._autoSizeTextarea.bind(r), r
              }
              return i(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                  this.props.fitOnMount && this._autoSizeTextarea(), this._dragger.addEventListener("mousedown", this._onEnableDrag)
                }
              }, {
                key: "componentWillUnmount",
                value: function() {
                  this._dragger.removeEventListener("mousedown", this._onEnableDrag), this._removeEventListeners()
                }
              }, {
                key: "getTextarea",
                value: function() {
                  return this._textArea
                }
              }, {
                key: "_autoSizeTextarea",
                value: function() {
                  var e = this._textArea.style.overflowY,
                    t = Math.max(this._textArea.offsetWidth, this.props.minWidth);
                  this._textArea.style.width = t + "px", this._textArea.style.overflowY = "hidden";
                  var r = window.getComputedStyle(this._textArea),
                    n = parseInt(r.getPropertyValue("border-top-width"), 10),
                    a = parseInt(r.getPropertyValue("border-bottom-width"), 10),
                    o = n + a + this._textArea.scrollHeight;
                  o = Math.max(o, this.props.minHeight), this._textArea.style.height = o + "px", this._textArea.style.overflowY = e
                }
              }, {
                key: "_onEnableDrag",
                value: function(e) {
                  document.addEventListener("mousemove", this._onMouseMove), document.addEventListener("mouseup", this._onDisableDrag), this._lastY = e.clientY, this._lastX = e.clientX, this._textAreaHeight = this._textArea.offsetHeight, this._textAreaWidth = this._textArea.offsetWidth, e.preventDefault()
                }
              }, {
                key: "_onDisableDrag",
                value: function() {
                  this._removeEventListeners(), window.getSelection().removeAllRanges()
                }
              }, {
                key: "_removeEventListeners",
                value: function() {
                  document.removeEventListener("mousemove", this._onMouseMove), document.removeEventListener("mouseup", this._onDisableDrag), this._scrollableContainer && this._scrollableContainer.removeEventListener("mousedown", this._onPreventMouseDownOnScrollableParent)
                }
              }, {
                key: "_onMouseMove",
                value: function(e) {
                  if (this.props.directions.indexOf("y") !== -1) {
                    var t = e.clientY - this._lastY;
                    this._textAreaHeight = Math.max(this._textAreaHeight + t, this.props.minHeight), this._textArea.style.height = this._textAreaHeight + "px"
                  }
                  if (this.props.directions.indexOf("x") !== -1) {
                    var r = e.clientX - this._lastX;
                    this._textAreaWidth = Math.max(this._textAreaWidth + r, this.props.minWidth), this._textArea.style.width = this._textAreaWidth + "px"
                  }
                  this._lastX = e.clientX, this._lastY = e.clientY
                }
              }, {
                key: "render",
                value: function() {
                  var e = this,
                    t = {};
                  Object.keys(this.props).forEach(function(r) {
                    t[r] = e.props[r]
                  }), t.className = "resizable-textarea " + this.props.className, t.ref = function(t) {
                    return e._textArea = t
                  }, t.style ? (t.style.minWidth = t.minWidth, t.style.minHeight = t.minHeight) : t.style = {
                    minWidth: t.minWidth,
                    minHeight: t.minHeight
                  }, delete t.directions, delete t.minWidth, delete t.minHeight, delete t.fitOnMount;
                  var r = "resizable-textarea-dragger direction-" + this.props.directions;
                  return l.default.createElement("div", {
                    className: "resizable-textarea-container",
                    ref: function(t) {
                      return e._container = t
                    }
                  }, l.default.createElement("textarea", t), l.default.createElement("div", {
                    className: r,
                    ref: function(t) {
                      return e._dragger = t
                    }
                  }))
                }
              }]), t
            }(u.Component);
          c.propTypes = {
            directions: u.PropTypes.string,
            className: u.PropTypes.string,
            minWidth: u.PropTypes.number,
            minHeight: u.PropTypes.number,
            fitOnMount: u.PropTypes.bool
          }, c.defaultProps = {
            directions: "y",
            className: "",
            minWidth: 100,
            minHeight: 30,
            fitOnMount: !1
          }, t.default = c
        }, function(t, r) {
          t.exports = e
        }])
      })
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = c(a);
      var i = r(2);
      var s = r(296);
      var u = c(s);
      var l = r(132);

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function d(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function f(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function p(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var v = function(e) {
        p(t, e);

        function t(e) {
          d(this, t);
          var r = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r._onShowRiskModal = r._onShowRiskModal.bind(r);
          r._onNewControlMeasure = r._onNewControlMeasure.bind(r);
          return r
        }
        n(t, [{
          key: "_onShowRiskModal",
          value: function e() {
            this.props.onShowRiskModal(this.props.taskIdentifier, "residual", this.props.hazard.uniqueId)
          }
        }, {
          key: "_onNewControlMeasure",
          value: function e() {
            this.props.onNewControlMeasure(this.props.taskIdentifier, this.props.hazard.uniqueId)
          }
        }, {
          key: "render",
          value: function e() {
            var t = this;
            var r = this.props.hazard;
            var n = i.externalComponents.RiskValue;
            if (!r.controlMeasures || !r.controlMeasures.length) {
              return o.default.createElement("div", {
                className: "task-step-controls-wrapper"
              }, o.default.createElement("div", {
                className: "task-step-controls"
              }, o.default.createElement("div", {
                className: "task-step-new-control"
              }, o.default.createElement("button", {
                className: "btn btn-primary btn-sm new-control-button",
                onClick: this._onNewControlMeasure
              }, o.default.createElement("span", {
                className: "btn-icon glyphicon glyphicon-plus"
              }), i.translator.translate("label_specify_controls")))))
            }
            var a = r.controlMeasures.map(function(e, n) {
              return o.default.createElement(u.default, {
                key: e.uniqueId,
                store: t.props.store,
                taskIdentifier: t.props.taskIdentifier,
                hazardIdentifier: r.uniqueId,
                controlMeasure: e,
                onNewControlMeasure: t._onNewControlMeasure,
                isAllowed: t.props.isAllowed,
                index: n,
                total: r.controlMeasures.length
              })
            });
            return o.default.createElement("div", {
              className: "task-step-controls-wrapper"
            }, o.default.createElement("div", {
              className: "task-step-controls"
            }, a), o.default.createElement(n, {
              visible: this.props.showRisk,
              risk: r.residualRisk,
              typeOfRisk: "residual",
              editMode: true,
              onRiskClicked: this._onShowRiskModal
            }))
          }
        }]);
        return t
      }(o.default.Component);
      v.propTypes = {
        store: a.PropTypes.shape({
          dispatch: a.PropTypes.func.isRequired
        }).isRequired,
        hazard: a.PropTypes.instanceOf(l.IdentifiedHazard).isRequired,
        taskIdentifier: a.PropTypes.string.isRequired,
        isAllowed: a.PropTypes.func.isRequired,
        showRisk: a.PropTypes.bool.isRequired,
        onShowRiskModal: a.PropTypes.func.isRequired,
        onNewControlMeasure: a.PropTypes.func.isRequired
      };
      t.default = v
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = v(a);
      var i = r(163);
      var s = v(i);
      var u = r(171);
      var l = r(2);
      var c = r(293);
      var d = v(c);
      var f = r(132);
      var p = r(284);

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function y(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function m(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var g = function(e) {
        m(t, e);

        function t(e) {
          h(this, t);
          var r = y(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r._onControlDescriptionChange = r._onControlDescriptionChange.bind(r);
          r._onControlMeasureTypeChange = r._onControlMeasureTypeChange.bind(r);
          r._onControlRemove = r._onControlRemove.bind(r);
          return r
        }
        n(t, [{
          key: "_onControlRemove",
          value: function e() {
            var t = this.props,
              r = t.store,
              n = t.taskIdentifier,
              a = t.hazardIdentifier,
              o = t.controlMeasure;
            r.dispatch((0, p.removeControl)(n, a, o.uniqueId))
          }
        }, {
          key: "_onControlDescriptionChange",
          value: function e(t) {
            var r = this.props,
              n = r.store,
              a = r.taskIdentifier,
              o = r.hazardIdentifier,
              i = r.controlMeasure;
            n.dispatch((0, p.updateControlDescription)({
              taskId: a,
              hazardId: o,
              control: i,
              unlistedDescription: t
            }))
          }
        }, {
          key: "_onControlMeasureTypeChange",
          value: function e(t) {
            var r = this.props,
              n = r.store,
              a = r.taskIdentifier,
              o = r.hazardIdentifier,
              i = r.controlMeasure;
            n.dispatch((0, p.updateControlPrerequisite)({
              taskId: a,
              hazardId: o,
              control: i,
              isPrerequisite: t.target.checked
            }))
          }
        }, {
          key: "render",
          value: function e() {
            var t = this;
            var r = this.props,
              n = r.connectDragSource,
              a = r.connectDragPreview,
              i = r.connectDropTarget,
              u = r.isDragging,
              c = r.controlMeasure,
              p = r.isAllowed,
              v = r.index,
              h = r.total;
            if (!c) {
              return null
            }
            var y = p(["MarkControlMeasureAsPrerequisite", "MarkControlMeasureAsSupplementary"]);
            var m = p(["IdentifyUnlistedRiskAssessmentControlMeasure"]);
            var g = p(["RemoveRiskAssessmentControlMeasure"]) ? this._onControlRemove : null;
            var _ = v === h - 1;
            var b = y ? this._onControlMeasureTypeChange : null;
            var k = c.isUnlisted ? c.unlistedDescription : l.translator.translate(f.AvailableControlMeasure.getResourceKey(c.code));
            var w = c.type ? l.translator.translate("ControlMeasureType_" + c.type) : null;
            var T = (0, s.default)("control-measure-prerequisite", {
              "is-editable": y
            });
            var C = _ ? o.default.createElement("div", {
              className: "new-item-button-wrapper"
            }, o.default.createElement("button", {
              className: "btn btn-sm new-item-button new-control-button",
              onClick: this.props.onNewControlMeasure,
              title: l.translator.translate("label_add_control")
            }, o.default.createElement("span", {
              className: "btn-icon glyphicon glyphicon-plus"
            }), l.translator.translate("label_add_control"))) : null;
            var O = h > 1 ? n(o.default.createElement("button", {
              className: "drag-handler",
              title: l.translator.translate("tooltip_drag_to_reorder_control")
            }, o.default.createElement("span", {
              className: "glyphicon glyphicon-move"
            }))) : null;
            var E = (0, s.default)("task-step-control", {
              "is-dragging": u
            });
            return i(a(o.default.createElement("div", {
              ref: function e(r) {
                t._nodeRef = r
              },
              key: c.uniqueId,
              "data-scroll-id": c.uniqueId,
              className: E
            }, o.default.createElement("div", {
              className: "task-step-control-wrapper"
            }, o.default.createElement(d.default, {
              initialText: k,
              editMode: m,
              isUnlisted: c.isUnlisted,
              onConfirmChange: this._onControlDescriptionChange,
              onRemove: g,
              typeText: w
            }), C), O, o.default.createElement("label", {
              className: T
            }, o.default.createElement("input", {
              type: "checkbox",
              checked: c.isPrerequisite,
              onChange: b
            }), o.default.createElement("div", null, l.translator.translate("label_prerequisite"))))))
          }
        }]);
        return t
      }(o.default.Component);
      var _ = {
        hover: function e(t, r, n) {
          var a = r.getItem().index;
          var o = t.taskIdentifier,
            i = t.hazardIdentifier,
            s = t.controlMeasure,
            u = t.index;
          var c = u;
          if (this.canDrop(t, r)) {
            var d = l.dnd.hasCrossedMiddle({
              dragIndex: a,
              hoverIndex: c,
              hoverBoundingRect: n._nodeRef.getBoundingClientRect(),
              clientOffset: r.getClientOffset()
            });
            if (d) {
              var f = (0, p.reorderControl)({
                taskId: o,
                hazardId: i,
                control: s,
                index: c,
                newIndex: a
              });
              r.getItem().index = c;
              t.store.dispatch(f)
            }
          }
        },
        canDrop: function e(t, r) {
          return t.hazardIdentifier === r.getItem().hazardIdentifier && t.index !== r.getItem().index
        }
      };
      var b = {
        beginDrag: function e(t) {
          return {
            index: t.index,
            hazardIdentifier: t.hazardIdentifier
          }
        }
      };
      g.propTypes = {
        store: a.PropTypes.shape({
          dispatch: a.PropTypes.func.isRequired
        }).isRequired,
        controlMeasure: a.PropTypes.instanceOf(f.IdentifiedControlMeasure).isRequired,
        onNewControlMeasure: a.PropTypes.func.isRequired,
        taskIdentifier: a.PropTypes.string.isRequired,
        hazardIdentifier: a.PropTypes.string.isRequired,
        index: a.PropTypes.number.isRequired,
        total: a.PropTypes.number.isRequired,
        isAllowed: a.PropTypes.func.isRequired,
        connectDragSource: a.PropTypes.func.isRequired,
        connectDropTarget: a.PropTypes.func.isRequired,
        connectDragPreview: a.PropTypes.func.isRequired,
        isDragging: a.PropTypes.bool.isRequired
      };
      t.default = (0, u.DragSource)(l.dnd.types.CONTROL, b, l.dnd.connectSource)((0, u.DropTarget)(l.dnd.types.CONTROL, _, l.dnd.connectTarget)(g))
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = i(n);
      var o = r(2);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = function e(t) {
        var r = t.show,
          n = t.onClick;
        if (!r) return null;
        return a.default.createElement("button", {
          className: "btn btn-minimize-footer",
          onClick: n,
          title: o.translator.translate("label_hide_wizard")
        }, a.default.createElement("span", {
          className: "glyphicon glyphicon-chevron-down"
        }))
      };
      s.propTypes = {
        show: n.PropTypes.bool.isRequired,
        onClick: n.PropTypes.func.isRequired
      };
      t.default = s
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var o = r(1);
      var i = g(o);
      var s = r(163);
      var u = g(s);
      var l = r(169);
      var c = r(2);
      var d = r(299);
      var f = g(d);
      var p = r(310);
      var v = g(p);
      var h = r(317);
      var y = g(h);
      var m = r(132);

      function g(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function _(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function b(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function k(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var w = function(e) {
        k(t, e);

        function t() {
          _(this, t);
          return b(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        a(t, [{
          key: "_renderModalButtons",
          value: function e() {
            var t = this.props,
              r = t.dirty,
              n = t.tasks;
            var a = n.some(function(e) {
              return !e.description.trim().length
            });
            var o = a ? "label_missing_task_description" : "label_pending_changes";
            return i.default.createElement("div", {
              className: "modal-footer-buttons"
            }, i.default.createElement("button", {
              className: "btn btn-add pull-left btnNewTask",
              onClick: this.props.onNewTaskStep
            }, i.default.createElement("span", {
              className: "btn-icon glyphicon glyphicon-plus"
            }), c.translator.translate("label_add_taskstep")), i.default.createElement(y.default, {
              show: r,
              contentKey: o
            }), i.default.createElement("button", {
              className: "btn btn-primary btnModalConfirm",
              onClick: this.props.onSave,
              disabled: !r || a
            }, c.translator.translate("label_save_changes")), i.default.createElement("button", {
              className: "btn btn-primary btnModalConfirmAndClose",
              onClick: this.props.onSaveAndClose,
              disabled: !r || a
            }, c.translator.translate("label_save_and_close")), i.default.createElement("button", {
              className: "btn btnModalDismiss",
              onClick: this.props.onHideModal
            }, c.translator.translate("label_close_modal")))
          }
        }, {
          key: "render",
          value: function e() {
            var t = this.props,
              r = t.showNewHazard,
              a = t.showNewControlMeasures,
              o = t.store,
              s = t.activeItem;
            var c = null;
            if (s.taskId) {
              var d = {
                store: o,
                groupedHazards: this.props.groupedHazards,
                tasks: this.props.tasks,
                activeTaskStepId: s.taskId,
                onError: this.props.onError
              };
              if (r) {
                c = i.default.createElement(f.default, n({}, d, {
                  hazardTypes: this.props.hazardTypes
                }))
              } else if (a) {
                c = i.default.createElement(v.default, n({}, d, {
                  isAllowed: this.props.isAllowed,
                  activeHazardId: s.hazardId,
                  onNewHazard: this.props.onNewHazard,
                  controlTypes: this.props.controlTypes
                }))
              }
            }
            var p = (0, u.default)({
              "new-item-footer": r || a
            });
            return i.default.createElement(l.Modal.Footer, {
              className: p,
              onTransitionEnd: this.props.onFooterTransitionEnd
            }, c, this._renderModalButtons())
          }
        }]);
        return t
      }(i.default.PureComponent);
      w.propTypes = {
        store: o.PropTypes.shape({
          dispatch: o.PropTypes.func.isRequired
        }).isRequired,
        activeItem: o.PropTypes.instanceOf(m.ActiveItem).isRequired,
        groupedHazards: o.PropTypes.arrayOf(o.PropTypes.instanceOf(m.HazardGroup)).isRequired,
        hazardTypes: o.PropTypes.arrayOf(o.PropTypes.string).isRequired,
        controlTypes: o.PropTypes.arrayOf(o.PropTypes.string).isRequired,
        tasks: o.PropTypes.arrayOf(o.PropTypes.instanceOf(m.TaskStep)).isRequired,
        isAllowed: o.PropTypes.func.isRequired,
        showNewHazard: o.PropTypes.bool.isRequired,
        showNewControlMeasures: o.PropTypes.bool.isRequired,
        onSave: o.PropTypes.func.isRequired,
        onSaveAndClose: o.PropTypes.func.isRequired,
        onHideModal: o.PropTypes.func.isRequired,
        onNewTaskStep: o.PropTypes.func.isRequired,
        onNewHazard: o.PropTypes.func.isRequired,
        onFooterTransitionEnd: o.PropTypes.func.isRequired,
        dirty: o.PropTypes.bool.isRequired,
        onError: o.PropTypes.func.isRequired
      };
      t.default = w
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = T(a);
      var i = r(158);
      var s = T(i);
      var u = r(2);
      var l = r(300);
      var c = T(l);
      var d = r(301);
      var f = T(d);
      var p = r(303);
      var v = T(p);
      var h = r(304);
      var y = T(h);
      var m = r(307);
      var g = T(m);
      var _ = r(309);
      var b = T(_);
      var k = r(284);
      var w = r(132);

      function T(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function C(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function O(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function E(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var R = function(e) {
        E(t, e);

        function t(e) {
          C(this, t);
          var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.state = {
            selectedHazardGroupCode: "",
            selectedHazardTypeCode: "",
            taskStepDropdownIsOpen: false,
            textareaValue: "",
            searchValue: "",
            searchIsActive: false,
            filteredHazards: []
          };
          r._toggleStepDropdown = r._toggleStepDropdown.bind(r);
          r._onAddAvailableHazard = r._onAddAvailableHazard.bind(r);
          r._onAddUnlistedHazard = r._onAddUnlistedHazard.bind(r);
          r._onResetFilter = r._onResetFilter.bind(r);
          r._onSelectHazardGroup = r._onSelectHazardGroup.bind(r);
          r._onSelectHazardType = r._onSelectHazardType.bind(r);
          r._getAvailableHazards = r._getAvailableHazards.bind(r);
          r._hazardIsValid = r._hazardIsValid.bind(r);
          r._getSelectedHazardGroupCategory = r._getSelectedHazardGroupCategory.bind(r);
          r._onTextareaInput = r._onTextareaInput.bind(r);
          r._onKeyDown = r._onKeyDown.bind(r);
          r._onActiveTaskStepChange = r._onActiveTaskStepChange.bind(r);
          r._onSearchHazards = r._onSearchHazards.bind(r);
          return r
        }
        n(t, [{
          key: "componentWillReceiveProps",
          value: function e(t) {
            if (t.activeTaskStepId !== this.props.activeTaskStepId) {
              this.setState({
                taskStepDropdownIsOpen: false,
                searchIsActive: false,
                selectedHazardGroupCode: "",
                selectedHazardTypeCode: ""
              })
            }
          }
        }, {
          key: "_toggleStepDropdown",
          value: function e() {
            this.setState({
              taskStepDropdownIsOpen: !this.state.taskStepDropdownIsOpen
            })
          }
        }, {
          key: "_onSelectHazardGroup",
          value: function e(t) {
            this.setState({
              selectedHazardGroupCode: t,
              searchIsActive: false
            })
          }
        }, {
          key: "_onSelectHazardType",
          value: function e(t) {
            this.setState({
              selectedHazardTypeCode: t,
              searchIsActive: false
            })
          }
        }, {
          key: "_onActiveTaskStepChange",
          value: function e(t) {
            this.setState({
              taskStepDropdownIsOpen: false
            });
            this.props.store.dispatch((0, k.setActiveItem)({
              type: "TASK",
              taskId: t
            }))
          }
        }, {
          key: "_onSearchHazards",
          value: function e() {
            var t = this;
            var r = this.state.textareaValue;
            u.searchHazardsAndControls.getHazards(r).then(function(e) {
              t.setState({
                filteredHazards: e,
                searchIsActive: true,
                searchValue: r
              })
            }).catch(this.props.onError)
          }
        }, {
          key: "_onTextareaInput",
          value: function e(t) {
            var r = t.target.value;
            this.setState({
              textareaValue: r
            })
          }
        }, {
          key: "_onAddAvailableHazard",
          value: function e(t) {
            var r = this.props.store;
            r.dispatch((0, k.addAvailableHazard)({
              taskId: r.getState().activeItem.taskId,
              tasks: r.getState().tasks,
              hazard: t
            }))
          }
        }, {
          key: "_onAddUnlistedHazard",
          value: function e() {
            var t = this.props.store;
            var r = this.state,
              n = r.textareaValue,
              a = r.selectedHazardGroupCode,
              o = r.selectedHazardTypeCode;
            t.dispatch((0, k.addHazard)({
              taskId: t.getState().activeItem.taskId,
              tasks: t.getState().tasks,
              description: n,
              hazardGroupCode: a,
              hazardTypeCode: o,
              category: this._getSelectedHazardGroupCategory()
            }));
            this.setState({
              textareaValue: "",
              selectedHazardGroupCode: "",
              selectedHazardTypeCode: "",
              searchIsActive: false
            })
          }
        }, {
          key: "_hazardIsValid",
          value: function e() {
            var t = this.state.textareaValue.trim().length;
            var r = this.props.groupedHazards.length;
            var n = r ? !!this.state.selectedHazardGroupCode : true;
            var a = this.props.hazardTypes.length;
            var o = a ? !!this.state.selectedHazardTypeCode : true;
            return t && n && o
          }
        }, {
          key: "_onKeyDown",
          value: function e(t) {
            if (this._hazardIsValid() && t.ctrlKey && t.which === u.keyCodes.enter) {
              this._onAddUnlistedHazard()
            }
          }
        }, {
          key: "_onResetFilter",
          value: function e() {
            this.setState({
              searchIsActive: false
            })
          }
        }, {
          key: "_getAvailableHazards",
          value: function e() {
            var t = [];
            var r = this.state,
              n = r.selectedHazardGroupCode,
              a = r.searchIsActive;
            if (!a && !n) {
              return []
            } else if (a) {
              t = this.state.filteredHazards
            } else if (!a && n) {
              t = (0, s.default)(this.props.groupedHazards, {
                code: n
              }).hazards
            }
            return t
          }
        }, {
          key: "_getIdentifiedHazardCodes",
          value: function e() {
            var t = this.props,
              r = t.activeTaskStepId,
              n = t.tasks;
            var a = (0, s.default)(n, {
              identifier: r
            });
            return a.hazards.map(function(e) {
              return e.code
            })
          }
        }, {
          key: "_getSelectedHazardGroupCategory",
          value: function e() {
            var t = this.state.selectedHazardGroupCode;
            if (!t) return "";
            var r = (0, s.default)(this.props.groupedHazards, {
              code: t
            });
            return r.category
          }
        }, {
          key: "render",
          value: function e() {
            var t = this.state,
              r = t.searchIsActive,
              n = t.selectedHazardGroupCode,
              a = t.textareaValue,
              i = t.selectedHazardTypeCode;
            var s = !this._hazardIsValid();
            return o.default.createElement("div", {
              className: "new-item-wrapper"
            }, o.default.createElement("div", {
              className: "new-item-left"
            }, o.default.createElement("h4", {
              className: "new-item-title"
            }, u.translator.translate("label_new_hazard_title")), o.default.createElement("div", {
              className: "form-horizontal"
            }, o.default.createElement("div", {
              className: "form-group"
            }, o.default.createElement("label", {
              className: "col-2 col-modified control-label"
            }, u.translator.translate("label_task_step_selector")), o.default.createElement("div", {
              className: "col-10 col-modified"
            }, o.default.createElement(c.default, {
              tasks: this.props.tasks,
              activeTaskStepId: this.props.activeTaskStepId,
              onSelectItem: this._onActiveTaskStepChange
            }))), o.default.createElement(y.default, {
              groupedHazards: this.props.groupedHazards,
              selectedHazardGroupCode: this.state.selectedHazardGroupCode,
              onSelectHazardGroup: this._onSelectHazardGroup,
              showIndicator: !r && !!n
            }), o.default.createElement(g.default, {
              types: this.props.hazardTypes,
              selectedHazardTypeCode: i,
              onSelectHazardType: this._onSelectHazardType
            }), o.default.createElement(b.default, {
              labelKey: "label_hazard_description",
              value: a,
              onInput: this._onTextareaInput,
              onKeyDown: this._onKeyDown,
              placeholderKey: "placeholder_hazard_description_textarea",
              searchTooltipKey: "tooltip_search_available_hazards",
              onAdd: this._onAddUnlistedHazard,
              disableAddBtn: s,
              onSearch: this._onSearchHazards,
              active: r
            }))), o.default.createElement("div", {
              className: "new-item-right"
            }, o.default.createElement(v.default, {
              searchValue: this.state.searchValue,
              searchIsActive: this.state.searchIsActive,
              selectedHazardGroupCode: this.state.selectedHazardGroupCode,
              selectedHazardGroupCategory: this._getSelectedHazardGroupCategory(),
              onResetFilter: this._onResetFilter
            }), o.default.createElement(f.default, {
              identifiedHazardCodes: this._getIdentifiedHazardCodes(),
              hazards: this._getAvailableHazards(),
              selectedHazardGroupCode: this.state.selectedHazardGroupCode,
              onAdd: this._onAddAvailableHazard
            })))
          }
        }]);
        return t
      }(o.default.Component);
      R.propTypes = {
        store: a.PropTypes.shape({
          dispatch: a.PropTypes.func.isRequired
        }).isRequired,
        groupedHazards: a.PropTypes.arrayOf(a.PropTypes.instanceOf(w.HazardGroup)).isRequired,
        hazardTypes: a.PropTypes.arrayOf(a.PropTypes.string).isRequired,
        tasks: a.PropTypes.arrayOf(a.PropTypes.instanceOf(w.TaskStep)).isRequired,
        activeTaskStepId: a.PropTypes.string.isRequired,
        onError: a.PropTypes.func.isRequired
      };
      t.default = R
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = l(n);
      var o = r(163);
      var i = l(o);
      var s = r(169);
      var u = r(132);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = function e(t) {
        var r = t.tasks,
          n = t.activeTaskStepId,
          o = t.onSelectItem;
        var u = void 0;
        var l = r.map(function(e) {
          if (e.identifier === n) {
            u = e.number + ". " + e.description
          }
          return {
            value: e.identifier,
            control: e.number + ". " + e.description,
            className: (0, i.default)("text-truncate", {
              "is-selected": e.identifier === n
            })
          }
        });
        return a.default.createElement(s.DropDown, {
          items: l,
          className: "taskstep-dropdown dropdown-fluid",
          selectedContent: u,
          onSelectItem: o
        })
      };
      c.propTypes = {
        tasks: n.PropTypes.arrayOf(n.PropTypes.instanceOf(u.TaskStep)).isRequired,
        activeTaskStepId: n.PropTypes.string.isRequired,
        onSelectItem: n.PropTypes.func.isRequired
      };
      t.default = c
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = d(n);
      var o = r(2);
      var i = r(302);
      var s = d(i);
      var u = r(164);
      var l = d(u);
      var c = r(132);

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var f = function e(t) {
        var r = t.hazards,
          n = t.identifiedHazardCodes,
          i = t.onAdd;
        var u = a.default.createElement("em", {
          className: "list-group-item"
        }, o.translator.translate("label_no_suggested_hazards"));
        if (r.length) {
          u = r.map(function(e, t) {
            var r = n.some(function(t) {
              return t === e.code
            });
            var o = a.default.createElement(l.default, {
              code: e.groupCode,
              category: e.categories[0]
            });
            return a.default.createElement(s.default, {
              key: e.code,
              hazardCode: e.code,
              hazardAlreadyIdentified: r,
              index: t,
              onAdd: function t() {
                i(e)
              },
              icon: o
            })
          })
        }
        return a.default.createElement("div", {
          className: "suggested-items list-group"
        }, u)
      };
      f.propTypes = {
        identifiedHazardCodes: n.PropTypes.arrayOf(n.PropTypes.string).isRequired,
        hazards: n.PropTypes.arrayOf(n.PropTypes.oneOfType([n.PropTypes.instanceOf(c.AvailableHazard), n.PropTypes.instanceOf(c.FlattenedAvailableHazard)])).isRequired,
        onAdd: n.PropTypes.func.isRequired
      };
      t.default = f
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = l(n);
      var o = r(163);
      var i = l(o);
      var s = r(2);
      var u = r(132);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = function e(t) {
        var r = t.hazardAlreadyIdentified,
          n = t.onAdd,
          o = t.hazardCode,
          l = t.icon,
          c = t.index;
        var d = (0, i.default)("list-group-item", {
          "bg-alt": c % 2 !== 0,
          disabled: r
        });
        var f = r ? s.translator.translate("tooltip_hazard_already_exists") : null;
        return a.default.createElement("button", {
          className: d,
          disabled: r,
          onClick: n,
          title: f
        }, l, s.translator.translate(u.AvailableHazard.getResourceKey(o)))
      };
      c.propTypes = {
        hazardCode: n.PropTypes.string.isRequired,
        hazardAlreadyIdentified: n.PropTypes.bool.isRequired,
        onAdd: n.PropTypes.func.isRequired,
        icon: n.PropTypes.node.isRequired,
        index: n.PropTypes.number.isRequired
      };
      t.default = c
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = l(n);
      var o = r(2);
      var i = r(132);
      var s = r(164);
      var u = l(s);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = function e(t) {
        var r = t.searchValue,
          n = t.searchIsActive,
          s = t.selectedHazardGroupCode,
          l = t.selectedHazardGroupCategory,
          c = t.onResetFilter;
        var d = null;
        var f = o.translator.translate("label_hazards_filtered_by") + ' "' + r + '"';
        if (!n && !s) {
          f = a.default.createElement("span", null, o.translator.translate("label_initial_suggested_hazards_header"))
        } else if (!n && s) {
          var p = o.translator.translate(i.HazardGroup.getResourceKey(s));
          d = a.default.createElement(u.default, {
            code: s,
            category: l
          });
          f = a.default.createElement("span", null, o.translator.translate("label_hazards_for_group"), " “", d, " ", p, "”")
        }
        var v = n ? a.default.createElement("button", {
          className: "glyphicon glyphicon-remove reset-btn",
          title: o.translator.translate("tooltip_reset_fiter"),
          onClick: c
        }) : null;
        return a.default.createElement("h4", {
          className: "filtered-items-title"
        }, a.default.createElement("span", {
          className: "text-truncate"
        }, f), v)
      };
      c.propTypes = {
        searchValue: n.PropTypes.string.isRequired,
        searchIsActive: n.PropTypes.bool.isRequired,
        selectedHazardGroupCode: n.PropTypes.string.isRequired,
        selectedHazardGroupCategory: n.PropTypes.string.isRequired,
        onResetFilter: n.PropTypes.func.isRequired
      };
      t.default = c
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = d(n);
      var o = r(2);
      var i = r(132);
      var s = r(305);
      var u = d(s);
      var l = r(306);
      var c = d(l);

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var f = function e(t) {
        var r = t.groupedHazards,
          n = t.selectedHazardGroupCode,
          i = t.onSelectHazardGroup,
          s = t.showIndicator;
        if (!r.length) return null;
        return a.default.createElement("div", {
          className: "form-group available-hazard-groups"
        }, a.default.createElement("label", {
          className: "col-2 col-modified control-label is-required"
        }, o.translator.translate("label_hazard_group")), a.default.createElement("div", {
          className: "col-10 col-modified"
        }, a.default.createElement(u.default, {
          groupedHazards: r,
          selectedHazardGroupCode: n,
          onSelectHazardGroup: i
        })), a.default.createElement(c.default, {
          visible: s
        }))
      };
      f.propTypes = {
        groupedHazards: n.PropTypes.arrayOf(n.PropTypes.instanceOf(i.HazardGroup)).isRequired,
        selectedHazardGroupCode: n.PropTypes.string,
        onSelectHazardGroup: n.PropTypes.func.isRequired,
        showIndicator: n.PropTypes.bool.isRequired
      };
      f.defaultProps = {
        selectedHazardGroupCode: ""
      };
      t.default = f
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = f(n);
      var o = r(163);
      var i = f(o);
      var s = r(169);
      var u = r(2);
      var l = r(132);
      var c = r(164);
      var d = f(c);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var p = function e(t) {
        var r = t.groupedHazards,
          n = t.onSelectHazardGroup,
          o = t.selectedHazardGroupCode;
        if (!r.length) {
          return null
        }
        var c = a.default.createElement("em", null, u.translator.translate("label_select_hazard_group"));
        var f = r.map(function(e) {
          var t = u.translator.translate(l.HazardGroup.getResourceKey(e.code));
          var r = a.default.createElement("span", null, a.default.createElement(d.default, {
            code: e.code,
            category: e.category
          }), " ", t);
          if (e.code === o) {
            c = r
          }
          return {
            value: e.code,
            control: r,
            className: (0, i.default)("text-truncate", {
              "is-selected": e.code === o
            })
          }
        });
        return a.default.createElement(s.DropDown, {
          items: f,
          className: "hazardgroups-dropdown dropdown-fluid",
          selectedContent: c,
          onSelectItem: n
        })
      };
      p.propTypes = {
        groupedHazards: n.PropTypes.arrayOf(n.PropTypes.instanceOf(l.HazardGroup)).isRequired,
        onSelectHazardGroup: n.PropTypes.func.isRequired,
        selectedHazardGroupCode: n.PropTypes.string
      };
      p.defaultProps = {
        selectedHazardGroupCode: ""
      };
      t.default = p
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = s(n);
      var o = r(163);
      var i = s(o);

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var u = function e(t) {
        var r = t.visible,
          n = t.loading;
        if (!r) {
          return null
        }
        var o = (0, i.default)("active-indicator glyphicon", {
          "glyphicon-chevron-right": !n,
          "glyphicon-refresh animation-spin": n
        });
        return a.default.createElement("span", {
          className: o
        })
      };
      u.propTypes = {
        visible: n.PropTypes.bool.isRequired,
        loading: n.PropTypes.bool
      };
      u.defaultProps = {
        loading: false
      };
      t.default = u
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = u(n);
      var o = r(2);
      var i = r(308);
      var s = u(i);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var l = function e(t) {
        var r = t.types,
          n = t.selectedHazardTypeCode,
          i = t.onSelectHazardType;
        if (!r.length) return null;
        return a.default.createElement("div", {
          className: "form-group"
        }, a.default.createElement("label", {
          className: "col-2 col-modified control-label is-required"
        }, o.translator.translate("label_hazard_type")), a.default.createElement("div", {
          className: "col-10 col-modified"
        }, a.default.createElement(s.default, {
          types: r,
          selectedHazardTypeCode: n,
          onSelectHazardType: i
        })))
      };
      l.propTypes = {
        types: n.PropTypes.arrayOf(n.PropTypes.string).isRequired,
        selectedHazardTypeCode: n.PropTypes.string,
        onSelectHazardType: n.PropTypes.func.isRequired
      };
      l.defaultProps = {
        selectedHazardTypeCode: ""
      };
      t.default = l
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = l(n);
      var o = r(163);
      var i = l(o);
      var s = r(169);
      var u = r(2);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = function e(t) {
        var r = t.types,
          n = t.onSelectHazardType,
          o = t.selectedHazardTypeCode;
        if (!r.length) {
          return null
        }
        var l = a.default.createElement("em", null, u.translator.translate("label_select_hazard_type"));
        var c = r.map(function(e) {
          var t = u.translator.translate("HazardType_" + e);
          var r = a.default.createElement("span", null, t);
          if (e === o) {
            l = r
          }
          return {
            value: e,
            control: r,
            className: (0, i.default)("text-truncate", {
              "is-selected": e === o
            })
          }
        });
        return a.default.createElement(s.DropDown, {
          items: c,
          className: "hazardtypes-dropdown dropdown-fluid",
          selectedContent: l,
          onSelectItem: n
        })
      };
      c.propTypes = {
        types: n.PropTypes.arrayOf(n.PropTypes.string).isRequired,
        onSelectHazardType: n.PropTypes.func.isRequired,
        selectedHazardTypeCode: n.PropTypes.string
      };
      c.defaultProps = {
        selectedHazardTypeCode: ""
      };
      t.default = c
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = c(n);
      var o = r(294);
      var i = c(o);
      var s = r(2);
      var u = r(306);
      var l = c(u);

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var d = function e(t) {
        var r = t.labelKey,
          n = t.value,
          o = t.onInput,
          u = t.onKeyDown,
          c = t.placeholderKey,
          d = t.onAdd,
          f = t.disableAddBtn,
          p = t.active,
          v = t.onSearch,
          h = t.searchTooltipKey;
        return a.default.createElement("div", {
          className: "form-group"
        }, a.default.createElement("label", {
          className: "col-2 col-modified control-label is-required"
        }, s.translator.translate(r)), a.default.createElement("div", {
          className: "col-10 col-modified"
        }, a.default.createElement(i.default, {
          autoFocus: true,
          rows: 2,
          className: "form-control",
          value: n,
          onInput: o,
          onChange: function e() {},
          onKeyDown: u,
          placeholder: s.translator.translate(c),
          maxLength: 2e3
        })), a.default.createElement("div", {
          className: "col-12 new-item-description-btns"
        }, a.default.createElement("button", {
          className: "btn search-btn",
          onClick: v,
          disabled: !n.trim().length,
          title: s.translator.translate(h)
        }, a.default.createElement("span", {
          className: "btn-icon glyphicon glyphicon-search"
        }), s.translator.translate("label_search")), a.default.createElement("button", {
          className: "btn add-btn",
          onClick: d,
          disabled: f,
          title: s.translator.translate("tooltip_add_as_unlisted")
        }, a.default.createElement("span", {
          className: "btn-icon glyphicon glyphicon-plus"
        }), s.translator.translate("label_add_as_unlisted"))), a.default.createElement(l.default, {
          visible: p
        }))
      };
      d.propTypes = {
        labelKey: n.PropTypes.string.isRequired,
        value: n.PropTypes.string.isRequired,
        onInput: n.PropTypes.func.isRequired,
        onKeyDown: n.PropTypes.func.isRequired,
        placeholderKey: n.PropTypes.string.isRequired,
        onAdd: n.PropTypes.func.isRequired,
        disableAddBtn: n.PropTypes.bool.isRequired,
        active: n.PropTypes.bool.isRequired,
        onSearch: n.PropTypes.func.isRequired,
        searchTooltipKey: n.PropTypes.string.isRequired
      };
      t.default = d
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            if ("value" in n) n.writable = true;
            Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          if (r) e(t.prototype, r);
          if (n) e(t, n);
          return t
        }
      }();
      var a = r(1);
      var o = O(a);
      var i = r(158);
      var s = O(i);
      var u = r(2);
      var l = r(132);
      var c = r(300);
      var d = O(c);
      var f = r(311);
      var p = O(f);
      var v = r(312);
      var h = O(v);
      var y = r(284);
      var m = r(309);
      var g = O(m);
      var _ = r(313);
      var b = O(_);
      var k = r(314);
      var w = O(k);
      var T = r(315);
      var C = O(T);

      function O(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function E(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function")
        }
      }

      function R(e, t) {
        if (!e) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return t && (typeof t === "object" || typeof t === "function") ? t : e
      }

      function P(e, t) {
        if (typeof t !== "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof t)
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
      }
      var S = function(e) {
        P(t, e);

        function t(e) {
          E(this, t);
          var r = R(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          r.state = {
            selectedControlTypeCode: "",
            taskStepDropdownIsOpen: false,
            textareaValue: "",
            searchValue: "",
            searchIsActive: false,
            hazardDropdownIsOpen: false,
            isPrerequisite: false,
            filteredControls: []
          };
          r._getAvailableControls = r._getAvailableControls.bind(r);
          r._onAddUnlistedControl = r._onAddUnlistedControl.bind(r);
          r._onResetFilter = r._onResetFilter.bind(r);
          r._onSelectControlType = r._onSelectControlType.bind(r);
          r._onActiveTaskStepChange = r._onActiveTaskStepChange.bind(r);
          r._onActiveHazardChange = r._onActiveHazardChange.bind(r);
          r._onAddAvailableControl = r._onAddAvailableControl.bind(r);
          r._onTextareaInput = r._onTextareaInput.bind(r);
          r._onKeyDown = r._onKeyDown.bind(r);
          r._onCheckboxChange = r._onCheckboxChange.bind(r);
          r._onSearchControls = r._onSearchControls.bind(r);
          return r
        }
        n(t, [{
          key: "componentWillReceiveProps",
          value: function e(t) {
            if (t.activeTaskStepId !== this.props.activeTaskStepId) {
              this.setState({
                taskStepDropdownIsOpen: false
              })
            }
            if (t.activeHazardId !== this.props.activeHazardId) {
              this.setState({
                hazardDropdownIsOpen: false,
                searchIsActive: false
              })
            }
          }
        }, {
          key: "_toggleStepDropdown",
          value: function e() {
            this.setState({
              taskStepDropdownIsOpen: !this.state.taskStepDropdownIsOpen
            })
          }
        }, {
          key: "_onResetFilter",
          value: function e() {
            this.setState({
              searchIsActive: false
            })
          }
        }, {
          key: "_onSelectControlType",
          value: function e(t) {
            this.setState({
              selectedControlTypeCode: t,
              searchIsActive: false
            })
          }
        }, {
          key: "_getControlMeasures",
          value: function e(t, r) {
            var n = (0, u.getHazardFromGroupedHazards)(this.props.groupedHazards, t, r);
            if (n && n.controlMeasures) {
              return n.controlMeasures
            }
            return []
          }
        }, {
          key: "_getActiveHazard",
          value: function e() {
            var t = (0, s.default)(this.props.tasks, {
              identifier: this.props.activeTaskStepId
            });
            return (0, s.default)(t.hazards, {
              uniqueId: this.props.activeHazardId
            })
          }
        }, {
          key: "_getIdentifiedControls",
          value: function e() {
            var t = this._getActiveHazard();
            return t.controlMeasures
          }
        }, {
          key: "_getAvailableControls",
          value: function e() {
            var t = this._getActiveHazard();
            var r = this.state.searchIsActive ? this.state.filteredControls : this._getControlMeasures(t.code, t.hazardGroupCode);
            return r || []
          }
        }, {
          key: "_onActiveTaskStepChange",
          value: function e(t) {
            this.setState({
              taskStepDropdownIsOpen: false
            });
            var r = this.props,
              n = r.tasks,
              a = r.store,
              o = r.activeTaskStepId;
            if (t === o) return;
            var i = (0, s.default)(n, {
              identifier: t
            });
            if (i.hazards.length) {
              var u = i.hazards.length ? i.hazards[0].uniqueId : "";
              a.dispatch((0, y.updateActiveItem)({
                type: "HAZARD",
                taskId: t,
                hazardId: u
              }))
            } else {
              this.props.onNewHazard(t);
              a.dispatch((0, y.updateActiveItem)({
                type: "TASK",
                taskId: t
              }))
            }
          }
        }, {
          key: "_onActiveHazardChange",
          value: function e(t) {
            this.props.store.dispatch((0, y.updateActiveItem)({
              type: "HAZARD",
              hazardId: t
            }))
          }
        }, {
          key: "_toggleHazardDropdown",
          value: function e() {
            this.setState({
              hazardDropdownIsOpen: !this.state.hazardDropdownIsOpen
            })
          }
        }, {
          key: "_onSearchControls",
          value: function e() {
            var t = this;
            var r = this.state.textareaValue;
            u.searchHazardsAndControls.getControls(r).then(function(e) {
              t.setState({
                filteredControls: e,
                searchIsActive: true,
                searchValue: r
              })
            }).catch(this.props.onError)
          }
        }, {
          key: "_onTextareaInput",
          value: function e(t) {
            var r = t.target.value;
            this.setState({
              textareaValue: r
            })
          }
        }, {
          key: "_onAddUnlistedControl",
          value: function e() {
            var t = this.props.store;
            if (this.state.textareaValue.trim().length) {
              t.dispatch((0, y.addControl)({
                tasks: t.getState().tasks,
                taskId: this.props.activeTaskStepId,
                hazardId: this.props.activeHazardId,
                description: this.state.textareaValue,
                isPrerequisite: this.state.isPrerequisite,
                controlType: this.state.selectedControlTypeCode
              }));
              this.setState({
                textareaValue: "",
                searchIsActive: false,
                isPrerequisite: false
              })
            }
          }
        }, {
          key: "_onAddAvailableControl",
          value: function e(t) {
            var r = this.props.store;
            r.dispatch((0, y.addAvailableControl)({
              tasks: r.getState().tasks,
              taskId: this.props.activeTaskStepId,
              hazardId: this.props.activeHazardId,
              isPrerequisite: this.state.isPrerequisite,
              control: t
            }))
          }
        }, {
          key: "_onKeyDown",
          value: function e(t) {
            if (t.ctrlKey && t.which === u.keyCodes.enter) {
              this._onAddUnlistedControl()
            }
          }
        }, {
          key: "_onCheckboxChange",
          value: function e(t) {
            this.setState({
              isPrerequisite: t.target.checked
            })
          }
        }, {
          key: "render",
          value: function e() {
            var t = this.props.controlTypes.length;
            var r = t ? !!this.state.selectedControlTypeCode : true;
            var n = !this.props.isAllowed(["IdentifyUnlistedRiskAssessmentControlMeasure"]) || !this.state.textareaValue.trim().length || !r;
            var a = this.props.isAllowed(["MarkControlMeasureAsPrerequisite", "MarkControlMeasureAsSupplementary"]);
            return o.default.createElement("div", {
              className: "new-item-wrapper"
            }, o.default.createElement("div", {
              className: "new-item-left"
            }, o.default.createElement("h4", {
              className: "new-item-title"
            }, u.translator.translate("label_new_control_measure_title")), o.default.createElement("div", {
              className: "form-horizontal"
            }, o.default.createElement("div", {
              className: "form-group"
            }, o.default.createElement("label", {
              className: "col-2 col-modified control-label"
            }, u.translator.translate("label_task_step_selector")), o.default.createElement("div", {
              className: "col-10 col-modified"
            }, o.default.createElement(d.default, {
              tasks: this.props.tasks,
              activeTaskStepId: this.props.activeTaskStepId,
              onSelectItem: this._onActiveTaskStepChange
            }))), o.default.createElement(w.default, {
              tasks: this.props.tasks,
              activeTaskStepId: this.props.activeTaskStepId,
              activeHazardId: this.props.activeHazardId,
              active: !this.state.searchIsActive,
              onActiveHazardChange: this._onActiveHazardChange
            }), o.default.createElement(C.default, {
              types: this.props.controlTypes,
              selectedControlTypeCode: this.state.selectedControlTypeCode,
              onSelectControlType: this._onSelectControlType
            }), o.default.createElement(b.default, {
              disabled: !a,
              checked: this.state.isPrerequisite,
              onChange: this._onCheckboxChange
            }), o.default.createElement(g.default, {
              labelKey: "label_cm_description",
              value: this.state.textareaValue,
              onInput: this._onTextareaInput,
              onKeyDown: this._onKeyDown,
              placeholderKey: "placeholder_controlmeasure_description_textarea",
              searchTooltipKey: "tooltip_search_available_controls",
              onAdd: this._onAddUnlistedControl,
              onSearch: this._onSearchControls,
              disableAddBtn: n,
              active: this.state.searchIsActive
            }))), o.default.createElement("div", {
              className: "new-item-right"
            }, o.default.createElement(p.default, {
              textareaValue: this.state.searchValue,
              searchIsActive: this.state.searchIsActive,
              onResetFilter: this._onResetFilter
            }), o.default.createElement(h.default, {
              identifiedControls: this._getIdentifiedControls(),
              controls: this._getAvailableControls(),
              canAddListed: this.props.isAllowed(["SelectListedRiskAssessmentControlMeasure"]),
              onAddControl: this._onAddAvailableControl
            })))
          }
        }]);
        return t
      }(o.default.Component);
      S.propTypes = {
        store: a.PropTypes.shape({
          dispatch: a.PropTypes.func.isRequired
        }).isRequired,
        groupedHazards: a.PropTypes.arrayOf(a.PropTypes.instanceOf(l.HazardGroup)).isRequired,
        controlTypes: a.PropTypes.arrayOf(a.PropTypes.string).isRequired,
        isAllowed: a.PropTypes.func.isRequired,
        tasks: a.PropTypes.arrayOf(a.PropTypes.instanceOf(l.TaskStep)).isRequired,
        activeTaskStepId: a.PropTypes.string.isRequired,
        activeHazardId: a.PropTypes.string.isRequired,
        onNewHazard: a.PropTypes.func.isRequired,
        onError: a.PropTypes.func.isRequired
      };
      t.default = S
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = i(n);
      var o = r(2);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = function e(t) {
        var r = t.textareaValue,
          n = t.searchIsActive,
          i = t.onResetFilter;
        var s = o.translator.translate("label_suggested_by_selected_hazard");
        var u = null;
        if (n) {
          s = o.translator.translate("label_filtered_by") + " “" + r + "”";
          u = a.default.createElement("button", {
            className: "glyphicon glyphicon-remove reset-btn",
            title: o.translator.translate("tooltip_reset_fiter"),
            onClick: i
          })
        }
        return a.default.createElement("h4", {
          className: "filtered-items-title"
        }, a.default.createElement("span", {
          className: "text-truncate"
        }, o.translator.translate("label_control_measures"), " ", s), u)
      };
      s.propTypes = {
        textareaValue: n.PropTypes.string.isRequired,
        searchIsActive: n.PropTypes.bool.isRequired,
        onResetFilter: n.PropTypes.func.isRequired
      };
      t.default = s
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = l(n);
      var o = r(163);
      var i = l(o);
      var s = r(2);
      var u = r(132);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = function e(t) {
        var r = t.controls,
          n = t.canAddListed,
          o = t.identifiedControls,
          l = t.onAddControl;
        var c = a.default.createElement("em", {
          className: "list-group-item"
        }, s.translator.translate("label_no_suggested_controls"));
        if (r.length) {
          c = r.map(function(e, t) {
            var r = u.AvailableControlMeasure.getResourceKey(e.code);
            var c = s.translator.translate(r);
            var d = o.some(function(e) {
              var t = null;
              if (e.isUnlisted) {
                t = e.unlistedDescription
              } else {
                var r = u.AvailableControlMeasure.getResourceKey(e.code);
                t = s.translator.translate(r)
              }
              return t === c
            });
            var f = (0, i.default)("list-group-item control-measure-item", {
              "bg-alt": t % 2 !== 0,
              disabled: !n || d
            });
            var p = d ? s.translator.translate("tooltip_control_already_exists") : null;
            return a.default.createElement("button", {
              key: e.code,
              className: f,
              disabled: !n || d,
              onClick: function t() {
                l(e)
              },
              title: p
            }, c)
          })
        }
        return a.default.createElement("div", {
          className: "suggested-items list-group"
        }, c)
      };
      c.propTypes = {
        controls: n.PropTypes.arrayOf(n.PropTypes.oneOfType([n.PropTypes.instanceOf(u.AvailableControlMeasure), n.PropTypes.instanceOf(u.FlattenedAvailableControlMeasure)])).isRequired,
        identifiedControls: n.PropTypes.arrayOf(n.PropTypes.instanceOf(u.IdentifiedControlMeasure)).isRequired,
        onAddControl: n.PropTypes.func.isRequired,
        canAddListed: n.PropTypes.bool.isRequired
      };
      t.default = c
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = i(n);
      var o = r(2);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = function e(t) {
        var r = t.disabled,
          n = t.checked,
          i = t.onChange;
        return a.default.createElement("div", {
          className: "form-group"
        }, a.default.createElement("label", {
          className: "col-2 col-modified control-label"
        }, o.translator.translate("label_prerequisite")), a.default.createElement("div", {
          className: "col-10 col-modified"
        }, a.default.createElement("div", {
          className: "checkbox"
        }, a.default.createElement("label", null, a.default.createElement("input", {
          type: "checkbox",
          disabled: r,
          checked: n,
          onChange: i,
          className: "prerequisite-checkbox"
        })))))
      };
      s.propTypes = {
        disabled: n.PropTypes.bool.isRequired,
        checked: n.PropTypes.bool.isRequired,
        onChange: n.PropTypes.func.isRequired
      };
      t.default = s
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = v(n);
      var o = r(158);
      var i = v(o);
      var s = r(163);
      var u = v(s);
      var l = r(169);
      var c = r(132);
      var d = r(2);
      var f = r(306);
      var p = v(f);

      function v(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var h = function e(t) {
        var r = t.tasks,
          n = t.activeTaskStepId,
          o = t.activeHazardId,
          s = t.active,
          f = t.onActiveHazardChange;
        var v = (0, i.default)(r, {
          identifier: n
        });
        var h = void 0;
        var y = [];
        if (v) {
          y = v.hazards.map(function(e) {
            var t = e.isUnlisted ? e.unlistedDescription : d.translator.translate(c.AvailableHazard.getResourceKey(e.code));
            if (e.uniqueId === o) {
              h = t
            }
            return {
              value: e.uniqueId,
              control: t,
              className: (0, u.default)("text-truncate", {
                "is-selected": e.uniqueId === o
              })
            }
          })
        }
        return a.default.createElement("div", {
          className: "form-group"
        }, a.default.createElement("label", {
          className: "col-2 col-modified control-label"
        }, d.translator.translate("label_hazard_selector")), a.default.createElement("div", {
          className: "col-10 col-modified"
        }, a.default.createElement(l.DropDown, {
          items: y,
          className: "hazard-dropdown dropdown-fluid",
          selectedContent: h,
          onSelectItem: f
        })), a.default.createElement(p.default, {
          visible: s
        }))
      };
      h.propTypes = {
        tasks: n.PropTypes.arrayOf(n.PropTypes.instanceOf(c.TaskStep)).isRequired,
        activeTaskStepId: n.PropTypes.string.isRequired,
        activeHazardId: n.PropTypes.string.isRequired,
        active: n.PropTypes.bool.isRequired,
        onActiveHazardChange: n.PropTypes.func.isRequired
      };
      t.default = h
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = u(n);
      var o = r(2);
      var i = r(316);
      var s = u(i);

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var l = function e(t) {
        var r = t.types,
          n = t.selectedControlTypeCode,
          i = t.onSelectControlType;
        if (!r.length) return null;
        return a.default.createElement("div", {
          className: "form-group"
        }, a.default.createElement("label", {
          className: "col-2 col-modified control-label is-required"
        }, o.translator.translate("label_control_measure_type")), a.default.createElement("div", {
          className: "col-10 col-modified"
        }, a.default.createElement(s.default, {
          types: r,
          selectedControlTypeCode: n,
          onSelectControlType: i
        })))
      };
      l.propTypes = {
        types: n.PropTypes.arrayOf(n.PropTypes.string).isRequired,
        selectedControlTypeCode: n.PropTypes.string,
        onSelectControlType: n.PropTypes.func.isRequired
      };
      l.defaultProps = {
        selectedControlTypeCode: ""
      };
      t.default = l
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = l(n);
      var o = r(163);
      var i = l(o);
      var s = r(169);
      var u = r(2);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var c = function e(t) {
        var r = t.types,
          n = t.onSelectControlType,
          o = t.selectedControlTypeCode;
        if (!r.length) {
          return null
        }
        var l = a.default.createElement("em", null, u.translator.translate("label_select_control_type"));
        var c = r.map(function(e) {
          var t = u.translator.translate("ControlMeasureType_" + e);
          var r = a.default.createElement("span", null, t);
          if (e === o) {
            l = r
          }
          return {
            value: e,
            control: r,
            className: (0, i.default)("text-truncate", {
              "is-selected": e === o
            })
          }
        });
        return a.default.createElement(s.DropDown, {
          items: c,
          className: "controltypes-dropdown dropdown-fluid",
          selectedContent: l,
          onSelectItem: n
        })
      };
      c.propTypes = {
        types: n.PropTypes.arrayOf(n.PropTypes.string).isRequired,
        onSelectControlType: n.PropTypes.func.isRequired,
        selectedControlTypeCode: n.PropTypes.string
      };
      c.defaultProps = {
        selectedControlTypeCode: ""
      };
      t.default = c
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(1);
      var a = i(n);
      var o = r(2);

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var s = function e(t) {
        var r = t.show,
          n = t.contentKey;
        if (!r) return null;
        return a.default.createElement("div", {
          className: "alert alert-warning pending-changes-warning"
        }, a.default.createElement("span", {
          className: "glyphicon glyphicon-exclamation-sign"
        }), a.default.createElement("p", {
          className: "alert-content"
        }, o.translator.translate(n)))
      };
      s.propTypes = {
        show: n.PropTypes.bool.isRequired,
        contentKey: n.PropTypes.string.isRequired
      };
      t.default = s
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(275);
      var a = r(319);
      var o = c(a);
      var i = r(322);
      var s = c(i);
      var u = r(323);
      var l = c(u);

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var d = (0, n.combineReducers)({
        tasks: o.default,
        activeItem: s.default,
        dirty: l.default
      });
      t.default = d
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = r(2);
      var o = r(320);
      var i = p(o);
      var s = r(321);
      var u = p(s);
      var l = r(286);
      var c = f(l);
      var d = r(132);

      function f(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function v(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t]
          }
          return r
        } else {
          return Array.from(e)
        }
      }
      var h = function e(t, r) {
        var n = r.taskId;
        var o = (0, a.getIndexes)(t, n),
          i = o.taskIndex;
        var s = [].concat(v(t.slice(0, i)), v(t.slice(i + 1)));
        var u = (0, a.updateNumbers)(s, d.TaskStep);
        return u
      };
      var y = function e(t, r) {
        var n = r.task;
        var o = (0, a.getIndexes)(t, n.identifier),
          i = o.taskIndex;
        return [].concat(v(t.slice(0, i)), [n], v(t.slice(i + 1)))
      };
      var m = function e(t, r) {
        var n = r.task,
          o = r.index,
          i = r.newIndex;
        var s = t;
        var u = Math.max(0, i);
        u = Math.min(u, t.length - 1);
        if (u !== o) {
          var l = (0, a.reorderItem)(t, n, o, i);
          var c = (0, a.updateNumbers)(l, d.TaskStep);
          s = c
        }
        return [].concat(v(s))
      };
      var g = function e(t, r) {
        return t.map(function(e) {
          if (e.identifier === r.taskId) {
            return new d.TaskStep(n({}, e, {
              hazards: (0, i.default)(e.hazards, r)
            }))
          }
          return e
        })
      };
      var _ = function e(t, r) {
        return t.map(function(e) {
          if (e.uniqueId === r.hazardId) {
            return new d.IdentifiedHazard(n({}, e, {
              controlMeasures: (0, u.default)(e.controlMeasures, r)
            }))
          }
          return e
        })
      };
      var b = function e(t, r) {
        return t.map(function(e) {
          if (e.identifier === r.taskId) {
            return new d.TaskStep(n({}, e, {
              hazards: _(e.hazards, r)
            }))
          }
          return e
        })
      };
      var k = function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var r = arguments[1];
        switch (r.type) {
          case c.SET_TASKS:
            return [].concat(v(r.tasks));
          case c.ADD_TASK:
            return [].concat(v(t), [r.task]);
          case c.REMOVE_TASK:
            return h(t, r);
          case c.UPDATE_TASK:
            return y(t, r);
          case c.REORDER_TASK:
            return m(t, r);
          case c.ADD_HAZARD:
          case c.REMOVE_HAZARD:
          case c.UPDATE_HAZARD:
          case c.REORDER_HAZARD:
            return g(t, r);
          case c.ADD_CONTROL:
          case c.REMOVE_CONTROL:
          case c.UPDATE_CONTROL:
          case c.REORDER_CONTROL:
            return b(t, r);
          default:
            return t
        }
      };
      t.default = k
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(8);
      var a = c(n);
      var o = r(2);
      var i = r(132);
      var s = r(286);
      var u = l(s);

      function l(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function d(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t]
          }
          return r
        } else {
          return Array.from(e)
        }
      }
      var f = function e(t, r) {
        return (0, a.default)(t, {
          uniqueId: r
        })
      };
      var p = function e(t, r) {
        var n = r.hazardId;
        var a = f(t, n);
        var s = [].concat(d(t.slice(0, a)), d(t.slice(a + 1)));
        var u = (0, o.updateNumbers)(s, i.IdentifiedHazard);
        return u
      };
      var v = function e(t, r) {
        var n = r.hazard;
        var a = f(t, n.uniqueId);
        return [].concat(d(t.slice(0, a)), [n], d(t.slice(a + 1)))
      };
      var h = function e(t, r) {
        var n = r.hazard,
          a = r.index,
          s = r.newIndex;
        var u = t;
        var l = Math.max(0, s);
        l = Math.min(l, t.length - 1);
        if (l !== a) {
          var c = (0, o.reorderItem)(t, n, a, s);
          var f = (0, o.updateNumbers)(c, i.IdentifiedHazard);
          u = f
        }
        return [].concat(d(u))
      };
      var y = function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var r = arguments[1];
        switch (r.type) {
          case u.ADD_HAZARD:
            return [].concat(d(t), [r.hazard]);
          case u.REMOVE_HAZARD:
            return p(t, r);
          case u.UPDATE_HAZARD:
            return v(t, r);
          case u.REORDER_HAZARD:
            return h(t, r);
          default:
            return t
        }
      };
      t.default = y
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(8);
      var a = c(n);
      var o = r(2);
      var i = r(132);
      var s = r(286);
      var u = l(s);

      function l(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function d(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t]
          }
          return r
        } else {
          return Array.from(e)
        }
      }
      var f = function e(t, r) {
        return (0, a.default)(t, {
          uniqueId: r
        })
      };
      var p = function e(t, r) {
        var n = r.controlId;
        var a = f(t, n);
        var s = [].concat(d(t.slice(0, a)), d(t.slice(a + 1)));
        var u = (0, o.updateNumbers)(s, i.IdentifiedControlMeasure);
        return u
      };
      var v = function e(t, r) {
        var n = r.control;
        var a = f(t, n.uniqueId);
        return [].concat(d(t.slice(0, a)), [n], d(t.slice(a + 1)))
      };
      var h = function e(t, r) {
        var n = r.control,
          a = r.index,
          s = r.newIndex;
        var u = t;
        var l = Math.max(0, s);
        l = Math.min(l, t.length - 1);
        if (l !== a) {
          var c = (0, o.reorderItem)(t, n, a, s);
          var f = (0, o.updateNumbers)(c, i.IdentifiedControlMeasure);
          u = f
        }
        return [].concat(d(u))
      };
      var y = function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var r = arguments[1];
        switch (r.type) {
          case u.ADD_CONTROL:
            return [].concat(d(t), [r.control]);
          case u.REMOVE_CONTROL:
            return p(t, r);
          case u.UPDATE_CONTROL:
            return v(t, r);
          case u.REORDER_CONTROL:
            return h(t, r);
          default:
            return t
        }
      };
      t.default = y
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) {
            if (Object.prototype.hasOwnProperty.call(r, n)) {
              e[n] = r[n]
            }
          }
        }
        return e
      };
      var a = r(132);
      var o = r(286);
      var i = s(o);

      function s(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }
      var u = function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new a.ActiveItem({});
        var r = arguments[1];
        switch (r.type) {
          case i.SET_ACTIVE_ITEM:
            return new a.ActiveItem(n({}, r.item));
          case i.UPDATE_ACTIVE_ITEM:
            return new a.ActiveItem(n({}, t, r.item));
          case i.ADD_TASK:
            return new a.ActiveItem({
              type: "TASK",
              taskId: r.task.identifier
            });
          case i.ADD_HAZARD:
            return new a.ActiveItem({
              type: "HAZARD",
              taskId: r.taskId,
              hazardId: r.hazard.uniqueId
            });
          case i.ADD_CONTROL:
            return new a.ActiveItem({
              type: "CONTROL",
              taskId: r.taskId,
              hazardId: r.hazardId,
              controlId: r.control.uniqueId
            });
          default:
            return t
        }
      };
      t.default = u
    }, function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = r(286);
      var a = o(n);

      function o(e) {
        if (e && e.__esModule) {
          return e
        } else {
          var t = {};
          if (e != null) {
            for (var r in e) {
              if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r]
            }
          }
          t.default = e;
          return t
        }
      }
      var i = function e() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var r = arguments[1];
        switch (r.type) {
          case a.SET_TASKS:
          case a.SET_CLEAN:
            return false;
          case a.SET_ACTIVE_ITEM:
          case a.UPDATE_ACTIVE_ITEM:
          case a.RESET_ACTIVE_ITEM:
            return t;
          default:
            return true
        }
      };
      t.default = i
    }])
  })
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  t.getAdditionalMainMenuButtons = s;
  t.getPrimaryMenuButtons = u;
  var n = r(37);
  var a = o(n);

  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var i = [{
    key: "HealthOverview",
    iconClass: "icon-buttons-health_overview",
    url: "healthOverview#/"
  }, {
    key: "ShiftPlanning",
    iconClass: "icon-buttons-shifts_planning",
    url: "shiftsplanning#/"
  }, {
    key: "SelfVerification",
    iconClass: "icon-buttons-self_verification_dashboard",
    url: "selfverification#/"
  }, {
    key: "PerformingAuthorityFeedback",
    iconClass: "icon-buttons-performing_authority_feedback",
    url: "pafeedback#/"
  }, {
    key: "OverdueLookahead",
    iconClass: "icon-buttons-overdue_lookahead",
    url: "overdueLookahead#/"
  }, {
    key: "LessonsLearned",
    iconClass: "icon-visioncontrol-buttons-lessonsLearned",
    url: "lessonsLearned#/"
  }];

  function s() {
    return i.map(function(e) {
      return {
        key: e.key,
        iconClass: e.iconClass,
        url: "bp/" + e.url
      }
    })
  }

  function u() {
    return i.map(function(e) {
      return new a.default("PermitVision.Label_MenuButton_" + e.key + "_Text", e.iconClass, "./" + e.url)
    })
  }
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });

  function r(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }
  var n = function e(t, n, a, o, i) {
    r(this, e);
    this.resourceKey = t;
    this.cssClass = n;
    this.href = a;
    this.isActive = o || false;
    this.onClick = i
  };
  t.default = n
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(5);
  var o = p(a);
  var i = r(23);
  var s = p(i);
  var u = r(28);
  var l = p(u);
  var c = r(9);
  var d = p(c);
  var f = r(12);

  function p(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function v(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function h(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function y(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var m = function(e) {
    y(t, e);

    function t(e) {
      v(this, t);
      var r = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      r.state = {
        textResource: "PermitVision.VerifyingIfPermitHasAmendedIccAttachment"
      };
      return r
    }
    n(t, [{
      key: "componentDidMount",
      value: function e() {
        var t = this;
        var r = {
          registrationNumber: this.props.registrationNumber
        };
        var n = new s.default("bp/api/hasAmendedIcc", r, "post").buildUrl();
        l.default.post(n, r).then(function(e) {
          t.setState({
            textResource: e ? "PermitVision.PermitHasAmendedIccAttachment" : null
          })
        }, function(e) {
          return (0, f.addGlobalError)(e, false)
        })
      }
    }, {
      key: "render",
      value: function e() {
        if (!this.state.textResource) {
          return null
        }
        return o.default.createElement("div", {
          className: "form-group"
        }, o.default.createElement("div", {
          className: "col-12"
        }, o.default.createElement("div", {
          className: "alert alert-warning"
        }, o.default.createElement("span", {
          className: "glyphicon glyphicon-exclamation-sign"
        }), o.default.createElement("ul", {
          className: "alert-content alert-content-list alert-count-1"
        }, o.default.createElement("li", {
          className: "validation-error"
        }, o.default.createElement(d.default, {
          content: this.state.textResource
        }))))))
      }
    }]);
    return t
  }(o.default.Component);
  m.propTypes = {
    registrationNumber: o.default.PropTypes.string.isRequired
  };
  t.default = m
}, function(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: true
  });
  var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ("value" in n) n.writable = true;
        Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      if (r) e(t.prototype, r);
      if (n) e(t, n);
      return t
    }
  }();
  var a = r(5);
  var o = u(a);
  var i = r(9);
  var s = u(i);

  function u(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function l(e, t) {
    if (!(e instanceof t)) {
      throw new TypeError("Cannot call a class as a function")
    }
  }

  function c(e, t) {
    if (!e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return t && (typeof t === "object" || typeof t === "function") ? t : e
  }

  function d(e, t) {
    if (typeof t !== "function" && t !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t)
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
  }
  var f = function(e) {
    d(t, e);

    function t() {
      l(this, t);
      return c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    n(t, [{
      key: "render",
      value: function e() {
        var t = this.props,
          r = t.options,
          n = t.certificate;
        var a = this.props.options.field.signatureTypes.split(",");
        var i = this.props.options.field.inState;
        if (n.state.toLowerCase() !== i.toLowerCase() || !n.signedWith(a)) {
          return null
        }
        return o.default.createElement("div", {
          className: "row readonlyrow alert-wrapper"
        }, o.default.createElement("div", {
          className: "alert alert-warning"
        }, o.default.createElement("span", {
          className: "glyphicon glyphicon-warning-sign"
        }), o.default.createElement(s.default, {
          component: "p",
          content: "PermitVision.Label_" + r.field.textResource,
          className: "alert-content"
        })))
      }
    }]);
    return t
  }(o.default.Component);
  f.rowClass = "partlySignedWarning-field";
  f.propTypes = {
    certificate: o.default.PropTypes.object.isRequired,
    options: o.default.PropTypes.object.isRequired
  };
  t.default = f
}]);