window.actionConditions = (function() {
    // this file contains generated code. Do not modify, your changes will be overwritten!!!
    /* tslint:disable:comma-dangle no-unused-variable no-unused-vars no-trailing-whitespace no-unreachable max-line-length curly comment-format no-trailing-comma */

    /* action availability conditions cannot easily be retrieved by a unique identifier. SO, we access them via the convention [kind]_[index] */

    var _log;
    var log = function() {
        if (!_log) {
            _log = logger.getLoggerFor('editabilityPolicy');
        }
        _log(arguments);
    };
    return {
        Permit_2: {
            isRequired: function(cert, user) {
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!!(_.includes(['Authorised', 'ReAuthorized', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest'], cert.state))) {
                        return true;
                    }
                    if(!!(/* <all> condition: a single condition below must match */
                    function() {
                        if(!(cert.isOriginatingFromAny(['Template']))) {
                            return false;
                        }
                        if(!(_.includes(['Approved'], cert.state))) {
                            return false;
                        }
                        return true;
                    }())) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!!(_.includes(['Issued', 'ReIssued', 'Active', 'Expired'], cert.state))) {
                        return true;
                    }
                    if(!!(/* <all> condition: a single condition below must match */
                    function() {
                        if(!(cert.isOriginatingFromAny(['Template']))) {
                            return false;
                        }
                        if(!(_.includes(['Approved'], cert.state))) {
                            return false;
                        }
                        return true;
                    }())) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                return true;
            }
        },
        Permit_4: {
            isRequired: function(cert, user) {
                if (!(_.includes(['Revalidate'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                if (!(_.includes(['Active', 'AwaitingActivation', 'InReview', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest'], cert.state))) {
                    return false;
                }
                return true;
            }
        },
        Permit_6: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if (!(_.includes(['Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired'], cert.state))) {
                    return false;
                }
                return true;
            }
        },
        Permit_7: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if (!(_.includes(['Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired'], cert.state))) {
                    return false;
                }
                return true;
            }
        },
        Permit_8: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if (!(_.includes(['Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired'], cert.state))) {
                    return false;
                }
                return true;
            }
        },
        Isolation_2: {
            isRequired: function(cert, user) {
                if (!(_.includes(['WaitingForAuthorization', 'IsolationInProgress'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        Isolation_21: {
            isRequired: function(cert, user) {
                if (!(_.includes(['IsolationInProgress'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        Isolation_22: {
            isRequired: function(cert, user) {
                if (!(_.includes(['IsolationInProgress'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        Isolation_23: {
            isRequired: function(cert, user) {
                if (!(_.includes(['DeisolationInProgress'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        Isolation_24: {
            isRequired: function(cert, user) {
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        Isolation_25: {
            isRequired: function(cert, user) {
                if ((certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if ((cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedDeisolations)) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        Isolation_26: {
            isRequired: function(cert, user) {
                if (!(_.includes(['IsolationInPlaceForSanctionToTest'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        Isolation_27: {
            isRequired: function(cert, user) {
                if (!(cert.instructionPlanInfo && cert.instructionPlanInfo.allIsolationInstructionsPerformed)) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                if ((cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedIsolations)) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        Isolation_28: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if (!(_.includes(['IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state))) {
                    return false;
                }
                return true;
            }
        },
        Isolation_34: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if (!(_.includes(['IsolationInPlace'], cert.state))) {
                    return false;
                }
                if ((cert.hasParents(['Permit'], []))) {
                    return false;
                }
                return true;
            }
        },
        Isolation_35: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if (!(_.includes(['IsolationInPlaceForLongTerm'], cert.state))) {
                    return false;
                }
                return true;
            }
        },
        PermitTemplate_2: {
            isRequired: function(cert, user) {
                if (!(_.includes(['Revalidate'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        PermitTemplate_3: {
            isRequired: function(cert, user) {
                if (!(_.includes(['Active'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        PermitTemplate_7: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if ((cert.canBeCopied)) {
                    return false;
                }
                return true;
            }
        },
        IsolationTemplate_3: {
            isRequired: function(cert, user) {
                if (!(_.includes(['Revalidate'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        },
        IsolationTemplate_4: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if (!(_.includes(['Active', 'Revalidate'], cert.state))) {
                    return false;
                }
                return true;
            }
        },
        IsolationTemplate_7: {
            isRequired: function(cert, user) {
                return false;
            },
            isOptional: function(cert, user) {
                if ((cert.canBeCopied)) {
                    return false;
                }
                return true;
            }
        },
        WorkItemAudit_2: {
            isRequired: function(cert, user) {
                if (!(_.includes(['Reviewed'], cert.state))) {
                    return false;
                }
                return true;
            },
            isOptional: function(cert, user) {
                return true;
            }
        }
    };
})();
