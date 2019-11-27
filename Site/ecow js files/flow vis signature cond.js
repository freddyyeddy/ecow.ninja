
window.signatureConditions = (function() {
    // this file contains generated code. Do not modify, your changes will be overwritten!!!
    /* tslint:disable:comma-dangle no-string-literal no-unused-variable whitespace no-unused-vars no-trailing-whitespace no-unreachable max-line-length curly comment-format no-trailing-comma */
    var _log;
    var log = function() {
        if (!_log) {
            _log = logger.getLoggerFor('editabilityPolicy');
        }
        _log(arguments);
    };
    var signatures = {
        Counter: {
            key: 'Counter',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'Counter\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit') {
                        return true;
                    }
                    if (cert.kind === 'PermitTemplate') {
                        return true;
                    }
                    if (cert.kind === 'Isolation') {
                        return true;
                    }
                    if (cert.kind === 'IsolationTemplate') {
                        return true;
                    }
                    if (cert.kind === 'Operation') {
                        return true;
                    }
                    if (cert.kind === 'Leak') {
                        return true;
                    }
                    if (cert.kind === 'OperationalRiskAssessment') {
                        return true;
                    }
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate') {
                        return true;
                    }
                    log('signature \'Counter\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'Counter\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'Counter\' is enabled', cert);
                return true;
            }
        },
        CompleteLolcMovementDesign: {
            key: 'CompleteLolcMovementDesign',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requestAllIsolations> is explicitly excluded from client side code generation
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requirePlannedWorkingPeriod/>
                validationRules.requirePlannedWorkingPeriod(cert, violations);
                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, 'LolcMovement')
                // rule isolateLolcValve not yet implemented
                // rule preventConflictingLolcValveIsolations not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'CompleteLolcMovementDesign\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'LolcMovement' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteLolcMovementDesign\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteLolcMovementDesign\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteLolcMovementDesign\' is enabled', cert);
                return true;
            }
        },
        RequestLolcMovement: {
            key: 'RequestLolcMovement',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule preventConflictingLolcValveIsolations not yet implemented
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['CompleteLolcMovementDesign'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <markAsCopyable> is explicitly excluded from client side code generation
                // Rule <signAttachedCertificate> is explicitly excluded from client side code generation
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'OperationalRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active', 'Closed'],
                    notInStates: []
                });
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'Operation',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active', 'Closed'],
                    notInStates: []
                });
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'Permit',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active', 'Closed'],
                    notInStates: []
                });
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'SafetyOverrideRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active', 'Closed'],
                    notInStates: []
                });
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['DesignComplete', 'PartiallyMovedOutOfNormal'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestLolcMovement\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'LolcMovement' && _.includes(['DesignComplete', 'PartiallyMovedOutOfNormal'], cert.state)) {
                        return true;
                    }
                    log('signature \'RequestLolcMovement\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestLolcMovement\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestLolcMovement\' is enabled', cert);
                return true;
            }
        },
        RequestLolcMovementBack: {
            key: 'RequestLolcMovementBack',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedDeisolations(cert.instructionPlanInfo, ['LolcMovement']))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestLolcMovementBack\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'LolcMovement' && _.includes(['IsolationInPlace', 'DeisolationInProgress'], cert.state)) {
                        return true;
                    }
                    log('signature \'RequestLolcMovementBack\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestLolcMovementBack\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestLolcMovementBack\' is enabled', cert);
                return true;
            }
        },
        ConfirmLolcMovementDeisolations: {
            key: 'ConfirmLolcMovementDeisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['LolcMovement']))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmLolcMovementDeisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'LolcMovement' && _.includes(['DeisolationInProgress'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmLolcMovementDeisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmLolcMovementDeisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmLolcMovementDeisolations\' is enabled', cert);
                return true;
            }
        },
        CloseLolcMovementCertificate: {
            key: 'CloseLolcMovementCertificate',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Deisolated'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseLolcMovementCertificate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'LolcMovement' && _.includes(['Deisolated'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseLolcMovementCertificate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseLolcMovementCertificate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseLolcMovementCertificate\' is enabled', cert);
                return true;
            }
        },
        CompleteLolcOperationalInspectionDesign: {
            key: 'CompleteLolcOperationalInspectionDesign',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <markAsCopyable> is explicitly excluded from client side code generation
                // Rule <requireSelectedValvesInOperationalInspection/>
                validationRules.requireSelectedValvesInOperationalInspection(cert, violations);
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'OperationalRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active', 'Closed'],
                    notInStates: []
                });
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'Operation',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active', 'Closed'],
                    notInStates: []
                });
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'Permit',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active', 'Closed'],
                    notInStates: []
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'CompleteLolcOperationalInspectionDesign\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteLolcOperationalInspectionDesign\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteLolcOperationalInspectionDesign\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteLolcOperationalInspectionDesign\' is enabled', cert);
                return true;
            }
        },
        ConfirmLolcOperationalInspection: {
            key: 'ConfirmLolcOperationalInspection',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['DesignComplete'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmLolcOperationalInspection\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['DesignComplete'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmLolcOperationalInspection\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmLolcOperationalInspection\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmLolcOperationalInspection\' is enabled', cert);
                return true;
            }
        },
        CloseOperationalInspection: {
            key: 'CloseOperationalInspection',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.inspectionInstructionPlan && cert.inspectionInstructionPlan.length > 0)) {
                    return false;
                }
                if (!(cert.areAllInspectionInstructionsPerformed())) {
                    return false;
                }
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseOperationalInspection\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'LolcOperationalInspection' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseOperationalInspection\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseOperationalInspection\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseOperationalInspection\' is enabled', cert);
                return true;
            }
        },
        GasTesting: {
            key: 'GasTesting',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((_.includes(['Closed'], cert.state))) {
                    return false;
                }
                if (!(cert.measurementRequirements && cert.measurementRequirements.requiredMeasurements
                && cert.measurementRequirements.requiredMeasurements.length > 0)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'GasTesting\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Authorised', 'Issued', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired', 'ReAuthorized', 'ReIssued', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'HotWorkNakedFlame'], cert.variant) && _.includes(['Authorised', 'Issued', 'Active', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired', 'ReAuthorized', 'ReIssued', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'HotWorkNakedFlame'], cert.variant) && _.includes(['Approved'], cert.state)) {
                        return true;
                    }
                    log('signature \'GasTesting\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'GasTesting\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'GasTesting\' is enabled', cert);
                return true;
            }
        },
        ApproveByAreaAuthority: {
            key: 'ApproveByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, '');
                // Rule <requireRiskArea/>
                validationRules.requireRiskArea(cert, violations, ['1']);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['Full']);
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if (!(_.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'HotWorkNakedFlame'], cert.variant))) {
                    return false;
                }
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                if ((_.some(cert.controlMeasures, function(controlMeasure) {
                    return _.includes(['SUPP_BOLE'], controlMeasure.code);
                }))) {
                    return false;
                }
                if ((_.some(cert.controlMeasures, function(controlMeasure) {
                    return _.includes(['SUPP_ATC'], controlMeasure.code);
                }))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'HotWorkNakedFlame'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveLevel1BySiteAuthority: {
            key: 'ApproveLevel1BySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, '');
                // Rule <requireRiskArea/>
                validationRules.requireRiskArea(cert, violations, ['1']);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['Full']);
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if (!(_.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'HotWorkNakedFlame'], cert.variant))) {
                    return false;
                }
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return true;
                    }
                    if(!!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveLevel1BySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'HotWorkNakedFlame'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveLevel1BySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveLevel1BySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveLevel1BySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveLevel2ByAreaAuthority: {
            key: 'ApproveLevel2ByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['Full']);
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(_.includes(['Full'], cert.isolationCertificateRequirement))) {
                        return false;
                    }
                    if (!(cert.isOriginatingFromAny(['Template']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: true,
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if ((cert.isOriginatingFromAny(['Template']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApprovePermitByRiskAssessmentTeam'],
                        requiredSignersProperty: 'Approvingteammembers',
                        proceedWhenNoSignersAvailable: true
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if ((cert.isOriginatingFromAny(['Template']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApprovePermitByRiskAssessmentFacilitator'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireRiskArea/>
                validationRules.requireRiskArea(cert, violations, ['1']);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if ((_.includes(['2', '3', '4', '5'], cert.riskArea))) {
                    return false;
                }
                if (!(_.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'HotWorkNakedFlame'], cert.variant))) {
                    return false;
                }
                if ((cert.signedWith(['AuthoriseDraftTemplateBasedPermit'], []))) {
                    return false;
                }
                if ((cert.signedWith(['IssueDraftTemplateBasedPermit'], []))) {
                    return false;
                }
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if ((_.some(cert.controlMeasures, function(controlMeasure) {
                    return _.includes(['SUPP_BOLE'], controlMeasure.code);
                }))) {
                    return false;
                }
                if ((_.some(cert.controlMeasures, function(controlMeasure) {
                    return _.includes(['SUPP_ATC'], controlMeasure.code);
                }))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveLevel2ByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'HotWorkNakedFlame'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveLevel2ByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveLevel2ByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveLevel2ByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveArea2Permit: {
            key: 'ApproveArea2Permit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['Full']);
                }

                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['ApprovePermitByRiskAssessmentTeam'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['ApprovePermitByRiskAssessmentFacilitator'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!!(_.includes(['2'], cert.riskArea))) {
                        return true;
                    }
                    if(!!(/* <all> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['1'], cert.riskArea))) {
                            return false;
                        }
                        if(!(/* <anyOf> condition: a single condition below must match */
                        function() {
                            if(!!(_.some(cert.controlMeasures, function(controlMeasure) {
                                return _.includes(['SUPP_BOLE'], controlMeasure.code);
                            }))) {
                                return true;
                            }
                            if(!!(_.some(cert.controlMeasures, function(controlMeasure) {
                                return _.includes(['SUPP_ATC'], controlMeasure.code);
                            }))) {
                                return true;
                            }
                            return false;
                        }())) {
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
                if (!(cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if ((_.includes(['ConfinedSpaceEntry'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveArea2Permit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveArea2Permit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveArea2Permit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveArea2Permit\' is enabled', cert);
                return true;
            }
        },
        ApproveHotWorkNakedFlamePermit: {
            key: 'ApproveHotWorkNakedFlamePermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if ((_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveHotWorkNakedFlamePermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {

                    log('signature \'ApproveHotWorkNakedFlamePermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveHotWorkNakedFlamePermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveHotWorkNakedFlamePermit\' is enabled', cert);
                return true;
            }
        },
        ApprovePermitByRiskAssessmentTeam: {
            key: 'ApprovePermitByRiskAssessmentTeam',
            numberOfSignatures: 'SinglePerUser',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('ApprovingTeamMembers')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['Full']);
                }

                // Rule <requireRiskAssessmentTeam/>
                if (function() {
                    if ((_.includes(['HotWorkNakedFlame', 'ConfinedSpaceEntry'], cert.variant))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentTeam(cert, violations, {
                        minimumNumberOfTeamMembers: 2,
                        ignoreContractedTeamMembers: false
                    });
                }

                // Rule <requireRiskAssessmentTeam/>
                if (function() {
                    if (!(_.includes(['HotWorkNakedFlame', 'ConfinedSpaceEntry'], cert.variant))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentTeam(cert, violations, {
                        minimumNumberOfTeamMembers: 2,
                        ignoreContractedTeamMembers: false
                    });
                }

                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireRequiredMeasurements/>
                if (function() {
                    if (!(_.includes(['ConfinedSpaceEntry'], cert.variant))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRequiredMeasurements(cert, violations, {
                        substanceCodes: ['Methane', 'Oxygen']
                    })
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApprovePermitByRiskAssessmentTeam\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('ApprovingTeamMembers').length > 0) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('ApprovingTeamMembers').length > 0) {
                        return true;
                    }
                    log('signature \'ApprovePermitByRiskAssessmentTeam\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApprovePermitByRiskAssessmentTeam\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApprovePermitByRiskAssessmentTeam\' is enabled', cert);
                return true;
            }
        },
        ApprovePermitByRiskAssessmentFacilitator: {
            key: 'ApprovePermitByRiskAssessmentFacilitator',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('RiskAssessmentFacilitator')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['Full']);
                }

                // Rule <requireRiskAssessmentTeam/>
                if (function() {
                    if ((_.includes(['HotWorkNakedFlame', 'ConfinedSpaceEntry'], cert.variant))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentTeam(cert, violations, {
                        minimumNumberOfTeamMembers: 2,
                        ignoreContractedTeamMembers: false
                    });
                }

                // Rule <requireRiskAssessmentTeam/>
                if (function() {
                    if (!(_.includes(['HotWorkNakedFlame', 'ConfinedSpaceEntry'], cert.variant))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentTeam(cert, violations, {
                        minimumNumberOfTeamMembers: 2,
                        ignoreContractedTeamMembers: false
                    });
                }

                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireRequiredMeasurements/>
                if (function() {
                    if (!(_.includes(['ConfinedSpaceEntry'], cert.variant))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRequiredMeasurements(cert, violations, {
                        substanceCodes: ['Methane', 'Oxygen']
                    })
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApprovePermitByRiskAssessmentFacilitator\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('RiskAssessmentFacilitator').length > 0) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('RiskAssessmentFacilitator').length > 0) {
                        return true;
                    }
                    log('signature \'ApprovePermitByRiskAssessmentFacilitator\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApprovePermitByRiskAssessmentFacilitator\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApprovePermitByRiskAssessmentFacilitator\' is enabled', cert);
                return true;
            }
        },
        ApproveConfinedSpaceEntryPermit: {
            key: 'ApproveConfinedSpaceEntryPermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <violateWithMessage/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['true'], cert.textProperties.RestrictedWorkSpace))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.violateWithMessage(cert, violations, 'RestrictedWorkSpaceProhibited')
                }

                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['Full']);
                }

                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                // Rule <requireRequiredMeasurements/>
                if (function() {
                    if (!(_.includes(['ConfinedSpaceEntry'], cert.variant))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRequiredMeasurements(cert, violations, {
                        substanceCodes: ['Methane', 'Oxygen']
                    })
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApprovePermitByRiskAssessmentTeam'],
                        requiredSignersProperty: 'Approvingteammembers',
                        proceedWhenNoSignersAvailable: true
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApprovePermitByRiskAssessmentFacilitator'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(_.includes(['ConfinedSpaceEntry'], cert.variant))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.riskAssessmentLevel === 'Level2')) {
                        return true;
                    }
                    if(!(_.includes(['3', '4', '5'], cert.riskArea))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveConfinedSpaceEntryPermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['ConfinedSpaceEntry'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveConfinedSpaceEntryPermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveConfinedSpaceEntryPermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveConfinedSpaceEntryPermit\' is enabled', cert);
                return true;
            }
        },
        ApproveArea3OrHigherPermit: {
            key: 'ApproveArea3OrHigherPermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['Full']);
                }

                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['ApprovePermitByRiskAssessmentTeam'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['ApprovePermitByRiskAssessmentFacilitator'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if (!(_.includes(['3', '4', '5'], cert.riskArea))) {
                    return false;
                }
                if (!(_.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'ConfinedSpaceEntry', 'HotWorkNakedFlame'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveArea3OrHigherPermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment', 'ConfinedSpaceEntry', 'HotWorkNakedFlame'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveArea3OrHigherPermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveArea3OrHigherPermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveArea3OrHigherPermit\' is enabled', cert);
                return true;
            }
        },
        AuthoriseDraftTemplateBasedPermit: {
            key: 'AuthoriseDraftTemplateBasedPermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'ReasonForWork', values: [] });
                // rule requireWorkOrderNumber not yet implemented
                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(_.includes(['Full'], cert.isolationCertificateRequirement))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: true,
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'Isolation',
                    isRequired: false,
                    variants: [],
                    inStates: ['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'RequestedForReisolation', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'],
                    notInStates: []
                });
                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.isOriginatingFromAny(['Template']))) {
                    return false;
                }
                if ((_.includes(['Normal'], cert.riskOfWork))) {
                    return false;
                }
                if ((cert.signedWith(['IssueDraftTemplateBasedPermit'], []))) {
                    return false;
                }
                if ((cert.signedWith(['ApproveLevel2ByAreaAuthority'], []))) {
                    return false;
                }
                if (!(_.includes(['Requesting', 'Approved', 'ReadyToVerify'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'AuthoriseDraftTemplateBasedPermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'ReadyToVerify'], cert.state)) {
                        return true;
                    }
                    log('signature \'AuthoriseDraftTemplateBasedPermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AuthoriseDraftTemplateBasedPermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AuthoriseDraftTemplateBasedPermit\' is enabled', cert);
                return true;
            }
        },
        IssueDraftTemplateBasedPermit: {
            key: 'IssueDraftTemplateBasedPermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'ReasonForWork', values: [] });
                // rule requireWorkOrderNumber not yet implemented
                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(_.includes(['Full'], cert.isolationCertificateRequirement))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: true,
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'Isolation',
                    isRequired: false,
                    variants: [],
                    inStates: ['IsolationInPlace'],
                    notInStates: []
                });
                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // rule requireMeasurementsAfterSignature not yet implemented
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'SafetyOverrideRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.isOriginatingFromAny(['Template']))) {
                    return false;
                }
                if ((_.includes(['Normal'], cert.riskOfWork))) {
                    return false;
                }
                if ((cert.signedWith(['AuthoriseDraftTemplateBasedPermit'], []))) {
                    return false;
                }
                if ((cert.signedWith(['ApproveLevel2ByAreaAuthority'], []))) {
                    return false;
                }
                if (!(_.includes(['Requesting', 'Approved', 'ReadyToVerify'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'IssueDraftTemplateBasedPermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Requesting', 'Approved', 'ReadyToVerify'], cert.state)) {
                        return true;
                    }
                    log('signature \'IssueDraftTemplateBasedPermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'IssueDraftTemplateBasedPermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'IssueDraftTemplateBasedPermit\' is enabled', cert);
                return true;
            }
        },
        PermitReadyForVerification: {
            key: 'PermitReadyForVerification',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'PlannedWorkingPeriod', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'PlannedWorkingHours', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'ReasonForWork', values: [] });
                // rule requireWorkOrderNumber not yet implemented
                // Rule <requireWorkLocation/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkLocation(cert, violations);
                }

                // Rule <requireSystemOrEquipment/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSystemOrEquipment(cert, violations);
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(_.includes(['Full'], cert.isolationCertificateRequirement))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: true,
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: true,
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                if (!(_.includes(['Approved'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'PermitReadyForVerification\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state)) {
                        return true;
                    }
                    log('signature \'PermitReadyForVerification\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'PermitReadyForVerification\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'PermitReadyForVerification\' is enabled', cert);
                return true;
            }
        },
        VerifyPermit: {
            key: 'VerifyPermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireNumberOfPersons/>
                validationRules.requireNumberOfPersons(cert, violations);
                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'PlannedWorkingPeriod', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'PlannedWorkingHours', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'ReasonForWork', values: [] });
                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(_.includes(['Full'], cert.isolationCertificateRequirement))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: true,
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: true,
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // rule requireWorkOrderNumber not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'VerifyPermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Approved', 'ReadyToVerify'], cert.state)) {
                        return true;
                    }
                    log('signature \'VerifyPermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'VerifyPermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'VerifyPermit\' is enabled', cert);
                return true;
            }
        },
        VerifyPermitBySiteAuthority: {
            key: 'VerifyPermitBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((_.includes(['Permit'], cert.kind))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'VerifyPermitBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Approved'], cert.state)) {
                        return true;
                    }
                    log('signature \'VerifyPermitBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'VerifyPermitBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'VerifyPermitBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        AuthorisePermit: {
            key: 'AuthorisePermit',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ERRP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ERRP'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_BOLE'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'BOLECertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ATC'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'AbrasiveTaskCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_EXCAVATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'ExcavationCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LIFTING'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LiftingPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESSURISED'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PressurisedHabitat'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_WELLHANDOVER'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'WellHandoverCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_ENERGISEDELECTRICAL'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'EnergisedElectricalWorkCertificate'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_MECHSEALPLUG'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'MechanicalSealPlug'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_PRESTARTUP'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'PreStartup'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_VENTILATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'VentilationPlan'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_HEAVYEQUIPMENT'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'HeavyEquipmentMovement'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_CSBISOLATION'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'CrossSiteBoundaryIsolation'
                    });
                }

                // Rule <requireFileAttachment/>
                if (function() {
                    if (!(_.some(cert.controlMeasures, function(controlMeasure) {
                        return _.includes(['SUPP_LEAKTEST'], controlMeasure.code);
                    }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireFileAttachment(cert, violations, {
                        fileType: 'LeakTest'
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'Isolation',
                    isRequired: false,
                    variants: [],
                    inStates: ['WaitingForAuthorization', 'IsolationInProgress', 'IsolationInPlace', 'RequestedForReisolation', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'],
                    notInStates: []
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'AuthorisePermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Verified', 'Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment'], cert.variant) && _.includes(['Verified', 'Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['HotWorkNakedFlame'], cert.variant) && _.includes(['Verified', 'Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['HotWorkNakedFlame'], cert.variant) && _.includes(['Verified', 'Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['ColdWork', 'HotWorkSparkPotential', 'BreakingContainment'], cert.variant) && _.includes(['Verified', 'Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['HotWorkNakedFlame'], cert.variant) && _.includes(['Verified', 'Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['HotWorkNakedFlame'], cert.variant) && _.includes(['Verified', 'Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['ConfinedSpaceEntry'], cert.variant) && _.includes(['Verified', 'Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    log('signature \'AuthorisePermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AuthorisePermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AuthorisePermit\' is enabled', cert);
                return true;
            }
        },
        IssuePermit: {
            key: 'IssuePermit',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule requireMeasurementsAfterSignature not yet implemented
                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if ((cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: false,
                        variants: [],
                        inStates: ['IsolationInPlace'],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: false,
                        variants: [],
                        inStates: ['IsolationInPlaceForSanctionToTest', 'IsolationInPlace'],
                        notInStates: []
                    });
                }

                // rule assertAttachmentHasNoOtherPermitForSanctionToTestInState not yet implemented
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'SafetyOverrideRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <assertPermitDependenciesAreSatisfied> is explicitly excluded from client side code generation
                // rule requireLastValidityPeriodNotOverdue not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Authorised', 'Issued'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'IssuePermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Authorised', 'Issued'], cert.state)) {
                        return true;
                    }
                    log('signature \'IssuePermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'IssuePermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'IssuePermit\' is enabled', cert);
                return true;
            }
        },
        AcceptPermit: {
            key: 'AcceptPermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if ((cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: false,
                        variants: [],
                        inStates: ['IsolationInPlace', 'IsolationInPlaceForLongTerm'],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: false,
                        variants: [],
                        inStates: ['IsolationInPlaceForSanctionToTest', 'IsolationInPlace', 'IsolationInPlaceForLongTerm'],
                        notInStates: []
                    });
                }

                // rule requireLastValidityPeriodNotOverdue not yet implemented
                // rule assertNotPassedEndOfLifetime not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'AcceptPermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Issued'], cert.state)) {
                        return true;
                    }
                    log('signature \'AcceptPermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AcceptPermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AcceptPermit\' is enabled', cert);
                return true;
            }
        },
        Suspend: {
            key: 'Suspend',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <assertPermitDependenciesAreSatisfied> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'Suspend\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'InReview', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'InReview', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'Suspend\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'Suspend\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'Suspend\' is enabled', cert);
                return true;
            }
        },
        SuspendAllActivePermits: {
            key: 'SuspendAllActivePermits',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'SuspendAllActivePermits\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit') {
                        return true;
                    }
                    log('signature \'SuspendAllActivePermits\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'SuspendAllActivePermits\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'SuspendAllActivePermits\' is enabled', cert);
                return true;
            }
        },
        ReAuthorizePermit: {
            key: 'ReAuthorizePermit',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if ((cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: false,
                        variants: [],
                        inStates: ['IsolationInPlace'],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: false,
                        variants: [],
                        inStates: ['IsolationInPlaceForSanctionToTest', 'IsolationInPlace'],
                        notInStates: []
                    });
                }

                // rule cancelReview not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForEmergency', 'ReAuthorized', 'Active', 'Expired', 'Revalidate', 'InReview', 'ReIssued', 'AwaitingActivation'], cert.state))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ReAuthorizePermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForEmergency', 'ReAuthorized', 'Active', 'Expired', 'Revalidate', 'InReview', 'ReIssued', 'AwaitingActivation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ReAuthorizePermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReAuthorizePermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReAuthorizePermit\' is enabled', cert);
                return true;
            }
        },
        RevalidatePermit: {
            key: 'RevalidatePermit',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: 'Revalidation',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule requireLastValidityPeriodNotOverdue not yet implemented
                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if ((cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: false,
                        variants: [],
                        inStates: ['IsolationInPlace'],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(cert.isForSanctionToTest)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'Isolation',
                        isRequired: false,
                        variants: [],
                        inStates: ['IsolationInPlaceForSanctionToTest', 'IsolationInPlace'],
                        notInStates: []
                    });
                }

                // Rule <preventSigningByPerformingAuthority> is explicitly excluded from client side code generation
                // rule requireMeasurementsAfterSignature not yet implemented
                // Rule <assertPermitDependenciesAreSatisfied> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['SuspendedForEmergency', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'ReAuthorized', 'ReIssued'], cert.state))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RevalidatePermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'ReAuthorized', 'ReIssued'], cert.state)) {
                        return true;
                    }
                    log('signature \'RevalidatePermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RevalidatePermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RevalidatePermit\' is enabled', cert);
                return true;
            }
        },
        ReactivatePermit: {
            key: 'ReactivatePermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Revalidation',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule requireLastValidityPeriodNotOverdue not yet implemented
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RevalidatePermit'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                // rule assertNotPassedEndOfLifetime not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['ReIssued'], cert.state))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ReactivatePermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['ReIssued'], cert.state)) {
                        return true;
                    }
                    log('signature \'ReactivatePermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReactivatePermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReactivatePermit\' is enabled', cert);
                return true;
            }
        },
        CompletePermit: {
            key: 'CompletePermit',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule closeValidPeriods not yet implemented
                // Rule <assertPermitDependenciesAreSatisfied> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((_.includes(['Closing'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompletePermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Active', 'Revalidate', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired', 'InReview'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Permit' && _.includes(['Active', 'Revalidate', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest', 'Expired', 'InReview'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompletePermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompletePermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompletePermit\' is enabled', cert);
                return true;
            }
        },
        RevertCompletedPermit: {
            key: 'RevertCompletedPermit',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule invalidateSignatures not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Closing'], cert.state))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!(cert.isOriginatingFromAny(['Template']))) {
                        return true;
                    }
                    if(!!(_.includes(['Normal'], cert.riskOfWork))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RevertCompletedPermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Closing'], cert.state)) {
                        return true;
                    }
                    log('signature \'RevertCompletedPermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RevertCompletedPermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RevertCompletedPermit\' is enabled', cert);
                return true;
            }
        },
        ClosePermit: {
            key: 'ClosePermit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireSignature/>
                if (function() {
                    if ((_.includes(['ReAuthorized'], cert.state))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompletePermit'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'ClosePermit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['ReAuthorized', 'Closing'], cert.state)) {
                        return true;
                    }
                    log('signature \'ClosePermit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ClosePermit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ClosePermit\' is enabled', cert);
                return true;
            }
        },
        TakeOverPerformingAuthority: {
            key: 'TakeOverPerformingAuthority',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'TakeOverPerformingAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Active', 'Revalidate', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'SuspendedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'TakeOverPerformingAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'TakeOverPerformingAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'TakeOverPerformingAuthority\' is enabled', cert);
                return true;
            }
        },
        TakeOverAreaAuthority: {
            key: 'TakeOverAreaAuthority',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'TakeOverAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'TakeOverAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'TakeOverAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'TakeOverAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        TakeOverSiteAuthority: {
            key: 'TakeOverSiteAuthority',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'TakeOverSiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'TakeOverSiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'TakeOverSiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'TakeOverSiteAuthority\' is enabled', cert);
                return true;
            }
        },
        ApprovePermitTemplateByRiskAssessmentTeam: {
            key: 'ApprovePermitTemplateByRiskAssessmentTeam',
            numberOfSignatures: 'SinglePerUser',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('ApprovingTeamMembers')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['None', 'Personal']);
                }

                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, []);
                }

                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'ToolsToBeUsed', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'EquipmentToBeUsed', values: [] });
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireRiskArea/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1']);
                }

                // Rule <requireRiskArea/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1', '2']);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApprovePermitTemplateByRiskAssessmentTeam\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('ApprovingTeamMembers').length > 0) {
                        return true;
                    }
                    log('signature \'ApprovePermitTemplateByRiskAssessmentTeam\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApprovePermitTemplateByRiskAssessmentTeam\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApprovePermitTemplateByRiskAssessmentTeam\' is enabled', cert);
                return true;
            }
        },
        ApprovePermitTemplateByRiskAssessmentFacilitator: {
            key: 'ApprovePermitTemplateByRiskAssessmentFacilitator',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('RiskAssessmentFacilitator')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['None', 'Personal']);
                }

                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, []);
                }

                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'ToolsToBeUsed', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'EquipmentToBeUsed', values: [] });
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireRiskArea/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1']);
                }

                // Rule <requireRiskArea/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1', '2']);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.riskAssessmentLevel === 'Level2')) {
                    return false;
                }
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApprovePermitTemplateByRiskAssessmentFacilitator\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('RiskAssessmentFacilitator').length > 0) {
                        return true;
                    }
                    log('signature \'ApprovePermitTemplateByRiskAssessmentFacilitator\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApprovePermitTemplateByRiskAssessmentFacilitator\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApprovePermitTemplateByRiskAssessmentFacilitator\' is enabled', cert);
                return true;
            }
        },
        ApproveDraftTemplateByAreaAuthority: {
            key: 'ApproveDraftTemplateByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, '');
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['None', 'Personal']);
                }

                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, []);
                }

                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireRiskAssessmentLevel/>
                if (function() {
                    if (!(/* <anyOf> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['Normal'], cert.riskOfWork))) {
                            return true;
                        }
                        if(!!(_.includes(['2'], cert.riskArea))) {
                            return true;
                        }
                        return false;
                    }())) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApprovePermitTemplateByRiskAssessmentTeam'],
                        requiredSignersProperty: 'Approvingteammembers',
                        proceedWhenNoSignersAvailable: true
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApprovePermitTemplateByRiskAssessmentFacilitator'],
                        requiredSignersProperty: 'Riskassessmentfacilitator',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'ToolsToBeUsed', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'EquipmentToBeUsed', values: [] });
                // Rule <requireRiskAssessmentTeam/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    if (!(_.includes(['2'], cert.riskArea))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentTeam(cert, violations, {
                        minimumNumberOfTeamMembers: 2,
                        ignoreContractedTeamMembers: false
                    });
                }

                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireRiskArea/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1']);
                }

                // Rule <requireRiskArea/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1', '2']);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if (!(_.includes(['1'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveDraftTemplateByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveDraftTemplateByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveDraftTemplateByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveDraftTemplateByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveDraftTemplateBySiteAuthority: {
            key: 'ApproveDraftTemplateBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, '');
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['None', 'Personal']);
                }

                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, []);
                }

                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireRiskAssessmentLevel/>
                if (function() {
                    if (!(/* <anyOf> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['Normal'], cert.riskOfWork))) {
                            return true;
                        }
                        if(!!(_.includes(['2'], cert.riskArea))) {
                            return true;
                        }
                        return false;
                    }())) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApprovePermitTemplateByRiskAssessmentTeam'],
                        requiredSignersProperty: 'Approvingteammembers',
                        proceedWhenNoSignersAvailable: true
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApprovePermitTemplateByRiskAssessmentFacilitator'],
                        requiredSignersProperty: 'Riskassessmentfacilitator',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'ToolsToBeUsed', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'EquipmentToBeUsed', values: [] });
                // Rule <requireRiskAssessmentTeam/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentTeam(cert, violations, {
                        minimumNumberOfTeamMembers: 2,
                        ignoreContractedTeamMembers: false
                    });
                }

                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireRiskArea/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1']);
                }

                // Rule <requireRiskArea/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1', '2']);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if ((_.includes(['1'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveDraftTemplateBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveDraftTemplateBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveDraftTemplateBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveDraftTemplateBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        AuthorizeTemplateBySiteAuthority: {
            key: 'AuthorizeTemplateBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, '');
                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, ['None', 'Personal']);
                }

                // Rule <requireIsolationCertificateRequirement/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIsolationCertificateRequirement(cert, violations, []);
                }

                // Rule <requireDiscipline/>
                validationRules.requireDiscipline(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireRiskArea/>
                if (function() {
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1']);
                }

                // Rule <requireRiskArea/>
                if (function() {
                    if (!(_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskArea(cert, violations, ['1', '2']);
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Requesting'], cert.state))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApproveDraftTemplateByAreaAuthority', 'ApproveDraftTemplateBySiteAuthority'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireRiskAssessmentLevel/>
                if (function() {
                    if (!(/* <anyOf> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['Normal'], cert.riskOfWork))) {
                            return true;
                        }
                        if(!!(_.includes(['2'], cert.riskArea))) {
                            return true;
                        }
                        return false;
                    }())) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                }

                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <violateWithMessage/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['true'], cert.textProperties.RestrictedWorkSpace))) {
                        return false;
                    }
                    if ((_.includes(['Normal'], cert.riskOfWork))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.violateWithMessage(cert, violations, 'RestrictedWorkSpaceProhibited')
                }

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'AuthorizeTemplateBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['Requesting', 'Approved'], cert.state)) {
                        return true;
                    }
                    log('signature \'AuthorizeTemplateBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AuthorizeTemplateBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AuthorizeTemplateBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        RevertPermitTemplateForModification: {
            key: 'RevertPermitTemplateForModification',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule closeValidPeriods not yet implemented
                // rule invalidateSignatures not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'RevertPermitTemplateForModification\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'RevertPermitTemplateForModification\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RevertPermitTemplateForModification\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RevertPermitTemplateForModification\' is enabled', cert);
                return true;
            }
        },
        ClosePermitTemplate: {
            key: 'ClosePermitTemplate',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'ClosePermitTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'ClosePermitTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ClosePermitTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ClosePermitTemplate\' is enabled', cert);
                return true;
            }
        },
        RevalidatePermitTemplateBySiteAuthority: {
            key: 'RevalidatePermitTemplateBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: 'Revalidation',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Requesting'], cert.state))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['ApproveDraftTemplateByAreaAuthority', 'ApproveDraftTemplateBySiteAuthority'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireRiskAssessmentLevel/>
                if (function() {
                    if (!(/* <anyOf> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['Normal'], cert.riskOfWork))) {
                            return true;
                        }
                        if(!!(_.includes(['2'], cert.riskArea))) {
                            return true;
                        }
                        return false;
                    }())) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!!(/* <all> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['Requesting'], cert.state))) {
                            return false;
                        }
                        if(!(cert.signedWith(['RevertPermitTemplateForModification'], []))) {
                            return false;
                        }
                        return true;
                    }())) {
                        return true;
                    }
                    if(!!(/* <all> condition: a single condition below must match */
                    function() {
                        if((_.includes(['Requesting'], cert.state))) {
                            return false;
                        }
                        if(!(cert.signedWith(['AuthorizeTemplateBySiteAuthority'], []))) {
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
                // matches all of above conditions
                log('displaying signature \'RevalidatePermitTemplateBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['Active', 'Revalidate', 'Requesting', 'Approved', 'AwaitingActivation'], cert.state)) {
                        return true;
                    }
                    log('signature \'RevalidatePermitTemplateBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RevalidatePermitTemplateBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RevalidatePermitTemplateBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        CompleteIsolationCertificateDesign: {
            key: 'CompleteIsolationCertificateDesign',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if ((_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompleteIsolationCertificateDesign\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {

                    log('signature \'CompleteIsolationCertificateDesign\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteIsolationCertificateDesign\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteIsolationCertificateDesign\' is enabled', cert);
                return true;
            }
        },
        CompleteElectricalLowVoltageIsolationDesign: {
            key: 'CompleteElectricalLowVoltageIsolationDesign',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkLocation(cert, violations);
                }

                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireContingencyPlan/>
                validationRules.requireContingencyPlan(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RequiresAbnormalOperatingCondition', values: [] });
                // Rule <requireIPnIdAttachment/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIpnidFileAttachment(cert, violations)
                }

                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, undefined)
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltage');
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['Isolation'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['IsolationTemplate'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['Yes'], cert.textProperties.RequiresAbnormalOperatingCondition))) {
                        return false;
                    }
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'OperationalRiskAssessment',
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                    return false;
                }
                if (!(_.includes(['Requesting', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompleteElectricalLowVoltageIsolationDesign\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteElectricalLowVoltageIsolationDesign\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteElectricalLowVoltageIsolationDesign\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteElectricalLowVoltageIsolationDesign\' is enabled', cert);
                return true;
            }
        },
        CompleteElectricalLowVoltageLevel1IsolationDesign: {
            key: 'CompleteElectricalLowVoltageLevel1IsolationDesign',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkLocation(cert, violations);
                }

                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireContingencyPlan/>
                validationRules.requireContingencyPlan(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RequiresAbnormalOperatingCondition', values: [] });
                // Rule <requireIPnIdAttachment/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIpnidFileAttachment(cert, violations)
                }

                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, undefined)
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltageLevel1');
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['Isolation'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['IsolationTemplate'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['Yes'], cert.textProperties.RequiresAbnormalOperatingCondition))) {
                        return false;
                    }
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'OperationalRiskAssessment',
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                    return false;
                }
                if (!(_.includes(['Requesting', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompleteElectricalLowVoltageLevel1IsolationDesign\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteElectricalLowVoltageLevel1IsolationDesign\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteElectricalLowVoltageLevel1IsolationDesign\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteElectricalLowVoltageLevel1IsolationDesign\' is enabled', cert);
                return true;
            }
        },
        CompleteElectricalHighVoltageIsolationDesign: {
            key: 'CompleteElectricalHighVoltageIsolationDesign',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkLocation(cert, violations);
                }

                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireContingencyPlan/>
                validationRules.requireContingencyPlan(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RequiresAbnormalOperatingCondition', values: [] });
                // Rule <requireIPnIdAttachment/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIpnidFileAttachment(cert, violations)
                }

                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, undefined)
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalHighVoltage');
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['Isolation'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['IsolationTemplate'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['Yes'], cert.textProperties.RequiresAbnormalOperatingCondition))) {
                        return false;
                    }
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'OperationalRiskAssessment',
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                    return false;
                }
                if (!(_.includes(['Requesting', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompleteElectricalHighVoltageIsolationDesign\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteElectricalHighVoltageIsolationDesign\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteElectricalHighVoltageIsolationDesign\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteElectricalHighVoltageIsolationDesign\' is enabled', cert);
                return true;
            }
        },
        CompleteProcessIsolationDesign: {
            key: 'CompleteProcessIsolationDesign',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkLocation(cert, violations);
                }

                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireContingencyPlan/>
                validationRules.requireContingencyPlan(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RequiresAbnormalOperatingCondition', values: [] });
                // Rule <requireIPnIdAttachment/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIpnidFileAttachment(cert, violations)
                }

                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, undefined)
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Process');
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['Isolation'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['IsolationTemplate'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['Yes'], cert.textProperties.RequiresAbnormalOperatingCondition))) {
                        return false;
                    }
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'OperationalRiskAssessment',
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                    return false;
                }
                if (!(_.includes(['Requesting', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompleteProcessIsolationDesign\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteProcessIsolationDesign\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteProcessIsolationDesign\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteProcessIsolationDesign\' is enabled', cert);
                return true;
            }
        },
        CompleteControlIsolationDesign: {
            key: 'CompleteControlIsolationDesign',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkLocation(cert, violations);
                }

                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireContingencyPlan/>
                validationRules.requireContingencyPlan(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RequiresAbnormalOperatingCondition', values: [] });
                // Rule <requireIPnIdAttachment/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireIpnidFileAttachment(cert, violations)
                }

                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, undefined)
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Control');
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['Isolation'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                if (function() {
                    if (!(_.includes(['IsolationTemplate'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['Control']);
                }

                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['Yes'], cert.textProperties.RequiresAbnormalOperatingCondition))) {
                        return false;
                    }
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'OperationalRiskAssessment',
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                    return false;
                }
                if (!(_.includes(['Requesting', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompleteControlIsolationDesign\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Requesting', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteControlIsolationDesign\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteControlIsolationDesign\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteControlIsolationDesign\' is enabled', cert);
                return true;
            }
        },
        RequestIsolationCertificate: {
            key: 'RequestIsolationCertificate',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireContingencyPlan/>
                validationRules.requireContingencyPlan(cert, violations);
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RequiresAbnormalOperatingCondition', values: [] });
                // Rule <requireIPnIdAttachment/>
                validationRules.requireIpnidFileAttachment(cert, violations)
                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, undefined)
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageLevel1IsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalHighVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteProcessIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteControlIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltageLevel1');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltage');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalHighVoltage');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Control');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Process');
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['ElectricalLowVoltage', 'ElectricalHighVoltage', 'Control', 'Process']);
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'TaskRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // rule isolateLolcValve not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['Yes'], cert.textProperties.RequiresAbnormalOperatingCondition))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'OperationalRiskAssessment',
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['DesignComplete', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestIsolationCertificate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DesignComplete', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'RequestIsolationCertificate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestIsolationCertificate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestIsolationCertificate\' is enabled', cert);
                return true;
            }
        },
        RequestIsolations: {
            key: 'RequestIsolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireContingencyPlan/>
                validationRules.requireContingencyPlan(cert, violations);
                // Rule <requireIPnIdAttachment/>
                validationRules.requireIpnidFileAttachment(cert, violations)
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (!(cert.textProperties && _.includes(['Yes'], cert.textProperties.RequiresAbnormalOperatingCondition))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'OperationalRiskAssessment',
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageLevel1IsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalHighVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteProcessIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteControlIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(/* <anyOf> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['WaitingForAuthorization'], cert.state))) {
                            return true;
                        }
                        if(!(cert.isOriginatingFromAny(['Template']))) {
                            return true;
                        }
                        return false;
                    }())) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['RequestIsolationCertificate'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(_.includes(['Isolation'], cert.kind))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'SafetyOverrideRiskAssessment',
                        isRequired: false,
                        variants: [],
                        inStates: ['Active'],
                        notInStates: []
                    });
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedIsolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['WaitingForAuthorization', 'IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestIsolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['WaitingForAuthorization', 'IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'LolcMovement') {
                        return true;
                    }
                    log('signature \'RequestIsolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestIsolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestIsolations\' is enabled', cert);
                return true;
            }
        },
        CancelIsolationRequest: {
            key: 'CancelIsolationRequest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CancelIsolationRequest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CancelIsolationRequest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CancelIsolationRequest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CancelIsolationRequest\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalLowVoltageLevel1Isolations: {
            key: 'ConfirmElectricalLowVoltageLevel1Isolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalLowVoltageLevel1Isolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalLowVoltageLevel1Isolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalLowVoltageLevel1Isolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalLowVoltageLevel1Isolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalLowVoltageIsolations: {
            key: 'ConfirmElectricalLowVoltageIsolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalLowVoltageIsolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalLowVoltageIsolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalLowVoltageIsolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalLowVoltageIsolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalHighVoltageIsolations: {
            key: 'ConfirmElectricalHighVoltageIsolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalHighVoltageIsolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalHighVoltageIsolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalHighVoltageIsolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalHighVoltageIsolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmControlIsolations: {
            key: 'ConfirmControlIsolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['Control']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmControlIsolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmControlIsolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmControlIsolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmControlIsolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmProcessIsolations: {
            key: 'ConfirmProcessIsolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['Process']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmProcessIsolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmProcessIsolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmProcessIsolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmProcessIsolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmIsolationActionPerformed: {
            key: 'ConfirmIsolationActionPerformed',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmIsolationActionPerformed\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmIsolationActionPerformed\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmIsolationActionPerformed\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmIsolationActionPerformed\' is enabled', cert);
                return true;
            }
        },
        ConfirmIsolationRiskConsidered: {
            key: 'ConfirmIsolationRiskConsidered',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmIsolationRiskConsidered\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmIsolationRiskConsidered\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmIsolationRiskConsidered\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmIsolationRiskConsidered\' is enabled', cert);
                return true;
            }
        },
        CrossCheckIsolations: {
            key: 'CrossCheckIsolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['IsolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                if (!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedIsolations)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CrossCheckIsolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CrossCheckIsolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CrossCheckIsolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CrossCheckIsolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmAllIsolationsInPlace: {
            key: 'ConfirmAllIsolationsInPlace',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule requireIsolationsSignedByAtLeast not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'OperationalRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.instructionPlanInfo && cert.instructionPlanInfo.allIsolationInstructionsPerformed)) {
                    return false;
                }
                if (!(_.includes(['IsolationInProgress'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmAllIsolationsInPlace\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmAllIsolationsInPlace\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmAllIsolationsInPlace\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmAllIsolationsInPlace\' is enabled', cert);
                return true;
            }
        },
        AmendIsolationPlan: {
            key: 'AmendIsolationPlan',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <restrictParentState/>
                validationRules.restrictParentState(cert, violations, {
                    kind: 'Permit',
                    prohibitedStates: ['Issued', 'AwaitingActivation', 'Active', 'Expired', 'Revalidate', 'ReIssued']
                });
                // rule allowEditingIsolationsInState not yet implemented
                // rule clearIsolationSchemeAssessments not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['IsolationInProgress', 'IsolationInPlace', 'DeisolationInProgress'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'AmendIsolationPlan\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'DeisolationInProgress'], cert.state)) {
                        return true;
                    }
                    log('signature \'AmendIsolationPlan\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AmendIsolationPlan\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AmendIsolationPlan\' is enabled', cert);
                return true;
            }
        },
        CompleteAmendments: {
            key: 'CompleteAmendments',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RequestIsolationCertificate'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'OperationalRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <violateWithMessage/>
                if (function() {
                    if (!(/* <anyOf> condition: a single condition below must match */
                    function() {
                        if(!!(/* <all> condition: a single condition below must match */
                        function() {
                            if(!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, []))) {
                                return false;
                            }
                            if(!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, []))) {
                                return false;
                            }
                            return true;
                        }())) {
                            return true;
                        }
                        if(!!(/* <all> condition: a single condition below must match */
                        function() {
                            if(!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, []))) {
                                return false;
                            }
                            if(!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedDeisolations)) {
                                return false;
                            }
                            return true;
                        }())) {
                            return true;
                        }
                        if(!!(/* <all> condition: a single condition below must match */
                        function() {
                            if(!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedIsolations)) {
                                return false;
                            }
                            if(!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, []))) {
                                return false;
                            }
                            return true;
                        }())) {
                            return true;
                        }
                        if(!!(/* <all> condition: a single condition below must match */
                        function() {
                            if(!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedIsolations)) {
                                return false;
                            }
                            if(!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedDeisolations)) {
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
                }()) {
                    validationRules.violateWithMessage(cert, violations, 'NoDeisolationAndIsolationShouldBePending')
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageLevel1IsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalHighVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteProcessIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteControlIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RequestIsolationCertificate'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltageLevel1');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltage');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalHighVoltage');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Control');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Process');
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompleteAmendments\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteAmendments\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteAmendments\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteAmendments\' is enabled', cert);
                return true;
            }
        },
        RequestDeisolations: {
            key: 'RequestDeisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageLevel1IsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalHighVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteProcessIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteControlIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(/* <anyOf> condition: a single condition below must match */
                    function() {
                        if(!!(_.includes(['Modification'], cert.state))) {
                            return true;
                        }
                        if(!(cert.isOriginatingFromAny(['Template']))) {
                            return true;
                        }
                        return false;
                    }())) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['RequestIsolationCertificate'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <restrictParentState/>
                if (function() {
                    if ((_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictParentState(cert, violations, {
                        kind: 'Permit',
                        prohibitedStates: ['Issued', 'AwaitingActivation', 'Active', 'Expired', 'Revalidate', 'SuspendedForSanctionToTest', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'ReAuthorized', 'ReIssued']
                    });
                }

                // Rule <restrictParentState/>
                if (function() {
                    if (!(_.includes(['Modification'], cert.state))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictParentState(cert, violations, {
                        kind: 'Permit',
                        prohibitedStates: ['Issued', 'AwaitingActivation', 'Active', 'Expired', 'Revalidate', 'ReIssued']
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedDeisolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestDeisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'RequestDeisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestDeisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestDeisolations\' is enabled', cert);
                return true;
            }
        },
        CancelDeisolationRequest: {
            key: 'CancelDeisolationRequest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CancelDeisolationRequest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CancelDeisolationRequest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CancelDeisolationRequest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CancelDeisolationRequest\' is enabled', cert);
                return true;
            }
        },
        UnableToIsolate: {
            key: 'UnableToIsolate',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'UnableToIsolate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInProgress', 'IsolationInPlaceForSanctionToTest', 'Modification', 'IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'Deisolated', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'UnableToIsolate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'UnableToIsolate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'UnableToIsolate\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalLowVoltageLevel1Deisolations: {
            key: 'ConfirmElectricalLowVoltageLevel1Deisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                    return false;
                }
                if (!(_.includes(['DeisolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalLowVoltageLevel1Deisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalLowVoltageLevel1Deisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalLowVoltageLevel1Deisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalLowVoltageLevel1Deisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalLowVoltageDeisolations: {
            key: 'ConfirmElectricalLowVoltageDeisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                    return false;
                }
                if (!(_.includes(['DeisolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalLowVoltageDeisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalLowVoltageDeisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalLowVoltageDeisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalLowVoltageDeisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalHighVoltageDeisolations: {
            key: 'ConfirmElectricalHighVoltageDeisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                    return false;
                }
                if (!(_.includes(['DeisolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalHighVoltageDeisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalHighVoltageDeisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalHighVoltageDeisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalHighVoltageDeisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmControlDeisolations: {
            key: 'ConfirmControlDeisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['Control']))) {
                    return false;
                }
                if (!(_.includes(['DeisolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmControlDeisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmControlDeisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmControlDeisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmControlDeisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmProcessDeisolations: {
            key: 'ConfirmProcessDeisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['Process']))) {
                    return false;
                }
                if (!(_.includes(['DeisolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmProcessDeisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmProcessDeisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmProcessDeisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmProcessDeisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmDeisolationActionPerformed: {
            key: 'ConfirmDeisolationActionPerformed',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['DeisolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmDeisolationActionPerformed\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmDeisolationActionPerformed\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmDeisolationActionPerformed\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmDeisolationActionPerformed\' is enabled', cert);
                return true;
            }
        },
        ConfirmDeisolationRiskConsidered: {
            key: 'ConfirmDeisolationRiskConsidered',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['DeisolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmDeisolationRiskConsidered\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmDeisolationRiskConsidered\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmDeisolationRiskConsidered\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmDeisolationRiskConsidered\' is enabled', cert);
                return true;
            }
        },
        CrossCheckDeisolations: {
            key: 'CrossCheckDeisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['DeisolationInProgress', 'Modification'], cert.state))) {
                    return false;
                }
                if (!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedDeisolations)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CrossCheckDeisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['DeisolationInProgress', 'Modification'], cert.state)) {
                        return true;
                    }
                    log('signature \'CrossCheckDeisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CrossCheckDeisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CrossCheckDeisolations\' is enabled', cert);
                return true;
            }
        },
        CloseIsolationCertificate: {
            key: 'CloseIsolationCertificate',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <signAttachedCertificate> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Deisolated'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseIsolationCertificate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['Deisolated'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseIsolationCertificate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseIsolationCertificate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseIsolationCertificate\' is enabled', cert);
                return true;
            }
        },
        CloseIsolationCertificateCompletelyDeisolatedForTest: {
            key: 'CloseIsolationCertificateCompletelyDeisolatedForTest',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <restrictParentState/>
                validationRules.restrictParentState(cert, violations, {
                    kind: 'Permit',
                    prohibitedStates: []
                });
                // Rule <signAttachedCertificate> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['IsolationInPlaceForSanctionToTest'], cert.state))) {
                    return false;
                }
                if (!(cert.hasParents(['Permit'], ['Closing', 'Closed']))) {
                    return false;
                }
                if ((cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedDeisolations)) {
                    return false;
                }
                if (!(cert.instructionPlanInfo && cert.instructionPlanInfo.allDeisolationInstructionsPerformed)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseIsolationCertificateCompletelyDeisolatedForTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseIsolationCertificateCompletelyDeisolatedForTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseIsolationCertificateCompletelyDeisolatedForTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseIsolationCertificateCompletelyDeisolatedForTest\' is enabled', cert);
                return true;
            }
        },
        MoveToLongTerm: {
            key: 'MoveToLongTerm',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                // rule scheduleAuditLtiExpiration not yet implemented
                // rule scheduleAuditLtiExpiration not yet implemented
                // rule scheduleReviewLtiExpiration not yet implemented
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['IsolationInPlace'], cert.state))) {
                    return false;
                }
                if ((cert.hasParents(['Permit'], []))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'MoveToLongTerm\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace'], cert.state)) {
                        return true;
                    }
                    log('signature \'MoveToLongTerm\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'MoveToLongTerm\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'MoveToLongTerm\' is enabled', cert);
                return true;
            }
        },
        RequestDeisolationsForSanctionToTest: {
            key: 'RequestDeisolationsForSanctionToTest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule requirePermitForSanctionToTest not yet implemented
                // Rule <restrictParentState/>
                validationRules.restrictParentState(cert, violations, {
                    kind: 'Permit',
                    prohibitedStates: []
                });
                // Rule <restrictParentState/>
                validationRules.restrictParentState(cert, violations, {
                    kind: 'Permit',
                    prohibitedStates: []
                });
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.hasParents(['Permit'], []))) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlace', 'RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedDeisolations(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return true;
                    }
                    if(!!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedDeisolations(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return true;
                    }
                    if(!!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedDeisolations(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return true;
                    }
                    if(!!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedDeisolations(cert.instructionPlanInfo, ['Control']))) {
                        return true;
                    }
                    if(!!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedDeisolations(cert.instructionPlanInfo, ['Process']))) {
                        return true;
                    }
                    return false;
                }())) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestDeisolationsForSanctionToTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace', 'RequestedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'RequestDeisolationsForSanctionToTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestDeisolationsForSanctionToTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestDeisolationsForSanctionToTest\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest: {
            key: 'ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['RequestedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalLowVoltageDeisolationsForSanctionToTest: {
            key: 'ConfirmElectricalLowVoltageDeisolationsForSanctionToTest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalLowVoltageDeisolationsForSanctionToTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['RequestedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalLowVoltageDeisolationsForSanctionToTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalLowVoltageDeisolationsForSanctionToTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalLowVoltageDeisolationsForSanctionToTest\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalHighVoltageDeisolationsForSanctionToTest: {
            key: 'ConfirmElectricalHighVoltageDeisolationsForSanctionToTest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalHighVoltageDeisolationsForSanctionToTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['RequestedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalHighVoltageDeisolationsForSanctionToTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalHighVoltageDeisolationsForSanctionToTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalHighVoltageDeisolationsForSanctionToTest\' is enabled', cert);
                return true;
            }
        },
        ConfirmControlDeisolationsForSanctionToTest: {
            key: 'ConfirmControlDeisolationsForSanctionToTest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['Control']))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmControlDeisolationsForSanctionToTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['RequestedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmControlDeisolationsForSanctionToTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmControlDeisolationsForSanctionToTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmControlDeisolationsForSanctionToTest\' is enabled', cert);
                return true;
            }
        },
        ConfirmProcessDeisolationsForSanctionToTest: {
            key: 'ConfirmProcessDeisolationsForSanctionToTest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if (!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, ['Process']))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmProcessDeisolationsForSanctionToTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['RequestedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmProcessDeisolationsForSanctionToTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmProcessDeisolationsForSanctionToTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmProcessDeisolationsForSanctionToTest\' is enabled', cert);
                return true;
            }
        },
        CrossCheckDeisolationsForSanctionToTest: {
            key: 'CrossCheckDeisolationsForSanctionToTest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if (!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedDeisolations)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CrossCheckDeisolationsForSanctionToTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['RequestedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'CrossCheckDeisolationsForSanctionToTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CrossCheckDeisolationsForSanctionToTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CrossCheckDeisolationsForSanctionToTest\' is enabled', cert);
                return true;
            }
        },
        VerifyDeisolationForSanctionToTest: {
            key: 'VerifyDeisolationForSanctionToTest',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule requireIsolationsSignedByAtLeast not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['RequestedForSanctionToTest'], cert.state))) {
                    return false;
                }
                if ((cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedDeisolations)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'VerifyDeisolationForSanctionToTest\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['RequestedForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    log('signature \'VerifyDeisolationForSanctionToTest\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'VerifyDeisolationForSanctionToTest\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'VerifyDeisolationForSanctionToTest\' is enabled', cert);
                return true;
            }
        },
        RequestReisolations: {
            key: 'RequestReisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <violateWithMessage/>
                if (function() {
                    if (!(/* <anyOf> condition: a single condition below must match */
                    function() {
                        if(!!(certificateMethods.hasRequestedDeisolations(cert.instructionPlanInfo, []))) {
                            return true;
                        }
                        if(!!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedDeisolations)) {
                            return true;
                        }
                        return false;
                    }())) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.violateWithMessage(cert, violations, 'NoDeisolationConformanceOrVerificationShouldBePending')
                }

                // Rule <restrictParentState/>
                validationRules.restrictParentState(cert, violations, {
                    kind: 'Permit',
                    prohibitedStates: ['Issued', 'AwaitingActivation', 'Active', 'Revalidate', 'Expired', 'InReview']
                });
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.instructionPlanInfo && certificateMethods.hasUnrequestedIsolations(cert.instructionPlanInfo, []))) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'Deisolated', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestReisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'Deisolated', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'RequestReisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestReisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestReisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalLowVoltageLevel1Reisolations: {
            key: 'ConfirmElectricalLowVoltageLevel1Reisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalLowVoltageLevel1Reisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalLowVoltageLevel1Reisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalLowVoltageLevel1Reisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalLowVoltageLevel1Reisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalLowVoltageReisolations: {
            key: 'ConfirmElectricalLowVoltageReisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalLowVoltageReisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalLowVoltageReisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalLowVoltageReisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalLowVoltageReisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmElectricalHighVoltageReisolations: {
            key: 'ConfirmElectricalHighVoltageReisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmElectricalHighVoltageReisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmElectricalHighVoltageReisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmElectricalHighVoltageReisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmElectricalHighVoltageReisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmControlReisolations: {
            key: 'ConfirmControlReisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <restrictWorkItemAttachment/>
                if (function() {
                    if (!(_.some(cert.attachments, function(att) { return att.kind === 'OperationalRiskAssessment' && (function(cert) {

                        return true;
                    })(att) }))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictWorkItemAttachment(cert, violations, {
                        kind: 'OperationalRiskAssessment',
                        isRequired: false,
                        variants: [],
                        inStates: [],
                        notInStates: []
                    });
                }

                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['Control']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmControlReisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmControlReisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmControlReisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmControlReisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmProcessReisolations: {
            key: 'ConfirmProcessReisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(certificateMethods.hasRequestedIsolations(cert.instructionPlanInfo, ['Process']))) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmProcessReisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmProcessReisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmProcessReisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmProcessReisolations\' is enabled', cert);
                return true;
            }
        },
        CrossCheckReisolations: {
            key: 'CrossCheckReisolations',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule assertUserHasNotSignedInstructionWithSignature not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                // rule requireSignerRoleIfConfirmedWithRole not yet implemented
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                if (!(cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedIsolations)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CrossCheckReisolations\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'CrossCheckReisolations\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CrossCheckReisolations\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CrossCheckReisolations\' is enabled', cert);
                return true;
            }
        },
        ConfirmAllReisolationsInPlace: {
            key: 'ConfirmAllReisolationsInPlace',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule requireIsolationsSignedByAtLeast not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'OperationalRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.instructionPlanInfo && cert.instructionPlanInfo.allIsolationInstructionsPerformed)) {
                    return false;
                }
                if (!(_.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state))) {
                    return false;
                }
                if ((cert.instructionPlanInfo && cert.instructionPlanInfo.hasUnverifiedIsolations)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ConfirmAllReisolationsInPlace\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForSanctionToTest', 'DeisolationInProgress', 'RequestedForReisolation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmAllReisolationsInPlace\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmAllReisolationsInPlace\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmAllReisolationsInPlace\' is enabled', cert);
                return true;
            }
        },
        RequestIsolationTemplate: {
            key: 'RequestIsolationTemplate',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireContingencyPlan/>
                validationRules.requireContingencyPlan(cert, violations);
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RequiresAbnormalOperatingCondition', values: [] });
                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, undefined)
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltageLevel1');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltage');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalHighVoltage');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Control');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Process');
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageLevel1IsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalHighVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteProcessIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteControlIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['ElectricalLowVoltageLevel1', 'ElectricalLowVoltage', 'ElectricalHighVoltage', 'Control', 'Process']);
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'TaskRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <markAsCopyable> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['DesignComplete'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestIsolationTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['DesignComplete'], cert.state)) {
                        return true;
                    }
                    log('signature \'RequestIsolationTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestIsolationTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestIsolationTemplate\' is enabled', cert);
                return true;
            }
        },
        RequestModifiedIsolationTemplate: {
            key: 'RequestModifiedIsolationTemplate',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RequiresAbnormalOperatingCondition', values: [] });
                // Rule <requireIsolation/>
                validationRules.requireIsolation(cert, violations, undefined)
                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltageLevel1');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalLowVoltage');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'ElectricalHighVoltage');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Control');
                }

                // Rule <requireSchemeAssessment/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSchemeAssessment(cert, violations, 'Process');
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltageLevel1']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageLevel1IsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalLowVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalLowVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['ElectricalHighVoltage']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteElectricalHighVoltageIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Process']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteProcessIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(certificateMethods.hasIsolationTypes(cert.instructionPlanInfo, ['Control']))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['CompleteControlIsolationDesign'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <requireLevel2RiskAssessmentForNonStandardSchemes/>
                validationRules.requireLevel2RiskAssessmentForNonStandardSchemes(cert, violations, ['ElectricalLowVoltageLevel1', 'ElectricalLowVoltage', 'ElectricalHighVoltage', 'Control', 'Process']);
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'TaskRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Modification', 'DesignComplete'], cert.state))) {
                    return false;
                }
                if (!(cert.signedWith(['RevertIsolationTemplateForModification'], []))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RequestModifiedIsolationTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Modification', 'DesignComplete'], cert.state)) {
                        return true;
                    }
                    log('signature \'RequestModifiedIsolationTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestModifiedIsolationTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestModifiedIsolationTemplate\' is enabled', cert);
                return true;
            }
        },
        ApproveIsolationTemplate: {
            key: 'ApproveIsolationTemplate',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'TaskRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['AwaitingAuthorisation'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveIsolationTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['AwaitingAuthorisation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveIsolationTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveIsolationTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveIsolationTemplate\' is enabled', cert);
                return true;
            }
        },
        ReApproveIsolationTemplate: {
            key: 'ReApproveIsolationTemplate',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Revalidation',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['AwaitingReauthorisation'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ReApproveIsolationTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['AwaitingReauthorisation'], cert.state)) {
                        return true;
                    }
                    log('signature \'ReApproveIsolationTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReApproveIsolationTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReApproveIsolationTemplate\' is enabled', cert);
                return true;
            }
        },
        RevertIsolationTemplateForModification: {
            key: 'RevertIsolationTemplateForModification',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule allowEditingIsolationsInState not yet implemented
                // rule clearIsolationSchemeAssessments not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Active'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RevertIsolationTemplateForModification\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'RevertIsolationTemplateForModification\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RevertIsolationTemplateForModification\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RevertIsolationTemplateForModification\' is enabled', cert);
                return true;
            }
        },
        RevalidateIsolationTemplateBySiteAuthority: {
            key: 'RevalidateIsolationTemplateBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: 'Revalidation',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Active', 'Revalidate'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RevalidateIsolationTemplateBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'RevalidateIsolationTemplateBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RevalidateIsolationTemplateBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RevalidateIsolationTemplateBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        CloseIsolationTemplate: {
            key: 'CloseIsolationTemplate',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <signAttachedCertificate> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseIsolationTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseIsolationTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseIsolationTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseIsolationTemplate\' is enabled', cert);
                return true;
            }
        },
        CloseTaskRiskAssessmentTemplate: {
            key: 'CloseTaskRiskAssessmentTemplate',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Active'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseTaskRiskAssessmentTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Active'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseTaskRiskAssessmentTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseTaskRiskAssessmentTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseTaskRiskAssessmentTemplate\' is enabled', cert);
                return true;
            }
        },
        AuditLti: {
            key: 'AuditLti',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule scheduleAuditLtiExpiration not yet implemented
                // rule scheduleAuditLtiExpiration not yet implemented
                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (cert.isPositiveIsolation === null || cert.isPositiveIsolation === true) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'TaskRiskAssessment',
                        variants: [],
                        inStates: ['Active'],
                        notInStates: []
                    });
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['IsolationInPlaceForLongTerm'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'AuditLti\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForLongTerm'], cert.state)) {
                        return true;
                    }
                    log('signature \'AuditLti\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AuditLti\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AuditLti\' is enabled', cert);
                return true;
            }
        },
        ReviewLti: {
            key: 'ReviewLti',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule scheduleReviewLtiExpiration not yet implemented
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['IsolationInPlaceForLongTerm'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ReviewLti\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForLongTerm'], cert.state)) {
                        return true;
                    }
                    log('signature \'ReviewLti\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReviewLti\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReviewLti\' is enabled', cert);
                return true;
            }
        },
        PbuMeasurement: {
            key: 'PbuMeasurement',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'PbuMeasurement\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation') {
                        return true;
                    }
                    log('signature \'PbuMeasurement\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'PbuMeasurement\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'PbuMeasurement\' is enabled', cert);
                return true;
            }
        },
        ReviewPermitTemplate: {
            key: 'ReviewPermitTemplate',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <scheduleNextReview> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'ReviewPermitTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === '') {
                        return true;
                    }
                    log('signature \'ReviewPermitTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReviewPermitTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReviewPermitTemplate\' is enabled', cert);
                return true;
            }
        },
        ReviewRiskAssessment: {
            key: 'ReviewRiskAssessment',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <scheduleNextReview> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'ReviewRiskAssessment\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === '') {
                        return true;
                    }
                    log('signature \'ReviewRiskAssessment\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReviewRiskAssessment\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReviewRiskAssessment\' is enabled', cert);
                return true;
            }
        },
        MoveFromLongTerm: {
            key: 'MoveFromLongTerm',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule cancelAuditLtiExpiration not yet implemented
                // rule cancelReviewLtiExpiration not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                // rule clearPositiveIsolationMark not yet implemented
                // Rule <requirePlannedWorkingPeriod/>
                if (function() {
                    if ((cert.isTemplate)) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requirePlannedWorkingPeriod(cert, violations);
                }

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['IsolationInPlaceForLongTerm'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'MoveFromLongTerm\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlaceForLongTerm'], cert.state)) {
                        return true;
                    }
                    log('signature \'MoveFromLongTerm\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'MoveFromLongTerm\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'MoveFromLongTerm\' is enabled', cert);
                return true;
            }
        },
        RequestOperationalRiskAssessmentByTeamMember: {
            key: 'RequestOperationalRiskAssessmentByTeamMember',
            numberOfSignatures: 'SinglePerUser',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('ApprovingTeamMembers')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireInitialRisk/>
                validationRules.requireInitialRisk(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'AbnormalCondition', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'NormalCondition', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'ReasonForNotShuttingDown', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'History', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'Recommendation', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'InitialRiskExplanation', values: [] });
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'RequestOperationalRiskAssessmentByTeamMember\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('ApprovingTeamMembers').length > 0) {
                        return true;
                    }
                    log('signature \'RequestOperationalRiskAssessmentByTeamMember\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestOperationalRiskAssessmentByTeamMember\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestOperationalRiskAssessmentByTeamMember\' is enabled', cert);
                return true;
            }
        },
        RequestOperationalRiskAssessmentByFacilitator: {
            key: 'RequestOperationalRiskAssessmentByFacilitator',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('RiskAssessmentFacilitator')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireInitialRisk/>
                validationRules.requireInitialRisk(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'AbnormalCondition', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'NormalCondition', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'ReasonForNotShuttingDown', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'History', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'Recommendation', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'InitialRiskExplanation', values: [] });
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'RequestOperationalRiskAssessmentByFacilitator\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('RiskAssessmentFacilitator').length > 0) {
                        return true;
                    }
                    log('signature \'RequestOperationalRiskAssessmentByFacilitator\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RequestOperationalRiskAssessmentByFacilitator\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RequestOperationalRiskAssessmentByFacilitator\' is enabled', cert);
                return true;
            }
        },
        ApproveOperationalRiskAssessmentByAreaAuthority: {
            key: 'ApproveOperationalRiskAssessmentByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RequestOperationalRiskAssessmentByTeamMember'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RequestOperationalRiskAssessmentByFacilitator'],
                    requiredSignersProperty: 'Riskassessmentfacilitator',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['1'], cert.riskArea))) {
                    return false;
                }
                if (!(_.includes(['OperationalRiskAssessment'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveOperationalRiskAssessmentByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['OperationalRiskAssessment'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveOperationalRiskAssessmentByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveOperationalRiskAssessmentByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveOperationalRiskAssessmentByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveOperationalRiskAssessmentBySiteAuthority: {
            key: 'ApproveOperationalRiskAssessmentBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RequestOperationalRiskAssessmentByTeamMember'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RequestOperationalRiskAssessmentByFacilitator'],
                    requiredSignersProperty: 'Riskassessmentfacilitator',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['2'], cert.riskArea))) {
                    return false;
                }
                if (!(_.includes(['OperationalRiskAssessment'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveOperationalRiskAssessmentBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['OperationalRiskAssessment'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveOperationalRiskAssessmentBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveOperationalRiskAssessmentBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveOperationalRiskAssessmentBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveOperationalRiskAssessmentByFunctionalAuthority: {
            key: 'ApproveOperationalRiskAssessmentByFunctionalAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RequestOperationalRiskAssessmentByTeamMember'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['RequestOperationalRiskAssessmentByFacilitator'],
                    requiredSignersProperty: 'Riskassessmentfacilitator',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['3', '4', '5'], cert.riskArea))) {
                    return false;
                }
                if (!(_.includes(['OperationalRiskAssessment'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveOperationalRiskAssessmentByFunctionalAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['OperationalRiskAssessment'], cert.variant) && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveOperationalRiskAssessmentByFunctionalAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveOperationalRiskAssessmentByFunctionalAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveOperationalRiskAssessmentByFunctionalAuthority\' is enabled', cert);
                return true;
            }
        },
        AuthoriseOperationalRiskAssessment: {
            key: 'AuthoriseOperationalRiskAssessment',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <scheduleNextReview> is explicitly excluded from client side code generation
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'SafetyOverrideRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['OperationalRiskAssessment'], cert.variant))) {
                    return false;
                }
                if (!(_.includes(['Approved'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'AuthoriseOperationalRiskAssessment\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['OperationalRiskAssessment'], cert.variant) && _.includes(['Approved'], cert.state)) {
                        return true;
                    }
                    log('signature \'AuthoriseOperationalRiskAssessment\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AuthoriseOperationalRiskAssessment\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AuthoriseOperationalRiskAssessment\' is enabled', cert);
                return true;
            }
        },
        ReviewOperationalRiskAssessment: {
            key: 'ReviewOperationalRiskAssessment',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <scheduleNextReview> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Active', 'InReview', 'Revalidate'], cert.state))) {
                    return false;
                }
                if (!(_.includes(['OperationalRiskAssessment'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ReviewOperationalRiskAssessment\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['OperationalRiskAssessment'], cert.variant) && _.includes(['Active', 'InReview', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'ReviewOperationalRiskAssessment\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReviewOperationalRiskAssessment\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReviewOperationalRiskAssessment\' is enabled', cert);
                return true;
            }
        },
        ReAuthoriseOperationalRiskAssessment: {
            key: 'ReAuthoriseOperationalRiskAssessment',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: 'Revalidation',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <scheduleNextReview> is explicitly excluded from client side code generation
                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'SafetyOverrideRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['AwaitingActivation', 'Active', 'Revalidate', 'InReview'], cert.state))) {
                    return false;
                }
                if (!(_.includes(['OperationalRiskAssessment'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ReAuthoriseOperationalRiskAssessment\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['OperationalRiskAssessment'], cert.variant) && _.includes(['AwaitingActivation', 'Active', 'InReview', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'ReAuthoriseOperationalRiskAssessment\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReAuthoriseOperationalRiskAssessment\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReAuthoriseOperationalRiskAssessment\' is enabled', cert);
                return true;
            }
        },
        CloseOperationalRiskAssessmentByAreaAuthority: {
            key: 'CloseOperationalRiskAssessmentByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <restrictParentState/>
                if (function() {
                    if (!(cert.hasParents(['Isolation'], []))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictParentState(cert, violations, {
                        kind: 'Isolation',
                        prohibitedStates: []
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Active', 'InReview', 'Revalidate'], cert.state))) {
                    return false;
                }
                if (!(_.includes(['1'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseOperationalRiskAssessmentByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseOperationalRiskAssessmentByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseOperationalRiskAssessmentByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseOperationalRiskAssessmentByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        CloseOperationalRiskAssessmentBySiteAuthority: {
            key: 'CloseOperationalRiskAssessmentBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <restrictParentState/>
                if (function() {
                    if (!(cert.hasParents(['Isolation'], []))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.restrictParentState(cert, violations, {
                        kind: 'Isolation',
                        prohibitedStates: []
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Active', 'InReview', 'Revalidate'], cert.state))) {
                    return false;
                }
                if (!(_.includes(['2', '3', '4', '5'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseOperationalRiskAssessmentBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseOperationalRiskAssessmentBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseOperationalRiskAssessmentBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseOperationalRiskAssessmentBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        AcceptTaskRiskAssessmentByRiskAssessmentTeam: {
            key: 'AcceptTaskRiskAssessmentByRiskAssessmentTeam',
            numberOfSignatures: 'SinglePerUser',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('ApprovingTeamMembers')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, '');
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RiskAssessmentTitle', values: [] });
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'AcceptTaskRiskAssessmentByRiskAssessmentTeam\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('ApprovingTeamMembers').length > 0) {
                        return true;
                    }
                    if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('ApprovingTeamMembers').length > 0) {
                        return true;
                    }
                    log('signature \'AcceptTaskRiskAssessmentByRiskAssessmentTeam\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AcceptTaskRiskAssessmentByRiskAssessmentTeam\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AcceptTaskRiskAssessmentByRiskAssessmentTeam\' is enabled', cert);
                return true;
            }
        },
        AcceptTaskRiskAssessmentByRiskAssessmentFacilitator: {
            key: 'AcceptTaskRiskAssessmentByRiskAssessmentFacilitator',
            numberOfSignatures: 'SinglePerUser',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('RiskAssessmentFacilitator')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, '');
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'RiskAssessmentTitle', values: [] });
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'AcceptTaskRiskAssessmentByRiskAssessmentFacilitator\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('RiskAssessmentFacilitator').length > 0) {
                        return true;
                    }
                    if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('RiskAssessmentFacilitator').length > 0) {
                        return true;
                    }
                    log('signature \'AcceptTaskRiskAssessmentByRiskAssessmentFacilitator\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AcceptTaskRiskAssessmentByRiskAssessmentFacilitator\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AcceptTaskRiskAssessmentByRiskAssessmentFacilitator\' is enabled', cert);
                return true;
            }
        },
        ApproveTaskRiskAssessmentByAreaOrSiteAuthority: {
            key: 'ApproveTaskRiskAssessmentByAreaOrSiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((_.includes(['1'], cert.riskArea))) {
                    return false;
                }
                if (!(_.includes(['1'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveTaskRiskAssessmentByAreaOrSiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'TaskRiskAssessment' && _.includes(['Closed'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveTaskRiskAssessmentByAreaOrSiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveTaskRiskAssessmentByAreaOrSiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveTaskRiskAssessmentByAreaOrSiteAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveTaskRiskAssessmentByAreaAuthority: {
            key: 'ApproveTaskRiskAssessmentByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, '');
                // Rule <requireSignature/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['AcceptTaskRiskAssessmentByRiskAssessmentTeam'],
                        requiredSignersProperty: 'Approvingteammembers',
                        proceedWhenNoSignersAvailable: true
                    });
                }

                // Rule <requireSignature/>
                if (function() {
                    if (!(cert.riskAssessmentLevel === 'Level2')) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireSignature(cert, violations, {
                        signatures: ['AcceptTaskRiskAssessmentByRiskAssessmentFacilitator'],
                        requiredSignersProperty: '',
                        proceedWhenNoSignersAvailable: false
                    });
                }

                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['1'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveTaskRiskAssessmentByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'TaskRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'TaskRiskAssessment' && _.includes(['Accepted'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Accepted'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveTaskRiskAssessmentByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveTaskRiskAssessmentByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveTaskRiskAssessmentByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveTaskRiskAssessmentBySiteAuthority: {
            key: 'ApproveTaskRiskAssessmentBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['AcceptTaskRiskAssessmentByRiskAssessmentTeam'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['AcceptTaskRiskAssessmentByRiskAssessmentFacilitator'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['2'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveTaskRiskAssessmentBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'TaskRiskAssessment' && _.includes(['Accepted'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Accepted'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveTaskRiskAssessmentBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveTaskRiskAssessmentBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveTaskRiskAssessmentBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        EndorseTaskRiskAssessmentByFunctionalAuthority: {
            key: 'EndorseTaskRiskAssessmentByFunctionalAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentLevel/>
                validationRules.requireRiskAssessmentLevel(cert, violations, 'Level2');
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['AcceptTaskRiskAssessmentByRiskAssessmentTeam'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['AcceptTaskRiskAssessmentByRiskAssessmentFacilitator'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['3', '4', '5'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'EndorseTaskRiskAssessmentByFunctionalAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'TaskRiskAssessment' && _.includes(['Accepted'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Accepted'], cert.state)) {
                        return true;
                    }
                    log('signature \'EndorseTaskRiskAssessmentByFunctionalAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'EndorseTaskRiskAssessmentByFunctionalAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'EndorseTaskRiskAssessmentByFunctionalAuthority\' is enabled', cert);
                return true;
            }
        },
        CloseTaskRiskAssessment: {
            key: 'CloseTaskRiskAssessment',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'CloseTaskRiskAssessment\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'TaskRiskAssessment' && _.includes(['Active'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'TaskRiskAssessmentTemplate' && _.includes(['Active'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseTaskRiskAssessment\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseTaskRiskAssessment\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseTaskRiskAssessment\' is enabled', cert);
                return true;
            }
        },
        ApproveRAPByAreaAuthority: {
            key: 'ApproveRAPByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                if ((_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveRAPByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Operation' && _.includes(['Closed'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveRAPByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveRAPByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveRAPByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        ApproveRAPByPerformingAuthority: {
            key: 'ApproveRAPByPerformingAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                if ((_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'ApproveRAPByPerformingAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Operation' && _.includes(['Closed'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveRAPByPerformingAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveRAPByPerformingAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveRAPByPerformingAuthority\' is enabled', cert);
                return true;
            }
        },
        CloseRAP: {
            key: 'CloseRAP',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                if ((_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseRAP\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Operation' && _.includes(['Closed'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseRAP\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseRAP\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseRAP\' is enabled', cert);
                return true;
            }
        },
        AuthorizeNPWByAreaAuthority: {
            key: 'AuthorizeNPWByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                if ((_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'AuthorizeNPWByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Operation' && _.includes(['Closed'], cert.state)) {
                        return true;
                    }
                    log('signature \'AuthorizeNPWByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AuthorizeNPWByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AuthorizeNPWByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        CloseNPW: {
            key: 'CloseNPW',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                if ((_.includes(['Operation'], cert.kind))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseNPW\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Operation' && _.includes(['Closed'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseNPW\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseNPW\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseNPW\' is enabled', cert);
                return true;
            }
        },
        AuthorizeOperation: {
            key: 'AuthorizeOperation',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requirePlannedWorkingPeriod/>
                validationRules.requirePlannedWorkingPeriod(cert, violations);
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'AuthorizeOperation\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Operation' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'AuthorizeOperation\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AuthorizeOperation\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AuthorizeOperation\' is enabled', cert);
                return true;
            }
        },
        CloseOperation: {
            key: 'CloseOperation',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseOperation\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseOperation\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseOperation\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseOperation\' is enabled', cert);
                return true;
            }
        },
        AuthorizeLeak: {
            key: 'AuthorizeLeak',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requirePlannedWorkingPeriod/>
                validationRules.requirePlannedWorkingPeriod(cert, violations);
                // Rule <requireCertificateResidualRisk/>
                validationRules.requireCertificateResidualRisk(cert, violations);
                // Rule <requireWorkItemAttachment/>
                if (function() {
                    if (!(_.includes(['C1'], cert.variant))) {
                        return false;
                    }
                    return true;
                }()) {
                    validationRules.requireWorkItemAttachment(cert, violations, {
                        kind: 'TaskRiskAssessment',
                        variants: [],
                        inStates: ['Active'],
                        notInStates: []
                    });
                }

                // Rule <restrictWorkItemAttachment/>
                validationRules.restrictWorkItemAttachment(cert, violations, {
                    kind: 'TaskRiskAssessment',
                    isRequired: false,
                    variants: [],
                    inStates: ['Active'],
                    notInStates: []
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['Requesting'], cert.state))) {
                    return false;
                }
                if ((_.includes(['StructuredSearch'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'AuthorizeLeak\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'AuthorizeLeak\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AuthorizeLeak\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AuthorizeLeak\' is enabled', cert);
                return true;
            }
        },
        ReauthorizeLeak: {
            key: 'ReauthorizeLeak',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Revalidation',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((_.includes(['StructuredSearch'], cert.variant))) {
                    return false;
                }
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!!(_.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state))) {
                        return true;
                    }
                    if(!!(/* <all> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['Requesting'], cert.state))) {
                            return false;
                        }
                        if(!(cert.signedWith(['AuthorizeLeak'], []))) {
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
                // matches all of above conditions
                log('displaying signature \'ReauthorizeLeak\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Leak' && _.includes(['Requesting', 'AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'ReauthorizeLeak\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReauthorizeLeak\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReauthorizeLeak\' is enabled', cert);
                return true;
            }
        },
        CompleteLeakSearch: {
            key: 'CompleteLeakSearch',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireWorkLocation/>
                validationRules.requireWorkLocation(cert, violations);
                // Rule <requirePlannedWorkingPeriod/>
                validationRules.requirePlannedWorkingPeriod(cert, violations);
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['StructuredSearch'], cert.variant))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CompleteLeakSearch\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Leak' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'CompleteLeakSearch\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteLeakSearch\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteLeakSearch\' is enabled', cert);
                return true;
            }
        },
        RevertLeakForModification: {
            key: 'RevertLeakForModification',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule closeValidPeriods not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'RevertLeakForModification\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'RevertLeakForModification\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RevertLeakForModification\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RevertLeakForModification\' is enabled', cert);
                return true;
            }
        },
        CloseLeak: {
            key: 'CloseLeak',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <signAttachedCertificate> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'CloseLeak\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseLeak\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseLeak\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseLeak\' is enabled', cert);
                return true;
            }
        },
        ReviewWorkItemAudit: {
            key: 'ReviewWorkItemAudit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <assertAllQuestionsAnswered/>
                validationRules.assertAllQuestionsAnswered(cert, violations);
                // rule requireRemarksForAuditAssessments not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'ReviewWorkItemAudit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'WorkItemAudit' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ReviewWorkItemAudit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ReviewWorkItemAudit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ReviewWorkItemAudit\' is enabled', cert);
                return true;
            }
        },
        CloseWorkItemAudit: {
            key: 'CloseWorkItemAudit',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <assertUserHasNotSignedOtherSignatures> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'CloseWorkItemAudit\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'WorkItemAudit' && _.includes(['Reviewed'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseWorkItemAudit\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseWorkItemAudit\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseWorkItemAudit\' is enabled', cert);
                return true;
            }
        },
        MonitoringCommentForRequirement: {
            key: 'MonitoringCommentForRequirement',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'MonitoringCommentForRequirement\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit' && _.includes(['AwaitingActivation', 'Active', 'Closing', 'SuspendedForEmergency', 'SuspendedForReauthorization', 'SuspendedForRevalidation', 'AwaitingActivation', 'Revalidate', 'SuspendedForSanctionToTest', 'Expired', 'ReAuthorized', 'ReIssued', 'InReview'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Isolation' && _.includes(['IsolationInPlace', 'DeisolationInProgress', 'IsolationInPlaceForLongTerm', 'Deisolated', 'RequestedForSanctionToTest', 'IsolationInPlaceForSanctionToTest'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'OperationalRiskAssessment' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'InReview'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Operation' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'Leak' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'Expired'], cert.state)) {
                        return true;
                    }
                    log('signature \'MonitoringCommentForRequirement\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'MonitoringCommentForRequirement\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'MonitoringCommentForRequirement\' is enabled', cert);
                return true;
            }
        },
        ConfirmAction: {
            key: 'ConfirmAction',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireOwner/>
                validationRules.requireOwner(cert, violations);
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'ConfirmAction\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Action' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'ConfirmAction\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ConfirmAction\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ConfirmAction\' is enabled', cert);
                return true;
            }
        },
        AcceptAction: {
            key: 'AcceptAction',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('Owner')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'AcceptAction\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Action' && _.includes(['Confirmed'], cert.state) && cert.findAuthorities('Owner').length > 0) {
                        return true;
                    }
                    log('signature \'AcceptAction\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'AcceptAction\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'AcceptAction\' is enabled', cert);
                return true;
            }
        },
        CompleteAction: {
            key: 'CompleteAction',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('Owner')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'CompleteAction\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Action' && _.includes(['Active'], cert.state) && cert.findAuthorities('Owner').length > 0) {
                        return true;
                    }
                    log('signature \'CompleteAction\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CompleteAction\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CompleteAction\' is enabled', cert);
                return true;
            }
        },
        ApproveAction: {
            key: 'ApproveAction',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'ApproveAction\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Action' && _.includes(['Completed'], cert.state)) {
                        return true;
                    }
                    log('signature \'ApproveAction\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'ApproveAction\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'ApproveAction\' is enabled', cert);
                return true;
            }
        },
        TransferOwnershipAction: {
            key: 'TransferOwnershipAction',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'TransferOwnershipAction\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === '*' && _.includes(['Requesting', 'Approved', 'Verified', 'Issued'], cert.state)) {
                        return true;
                    }
                    log('signature \'TransferOwnershipAction\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'TransferOwnershipAction\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'TransferOwnershipAction\' is enabled', cert);
                return true;
            }
        },
        BulkTransferOwnership: {
            key: 'BulkTransferOwnership',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'BulkTransferOwnership\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === '*') {
                        return true;
                    }
                    log('signature \'BulkTransferOwnership\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'BulkTransferOwnership\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'BulkTransferOwnership\' is enabled', cert);
                return true;
            }
        },
        TransferRelated: {
            key: 'TransferRelated',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'TransferRelated\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === '*') {
                        return true;
                    }
                    log('signature \'TransferRelated\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'TransferRelated\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'TransferRelated\' is enabled', cert);
                return true;
            }
        },
        RegainOwnership: {
            key: 'RegainOwnership',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];

                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'RegainOwnership\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === '*') {
                        return true;
                    }
                    log('signature \'RegainOwnership\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RegainOwnership\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RegainOwnership\' is enabled', cert);
                return true;
            }
        },
        SoraTemplateTeamAcceptance: {
            key: 'SoraTemplateTeamAcceptance',
            numberOfSignatures: 'SinglePerUser',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('ApprovingTeamMembers')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'OverrideBypassType', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'OverrideBypassMethod', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'OverallIntegrityLevel', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'IntegrityBasisSafety', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'IntegrityBasisEnvironment', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'IntegrityBasisCommercial', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'ReasonsForApplyingAndComments', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'MaximumSoraDuration', values: [] });
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'SoraTemplateTeamAcceptance\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('ApprovingTeamMembers').length > 0) {
                        return true;
                    }
                    log('signature \'SoraTemplateTeamAcceptance\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'SoraTemplateTeamAcceptance\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'SoraTemplateTeamAcceptance\' is enabled', cert);
                return true;
            }
        },
        SoraTemplateRiskFacilitatorAcceptance: {
            key: 'SoraTemplateRiskFacilitatorAcceptance',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([cert.findAuthorities('RiskAssessmentFacilitator')].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireSystemOrEquipment/>
                validationRules.requireSystemOrEquipment(cert, violations);
                // Rule <requireWorkDescription/>
                validationRules.requireWorkDescription(cert, violations);
                // Rule <requireRiskAssessmentComplete/>
                validationRules.requireRiskAssessmentComplete(cert, violations);
                // Rule <requireRiskRatingComplete/>
                validationRules.requireRiskRatingComplete(cert, violations);
                // Rule <requireProperties/>
                validationRules.requireProperty(cert, violations, { key: 'OverrideBypassType', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'OverrideBypassMethod', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'OverallIntegrityLevel', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'IntegrityBasisSafety', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'IntegrityBasisEnvironment', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'IntegrityBasisCommercial', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'ReasonsForApplyingAndComments', values: [] });
                validationRules.requireProperty(cert, violations, { key: 'MaximumSoraDuration', values: [] });
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'SoraTemplateRiskFacilitatorAcceptance\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state) && cert.findAuthorities('RiskAssessmentFacilitator').length > 0) {
                        return true;
                    }
                    log('signature \'SoraTemplateRiskFacilitatorAcceptance\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'SoraTemplateRiskFacilitatorAcceptance\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'SoraTemplateRiskFacilitatorAcceptance\' is enabled', cert);
                return true;
            }
        },
        SoraTemplateApprovalByAreaAuthority: {
            key: 'SoraTemplateApprovalByAreaAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['SoraTemplateTeamAcceptance'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['SoraTemplateRiskFacilitatorAcceptance'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['1'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'SoraTemplateApprovalByAreaAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'SoraTemplateApprovalByAreaAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'SoraTemplateApprovalByAreaAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'SoraTemplateApprovalByAreaAuthority\' is enabled', cert);
                return true;
            }
        },
        SoraTemplateApprovalBySiteAuthority: {
            key: 'SoraTemplateApprovalBySiteAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['SoraTemplateTeamAcceptance'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['SoraTemplateRiskFacilitatorAcceptance'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['2'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'SoraTemplateApprovalBySiteAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'SoraTemplateApprovalBySiteAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'SoraTemplateApprovalBySiteAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'SoraTemplateApprovalBySiteAuthority\' is enabled', cert);
                return true;
            }
        },
        SoraTemplateApprovalByFunctionalAuthority: {
            key: 'SoraTemplateApprovalByFunctionalAuthority',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <requireRiskAssessmentTeam/>
                validationRules.requireRiskAssessmentTeam(cert, violations, {
                    minimumNumberOfTeamMembers: 2,
                    ignoreContractedTeamMembers: false
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['SoraTemplateTeamAcceptance'],
                    requiredSignersProperty: 'Approvingteammembers',
                    proceedWhenNoSignersAvailable: true
                });
                // Rule <requireSignature/>
                validationRules.requireSignature(cert, violations, {
                    signatures: ['SoraTemplateRiskFacilitatorAcceptance'],
                    requiredSignersProperty: '',
                    proceedWhenNoSignersAvailable: false
                });
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(_.includes(['3', '4', '5'], cert.riskArea))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'SoraTemplateApprovalByFunctionalAuthority\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'SoraTemplateApprovalByFunctionalAuthority\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'SoraTemplateApprovalByFunctionalAuthority\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'SoraTemplateApprovalByFunctionalAuthority\' is enabled', cert);
                return true;
            }
        },
        SoraTemplateAuthorisation: {
            key: 'SoraTemplateAuthorisation',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.signedWith(['SoraTemplateApprovalByAreaAuthority', 'SoraTemplateApprovalBySiteAuthority', 'SoraTemplateApprovalByFunctionalAuthority'], []))) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'SoraTemplateAuthorisation\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Approved'], cert.state)) {
                        return true;
                    }
                    log('signature \'SoraTemplateAuthorisation\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'SoraTemplateAuthorisation\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'SoraTemplateAuthorisation\' is enabled', cert);
                return true;
            }
        },
        SoraTemplateReAuthorisation: {
            key: 'SoraTemplateReAuthorisation',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Revalidation',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(/* <anyOf> condition: a single condition below must match */
                function() {
                    if(!!(_.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state))) {
                        return true;
                    }
                    if(!!(/* <all> condition: a single condition below must match */
                    function() {
                        if(!(_.includes(['Approved'], cert.state))) {
                            return false;
                        }
                        if(!(cert.signedWith(['SoraTemplateAuthorisation'], []))) {
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
                // matches all of above conditions
                log('displaying signature \'SoraTemplateReAuthorisation\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['Approved'], cert.state)) {
                        return true;
                    }
                    log('signature \'SoraTemplateReAuthorisation\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'SoraTemplateReAuthorisation\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'SoraTemplateReAuthorisation\' is enabled', cert);
                return true;
            }
        },
        RevertSoraTemplateForModification: {
            key: 'RevertSoraTemplateForModification',
            numberOfSignatures: 'Single',
            isResignable: true,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule closeValidPeriods not yet implemented
                // rule invalidateSignatures not yet implemented
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'RevertSoraTemplateForModification\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'RevertSoraTemplateForModification\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'RevertSoraTemplateForModification\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'RevertSoraTemplateForModification\' is enabled', cert);
                return true;
            }
        },
        CloseSoraTemplate: {
            key: 'CloseSoraTemplate',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                // rule closeValidPeriods not yet implemented
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'CloseSoraTemplate\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessmentTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseSoraTemplate\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseSoraTemplate\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseSoraTemplate\' is enabled', cert);
                return true;
            }
        },
        VerifySora: {
            key: 'VerifySora',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: 'Initial',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // rule setLifetimePeriod not yet implemented
                // rule setLifetimePeriod not yet implemented
                // Rule <approvePeriod> is explicitly excluded from client side code generation
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'VerifySora\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Requesting'], cert.state)) {
                        return true;
                    }
                    log('signature \'VerifySora\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'VerifySora\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'VerifySora\' is enabled', cert);
                return true;
            }
        },
        CloseSora: {
            key: 'CloseSora',
            numberOfSignatures: 'Single',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <transition> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {

                // matches all of above conditions
                log('displaying signature \'CloseSora\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'SafetyOverrideRiskAssessment' && _.includes(['Active', 'Revalidate', 'Expired'], cert.state)) {
                        return true;
                    }
                    log('signature \'CloseSora\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'CloseSora\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'CloseSora\' is enabled', cert);
                return true;
            }
        },
        MarkPermitTemplateAsCopyable: {
            key: 'MarkPermitTemplateAsCopyable',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <markAsCopyable> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((cert.canBeCopied)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'MarkPermitTemplateAsCopyable\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'PermitTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'Closed'], cert.state)) {
                        return true;
                    }
                    log('signature \'MarkPermitTemplateAsCopyable\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'MarkPermitTemplateAsCopyable\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'MarkPermitTemplateAsCopyable\' is enabled', cert);
                return true;
            }
        },
        MarkIsolationTemplateAsCopyable: {
            key: 'MarkIsolationTemplateAsCopyable',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <markAsCopyable> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if ((cert.canBeCopied)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'MarkIsolationTemplateAsCopyable\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'IsolationTemplate' && _.includes(['AwaitingActivation', 'Active', 'Revalidate', 'Closed'], cert.state)) {
                        return true;
                    }
                    log('signature \'MarkIsolationTemplateAsCopyable\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'MarkIsolationTemplateAsCopyable\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'MarkIsolationTemplateAsCopyable\' is enabled', cert);
                return true;
            }
        },
        MarkAsNotCopyable: {
            key: 'MarkAsNotCopyable',
            numberOfSignatures: 'Multiple',
            isResignable: false,
            periodType: '',
            getUsers: function(cert) {
                return _.uniqBy(_.flatten([].concat([])), 'id');
            },
            getRuleViolations: function(cert) {
                var violations = [];
                // Rule <markAsNotCopyable> is explicitly excluded from client side code generation
                return violations;
            },
            isSignatureVisible: function(cert) {
                if (!(cert.canBeCopied)) {
                    return false;
                }
                // matches all of above conditions
                log('displaying signature \'MarkAsNotCopyable\'', cert);
                return true;
            },
            isSignatureEnabled: function(cert) {
                var compliesWithSignatureConditions = function() {
                    if (cert.kind === 'Permit') {
                        return true;
                    }
                    if (cert.kind === 'Isolation') {
                        return true;
                    }
                    if (cert.kind === 'OperationalRiskAssessment') {
                        return true;
                    }
                    if (cert.kind === 'PermitTemplate') {
                        return true;
                    }
                    if (cert.kind === 'IsolationTemplate') {
                        return true;
                    }
                    if (cert.kind === 'LolcMovement') {
                        return true;
                    }
                    if (cert.kind === 'LolcOperationalInspection') {
                        return true;
                    }
                    log('signature \'MarkAsNotCopyable\' disabled because does not complies with permission conditions');
                    return false;
                };
                if (!compliesWithSignatureConditions()) {
                    log(' \'MarkAsNotCopyable\' disabled because none of the permission conditions match, cert');
                    return false;
                }
                log('signature \'MarkAsNotCopyable\' is enabled', cert);
                return true;
            }
        }
    };

    return {
        getSignature: function(signatureType) {
            if (!signatures[signatureType]) {
                log('no configuration found for signature: ' + signatureType);
            }
            return signatures[signatureType];
        }
    };
})();
