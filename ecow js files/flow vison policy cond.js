
window.policyConditions = (function() {
    // this file contains generated code. Do not modify, your changes will be overwritten!!!
    /* tslint:disable:comma-dangle no-unused-variable no-unused-vars no-trailing-whitespace no-unreachable max-line-length curly comment-format no-trailing-comma */

    var _log;
    var log = function() {
        if (!_log) {
            _log = logger.getLoggerFor('editabilityPolicy');
        }
        _log(arguments);
    };
    // should have: userAuthorization

    var policyPassed = function(policyName, cert, user, statement) {
        log(' --- passed editability policy:  + policyName, statement, cert, user');
        return true;
    };

    var policyFailed = function(policyName, cert, user, statement) {
        log(' *** failed editability policy: ' + policyName, cert, user);
        return false;
    };

    var userMatchesAnyOfAuthorities = function(authorityProperties, certificate, user) {
        var authorities = [];

        for (var i = 0; i < authorityProperties.length; i++) {
            authorities = authorities.concat(certificate.findAuthorities(authorityProperties[i]));
        }

        return _.some(authorities, function(authority) {
            return authority === user.identity || authority.id === user.identity;
        });
    };


    var attachWorkItems = {
        isolation: {
            states: ['Requesting', 'Modification', 'DesignComplete', 'WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'IsolationInPlaceForSanctionToTest', 'IsolationInPlaceForLongTerm'],
            parentStates: {permit: ["Requesting", "Approved", "Verified"]},
            allowedFromAnotherSite: true,
            checkPolicyForAttachment: function(cert, user) {
                return _.some(['Requesting', 'Modification', 'DesignComplete', 'WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'IsolationInPlaceForSanctionToTest', 'IsolationInPlaceForLongTerm'], function(s) {
                    return s === cert.state;
                });
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if ([''].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'Isolation'; })) {
                        return policyFailed('attachWorkItem', cert, user);
                    }

                    return policyPassed('attachWorkItem', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state)");
                    }
                    if (cert.kind === 'Permit' && _.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
                    }
                    return policyFailed('attachWorkItem', cert, user);
                }

                return allowMultipleAttachmentsOfKind(_cert, _user) && policies(_cert, _user);
            }
        },
        taskriskassessment: {
            states: [],
            parentStates: {isolation: ["Requesting", "Modification", "IsolationInPlaceForLongTerm"],
            lolcmovement: ["Requesting"],
            lolcoperationalinspection: ["Requesting"],
            leak: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['Isolation', 'Leak'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'TaskRiskAssessment'; })) {
                        return policyFailed('attachWorkItem', cert, user);
                    }

                    return policyPassed('attachWorkItem', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification', 'IsolationInPlaceForLongTerm'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification', 'IsolationInPlaceForLongTerm'], cert.state)");
                    }
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Leak' && _.includes(['C1', 'C2', 'C3', 'C4'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Leak' && _.includes(['C1', 'C2', 'C3', 'C4'], cert.variant) && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('attachWorkItem', cert, user);
                }

                return allowMultipleAttachmentsOfKind(_cert, _user) && policies(_cert, _user);
            }
        },
        isolationtemplate: {
            states: [],
            parentStates: {permittemplate: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if ([''].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'IsolationTemplate'; })) {
                        return policyFailed('attachWorkItem', cert, user);
                    }

                    return policyPassed('attachWorkItem', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('attachWorkItem', cert, user);
                }

                return allowMultipleAttachmentsOfKind(_cert, _user) && policies(_cert, _user);
            }
        },
        taskriskassessmenttemplate: {
            states: [],
            parentStates: {isolationtemplate: ["Requesting", "Modification"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['IsolationTemplate'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'TaskRiskAssessmentTemplate'; })) {
                        return policyFailed('attachWorkItem', cert, user);
                    }

                    return policyPassed('attachWorkItem', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ProcessIsolatingAuthority', 'ControlIsolatingAuthority'], cert.site)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ProcessIsolatingAuthority', 'ControlIsolatingAuthority'], cert.site)");
                    }
                    return policyFailed('attachWorkItem', cert, user);
                }

                return allowMultipleAttachmentsOfKind(_cert, _user) && policies(_cert, _user);
            }
        },
        operationalriskassessment: {
            states: [],
            parentStates: {isolation: ["Requesting", "Modification", "WaitingForAuthorization"],
            lolcmovement: ["Requesting"],
            lolcoperationalinspection: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['Isolation', 'LolcOperationalInspection'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'OperationalRiskAssessment'; })) {
                        return policyFailed('attachWorkItem', cert, user);
                    }

                    return policyPassed('attachWorkItem', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
                    }
                    if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
                    }
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('attachWorkItem', cert, user);
                }

                return allowMultipleAttachmentsOfKind(_cert, _user) && policies(_cert, _user);
            }
        },
        operation: {
            states: [],
            parentStates: {lolcmovement: ["Requesting"],
            lolcoperationalinspection: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['LolcOperationalInspection'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'Operation'; })) {
                        return policyFailed('attachWorkItem', cert, user);
                    }

                    return policyPassed('attachWorkItem', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('attachWorkItem', cert, user);
                }

                return allowMultipleAttachmentsOfKind(_cert, _user) && policies(_cert, _user);
            }
        },
        permit: {
            states: [],
            parentStates: {lolcmovement: ["Requesting"],
            lolcoperationalinspection: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['LolcOperationalInspection'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'Permit'; })) {
                        return policyFailed('attachWorkItem', cert, user);
                    }

                    return policyPassed('attachWorkItem', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('attachWorkItem', cert, user);
                }

                return allowMultipleAttachmentsOfKind(_cert, _user) && policies(_cert, _user);
            }
        },
        safetyoverrideriskassessment: {
            states: ['Requesting', 'AwaitingActivation', 'Active'],
            parentStates: {permit: ["Requesting", "Approved", "Verified", "Authorised", "Issued", "AwaitingActivation", "Active", "InReview", "Revalidate", "SuspendedForSanctionToTest", "SuspendedForRevalidation", "SuspendedForReauthorization", "SuspendedForEmergency"],
            isolation: ["Requesting", "DesignComplete", "WaitingForAuthorization", "IsolationInProgress", "IsolationInPlace", "IsolationInPlaceForLongTerm", "IsolationInPlaceForSanctionToTest", "DeisolationInProgress", "RequestedForSanctionToTest", "IsolationInPlaceForSanctionToTest"],
            operationalriskassessment: ["Requesting", "Approved", "AwaitingActivation", "Active", "InReview", "Revalidate"],
            operation: ["Requesting", "AwaitingActivation", "Active", "Revalidate"],
            lolcmovement: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return _.some(['Requesting', 'AwaitingActivation', 'Active'], function(s) {
                    return s === cert.state;
                });
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if ([''].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'SafetyOverrideRiskAssessment'; })) {
                        return policyFailed('attachWorkItem', cert, user);
                    }

                    return policyPassed('attachWorkItem', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'Issued', 'AwaitingActivation', 'Active', 'InReview', 'Revalidate', 'SuspendedForSanctionToTest', 'SuspendedForRevalidation', 'SuspendedForReauthorization', 'SuspendedForEmergency'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'Issued', 'AwaitingActivation', 'Active', 'InReview', 'Revalidate', 'SuspendedForSanctionToTest', 'SuspendedForRevalidation', 'SuspendedForReauthorization', 'SuspendedForEmergency'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)");
                    }
                    if (cert.kind === 'Isolation' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Isolation' && _.includes(['DesignComplete', 'WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'IsolationInPlaceForLongTerm', 'IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ProcessIsolatingAuthority', 'ControlIsolatingAuthority'], cert.site)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Isolation' && _.includes(['DesignComplete', 'WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'IsolationInPlaceForLongTerm', 'IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ProcessIsolatingAuthority', 'ControlIsolatingAuthority'], cert.site)");
                    }
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'InReview', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['FunctionalAuthority', 'SiteAuthority', 'AreaAuthority'], cert.site)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'InReview', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['FunctionalAuthority', 'SiteAuthority', 'AreaAuthority'], cert.site)");
                    }
                    if (cert.kind === 'Operation' && _.includes(['RiskAssessedProcedure'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Operation' && _.includes(['RiskAssessedProcedure'], cert.variant) && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Operation' && _.includes(['RiskAssessedProcedure'], cert.variant) && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority', 'SiteAuthority'], cert.site)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'Operation' && _.includes(['RiskAssessedProcedure'], cert.variant) && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority', 'SiteAuthority'], cert.site)");
                    }
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('attachWorkItem', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('attachWorkItem', cert, user);
                }

                return allowMultipleAttachmentsOfKind(_cert, _user) && policies(_cert, _user);
            }
        }
    };

    var unlinkWorkItemAttachment = {
        isolation: {
            states: [],
            parentStates: {permit: ["Requesting", "Approved"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['Permit'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'Isolation'; })) {
                        return policyFailed('unlinkWorkItemAttachment', cert, user);
                    }

                    return policyPassed('unlinkWorkItemAttachment', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority'], cert.site)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority'], cert.site)");
                    }
                    return policyFailed('unlinkWorkItemAttachment', cert, user);
                }

                return policies(_cert, _user);
            }
        },
        isolationtemplate: {
            states: [],
            parentStates: {permittemplate: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['PermitTemplate'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'IsolationTemplate'; })) {
                        return policyFailed('unlinkWorkItemAttachment', cert, user);
                    }

                    return policyPassed('unlinkWorkItemAttachment', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('unlinkWorkItemAttachment', cert, user);
                }

                return policies(_cert, _user);
            }
        },
        taskriskassessment: {
            states: [],
            parentStates: {isolation: ["Requesting", "Modification"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['Isolation'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'TaskRiskAssessment'; })) {
                        return policyFailed('unlinkWorkItemAttachment', cert, user);
                    }

                    return policyPassed('unlinkWorkItemAttachment', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
                    }
                    return policyFailed('unlinkWorkItemAttachment', cert, user);
                }

                return policies(_cert, _user);
            }
        },
        taskriskassessmenttemplate: {
            states: [],
            parentStates: {isolationtemplate: ["Requesting", "Modification"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['IsolationTemplate'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'TaskRiskAssessmentTemplate'; })) {
                        return policyFailed('unlinkWorkItemAttachment', cert, user);
                    }

                    return policyPassed('unlinkWorkItemAttachment', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ProcessIsolatingAuthority', 'ControlIsolatingAuthority'], cert.site)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ProcessIsolatingAuthority', 'ControlIsolatingAuthority'], cert.site)");
                    }
                    return policyFailed('unlinkWorkItemAttachment', cert, user);
                }

                return policies(_cert, _user);
            }
        },
        operationalriskassessment: {
            states: [],
            parentStates: {isolation: ["Requesting", "Modification"],
            lolcmovement: ["Requesting"],
            lolcoperationalinspection: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['Isolation', 'LolcMovement', 'LolcOperationalInspection'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'OperationalRiskAssessment'; })) {
                        return policyFailed('unlinkWorkItemAttachment', cert, user);
                    }

                    return policyPassed('unlinkWorkItemAttachment', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
                    }
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('unlinkWorkItemAttachment', cert, user);
                }

                return policies(_cert, _user);
            }
        },
        permit: {
            states: [],
            parentStates: {lolcmovement: ["Requesting"],
            lolcoperationalinspection: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['LolcMovement', 'LolcOperationalInspection'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'Permit'; })) {
                        return policyFailed('unlinkWorkItemAttachment', cert, user);
                    }

                    return policyPassed('unlinkWorkItemAttachment', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('unlinkWorkItemAttachment', cert, user);
                }

                return policies(_cert, _user);
            }
        },
        operation: {
            states: [],
            parentStates: {lolcmovement: ["Requesting"],
            lolcoperationalinspection: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['LolcMovement', 'LolcOperationalInspection'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'Operation'; })) {
                        return policyFailed('unlinkWorkItemAttachment', cert, user);
                    }

                    return policyPassed('unlinkWorkItemAttachment', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('unlinkWorkItemAttachment', cert, user);
                }

                return policies(_cert, _user);
            }
        },
        safetyoverrideriskassessment: {
            states: [],
            parentStates: {permit: ["Requesting", "Approved", "Verified", "Authorised", "AwaitingActivation", "Active", "InReview", "Revalidate", "SuspendedForSanctionToTest", "SuspendedForRevalidation", "SuspendedForReauthorization", "SuspendedForEmergency"],
            isolation: ["Requesting", "DesignComplete", "WaitingForAuthorization", "IsolationInProgress", "IsolationInPlace", "IsolationInPlaceForLongTerm", "IsolationInPlaceForSanctionToTest", "DeisolationInProgress", "RequestedForSanctionToTest", "IsolationInPlaceForSanctionToTest"],
            operationalriskassessment: ["Requesting", "Approved", "AwaitingActivation", "Active", "InReview", "Revalidate"],
            operation: ["Requesting", "AwaitingActivation", "Active", "Revalidate"],
            lolcmovement: ["Requesting"]},
            allowedFromAnotherSite: false,
            checkPolicyForAttachment: function(cert, user) {
                return true;
            },
            checkPolicyForParentCertificate: function(_cert, _user) {
                function allowMultipleAttachmentsOfKind(cert, user) {
                    if (['Permit', 'Isolation', 'OperationalRiskAssessment', 'Operation', 'LolcMovement'].indexOf(cert.kind) >= 0 && _.some(cert.attachments, function(attachment) { return attachment.kind === 'SafetyOverrideRiskAssessment'; })) {
                        return policyFailed('unlinkWorkItemAttachment', cert, user);
                    }

                    return policyPassed('unlinkWorkItemAttachment', cert, user);
                }

                function policies(cert, user) {
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'AwaitingActivation', 'Active', 'InReview', 'Revalidate', 'SuspendedForSanctionToTest', 'SuspendedForRevalidation', 'SuspendedForReauthorization', 'SuspendedForEmergency'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'AwaitingActivation', 'Active', 'InReview', 'Revalidate', 'SuspendedForSanctionToTest', 'SuspendedForRevalidation', 'SuspendedForReauthorization', 'SuspendedForEmergency'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)");
                    }
                    if (cert.kind === 'Isolation' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Isolation' && _.includes(['DesignComplete', 'WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'IsolationInPlaceForLongTerm', 'IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ProcessIsolatingAuthority', 'ControlIsolatingAuthority'], cert.site)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Isolation' && _.includes(['DesignComplete', 'WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'IsolationInPlaceForLongTerm', 'IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ProcessIsolatingAuthority', 'ControlIsolatingAuthority'], cert.site)");
                    }
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'InReview', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['FunctionalAuthority', 'SiteAuthority', 'AreaAuthority'], cert.site)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'InReview', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['FunctionalAuthority', 'SiteAuthority', 'AreaAuthority'], cert.site)");
                    }
                    if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
                    }
                    if (cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority', 'SiteAuthority'], cert.site)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority', 'SiteAuthority'], cert.site)");
                    }
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return policyPassed('unlinkWorkItemAttachment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
                    }
                    return policyFailed('unlinkWorkItemAttachment', cert, user);
                }

                return policies(_cert, _user);
            }
        }
    };

    var textProperties = {
        "IsolationDescription": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('IsolationDescription', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('IsolationDescription', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IsolationDescription', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('IsolationDescription', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            return policyFailed('IsolationDescription', cert, user);
        },
        "ToolsToBeUsed": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('ToolsToBeUsed', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ToolsToBeUsed', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ToolsToBeUsed', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('ToolsToBeUsed', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ToolsToBeUsed', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ToolsToBeUsed', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ToolsToBeUsed', cert, user);
        },
        "EquipmentToBeUsed": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('EquipmentToBeUsed', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('EquipmentToBeUsed', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('EquipmentToBeUsed', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('EquipmentToBeUsed', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('EquipmentToBeUsed', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('EquipmentToBeUsed', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('EquipmentToBeUsed', cert, user);
        },
        "ContactOrOtherDetails": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'ReadyToVerify', 'Verified', 'Authorised', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'ReAuthorized'], cert.state)) {
                return policyPassed('ContactOrOtherDetails', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'ReadyToVerify', 'Verified', 'Authorised', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'ReAuthorized'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ContactOrOtherDetails', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ContactOrOtherDetails', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ContactOrOtherDetails', cert, user);
        },
        "AdditionalTaskDescription": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting', 'Approved'], cert.state)) {
                return policyPassed('AdditionalTaskDescription', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting', 'Approved'], cert.state)");
            }
            return policyFailed('AdditionalTaskDescription', cert, user);
        },
        "ConflictManagement": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('ConflictManagement', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ConflictManagement', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ConflictManagement', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ConflictManagement', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ConflictManagement', cert, user);
        },
        "SIMOPS": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SIMOPS', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('SIMOPS', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'Permit' && _.includes(['ReadyToVerify'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('SIMOPS', cert, user, "cert.kind === 'Permit' && _.includes(['ReadyToVerify'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SIMOPS', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SIMOPS', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('SIMOPS', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('SIMOPS', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SIMOPS', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Accepted'], cert.state)) {
                return policyPassed('SIMOPS', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Accepted'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Accepted', 'Active'], cert.state)) {
                return policyPassed('SIMOPS', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Accepted', 'Active'], cert.state)");
            }
            return policyFailed('SIMOPS', cert, user);
        },
        "DailyTaskScope": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Verified', 'Authorised', 'SuspendedForSanctionToTest', 'SuspendedForRevalidation', 'SuspendedForReauthorization', 'SuspendedForEmergency', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('DailyTaskScope', cert, user, "cert.kind === 'Permit' && _.includes(['Verified', 'Authorised', 'SuspendedForSanctionToTest', 'SuspendedForRevalidation', 'SuspendedForReauthorization', 'SuspendedForEmergency', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            return policyFailed('DailyTaskScope', cert, user);
        },
        "RAPReference": function (cert, user) {
            if (cert.kind === 'Operation' && _.includes(['RiskAssessedProcedure'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RAPReference', cert, user, "cert.kind === 'Operation' && _.includes(['RiskAssessedProcedure'], cert.variant) && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RAPReference', cert, user);
        },
        "AbnormalCondition": function (cert, user) {
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AbnormalCondition', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AbnormalCondition', cert, user);
        },
        "NormalCondition": function (cert, user) {
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('NormalCondition', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('NormalCondition', cert, user);
        },
        "ReasonForNotShuttingDown": function (cert, user) {
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReasonForNotShuttingDown', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ReasonForNotShuttingDown', cert, user);
        },
        "History": function (cert, user) {
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('History', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('History', cert, user);
        },
        "Recommendation": function (cert, user) {
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('Recommendation', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('Recommendation', cert, user);
        },
        "InitialRiskExplanation": function (cert, user) {
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('InitialRiskExplanation', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('InitialRiskExplanation', cert, user);
        },
        "Interlocked": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('Interlocked', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('Interlocked', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('Interlocked', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('Interlocked', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('Interlocked', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('Interlocked', cert, user);
        },
        "RestrictedWorkSpace": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('RestrictedWorkSpace', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RestrictedWorkSpace', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RestrictedWorkSpace', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('RestrictedWorkSpace', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RestrictedWorkSpace', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RestrictedWorkSpace', cert, user);
        },
        "AuditorRemarks": function (cert, user) {
            if (cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['CreatedBy'], cert, user)) {
                return policyPassed('AuditorRemarks', cert, user, "cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['CreatedBy'], cert, user)");
            }
            return policyFailed('AuditorRemarks', cert, user);
        },
        "RiskAssessmentTitle": function (cert, user) {
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RiskAssessmentTitle', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['DesignComplete']) && cert.kind === 'TaskRiskAssessment' && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RiskAssessmentTitle', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['DesignComplete']) && cert.kind === 'TaskRiskAssessment' && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['IsolationInPlace', 'IsolationInPlaceForLongTerm']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentTitle', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['IsolationInPlace', 'IsolationInPlaceForLongTerm']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RiskAssessmentTitle', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('RiskAssessmentTitle', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            return policyFailed('RiskAssessmentTitle', cert, user);
        },
        "OverrideBypassMethod": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('OverrideBypassMethod', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('OverrideBypassMethod', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('OverrideBypassMethod', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('OverrideBypassMethod', cert, user);
        },
        "ReasonsForApplyingAndComments": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReasonsForApplyingAndComments', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('ReasonsForApplyingAndComments', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReasonsForApplyingAndComments', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ReasonsForApplyingAndComments', cert, user);
        },
        "MaximumSoraDuration": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MaximumSoraDuration', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('MaximumSoraDuration', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MaximumSoraDuration', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MaximumSoraDuration', cert, user);
        },
        "RiskReductionFactor": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskReductionFactor', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('RiskReductionFactor', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskReductionFactor', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RiskReductionFactor', cert, user);
        },
        "PMReference": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('PMReference', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('PMReference', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('PMReference', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('PMReference', cert, user);
        }
    };

    var multiValueProperties = {
        "RequiresAbnormalOperatingCondition": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RequiresAbnormalOperatingCondition', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('RequiresAbnormalOperatingCondition', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequiresAbnormalOperatingCondition', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RequiresAbnormalOperatingCondition', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            return policyFailed('RequiresAbnormalOperatingCondition', cert, user);
        },
        "ReasonForWork": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'ReadyToVerify'], cert.state)) {
                return policyPassed('ReasonForWork', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'ReadyToVerify'], cert.state)");
            }
            return policyFailed('ReasonForWork', cert, user);
        },
        "OverrideBypassType": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('OverrideBypassType', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('OverrideBypassType', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('OverrideBypassType', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('OverrideBypassType', cert, user);
        },
        "OverallIntegrityLevel": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('OverallIntegrityLevel', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('OverallIntegrityLevel', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('OverallIntegrityLevel', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('OverallIntegrityLevel', cert, user);
        },
        "IntegrityBasisSafety": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IntegrityBasisSafety', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('IntegrityBasisSafety', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IntegrityBasisSafety', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IntegrityBasisSafety', cert, user);
        },
        "IntegrityBasisEnvironment": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IntegrityBasisEnvironment', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('IntegrityBasisEnvironment', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IntegrityBasisEnvironment', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IntegrityBasisEnvironment', cert, user);
        },
        "IntegrityBasisCommercial": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IntegrityBasisCommercial', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('IntegrityBasisCommercial', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IntegrityBasisCommercial', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IntegrityBasisCommercial', cert, user);
        }
    };

    var assignUserAuthority = {
        "RiskAssessmentFacilitator": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RiskAssessmentFacilitator', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('RiskAssessmentFacilitator', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RiskAssessmentFacilitator', cert, user);
        }
    };

    var removeAssignedUserAuthority = {
        "RiskAssessmentFacilitator": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RiskAssessmentFacilitator', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RiskAssessmentFacilitator', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RiskAssessmentFacilitator', cert, user);
        }
    };


    var addIsolation = function addIsolation(cert, user) {
        if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
            return policyPassed('addIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
        }
        if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
            return policyFailed('addIsolation', cert, user, 'origins');
        }
        if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
            return policyPassed('addIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('addIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addIsolation', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addIsolation', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
        }
        return policyFailed('addIsolation', cert, user);
    };


var copyPermit = function copyPermit(cert, user) {
        return policyPassed('copyPermit', cert, user, 'all conditions are *');
        return policyFailed('copyPermit', cert, user);
    };


var revertState = function revertState(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify', 'Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify', 'Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'Permit' && _.includes(['Authorised', 'Issued', 'ReAuthorized', 'ReIssued'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'Permit' && _.includes(['Authorised', 'Issued', 'ReAuthorized', 'ReIssued'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify'], cert.state) && userAuthorization.isInRoleForSite(user, ['IssuingAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify'], cert.state) && userAuthorization.isInRoleForSite(user, ['IssuingAuthority'], cert.site)");
        }
        if (cert.kind === 'PermitTemplate' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'Isolation' && _.includes(['DesignComplete'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'Isolation' && _.includes(['DesignComplete'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority'], cert.site)");
        }
        if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['Active'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Active'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['DesignComplete'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['DesignComplete'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority'], cert.site)");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['AwaitingAuthorisation'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['AwaitingAuthorisation'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting', 'Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting', 'Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)");
        }
        if (cert.kind === 'Action' && _.includes(['Confirmed', 'Active', 'Completed'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'Action' && _.includes(['Confirmed', 'Active', 'Completed'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'LolcMovement' && _.includes(['DesignComplete'], cert.state) && userAuthorization.isInRoleForSite(user, ['SignForLOLCMovement'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'LolcMovement' && _.includes(['DesignComplete'], cert.state) && userAuthorization.isInRoleForSite(user, ['SignForLOLCMovement'], cert.site)");
        }
        if (cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete'], cert.state) && userAuthorization.isInRoleForSite(user, ['SignForLOLCOperationalInspection'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete'], cert.state) && userAuthorization.isInRoleForSite(user, ['SignForLOLCOperationalInspection'], cert.site)");
        }
        if (cert.kind === 'WorkItemAudit' && _.includes(['Reviewed'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'WorkItemAudit' && _.includes(['Reviewed'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)) {
            return policyPassed('revertState', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)");
        }
        return policyFailed('revertState', cert, user);
    };
revertState.reasonRequirement = 'Optional';
    var assignWorkingLocations = function assignWorkingLocations(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
        }
        if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
        }
        if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
        }
        if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('assignWorkingLocations', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('assignWorkingLocations', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
            return policyPassed('assignWorkingLocations', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
        }
        if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
            return policyFailed('assignWorkingLocations', cert, user, 'origins');
        }
        if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingLocations', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        return policyFailed('assignWorkingLocations', cert, user);
    };


var assignRiskAssessmentLevel = function assignRiskAssessmentLevel(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
            return policyPassed('assignRiskAssessmentLevel', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
        }
        if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
            return policyFailed('assignRiskAssessmentLevel', cert, user, 'origins');
        }
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignRiskAssessmentLevel', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
            return policyPassed('assignRiskAssessmentLevel', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
        }
        if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignRiskAssessmentLevel', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'OperationalRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
            return policyFailed('assignRiskAssessmentLevel', cert, user, 'origins');
        }
        if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignRiskAssessmentLevel', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignRiskAssessmentLevel', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        return policyFailed('assignRiskAssessmentLevel', cert, user);
    };
assignRiskAssessmentLevel.allowMultipleRiskAssessmentTasksFor = 'Level1,Level2';
    var assignPermitNumberOfPersons = function assignPermitNumberOfPersons(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignPermitNumberOfPersons', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
            return policyPassed('assignPermitNumberOfPersons', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify', 'Verified', 'Authorised'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
            return policyPassed('assignPermitNumberOfPersons', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify', 'Verified', 'Authorised'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
        }
        if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignPermitNumberOfPersons', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignPermitNumberOfPersons', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
        }
        return policyFailed('assignPermitNumberOfPersons', cert, user);
    };
assignPermitNumberOfPersons.minimumNumberOfPersons = '1';
    assignPermitNumberOfPersons.maximumNumberOfPersons = '99';
    var assignWorkingPeriod = function assignWorkingPeriod(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify', 'Verified', 'Authorised'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify', 'Verified', 'Authorised'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site)");
        }
        if (cert.kind === 'Permit' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'InReview', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'Permit' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'InReview', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Isolation' && _.includes(['Requesting', 'DesignComplete', 'WaitingForAuthorization', 'Modification'], cert.state)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'DesignComplete', 'WaitingForAuthorization', 'Modification'], cert.state)");
        }
        if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkingPeriod', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
        }
        return policyFailed('assignWorkingPeriod', cert, user);
    };
assignWorkingPeriod.kindsForWhichToIgnoreWorkingHours = 'Isolation,OperationalRiskAssessment,Leak';
    assignWorkingPeriod.kindsForWhichStartDateCanBeInThePast = 'OperationalRiskAssessment,Leak';
    assignWorkingPeriod.skipLifetimeCheck = true;
    var addMeasurements = function addMeasurements(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Authorised', 'Issued', 'ReAuthorized', 'ReIssued', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Revalidate', 'Expired'], cert.state) && userAuthorization.isInRoleForSite(user, ['AuthorisedGasTester1', 'AuthorisedGasTester2'], cert.site)) {
            return policyPassed('addMeasurements', cert, user, "cert.kind === 'Permit' && _.includes(['Authorised', 'Issued', 'ReAuthorized', 'ReIssued', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Revalidate', 'Expired'], cert.state) && userAuthorization.isInRoleForSite(user, ['AuthorisedGasTester1', 'AuthorisedGasTester2'], cert.site)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AuthorisedGasTester1', 'AuthorisedGasTester2'], cert.site) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
            return policyPassed('addMeasurements', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AuthorisedGasTester1', 'AuthorisedGasTester2'], cert.site) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
        }
        return policyFailed('addMeasurements', cert, user);
    };
addMeasurements.detectorNumberUsage = 'Optional';
    var printing = function printing(cert, user) {
        if (cert.kind === 'Permit') {
            return policyPassed('printing', cert, user, "cert.kind === 'Permit'");
        }
        if (cert.kind === 'PermitTemplate') {
            return policyPassed('printing', cert, user, "cert.kind === 'PermitTemplate'");
        }
        if (cert.kind === 'Isolation') {
            return policyPassed('printing', cert, user, "cert.kind === 'Isolation'");
        }
        if (cert.kind === 'IsolationTemplate') {
            return policyPassed('printing', cert, user, "cert.kind === 'IsolationTemplate'");
        }
        if (cert.kind === 'TaskRiskAssessment') {
            return policyPassed('printing', cert, user, "cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.kind === 'TaskRiskAssessmentTemplate') {
            return policyPassed('printing', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate'");
        }
        if (cert.kind === 'OperationalRiskAssessment') {
            return policyPassed('printing', cert, user, "cert.kind === 'OperationalRiskAssessment'");
        }
        if (cert.kind === 'Operation') {
            return policyPassed('printing', cert, user, "cert.kind === 'Operation'");
        }
        if (cert.kind === 'WorkItemAudit') {
            return policyPassed('printing', cert, user, "cert.kind === 'WorkItemAudit'");
        }
        if (cert.kind === 'Action' && _.includes(['Requesting', 'Active', 'Completed', 'Closed'], cert.state)) {
            return policyPassed('printing', cert, user, "cert.kind === 'Action' && _.includes(['Requesting', 'Active', 'Completed', 'Closed'], cert.state)");
        }
        if (cert.kind === 'LolcMovement') {
            return policyPassed('printing', cert, user, "cert.kind === 'LolcMovement'");
        }
        if (cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete', 'Closed'], cert.state)) {
            return policyPassed('printing', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete', 'Closed'], cert.state)");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate') {
            return policyPassed('printing', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate'");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessment') {
            return policyPassed('printing', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment'");
        }
        return policyFailed('printing', cert, user);
    };


var assignWorkOrder = function assignWorkOrder(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkOrder', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify', 'Verified', 'Authorised', 'Active', 'Closing', 'Closed', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'SuspendedForEmergency', 'AwaitingActivation', 'Expired', 'Revalidate', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site)) {
            return policyPassed('assignWorkOrder', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify', 'Verified', 'Authorised', 'Active', 'Closing', 'Closed', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'SuspendedForEmergency', 'AwaitingActivation', 'Expired', 'Revalidate', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority', 'IssuingAuthority'], cert.site)");
        }
        if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
            return policyPassed('assignWorkOrder', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
        }
        if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
            return policyPassed('assignWorkOrder', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkOrder', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
            return policyPassed('assignWorkOrder', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
        }
        if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('assignWorkOrder', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Leak' && _.includes(['Requesting', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
            return policyPassed('assignWorkOrder', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state)");
        }
        return policyFailed('assignWorkOrder', cert, user);
    };
assignWorkOrder.workOrderExistenceIsOptional = true;
    var deleteWorkItem = function deleteWorkItem(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority'], cert.site)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority'], cert.site)");
        }
        if (cert.kind === 'Permit' && _.includes(['ReadyToVerify', 'Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['ReadyToVerify', 'Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'Permit' && _.includes(['Authorised'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Authorised'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
        }
        if (cert.kind === 'PermitTemplate' && _.includes(['Requesting', 'Approved'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting', 'Approved'], cert.state)");
        }
        if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)");
        }
        if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'TaskRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
            return policyFailed('deleteWorkItem', cert, user, 'origins');
        }
        if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('deleteWorkItem', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
            return policyPassed('deleteWorkItem', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
        }
        if (cert.kind === 'Isolation' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)");
        }
        if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('deleteWorkItem', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('deleteWorkItem', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('deleteWorkItem', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['CreatedBy'], cert, user)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['CreatedBy'], cert, user)");
        }
        if (cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'FunctionalAuthority'], cert.site)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'FunctionalAuthority'], cert.site)");
        }
        if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('deleteWorkItem', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
        }
        return policyFailed('deleteWorkItem', cert, user);
    };


var identifyUnlistedHazard = function identifyUnlistedHazard(cert, user) {
        return policyFailed('', cert, user);
    };


var removeRiskAssessmentControlMeasure = function removeRiskAssessmentControlMeasure(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
        }
        if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
            return policyFailed('removeRiskAssessmentControlMeasure', cert, user, 'origins');
        }
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
        }
        if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
            return policyFailed('removeRiskAssessmentControlMeasure', cert, user, 'origins');
        }
        if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('removeRiskAssessmentControlMeasure', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        return policyFailed('removeRiskAssessmentControlMeasure', cert, user);
    };


var riskAssessmentCopy = function riskAssessmentCopy(cert, user) {
        if (userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)) {
            return policyPassed('riskAssessmentCopy', cert, user, "userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)");
        }
        return policyFailed('riskAssessmentCopy', cert, user);
    };


var addApprovingRiskAssessmentTeamMember = function addApprovingRiskAssessmentTeamMember(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
        }
        if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
            return policyFailed('addApprovingRiskAssessmentTeamMember', cert, user, 'origins');
        }
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
        }
        if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
        }
        if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
            return policyFailed('addApprovingRiskAssessmentTeamMember', cert, user, 'origins');
        }
        if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('addApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        return policyFailed('addApprovingRiskAssessmentTeamMember', cert, user);
    };


var unlinkAndDeleteWorkItem = function unlinkAndDeleteWorkItem(cert, user) {
        if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority'], cert.site)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority'], cert.site)");
        }
        if (cert.kind === 'Permit' && _.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
        }
        if (cert.kind === 'Permit' && _.includes(['Authorised'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.kind === 'Permit' && _.includes(['Authorised'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
        }
        if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority', 'PerformingAuthority'], cert.site)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority', 'PerformingAuthority'], cert.site)");
        }
        if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting', 'Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting', 'Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)");
        }
        if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['ApprovingTeamMembers'], cert, user)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['ApprovingTeamMembers'], cert, user)");
        }
        if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting', 'Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting', 'Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)");
        }
        if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['ApprovingTeamMembers'], cert, user)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['ApprovingTeamMembers'], cert, user)");
        }
        if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting', 'Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting', 'Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority', 'AreaAuthority', 'FunctionalAuthority'], cert.site)");
        }
        if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['ApprovingTeamMembers'], cert, user)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['ApprovingTeamMembers'], cert, user)");
        }
        if (cert.kind === 'TaskRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
            return policyFailed('unlinkAndDeleteWorkItem', cert, user, 'origins');
        }
        if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['IsolationInPlace']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['IsolationInPlace']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
        }
        if (cert.hasParentOfKind('Permit') && cert.hasParentInState(['Requesting', 'Approved']) && cert.kind === 'Isolation' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('Permit') && cert.hasParentInState(['Requesting', 'Approved']) && cert.kind === 'Isolation' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('PermitTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('PermitTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)");
        }
        if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
        }
        if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
        }
        if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)) {
            return policyPassed('unlinkAndDeleteWorkItem', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)");
        }
        return policyFailed('unlinkAndDeleteWorkItem', cert, user);
    };

    return {
        /* workItemCommand */
        "MarkAsCopyable": function (cert, user) {
            if (!(cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); }))) {
                return policyPassed('MarkAsCopyable', cert, user, 'except Template');
            }
            return policyFailed('MarkAsCopyable', cert, user);
        },
        "CopyIsolationCertificate": function (cert, user) {
            return policyPassed('CopyIsolationCertificate', cert, user, 'all conditions are *');
            return policyFailed('CopyIsolationCertificate', cert, user);
        },
        "CopyInspection": function (cert, user) {
            return policyPassed('CopyInspection', cert, user, 'all conditions are *');
            return policyFailed('CopyInspection', cert, user);
        },
        "ValidatePermit": function (cert, user) {
            return policyPassed('ValidatePermit', cert, user, 'all conditions are *');
            return policyFailed('ValidatePermit', cert, user);
        },
        "AddPermitDependency": function (cert, user) {
            if (_.includes(['Requesting', 'Approved', 'Verified', 'Authorised', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('AddPermitDependency', cert, user, "_.includes(['Requesting', 'Approved', 'Verified', 'Authorised', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (_.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)) {
                return policyPassed('AddPermitDependency', cert, user, "_.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)");
            }
            return policyFailed('AddPermitDependency', cert, user);
        },
        "RemovePermitDependency": function (cert, user) {
            if (_.includes(['Requesting', 'Approved', 'Verified', 'Authorised', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RemovePermitDependency', cert, user, "_.includes(['Requesting', 'Approved', 'Verified', 'Authorised', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (_.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)) {
                return policyPassed('RemovePermitDependency', cert, user, "_.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['SiteAuthority'], cert.site)");
            }
            return policyFailed('RemovePermitDependency', cert, user);
        },
        "RequireWorkOrderForPermit": function (cert, user) {
            return policyPassed('RequireWorkOrderForPermit', cert, user, 'all conditions are *');
            return policyFailed('RequireWorkOrderForPermit', cert, user);
        },
        "CreateRiskAssessment": function (cert, user) {
            return policyPassed('CreateRiskAssessment', cert, user, 'all conditions are *');
            return policyFailed('CreateRiskAssessment', cert, user);
        },
        "AssignPermitToDepartment": function (cert, user) {
            if (cert.kind === 'Permit') {
                return policyPassed('AssignPermitToDepartment', cert, user, "cert.kind === 'Permit'");
            }
            return policyFailed('AssignPermitToDepartment', cert, user);
        },
        "CorrectTitle": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectTitle', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTitle', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectTitle', cert, user);
        },
        "CompleteCertificateWithQuestionnaireRecommendations": function (cert, user) {
            if (cert.kind === 'Permit') {
                return policyPassed('CompleteCertificateWithQuestionnaireRecommendations', cert, user, "cert.kind === 'Permit'");
            }
            return policyFailed('CompleteCertificateWithQuestionnaireRecommendations', cert, user);
        },
        "CreatePermit": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting', 'Approved'], cert.state)) {
                return policyPassed('CreatePermit', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting', 'Approved'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CreatePermit', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CreatePermit', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CreatePermit', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CreatePermit', cert, user);
        },
        "AssignDiscipline": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('AssignDiscipline', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AssignDiscipline', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignDiscipline', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('AssignDiscipline', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignDiscipline', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignDiscipline', cert, user);
        },
        "DescribeWork": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('DescribeWork', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('DescribeWork', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('DescribeWork', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('DescribeWork', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('DescribeWork', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeWork', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('DescribeWork', cert, user);
        },
        "CorrectVariant": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('CorrectVariant', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectVariant', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectVariant', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectVariant', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectVariant', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectVariant', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectVariant', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectVariant', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectVariant', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectVariant', cert, user);
        },
        "MarkAsPlannedInShutdown": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkAsPlannedInShutdown', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkAsPlannedInShutdown', cert, user);
        },
        "MarkAsNotPlannedInShutdown": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkAsNotPlannedInShutdown', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkAsNotPlannedInShutdown', cert, user);
        },
        "CorrectPermitIsolationRequirement": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('CorrectPermitIsolationRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectPermitIsolationRequirement', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectPermitIsolationRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectPermitIsolationRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectPermitIsolationRequirement', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectPermitIsolationRequirement', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectPermitIsolationRequirement', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectPermitIsolationRequirement', cert, user);
        },
        "ClearPermitIsolationRequirement": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('ClearPermitIsolationRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ClearPermitIsolationRequirement', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearPermitIsolationRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('ClearPermitIsolationRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearPermitIsolationRequirement', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearPermitIsolationRequirement', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearPermitIsolationRequirement', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ClearPermitIsolationRequirement', cert, user);
        },
        "AssignRequiredMeasurements": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'Verified', 'Authorised', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'AwaitingActivation', 'Revalidate', 'Expired', 'InReview'], cert.state)) {
                return policyPassed('AssignRequiredMeasurements', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'Verified', 'Authorised', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'AwaitingActivation', 'Revalidate', 'Expired', 'InReview'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignRequiredMeasurements', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignRequiredMeasurements', cert, user);
        },
        "AssignIntervalForRequiredMeasurements": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'Verified', 'Authorised', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'AwaitingActivation', 'Revalidate', 'Expired', 'InReview'], cert.state)) {
                return policyPassed('AssignIntervalForRequiredMeasurements', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'Verified', 'Authorised', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'AwaitingActivation', 'Revalidate', 'Expired', 'InReview'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignIntervalForRequiredMeasurements', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignIntervalForRequiredMeasurements', cert, user);
        },
        "SuspendPermit": function (cert, user) {
            return policyPassed('SuspendPermit', cert, user, 'all conditions are *');
            return policyFailed('SuspendPermit', cert, user);
        },
        "IdentifyListedControlMeasure": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyListedControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyListedControlMeasure', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('IdentifyListedControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyListedControlMeasure', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IdentifyListedControlMeasure', cert, user);
        },
        "IdentifyUnlistedControlMeasure": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyUnlistedControlMeasure', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('IdentifyUnlistedControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedControlMeasure', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IdentifyUnlistedControlMeasure', cert, user);
        },
        "RemoveControlMeasure": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveControlMeasure', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('RemoveControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveControlMeasure', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveControlMeasure', cert, user);
        },
        "MarkForSanctionToTest": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkForSanctionToTest', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkForSanctionToTest', cert, user);
        },
        "MarkNotForSanctionToTest": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkNotForSanctionToTest', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkNotForSanctionToTest', cert, user);
        },
        "CreateIsolationCertificate": function (cert, user) {
            if (cert.kind === 'Isolation') {
                return policyPassed('CreateIsolationCertificate', cert, user, "cert.kind === 'Isolation'");
            }
            if (cert.kind === 'IsolationTemplate') {
                return policyPassed('CreateIsolationCertificate', cert, user, "cert.kind === 'IsolationTemplate'");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CreateIsolationCertificate', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CreateIsolationCertificate', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CreateIsolationCertificate', cert, user);
        },
        "RequestEquipmentInspection": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestEquipmentInspection', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RequestEquipmentInspection', cert, user);
        },
        "CreateEquipmentInspection": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CreateEquipmentInspection', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CreateEquipmentInspection', cert, user);
        },
        "MarkAsOriginatingFromTemplate": function (cert, user) {
            if (cert.kind === 'Permit') {
                return policyPassed('MarkAsOriginatingFromTemplate', cert, user, "cert.kind === 'Permit'");
            }
            if (cert.kind === 'Isolation') {
                return policyPassed('MarkAsOriginatingFromTemplate', cert, user, "cert.kind === 'Isolation'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkAsOriginatingFromTemplate', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkAsOriginatingFromTemplate', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkAsOriginatingFromTemplate', cert, user);
        },
        "MarkAsOriginatingFromWorkOrder": function (cert, user) {
            if (cert.kind === 'Permit') {
                return policyPassed('MarkAsOriginatingFromWorkOrder', cert, user, "cert.kind === 'Permit'");
            }
            if (cert.kind === 'Isolation') {
                return policyPassed('MarkAsOriginatingFromWorkOrder', cert, user, "cert.kind === 'Isolation'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkAsOriginatingFromWorkOrder', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkAsOriginatingFromWorkOrder', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkAsOriginatingFromWorkOrder', cert, user);
        },
        "AssignIsolationCertificateWorkingPeriod": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssignIsolationCertificateWorkingPeriod', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AssignIsolationCertificateWorkingPeriod', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('AssignIsolationCertificateWorkingPeriod', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignIsolationCertificateWorkingPeriod', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignIsolationCertificateWorkingPeriod', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignIsolationCertificateWorkingPeriod', cert, user);
        },
        "AssignLockoutKeyToIsolationCertificate": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssignLockoutKeyToIsolationCertificate', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['DesignComplete', 'WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'ControlIsolatingAuthority'], cert.site)) {
                return policyPassed('AssignLockoutKeyToIsolationCertificate', cert, user, "cert.kind === 'Isolation' && _.includes(['DesignComplete', 'WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'ControlIsolatingAuthority'], cert.site)");
            }
            return policyFailed('AssignLockoutKeyToIsolationCertificate', cert, user);
        },
        "AssignContingencyPlan": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssignContingencyPlan', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AssignContingencyPlan', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('AssignContingencyPlan', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignContingencyPlan', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AssignContingencyPlan', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            return policyFailed('AssignContingencyPlan', cert, user);
        },
        "AssociateListedWorkObjectWithWork": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('AssociateListedWorkObjectWithWork', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateListedWorkObjectWithWork', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssociateListedWorkObjectWithWork', cert, user);
        },
        "AssignAffectedLocations": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignAffectedLocations', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('AssignAffectedLocations', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('AssignAffectedLocations', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignAffectedLocations', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignAffectedLocations', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignAffectedLocations', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignAffectedLocations', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignAffectedLocations', cert, user);
        },
        "RemoveIsolation": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RemoveIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveIsolation', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('RemoveIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RemoveIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolation', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolation', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveIsolation', cert, user);
        },
        "ReorderIsolationInstructions": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('ReorderIsolationInstructions', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ReorderIsolationInstructions', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('ReorderIsolationInstructions', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderIsolationInstructions', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('ReorderIsolationInstructions', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderIsolationInstructions', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderIsolationInstructions', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ReorderIsolationInstructions', cert, user);
        },
        "ReorderDeisolationInstructions": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('ReorderDeisolationInstructions', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ReorderDeisolationInstructions', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('ReorderDeisolationInstructions', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderDeisolationInstructions', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('ReorderDeisolationInstructions', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderDeisolationInstructions', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderDeisolationInstructions', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ReorderDeisolationInstructions', cert, user);
        },
        "CorrectIsolation": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectIsolation', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolation', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolation', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectIsolation', cert, user);
        },
        "CommentIsolation": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CommentIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CommentIsolation', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CommentIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CommentIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CommentIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CommentIsolation', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CommentIsolation', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CommentIsolation', cert, user);
        },
        "CommentDeisolation": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CommentDeisolation', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CommentDeisolation', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CommentDeisolation', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CommentDeisolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CommentDeisolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CommentDeisolation', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CommentDeisolation', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CommentDeisolation', cert, user);
        },
        "AddIsolationAction": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AddIsolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AddIsolationAction', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AddIsolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddIsolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AddIsolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddIsolationAction', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddIsolationAction', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AddIsolationAction', cert, user);
        },
        "AddDeisolationAction": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AddDeisolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AddDeisolationAction', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AddDeisolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddDeisolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AddDeisolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddDeisolationAction', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddDeisolationAction', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AddDeisolationAction', cert, user);
        },
        "DescribeIsolationAction": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('DescribeIsolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('DescribeIsolationAction', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('DescribeIsolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeIsolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('DescribeIsolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeIsolationAction', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeIsolationAction', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('DescribeIsolationAction', cert, user);
        },
        "DescribeDeisolationAction": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('DescribeDeisolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('DescribeDeisolationAction', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('DescribeDeisolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeDeisolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('DescribeDeisolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeDeisolationAction', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeDeisolationAction', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('DescribeDeisolationAction', cert, user);
        },
        "RemoveIsolationAction": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RemoveIsolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveIsolationAction', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('RemoveIsolationAction', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RemoveIsolationAction', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationAction', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationAction', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveIsolationAction', cert, user);
        },
        "CorrectIsolationActionListedEquipment": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectIsolationActionListedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectIsolationActionListedEquipment', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectIsolationActionListedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationActionListedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectIsolationActionListedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationActionListedEquipment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationActionListedEquipment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectIsolationActionListedEquipment', cert, user);
        },
        "CorrectIsolationActionUnlistedEquipment": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectIsolationActionUnlistedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectIsolationActionUnlistedEquipment', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectIsolationActionUnlistedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationActionUnlistedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectIsolationActionUnlistedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationActionUnlistedEquipment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationActionUnlistedEquipment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectIsolationActionUnlistedEquipment', cert, user);
        },
        "AddIsolationRisk": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AddIsolationRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AddIsolationRisk', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AddIsolationRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddIsolationRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AddIsolationRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddIsolationRisk', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddIsolationRisk', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AddIsolationRisk', cert, user);
        },
        "AddDeisolationRisk": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AddDeisolationRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AddDeisolationRisk', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AddDeisolationRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddDeisolationRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AddDeisolationRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddDeisolationRisk', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddDeisolationRisk', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AddDeisolationRisk', cert, user);
        },
        "DescribeIsolationRisk": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('DescribeIsolationRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('DescribeIsolationRisk', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('DescribeIsolationRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeIsolationRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('DescribeIsolationRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeIsolationRisk', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DescribeIsolationRisk', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('DescribeIsolationRisk', cert, user);
        },
        "RemoveIsolationRisk": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RemoveIsolationRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveIsolationRisk', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('RemoveIsolationRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RemoveIsolationRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationRisk', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationRisk', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveIsolationRisk', cert, user);
        },
        "CorrectIsolationRiskListedEquipment": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectIsolationRiskListedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectIsolationRiskListedEquipment', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectIsolationRiskListedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationRiskListedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectIsolationRiskListedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationRiskListedEquipment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationRiskListedEquipment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectIsolationRiskListedEquipment', cert, user);
        },
        "CorrectIsolationRiskUnlistedEquipment": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectIsolationRiskUnlistedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectIsolationRiskUnlistedEquipment', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectIsolationRiskUnlistedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationRiskUnlistedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectIsolationRiskUnlistedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationRiskUnlistedEquipment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationRiskUnlistedEquipment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectIsolationRiskUnlistedEquipment', cert, user);
        },
        "RemoveIsolationType": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RemoveIsolationType', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveIsolationType', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('RemoveIsolationType', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationType', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RemoveIsolationType', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationType', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIsolationType', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveIsolationType', cert, user);
        },
        "CorrectIsolationType": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectIsolationType', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectIsolationType', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectIsolationType', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationType', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectIsolationType', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationType', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationType', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectIsolationType', cert, user);
        },
        "AssignFluidRank": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssignFluidRank', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AssignFluidRank', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AssignFluidRank', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignFluidRank', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AssignFluidRank', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignFluidRank', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignFluidRank', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignFluidRank', cert, user);
        },
        "AssignPid": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssignPid', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AssignPid', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AssignPid', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignPid', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AssignPid', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignPid', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignPid', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignPid', cert, user);
        },
        "MarkIsolationForSanctionToTest": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('MarkIsolationForSanctionToTest', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkIsolationForSanctionToTest', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('MarkIsolationForSanctionToTest', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationForSanctionToTest', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('MarkIsolationForSanctionToTest', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationForSanctionToTest', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationForSanctionToTest', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkIsolationForSanctionToTest', cert, user);
        },
        "ClearSanctionToTestMarkFromIsolation": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('ClearSanctionToTestMarkFromIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ClearSanctionToTestMarkFromIsolation', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('ClearSanctionToTestMarkFromIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearSanctionToTestMarkFromIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('ClearSanctionToTestMarkFromIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearSanctionToTestMarkFromIsolation', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearSanctionToTestMarkFromIsolation', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ClearSanctionToTestMarkFromIsolation', cert, user);
        },
        "MarkIsolationAsPressureBuildupPoint": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('MarkIsolationAsPressureBuildupPoint', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkIsolationAsPressureBuildupPoint', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('MarkIsolationAsPressureBuildupPoint', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationAsPressureBuildupPoint', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('MarkIsolationAsPressureBuildupPoint', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationAsPressureBuildupPoint', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationAsPressureBuildupPoint', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkIsolationAsPressureBuildupPoint', cert, user);
        },
        "ClearPressureBuildupPointMarkFromIsolation": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('ClearPressureBuildupPointMarkFromIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ClearPressureBuildupPointMarkFromIsolation', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('ClearPressureBuildupPointMarkFromIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearPressureBuildupPointMarkFromIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('ClearPressureBuildupPointMarkFromIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearPressureBuildupPointMarkFromIsolation', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ClearPressureBuildupPointMarkFromIsolation', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ClearPressureBuildupPointMarkFromIsolation', cert, user);
        },
        "MarkIsolationAsVerificationRequired": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('MarkIsolationAsVerificationRequired', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkIsolationAsVerificationRequired', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('MarkIsolationAsVerificationRequired', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationAsVerificationRequired', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('MarkIsolationAsVerificationRequired', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationAsVerificationRequired', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkIsolationAsVerificationRequired', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkIsolationAsVerificationRequired', cert, user);
        },
        "RevertVerificationRequiredMarkFromIsolation": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RevertVerificationRequiredMarkFromIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RevertVerificationRequiredMarkFromIsolation', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('RevertVerificationRequiredMarkFromIsolation', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RevertVerificationRequiredMarkFromIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RevertVerificationRequiredMarkFromIsolation', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RevertVerificationRequiredMarkFromIsolation', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RevertVerificationRequiredMarkFromIsolation', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RevertVerificationRequiredMarkFromIsolation', cert, user);
        },
        "CorrectIsolationListedEquipment": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectIsolationListedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectIsolationListedEquipment', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectIsolationListedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationListedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectIsolationListedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationListedEquipment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationListedEquipment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectIsolationListedEquipment', cert, user);
        },
        "CorrectIsolationUnlistedEquipment": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('CorrectIsolationUnlistedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectIsolationUnlistedEquipment', cert, user, 'origins');
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectIsolationUnlistedEquipment', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationUnlistedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('CorrectIsolationUnlistedEquipment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationUnlistedEquipment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectIsolationUnlistedEquipment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectIsolationUnlistedEquipment', cert, user);
        },
        "AddInspection": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddInspection', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AddInspection', cert, user);
        },
        "RemoveInspection": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveInspection', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveInspection', cert, user);
        },
        "CorrectInspection": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectInspection', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectInspection', cert, user);
        },
        "ReorderInspectionInstructions": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderInspectionInstructions', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ReorderInspectionInstructions', cert, user);
        },
        "RequestAllInspectionInstructions": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestAllInspectionInstructions', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RequestAllInspectionInstructions', cert, user);
        },
        "CommentInspection": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete', 'Closed'], cert.state)) {
                return policyPassed('CommentInspection', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete', 'Closed'], cert.state)");
            }
            return policyFailed('CommentInspection', cert, user);
        },
        "CorrectInspectionResult": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete', 'Closed'], cert.state)) {
                return policyPassed('CorrectInspectionResult', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete', 'Closed'], cert.state)");
            }
            return policyFailed('CorrectInspectionResult', cert, user);
        },
        "SyncAllInspectionsWithLolcRegistry": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection') {
                return policyPassed('SyncAllInspectionsWithLolcRegistry', cert, user, "cert.kind === 'LolcOperationalInspection'");
            }
            return policyFailed('SyncAllInspectionsWithLolcRegistry', cert, user);
        },
        "ConfirmInspectionInstructions": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete', 'Closed'], cert.state) && userAuthorization.isInRoleForSite(user, ['SignForLOLCOperationalInspection'], cert.site)) {
                return policyPassed('ConfirmInspectionInstructions', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete', 'Closed'], cert.state) && userAuthorization.isInRoleForSite(user, ['SignForLOLCOperationalInspection'], cert.site)");
            }
            return policyFailed('ConfirmInspectionInstructions', cert, user);
        },
        "AssignInspectionPlannedDate": function (cert, user) {
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInspectionPlannedDate', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignInspectionPlannedDate', cert, user);
        },
        "CorrectIsolationTagNumber": function (cert, user) {
            return policyPassed('CorrectIsolationTagNumber', cert, user, 'all conditions are *');
            return policyFailed('CorrectIsolationTagNumber', cert, user);
        },
        "AssessIsolationScheme": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssessIsolationScheme', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AssessIsolationScheme', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssessIsolationScheme', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AssessIsolationScheme', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssessIsolationScheme', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssessIsolationScheme', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssessIsolationScheme', cert, user);
        },
        "RequestIsolations": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RequestIsolations', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority'], cert.site)) {
                return policyPassed('RequestIsolations', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority'], cert.site)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RequestIsolations', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestIsolations', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestIsolations', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RequestIsolations', cert, user);
        },
        "RequestIsolationInstructions": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RequestIsolationInstructions', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority'], cert.site)) {
                return policyPassed('RequestIsolationInstructions', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority'], cert.site)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RequestIsolationInstructions', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestIsolationInstructions', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestIsolationInstructions', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RequestIsolationInstructions', cert, user);
        },
        "RequestDeisolations": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace', 'DeisolationInProgress', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RequestDeisolations', cert, user, "cert.kind === 'Isolation' && _.includes(['IsolationInPlace', 'DeisolationInProgress', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority'], cert.site)) {
                return policyPassed('RequestDeisolations', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority'], cert.site)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RequestDeisolations', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestDeisolations', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestDeisolations', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RequestDeisolations', cert, user);
        },
        "RequestDeisolationInstructions": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace', 'DeisolationInProgress', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RequestDeisolationInstructions', cert, user, "cert.kind === 'Isolation' && _.includes(['IsolationInPlace', 'DeisolationInProgress', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority'], cert.site)) {
                return policyPassed('RequestDeisolationInstructions', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority'], cert.site)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RequestDeisolationInstructions', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestDeisolationInstructions', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequestDeisolationInstructions', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RequestDeisolationInstructions', cert, user);
        },
        "VerifyIsolations": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state)) {
                return policyPassed('VerifyIsolations', cert, user, "cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state)");
            }
            return policyFailed('VerifyIsolations', cert, user);
        },
        "VerifyDeIsolations": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'RequestedForSanctionToTest', 'Modification'], cert.state)) {
                return policyPassed('VerifyDeIsolations', cert, user, "cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'RequestedForSanctionToTest', 'Modification'], cert.state)");
            }
            return policyFailed('VerifyDeIsolations', cert, user);
        },
        "CloseIsolationCertificate": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'Deisolated'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('CloseIsolationCertificate', cert, user, "cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'Deisolated'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            return policyFailed('CloseIsolationCertificate', cert, user);
        },
        "AuditLti": function (cert, user) {
            if (cert.kind === 'Isolation') {
                return policyPassed('AuditLti', cert, user, "cert.kind === 'Isolation'");
            }
            return policyFailed('AuditLti', cert, user);
        },
        "AddPressureMeasurement": function (cert, user) {
            if (userAuthorization.isInRoleForSite(user, ['ProcessIsolatingAuthority'], cert.site)) {
                return policyPassed('AddPressureMeasurement', cert, user, "userAuthorization.isInRoleForSite(user, ['ProcessIsolatingAuthority'], cert.site)");
            }
            return policyFailed('AddPressureMeasurement', cert, user);
        },
        "RemoveFileAttachment": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority'], cert.site)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'PerformingAuthority'], cert.site)");
            }
            if (cert.kind === 'Permit' && _.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'Permit' && _.includes(['Verified'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment') {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'OperationalRiskAssessment'");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Action' && _.includes(['Requesting', 'Active', 'Completed'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'Action' && _.includes(['Requesting', 'Active', 'Completed'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting', 'Approved'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting', 'Approved'], cert.state)");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveFileAttachment', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveFileAttachment', cert, user);
        },
        "RemoveContractedRiskAssessmentTeamMember": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveContractedRiskAssessmentTeamMember', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveContractedRiskAssessmentTeamMember', cert, user);
        },
        "AssignCertificateInitialRisk": function (cert, user) {
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignCertificateInitialRisk', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignCertificateInitialRisk', cert, user);
        },
        "RemoveIdentifiedRiskAssessmentHazard": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveIdentifiedRiskAssessmentHazard', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveIdentifiedRiskAssessmentHazard', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveIdentifiedRiskAssessmentHazard', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveIdentifiedRiskAssessmentHazard', cert, user);
        },
        "IdentifyUnlistedRiskAssessmentHazard": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyUnlistedRiskAssessmentHazard', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyUnlistedRiskAssessmentHazard', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentHazard', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IdentifyUnlistedRiskAssessmentHazard', cert, user);
        },
        "AssignInitialRisk": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AssignInitialRisk', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AssignInitialRisk', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AssignInitialRisk', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('AssignInitialRisk', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('AssignInitialRisk', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignInitialRisk', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignInitialRisk', cert, user);
        },
        "AssignResidualRisk": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AssignResidualRisk', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AssignResidualRisk', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AssignResidualRisk', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('AssignResidualRisk', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('AssignResidualRisk', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignResidualRisk', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignResidualRisk', cert, user);
        },
        "IdentifyNonApplicableHazard": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyNonApplicableHazard', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyNonApplicableHazard', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyNonApplicableHazard', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IdentifyNonApplicableHazard', cert, user);
        },
        "IdentifyRiskAssessmentHazard": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyRiskAssessmentHazard', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyRiskAssessmentHazard', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentHazard', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IdentifyRiskAssessmentHazard', cert, user);
        },
        "ChangeRiskAssessmentTaskListedHazardProperties": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ChangeRiskAssessmentTaskListedHazardProperties', cert, user);
        },
        "IdentifyUnlistedRiskAssessmentControlMeasure": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IdentifyUnlistedRiskAssessmentControlMeasure', cert, user);
        },
        "ChangeListedControlMeasureProperties": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ChangeListedControlMeasureProperties', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('ChangeListedControlMeasureProperties', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeListedControlMeasureProperties', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ChangeListedControlMeasureProperties', cert, user);
        },
        "SelectListedRiskAssessmentControlMeasure": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('SelectListedRiskAssessmentControlMeasure', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('SelectListedRiskAssessmentControlMeasure', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('SelectListedRiskAssessmentControlMeasure', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('SelectListedRiskAssessmentControlMeasure', cert, user);
        },
        "MarkControlMeasureAsPrerequisite": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkControlMeasureAsPrerequisite', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkControlMeasureAsPrerequisite', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsPrerequisite', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkControlMeasureAsPrerequisite', cert, user);
        },
        "MarkControlMeasureAsSupplementary": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkControlMeasureAsSupplementary', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('MarkControlMeasureAsSupplementary', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('MarkControlMeasureAsSupplementary', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('MarkControlMeasureAsSupplementary', cert, user);
        },
        "IdentifyRiskAssessmentTask": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyRiskAssessmentTask', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyRiskAssessmentTask', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRiskAssessmentTask', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('IdentifyRiskAssessmentTask', cert, user);
        },
        "RemoveRiskAssessmentTask": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveRiskAssessmentTask', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveRiskAssessmentTask', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveRiskAssessmentTask', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveRiskAssessmentTask', cert, user);
        },
        "ReorderRiskAssessmentTasks": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('ReorderRiskAssessmentTasks', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('ReorderRiskAssessmentTasks', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ReorderRiskAssessmentTasks', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ReorderRiskAssessmentTasks', cert, user);
        },
        "CorrectRiskAssessmentTaskDescription": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectRiskAssessmentTaskDescription', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.hasParentOfKind('LolcMovement') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.hasParentOfKind('LolcOperationalInspection') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectRiskAssessmentTaskDescription', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectRiskAssessmentTaskDescription', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectRiskAssessmentTaskDescription', cert, user);
        },
        "AssignCertificateResidualRisk": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.riskAssessmentLevel === 'Level1') {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.riskAssessmentLevel === 'Level1'");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.riskAssessmentLevel === 'Level1' && cert.isNew()) {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.riskAssessmentLevel === 'Level1' && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state) && cert.riskAssessmentLevel === 'Level1') {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state) && cert.riskAssessmentLevel === 'Level1'");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'DesignComplete', 'Modification'], cert.state)) {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'DesignComplete', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.hasParentOfKind('Leak') && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignCertificateResidualRisk', cert, user, "cert.hasParentOfKind('Leak') && cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignCertificateResidualRisk', cert, user);
        },
        "IdentifyRisk": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('IdentifyRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('IdentifyRisk', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('IdentifyRisk', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('IdentifyRisk', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Approved'], cert.state)) {
                return policyPassed('IdentifyRisk', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Approved'], cert.state)");
            }
            return policyFailed('IdentifyRisk', cert, user);
        },
        "ProposeAuditTask": function (cert, user) {
            if (cert.kind === 'Action') {
                return policyPassed('ProposeAuditTask', cert, user, "cert.kind === 'Action'");
            }
            return policyFailed('ProposeAuditTask', cert, user);
        },
        "ProposeTask": function (cert, user) {
            if (cert.kind === 'Action') {
                return policyPassed('ProposeTask', cert, user, "cert.kind === 'Action'");
            }
            return policyFailed('ProposeTask', cert, user);
        },
        "AssignTask": function (cert, user) {
            if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssignTask', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssignTask', cert, user);
        },
        "UnassignTask": function (cert, user) {
            if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('UnassignTask', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('UnassignTask', cert, user);
        },
        "CorrectTaskDueDate": function (cert, user) {
            if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectTaskDueDate', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectTaskDueDate', cert, user);
        },
        "ChangeTaskComment": function (cert, user) {
            if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('ChangeTaskComment', cert, user, "cert.kind === 'Action' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('ChangeTaskComment', cert, user);
        },
        "CreateLessonForWorkItem": function (cert, user) {
            return policyPassed('CreateLessonForWorkItem', cert, user, 'all conditions are *');
            return policyFailed('CreateLessonForWorkItem', cert, user);
        },
        "AssignLocationLesson": function (cert, user) {
            return policyPassed('AssignLocationLesson', cert, user, 'all conditions are *');
            return policyFailed('AssignLocationLesson', cert, user);
        },
        "AssignSystemLesson": function (cert, user) {
            return policyPassed('AssignSystemLesson', cert, user, 'all conditions are *');
            return policyFailed('AssignSystemLesson', cert, user);
        },
        "AssignPieceOfEquipmentLesson": function (cert, user) {
            return policyPassed('AssignPieceOfEquipmentLesson', cert, user, 'all conditions are *');
            return policyFailed('AssignPieceOfEquipmentLesson', cert, user);
        },
        "ClearAppliesToFromLesson": function (cert, user) {
            return policyPassed('ClearAppliesToFromLesson', cert, user, 'all conditions are *');
            return policyFailed('ClearAppliesToFromLesson', cert, user);
        },
        "RequireTaskMonitoring": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'Issued', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'AwaitingActivation', 'Revalidate', 'InReview', 'SuspendedForSanctionToTest', 'Expired', 'ReIssued', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'Issued', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'AwaitingActivation', 'Revalidate', 'InReview', 'SuspendedForSanctionToTest', 'Expired', 'ReIssued', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting', 'AwaitingActivation', 'Active'], cert.state)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting', 'AwaitingActivation', 'Active'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('RequireTaskMonitoring', cert, user, "cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            return policyFailed('RequireTaskMonitoring', cert, user);
        },
        "UpdateTaskMonitoringRequirement": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'Issued', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'AwaitingActivation', 'Revalidate', 'InReview', 'SuspendedForSanctionToTest', 'Expired', 'ReIssued', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'Issued', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'AwaitingActivation', 'Revalidate', 'InReview', 'SuspendedForSanctionToTest', 'Expired', 'ReIssued', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting', 'AwaitingActivation', 'Active'], cert.state)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting', 'AwaitingActivation', 'Active'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)) {
                return policyPassed('UpdateTaskMonitoringRequirement', cert, user, "cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority', 'ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority', 'IssuingAuthority'], cert.site)");
            }
            return policyFailed('UpdateTaskMonitoringRequirement', cert, user);
        },
        "RemoveTaskMonitoringRequirement": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'Issued', 'Active', 'Closing', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'AwaitingActivation', 'Revalidate', 'InReview', 'SuspendedForSanctionToTest', 'Expired', 'ReIssued', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'Permit' && _.includes(['Approved', 'Verified', 'Authorised', 'Issued', 'Active', 'Closing', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'AwaitingActivation', 'Revalidate', 'InReview', 'SuspendedForSanctionToTest', 'Expired', 'ReIssued', 'ReAuthorized'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Approved', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting', 'AwaitingActivation', 'Active'], cert.state)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting', 'AwaitingActivation', 'Active'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)) {
                return policyPassed('RemoveTaskMonitoringRequirement', cert, user, "cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state) && userAuthorization.isInRoleForSite(user, ['AreaAuthority'], cert.site)");
            }
            return policyFailed('RemoveTaskMonitoringRequirement', cert, user);
        },
        "ProvidePerformingAuthorityFeedback": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired', 'InReview'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('ProvidePerformingAuthorityFeedback', cert, user, "cert.kind === 'Permit' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired', 'InReview'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'SiteAuthority'], cert.site)");
            }
            return policyFailed('ProvidePerformingAuthorityFeedback', cert, user);
        },
        "CorrectWorkItemSite": function (cert, user) {
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectWorkItemSite', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('CorrectWorkItemSite', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('CorrectWorkItemSite', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('CorrectWorkItemSite', cert, user);
        },
        "AddContractedRiskAssessmentTeamMember": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('AddContractedRiskAssessmentTeamMember', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('AddContractedRiskAssessmentTeamMember', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AddContractedRiskAssessmentTeamMember', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AddContractedRiskAssessmentTeamMember', cert, user);
        },
        "RemoveApprovingRiskAssessmentTeamMember": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal') {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); }) && cert.riskOfWork === 'Normal'");
            }
            if (cert.kind === 'Permit' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template'], function(except) { return origin === except; }); })) {
                return policyFailed('RemoveApprovingRiskAssessmentTeamMember', cert, user, 'origins');
            }
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('RemoveApprovingRiskAssessmentTeamMember', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('RemoveApprovingRiskAssessmentTeamMember', cert, user);
        },
        "DisassociateUnlistedWorkObjectFromWork": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateUnlistedWorkObjectFromWork', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('DisassociateUnlistedWorkObjectFromWork', cert, user);
        },
        "DisassociateListedWorkObjectFromWork": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority', 'FunctionalAuthority'], cert.site)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('DisassociateListedWorkObjectFromWork', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('DisassociateListedWorkObjectFromWork', cert, user);
        },
        "AssociateUnlistedWorkObjectWithWork": function (cert, user) {
            if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'Permit' && _.includes(['Approved'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.isNew()");
            }
            if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization'], cert.state) && cert.origins && _.some(cert.origins, function(origin){ return _.some(['Template'],function(only) { return only === origin; }); })");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'IsolationTemplate' && _.includes(['Modification'], cert.state) && userAuthorization.isInRoleForSite(user, ['PerformingAuthority', 'AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.hasParentOfKind('Isolation') && cert.hasParentInState(['Requesting', 'Modification']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment') {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.hasParentOfKind('Leak') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessment'");
            }
            if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate') {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.hasParentOfKind('IsolationTemplate') && cert.hasParentInState(['Requesting']) && cert.kind === 'TaskRiskAssessmentTemplate'");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && cert.origins && _.some(cert.origins, function(origin) { return _.some(['Template', 'Copy'], function(except) { return origin === except; }); })) {
                return policyFailed('AssociateUnlistedWorkObjectWithWork', cert, user, 'origins');
            }
            if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)");
            }
            if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                return policyPassed('AssociateUnlistedWorkObjectWithWork', cert, user, "cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)");
            }
            return policyFailed('AssociateUnlistedWorkObjectWithWork', cert, user);
        },
        "MarkIsolationCertificateAsPositive": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace'], cert.state) && userAuthorization.isInRoleForSite(user, ['ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority'], cert.site)) {
                return policyPassed('MarkIsolationCertificateAsPositive', cert, user, "cert.kind === 'Isolation' && _.includes(['IsolationInPlace'], cert.state) && userAuthorization.isInRoleForSite(user, ['ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority'], cert.site)");
            }
            return policyFailed('MarkIsolationCertificateAsPositive', cert, user);
        },
        "MarkIsolationCertificateAsNotPositive": function (cert, user) {
            if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace'], cert.state) && userAuthorization.isInRoleForSite(user, ['ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority'], cert.site)) {
                return policyPassed('MarkIsolationCertificateAsNotPositive', cert, user, "cert.kind === 'Isolation' && _.includes(['IsolationInPlace'], cert.state) && userAuthorization.isInRoleForSite(user, ['ElectricalLowVoltageLevel1IsolatingAuthority', 'ElectricalLowVoltageIsolatingAuthority', 'ElectricalHighVoltageIsolatingAuthority', 'ControlIsolatingAuthority', 'ProcessIsolatingAuthority'], cert.site)");
            }
            return policyFailed('MarkIsolationCertificateAsNotPositive', cert, user);
        },
        "CopyAsTemplate": function (cert, user) {
            if (cert.kind === 'Permit') {
                return policyPassed('CopyAsTemplate', cert, user, "cert.kind === 'Permit'");
            }
            if (cert.kind === 'Isolation') {
                return policyPassed('CopyAsTemplate', cert, user, "cert.kind === 'Isolation'");
            }
            return policyFailed('CopyAsTemplate', cert, user);
        },
        /* workItemAuditCommand */
        "StartWorkItemAudit": function (cert, user) {
            if (cert.kind === 'WorkItemAudit' && userAuthorization.isInRoleForSite(user, ['PermitVisionUser'], cert.site)) {
                return policyPassed('StartWorkItemAudit', cert, user, "cert.kind === 'WorkItemAudit' && userAuthorization.isInRoleForSite(user, ['PermitVisionUser'], cert.site)");
            }
            return policyFailed('StartWorkItemAudit', cert, user);
        },
        "AssessAuditAspect": function (cert, user) {
            if (cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['CreatedBy'], cert, user)) {
                return policyPassed('AssessAuditAspect', cert, user, "cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state) && userMatchesAnyOfAuthorities(['CreatedBy'], cert, user)");
            }
            return policyFailed('AssessAuditAspect', cert, user);
        },
        /* command */
        "CreateCompletedCertificateQuestionnaire": function (cert, user) {
            return policyPassed('CreateCompletedCertificateQuestionnaire', cert, user, 'true');
            return policyFailed('CreateCompletedCertificateQuestionnaire', cert, user);
        },
        "SuspendAllActivePermits": function (cert, user) {
            return policyPassed('SuspendAllActivePermits', cert, user, 'true');
            return policyFailed('SuspendAllActivePermits', cert, user);
        },
        "ApproveLesson": function (cert, user) {
            return policyPassed('ApproveLesson', cert, user, 'true');
            return policyFailed('ApproveLesson', cert, user);
        },
        "ChangeLessonDescription": function (cert, user) {
            if (userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('ChangeLessonDescription', cert, user, "userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            return policyFailed('ChangeLessonDescription', cert, user);
        },
        "RemoveLesson": function (cert, user) {
            if (userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)) {
                return policyPassed('RemoveLesson', cert, user, "userAuthorization.isInRoleForSite(user, ['AreaAuthority', 'SiteAuthority'], cert.site)");
            }
            return policyFailed('RemoveLesson', cert, user);
        },
        "AddLockOpenLockClosedValve": function (cert, user) {
            if (userAuthorization.isInRoleForSite(user, ['LolcDataManager'], cert.site)) {
                return policyPassed('AddLockOpenLockClosedValve', cert, user, "userAuthorization.isInRoleForSite(user, ['LolcDataManager'], cert.site)");
            }
            return policyFailed('AddLockOpenLockClosedValve', cert, user);
        },
        "RemoveLockOpenLockClosedValve": function (cert, user) {
            if (userAuthorization.isInRoleForSite(user, ['LolcDataManager'], cert.site)) {
                return policyPassed('RemoveLockOpenLockClosedValve', cert, user, "userAuthorization.isInRoleForSite(user, ['LolcDataManager'], cert.site)");
            }
            return policyFailed('RemoveLockOpenLockClosedValve', cert, user);
        },
        "DetermineSectionOfLockOpenLockClosedValve": function (cert, user) {
            if (userAuthorization.isInRoleForSite(user, ['LolcDataManager'], cert.site)) {
                return policyPassed('DetermineSectionOfLockOpenLockClosedValve', cert, user, "userAuthorization.isInRoleForSite(user, ['LolcDataManager'], cert.site)");
            }
            return policyFailed('DetermineSectionOfLockOpenLockClosedValve', cert, user);
        },
        /* fileAttachmentCommand */

        "AttachUploadedFile": function (cert, user) {
            if (cert.kind === 'Permit') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'Permit'");
            }
            if (cert.kind === 'Isolation') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'Isolation'");
            }
            if (cert.kind === 'PermitTemplate') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'PermitTemplate'");
            }
            if (cert.kind === 'IsolationTemplate') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'IsolationTemplate'");
            }
            if (cert.kind === 'Operation') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'Operation'");
            }
            if (cert.kind === 'Leak') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'Leak'");
            }
            if (cert.kind === 'OperationalRiskAssessment') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'OperationalRiskAssessment'");
            }
            if (cert.kind === 'Action') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'Action'");
            }
            if (cert.kind === 'WorkItemAudit') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'WorkItemAudit'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate'");
            }
            if (cert.kind === 'LolcMovement') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'LolcMovement'");
            }
            if (cert.kind === 'LolcOperationalInspection') {
                return policyPassed('AttachUploadedFile', cert, user, "cert.kind === 'LolcOperationalInspection'");
            }
            return policyFailed('AttachUploadedFile', cert, user);
        },
        "AttachLinkedFile": function (cert, user) {
            if (cert.kind === 'Permit') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'Permit'");
            }
            if (cert.kind === 'Isolation') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'Isolation'");
            }
            if (cert.kind === 'PermitTemplate') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'PermitTemplate'");
            }
            if (cert.kind === 'IsolationTemplate') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'IsolationTemplate'");
            }
            if (cert.kind === 'Operation') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'Operation'");
            }
            if (cert.kind === 'Leak') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'Leak'");
            }
            if (cert.kind === 'OperationalRiskAssessment') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'OperationalRiskAssessment'");
            }
            if (cert.kind === 'Action') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'Action'");
            }
            if (cert.kind === 'WorkItemAudit') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'WorkItemAudit'");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'SafetyOverrideRiskAssessmentTemplate'");
            }
            if (cert.kind === 'LolcMovement') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'LolcMovement'");
            }
            if (cert.kind === 'LolcOperationalInspection') {
                return policyPassed('AttachLinkedFile', cert, user, "cert.kind === 'LolcOperationalInspection'");
            }
            return policyFailed('AttachLinkedFile', cert, user);
        },
        canAttachFileType: function(cert, attachmentType) {
            if (cert.kind === 'Isolation' && _.includes(['Pid', 'Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'Isolation' && _.includes($['Pid', 'Other'], attachmentType");
            }
            if (cert.kind === 'IsolationTemplate' && _.includes(['Pid', 'Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'IsolationTemplate' && _.includes($['Pid', 'Other'], attachmentType");
            }
            if (cert.kind === 'Permit' && _.includes(['AbrasiveTaskCertificate', 'BOLECertificate', 'CrossSiteBoundaryIsolation', 'EnergisedElectricalWorkCertificate', 'ERRP', 'ExcavationCertificate', 'HeavyEquipmentMovement', 'LeakTest', 'LiftingPlan', 'MechanicalSealPlug', 'PressurisedHabitat', 'PreStartup', 'RAP', 'VentilationPlan', 'WellHandoverCertificate', 'Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'Permit' && _.includes($['AbrasiveTaskCertificate', 'BOLECertificate', 'CrossSiteBoundaryIsolation', 'EnergisedElectricalWorkCertificate', 'ERRP', 'ExcavationCertificate', 'HeavyEquipmentMovement', 'LeakTest', 'LiftingPlan', 'MechanicalSealPlug', 'PressurisedHabitat', 'PreStartup', 'RAP', 'VentilationPlan', 'WellHandoverCertificate', 'Other'], attachmentType");
            }
            if (cert.kind === 'PermitTemplate' && _.includes(['AbrasiveTaskCertificate', 'BOLECertificate', 'CrossSiteBoundaryIsolation', 'EnergisedElectricalWorkCertificate', 'ERRP', 'ExcavationCertificate', 'HeavyEquipmentMovement', 'LeakTest', 'LiftingPlan', 'MechanicalSealPlug', 'PressurisedHabitat', 'PreStartup', 'RAP', 'VentilationPlan', 'WellHandoverCertificate', 'Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'PermitTemplate' && _.includes($['AbrasiveTaskCertificate', 'BOLECertificate', 'CrossSiteBoundaryIsolation', 'EnergisedElectricalWorkCertificate', 'ERRP', 'ExcavationCertificate', 'HeavyEquipmentMovement', 'LeakTest', 'LiftingPlan', 'MechanicalSealPlug', 'PressurisedHabitat', 'PreStartup', 'RAP', 'VentilationPlan', 'WellHandoverCertificate', 'Other'], attachmentType");
            }
            if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'OperationalRiskAssessment' && _.includes($['Other'], attachmentType");
            }
            if (cert.kind === 'Operation' && _.includes(['Rap', 'Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'Operation' && _.includes($['Rap', 'Other'], attachmentType");
            }
            if (cert.kind === 'Leak' && _.includes(['Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'Leak' && _.includes($['Other'], attachmentType");
            }
            if (cert.kind === 'Action' && _.includes(['Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'Action' && _.includes($['Other'], attachmentType");
            }
            if (cert.kind === 'WorkItemAudit' && _.includes(['Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'WorkItemAudit' && _.includes($['Other'], attachmentType");
            }
            if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes($['Other'], attachmentType");
            }
            if (cert.kind === 'LolcMovement' && _.includes(['Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'LolcMovement' && _.includes($['Other'], attachmentType");
            }
            if (cert.kind === 'LolcOperationalInspection' && _.includes(['Other'], attachmentType)) {
                return policyPassed('fileAttachmentTypes', cert, null, "(cert.kind === 'LolcOperationalInspection' && _.includes($['Other'], attachmentType");
            }
            return policyFailed('fileAttachmentTypes', cert, null);
        },
        addIsolation: addIsolation,
        attachWorkItems: attachWorkItems,
        unlinkWorkItemAttachment: unlinkWorkItemAttachment,
        CopyPermit: copyPermit,
        AssignWorkingLocations: assignWorkingLocations,
        revertState: revertState,
        assignRiskAssessmentLevel: assignRiskAssessmentLevel,
        assignPermitNumberOfPersons: assignPermitNumberOfPersons,
        assignWorkingPeriod: assignWorkingPeriod,
        textProperties: textProperties,
        assignUserAuthority: assignUserAuthority,
        removeAssignedUserAuthority: removeAssignedUserAuthority,
        addMeasurements: addMeasurements,
        multiValueProperties: multiValueProperties,
        printing: printing,
        assignWorkOrder: assignWorkOrder,
        DeleteWorkItem: deleteWorkItem,
        UnlinkAndDeleteWorkItem: unlinkAndDeleteWorkItem,
        identifyUnlistedHazard: identifyUnlistedHazard,
        RemoveRiskAssessmentControlMeasure: removeRiskAssessmentControlMeasure,
        CopyRiskAssessment: riskAssessmentCopy,
        AddApprovingRiskAssessmentTeamMember: addApprovingRiskAssessmentTeamMember
    };
})();
