window.flowVisionConfig = {
    "workitemKinds": [
        {
            "name": "Permit",
            "type": "Permit",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "ColdWork",
                    "rank": 1
                },
                {
                    "name": "HotWorkSparkPotential",
                    "rank": 2
                },
                {
                    "name": "BreakingContainment",
                    "rank": 3
                },
                {
                    "name": "HotWorkNakedFlame",
                    "rank": 4
                },
                {
                    "name": "ConfinedSpaceEntry",
                    "rank": 5
                }
            ],
            "risks": [
                {
                    "name": "Low",
                    "weight": 1,
                    "color": "#B7B9BC",
                    "ratings": null
                },
                {
                    "name": "Normal",
                    "weight": 2,
                    "color": "#FFFFFF",
                    "ratings": null
                }
            ],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "Approved"
                },
                {
                    "name": "ReadyToVerify"
                },
                {
                    "name": "Verified"
                },
                {
                    "name": "Authorised"
                },
                {
                    "name": "Issued"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Closing"
                },
                {
                    "name": "InReview"
                },
                {
                    "name": "SuspendedForEmergency"
                },
                {
                    "name": "SuspendedForReauthorization"
                },
                {
                    "name": "SuspendedForRevalidation"
                },
                {
                    "name": "AwaitingActivation"
                },
                {
                    "name": "Revalidate"
                },
                {
                    "name": "Expired"
                },
                {
                    "name": "SuspendedForSanctionToTest"
                },
                {
                    "name": "ReAuthorized"
                },
                {
                    "name": "ReIssued"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "Approved",
                    "to": "Requesting",
                    "roles": "AreaAuthority,IssuingAuthority"
                },
                {
                    "from": "ReadyToVerify",
                    "to": "Approved",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "ReadyToVerify",
                    "to": "Requesting",
                    "roles": "AreaAuthority,SiteAuthority"
                },
                {
                    "from": "Verified",
                    "to": "ReadyToVerify",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Authorised",
                    "to": "Approved",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Authorised",
                    "to": "ReadyToVerify",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Verified",
                    "to": "Approved",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Issued",
                    "to": "Approved",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Issued",
                    "to": "ReadyToVerify",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Authorised",
                    "to": "Verified",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Issued",
                    "to": "Verified",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Issued",
                    "to": "Authorised",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Authorised",
                    "to": "Requesting",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Issued",
                    "to": "Requesting",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "ReAuthorized",
                    "to": "SuspendedForReauthorization",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "ReAuthorized",
                    "to": "SuspendedForRevalidation",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "ReAuthorized",
                    "to": "SuspendedForEmergency",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "ReIssued",
                    "to": "ReAuthorized",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "ReIssued",
                    "to": "SuspendedForRevalidation",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "ReIssued",
                    "to": "SuspendedForSanctionToTest",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "ReIssued",
                    "to": "SuspendedForEmergency",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "Verified",
                    "to": "Approved",
                    "roles": "AreaAuthority,SiteAuthority"
                }
            ],
            "workspace": {
                "kind": "Permit",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Approved",
                        "states": [
                            "Approved",
                            "ReadyToVerify"
                        ]
                    },
                    {
                        "name": "Verified",
                        "states": [
                            "Verified"
                        ]
                    },
                    {
                        "name": "Authorised",
                        "states": [
                            "Authorised",
                            "ReAuthorized"
                        ]
                    },
                    {
                        "name": "Issued",
                        "states": [
                            "Issued",
                            "ReIssued"
                        ]
                    },
                    {
                        "name": "Live",
                        "states": [
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired"
                        ]
                    },
                    {
                        "name": "Suspended",
                        "states": [
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest"
                        ]
                    },
                    {
                        "name": "Closing",
                        "states": [
                            "Closing"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "isolationCertificate",
                        "kind": "Isolation",
                        "creationStateFromTemplate": "WaitingForAuthorization"
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "SafetyOverrideRiskAssessment",
                        "allowTemplateUsage": true,
                        "allowExistingUsage": true,
                        "allowNewUsage": false,
                        "templateLabelResource": "AttachTemplateButtonText"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workingLocation",
                        "name": "workingLocation"
                    },
                    {
                        "key": "5_systemOrEquipmentDescription",
                        "name": "systemOrEquipmentDescription"
                    },
                    {
                        "key": "6_signedByUsername",
                        "name": "signedByUsername"
                    },
                    {
                        "key": "7_dateRange",
                        "name": "dateRange"
                    },
                    {
                        "key": "8_isDeleted",
                        "name": "isDeleted"
                    },
                    {
                        "key": "9_workOrderDisplay",
                        "name": "workOrderDisplay"
                    },
                    {
                        "key": "10_workItemVariant",
                        "name": "workItemVariant"
                    },
                    {
                        "key": "11_isPlannedInShutdown",
                        "name": "isPlannedInShutdown",
                        "showProjectName": true
                    },
                    {
                        "key": "12_discipline",
                        "name": "discipline"
                    },
                    {
                        "key": "13_isAudited",
                        "name": "isAudited"
                    },
                    {
                        "key": "14_riskArea",
                        "name": "riskArea"
                    },
                    {
                        "key": "15_workDescription",
                        "name": "workDescription"
                    },
                    {
                        "key": "16_hasAttachment",
                        "name": "hasAttachment",
                        "kind": "SafetyOverrideRiskAssessment"
                    },
                    {
                        "key": "17_timeLeft",
                        "name": "timeLeft"
                    },
                    {
                        "key": "18_isTemplateBased",
                        "name": "isTemplateBased"
                    },
                    {
                        "key": "19_hasAttachment",
                        "name": "hasAttachment",
                        "kind": "Isolation"
                    },
                    {
                        "key": "20_riskAssessmentLevel",
                        "name": "riskAssessmentLevel"
                    },
                    {
                        "key": "21_textPropertyBoolean",
                        "name": "textPropertyBoolean",
                        "key": "RestrictedWorkSpace"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage"
                    },
                    {
                        "name": "RegistrationNumber",
                        "width": "150"
                    },
                    {
                        "name": "Title",
                        "width": "150"
                    },
                    {
                        "name": "Equipment",
                        "width": "100"
                    },
                    {
                        "name": "Location",
                        "width": "100"
                    },
                    {
                        "name": "PlannedStartDateTime",
                        "width": "120"
                    },
                    {
                        "name": "ExpiresAtUtcDateTime",
                        "width": "120",
                        "titleResource": "ColumnLabel_TimeLeft"
                    },
                    {
                        "name": "AttachedIccs",
                        "width": "120"
                    },
                    {
                        "name": "IsAudited",
                        "width": "60"
                    },
                    {
                        "name": "WorkOrderDisplay",
                        "width": "120"
                    },
                    {
                        "name": "HasPrerequisites",
                        "width": "60"
                    },
                    {
                        "name": "ShutdownProjectName",
                        "width": "60"
                    },
                    {
                        "name": "InitialPeriodStartDate",
                        "width": "100"
                    },
                    {
                        "name": "LastRevalidationPeriodStartDate",
                        "width": "100"
                    },
                    {
                        "name": "RiskAssessmentLevel",
                        "width": "60",
                        "titleResource": "ColumnLabel_RiskAssessmentLevel"
                    }
                ],
                "workOrder": {
                    "denyDirectPermitCreation": false,
                    "denyCreateFromTemplate": true,
                    "denyCreateFromQuestionnaire": false,
                    "workOrderSearchFields": [
                        {
                            "key": "0_workOrderDisplay",
                            "name": "workOrderDisplay"
                        },
                        {
                            "key": "1_workOrderTitle",
                            "name": "workOrderTitle"
                        },
                        {
                            "key": "2_workOrderDescription",
                            "name": "workOrderDescription"
                        },
                        {
                            "key": "3_workOrderDateRange",
                            "name": "workOrderDateRange"
                        },
                        {
                            "key": "4_workOrderSite",
                            "name": "workOrderSite"
                        }
                    ],
                    "workOrderColumns": [
                        {
                            "name": "Display"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "Description"
                        },
                        {
                            "name": "PlannedStartDate"
                        },
                        {
                            "name": "PlannedEndDate"
                        },
                        {
                            "name": "Site"
                        }
                    ]
                },
                "wizardSteps": [
                    {
                        "id": "RiskAssessmentDraft",
                        "fields": [
                            {
                                "name": "warning",
                                "onlyVisibleWhenCopying": true,
                                "textResource": "HazardsAndControlMeasuresShouldBeEdited",
                                "uniqueKey": "Permit_RiskAssessmentDraft_0"
                            },
                            {
                                "name": "lessonsLearnedNotice",
                                "onlyVisibleWhenCopying": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_1"
                            },
                            {
                                "name": "riskOfWork",
                                "onlyVisibleWhenOriginatingFrom": "Template",
                                "hiddenWhenOriginatingFrom": "Template",
                                "copyParticipation": "Template",
                                "uniqueKey": "Permit_RiskAssessmentDraft_2"
                            },
                            {
                                "name": "workItemVariant",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Permit_RiskAssessmentDraft_3"
                            },
                            {
                                "name": "multiValue",
                                "key": "ReasonForWork",
                                "isRequired": true,
                                "defaultValue": null,
                                "allowedValues": [
                                    "Planned",
                                    "Emergent"
                                ],
                                "uniqueKey": "Permit_RiskAssessmentDraft_4"
                            },
                            {
                                "name": "workOrders",
                                "uniqueKey": "Permit_RiskAssessmentDraft_5"
                            },
                            {
                                "name": "title",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Permit_RiskAssessmentDraft_6"
                            },
                            {
                                "name": "workDescription",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_7"
                            },
                            {
                                "name": "text",
                                "key": "AdditionalTaskDescription",
                                "onlyVisibleWhenOriginatingFrom": "Template",
                                "uniqueKey": "Permit_RiskAssessmentDraft_8"
                            },
                            {
                                "name": "site",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_9"
                            },
                            {
                                "name": "workingLocations",
                                "onlyVisibleIn": "Requesting,Approved,ReadyToVerify,Closed",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "workItemFilter": [],
                                "uniqueKey": "Permit_RiskAssessmentDraft_10"
                            },
                            {
                                "name": "workingLocations",
                                "hiddenIn": "Requesting,Approved,ReadyToVerify,Closed",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "workItemFilter": [
                                    {
                                        "kind": "Permit",
                                        "workItemState": [
                                            "Active",
                                            "SuspendedForEmergency",
                                            "SuspendedForReauthorization",
                                            "SuspendedForRevalidation",
                                            "SuspendedForSanctionToTest"
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_RiskAssessmentDraft_11"
                            },
                            {
                                "name": "affectedLocations",
                                "onlyVisibleIn": "Requesting,Approved,ReadyToVerify,Closed",
                                "copyParticipation": "CloneAndTemplate",
                                "workItemFilter": [],
                                "uniqueKey": "Permit_RiskAssessmentDraft_12"
                            },
                            {
                                "name": "affectedLocations",
                                "hiddenIn": "Requesting,Approved,ReadyToVerify,Closed",
                                "copyParticipation": "CloneAndTemplate",
                                "workItemFilter": [
                                    {
                                        "kind": "Permit",
                                        "workItemState": [
                                            "Active",
                                            "SuspendedForEmergency",
                                            "SuspendedForReauthorization",
                                            "SuspendedForRevalidation",
                                            "SuspendedForSanctionToTest"
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_RiskAssessmentDraft_13"
                            },
                            {
                                "name": "workObjects",
                                "copyParticipation": "CloneAndTemplate",
                                "allowMultipleEquipment": true,
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_14"
                            },
                            {
                                "name": "numberOfPersons",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_15"
                            },
                            {
                                "name": "text",
                                "key": "ToolsToBeUsed",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Permit_RiskAssessmentDraft_16"
                            },
                            {
                                "name": "text",
                                "key": "EquipmentToBeUsed",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Permit_RiskAssessmentDraft_17"
                            },
                            {
                                "name": "text",
                                "key": "ContactOrOtherDetails",
                                "copyParticipation": "Clone",
                                "uniqueKey": "Permit_RiskAssessmentDraft_18"
                            },
                            {
                                "name": "discipline",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_19"
                            },
                            {
                                "name": "isolationCertificateRequirement",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Permit_RiskAssessmentDraft_20"
                            },
                            {
                                "name": "isPlannedInShutdown",
                                "copyParticipation": "Clone",
                                "showProjectName": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_21"
                            },
                            {
                                "name": "textCheckBox",
                                "key": "RestrictedWorkSpace",
                                "copyParticipation": "CloneAndTemplate",
                                "onlyVisibleWhenOriginatingFrom": "Template",
                                "onlyVisibleForRisksOfWork": "Normal",
                                "uniqueKey": "Permit_RiskAssessmentDraft_22"
                            },
                            {
                                "name": "textCheckBox",
                                "key": "RestrictedWorkSpace",
                                "copyParticipation": "CloneAndTemplate",
                                "hiddenWhenOriginatingFrom": "Template",
                                "uniqueKey": "Permit_RiskAssessmentDraft_23"
                            },
                            {
                                "name": "markForSanctionToTest",
                                "copyParticipation": "CloneAndTemplate",
                                "hiddenWhenOriginatingFrom": "Template",
                                "uniqueKey": "Permit_RiskAssessmentDraft_24"
                            },
                            {
                                "name": "riskAssessmentLevel",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_25"
                            },
                            {
                                "name": "riskAssessmentTeam",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_26"
                            },
                            {
                                "name": "authoritySelector",
                                "authorityPropertyName": "RiskAssessmentFacilitator",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "textResource": "RiskAssessmentFacilitatorField",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "filter": {
                                    "defaultAllowedRoles": [
                                        "Level2RiskAssessor"
                                    ],
                                    "specificFilters": [
                                        {
                                            "variants": [
                                                "ColdWork",
                                                "HotWorkSparkPotential",
                                                "BreakingContainment"
                                            ],
                                            "roles": [],
                                            "origin": "Template"
                                        }
                                    ]
                                },
                                "uniqueKey": "Permit_RiskAssessmentDraft_27"
                            },
                            {
                                "name": "riskAssessmentTasks",
                                "copyParticipation": "CloneAndTemplate",
                                "readOnlyIfNoRiskLevelSelected": true,
                                "categories": "PermitHazards",
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_28"
                            },
                            {
                                "name": "highestResidualRisk",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "uniqueKey": "Permit_RiskAssessmentDraft_29"
                            },
                            {
                                "name": "residualRisk",
                                "onlyVisibleForRiskAssessmentLevel": "Level1",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Permit_RiskAssessmentDraft_30"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "ReadyToVerify",
                            "Verified",
                            "Authorised",
                            "ReAuthorized",
                            "Issued",
                            "ReIssued",
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest",
                            "Closing"
                        ]
                    },
                    {
                        "id": "PermitToWorkDraft",
                        "fields": [
                            {
                                "name": "controlMeasures",
                                "categories": "SupplementaryCertificates",
                                "textResource": "SupplementaryCertificatesControlMeasures",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Permit_PermitToWorkDraft_0"
                            },
                            {
                                "name": "gasMeasurementRequirements",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Permit_PermitToWorkDraft_1"
                            },
                            {
                                "name": "taskMonitoring",
                                "uniqueKey": "Permit_PermitToWorkDraft_2"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveLevel1BySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApprovePermitByRiskAssessmentTeam",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApprovePermitByRiskAssessmentFacilitator",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveLevel2ByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveArea2Permit",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveConfinedSpaceEntryPermit",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveArea3OrHigherPermit",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveHotWorkNakedFlamePermit",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_PermitToWorkDraft_3"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "ReadyToVerify",
                            "Verified",
                            "Authorised",
                            "ReAuthorized",
                            "Issued",
                            "ReIssued",
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest",
                            "Closing"
                        ]
                    },
                    {
                        "id": "RiskAssessmentApproved",
                        "fields": [
                            {
                                "name": "warning",
                                "textResource": "DateChangesToBeSavedBeforeConflictManagementUpdated",
                                "uniqueKey": "Permit_RiskAssessmentApproved_0"
                            },
                            {
                                "name": "partlySignedWarning",
                                "textResource": "DraftPermitChangeWillRevertSignature",
                                "inState": "Requesting",
                                "signatureTypes": "ApprovePermitByRiskAssessmentTeam,ApprovePermitByRiskAssessmentFacilitator",
                                "uniqueKey": "Permit_RiskAssessmentApproved_1"
                            },
                            {
                                "name": "workingPeriod",
                                "isRequired": true,
                                "ignoreWorkingHours": false,
                                "uniqueKey": "Permit_RiskAssessmentApproved_2"
                            },
                            {
                                "name": "text",
                                "key": "PMReference",
                                "numberOfLines": "1",
                                "copyParticipation": "Template",
                                "uniqueKey": "Permit_RiskAssessmentApproved_3"
                            },
                            {
                                "name": "text",
                                "key": "SIMOPS",
                                "copyParticipation": "Template",
                                "uniqueKey": "Permit_RiskAssessmentApproved_4"
                            },
                            {
                                "name": "nearbyActivitiesOnSystem",
                                "workItemFilter": [
                                    {
                                        "kind": "Permit",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_RiskAssessmentApproved_5"
                            },
                            {
                                "name": "nearbyActivitiesAtLocations",
                                "workItemFilter": [
                                    {
                                        "kind": "Permit",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_RiskAssessmentApproved_6"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "ReadyToVerify",
                            "Verified",
                            "Authorised",
                            "ReAuthorized",
                            "Issued",
                            "ReIssued",
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest",
                            "Closing"
                        ]
                    },
                    {
                        "id": "PermitApproved",
                        "fields": [
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "PermitReadyForVerification",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "VerifyPermit",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "VerifyPermitBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_PermitApproved_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AuthoriseDraftTemplateBasedPermit",
                                        "fields": [
                                            {
                                                "name": "signatureLifetimePeriod"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_PermitApproved_1"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "IssueDraftTemplateBasedPermit",
                                        "fields": [
                                            {
                                                "name": "confirmPrerequisiteControlsInPlace",
                                                "errorResource": "SelfDeclarationPrerequisiteControlsInPlaceErrorMessage"
                                            },
                                            {
                                                "name": "period",
                                                "readonly": false
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_PermitApproved_2"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "Approved",
                                "toState": "Requesting",
                                "uniqueKey": "Permit_PermitApproved_3"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "ReadyToVerify",
                                "hiddenWhenOriginatingFrom": "Template",
                                "uniqueKey": "Permit_PermitApproved_4"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "ReadyToVerify",
                                "toState": "Requesting",
                                "onlyVisibleWhenOriginatingFrom": "Template",
                                "uniqueKey": "Permit_PermitApproved_5"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Approved"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Approved",
                            "ReadyToVerify",
                            "Verified",
                            "Authorised",
                            "ReAuthorized",
                            "Issued",
                            "ReIssued",
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest",
                            "Closing"
                        ]
                    },
                    {
                        "id": "Verified",
                        "fields": [
                            {
                                "name": "text",
                                "key": "DailyTaskScope",
                                "uniqueKey": "Permit_Verified_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AuthorisePermit",
                                        "fields": [
                                            {
                                                "name": "signatureLifetimePeriod"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_Verified_1"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "Verified",
                                "toState": "Approved",
                                "hiddenWhenOriginatingFrom": "Template",
                                "uniqueKey": "Permit_Verified_2"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "Verified",
                                "onlyVisibleWhenOriginatingFrom": "Template",
                                "uniqueKey": "Permit_Verified_3"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Verified"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Verified",
                            "Authorised",
                            "ReAuthorized",
                            "Issued",
                            "ReIssued",
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest",
                            "Closing"
                        ]
                    },
                    {
                        "id": "Issuing",
                        "fields": [
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "IssuePermit",
                                        "fields": [
                                            {
                                                "name": "informAboutAmendedIccAttachment"
                                            },
                                            {
                                                "name": "existingMeasurements"
                                            },
                                            {
                                                "name": "confirmPrerequisiteControlsInPlace",
                                                "errorResource": "SelfDeclarationPrerequisiteControlsInPlaceErrorMessage"
                                            },
                                            {
                                                "name": "period",
                                                "readonly": false
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AcceptPermit",
                                        "triggerPrintout": true,
                                        "fields": [
                                            {
                                                "name": "period",
                                                "readonly": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_Issuing_0"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "Authorised,Issued",
                                "uniqueKey": "Permit_Issuing_1"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Authorised"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Authorised",
                            "ReAuthorized",
                            "Issued",
                            "ReIssued",
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest",
                            "Closing"
                        ]
                    },
                    {
                        "id": "Revalidation",
                        "fields": [
                            {
                                "name": "text",
                                "key": "DailyTaskScope",
                                "uniqueKey": "Permit_Revalidation_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ReAuthorizePermit",
                                        "fields": [
                                            {
                                                "name": "signatureLifetimePeriod"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_Revalidation_1"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RevalidatePermit",
                                        "fields": [
                                            {
                                                "name": "existingMeasurements"
                                            },
                                            {
                                                "name": "confirmPrerequisiteControlsInPlace",
                                                "errorResource": "SelfDeclarationPrerequisiteControlsInPlaceErrorMessage"
                                            },
                                            {
                                                "name": "informAboutAmendedIccAttachment"
                                            },
                                            {
                                                "name": "period",
                                                "readonly": false
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ReactivatePermit",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "readonly": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_Revalidation_2"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "ReAuthorized,ReIssued",
                                "uniqueKey": "Permit_Revalidation_3"
                            },
                            {
                                "name": "revalidationSignaturesPeriod",
                                "uniqueKey": "Permit_Revalidation_4"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Authorised",
                            "Live",
                            "Suspended",
                            "ReIssued",
                            "Closing"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Authorised",
                            "ReAuthorized",
                            "Issued",
                            "ReIssued",
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest",
                            "Closing"
                        ],
                        "unsignedSignaturesAtTop": true
                    },
                    {
                        "id": "Closing",
                        "fields": [
                            {
                                "name": "performingAuthorityFeedback",
                                "uniqueKey": "Permit_Closing_0"
                            },
                            {
                                "name": "lessonsLearned",
                                "allowEditingAlways": true,
                                "uniqueKey": "Permit_Closing_1"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "Suspend",
                                        "fields": [
                                            {
                                                "name": "performingAuthorityFeedback"
                                            },
                                            {
                                                "name": "suspend",
                                                "reasons": "Revalidation, SanctionToTest"
                                            },
                                            {
                                                "name": "workingPeriod"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_Closing_2"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompletePermit",
                                        "fields": [
                                            {
                                                "name": "performingAuthorityFeedback"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RevertCompletedPermit",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ClosePermit",
                                        "fields": [
                                            {
                                                "name": "approveLessonsLearned",
                                                "requireAnswerForDeclaration": false,
                                                "resourceKey": "Label_FeedbackAndLessonsLearnedReviewed"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Permit_Closing_3"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Authorised",
                            "Live",
                            "Suspended",
                            "Closing"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Authorised",
                            "ReAuthorized",
                            "Issued",
                            "ReIssued",
                            "Active",
                            "AwaitingActivation",
                            "Revalidate",
                            "InReview",
                            "Expired",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "SuspendedForSanctionToTest",
                            "Closing"
                        ],
                        "unsignedSignaturesAtTop": true
                    }
                ],
                "actions": [
                    {
                        "key": "attachWorkItemAttachment",
                        "attachmentKind": "Isolation",
                        "titleResource": "AddIsolationCertificateAction"
                    },
                    {
                        "key": "managePermitDependencies",
                        "optionalInStates": [
                            "Requesting",
                            "Approved",
                            "Verified",
                            "Authorised",
                            "Issued",
                            "ReAuthorized"
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "GasTesting",
                        "titleResource": "AddMeasurementsAction",
                        "actionConditionName": "Permit_2",
                        "fields": [
                            {
                                "name": "addMeasurements",
                                "detectorNumberUsage": "Optional",
                                "uniqueKey": "Permit_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "showMeasurements",
                        "optionalInStates": [
                            "Requesting",
                            "Authorised",
                            "Issued",
                            "Active",
                            "SuspendedForEmergency",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForSanctionToTest",
                            "Expired"
                        ]
                    },
                    {
                        "key": "addSignature",
                        "titleResource": "Suspend",
                        "for": "Suspend",
                        "actionConditionName": "Permit_4",
                        "fields": [
                            {
                                "name": "performingAuthorityFeedback",
                                "uniqueKey": "Permit_undefined_0"
                            },
                            {
                                "name": "suspend",
                                "reasons": "Revalidation, SanctionToTest",
                                "uniqueKey": "Permit_undefined_1"
                            },
                            {
                                "name": "workingPeriod",
                                "ignoreWorkingHours": false,
                                "uniqueKey": "Permit_undefined_2"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addCounterSignature",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "titleResource": "TakeOverPerformingAuthority",
                        "for": "TakeOverPerformingAuthority",
                        "actionConditionName": "Permit_6",
                        "fields": [
                            {
                                "name": "signatureTextMessage",
                                "textResource": "SelfDeclarationTakeOverPerformingAuthority",
                                "uniqueKey": "Permit_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "titleResource": "TakeOverAreaAuthority",
                        "for": "TakeOverAreaAuthority",
                        "actionConditionName": "Permit_7",
                        "fields": [
                            {
                                "name": "signatureTextMessage",
                                "textResource": "SelfDeclarationTakeOverAreaAuthority",
                                "uniqueKey": "Permit_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "titleResource": "TakeOverSiteAuthority",
                        "for": "TakeOverSiteAuthority",
                        "actionConditionName": "Permit_8",
                        "fields": [
                            {
                                "name": "signatureTextMessage",
                                "textResource": "SelfDeclarationTakeOverSiteAuthority",
                                "uniqueKey": "Permit_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "deleteWorkItem",
                        "titleResource": "DeletePermitAction"
                    },
                    {
                        "key": "copyWorkItem",
                        "titleResource": "CopyPermitAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "PermitToWorkDraft",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "PermitToWorkDraftAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "PermitApproved",
                        "requiredInStates": [
                            "ReadyToVerify"
                        ],
                        "titleResource": "VerifyPermitAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "PermitApproved",
                        "requiredInStates": [
                            "Approved"
                        ],
                        "titleResource": "PermitApprovedAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Verified",
                        "requiredInStates": [
                            "Verified"
                        ],
                        "titleResource": "VerifiedAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Verified",
                        "optionalInStates": [
                            "Authorised",
                            "Issued"
                        ],
                        "titleResource": "VerifiedAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Issuing",
                        "requiredInStates": [
                            "Authorised"
                        ],
                        "titleResource": "IssuingAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Issuing",
                        "optionalInStates": [
                            "Issued"
                        ],
                        "titleResource": "IssuingAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Issuing",
                        "requiredInStates": [
                            "Issued"
                        ],
                        "optionalInStates": [
                            "Authorised"
                        ],
                        "titleResource": "AcceptAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Revalidation",
                        "optionalInStates": [
                            "AwaitingActivation",
                            "Active",
                            "Revalidate",
                            "Expired",
                            "SuspendedForRevalidation",
                            "SuspendedForReauthorization",
                            "SuspendedForEmergency",
                            "ReAuthorized",
                            "ReIssued",
                            "InReview"
                        ],
                        "titleResource": "ReauthorisePermitAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Revalidation",
                        "optionalInStates": [
                            "SuspendedForRevalidation",
                            "SuspendedForEmergency",
                            "ReAuthorized"
                        ],
                        "titleResource": "RevalidatePermitAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Revalidation",
                        "optionalInStates": [
                            "ReIssued"
                        ],
                        "titleResource": "ReacceptPermitAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Closing",
                        "optionalInStates": [
                            "Active",
                            "Revalidate",
                            "SuspendedForEmergency",
                            "SuspendedForReauthorization",
                            "SuspendedForRevalidation",
                            "SuspendedForSanctionToTest",
                            "Expired",
                            "InReview"
                        ],
                        "titleResource": "CompletePermitAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Closing",
                        "optionalInStates": [
                            "Closing"
                        ],
                        "titleResource": "RevertPermitToSuspendedAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Closing",
                        "optionalInStates": [
                            "ReAuthorized"
                        ],
                        "requiredInStates": [
                            "Closing"
                        ],
                        "titleResource": "ClosePermitAction"
                    },
                    {
                        "key": "transferOwnership",
                        "signatureType": "TransferOwnershipAction",
                        "selfDeclarationResource": "TransferOwnershipDeclaration",
                        "errorMessageResource": "TransferOwnershipErrorMessage"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "PermitToWorkDraft",
                        "optionalInAllStatesExcept": [
                            "Complete",
                            "Closed"
                        ],
                        "titleResource": "SetTaskMonitoringAction"
                    },
                    {
                        "key": "copyAsTemplate",
                        "titleResource": "CopyPermitAsTemplateAction",
                        "optionalInAllStatesExcept": [
                            "Requesting"
                        ],
                        "creationState": "Approved"
                    },
                    {
                        "key": "startAudit",
                        "kind": "WorkItemAudit",
                        "variant": "PermitAudit"
                    },
                    {
                        "key": "startAudit",
                        "kind": "WorkItemAudit",
                        "variant": "LiftingAudit"
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkAsNotCopyable",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchPermits",
                        "command": "SearchCertificates"
                    },
                    {
                        "id": "CCR",
                        "command": "ShowCcr"
                    },
                    {
                        "id": "TaskMonitoringOverview",
                        "command": "ShowTaskMonitoringOverview"
                    },
                    {
                        "id": "GasMeasurementsOverview",
                        "command": "ShowGasMeasurementsOverview"
                    },
                    {
                        "id": "SuspendAll",
                        "command": "ShowSignatureBox",
                        "signature": {
                            "type": "SuspendAllActivePermits",
                            "fields": [
                                {
                                    "name": "suspendSite",
                                    "filteredBy": "AreaAuthority"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        }
                    }
                ],
                "printProfiles": [
                    {
                        "name": "Permit",
                        "onlyForVariant": null
                    },
                    {
                        "name": "FrontPageAndToolboxTalk",
                        "onlyForVariant": null
                    },
                    {
                        "name": "Full",
                        "onlyForVariant": null
                    },
                    {
                        "name": "FullWithCseLog",
                        "onlyForVariant": "ConfinedSpaceEntry"
                    },
                    {
                        "name": "All",
                        "onlyForVariant": null
                    },
                    {
                        "name": "CseLog",
                        "onlyForVariant": "ConfinedSpaceEntry"
                    }
                ],
                "defaultPrintProfile": "All"
            }
        },
        {
            "name": "PermitTemplate",
            "type": "Permit",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "ColdWork",
                    "rank": 1
                },
                {
                    "name": "HotWorkSparkPotential",
                    "rank": 2
                },
                {
                    "name": "BreakingContainment",
                    "rank": 3
                }
            ],
            "risks": [
                {
                    "name": "Low",
                    "weight": 1,
                    "color": "#B7B9BC",
                    "ratings": null
                },
                {
                    "name": "Normal",
                    "weight": 2,
                    "color": "#FFFFFF",
                    "ratings": null
                }
            ],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "Approved"
                },
                {
                    "name": "Revalidate"
                },
                {
                    "name": "AwaitingActivation"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "Approved",
                    "to": "Requesting",
                    "roles": "SiteAuthority"
                }
            ],
            "workspace": {
                "kind": "PermitTemplate",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Approved",
                        "states": [
                            "Approved"
                        ]
                    },
                    {
                        "name": "Live",
                        "states": [
                            "AwaitingActivation",
                            "Active"
                        ]
                    },
                    {
                        "name": "Suspended",
                        "states": [
                            "Revalidate"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "isolationCertificate",
                        "kind": "IsolationTemplate"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workingLocation",
                        "name": "workingLocation"
                    },
                    {
                        "key": "5_systemOrEquipmentDescription",
                        "name": "systemOrEquipmentDescription"
                    },
                    {
                        "key": "6_workItemVariant",
                        "name": "workItemVariant"
                    },
                    {
                        "key": "7_isPlannedInShutdown",
                        "name": "isPlannedInShutdown",
                        "showProjectName": true
                    },
                    {
                        "key": "8_discipline",
                        "name": "discipline"
                    },
                    {
                        "key": "9_riskArea",
                        "name": "riskArea"
                    },
                    {
                        "key": "10_riskOfWork",
                        "name": "riskOfWork"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage"
                    },
                    {
                        "name": "RegistrationNumber",
                        "width": "180"
                    },
                    {
                        "name": "Title",
                        "width": "180"
                    },
                    {
                        "name": "Equipment",
                        "width": "300"
                    },
                    {
                        "name": "Location",
                        "width": "180"
                    },
                    {
                        "name": "HasIccAttached",
                        "width": "70"
                    },
                    {
                        "name": "IsAudited",
                        "width": "70"
                    },
                    {
                        "name": "HasPrerequisites",
                        "width": "70"
                    },
                    {
                        "name": "IsShutdownTurnAround",
                        "width": "70"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "SpecifyPermitTemplateValues",
                        "fields": [
                            {
                                "name": "riskOfWork",
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_0"
                            },
                            {
                                "name": "riskAssessmentLevel",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_1"
                            },
                            {
                                "name": "riskAssessmentTeam",
                                "isRequired": true,
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_2"
                            },
                            {
                                "name": "authoritySelector",
                                "authorityPropertyName": "RiskAssessmentFacilitator",
                                "textResource": "RiskAssessmentFacilitatorField",
                                "isRequired": true,
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "filter": {
                                    "defaultAllowedRoles": [
                                        "Level2RiskAssessor"
                                    ],
                                    "specificFilters": []
                                },
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_3"
                            },
                            {
                                "name": "workItemVariant",
                                "copyParticipation": "Clone",
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_4"
                            },
                            {
                                "name": "site",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_5"
                            },
                            {
                                "name": "workingLocations",
                                "copyParticipation": "Clone",
                                "workItemFilter": [
                                    {
                                        "kind": "PermitTemplate",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_6"
                            },
                            {
                                "name": "affectedLocations",
                                "copyParticipation": "Clone",
                                "workItemFilter": [
                                    {
                                        "kind": "PermitTemplate",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_7"
                            },
                            {
                                "name": "workObjects",
                                "copyParticipation": "Clone",
                                "allowMultipleEquipment": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_8"
                            },
                            {
                                "name": "title",
                                "copyParticipation": "Clone",
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_9"
                            },
                            {
                                "name": "workDescription",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_10"
                            },
                            {
                                "name": "numberOfPersons",
                                "copyParticipation": "Clone",
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_11"
                            },
                            {
                                "name": "text",
                                "key": "PMReference",
                                "numberOfLines": "1",
                                "copyParticipation": "Clone",
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_12"
                            },
                            {
                                "name": "text",
                                "key": "ToolsToBeUsed",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_13"
                            },
                            {
                                "name": "text",
                                "key": "EquipmentToBeUsed",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_14"
                            },
                            {
                                "name": "discipline",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_15"
                            },
                            {
                                "name": "isolationCertificateRequirement",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_16"
                            },
                            {
                                "name": "textCheckBox",
                                "key": "RestrictedWorkSpace",
                                "copyParticipation": "Clone",
                                "onlyVisibleForRisksOfWork": "Normal",
                                "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_17"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "SpecifyPermitHazards",
                        "fields": [
                            {
                                "name": "text",
                                "key": "SIMOPS",
                                "copyParticipation": "Clone",
                                "uniqueKey": "PermitTemplate_SpecifyPermitHazards_0"
                            },
                            {
                                "name": "gasMeasurementRequirements",
                                "hiddenFor": "ColdWork, HotWorkSparkPotential, BreakingContainment",
                                "copyParticipation": "Clone",
                                "uniqueKey": "PermitTemplate_SpecifyPermitHazards_1"
                            },
                            {
                                "name": "riskAssessmentTasks",
                                "readOnlyIfNoRiskLevelSelected": true,
                                "categories": "PermitHazards",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitHazards_2"
                            },
                            {
                                "name": "highestResidualRisk",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "uniqueKey": "PermitTemplate_SpecifyPermitHazards_3"
                            },
                            {
                                "name": "residualRisk",
                                "onlyVisibleForRiskAssessmentLevel": "Level1",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "PermitTemplate_SpecifyPermitHazards_4"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "ApproveTemplate",
                        "fields": [
                            {
                                "name": "controlMeasures",
                                "categories": "SupplementaryCertificates",
                                "textResource": "SupplementaryCertificatesControlMeasures",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "PermitTemplate_ApproveTemplate_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApprovePermitTemplateByRiskAssessmentTeam",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApprovePermitTemplateByRiskAssessmentFacilitator",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveDraftTemplateByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveDraftTemplateBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "PermitTemplate_ApproveTemplate_1"
                            },
                            {
                                "name": "revertState",
                                "toState": "Requesting",
                                "uniqueKey": "PermitTemplate_ApproveTemplate_2"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "RevalidateTemplate",
                        "fields": [
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AuthorizeTemplateBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true,
                                                "hideShiftEndWarning": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "PermitTemplate_RevalidateTemplate_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RevalidatePermitTemplateBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true,
                                                "hideShiftEndWarning": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "PermitTemplate_RevalidateTemplate_1"
                            },
                            {
                                "name": "revalidationSignaturesPeriod",
                                "uniqueKey": "PermitTemplate_RevalidateTemplate_2"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Approved",
                            "Live",
                            "Suspended"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ],
                        "unsignedSignaturesAtTop": true
                    },
                    {
                        "id": "CloseTemplate",
                        "fields": [
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RevertPermitTemplateForModification",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "PermitTemplate_CloseTemplate_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ClosePermitTemplate",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "PermitTemplate_CloseTemplate_1"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Live"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ApproveTemplate",
                        "optionalInStates": [
                            "Requesting"
                        ],
                        "titleResource": "ApproveAuthorizePermitTemplateAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "RevalidateTemplate",
                        "optionalInStates": [
                            "Approved"
                        ],
                        "titleResource": "AuthorizeOrReauthorizePermitTemplateAction"
                    },
                    {
                        "key": "addSignature",
                        "for": "RevalidatePermitTemplateBySiteAuthority",
                        "titleResource": "RevalidatePermitTemplateBySiteAuthority",
                        "actionConditionName": "PermitTemplate_2",
                        "fields": [
                            {
                                "name": "period",
                                "readonly": false
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "ClosePermitTemplate",
                        "titleResource": "ClosePermitTemplate",
                        "actionConditionName": "PermitTemplate_3",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "deleteWorkItem",
                        "optionalInStates": [
                            "Requesting"
                        ],
                        "titleResource": "DeletePermitTemplateAction"
                    },
                    {
                        "key": "addCounterSignature",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    },
                    {
                        "key": "copyWorkItem",
                        "titleResource": "CopyPermitTemplateAction"
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkPermitTemplateAsCopyable",
                        "visibleWhenReadOnly": true,
                        "titleResource": "MarkPermitTemplateAsCopyable",
                        "actionConditionName": "PermitTemplate_7",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkAsNotCopyable",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "createFromTemplate",
                        "optionalInStates": [
                            "Active"
                        ],
                        "titleResource": "CreatePermitLRPFromTemplateAction",
                        "creationState": "Approved"
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchPermitTemplates",
                        "command": "SearchCertificates"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "FrontPage",
                        "onlyForVariant": null
                    },
                    {
                        "name": "Full",
                        "onlyForVariant": null
                    },
                    {
                        "name": "All",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "All"
            }
        },
        {
            "name": "Operation",
            "type": "Permit",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "NonPermittedWork",
                    "rank": null
                },
                {
                    "name": "RiskAssessedProcedure",
                    "rank": null
                },
                {
                    "name": "TemporaryEquipment",
                    "rank": null
                },
                {
                    "name": "RoadClosure",
                    "rank": null
                },
                {
                    "name": "Habitat",
                    "rank": null
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "AwaitingActivation"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Revalidate"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [],
            "workspace": {
                "kind": "Operation",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Live",
                        "states": [
                            "Active",
                            "Revalidate",
                            "AwaitingActivation"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "riskAssessment",
                        "kind": "SafetyOverrideRiskAssessment",
                        "allowTemplateUsage": true,
                        "allowExistingUsage": true,
                        "allowNewUsage": false,
                        "templateLabelResource": "AttachTemplateButtonText"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workingLocation",
                        "name": "workingLocation"
                    },
                    {
                        "key": "5_systemOrEquipmentDescription",
                        "name": "systemOrEquipmentDescription"
                    },
                    {
                        "key": "6_signedByUsername",
                        "name": "signedByUsername"
                    },
                    {
                        "key": "7_dateRange",
                        "name": "dateRange"
                    },
                    {
                        "key": "8_isDeleted",
                        "name": "isDeleted"
                    },
                    {
                        "key": "9_workItemVariant",
                        "name": "workItemVariant"
                    },
                    {
                        "key": "10_hasAttachment",
                        "name": "hasAttachment",
                        "kind": "SafetyOverrideRiskAssessment"
                    },
                    {
                        "key": "11_workOrderDisplay",
                        "name": "workOrderDisplay"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage",
                        "width": "30"
                    },
                    {
                        "name": "WorkItemVariant",
                        "width": "120"
                    },
                    {
                        "name": "RegistrationNumber",
                        "width": "180"
                    },
                    {
                        "name": "Status",
                        "width": "180"
                    },
                    {
                        "name": "Title",
                        "width": "300"
                    },
                    {
                        "name": "Location",
                        "width": "180"
                    },
                    {
                        "name": "PlannedStartDateTime",
                        "width": "100"
                    },
                    {
                        "name": "WorkOrderDisplay",
                        "width": "140"
                    }
                ],
                "workOrder": {
                    "denyDirectPermitCreation": false,
                    "denyCreateFromTemplate": true,
                    "denyCreateFromQuestionnaire": true,
                    "workOrderSearchFields": [
                        {
                            "key": "0_workOrderDisplay",
                            "name": "workOrderDisplay"
                        },
                        {
                            "key": "1_workOrderTitle",
                            "name": "workOrderTitle"
                        },
                        {
                            "key": "2_workOrderDescription",
                            "name": "workOrderDescription"
                        },
                        {
                            "key": "3_workOrderDateRange",
                            "name": "workOrderDateRange"
                        },
                        {
                            "key": "4_workOrderSite",
                            "name": "workOrderSite"
                        }
                    ],
                    "workOrderColumns": [
                        {
                            "name": "Display"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "Description"
                        },
                        {
                            "name": "PlannedStartDate"
                        },
                        {
                            "name": "PlannedEndDate"
                        },
                        {
                            "name": "Site"
                        }
                    ]
                },
                "wizardSteps": [
                    {
                        "id": "DraftOperation",
                        "fields": [
                            {
                                "name": "lessonsLearnedNotice",
                                "onlyVisibleWhenCopying": true,
                                "uniqueKey": "Operation_DraftOperation_0"
                            },
                            {
                                "name": "workItemVariant",
                                "isRequired": true,
                                "uniqueKey": "Operation_DraftOperation_1"
                            },
                            {
                                "name": "workOrders",
                                "uniqueKey": "Operation_DraftOperation_2"
                            },
                            {
                                "name": "title",
                                "uniqueKey": "Operation_DraftOperation_3"
                            },
                            {
                                "name": "site",
                                "isRequired": true,
                                "uniqueKey": "Operation_DraftOperation_4"
                            },
                            {
                                "name": "workingLocations",
                                "isRequired": true,
                                "workItemFilter": [
                                    {
                                        "kind": "Operation",
                                        "workItemState": [
                                            "Active"
                                        ]
                                    }
                                ],
                                "uniqueKey": "Operation_DraftOperation_5"
                            },
                            {
                                "name": "workDescription",
                                "isRequired": true,
                                "uniqueKey": "Operation_DraftOperation_6"
                            },
                            {
                                "name": "workingPeriod",
                                "isRequired": true,
                                "ignoreWorkingHours": false,
                                "uniqueKey": "Operation_DraftOperation_7"
                            },
                            {
                                "name": "text",
                                "key": "RAPReference",
                                "hiddenFor": "NonPermittedWork,TemporaryEquipment,RoadClosure,Habitat",
                                "uniqueKey": "Operation_DraftOperation_8"
                            },
                            {
                                "name": "personalIsolationIsAllowed",
                                "hiddenFor": "NonPermittedWork,TemporaryEquipment,RoadClosure,Habitat",
                                "uniqueKey": "Operation_DraftOperation_9"
                            },
                            {
                                "name": "numberOfPersons",
                                "isRequired": true,
                                "uniqueKey": "Operation_DraftOperation_10"
                            },
                            {
                                "name": "residualRisk",
                                "isRequired": true,
                                "uniqueKey": "Operation_DraftOperation_11"
                            },
                            {
                                "name": "taskMonitoring",
                                "uniqueKey": "Operation_DraftOperation_12"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AuthorizeOperation",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AuthorizeNPWByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "readonly": false
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveRAPByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "readonly": false
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveRAPByPerformingAuthority",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "readonly": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Operation_DraftOperation_13"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Active",
                            "Revalidate",
                            "AwaitingActivation"
                        ]
                    },
                    {
                        "id": "ClosingOperation",
                        "fields": [
                            {
                                "name": "lessonsLearned",
                                "allowEditingAlways": true,
                                "readOnlyWhenClosed": true,
                                "uniqueKey": "Operation_ClosingOperation_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseOperation",
                                        "fields": [
                                            {
                                                "name": "approveLessonsLearned",
                                                "requireAnswerForDeclaration": false,
                                                "resourceKey": "Label_LessonsLearnedReviewed"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseNPW",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseRAP",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Operation_ClosingOperation_1"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Live"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Active",
                            "Revalidate",
                            "AwaitingActivation"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftOperation",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "AuthorizeOperationAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ClosingOperation",
                        "optionalInStates": [
                            "Active"
                        ],
                        "requiredInStates": [
                            "Revalidate"
                        ],
                        "titleResource": "CloseOperationAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftOperation",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "titleResource": "SetTaskMonitoringAction"
                    },
                    {
                        "key": "deleteWorkItem",
                        "titleResource": "DeleteOperationAction"
                    },
                    {
                        "key": "addCounterSignature",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    },
                    {
                        "key": "startAudit",
                        "kind": "WorkItemAudit",
                        "variant": "ProceduresAudit",
                        "onlyVisibleForVariants": [
                            "RiskAssessedProcedure"
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchOperation",
                        "command": "SearchCertificates"
                    },
                    {
                        "id": "CCR",
                        "command": "ShowCcr"
                    },
                    {
                        "id": "TaskMonitoringOverview",
                        "command": "ShowTaskMonitoringOverview"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "Full",
                        "onlyForVariant": null
                    },
                    {
                        "name": "All",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "All"
            }
        },
        {
            "name": "Isolation",
            "type": "IsolationCertificate",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "DefaultIsolationCertificate",
                    "rank": 1
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "DesignComplete"
                },
                {
                    "name": "WaitingForAuthorization"
                },
                {
                    "name": "IsolationInProgress"
                },
                {
                    "name": "IsolationInPlace"
                },
                {
                    "name": "IsolationInPlaceForLongTerm"
                },
                {
                    "name": "DeisolationInProgress"
                },
                {
                    "name": "Deisolated"
                },
                {
                    "name": "RequestedForSanctionToTest"
                },
                {
                    "name": "IsolationInPlaceForSanctionToTest"
                },
                {
                    "name": "Modification"
                },
                {
                    "name": "RequestedForReisolation"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "DeisolationInProgress",
                    "to": "Modification",
                    "roles": "AreaAuthority, ElectricalLowVoltageIsolatingAuthority,ElectricalLowVoltageLevel1IsolatingAuthority, ElectricalHighVoltageIsolatingAuthority, ControlIsolatingAuthority, ProcessIsolatingAuthority"
                },
                {
                    "from": "DesignComplete",
                    "to": "Requesting",
                    "roles": "AreaAuthority,ElectricalLowVoltageIsolatingAuthority,ElectricalLowVoltageLevel1IsolatingAuthority, ElectricalHighVoltageIsolatingAuthority, ControlIsolatingAuthority, ProcessIsolatingAuthority"
                },
                {
                    "from": "WaitingForAuthorization",
                    "to": "DesignComplete",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "IsolationInProgress",
                    "to": "Requesting",
                    "roles": "AreaAuthority,ElectricalLowVoltageIsolatingAuthority,ElectricalLowVoltageLevel1IsolatingAuthority, ElectricalHighVoltageIsolatingAuthority, ControlIsolatingAuthority, ProcessIsolatingAuthority"
                },
                {
                    "from": "IsolationInPlace",
                    "to": "Requesting",
                    "roles": "AreaAuthority"
                },
                {
                    "from": "RequestedForReisolation",
                    "to": "Modification"
                },
                {
                    "from": "IsolationInPlaceForSanctionToTest",
                    "to": "Modification"
                },
                {
                    "from": "Deisolated",
                    "to": "Modification"
                }
            ],
            "workspace": {
                "kind": "Isolation",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting",
                            "DesignComplete"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Approved",
                        "states": [
                            "WaitingForAuthorization"
                        ]
                    },
                    {
                        "name": "Isolating",
                        "states": [
                            "IsolationInProgress",
                            "RequestedForReisolation"
                        ]
                    },
                    {
                        "name": "Live",
                        "states": [
                            "IsolationInPlace",
                            "IsolationInPlaceForLongTerm",
                            "RequestedForSanctionToTest",
                            "IsolationInPlaceForSanctionToTest"
                        ]
                    },
                    {
                        "name": "Deisolating",
                        "states": [
                            "DeisolationInProgress"
                        ]
                    },
                    {
                        "name": "Deisolated",
                        "states": [
                            "Deisolated"
                        ]
                    },
                    {
                        "name": "Amendments",
                        "states": [
                            "Modification"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "riskAssessment",
                        "kind": "TaskRiskAssessment",
                        "defaultLevel": "Level2"
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "OperationalRiskAssessment",
                        "defaultLevel": "Level2",
                        "allowExistingUsage": true
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "SafetyOverrideRiskAssessment",
                        "allowTemplateUsage": true,
                        "allowExistingUsage": true,
                        "allowNewUsage": false,
                        "templateLabelResource": "AttachTemplateButtonText"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workingLocation",
                        "name": "workingLocation"
                    },
                    {
                        "key": "5_systemOrEquipmentDescription",
                        "name": "systemOrEquipmentDescription"
                    },
                    {
                        "key": "6_signedByUsername",
                        "name": "signedByUsername"
                    },
                    {
                        "key": "7_dateRange",
                        "name": "dateRange"
                    },
                    {
                        "key": "8_isDeleted",
                        "name": "isDeleted"
                    },
                    {
                        "key": "9_longTermIsolation",
                        "name": "longTermIsolation",
                        "options": "LtiOnly,LtiUpForAudit,LtiUpForReview,LtiUpForAuditOrReview"
                    },
                    {
                        "key": "10_isAudited",
                        "name": "isAudited"
                    },
                    {
                        "key": "11_hasPressureBuildUpIsolation",
                        "name": "hasPressureBuildUpIsolation"
                    },
                    {
                        "key": "12_hasUti",
                        "name": "hasUti"
                    },
                    {
                        "key": "13_hasAttachment",
                        "name": "hasAttachment",
                        "kind": "SafetyOverrideRiskAssessment"
                    },
                    {
                        "key": "14_compliesWithIsolationStandardAndLtiPositive",
                        "name": "compliesWithIsolationStandardAndLtiPositive"
                    },
                    {
                        "key": "15_isPositive",
                        "name": "isPositive"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage"
                    },
                    {
                        "name": "RegistrationNumber"
                    },
                    {
                        "name": "Status"
                    },
                    {
                        "name": "Title"
                    },
                    {
                        "name": "PlannedStartDateTime"
                    },
                    {
                        "name": "IsolationInPlaceDateTime"
                    },
                    {
                        "name": "CompliesWithIsolationStandardAndLtiPositive"
                    },
                    {
                        "name": "IsPositive"
                    },
                    {
                        "name": "IsolationPointCount"
                    },
                    {
                        "name": "HasRiskAssessmentLevel2"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "SpecifyIsolationValues",
                        "fields": [
                            {
                                "name": "lessonsLearnedNotice",
                                "onlyVisibleWhenCopying": true,
                                "uniqueKey": "Isolation_SpecifyIsolationValues_0"
                            },
                            {
                                "name": "workingPeriod",
                                "isRequired": true,
                                "ignoreWorkingHours": true,
                                "uniqueKey": "Isolation_SpecifyIsolationValues_1"
                            },
                            {
                                "name": "site",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Isolation_SpecifyIsolationValues_2"
                            },
                            {
                                "name": "workingLocations",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "workItemFilter": [
                                    {
                                        "kind": "Isolation",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_SpecifyIsolationValues_3"
                            },
                            {
                                "name": "workObjects",
                                "copyParticipation": "CloneAndTemplate",
                                "allowMultipleEquipment": true,
                                "uniqueKey": "Isolation_SpecifyIsolationValues_4"
                            },
                            {
                                "name": "title",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Isolation_SpecifyIsolationValues_5"
                            },
                            {
                                "name": "workOrderNumber",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Isolation_SpecifyIsolationValues_6"
                            },
                            {
                                "name": "workDescription",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "maxLength": "240",
                                "uniqueKey": "Isolation_SpecifyIsolationValues_7"
                            },
                            {
                                "name": "text",
                                "key": "IsolationDescription",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "Isolation_SpecifyIsolationValues_8"
                            },
                            {
                                "name": "contingencyPlan",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Isolation_SpecifyIsolationValues_9"
                            },
                            {
                                "name": "lockoutKey",
                                "uniqueKey": "Isolation_SpecifyIsolationValues_10"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "WaitingForAuthorization",
                            "IsolationInProgress",
                            "RequestedForReisolation",
                            "IsolationInPlace",
                            "IsolationInPlaceForLongTerm",
                            "RequestedForSanctionToTest",
                            "IsolationInPlaceForSanctionToTest",
                            "DeisolationInProgress",
                            "Deisolated",
                            "Modification"
                        ]
                    },
                    {
                        "id": "SpecifyIsolationInstructionPlan",
                        "fields": [
                            {
                                "name": "isolationInstructionPlan",
                                "copyParticipation": "CloneAndTemplate",
                                "mode": "DesignIsolation",
                                "shownInstructionTypes": "all",
                                "copyNewActionsToDeisolation": true,
                                "copyInitialIsolationCommentsToDeisolation": true,
                                "columns": [
                                    {
                                        "name": "sequenceNumber"
                                    },
                                    {
                                        "name": "tagNumber"
                                    },
                                    {
                                        "name": "equipment"
                                    },
                                    {
                                        "name": "isolationType"
                                    },
                                    {
                                        "name": "isolationMethod"
                                    },
                                    {
                                        "name": "isolatedState",
                                        "emphasized": true
                                    },
                                    {
                                        "name": "notIsolatedState",
                                        "emphasized": true
                                    },
                                    {
                                        "name": "comments"
                                    },
                                    {
                                        "name": "pbu"
                                    },
                                    {
                                        "name": "stt"
                                    },
                                    {
                                        "name": "uti",
                                        "forActions": true
                                    },
                                    {
                                        "name": "verificationRequired"
                                    }
                                ],
                                "uniqueKey": "Isolation_SpecifyIsolationInstructionPlan_0"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "WaitingForAuthorization",
                            "IsolationInProgress",
                            "RequestedForReisolation",
                            "IsolationInPlace",
                            "IsolationInPlaceForLongTerm",
                            "RequestedForSanctionToTest",
                            "IsolationInPlaceForSanctionToTest",
                            "DeisolationInProgress",
                            "Deisolated",
                            "Modification"
                        ]
                    },
                    {
                        "id": "SpecifyDeisolationInstructionPlan",
                        "fields": [
                            {
                                "name": "isolationInstructionPlan",
                                "copyParticipation": "CloneAndTemplate",
                                "mode": "DesignDeisolation",
                                "shownInstructionTypes": "all",
                                "columns": [
                                    {
                                        "name": "sequenceNumber"
                                    },
                                    {
                                        "name": "tagNumber"
                                    },
                                    {
                                        "name": "equipment"
                                    },
                                    {
                                        "name": "isolationType"
                                    },
                                    {
                                        "name": "isolationMethod"
                                    },
                                    {
                                        "name": "isolatedState",
                                        "emphasized": true
                                    },
                                    {
                                        "name": "notIsolatedState",
                                        "emphasized": true
                                    },
                                    {
                                        "name": "comments"
                                    },
                                    {
                                        "name": "pbu"
                                    },
                                    {
                                        "name": "stt"
                                    },
                                    {
                                        "name": "uti"
                                    },
                                    {
                                        "name": "verificationRequired"
                                    }
                                ],
                                "uniqueKey": "Isolation_SpecifyDeisolationInstructionPlan_0"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "WaitingForAuthorization",
                            "IsolationInProgress",
                            "RequestedForReisolation",
                            "IsolationInPlace",
                            "IsolationInPlaceForLongTerm",
                            "RequestedForSanctionToTest",
                            "IsolationInPlaceForSanctionToTest",
                            "DeisolationInProgress",
                            "Deisolated",
                            "Modification"
                        ]
                    },
                    {
                        "id": "DraftIsolationCertificate",
                        "fields": [
                            {
                                "name": "isolationSchemeAssessments",
                                "copyParticipation": "Template",
                                "isRequired": true,
                                "editPermissions": {
                                    "ElectricalLowVoltageLevel1": [
                                        "*"
                                    ],
                                    "ElectricalHighVoltage": [
                                        "*"
                                    ],
                                    "ElectricalLowVoltage": [
                                        "*"
                                    ],
                                    "Control": [
                                        "*"
                                    ],
                                    "Process": [
                                        "*"
                                    ]
                                },
                                "uniqueKey": "Isolation_DraftIsolationCertificate_0"
                            },
                            {
                                "name": "attachWorkItem",
                                "kind": "TaskRiskAssessment",
                                "isRequired": true,
                                "uniqueKey": "Isolation_DraftIsolationCertificate_1"
                            },
                            {
                                "name": "residualRisk",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "Isolation_DraftIsolationCertificate_2"
                            },
                            {
                                "name": "multiValue",
                                "key": "RequiresAbnormalOperatingCondition",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "defaultValue": null,
                                "allowedValues": [
                                    "Yes",
                                    "No"
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_3"
                            },
                            {
                                "name": "lessonsLearned",
                                "allowEditingAlways": true,
                                "onlyVisibleForStored": true,
                                "uniqueKey": "Isolation_DraftIsolationCertificate_4"
                            },
                            {
                                "name": "taskMonitoring",
                                "uniqueKey": "Isolation_DraftIsolationCertificate_5"
                            },
                            {
                                "name": "signatureList",
                                "titleResource": "SignatureList_IsolationApproval",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteIsolationCertificateDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteControlIsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteElectricalLowVoltageLevel1IsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteElectricalLowVoltageIsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteElectricalHighVoltageIsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteProcessIsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestIsolationCertificate",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_6"
                            },
                            {
                                "name": "signatureList",
                                "titleResource": "SignatureList_Isolation",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestIsolations",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "RequestIsolation",
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CancelIsolationRequest",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "CancelRequestedIsolations",
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ConfirmElectricalLowVoltageIsolations, ConfirmElectricalLowVoltageLevel1Isolations, ConfirmElectricalHighVoltageIsolations, ConfirmControlIsolations, ConfirmProcessIsolations, ConfirmIsolationActionPerformed",
                                        "titleResource": "ConfirmIsolations",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "ConfirmIsolation",
                                                "autoSelectPreviousRows": false,
                                                "utiUsage": "Point,Action",
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CrossCheckIsolations",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "CrossCheckIsolation",
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ConfirmAllIsolationsInPlace",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "ConfirmAllIsolationsInPlace",
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_7"
                            },
                            {
                                "name": "signatureList",
                                "titleResource": "SignatureList_LongTermIsolation",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "MoveToLongTerm",
                                        "fields": [
                                            {
                                                "name": "positiveIsolation"
                                            },
                                            {
                                                "name": "moveIsolationCertificateToLongTerm"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": true
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AuditLti",
                                        "skipClientValidation": true,
                                        "fields": [
                                            {
                                                "name": "selfDeclarationDeterminingRemarksRequirement",
                                                "textResource": "AuditLtiDeclaration"
                                            },
                                            {
                                                "name": "positiveIsolation"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ReviewLti",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "MoveFromLongTerm",
                                        "fields": [
                                            {
                                                "name": "signatureTextMessage",
                                                "textResource": "ConfirmThatAllIsolationsAreStillInPlaceDeclaration"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_8"
                            },
                            {
                                "name": "signatureList",
                                "titleResource": "SignatureList_Amendment",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AmendIsolationPlan",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteAmendments",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_9"
                            },
                            {
                                "name": "signatureList",
                                "titleResource": "SignatureList_DeisolationForTest",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestDeisolationsForSanctionToTest",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "RequestDeisolationForSanctionToTest",
                                                "swapDeIsolatedAndIsolatedState": true,
                                                "autoSelectPreviousRows": false
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ConfirmElectricalLowVoltageDeisolationsForSanctionToTest,ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest,ConfirmElectricalHighVoltageDeisolationsForSanctionToTest,ConfirmControlDeisolationsForSanctionToTest,ConfirmProcessDeisolationsForSanctionToTest",
                                        "titleResource": "ConfirmDeisolationsForSanctionToTest",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "ConfirmDeisolationForSanctionToTest",
                                                "swapDeIsolatedAndIsolatedState": true,
                                                "autoSelectPreviousRows": false
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CrossCheckDeisolationsForSanctionToTest",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "CrossCheckDeisolation",
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "VerifyDeisolationForSanctionToTest",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_10"
                            },
                            {
                                "name": "signatureList",
                                "titleResource": "SignatureList_Reisolation",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestReisolations",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "RequestReisolation",
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ConfirmElectricalLowVoltageReisolations,ConfirmElectricalLowVoltageLevel1Reisolations,ConfirmElectricalHighVoltageReisolations,ConfirmControlReisolations,ConfirmProcessReisolations",
                                        "titleResource": "ConfirmReisolations",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "ConfirmReisolation",
                                                "swapDeIsolatedAndIsolatedState": true,
                                                "utiUsage": "Point,Action"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CrossCheckReisolations",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "CrossCheckIsolation",
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ConfirmAllReisolationsInPlace",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_11"
                            },
                            {
                                "name": "signatureList",
                                "titleResource": "SignatureList_Deisolation",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestDeisolations",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "RequestDeisolation",
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CancelDeisolationRequest",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "CancelRequestedDeisolations",
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "titleResource": "ConfirmDeisolations",
                                        "signatureTypes": "ConfirmElectricalLowVoltageDeisolations,ConfirmElectricalLowVoltageLevel1Deisolations,ConfirmElectricalHighVoltageDeisolations, ConfirmProcessDeisolations,ConfirmControlDeisolations, ConfirmDeisolationActionPerformed",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "ConfirmDeisolation",
                                                "enableBarcodeScanning": true,
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CrossCheckDeisolations",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "CrossCheckDeisolation",
                                                "autoSelectPreviousRows": false,
                                                "swapDeIsolatedAndIsolatedState": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_12"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseIsolationCertificate",
                                        "fields": [
                                            {
                                                "name": "approveLessonsLearned",
                                                "requireAnswerForDeclaration": false,
                                                "resourceKey": "Label_LessonsLearnedReviewed"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseIsolationCertificateCompletelyDeisolatedForTest",
                                        "fields": [
                                            {
                                                "name": "approveLessonsLearned",
                                                "requireAnswerForDeclaration": false,
                                                "resourceKey": "Label_LessonsLearnedReviewed"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Isolation_DraftIsolationCertificate_13"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "DesignComplete",
                                "toState": "Requesting",
                                "uniqueKey": "Isolation_DraftIsolationCertificate_14"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "WaitingForAuthorization",
                                "toState": "DesignComplete",
                                "textResource": "RevertICCFieldDescription",
                                "uniqueKey": "Isolation_DraftIsolationCertificate_15"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft",
                            "Approved",
                            "Isolating",
                            "Live",
                            "Deisolating",
                            "Deisolated"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "WaitingForAuthorization",
                            "IsolationInProgress",
                            "RequestedForReisolation",
                            "IsolationInPlace",
                            "IsolationInPlaceForLongTerm",
                            "RequestedForSanctionToTest",
                            "IsolationInPlaceForSanctionToTest",
                            "DeisolationInProgress",
                            "Deisolated",
                            "Modification"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftIsolationCertificate",
                        "requiredInStates": [
                            "Requesting",
                            "Modification"
                        ],
                        "titleResource": "FinalizeIsolationRequestAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftIsolationCertificate",
                        "requiredInStates": [
                            "DesignComplete"
                        ],
                        "titleResource": "ApproveIDPAction"
                    },
                    {
                        "key": "addSignature",
                        "for": "RequestIsolations",
                        "titleResource": "RequestIsolations",
                        "actionConditionName": "Isolation_2",
                        "fields": [
                            {
                                "name": "isolationInstructionsSelector",
                                "signingMode": "RequestIsolation",
                                "autoSelectPreviousRows": false,
                                "swapDeIsolatedAndIsolatedState": true,
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addCounterSignature",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "Print{0}IsolationsRequestedForIsolationAction",
                        "reportName": "RequestedIsolations",
                        "isolationState": "IsolationRequested"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintElectricalLowVoltageIsolationsRequestedForIsolationTagsAction",
                        "reportName": "ElectricalLowVoltageIsolationTag",
                        "isolationState": "IsolationRequested",
                        "isolationTypes": "ElectricalLowVoltage"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintElectricalLowVoltageLevel1IsolationsRequestedForIsolationTagsAction",
                        "reportName": "ElectricalLowVoltageLevel1IsolationTag",
                        "isolationState": "IsolationRequested",
                        "isolationTypes": "ElectricalLowVoltageLevel1"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintElectricalHighVoltageIsolationsRequestedForIsolationTagsAction",
                        "reportName": "ElectricalLowVoltageIsolationTag",
                        "isolationState": "IsolationRequested",
                        "isolationTypes": "ElectricalHighVoltage"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintProcessIsolationsRequestedForIsolationTagsAction",
                        "reportName": "ProcessIsolationTag",
                        "isolationState": "IsolationRequested",
                        "isolationTypes": "Process"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintControlIsolationsRequestedForIsolationTagsAction",
                        "reportName": "ControlIsolationTag",
                        "isolationState": "IsolationRequested",
                        "isolationTypes": "Control"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "Print{0}IsolationsRequestedForIsolationAction",
                        "reportName": "RequestedIsolations",
                        "isolationState": "Isolated"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintElectricalLowVoltageIsolationsRequestedForIsolationTagsAction",
                        "reportName": "ElectricalLowVoltageIsolationTag",
                        "isolationState": "Isolated",
                        "isolationTypes": "ElectricalLowVoltage"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintElectricalLowVoltageLevel1IsolationsRequestedForIsolationTagsAction",
                        "reportName": "ElectricalLowVoltageLevel1IsolationTag",
                        "isolationState": "Isolated",
                        "isolationTypes": "ElectricalLowVoltageLevel1"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintElectricalHighVoltageIsolationsRequestedForIsolationTagsAction",
                        "reportName": "ElectricalHighVoltageIsolationTag",
                        "isolationState": "Isolated",
                        "isolationTypes": "ElectricalHighVoltage"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintControlIsolationsRequestedForIsolationTagsAction",
                        "reportName": "ControlIsolationTag",
                        "isolationState": "Isolated",
                        "isolationTypes": "Control"
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "PrintProcessIsolationsRequestedForIsolationTagsAction",
                        "reportName": "ProcessIsolationTag",
                        "isolationState": "Isolated",
                        "isolationTypes": "Process"
                    },
                    {
                        "key": "printAllIsolations",
                        "titleResource": "PrintAllIsolationTagsAction",
                        "optionalInStates": [
                            "WaitingForAuthorization",
                            "IsolationInProgress",
                            "IsolationInPlace",
                            "IsolationInPlaceForLongTerm",
                            "RequestedForSanctionToTest",
                            "IsolationInPlaceForSanctionToTest"
                        ]
                    },
                    {
                        "key": "printIsolations",
                        "titleResource": "Print{0}IsolationsRequestedForIsolationAction",
                        "reportName": "RequestedIsolations",
                        "isolationState": "NotIsolated",
                        "optionalInStates": [
                            "WaitingForAuthorization"
                        ]
                    },
                    {
                        "key": "confirmIsolations",
                        "titleResource": "ConfirmIsolations",
                        "swapDeIsolatedAndIsolatedState": true,
                        "showUtiForActions": true,
                        "autoSelectPreviousRows": false
                    },
                    {
                        "key": "addSignature",
                        "for": "AmendIsolationPlan",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "CompleteAmendments",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "ConfirmAllIsolationsInPlace",
                        "titleResource": "ConfirmAllIsolationsInPlaceAction",
                        "actionConditionName": "Isolation_21",
                        "fields": [
                            {
                                "name": "isolationInstructionsSelector",
                                "signingMode": "ConfirmAllIsolationsInPlace",
                                "swapDeIsolatedAndIsolatedState": true,
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "CrossCheckIsolations",
                        "titleResource": "CrossCheckIsolationsAction",
                        "actionConditionName": "Isolation_22",
                        "fields": [
                            {
                                "name": "isolationInstructionsSelector",
                                "signingMode": "CrossCheckIsolation",
                                "autoSelectPreviousRows": false,
                                "swapDeIsolatedAndIsolatedState": true,
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "CrossCheckDeisolations",
                        "titleResource": "CrossCheckDeisolationsAction",
                        "actionConditionName": "Isolation_23",
                        "fields": [
                            {
                                "name": "isolationInstructionsSelector",
                                "signingMode": "CrossCheckDeisolation",
                                "autoSelectPreviousRows": false,
                                "swapDeIsolatedAndIsolatedState": true,
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "CrossCheckDeisolationsForSanctionToTest",
                        "titleResource": "CrossCheckDeisolationsForSanctionToTestAction",
                        "actionConditionName": "Isolation_24",
                        "fields": [
                            {
                                "name": "isolationInstructionsSelector",
                                "signingMode": "CrossCheckDeisolation",
                                "autoSelectPreviousRows": false,
                                "swapDeIsolatedAndIsolatedState": true,
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "VerifyDeisolationForSanctionToTest",
                        "titleResource": "VerifyDeisolationForSanctionToTestAction",
                        "actionConditionName": "Isolation_25",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "CrossCheckReisolations",
                        "titleResource": "CrossCheckReisolationsAction",
                        "actionConditionName": "Isolation_26",
                        "fields": [
                            {
                                "name": "isolationInstructionsSelector",
                                "signingMode": "CrossCheckIsolation",
                                "autoSelectPreviousRows": false,
                                "swapDeIsolatedAndIsolatedState": true,
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "ConfirmAllReisolationsInPlace",
                        "actionConditionName": "Isolation_27",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "RequestDeisolations",
                        "titleResource": "RequestDeisolations",
                        "actionConditionName": "Isolation_28",
                        "fields": [
                            {
                                "name": "isolationInstructionsSelector",
                                "signingMode": "RequestDeisolation",
                                "autoSelectPreviousRows": false,
                                "swapDeIsolatedAndIsolatedState": true,
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "requestDeisolationsForSanctionToTest"
                    },
                    {
                        "key": "confirmDeisolations",
                        "titleResource": "ConfirmDeisolations",
                        "enableBarcodeScanning": true,
                        "swapDeIsolatedAndIsolatedState": true,
                        "autoSelectPreviousRows": false
                    },
                    {
                        "key": "confirmDeisolationForSanctionToTest",
                        "swapDeIsolatedAndIsolatedState": true
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftIsolationCertificate",
                        "optionalInStates": [
                            "IsolationInPlaceForSanctionToTest",
                            "Deisolated"
                        ],
                        "titleResource": "RequestReisolationsAction"
                    },
                    {
                        "key": "confirmReisolations",
                        "swapDeIsolatedAndIsolatedState": true
                    },
                    {
                        "key": "addSignature",
                        "for": "MoveToLongTerm",
                        "titleResource": "MoveToLongTermAction",
                        "actionConditionName": "Isolation_34",
                        "fields": [
                            {
                                "name": "positiveIsolation",
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "moveIsolationCertificateToLongTerm",
                                "uniqueKey": "Isolation_undefined_1"
                            },
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "MoveFromLongTerm",
                        "actionConditionName": "Isolation_35",
                        "fields": [
                            {
                                "name": "signatureTextMessage",
                                "textResource": "ConfirmThatAllIsolationsAreStillInPlaceDeclaration",
                                "uniqueKey": "Isolation_undefined_0"
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "auditLti",
                        "selfDeclarationResource": "AuditLtiDeclaration",
                        "requiredResource": "AuditLtiAction",
                        "optionalResource": "AuditLtiExpiredTitle",
                        "selfDeclarationDeterminesRemarksRequirement": true,
                        "fields": [
                            {
                                "name": "positiveIsolation",
                                "uniqueKey": "Isolation_undefined_0"
                            }
                        ]
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftIsolationCertificate",
                        "titleResource": "CloseIsolationCertificate",
                        "requiredInStates": [
                            "Deisolated"
                        ]
                    },
                    {
                        "key": "copyWorkItem",
                        "titleResource": "CopyIsolationAction",
                        "optionalInAllStatesExcept": [
                            "Modification"
                        ]
                    },
                    {
                        "key": "attachWorkItemAttachment",
                        "attachmentKind": "OperationalRiskAssessment",
                        "titleResource": "AddOperationalRiskAssessmentAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftIsolationCertificate",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "titleResource": "SetTaskMonitoringAction"
                    },
                    {
                        "key": "deleteWorkItem",
                        "titleResource": "DeleteIsolationAction"
                    },
                    {
                        "key": "copyAsTemplate",
                        "titleResource": "CopyIsolationAsTemplateAction",
                        "optionalInAllStatesExcept": [
                            "Requesting",
                            "Modification"
                        ],
                        "creationState": "AwaitingAuthorisation"
                    },
                    {
                        "key": "startAudit",
                        "kind": "WorkItemAudit",
                        "variant": "IsolationAudit"
                    },
                    {
                        "key": "reviewLti"
                    },
                    {
                        "key": "attachTo",
                        "kind": "Permit"
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkAsNotCopyable",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchIsolations",
                        "command": "SearchCertificates"
                    },
                    {
                        "id": "CCR",
                        "command": "ShowCcr"
                    },
                    {
                        "id": "PbuOverview",
                        "command": "ShowPbuOverview"
                    },
                    {
                        "id": "TaskMonitoringOverview",
                        "command": "ShowTaskMonitoringOverview"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "ICC",
                        "onlyForVariant": null
                    },
                    {
                        "name": "Full",
                        "onlyForVariant": null
                    },
                    {
                        "name": "All",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "All"
            }
        },
        {
            "name": "TaskRiskAssessment",
            "type": "RiskAssessment",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "DefaultRiskAssessment",
                    "rank": 1
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "Accepted"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "Accepted",
                    "to": "Requesting"
                },
                {
                    "from": "Active",
                    "to": "Requesting"
                }
            ],
            "workspace": {
                "kind": "TaskRiskAssessment",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ]
                    },
                    {
                        "name": "Accepted",
                        "states": [
                            "Accepted"
                        ]
                    },
                    {
                        "name": "Live",
                        "states": [
                            "Active"
                        ]
                    }
                ],
                "displayInMenu": false,
                "attachmentTypes": [],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [],
                "certificatesSearchPageColumns": [],
                "wizardSteps": [
                    {
                        "id": "RiskAssessmentDraft",
                        "fields": [
                            {
                                "name": "text",
                                "key": "RiskAssessmentTitle",
                                "numberOfLines": "1",
                                "required": false,
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_0"
                            },
                            {
                                "name": "riskAssessmentLevel",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_1"
                            },
                            {
                                "name": "riskAssessmentTeam",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_2"
                            },
                            {
                                "name": "authoritySelector",
                                "authorityPropertyName": "RiskAssessmentFacilitator",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "textResource": "RiskAssessmentFacilitatorField",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "filter": {
                                    "defaultAllowedRoles": [
                                        "Level2RiskAssessor"
                                    ],
                                    "specificFilters": []
                                },
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_3"
                            },
                            {
                                "name": "riskAssessmentTasks",
                                "copyParticipation": "CloneAndTemplate",
                                "readOnlyIfNoRiskLevelSelected": true,
                                "categories": "PermitHazards",
                                "isRequired": true,
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_4"
                            },
                            {
                                "name": "residualRisk",
                                "onlyVisibleForRiskAssessmentLevel": "Level1",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_5"
                            },
                            {
                                "name": "text",
                                "key": "SIMOPS",
                                "copyParticipation": "Template",
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_6"
                            },
                            {
                                "name": "signatureList",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AcceptTaskRiskAssessmentByRiskAssessmentTeam",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AcceptTaskRiskAssessmentByRiskAssessmentFacilitator",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_7"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Accepted",
                            "Active"
                        ]
                    },
                    {
                        "id": "RiskAssessmentApproved",
                        "fields": [
                            {
                                "name": "nearbyActivitiesOnSystem",
                                "workItemFilter": [
                                    {
                                        "kind": "Permit",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentApproved_0"
                            },
                            {
                                "name": "nearbyActivitiesAtLocations",
                                "workItemFilter": [
                                    {
                                        "kind": "Permit",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentApproved_1"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveTaskRiskAssessmentByAreaOrSiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveTaskRiskAssessmentByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveTaskRiskAssessmentBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "EndorseTaskRiskAssessmentByFunctionalAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "TaskRiskAssessment_RiskAssessmentApproved_2"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Accepted",
                            "Active"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "RiskAssessmentDraft",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "AcceptTaskRiskAssessmentAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "RiskAssessmentApproved",
                        "requiredInStates": [
                            "Accepted"
                        ],
                        "titleResource": "ApproveOREndorseTaskRiskAssessment"
                    }
                ],
                "commandBarButtons": [],
                "printProfiles": [
                    {
                        "name": "TaskRiskAssessment",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "TaskRiskAssessment"
            }
        },
        {
            "name": "Leak",
            "type": "Permit",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "C1",
                    "rank": null
                },
                {
                    "name": "C2",
                    "rank": null
                },
                {
                    "name": "C3",
                    "rank": null
                },
                {
                    "name": "C4",
                    "rank": null
                },
                {
                    "name": "StructuredSearch",
                    "rank": null
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "Revalidate"
                },
                {
                    "name": "AwaitingActivation"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [],
            "workspace": {
                "kind": "Leak",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Live",
                        "states": [
                            "Active",
                            "Revalidate",
                            "AwaitingActivation"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "riskAssessment",
                        "kind": "TaskRiskAssessment"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workingLocation",
                        "name": "workingLocation"
                    },
                    {
                        "key": "5_signedByUsername",
                        "name": "signedByUsername"
                    },
                    {
                        "key": "6_dateRange",
                        "name": "dateRange"
                    },
                    {
                        "key": "7_isDeleted",
                        "name": "isDeleted"
                    },
                    {
                        "key": "8_workItemVariant",
                        "name": "workItemVariant"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage",
                        "width": "30"
                    },
                    {
                        "name": "WorkItemVariant",
                        "width": "120"
                    },
                    {
                        "name": "RegistrationNumber",
                        "width": "180"
                    },
                    {
                        "name": "Status",
                        "width": "180"
                    },
                    {
                        "name": "Title",
                        "width": "300"
                    },
                    {
                        "name": "Location",
                        "width": "180"
                    }
                ],
                "workOrder": {
                    "denyDirectPermitCreation": false,
                    "denyCreateFromTemplate": true,
                    "denyCreateFromQuestionnaire": false,
                    "workOrderSearchFields": [
                        {
                            "key": "0_workOrderDisplay",
                            "name": "workOrderDisplay"
                        },
                        {
                            "key": "1_workOrderTitle",
                            "name": "workOrderTitle"
                        },
                        {
                            "key": "2_workOrderDescription",
                            "name": "workOrderDescription"
                        },
                        {
                            "key": "3_workOrderDateRange",
                            "name": "workOrderDateRange"
                        },
                        {
                            "key": "4_workOrderSite",
                            "name": "workOrderSite"
                        }
                    ],
                    "workOrderColumns": [
                        {
                            "name": "Display"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "Description"
                        },
                        {
                            "name": "PlannedStartDate"
                        },
                        {
                            "name": "PlannedEndDate"
                        },
                        {
                            "name": "Site"
                        }
                    ]
                },
                "wizardSteps": [
                    {
                        "id": "DraftLeak",
                        "fields": [
                            {
                                "name": "lessonsLearnedNotice",
                                "onlyVisibleWhenCopying": true,
                                "uniqueKey": "Leak_DraftLeak_0"
                            },
                            {
                                "name": "workItemVariant",
                                "isRequired": true,
                                "uniqueKey": "Leak_DraftLeak_1"
                            },
                            {
                                "name": "title",
                                "uniqueKey": "Leak_DraftLeak_2"
                            },
                            {
                                "name": "site",
                                "isRequired": true,
                                "uniqueKey": "Leak_DraftLeak_3"
                            },
                            {
                                "name": "workingLocations",
                                "isRequired": true,
                                "workItemFilter": [
                                    {
                                        "kind": "Leak",
                                        "workItemState": [
                                            "Active"
                                        ]
                                    }
                                ],
                                "uniqueKey": "Leak_DraftLeak_4"
                            },
                            {
                                "name": "workObjects",
                                "allowMultipleEquipment": false,
                                "isRequired": true,
                                "hiddenFor": "StructuredSearch",
                                "uniqueKey": "Leak_DraftLeak_5"
                            },
                            {
                                "name": "workDescription",
                                "isRequired": true,
                                "uniqueKey": "Leak_DraftLeak_6"
                            },
                            {
                                "name": "workingPeriod",
                                "isRequired": true,
                                "ignoreWorkingHours": true,
                                "uniqueKey": "Leak_DraftLeak_7"
                            },
                            {
                                "name": "residualRisk",
                                "isRequired": true,
                                "hiddenFor": "StructuredSearch",
                                "uniqueKey": "Leak_DraftLeak_8"
                            },
                            {
                                "name": "taskMonitoring",
                                "hiddenFor": "StructuredSearch",
                                "uniqueKey": "Leak_DraftLeak_9"
                            },
                            {
                                "name": "workOrders",
                                "hiddenFor": "StructuredSearch",
                                "uniqueKey": "Leak_DraftLeak_10"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Active",
                            "Revalidate",
                            "AwaitingActivation"
                        ]
                    },
                    {
                        "id": "AuthorizingLeak",
                        "fields": [
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AuthorizeLeak",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Leak_AuthorizingLeak_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ReauthorizeLeak",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Leak_AuthorizingLeak_1"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RevertLeakForModification",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Leak_AuthorizingLeak_2"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteLeakSearch",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Leak_AuthorizingLeak_3"
                            },
                            {
                                "name": "revalidationSignaturesPeriod",
                                "hiddenFor": "StructuredSearch",
                                "uniqueKey": "Leak_AuthorizingLeak_4"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Active",
                            "Revalidate",
                            "AwaitingActivation"
                        ]
                    },
                    {
                        "id": "ClosingLeak",
                        "fields": [
                            {
                                "name": "lessonsLearned",
                                "allowEditingAlways": true,
                                "readOnlyWhenClosed": true,
                                "uniqueKey": "Leak_ClosingLeak_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseLeak",
                                        "fields": [
                                            {
                                                "name": "approveLessonsLearned",
                                                "requireAnswerForDeclaration": false,
                                                "resourceKey": "Label_LessonsLearnedReviewed"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Leak_ClosingLeak_1"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Live"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Active",
                            "Revalidate",
                            "AwaitingActivation"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "AuthorizingLeak",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "AuthorizeLeakAction",
                        "showForVariants": [
                            "C1",
                            "C2",
                            "C3",
                            "C4"
                        ]
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ClosingLeak",
                        "optionalInStates": [
                            "Active",
                            "Revalidate"
                        ],
                        "titleResource": "CloseLeakAction",
                        "showForVariants": [
                            "C1",
                            "C2",
                            "C3",
                            "C4"
                        ]
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "AuthorizingLeak",
                        "optionalInStates": [
                            "Active",
                            "Revalidate"
                        ],
                        "titleResource": "ReauthorizeLeakAction",
                        "showForVariants": [
                            "C1",
                            "C2",
                            "C3",
                            "C4"
                        ]
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "AuthorizingLeak",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "CompleteLeakSearch",
                        "showForVariants": [
                            "StructuredSearch"
                        ]
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftLeak",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "titleResource": "SetTaskMonitoringAction",
                        "showForVariants": [
                            "C1",
                            "C2",
                            "C3",
                            "C4"
                        ]
                    },
                    {
                        "key": "deleteWorkItem",
                        "titleResource": "DeleteLeakAction"
                    },
                    {
                        "key": "addCounterSignature",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    },
                    {
                        "key": "startAudit",
                        "kind": "WorkItemAudit",
                        "variant": "LeaksAudit"
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchLeaks",
                        "command": "SearchCertificates"
                    },
                    {
                        "id": "CCR",
                        "command": "ShowCcr"
                    },
                    {
                        "id": "TaskMonitoringOverview",
                        "command": "ShowTaskMonitoringOverview"
                    }
                ],
                "printProfiles": [],
                "defaultPrintProfile": null
            }
        },
        {
            "name": "IsolationTemplate",
            "type": "IsolationCertificate",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "DefaultIsolationCertificate",
                    "rank": 1
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "DesignComplete"
                },
                {
                    "name": "AwaitingAuthorisation"
                },
                {
                    "name": "Revalidate"
                },
                {
                    "name": "AwaitingActivation"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Modification"
                },
                {
                    "name": "AwaitingReauthorisation"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "AwaitingAuthorisation",
                    "to": "DesignComplete",
                    "roles": "SiteAuthority"
                },
                {
                    "from": "DesignComplete",
                    "to": "Requesting",
                    "roles": "AreaAuthority,ElectricalLowVoltageIsolatingAuthority,ElectricalLowVoltageLevel1IsolatingAuthority, ElectricalHighVoltageIsolatingAuthority, ControlIsolatingAuthority, ProcessIsolatingAuthority"
                }
            ],
            "workspace": {
                "kind": "IsolationTemplate",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting",
                            "DesignComplete",
                            "AwaitingAuthorisation",
                            "Modification",
                            "AwaitingReauthorisation"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Approved",
                        "states": [
                            "AwaitingActivation",
                            "Active"
                        ]
                    },
                    {
                        "name": "Suspended",
                        "states": [
                            "Revalidate"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "riskAssessment",
                        "kind": "TaskRiskAssessmentTemplate",
                        "defaultLevel": "Level2"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workingLocation",
                        "name": "workingLocation"
                    },
                    {
                        "key": "5_systemOrEquipmentDescription",
                        "name": "systemOrEquipmentDescription"
                    },
                    {
                        "key": "6_isCopyable",
                        "name": "isCopyable"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage"
                    },
                    {
                        "name": "RegistrationNumber"
                    },
                    {
                        "name": "Status"
                    },
                    {
                        "name": "Title"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "SpecifyIsolationValues",
                        "fields": [
                            {
                                "name": "site",
                                "copyParticipation": "Clone",
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_0"
                            },
                            {
                                "name": "workingLocations",
                                "copyParticipation": "Clone",
                                "workItemFilter": [
                                    {
                                        "kind": "IsolationTemplate",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_1"
                            },
                            {
                                "name": "workObjects",
                                "copyParticipation": "Clone",
                                "allowMultipleEquipment": true,
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_2"
                            },
                            {
                                "name": "title",
                                "copyParticipation": "Clone",
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_3"
                            },
                            {
                                "name": "workOrderNumber",
                                "copyParticipation": "Clone",
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_4"
                            },
                            {
                                "name": "workDescription",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "maxLength": "240",
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_5"
                            },
                            {
                                "name": "text",
                                "key": "IsolationDescription",
                                "copyParticipation": "Clone",
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_6"
                            },
                            {
                                "name": "contingencyPlan",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_7"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "AwaitingAuthorisation",
                            "Modification",
                            "AwaitingReauthorisation",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "SpecifyIsolationInstructionPlan",
                        "fields": [
                            {
                                "name": "isolationInstructionPlan",
                                "mode": "DesignIsolation",
                                "shownInstructionTypes": "all",
                                "copyParticipation": "Clone",
                                "copyNewActionsToDeisolation": true,
                                "copyInitialIsolationCommentsToDeisolation": true,
                                "columns": [
                                    {
                                        "name": "sequenceNumber"
                                    },
                                    {
                                        "name": "tagNumber"
                                    },
                                    {
                                        "name": "equipment"
                                    },
                                    {
                                        "name": "isolationType"
                                    },
                                    {
                                        "name": "isolationMethod"
                                    },
                                    {
                                        "name": "isolatedState",
                                        "emphasized": true
                                    },
                                    {
                                        "name": "notIsolatedState",
                                        "emphasized": true
                                    },
                                    {
                                        "name": "comments"
                                    },
                                    {
                                        "name": "stt"
                                    },
                                    {
                                        "name": "uti"
                                    },
                                    {
                                        "name": "verificationRequired"
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_SpecifyIsolationInstructionPlan_0"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "AwaitingAuthorisation",
                            "Modification",
                            "AwaitingReauthorisation",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "SpecifyDeisolationInstructionPlan",
                        "fields": [
                            {
                                "name": "isolationInstructionPlan",
                                "mode": "DesignDeisolation",
                                "shownInstructionTypes": "all",
                                "copyParticipation": "Clone",
                                "columns": [
                                    {
                                        "name": "sequenceNumber"
                                    },
                                    {
                                        "name": "tagNumber"
                                    },
                                    {
                                        "name": "equipment"
                                    },
                                    {
                                        "name": "isolationType"
                                    },
                                    {
                                        "name": "isolationMethod"
                                    },
                                    {
                                        "name": "isolatedState",
                                        "emphasized": true
                                    },
                                    {
                                        "name": "notIsolatedState",
                                        "emphasized": true
                                    },
                                    {
                                        "name": "comments"
                                    },
                                    {
                                        "name": "stt"
                                    },
                                    {
                                        "name": "uti"
                                    },
                                    {
                                        "name": "verificationRequired"
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_SpecifyDeisolationInstructionPlan_0"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "AwaitingAuthorisation",
                            "Modification",
                            "AwaitingReauthorisation",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "DraftIsolationCertificate",
                        "fields": [
                            {
                                "name": "isolationSchemeAssessments",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "editPermissions": {
                                    "ElectricalLowVoltageLevel1": [
                                        "*"
                                    ],
                                    "ElectricalLowVoltage": [
                                        "*"
                                    ],
                                    "ElectricalHighVoltage": [
                                        "*"
                                    ],
                                    "Control": [
                                        "*"
                                    ],
                                    "Process": [
                                        "*"
                                    ],
                                    "LolcMovement": [
                                        "*"
                                    ]
                                },
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_0"
                            },
                            {
                                "name": "attachWorkItem",
                                "kind": "TaskRiskAssessmentTemplate",
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_1"
                            },
                            {
                                "name": "residualRisk",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_2"
                            },
                            {
                                "name": "multiValue",
                                "key": "RequiresAbnormalOperatingCondition",
                                "copyParticipation": "Clone",
                                "isRequired": true,
                                "defaultValue": null,
                                "allowedValues": [
                                    "Yes",
                                    "No"
                                ],
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_3"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteControlIsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteElectricalLowVoltageLevel1IsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteElectricalLowVoltageIsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteElectricalHighVoltageIsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteProcessIsolationDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestIsolationTemplate",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_4"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveIsolationTemplate",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true,
                                                "hideShiftEndWarning": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_5"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestModifiedIsolationTemplate",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_6"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ReApproveIsolationTemplate",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true,
                                                "hideShiftEndWarning": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RevalidateIsolationTemplateBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_7"
                            },
                            {
                                "name": "revalidationSignaturesPeriod",
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_8"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RevertIsolationTemplateForModification",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_9"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseIsolationTemplate",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_10"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "DesignComplete",
                                "toState": "Requesting",
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_11"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "AwaitingAuthorisation",
                                "toState": "DesignComplete",
                                "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_12"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "AwaitingAuthorisation",
                            "Modification",
                            "AwaitingReauthorisation",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftIsolationCertificate",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "RequestApproveIsolationTemplate"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftIsolationCertificate",
                        "requiredInStates": [
                            "DesignComplete"
                        ],
                        "titleResource": "RequestIsolationTemplateAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "DraftIsolationCertificate",
                        "requiredInStates": [
                            "AwaitingAuthorisation"
                        ],
                        "titleResource": "ApproveIsolationTemplate"
                    },
                    {
                        "key": "addSignature",
                        "for": "RevalidateIsolationTemplateBySiteAuthority",
                        "titleResource": "RevalidateIsolationTemplateBySiteAuthority",
                        "actionConditionName": "IsolationTemplate_3",
                        "fields": [
                            {
                                "name": "period",
                                "readonly": false
                            },
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "CloseIsolationTemplate",
                        "titleResource": "CloseIsolationTemplate",
                        "actionConditionName": "IsolationTemplate_4",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addCounterSignature",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    },
                    {
                        "key": "copyWorkItem",
                        "titleResource": "CopyIsolationTemplateAction"
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkIsolationTemplateAsCopyable",
                        "visibleWhenReadOnly": true,
                        "titleResource": "MarkIsolationTemplateAsCopyable",
                        "actionConditionName": "IsolationTemplate_7",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkAsNotCopyable",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchIsolationTemplates",
                        "command": "SearchCertificates"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "ICC",
                        "onlyForVariant": null
                    },
                    {
                        "name": "Full",
                        "onlyForVariant": null
                    },
                    {
                        "name": "All",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "All"
            }
        },
        {
            "name": "TaskRiskAssessmentTemplate",
            "type": "RiskAssessment",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "DefaultRiskAssessment",
                    "rank": 1
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "Accepted"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "Accepted",
                    "to": "Requesting"
                },
                {
                    "from": "Active",
                    "to": "Requesting"
                }
            ],
            "workspace": {
                "kind": "TaskRiskAssessmentTemplate",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ]
                    },
                    {
                        "name": "Accepted",
                        "states": [
                            "Accepted"
                        ]
                    },
                    {
                        "name": "Live",
                        "states": [
                            "Active"
                        ]
                    }
                ],
                "displayInMenu": false,
                "attachmentTypes": [],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [],
                "certificatesSearchPageColumns": [],
                "wizardSteps": [
                    {
                        "id": "RiskAssessmentDraft",
                        "fields": [
                            {
                                "name": "text",
                                "key": "RiskAssessmentTitle",
                                "numberOfLines": "1",
                                "required": false,
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_0"
                            },
                            {
                                "name": "riskAssessmentLevel",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_1"
                            },
                            {
                                "name": "riskAssessmentTeam",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_2"
                            },
                            {
                                "name": "authoritySelector",
                                "authorityPropertyName": "RiskAssessmentFacilitator",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "textResource": "RiskAssessmentFacilitatorField",
                                "filter": {
                                    "defaultAllowedRoles": [
                                        "Level2RiskAssessor"
                                    ],
                                    "specificFilters": []
                                },
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_3"
                            },
                            {
                                "name": "riskAssessmentTasks",
                                "copyParticipation": "CloneAndTemplate",
                                "readOnlyIfNoRiskLevelSelected": true,
                                "categories": "PermitHazards",
                                "isRequired": true,
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_4"
                            },
                            {
                                "name": "residualRisk",
                                "onlyVisibleForRiskAssessmentLevel": "Level1",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_5"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AcceptTaskRiskAssessmentByRiskAssessmentTeam",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AcceptTaskRiskAssessmentByRiskAssessmentFacilitator",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_6"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Accepted",
                            "Active"
                        ]
                    },
                    {
                        "id": "RiskAssessmentApproved",
                        "fields": [
                            {
                                "name": "text",
                                "key": "SIMOPS",
                                "copyParticipation": "Template",
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentApproved_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveTaskRiskAssessmentByAreaOrSiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveTaskRiskAssessmentByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveTaskRiskAssessmentBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "EndorseTaskRiskAssessmentByFunctionalAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentApproved_1"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Accepted"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Accepted",
                            "Active"
                        ]
                    }
                ],
                "actions": [],
                "commandBarButtons": [],
                "printProfiles": [
                    {
                        "name": "TaskRiskAssessment",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "TaskRiskAssessment"
            }
        },
        {
            "name": "OperationalRiskAssessment",
            "type": "RiskAssessment",
            "defaultValues": {
                "riskAssessmentLevel": "Level2"
            },
            "variants": [
                {
                    "name": "OperationalRiskAssessment",
                    "rank": null
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "Approved"
                },
                {
                    "name": "Revalidate"
                },
                {
                    "name": "AwaitingActivation"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "InReview"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "Approved",
                    "to": "Requesting",
                    "roles": "SiteAuthority, AreaAuthority, FunctionalAuthority"
                }
            ],
            "workspace": {
                "kind": "OperationalRiskAssessment",
                "workflowSteps": [
                    {
                        "name": "Requested",
                        "states": [
                            "Requesting"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Endorsement",
                        "states": [
                            "Approved"
                        ]
                    },
                    {
                        "name": "Live",
                        "states": [
                            "AwaitingActivation",
                            "Active",
                            "InReview",
                            "Revalidate"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "riskAssessment",
                        "kind": "SafetyOverrideRiskAssessment",
                        "allowTemplateUsage": true,
                        "allowExistingUsage": true,
                        "allowNewUsage": false,
                        "templateLabelResource": "AttachTemplateButtonText"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workingLocation",
                        "name": "workingLocation"
                    },
                    {
                        "key": "5_signedByUsername",
                        "name": "signedByUsername"
                    },
                    {
                        "key": "6_dateRange",
                        "name": "dateRange"
                    },
                    {
                        "key": "7_isDeleted",
                        "name": "isDeleted"
                    },
                    {
                        "key": "8_isAudited",
                        "name": "isAudited"
                    },
                    {
                        "key": "9_isCopied",
                        "name": "isCopied"
                    },
                    {
                        "key": "10_hasAttachment",
                        "name": "hasAttachment",
                        "kind": "SafetyOverrideRiskAssessment"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage",
                        "width": "30"
                    },
                    {
                        "name": "RegistrationNumber",
                        "width": "180"
                    },
                    {
                        "name": "Title"
                    },
                    {
                        "name": "Location"
                    },
                    {
                        "name": "Locations"
                    },
                    {
                        "name": "InitialPeriodStartDate",
                        "width": "140",
                        "titleResource": "ColumnLabel_ORA_InitialPeriodStartDate"
                    },
                    {
                        "name": "LastRevalidationPeriodStartDate",
                        "width": "140",
                        "titleResource": "ColumnLabel_ORA_LastRevalidationPeriodStartDate"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "PrepareRiskAssessmentStep",
                        "fields": [
                            {
                                "name": "lessonsLearnedNotice",
                                "onlyVisibleWhenCopying": true,
                                "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_0"
                            },
                            {
                                "name": "site",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_1"
                            },
                            {
                                "name": "workingLocations",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "workItemFilter": [
                                    {
                                        "kind": "OperationalRiskAssessment",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_2"
                            },
                            {
                                "name": "title",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_3"
                            },
                            {
                                "name": "text",
                                "key": "NormalCondition",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_4"
                            },
                            {
                                "name": "text",
                                "key": "AbnormalCondition",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_5"
                            },
                            {
                                "name": "text",
                                "key": "ReasonForNotShuttingDown",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_6"
                            },
                            {
                                "name": "text",
                                "key": "History",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_7"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Requested"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "InReview",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "IdentifyRisksStep",
                        "fields": [
                            {
                                "name": "initialRisk",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_0"
                            },
                            {
                                "name": "text",
                                "key": "InitialRiskExplanation",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_1"
                            },
                            {
                                "name": "riskAssessmentTeam",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_2"
                            },
                            {
                                "name": "authoritySelector",
                                "authorityPropertyName": "RiskAssessmentFacilitator",
                                "onlyVisibleForRiskAssessmentLevel": "Level2",
                                "textResource": "ORA_RiskAssessmentFacilitator",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "filter": {
                                    "defaultAllowedRoles": [
                                        "Level2RiskAssessor"
                                    ],
                                    "specificFilters": [
                                        {
                                            "variants": [
                                                "OperationalRiskAssessment"
                                            ],
                                            "roles": [],
                                            "origin": null
                                        }
                                    ]
                                },
                                "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_3"
                            },
                            {
                                "name": "riskAssessmentTasks",
                                "categories": "ORAHazards",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_4"
                            },
                            {
                                "name": "workingPeriod",
                                "ignoreWorkingHours": true,
                                "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_5"
                            },
                            {
                                "name": "text",
                                "key": "Recommendation",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_6"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Requested"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "InReview",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "ApproveRisksStep",
                        "fields": [
                            {
                                "name": "lessonsLearned",
                                "allowEditingAlways": true,
                                "onlyVisibleForStored": true,
                                "readOnlyWhenClosed": true,
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_0"
                            },
                            {
                                "name": "taskMonitoring",
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_1"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestOperationalRiskAssessmentByTeamMember",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestOperationalRiskAssessmentByFacilitator",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveOperationalRiskAssessmentByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveOperationalRiskAssessmentBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveOperationalRiskAssessmentByFunctionalAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_2"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AuthoriseOperationalRiskAssessment",
                                        "fields": [
                                            {
                                                "name": "signatureTextMessage",
                                                "textResource": "CumulativeRiskSelfDeclaration"
                                            },
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true,
                                                "hideShiftEndWarning": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_3"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ReviewOperationalRiskAssessment",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_4"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ReAuthoriseOperationalRiskAssessment",
                                        "fields": [
                                            {
                                                "name": "signatureTextMessage",
                                                "textResource": "CumulativeRiskSelfDeclaration"
                                            },
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true,
                                                "hideShiftEndWarning": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_5"
                            },
                            {
                                "name": "revalidationSignaturesPeriod",
                                "onlyVisibleIn": "AwaitingActivation, Active, Revalidate, Closed",
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_6"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseOperationalRiskAssessmentByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "approveLessonsLearned",
                                                "requireAnswerForDeclaration": false,
                                                "resourceKey": "Label_LessonsLearnedReviewed"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseOperationalRiskAssessmentBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "approveLessonsLearned",
                                                "requireAnswerForDeclaration": false,
                                                "resourceKey": "Label_LessonsLearnedReviewed"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_7"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "Approved",
                                "toState": "Requesting",
                                "textResource": "RevertByAreaAuthority",
                                "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_8"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Requested",
                            "Endorsement",
                            "Live"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "InReview",
                            "Revalidate"
                        ],
                        "unsignedSignaturesAtTop": true
                    }
                ],
                "actions": [
                    {
                        "key": "copyWorkItem",
                        "titleResource": "CopyOperationalRiskAssessmentAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ApproveRisksStep",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "AcceptApproveOperationalRiskAssessmentAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ApproveRisksStep",
                        "requiredInStates": [
                            "Approved"
                        ],
                        "titleResource": "ApproveAuthorizeOperationalRiskAssessmentAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ApproveRisksStep",
                        "optionalInStates": [
                            "Active"
                        ],
                        "titleResource": "ReviewReAuthorizeOperationalRiskAssessmentAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ApproveRisksStep",
                        "requiredInStates": [
                            "Revalidate",
                            "InReview"
                        ],
                        "titleResource": "ReAuthorizeOperationalRiskAssessmentAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ApproveRisksStep",
                        "requiredInStates": [
                            "InReview"
                        ],
                        "titleResource": "ReviewOperationalRiskAssessmentAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ApproveRisksStep",
                        "requiredInStates": [
                            "Active",
                            "Revalidate"
                        ],
                        "titleResource": "CloseOperationalRiskAssessmentAction"
                    },
                    {
                        "key": "deleteWorkItem",
                        "optionalInStates": [
                            "Requesting",
                            "Approved"
                        ]
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "ApproveRisksStep",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "titleResource": "SetTaskMonitoringAction"
                    },
                    {
                        "key": "addCounterSignature",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    },
                    {
                        "key": "startAudit",
                        "kind": "WorkItemAudit",
                        "variant": "OperationalRiskAssessmentAudit"
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkAsNotCopyable",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchOperationalRiskAssessments",
                        "command": "SearchCertificates"
                    },
                    {
                        "id": "CCR",
                        "command": "ShowCcr"
                    },
                    {
                        "id": "TaskMonitoringOverview",
                        "command": "ShowTaskMonitoringOverview"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "Full",
                        "onlyForVariant": null
                    },
                    {
                        "name": "All",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "All"
            }
        },
        {
            "name": "WorkItemAudit",
            "type": "Audit",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "PermitAudit",
                    "rank": null
                },
                {
                    "name": "IsolationAudit",
                    "rank": null
                },
                {
                    "name": "InhibitsAndOverridesAudit",
                    "rank": null
                },
                {
                    "name": "ProceduresAudit",
                    "rank": null
                },
                {
                    "name": "OperationalRiskAssessmentAudit",
                    "rank": null
                },
                {
                    "name": "LiftingAudit",
                    "rank": null
                },
                {
                    "name": "ShiftHandoverAudit",
                    "rank": null
                },
                {
                    "name": "LockedValvesAudit",
                    "rank": null
                },
                {
                    "name": "LeaksAudit",
                    "rank": null
                },
                {
                    "name": "AlarmManagementAudit",
                    "rank": null
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "Reviewed"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "Reviewed",
                    "to": "Requesting",
                    "roles": "AreaAuthority,SiteAuthority"
                }
            ],
            "workspace": {
                "kind": "WorkItemAudit",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Reviewed",
                        "states": [
                            "Reviewed"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "isolationCertificate",
                        "kind": "Isolation"
                    },
                    {
                        "type": "permit",
                        "kind": "Permit"
                    },
                    {
                        "type": "permit",
                        "kind": "Operation"
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "OperationalRiskAssessment"
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "SafetyOverrideRiskAssessment"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_signedDateRange",
                        "name": "signedDateRange",
                        "signatureType": "ReviewWorkItemAudit"
                    },
                    {
                        "key": "4_workItemVariant",
                        "name": "workItemVariant"
                    },
                    {
                        "key": "5_attachedWorkItemRegistrationNumber",
                        "name": "attachedWorkItemRegistrationNumber"
                    },
                    {
                        "key": "6_signedByUsername",
                        "name": "signedByUsername"
                    },
                    {
                        "key": "7_hasAuditTasks",
                        "name": "hasAuditTasks"
                    },
                    {
                        "key": "8_signedByUsernameForSignature",
                        "name": "signedByUsernameForSignature",
                        "signatureType": "ReviewWorkItemAudit"
                    },
                    {
                        "key": "9_isAuditCompliant",
                        "name": "isAuditCompliant"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "RegistrationNumber",
                        "width": "180"
                    },
                    {
                        "name": "Status"
                    },
                    {
                        "name": "WorkItemVariant"
                    },
                    {
                        "name": "Site"
                    },
                    {
                        "name": "AuditedItem"
                    },
                    {
                        "name": "AuditDate"
                    },
                    {
                        "name": "SignerFullName",
                        "titleResource": "WorkItemAudit_ReviewedBySearchColumnTitle"
                    },
                    {
                        "name": "AuditCompliantPercentage"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "Request",
                        "fields": [
                            {
                                "name": "auditedAt",
                                "uniqueKey": "WorkItemAudit_Request_0"
                            },
                            {
                                "name": "createdBy",
                                "uniqueKey": "WorkItemAudit_Request_1"
                            },
                            {
                                "name": "site",
                                "uniqueKey": "WorkItemAudit_Request_2"
                            },
                            {
                                "name": "workingLocations",
                                "copyParticipation": "CloneAndTemplate",
                                "workItemFilter": [
                                    {
                                        "kind": "Permit",
                                        "workItemState": [
                                            "Active",
                                            "SuspendedForEmergency",
                                            "SuspendedForReauthorization",
                                            "SuspendedForRevalidation",
                                            "SuspendedForSanctionToTest"
                                        ]
                                    },
                                    {
                                        "kind": "Isolation",
                                        "workItemState": [
                                            "IsolationInPlace"
                                        ]
                                    },
                                    {
                                        "kind": "OperationalRiskAssessment",
                                        "workItemState": [
                                            "Active"
                                        ]
                                    }
                                ],
                                "uniqueKey": "WorkItemAudit_Request_3"
                            },
                            {
                                "name": "workItemVariant",
                                "uniqueKey": "WorkItemAudit_Request_4"
                            },
                            {
                                "name": "attachedWorkItemsRegistrationNumbersList",
                                "uniqueKey": "WorkItemAudit_Request_5"
                            },
                            {
                                "name": "workDescription",
                                "numberOfLines": "8",
                                "uniqueKey": "WorkItemAudit_Request_6"
                            },
                            {
                                "name": "workItemAuditAssessments",
                                "enableTasksPerQuestion": true,
                                "isRequired": true,
                                "enableAddingTasksIn": "['Requesting', 'Reviewed']",
                                "uniqueKey": "WorkItemAudit_Request_7"
                            },
                            {
                                "name": "auditTasks",
                                "readOnlyWhenClosed": true,
                                "displayQuestionNumber": true,
                                "uniqueKey": "WorkItemAudit_Request_8"
                            },
                            {
                                "name": "lessonsLearned",
                                "allowEditingAlways": true,
                                "readOnlyWhenClosed": true,
                                "uniqueKey": "WorkItemAudit_Request_9"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "Reviewed",
                                "uniqueKey": "WorkItemAudit_Request_10"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ReviewWorkItemAudit",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseWorkItemAudit",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "WorkItemAudit_Request_11"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Reviewed"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "deleteWorkItem",
                        "titleResource": "DeleteWorkItemAuditAction"
                    },
                    {
                        "key": "addSignature",
                        "for": "ReviewWorkItemAudit",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    },
                    {
                        "key": "addSignature",
                        "for": "CloseWorkItemAudit",
                        "actionConditionName": "WorkItemAudit_2",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchWorkItemAudits",
                        "command": "SearchCertificates"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "WorkItemAudit",
                        "onlyForVariant": null
                    },
                    {
                        "name": "AuditAndWorkItems",
                        "onlyForVariant": null
                    },
                    {
                        "name": "AuditWithWorkItemsAndAttachments",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "WorkItemAudit"
            }
        },
        {
            "name": "Action",
            "type": "Task",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "DefaultTask",
                    "rank": null
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Active"
                },
                {
                    "name": "Completed"
                },
                {
                    "name": "Requesting"
                },
                {
                    "name": "Confirmed"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "Completed",
                    "to": "Active",
                    "roles": "AreaAuthority,SiteAuthority"
                },
                {
                    "from": "Confirmed",
                    "to": "Requesting",
                    "roles": "AreaAuthority,SiteAuthority"
                },
                {
                    "from": "Active",
                    "to": "Confirmed",
                    "roles": "AreaAuthority,SiteAuthority"
                }
            ],
            "workspace": {
                "kind": "Action",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting",
                            "Confirmed"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Live",
                        "states": [
                            "Active"
                        ]
                    },
                    {
                        "name": "Completed",
                        "states": [
                            "Completed"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_taskDueDateRange",
                        "name": "taskDueDateRange"
                    },
                    {
                        "key": "5_isDeleted",
                        "name": "isDeleted"
                    },
                    {
                        "key": "6_owner",
                        "name": "owner"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "RegistrationNumber",
                        "width": "180"
                    },
                    {
                        "name": "Status"
                    },
                    {
                        "name": "Title"
                    },
                    {
                        "name": "TaskDueDate"
                    },
                    {
                        "name": "TaskOwnerFullName"
                    },
                    {
                        "name": "CreatedByFullName"
                    },
                    {
                        "name": "SignatureRemarks",
                        "titleResource": "ColumnLabel_SignatureRemarks_CompleteAction"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "RequestAction",
                        "fields": [
                            {
                                "name": "relatedAudit",
                                "uniqueKey": "Action_RequestAction_0"
                            },
                            {
                                "name": "site",
                                "uniqueKey": "Action_RequestAction_1"
                            },
                            {
                                "name": "workingLocations",
                                "workItemFilter": [
                                    {
                                        "kind": "Action",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "Action_RequestAction_2"
                            },
                            {
                                "name": "taskDueDate",
                                "isRequired": true,
                                "uniqueKey": "Action_RequestAction_3"
                            },
                            {
                                "name": "taskOwner",
                                "isRequired": true,
                                "uniqueKey": "Action_RequestAction_4"
                            },
                            {
                                "name": "title",
                                "uniqueKey": "Action_RequestAction_5"
                            },
                            {
                                "name": "workDescription",
                                "isRequired": true,
                                "uniqueKey": "Action_RequestAction_6"
                            },
                            {
                                "name": "taskComment",
                                "uniqueKey": "Action_RequestAction_7"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ConfirmAction",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Action_RequestAction_8"
                            },
                            {
                                "name": "signatureList",
                                "onlyVisibleIn": "Confirmed,Active,Completed,Closed",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "AcceptAction",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Action_RequestAction_9"
                            },
                            {
                                "name": "signatureList",
                                "onlyVisibleIn": "Active,Completed,Closed",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteAction",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": true
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Action_RequestAction_10"
                            },
                            {
                                "name": "signatureList",
                                "onlyVisibleIn": "Completed,Closed",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ApproveAction",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "Action_RequestAction_11"
                            },
                            {
                                "name": "revertState",
                                "uniqueKey": "Action_RequestAction_12"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Confirmed",
                            "Active",
                            "Completed"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "RequestAction",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "ConfirmActionAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "RequestAction",
                        "requiredInStates": [
                            "Confirmed"
                        ],
                        "titleResource": "AcceptActionAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "RequestAction",
                        "requiredInStates": [
                            "Active"
                        ],
                        "titleResource": "CompleteActionAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "RequestAction",
                        "requiredInStates": [
                            "Completed"
                        ],
                        "titleResource": "ApproveActionAction"
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchActions",
                        "command": "SearchCertificates"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "Actions",
                        "onlyForVariant": null
                    },
                    {
                        "name": "ActionsAndAttachments",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "ActionsAndAttachments"
            }
        },
        {
            "name": "LolcMovement",
            "type": "IsolationCertificate",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "DefaultLolcMovement",
                    "rank": null
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "DesignComplete"
                },
                {
                    "name": "PartiallyMovedOutOfNormal"
                },
                {
                    "name": "IsolationInPlace"
                },
                {
                    "name": "DeisolationInProgress"
                },
                {
                    "name": "Deisolated"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "DesignComplete",
                    "to": "Requesting",
                    "roles": "SignForLOLCMovement"
                }
            ],
            "workspace": {
                "kind": "LolcMovement",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "DesignComplete",
                        "states": [
                            "DesignComplete",
                            "PartiallyMovedOutOfNormal"
                        ]
                    },
                    {
                        "name": "Live",
                        "states": [
                            "IsolationInPlace"
                        ]
                    },
                    {
                        "name": "MovementToNormal",
                        "states": [
                            "DeisolationInProgress",
                            "Deisolated"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "riskAssessment",
                        "kind": "OperationalRiskAssessment",
                        "defaultLevel": "Level2",
                        "allowExistingUsage": true
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "Operation",
                        "allowExistingUsage": true,
                        "variant": "RiskAssessedProcedure"
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "Permit",
                        "defaultLevel": "Level1",
                        "allowTemplateUsage": true,
                        "allowExistingUsage": true,
                        "templateLabelResource": "TemplateLabel",
                        "creationStateFromTemplate": "Approved"
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "SafetyOverrideRiskAssessment",
                        "allowTemplateUsage": true,
                        "allowExistingUsage": true,
                        "allowNewUsage": false
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage",
                        "width": "40"
                    },
                    {
                        "name": "RegistrationNumber",
                        "width": "120"
                    },
                    {
                        "name": "Status",
                        "width": "180"
                    },
                    {
                        "name": "Title"
                    },
                    {
                        "name": "PlannedStartDateTime",
                        "width": "110"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "SpecifyIsolationValues",
                        "fields": [
                            {
                                "name": "title",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "LolcMovement_SpecifyIsolationValues_0"
                            },
                            {
                                "name": "workingPeriod",
                                "isRequired": true,
                                "ignoreWorkingHours": false,
                                "uniqueKey": "LolcMovement_SpecifyIsolationValues_1"
                            },
                            {
                                "name": "site",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "LolcMovement_SpecifyIsolationValues_2"
                            },
                            {
                                "name": "workingLocations",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "workItemFilter": [
                                    {
                                        "kind": "Isolation",
                                        "workItemState": [
                                            "*"
                                        ]
                                    },
                                    {
                                        "kind": "LolcMovement",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "LolcMovement_SpecifyIsolationValues_3"
                            },
                            {
                                "name": "workObjects",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "LolcMovement_SpecifyIsolationValues_4"
                            },
                            {
                                "name": "manageIsolations",
                                "copyParticipation": "CloneAndTemplate",
                                "emphasizeState": true,
                                "showPid": false,
                                "showStt": false,
                                "showUti": false,
                                "browseBy": "LolcValves",
                                "hideCreateNew": true,
                                "equipmentHeaderResource": "IsolationEquipment_LolcMovement",
                                "showValveLolcRegistryCurrentPosition": true,
                                "uniqueKey": "LolcMovement_SpecifyIsolationValues_5"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "PartiallyMovedOutOfNormal",
                            "IsolationInPlace",
                            "DeisolationInProgress",
                            "Deisolated"
                        ]
                    },
                    {
                        "id": "Signatures",
                        "fields": [
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteLolcMovementDesign",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "LolcMovement_Signatures_0"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "DesignComplete",
                                "toState": "Requesting",
                                "uniqueKey": "LolcMovement_Signatures_1"
                            },
                            {
                                "name": "signatureList",
                                "onlyVisibleIn": "DesignComplete, PartiallyMovedOutOfNormal, IsolationInPlace, PartiallyMovedOutOfNormal, Closed",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestLolcMovement",
                                        "fields": [
                                            {
                                                "name": "isolationsSelector",
                                                "isolationType": "LolcMovement",
                                                "signingMode": "ConfirmIsolation",
                                                "showUti": false,
                                                "showStt": false,
                                                "showLockNumber": true,
                                                "showKeyNumber": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "LolcMovement_Signatures_2"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete",
                            "PartiallyMovedOutOfNormal",
                            "IsolationInPlace",
                            "DeisolationInProgress",
                            "Deisolated"
                        ]
                    },
                    {
                        "id": "MovementBackToNormalPosition",
                        "fields": [
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RequestLolcMovementBack",
                                        "fields": [
                                            {
                                                "name": "isolationInstructionsSelector",
                                                "signingMode": "RequestToMoveLolcValveBackToNormal",
                                                "showStt": false,
                                                "autoSelectPreviousRows": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "LolcMovement_MovementBackToNormalPosition_0"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ConfirmLolcMovementDeisolations",
                                        "fields": [
                                            {
                                                "name": "isolationsSelector",
                                                "isolationType": "LolcMovement",
                                                "signingMode": "ConfirmDeisolation",
                                                "showUti": false,
                                                "showStt": false,
                                                "showLockNumber": true,
                                                "showKeyNumber": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseLolcMovementCertificate",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "LolcMovement_MovementBackToNormalPosition_1"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Live"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "IsolationInPlace",
                            "DeisolationInProgress",
                            "Deisolated"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Signatures",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "FinalizeLolcMovementRequest"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "Signatures",
                        "requiredInStates": [
                            "DesignComplete",
                            "PartiallyMovedOutOfNormal"
                        ],
                        "titleResource": "RequestLolcMovement"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "MovementBackToNormalPosition",
                        "requiredInStates": [
                            "IsolationInPlace"
                        ],
                        "titleResource": "MovementBackToNormalPositionAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "MovementBackToNormalPosition",
                        "requiredInStates": [
                            "DeisolationInProgress"
                        ],
                        "titleResource": "ConfirmLolcMovementDeisolationsAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "MovementBackToNormalPosition",
                        "requiredInStates": [
                            "Deisolated"
                        ],
                        "titleResource": "CloseLolcMovementAction"
                    },
                    {
                        "key": "copyWorkItem",
                        "titleResource": "CopyLolcMovement"
                    },
                    {
                        "key": "deleteWorkItem",
                        "optionalInStates": [
                            "Requesting"
                        ],
                        "titleResource": "DeleteLolcMovementAction"
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkAsNotCopyable",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "LolcRegistry",
                        "command": "ShowLockOpenLockClosedRegistry"
                    },
                    {
                        "id": "SearchLolcMovements",
                        "command": "SearchCertificates"
                    }
                ],
                "views": {
                    "lolcRegistry": {
                        "enableInspection": true,
                        "inspectionKind": "LolcOperationalInspection",
                        "printingAllowed": true,
                        "showColumnSelector": true,
                        "filters": [
                            {
                                "name": "siteSelector"
                            },
                            {
                                "name": "valveDescription"
                            },
                            {
                                "name": "keyword"
                            },
                            {
                                "name": "positionChangedBetween"
                            },
                            {
                                "name": "sectionSelector"
                            },
                            {
                                "name": "hasActiveIsolationCertificates",
                                "kinds": [
                                    "Isolation"
                                ]
                            },
                            {
                                "name": "requiresInspection"
                            },
                            {
                                "name": "outOfNormalPosition"
                            }
                        ],
                        "columnDefinitions": [
                            {
                                "name": "siteName",
                                "width": "140",
                                "titleResource": "LolcRegistry_Site_Header"
                            },
                            {
                                "name": "valveDescription",
                                "width": "500",
                                "titleResource": "LolcRegistry_ValveDescription_Header"
                            },
                            {
                                "name": "pAndID",
                                "width": "150",
                                "titleResource": "LolcRegistry_PAndID_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "lineNumber",
                                "width": "150",
                                "titleResource": "LolcRegistry_LineNumber_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "equipmentCode",
                                "width": "200",
                                "titleResource": "LolcRegistry_PieceOfEquipmentCode_Header"
                            },
                            {
                                "name": "equipmentDescription",
                                "width": "250",
                                "titleResource": "LolcRegistry_PieceOfEquipmentDescription_Header"
                            },
                            {
                                "name": "lockTagNumber",
                                "width": "150",
                                "titleResource": "LolcRegistry_LockTagNumber_Header"
                            },
                            {
                                "name": "lockNumber",
                                "width": "150",
                                "titleResource": "LolcRegistry_LockNumber_Header"
                            },
                            {
                                "name": "keyNumber",
                                "width": "150",
                                "titleResource": "LolcRegistry_KeyNumber_Header"
                            },
                            {
                                "name": "deviceType",
                                "width": "100",
                                "titleResource": "LolcRegistry_DeviceType_Header"
                            },
                            {
                                "name": "classification",
                                "width": "150",
                                "titleResource": "LolcRegistry_Classification_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "normalPosition",
                                "width": "135",
                                "titleResource": "LolcRegistry_NormalPosition_Header"
                            },
                            {
                                "name": "currentPosition",
                                "width": "135",
                                "titleResource": "LolcRegistry_CurrentPosition_Header"
                            },
                            {
                                "name": "comments",
                                "width": "190",
                                "titleResource": "LolcRegistry_Comments_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "activeIsolationCertificates",
                                "width": "150",
                                "titleResource": "LolcRegistry_IsolationCertificate_Header"
                            },
                            {
                                "name": "lastPositionChange",
                                "width": "150",
                                "titleResource": "LolcRegistry_LastPositionChange_Header"
                            },
                            {
                                "name": "section",
                                "width": "85",
                                "titleResource": "LolcRegistry_Section_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "lastAuditDateTime",
                                "width": "135",
                                "titleResource": "LolcRegistry_LastAuditDateTime_Header"
                            },
                            {
                                "name": "systemDescription",
                                "width": "200",
                                "titleResource": "LolcRegistry_SystemDescription_Header"
                            },
                            {
                                "name": "purpose",
                                "width": "150",
                                "titleResource": "LolcRegistry_Purpose_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "inspectionNotes",
                                "width": "350",
                                "titleResource": "LolcRegistry_InspectionNotes_Header"
                            }
                        ]
                    }
                },
                "printProfiles": [
                    {
                        "name": "LolcMovement",
                        "onlyForVariant": null
                    },
                    {
                        "name": "LolcMovementAndAttachments",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "LolcMovementAndAttachments"
            }
        },
        {
            "name": "LolcOperationalInspection",
            "type": "Inspection",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "DefaultLolcOperationalInspection",
                    "rank": null
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "DesignComplete"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "DesignComplete",
                    "to": "Requesting",
                    "roles": "SignForLOLCOperationalInspection"
                }
            ],
            "workspace": {
                "kind": "LolcOperationalInspection",
                "workflowSteps": [
                    {
                        "name": "Record",
                        "states": [
                            "Requesting",
                            "DesignComplete"
                        ],
                        "allowCreationInState": "Requesting"
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "riskAssessment",
                        "kind": "OperationalRiskAssessment",
                        "defaultLevel": "Level2",
                        "allowExistingUsage": true
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "Operation",
                        "allowExistingUsage": true
                    },
                    {
                        "type": "riskAssessment",
                        "kind": "Permit",
                        "defaultLevel": "Level1",
                        "allowTemplateUsage": true,
                        "allowExistingUsage": true,
                        "templateLabelResource": "TemplateLabel"
                    },
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage",
                        "width": "40"
                    },
                    {
                        "name": "RegistrationNumber",
                        "width": "120"
                    },
                    {
                        "name": "Status",
                        "width": "180"
                    },
                    {
                        "name": "Title"
                    },
                    {
                        "name": "PlannedStartDateTime",
                        "width": "100"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "SpecifyIsolationValues",
                        "fields": [
                            {
                                "name": "title",
                                "copyParticipation": "CloneAndTemplate",
                                "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_0"
                            },
                            {
                                "name": "inspectionPlannedDate",
                                "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_1"
                            },
                            {
                                "name": "site",
                                "copyParticipation": "CloneAndTemplate",
                                "isRequired": true,
                                "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_2"
                            },
                            {
                                "name": "inspectionPlan",
                                "copyParticipation": "CloneAndTemplate",
                                "browseBy": "LolcValves",
                                "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_3"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CompleteLolcOperationalInspectionDesign",
                                        "specificCommand": "RequestAllInspectionInstructionsCommand",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "ConfirmLolcOperationalInspection",
                                        "fields": [
                                            {
                                                "name": "inspections"
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseOperationalInspection",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_4"
                            },
                            {
                                "name": "revertState",
                                "onlyVisibleIn": "DesignComplete",
                                "toState": "Requesting",
                                "onlyVisibleWhenNoInstructionSigned": true,
                                "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_5"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Record"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "DesignComplete"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "SpecifyIsolationValues",
                        "requiredInStates": [
                            "Requesting"
                        ],
                        "titleResource": "CompleteLolcOperationalInspectionDesignAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "wizardStepId": "SpecifyIsolationValues",
                        "requiredInStates": [
                            "DesignComplete"
                        ],
                        "titleResource": "ConfirmLolcOperationalInspectionAction"
                    },
                    {
                        "key": "copyWorkItem",
                        "titleResource": "CopyLolcOperationalInspection"
                    },
                    {
                        "key": "addSignature",
                        "for": "MarkAsNotCopyable",
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": false
                            }
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "LolcRegistry",
                        "command": "ShowLockOpenLockClosedRegistry"
                    },
                    {
                        "id": "SearchLolcOperationalInspections",
                        "command": "SearchCertificates"
                    }
                ],
                "views": {
                    "lolcRegistry": {
                        "enableInspection": true,
                        "inspectionKind": "LolcOperationalInspection",
                        "printingAllowed": true,
                        "showColumnSelector": true,
                        "filters": [
                            {
                                "name": "siteSelector"
                            },
                            {
                                "name": "valveDescription"
                            },
                            {
                                "name": "keyword"
                            },
                            {
                                "name": "positionChangedBetween"
                            },
                            {
                                "name": "sectionSelector"
                            },
                            {
                                "name": "hasActiveIsolationCertificates",
                                "kinds": [
                                    "Isolation"
                                ]
                            },
                            {
                                "name": "requiresInspection"
                            },
                            {
                                "name": "outOfNormalPosition"
                            }
                        ],
                        "columnDefinitions": [
                            {
                                "name": "siteName",
                                "width": "140",
                                "titleResource": "LolcRegistry_Site_Header"
                            },
                            {
                                "name": "pAndID",
                                "width": "150",
                                "titleResource": "LolcRegistry_PAndID_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "lineNumber",
                                "width": "150",
                                "titleResource": "LolcRegistry_LineNumber_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "codeAndDescription",
                                "width": "500",
                                "titleResource": "LolcRegistry_PieceOfEquipmentDisplayName_Header"
                            },
                            {
                                "name": "valveDescription",
                                "width": "500",
                                "titleResource": "LolcRegistry_ValveDescription_Header"
                            },
                            {
                                "name": "lockTagNumber",
                                "width": "150",
                                "titleResource": "LolcRegistry_LockTagNumber_Header"
                            },
                            {
                                "name": "lockNumber",
                                "width": "150",
                                "titleResource": "LolcRegistry_LockNumber_Header"
                            },
                            {
                                "name": "keyNumber",
                                "width": "150",
                                "titleResource": "LolcRegistry_KeyNumber_Header"
                            },
                            {
                                "name": "deviceType",
                                "width": "100",
                                "titleResource": "LolcRegistry_DeviceType_Header"
                            },
                            {
                                "name": "classification",
                                "width": "150",
                                "titleResource": "LolcRegistry_Classification_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "normalPosition",
                                "width": "135",
                                "titleResource": "LolcRegistry_NormalPosition_Header"
                            },
                            {
                                "name": "currentPosition",
                                "width": "135",
                                "titleResource": "LolcRegistry_CurrentPosition_Header"
                            },
                            {
                                "name": "comments",
                                "width": "190",
                                "titleResource": "LolcRegistry_Comments_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "activeIsolationCertificates",
                                "width": "150",
                                "titleResource": "LolcRegistry_IsolationCertificate_Header"
                            },
                            {
                                "name": "lastPositionChange",
                                "width": "135",
                                "titleResource": "LolcRegistry_LastPositionChange_Header"
                            },
                            {
                                "name": "section",
                                "width": "85",
                                "titleResource": "LolcRegistry_Section_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "lastAuditDateTime",
                                "width": "135",
                                "titleResource": "LolcRegistry_LastAuditDateTime_Header"
                            },
                            {
                                "name": "systemDescription",
                                "width": "200",
                                "titleResource": "LolcRegistry_SystemDescription_Header"
                            },
                            {
                                "name": "purpose",
                                "width": "150",
                                "titleResource": "LolcRegistry_Purpose_Header",
                                "hiddenByDefault": true
                            },
                            {
                                "name": "inspectionNotes",
                                "width": "350",
                                "titleResource": "LolcRegistry_InspectionNotes_Header"
                            }
                        ]
                    }
                },
                "printProfiles": [
                    {
                        "name": "LolcOperationalInspection",
                        "onlyForVariant": null
                    },
                    {
                        "name": "LolcOperationalInspectionAndAttachments",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "LolcOperationalInspectionAndAttachments"
            }
        },
        {
            "name": "SafetyOverrideRiskAssessmentTemplate",
            "type": "RiskAssessment",
            "defaultValues": {
                "riskAssessmentLevel": "Level2"
            },
            "variants": [
                {
                    "name": "DefaultSafetyOverrideRiskAssessment",
                    "rank": 1
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "Approved"
                },
                {
                    "name": "AwaitingActivation"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Revalidate"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [
                {
                    "from": "Approved",
                    "to": "Requesting",
                    "roles": "AreaAuthority,SiteAuthority"
                }
            ],
            "workspace": {
                "kind": "SafetyOverrideRiskAssessmentTemplate",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting",
                            "Approved"
                        ],
                        "allowCreationInState": "Requesting"
                    },
                    {
                        "name": "Live",
                        "states": [
                            "AwaitingActivation",
                            "Active"
                        ]
                    },
                    {
                        "name": "Overdue",
                        "states": [
                            "Revalidate"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workingLocation",
                        "name": "workingLocation"
                    },
                    {
                        "key": "5_systemOrEquipmentDescription",
                        "name": "systemOrEquipmentDescription"
                    },
                    {
                        "key": "6_signedByUsername",
                        "name": "signedByUsername"
                    },
                    {
                        "key": "7_isDeleted",
                        "name": "isDeleted"
                    },
                    {
                        "key": "8_riskArea",
                        "name": "riskArea"
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage"
                    },
                    {
                        "name": "RegistrationNumber"
                    },
                    {
                        "name": "Title"
                    },
                    {
                        "name": "Site"
                    },
                    {
                        "name": "Equipment"
                    },
                    {
                        "name": "Locations"
                    },
                    {
                        "name": "Status"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "Step1",
                        "fields": [
                            {
                                "name": "title",
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_0"
                            },
                            {
                                "name": "site",
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_1"
                            },
                            {
                                "name": "workingLocations",
                                "copyParticipation": "Clone",
                                "workItemFilter": [
                                    {
                                        "kind": "SafetyOverrideRiskAssessmentTemplate",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_2"
                            },
                            {
                                "name": "workObjects",
                                "browseBy": "Systems",
                                "isRequired": true,
                                "allowMultipleEquipment": true,
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_3"
                            },
                            {
                                "name": "workDescription",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_4"
                            },
                            {
                                "name": "multiValue",
                                "key": "OverrideBypassType",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "defaultValue": null,
                                "allowedValues": [
                                    "Input",
                                    "Output"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_5"
                            },
                            {
                                "name": "text",
                                "key": "OverrideBypassMethod",
                                "numberOfLines": "1",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_6"
                            },
                            {
                                "name": "multiValue",
                                "key": "OverallIntegrityLevel",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "defaultValue": null,
                                "allowedValues": [
                                    "3",
                                    "2",
                                    "1",
                                    "FireAndGas",
                                    "HMA",
                                    "SISBPCS",
                                    "ControlLoP"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_7"
                            },
                            {
                                "name": "multiValue",
                                "key": "IntegrityBasisSafety",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "defaultValue": null,
                                "allowedValues": [
                                    "NA",
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_8"
                            },
                            {
                                "name": "multiValue",
                                "key": "IntegrityBasisEnvironment",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "defaultValue": null,
                                "allowedValues": [
                                    "NA",
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_9"
                            },
                            {
                                "name": "multiValue",
                                "key": "IntegrityBasisCommercial",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "defaultValue": null,
                                "allowedValues": [
                                    "NA",
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_10"
                            },
                            {
                                "name": "text",
                                "key": "RiskReductionFactor",
                                "numberOfLines": "1",
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_11"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    },
                    {
                        "id": "Step2",
                        "fields": [
                            {
                                "name": "riskAssessmentTeam",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_0"
                            },
                            {
                                "name": "authoritySelector",
                                "authorityPropertyName": "RiskAssessmentFacilitator",
                                "textResource": "SORA_RiskAssessmentFacilitator",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "filter": {
                                    "defaultAllowedRoles": [
                                        "Level2RiskAssessor"
                                    ],
                                    "specificFilters": [
                                        {
                                            "variants": [
                                                "DefaultSafetyOverrideRiskAssessment"
                                            ],
                                            "roles": [],
                                            "origin": null
                                        }
                                    ]
                                },
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_1"
                            },
                            {
                                "name": "riskAssessmentTasks",
                                "copyParticipation": "Clone",
                                "categories": "SORAHazards",
                                "isRequired": true,
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_2"
                            },
                            {
                                "name": "text",
                                "key": "ReasonsForApplyingAndComments",
                                "numberOfLines": "5",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_3"
                            },
                            {
                                "name": "text",
                                "key": "MaximumSoraDuration",
                                "numberOfLines": "1",
                                "isRequired": true,
                                "copyParticipation": "Clone",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_4"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "SoraTemplateTeamAcceptance",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "SoraTemplateRiskFacilitatorAcceptance",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "SoraTemplateApprovalByAreaAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "SoraTemplateApprovalBySiteAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    },
                                    {
                                        "name": "signature",
                                        "signatureTypes": "SoraTemplateApprovalByFunctionalAuthority",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_5"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "SoraTemplateAuthorisation",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true,
                                                "hideShiftEndWarning": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_6"
                            },
                            {
                                "name": "signatureList",
                                "onlyVisibleIn": "Approved,AwaitingActivation,Active,Revalidate,Closed",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "SoraTemplateReAuthorisation",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true,
                                                "hideShiftEndWarning": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_7"
                            },
                            {
                                "name": "revalidationSignaturesPeriod",
                                "onlyVisibleIn": "AwaitingActivation,Active,Revalidate,Closed",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_8"
                            },
                            {
                                "name": "signatureList",
                                "onlyVisibleIn": "AwaitingActivation,Active,Revalidate",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "RevertSoraTemplateForModification",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_9"
                            },
                            {
                                "name": "signatureList",
                                "onlyVisibleIn": "AwaitingActivation,Active,Revalidate,Closed",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseSoraTemplate",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_10"
                            },
                            {
                                "name": "revertState",
                                "toState": "Requesting",
                                "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_11"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "Approved",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "copyWorkItem",
                        "titleResource": "CopySafetyOverrideRiskAssessmentTemplateAction"
                    },
                    {
                        "key": "deleteWorkItem",
                        "titleResource": "DeleteSORATemplateAction"
                    },
                    {
                        "key": "goToWizardStep",
                        "optionalInStates": [
                            "Requesting"
                        ],
                        "titleResource": "ApproveSoraTemplate",
                        "wizardStepId": "Step2"
                    },
                    {
                        "key": "goToWizardStep",
                        "optionalInStates": [
                            "Approved"
                        ],
                        "titleResource": "AuthoriseSoraTemplate",
                        "wizardStepId": "Step2"
                    },
                    {
                        "key": "goToWizardStep",
                        "optionalInStates": [
                            "Active"
                        ],
                        "titleResource": "ReauthoriseSoraTemplate",
                        "wizardStepId": "Step2"
                    },
                    {
                        "key": "goToWizardStep",
                        "requiredInStates": [
                            "Revalidate"
                        ],
                        "titleResource": "ReauthoriseSoraTemplate",
                        "wizardStepId": "Step2"
                    },
                    {
                        "key": "goToWizardStep",
                        "optionalInStates": [
                            "Active",
                            "Revalidate"
                        ],
                        "titleResource": "CloseSoraTemplate",
                        "wizardStepId": "Step2"
                    },
                    {
                        "key": "addCounterSignature",
                        "optionalInAllStatesExcept": [
                            "Closed"
                        ],
                        "fields": [
                            {
                                "name": "remarks",
                                "isRequired": true
                            }
                        ]
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchSoraTemplates",
                        "command": "SearchCertificates"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "Full",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "Full"
            }
        },
        {
            "name": "SafetyOverrideRiskAssessment",
            "type": "RiskAssessment",
            "defaultValues": {
                "riskAssessmentLevel": null
            },
            "variants": [
                {
                    "name": "DefaultSafetyOverrideRiskAssessment",
                    "rank": 1
                }
            ],
            "risks": [],
            "states": [
                {
                    "name": "Requesting"
                },
                {
                    "name": "AwaitingActivation"
                },
                {
                    "name": "Active"
                },
                {
                    "name": "Revalidate"
                },
                {
                    "name": "Expired"
                },
                {
                    "name": "Closed"
                }
            ],
            "reverseTransitions": [],
            "workspace": {
                "kind": "SafetyOverrideRiskAssessment",
                "workflowSteps": [
                    {
                        "name": "Draft",
                        "states": [
                            "Requesting"
                        ]
                    },
                    {
                        "name": "Live",
                        "states": [
                            "AwaitingActivation",
                            "Active",
                            "Revalidate",
                            "Expired"
                        ]
                    }
                ],
                "displayInMenu": true,
                "attachmentTypes": [
                    {
                        "type": "file"
                    }
                ],
                "searchFields": [
                    {
                        "name": "registrationNumber"
                    },
                    {
                        "name": "title"
                    }
                ],
                "bulkOperations": [],
                "certificatesSearchPageFields": [
                    {
                        "key": "0_registrationNumber",
                        "name": "registrationNumber"
                    },
                    {
                        "key": "1_site",
                        "name": "site"
                    },
                    {
                        "key": "2_state",
                        "name": "state"
                    },
                    {
                        "key": "3_title",
                        "name": "title"
                    },
                    {
                        "key": "4_workDescription",
                        "name": "workDescription"
                    },
                    {
                        "key": "5_multiValue",
                        "name": "multiValue",
                        "propertyKey": "OverrideBypassType",
                        "allowedValues": [
                            "Input",
                            "Output"
                        ]
                    },
                    {
                        "key": "6_multiValue",
                        "name": "multiValue",
                        "propertyKey": "OverallIntegrityLevel",
                        "allowedValues": [
                            "3",
                            "2",
                            "1",
                            "FireAndGas",
                            "HMA",
                            "SISBPCS",
                            "ControlLoP"
                        ]
                    }
                ],
                "certificatesSearchPageColumns": [
                    {
                        "name": "WorkItemImage"
                    },
                    {
                        "name": "Site"
                    },
                    {
                        "name": "RegistrationNumber"
                    },
                    {
                        "name": "Title"
                    },
                    {
                        "name": "Status"
                    },
                    {
                        "name": "TextProperties",
                        "textPropertyKey": "MaximumSoraDuration",
                        "titleResource": "ColumnLabel_MaximumSoraDuration"
                    },
                    {
                        "name": "WorkDescription",
                        "titleResource": "ColumnLabel_SafetyOverrideRiskAssessment_WorkDescription"
                    }
                ],
                "wizardSteps": [
                    {
                        "id": "Step1",
                        "fields": [
                            {
                                "name": "title",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_0"
                            },
                            {
                                "name": "site",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_1"
                            },
                            {
                                "name": "workingLocations",
                                "copyParticipation": "Template",
                                "workItemFilter": [
                                    {
                                        "kind": "SafetyOverrideRiskAssessmentTemplate",
                                        "workItemState": [
                                            "*"
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_2"
                            },
                            {
                                "name": "workObjects",
                                "browseBy": "Systems",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_3"
                            },
                            {
                                "name": "workDescription",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_4"
                            },
                            {
                                "name": "multiValue",
                                "key": "OverrideBypassType",
                                "copyParticipation": "Template",
                                "defaultValue": null,
                                "allowedValues": [
                                    "Input",
                                    "Output"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_5"
                            },
                            {
                                "name": "text",
                                "key": "OverrideBypassMethod",
                                "numberOfLines": "1",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_6"
                            },
                            {
                                "name": "multiValue",
                                "key": "OverallIntegrityLevel",
                                "copyParticipation": "Template",
                                "defaultValue": null,
                                "allowedValues": [
                                    "3",
                                    "2",
                                    "1",
                                    "FireAndGas",
                                    "HMA",
                                    "SISBPCS",
                                    "ControlLoP"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_7"
                            },
                            {
                                "name": "multiValue",
                                "key": "IntegrityBasisSafety",
                                "copyParticipation": "Template",
                                "defaultValue": null,
                                "allowedValues": [
                                    "NA",
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_8"
                            },
                            {
                                "name": "multiValue",
                                "key": "IntegrityBasisEnvironment",
                                "copyParticipation": "Template",
                                "defaultValue": null,
                                "allowedValues": [
                                    "NA",
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_9"
                            },
                            {
                                "name": "multiValue",
                                "key": "IntegrityBasisCommercial",
                                "copyParticipation": "Template",
                                "defaultValue": null,
                                "allowedValues": [
                                    "NA",
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_10"
                            },
                            {
                                "name": "text",
                                "key": "RiskReductionFactor",
                                "numberOfLines": "1",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step1_11"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate",
                            "Expired"
                        ]
                    },
                    {
                        "id": "Step2",
                        "fields": [
                            {
                                "name": "riskAssessmentTeam",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step2_0"
                            },
                            {
                                "name": "authoritySelector",
                                "authorityPropertyName": "RiskAssessmentFacilitator",
                                "copyParticipation": "Template",
                                "textResource": "SORA_RiskAssessmentFacilitator",
                                "filter": {
                                    "defaultAllowedRoles": [
                                        "Level2RiskAssessor"
                                    ],
                                    "specificFilters": [
                                        {
                                            "variants": [
                                                "DefaultSafetyOverrideRiskAssessment"
                                            ],
                                            "roles": [],
                                            "origin": null
                                        }
                                    ]
                                },
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step2_1"
                            },
                            {
                                "name": "riskAssessmentTasks",
                                "categories": "SORAHazards",
                                "copyParticipation": "Template",
                                "isRequired": true,
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step2_2"
                            },
                            {
                                "name": "text",
                                "key": "ReasonsForApplyingAndComments",
                                "numberOfLines": "5",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step2_3"
                            },
                            {
                                "name": "text",
                                "key": "MaximumSoraDuration",
                                "numberOfLines": "1",
                                "copyParticipation": "Template",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step2_4"
                            },
                            {
                                "name": "taskMonitoring",
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step2_5"
                            },
                            {
                                "name": "signatureList",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "VerifySora",
                                        "fields": [
                                            {
                                                "name": "period",
                                                "emptyDefaultEndDate": true
                                            },
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step2_6"
                            },
                            {
                                "name": "signatureList",
                                "hiddenIn": "Requesting",
                                "signatures": [
                                    {
                                        "name": "signature",
                                        "signatureTypes": "CloseSora",
                                        "fields": [
                                            {
                                                "name": "remarks",
                                                "isRequired": false
                                            }
                                        ]
                                    }
                                ],
                                "uniqueKey": "SafetyOverrideRiskAssessment_Step2_7"
                            }
                        ],
                        "visibleFromWorkflowSteps": [
                            "Draft"
                        ],
                        "showInStates": [
                            "Closed",
                            "Rejected",
                            "Requesting",
                            "AwaitingActivation",
                            "Active",
                            "Revalidate",
                            "Expired"
                        ]
                    }
                ],
                "actions": [
                    {
                        "key": "goToWizardStep",
                        "optionalInStates": [
                            "Requesting"
                        ],
                        "titleResource": "VerifySora",
                        "wizardStepId": "Step2"
                    },
                    {
                        "key": "goToWizardStep",
                        "optionalInStates": [
                            "Active"
                        ],
                        "requiredInStates": [
                            "Revalidate",
                            "Expired"
                        ],
                        "titleResource": "CloseSora",
                        "wizardStepId": "Step2"
                    },
                    {
                        "key": "startAudit",
                        "kind": "WorkItemAudit",
                        "variant": "InhibitsAndOverridesAudit"
                    }
                ],
                "commandBarButtons": [
                    {
                        "id": "SearchSafetyOverrideRiskAssessments",
                        "command": "SearchCertificates"
                    }
                ],
                "printProfiles": [
                    {
                        "name": "Frontpage",
                        "onlyForVariant": null
                    },
                    {
                        "name": "Risks",
                        "onlyForVariant": null
                    }
                ],
                "defaultPrintProfile": "Frontpage"
            }
        }
    ],
    "lifetimes": [
        {
            "variants": [
                "ConfinedSpaceEntry"
            ],
            "duration": 3,
            "unit": "Shifts",
            "risks": [],
            "kinds": [
                "Permit"
            ],
            "forTemplateBased": null
        },
        {
            "variants": [
                "HotWorkNakedFlame"
            ],
            "duration": 3,
            "unit": "Shifts",
            "risks": [],
            "kinds": [
                "Permit"
            ],
            "forTemplateBased": null
        },
        {
            "variants": [
                "HotWorkNakedFlame"
            ],
            "duration": 7,
            "unit": "Days",
            "risks": [],
            "kinds": [
                "Permit"
            ],
            "forTemplateBased": null
        },
        {
            "variants": [],
            "duration": 7,
            "unit": "Days",
            "risks": [],
            "kinds": [
                "Permit"
            ],
            "forTemplateBased": true
        },
        {
            "variants": [
                "ColdWork",
                "HotWorkSparkPotential",
                "BreakingContainment"
            ],
            "duration": 7,
            "unit": "Days",
            "risks": [],
            "kinds": [
                "Permit"
            ],
            "forTemplateBased": null
        },
        {
            "variants": [],
            "duration": 4,
            "unit": "Days",
            "risks": [],
            "kinds": [
                "SafetyOverrideRiskAssessment"
            ],
            "forTemplateBased": null
        }
    ],
    "modules": [
        {
            "name": "permitToWork",
            "workspaces": [
                {
                    "kind": "Permit",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Approved",
                            "states": [
                                "Approved",
                                "ReadyToVerify"
                            ]
                        },
                        {
                            "name": "Verified",
                            "states": [
                                "Verified"
                            ]
                        },
                        {
                            "name": "Authorised",
                            "states": [
                                "Authorised",
                                "ReAuthorized"
                            ]
                        },
                        {
                            "name": "Issued",
                            "states": [
                                "Issued",
                                "ReIssued"
                            ]
                        },
                        {
                            "name": "Live",
                            "states": [
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired"
                            ]
                        },
                        {
                            "name": "Suspended",
                            "states": [
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest"
                            ]
                        },
                        {
                            "name": "Closing",
                            "states": [
                                "Closing"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "isolationCertificate",
                            "kind": "Isolation",
                            "creationStateFromTemplate": "WaitingForAuthorization"
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "SafetyOverrideRiskAssessment",
                            "allowTemplateUsage": true,
                            "allowExistingUsage": true,
                            "allowNewUsage": false,
                            "templateLabelResource": "AttachTemplateButtonText"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workingLocation",
                            "name": "workingLocation"
                        },
                        {
                            "key": "5_systemOrEquipmentDescription",
                            "name": "systemOrEquipmentDescription"
                        },
                        {
                            "key": "6_signedByUsername",
                            "name": "signedByUsername"
                        },
                        {
                            "key": "7_dateRange",
                            "name": "dateRange"
                        },
                        {
                            "key": "8_isDeleted",
                            "name": "isDeleted"
                        },
                        {
                            "key": "9_workOrderDisplay",
                            "name": "workOrderDisplay"
                        },
                        {
                            "key": "10_workItemVariant",
                            "name": "workItemVariant"
                        },
                        {
                            "key": "11_isPlannedInShutdown",
                            "name": "isPlannedInShutdown",
                            "showProjectName": true
                        },
                        {
                            "key": "12_discipline",
                            "name": "discipline"
                        },
                        {
                            "key": "13_isAudited",
                            "name": "isAudited"
                        },
                        {
                            "key": "14_riskArea",
                            "name": "riskArea"
                        },
                        {
                            "key": "15_workDescription",
                            "name": "workDescription"
                        },
                        {
                            "key": "16_hasAttachment",
                            "name": "hasAttachment",
                            "kind": "SafetyOverrideRiskAssessment"
                        },
                        {
                            "key": "17_timeLeft",
                            "name": "timeLeft"
                        },
                        {
                            "key": "18_isTemplateBased",
                            "name": "isTemplateBased"
                        },
                        {
                            "key": "19_hasAttachment",
                            "name": "hasAttachment",
                            "kind": "Isolation"
                        },
                        {
                            "key": "20_riskAssessmentLevel",
                            "name": "riskAssessmentLevel"
                        },
                        {
                            "key": "21_textPropertyBoolean",
                            "name": "textPropertyBoolean",
                            "key": "RestrictedWorkSpace"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage"
                        },
                        {
                            "name": "RegistrationNumber",
                            "width": "150"
                        },
                        {
                            "name": "Title",
                            "width": "150"
                        },
                        {
                            "name": "Equipment",
                            "width": "100"
                        },
                        {
                            "name": "Location",
                            "width": "100"
                        },
                        {
                            "name": "PlannedStartDateTime",
                            "width": "120"
                        },
                        {
                            "name": "ExpiresAtUtcDateTime",
                            "width": "120",
                            "titleResource": "ColumnLabel_TimeLeft"
                        },
                        {
                            "name": "AttachedIccs",
                            "width": "120"
                        },
                        {
                            "name": "IsAudited",
                            "width": "60"
                        },
                        {
                            "name": "WorkOrderDisplay",
                            "width": "120"
                        },
                        {
                            "name": "HasPrerequisites",
                            "width": "60"
                        },
                        {
                            "name": "ShutdownProjectName",
                            "width": "60"
                        },
                        {
                            "name": "InitialPeriodStartDate",
                            "width": "100"
                        },
                        {
                            "name": "LastRevalidationPeriodStartDate",
                            "width": "100"
                        },
                        {
                            "name": "RiskAssessmentLevel",
                            "width": "60",
                            "titleResource": "ColumnLabel_RiskAssessmentLevel"
                        }
                    ],
                    "workOrder": {
                        "denyDirectPermitCreation": false,
                        "denyCreateFromTemplate": true,
                        "denyCreateFromQuestionnaire": false,
                        "workOrderSearchFields": [
                            {
                                "key": "0_workOrderDisplay",
                                "name": "workOrderDisplay"
                            },
                            {
                                "key": "1_workOrderTitle",
                                "name": "workOrderTitle"
                            },
                            {
                                "key": "2_workOrderDescription",
                                "name": "workOrderDescription"
                            },
                            {
                                "key": "3_workOrderDateRange",
                                "name": "workOrderDateRange"
                            },
                            {
                                "key": "4_workOrderSite",
                                "name": "workOrderSite"
                            }
                        ],
                        "workOrderColumns": [
                            {
                                "name": "Display"
                            },
                            {
                                "name": "Title"
                            },
                            {
                                "name": "Description"
                            },
                            {
                                "name": "PlannedStartDate"
                            },
                            {
                                "name": "PlannedEndDate"
                            },
                            {
                                "name": "Site"
                            }
                        ]
                    },
                    "wizardSteps": [
                        {
                            "id": "RiskAssessmentDraft",
                            "fields": [
                                {
                                    "name": "warning",
                                    "onlyVisibleWhenCopying": true,
                                    "textResource": "HazardsAndControlMeasuresShouldBeEdited",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_0"
                                },
                                {
                                    "name": "lessonsLearnedNotice",
                                    "onlyVisibleWhenCopying": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_1"
                                },
                                {
                                    "name": "riskOfWork",
                                    "onlyVisibleWhenOriginatingFrom": "Template",
                                    "hiddenWhenOriginatingFrom": "Template",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_2"
                                },
                                {
                                    "name": "workItemVariant",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_3"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "ReasonForWork",
                                    "isRequired": true,
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "Planned",
                                        "Emergent"
                                    ],
                                    "uniqueKey": "Permit_RiskAssessmentDraft_4"
                                },
                                {
                                    "name": "workOrders",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_5"
                                },
                                {
                                    "name": "title",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_6"
                                },
                                {
                                    "name": "workDescription",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_7"
                                },
                                {
                                    "name": "text",
                                    "key": "AdditionalTaskDescription",
                                    "onlyVisibleWhenOriginatingFrom": "Template",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_8"
                                },
                                {
                                    "name": "site",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_9"
                                },
                                {
                                    "name": "workingLocations",
                                    "onlyVisibleIn": "Requesting,Approved,ReadyToVerify,Closed",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "workItemFilter": [],
                                    "uniqueKey": "Permit_RiskAssessmentDraft_10"
                                },
                                {
                                    "name": "workingLocations",
                                    "hiddenIn": "Requesting,Approved,ReadyToVerify,Closed",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "workItemFilter": [
                                        {
                                            "kind": "Permit",
                                            "workItemState": [
                                                "Active",
                                                "SuspendedForEmergency",
                                                "SuspendedForReauthorization",
                                                "SuspendedForRevalidation",
                                                "SuspendedForSanctionToTest"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_RiskAssessmentDraft_11"
                                },
                                {
                                    "name": "affectedLocations",
                                    "onlyVisibleIn": "Requesting,Approved,ReadyToVerify,Closed",
                                    "copyParticipation": "CloneAndTemplate",
                                    "workItemFilter": [],
                                    "uniqueKey": "Permit_RiskAssessmentDraft_12"
                                },
                                {
                                    "name": "affectedLocations",
                                    "hiddenIn": "Requesting,Approved,ReadyToVerify,Closed",
                                    "copyParticipation": "CloneAndTemplate",
                                    "workItemFilter": [
                                        {
                                            "kind": "Permit",
                                            "workItemState": [
                                                "Active",
                                                "SuspendedForEmergency",
                                                "SuspendedForReauthorization",
                                                "SuspendedForRevalidation",
                                                "SuspendedForSanctionToTest"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_RiskAssessmentDraft_13"
                                },
                                {
                                    "name": "workObjects",
                                    "copyParticipation": "CloneAndTemplate",
                                    "allowMultipleEquipment": true,
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_14"
                                },
                                {
                                    "name": "numberOfPersons",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_15"
                                },
                                {
                                    "name": "text",
                                    "key": "ToolsToBeUsed",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_16"
                                },
                                {
                                    "name": "text",
                                    "key": "EquipmentToBeUsed",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_17"
                                },
                                {
                                    "name": "text",
                                    "key": "ContactOrOtherDetails",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_18"
                                },
                                {
                                    "name": "discipline",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_19"
                                },
                                {
                                    "name": "isolationCertificateRequirement",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_20"
                                },
                                {
                                    "name": "isPlannedInShutdown",
                                    "copyParticipation": "Clone",
                                    "showProjectName": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_21"
                                },
                                {
                                    "name": "textCheckBox",
                                    "key": "RestrictedWorkSpace",
                                    "copyParticipation": "CloneAndTemplate",
                                    "onlyVisibleWhenOriginatingFrom": "Template",
                                    "onlyVisibleForRisksOfWork": "Normal",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_22"
                                },
                                {
                                    "name": "textCheckBox",
                                    "key": "RestrictedWorkSpace",
                                    "copyParticipation": "CloneAndTemplate",
                                    "hiddenWhenOriginatingFrom": "Template",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_23"
                                },
                                {
                                    "name": "markForSanctionToTest",
                                    "copyParticipation": "CloneAndTemplate",
                                    "hiddenWhenOriginatingFrom": "Template",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_24"
                                },
                                {
                                    "name": "riskAssessmentLevel",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_25"
                                },
                                {
                                    "name": "riskAssessmentTeam",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_26"
                                },
                                {
                                    "name": "authoritySelector",
                                    "authorityPropertyName": "RiskAssessmentFacilitator",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "textResource": "RiskAssessmentFacilitatorField",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "filter": {
                                        "defaultAllowedRoles": [
                                            "Level2RiskAssessor"
                                        ],
                                        "specificFilters": [
                                            {
                                                "variants": [
                                                    "ColdWork",
                                                    "HotWorkSparkPotential",
                                                    "BreakingContainment"
                                                ],
                                                "roles": [],
                                                "origin": "Template"
                                            }
                                        ]
                                    },
                                    "uniqueKey": "Permit_RiskAssessmentDraft_27"
                                },
                                {
                                    "name": "riskAssessmentTasks",
                                    "copyParticipation": "CloneAndTemplate",
                                    "readOnlyIfNoRiskLevelSelected": true,
                                    "categories": "PermitHazards",
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_28"
                                },
                                {
                                    "name": "highestResidualRisk",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "uniqueKey": "Permit_RiskAssessmentDraft_29"
                                },
                                {
                                    "name": "residualRisk",
                                    "onlyVisibleForRiskAssessmentLevel": "Level1",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Permit_RiskAssessmentDraft_30"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "ReadyToVerify",
                                "Verified",
                                "Authorised",
                                "ReAuthorized",
                                "Issued",
                                "ReIssued",
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest",
                                "Closing"
                            ]
                        },
                        {
                            "id": "PermitToWorkDraft",
                            "fields": [
                                {
                                    "name": "controlMeasures",
                                    "categories": "SupplementaryCertificates",
                                    "textResource": "SupplementaryCertificatesControlMeasures",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Permit_PermitToWorkDraft_0"
                                },
                                {
                                    "name": "gasMeasurementRequirements",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Permit_PermitToWorkDraft_1"
                                },
                                {
                                    "name": "taskMonitoring",
                                    "uniqueKey": "Permit_PermitToWorkDraft_2"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveLevel1BySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApprovePermitByRiskAssessmentTeam",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApprovePermitByRiskAssessmentFacilitator",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveLevel2ByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveArea2Permit",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveConfinedSpaceEntryPermit",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveArea3OrHigherPermit",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveHotWorkNakedFlamePermit",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_PermitToWorkDraft_3"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "ReadyToVerify",
                                "Verified",
                                "Authorised",
                                "ReAuthorized",
                                "Issued",
                                "ReIssued",
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest",
                                "Closing"
                            ]
                        },
                        {
                            "id": "RiskAssessmentApproved",
                            "fields": [
                                {
                                    "name": "warning",
                                    "textResource": "DateChangesToBeSavedBeforeConflictManagementUpdated",
                                    "uniqueKey": "Permit_RiskAssessmentApproved_0"
                                },
                                {
                                    "name": "partlySignedWarning",
                                    "textResource": "DraftPermitChangeWillRevertSignature",
                                    "inState": "Requesting",
                                    "signatureTypes": "ApprovePermitByRiskAssessmentTeam,ApprovePermitByRiskAssessmentFacilitator",
                                    "uniqueKey": "Permit_RiskAssessmentApproved_1"
                                },
                                {
                                    "name": "workingPeriod",
                                    "isRequired": true,
                                    "ignoreWorkingHours": false,
                                    "uniqueKey": "Permit_RiskAssessmentApproved_2"
                                },
                                {
                                    "name": "text",
                                    "key": "PMReference",
                                    "numberOfLines": "1",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "Permit_RiskAssessmentApproved_3"
                                },
                                {
                                    "name": "text",
                                    "key": "SIMOPS",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "Permit_RiskAssessmentApproved_4"
                                },
                                {
                                    "name": "nearbyActivitiesOnSystem",
                                    "workItemFilter": [
                                        {
                                            "kind": "Permit",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_RiskAssessmentApproved_5"
                                },
                                {
                                    "name": "nearbyActivitiesAtLocations",
                                    "workItemFilter": [
                                        {
                                            "kind": "Permit",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_RiskAssessmentApproved_6"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "ReadyToVerify",
                                "Verified",
                                "Authorised",
                                "ReAuthorized",
                                "Issued",
                                "ReIssued",
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest",
                                "Closing"
                            ]
                        },
                        {
                            "id": "PermitApproved",
                            "fields": [
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "PermitReadyForVerification",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "VerifyPermit",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "VerifyPermitBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_PermitApproved_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AuthoriseDraftTemplateBasedPermit",
                                            "fields": [
                                                {
                                                    "name": "signatureLifetimePeriod"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_PermitApproved_1"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "IssueDraftTemplateBasedPermit",
                                            "fields": [
                                                {
                                                    "name": "confirmPrerequisiteControlsInPlace",
                                                    "errorResource": "SelfDeclarationPrerequisiteControlsInPlaceErrorMessage"
                                                },
                                                {
                                                    "name": "period",
                                                    "readonly": false
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_PermitApproved_2"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "Approved",
                                    "toState": "Requesting",
                                    "uniqueKey": "Permit_PermitApproved_3"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "ReadyToVerify",
                                    "hiddenWhenOriginatingFrom": "Template",
                                    "uniqueKey": "Permit_PermitApproved_4"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "ReadyToVerify",
                                    "toState": "Requesting",
                                    "onlyVisibleWhenOriginatingFrom": "Template",
                                    "uniqueKey": "Permit_PermitApproved_5"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Approved"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Approved",
                                "ReadyToVerify",
                                "Verified",
                                "Authorised",
                                "ReAuthorized",
                                "Issued",
                                "ReIssued",
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest",
                                "Closing"
                            ]
                        },
                        {
                            "id": "Verified",
                            "fields": [
                                {
                                    "name": "text",
                                    "key": "DailyTaskScope",
                                    "uniqueKey": "Permit_Verified_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AuthorisePermit",
                                            "fields": [
                                                {
                                                    "name": "signatureLifetimePeriod"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_Verified_1"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "Verified",
                                    "toState": "Approved",
                                    "hiddenWhenOriginatingFrom": "Template",
                                    "uniqueKey": "Permit_Verified_2"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "Verified",
                                    "onlyVisibleWhenOriginatingFrom": "Template",
                                    "uniqueKey": "Permit_Verified_3"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Verified"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Verified",
                                "Authorised",
                                "ReAuthorized",
                                "Issued",
                                "ReIssued",
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest",
                                "Closing"
                            ]
                        },
                        {
                            "id": "Issuing",
                            "fields": [
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "IssuePermit",
                                            "fields": [
                                                {
                                                    "name": "informAboutAmendedIccAttachment"
                                                },
                                                {
                                                    "name": "existingMeasurements"
                                                },
                                                {
                                                    "name": "confirmPrerequisiteControlsInPlace",
                                                    "errorResource": "SelfDeclarationPrerequisiteControlsInPlaceErrorMessage"
                                                },
                                                {
                                                    "name": "period",
                                                    "readonly": false
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AcceptPermit",
                                            "triggerPrintout": true,
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "readonly": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_Issuing_0"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "Authorised,Issued",
                                    "uniqueKey": "Permit_Issuing_1"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Authorised"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Authorised",
                                "ReAuthorized",
                                "Issued",
                                "ReIssued",
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest",
                                "Closing"
                            ]
                        },
                        {
                            "id": "Revalidation",
                            "fields": [
                                {
                                    "name": "text",
                                    "key": "DailyTaskScope",
                                    "uniqueKey": "Permit_Revalidation_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ReAuthorizePermit",
                                            "fields": [
                                                {
                                                    "name": "signatureLifetimePeriod"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_Revalidation_1"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RevalidatePermit",
                                            "fields": [
                                                {
                                                    "name": "existingMeasurements"
                                                },
                                                {
                                                    "name": "confirmPrerequisiteControlsInPlace",
                                                    "errorResource": "SelfDeclarationPrerequisiteControlsInPlaceErrorMessage"
                                                },
                                                {
                                                    "name": "informAboutAmendedIccAttachment"
                                                },
                                                {
                                                    "name": "period",
                                                    "readonly": false
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ReactivatePermit",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "readonly": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_Revalidation_2"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "ReAuthorized,ReIssued",
                                    "uniqueKey": "Permit_Revalidation_3"
                                },
                                {
                                    "name": "revalidationSignaturesPeriod",
                                    "uniqueKey": "Permit_Revalidation_4"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Authorised",
                                "Live",
                                "Suspended",
                                "ReIssued",
                                "Closing"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Authorised",
                                "ReAuthorized",
                                "Issued",
                                "ReIssued",
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest",
                                "Closing"
                            ],
                            "unsignedSignaturesAtTop": true
                        },
                        {
                            "id": "Closing",
                            "fields": [
                                {
                                    "name": "performingAuthorityFeedback",
                                    "uniqueKey": "Permit_Closing_0"
                                },
                                {
                                    "name": "lessonsLearned",
                                    "allowEditingAlways": true,
                                    "uniqueKey": "Permit_Closing_1"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "Suspend",
                                            "fields": [
                                                {
                                                    "name": "performingAuthorityFeedback"
                                                },
                                                {
                                                    "name": "suspend",
                                                    "reasons": "Revalidation, SanctionToTest"
                                                },
                                                {
                                                    "name": "workingPeriod"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_Closing_2"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompletePermit",
                                            "fields": [
                                                {
                                                    "name": "performingAuthorityFeedback"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RevertCompletedPermit",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ClosePermit",
                                            "fields": [
                                                {
                                                    "name": "approveLessonsLearned",
                                                    "requireAnswerForDeclaration": false,
                                                    "resourceKey": "Label_FeedbackAndLessonsLearnedReviewed"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Permit_Closing_3"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Authorised",
                                "Live",
                                "Suspended",
                                "Closing"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Authorised",
                                "ReAuthorized",
                                "Issued",
                                "ReIssued",
                                "Active",
                                "AwaitingActivation",
                                "Revalidate",
                                "InReview",
                                "Expired",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "SuspendedForSanctionToTest",
                                "Closing"
                            ],
                            "unsignedSignaturesAtTop": true
                        }
                    ],
                    "actions": [
                        {
                            "key": "attachWorkItemAttachment",
                            "attachmentKind": "Isolation",
                            "titleResource": "AddIsolationCertificateAction"
                        },
                        {
                            "key": "managePermitDependencies",
                            "optionalInStates": [
                                "Requesting",
                                "Approved",
                                "Verified",
                                "Authorised",
                                "Issued",
                                "ReAuthorized"
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "GasTesting",
                            "titleResource": "AddMeasurementsAction",
                            "actionConditionName": "Permit_2",
                            "fields": [
                                {
                                    "name": "addMeasurements",
                                    "detectorNumberUsage": "Optional",
                                    "uniqueKey": "Permit_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "showMeasurements",
                            "optionalInStates": [
                                "Requesting",
                                "Authorised",
                                "Issued",
                                "Active",
                                "SuspendedForEmergency",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForSanctionToTest",
                                "Expired"
                            ]
                        },
                        {
                            "key": "addSignature",
                            "titleResource": "Suspend",
                            "for": "Suspend",
                            "actionConditionName": "Permit_4",
                            "fields": [
                                {
                                    "name": "performingAuthorityFeedback",
                                    "uniqueKey": "Permit_undefined_0"
                                },
                                {
                                    "name": "suspend",
                                    "reasons": "Revalidation, SanctionToTest",
                                    "uniqueKey": "Permit_undefined_1"
                                },
                                {
                                    "name": "workingPeriod",
                                    "ignoreWorkingHours": false,
                                    "uniqueKey": "Permit_undefined_2"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addCounterSignature",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "titleResource": "TakeOverPerformingAuthority",
                            "for": "TakeOverPerformingAuthority",
                            "actionConditionName": "Permit_6",
                            "fields": [
                                {
                                    "name": "signatureTextMessage",
                                    "textResource": "SelfDeclarationTakeOverPerformingAuthority",
                                    "uniqueKey": "Permit_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "titleResource": "TakeOverAreaAuthority",
                            "for": "TakeOverAreaAuthority",
                            "actionConditionName": "Permit_7",
                            "fields": [
                                {
                                    "name": "signatureTextMessage",
                                    "textResource": "SelfDeclarationTakeOverAreaAuthority",
                                    "uniqueKey": "Permit_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "titleResource": "TakeOverSiteAuthority",
                            "for": "TakeOverSiteAuthority",
                            "actionConditionName": "Permit_8",
                            "fields": [
                                {
                                    "name": "signatureTextMessage",
                                    "textResource": "SelfDeclarationTakeOverSiteAuthority",
                                    "uniqueKey": "Permit_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "deleteWorkItem",
                            "titleResource": "DeletePermitAction"
                        },
                        {
                            "key": "copyWorkItem",
                            "titleResource": "CopyPermitAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "PermitToWorkDraft",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "PermitToWorkDraftAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "PermitApproved",
                            "requiredInStates": [
                                "ReadyToVerify"
                            ],
                            "titleResource": "VerifyPermitAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "PermitApproved",
                            "requiredInStates": [
                                "Approved"
                            ],
                            "titleResource": "PermitApprovedAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Verified",
                            "requiredInStates": [
                                "Verified"
                            ],
                            "titleResource": "VerifiedAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Verified",
                            "optionalInStates": [
                                "Authorised",
                                "Issued"
                            ],
                            "titleResource": "VerifiedAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Issuing",
                            "requiredInStates": [
                                "Authorised"
                            ],
                            "titleResource": "IssuingAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Issuing",
                            "optionalInStates": [
                                "Issued"
                            ],
                            "titleResource": "IssuingAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Issuing",
                            "requiredInStates": [
                                "Issued"
                            ],
                            "optionalInStates": [
                                "Authorised"
                            ],
                            "titleResource": "AcceptAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Revalidation",
                            "optionalInStates": [
                                "AwaitingActivation",
                                "Active",
                                "Revalidate",
                                "Expired",
                                "SuspendedForRevalidation",
                                "SuspendedForReauthorization",
                                "SuspendedForEmergency",
                                "ReAuthorized",
                                "ReIssued",
                                "InReview"
                            ],
                            "titleResource": "ReauthorisePermitAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Revalidation",
                            "optionalInStates": [
                                "SuspendedForRevalidation",
                                "SuspendedForEmergency",
                                "ReAuthorized"
                            ],
                            "titleResource": "RevalidatePermitAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Revalidation",
                            "optionalInStates": [
                                "ReIssued"
                            ],
                            "titleResource": "ReacceptPermitAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Closing",
                            "optionalInStates": [
                                "Active",
                                "Revalidate",
                                "SuspendedForEmergency",
                                "SuspendedForReauthorization",
                                "SuspendedForRevalidation",
                                "SuspendedForSanctionToTest",
                                "Expired",
                                "InReview"
                            ],
                            "titleResource": "CompletePermitAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Closing",
                            "optionalInStates": [
                                "Closing"
                            ],
                            "titleResource": "RevertPermitToSuspendedAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Closing",
                            "optionalInStates": [
                                "ReAuthorized"
                            ],
                            "requiredInStates": [
                                "Closing"
                            ],
                            "titleResource": "ClosePermitAction"
                        },
                        {
                            "key": "transferOwnership",
                            "signatureType": "TransferOwnershipAction",
                            "selfDeclarationResource": "TransferOwnershipDeclaration",
                            "errorMessageResource": "TransferOwnershipErrorMessage"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "PermitToWorkDraft",
                            "optionalInAllStatesExcept": [
                                "Complete",
                                "Closed"
                            ],
                            "titleResource": "SetTaskMonitoringAction"
                        },
                        {
                            "key": "copyAsTemplate",
                            "titleResource": "CopyPermitAsTemplateAction",
                            "optionalInAllStatesExcept": [
                                "Requesting"
                            ],
                            "creationState": "Approved"
                        },
                        {
                            "key": "startAudit",
                            "kind": "WorkItemAudit",
                            "variant": "PermitAudit"
                        },
                        {
                            "key": "startAudit",
                            "kind": "WorkItemAudit",
                            "variant": "LiftingAudit"
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkAsNotCopyable",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchPermits",
                            "command": "SearchCertificates"
                        },
                        {
                            "id": "CCR",
                            "command": "ShowCcr"
                        },
                        {
                            "id": "TaskMonitoringOverview",
                            "command": "ShowTaskMonitoringOverview"
                        },
                        {
                            "id": "GasMeasurementsOverview",
                            "command": "ShowGasMeasurementsOverview"
                        },
                        {
                            "id": "SuspendAll",
                            "command": "ShowSignatureBox",
                            "signature": {
                                "type": "SuspendAllActivePermits",
                                "fields": [
                                    {
                                        "name": "suspendSite",
                                        "filteredBy": "AreaAuthority"
                                    },
                                    {
                                        "name": "remarks",
                                        "isRequired": true
                                    }
                                ]
                            }
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "Permit",
                            "onlyForVariant": null
                        },
                        {
                            "name": "FrontPageAndToolboxTalk",
                            "onlyForVariant": null
                        },
                        {
                            "name": "Full",
                            "onlyForVariant": null
                        },
                        {
                            "name": "FullWithCseLog",
                            "onlyForVariant": "ConfinedSpaceEntry"
                        },
                        {
                            "name": "All",
                            "onlyForVariant": null
                        },
                        {
                            "name": "CseLog",
                            "onlyForVariant": "ConfinedSpaceEntry"
                        }
                    ],
                    "defaultPrintProfile": "All"
                },
                {
                    "kind": "Isolation",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting",
                                "DesignComplete"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Approved",
                            "states": [
                                "WaitingForAuthorization"
                            ]
                        },
                        {
                            "name": "Isolating",
                            "states": [
                                "IsolationInProgress",
                                "RequestedForReisolation"
                            ]
                        },
                        {
                            "name": "Live",
                            "states": [
                                "IsolationInPlace",
                                "IsolationInPlaceForLongTerm",
                                "RequestedForSanctionToTest",
                                "IsolationInPlaceForSanctionToTest"
                            ]
                        },
                        {
                            "name": "Deisolating",
                            "states": [
                                "DeisolationInProgress"
                            ]
                        },
                        {
                            "name": "Deisolated",
                            "states": [
                                "Deisolated"
                            ]
                        },
                        {
                            "name": "Amendments",
                            "states": [
                                "Modification"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "riskAssessment",
                            "kind": "TaskRiskAssessment",
                            "defaultLevel": "Level2"
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "OperationalRiskAssessment",
                            "defaultLevel": "Level2",
                            "allowExistingUsage": true
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "SafetyOverrideRiskAssessment",
                            "allowTemplateUsage": true,
                            "allowExistingUsage": true,
                            "allowNewUsage": false,
                            "templateLabelResource": "AttachTemplateButtonText"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workingLocation",
                            "name": "workingLocation"
                        },
                        {
                            "key": "5_systemOrEquipmentDescription",
                            "name": "systemOrEquipmentDescription"
                        },
                        {
                            "key": "6_signedByUsername",
                            "name": "signedByUsername"
                        },
                        {
                            "key": "7_dateRange",
                            "name": "dateRange"
                        },
                        {
                            "key": "8_isDeleted",
                            "name": "isDeleted"
                        },
                        {
                            "key": "9_longTermIsolation",
                            "name": "longTermIsolation",
                            "options": "LtiOnly,LtiUpForAudit,LtiUpForReview,LtiUpForAuditOrReview"
                        },
                        {
                            "key": "10_isAudited",
                            "name": "isAudited"
                        },
                        {
                            "key": "11_hasPressureBuildUpIsolation",
                            "name": "hasPressureBuildUpIsolation"
                        },
                        {
                            "key": "12_hasUti",
                            "name": "hasUti"
                        },
                        {
                            "key": "13_hasAttachment",
                            "name": "hasAttachment",
                            "kind": "SafetyOverrideRiskAssessment"
                        },
                        {
                            "key": "14_compliesWithIsolationStandardAndLtiPositive",
                            "name": "compliesWithIsolationStandardAndLtiPositive"
                        },
                        {
                            "key": "15_isPositive",
                            "name": "isPositive"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage"
                        },
                        {
                            "name": "RegistrationNumber"
                        },
                        {
                            "name": "Status"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "PlannedStartDateTime"
                        },
                        {
                            "name": "IsolationInPlaceDateTime"
                        },
                        {
                            "name": "CompliesWithIsolationStandardAndLtiPositive"
                        },
                        {
                            "name": "IsPositive"
                        },
                        {
                            "name": "IsolationPointCount"
                        },
                        {
                            "name": "HasRiskAssessmentLevel2"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "SpecifyIsolationValues",
                            "fields": [
                                {
                                    "name": "lessonsLearnedNotice",
                                    "onlyVisibleWhenCopying": true,
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_0"
                                },
                                {
                                    "name": "workingPeriod",
                                    "isRequired": true,
                                    "ignoreWorkingHours": true,
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_1"
                                },
                                {
                                    "name": "site",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_2"
                                },
                                {
                                    "name": "workingLocations",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "workItemFilter": [
                                        {
                                            "kind": "Isolation",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_3"
                                },
                                {
                                    "name": "workObjects",
                                    "copyParticipation": "CloneAndTemplate",
                                    "allowMultipleEquipment": true,
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_4"
                                },
                                {
                                    "name": "title",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_5"
                                },
                                {
                                    "name": "workOrderNumber",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_6"
                                },
                                {
                                    "name": "workDescription",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "maxLength": "240",
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_7"
                                },
                                {
                                    "name": "text",
                                    "key": "IsolationDescription",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_8"
                                },
                                {
                                    "name": "contingencyPlan",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_9"
                                },
                                {
                                    "name": "lockoutKey",
                                    "uniqueKey": "Isolation_SpecifyIsolationValues_10"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "WaitingForAuthorization",
                                "IsolationInProgress",
                                "RequestedForReisolation",
                                "IsolationInPlace",
                                "IsolationInPlaceForLongTerm",
                                "RequestedForSanctionToTest",
                                "IsolationInPlaceForSanctionToTest",
                                "DeisolationInProgress",
                                "Deisolated",
                                "Modification"
                            ]
                        },
                        {
                            "id": "SpecifyIsolationInstructionPlan",
                            "fields": [
                                {
                                    "name": "isolationInstructionPlan",
                                    "copyParticipation": "CloneAndTemplate",
                                    "mode": "DesignIsolation",
                                    "shownInstructionTypes": "all",
                                    "copyNewActionsToDeisolation": true,
                                    "copyInitialIsolationCommentsToDeisolation": true,
                                    "columns": [
                                        {
                                            "name": "sequenceNumber"
                                        },
                                        {
                                            "name": "tagNumber"
                                        },
                                        {
                                            "name": "equipment"
                                        },
                                        {
                                            "name": "isolationType"
                                        },
                                        {
                                            "name": "isolationMethod"
                                        },
                                        {
                                            "name": "isolatedState",
                                            "emphasized": true
                                        },
                                        {
                                            "name": "notIsolatedState",
                                            "emphasized": true
                                        },
                                        {
                                            "name": "comments"
                                        },
                                        {
                                            "name": "pbu"
                                        },
                                        {
                                            "name": "stt"
                                        },
                                        {
                                            "name": "uti",
                                            "forActions": true
                                        },
                                        {
                                            "name": "verificationRequired"
                                        }
                                    ],
                                    "uniqueKey": "Isolation_SpecifyIsolationInstructionPlan_0"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "WaitingForAuthorization",
                                "IsolationInProgress",
                                "RequestedForReisolation",
                                "IsolationInPlace",
                                "IsolationInPlaceForLongTerm",
                                "RequestedForSanctionToTest",
                                "IsolationInPlaceForSanctionToTest",
                                "DeisolationInProgress",
                                "Deisolated",
                                "Modification"
                            ]
                        },
                        {
                            "id": "SpecifyDeisolationInstructionPlan",
                            "fields": [
                                {
                                    "name": "isolationInstructionPlan",
                                    "copyParticipation": "CloneAndTemplate",
                                    "mode": "DesignDeisolation",
                                    "shownInstructionTypes": "all",
                                    "columns": [
                                        {
                                            "name": "sequenceNumber"
                                        },
                                        {
                                            "name": "tagNumber"
                                        },
                                        {
                                            "name": "equipment"
                                        },
                                        {
                                            "name": "isolationType"
                                        },
                                        {
                                            "name": "isolationMethod"
                                        },
                                        {
                                            "name": "isolatedState",
                                            "emphasized": true
                                        },
                                        {
                                            "name": "notIsolatedState",
                                            "emphasized": true
                                        },
                                        {
                                            "name": "comments"
                                        },
                                        {
                                            "name": "pbu"
                                        },
                                        {
                                            "name": "stt"
                                        },
                                        {
                                            "name": "uti"
                                        },
                                        {
                                            "name": "verificationRequired"
                                        }
                                    ],
                                    "uniqueKey": "Isolation_SpecifyDeisolationInstructionPlan_0"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "WaitingForAuthorization",
                                "IsolationInProgress",
                                "RequestedForReisolation",
                                "IsolationInPlace",
                                "IsolationInPlaceForLongTerm",
                                "RequestedForSanctionToTest",
                                "IsolationInPlaceForSanctionToTest",
                                "DeisolationInProgress",
                                "Deisolated",
                                "Modification"
                            ]
                        },
                        {
                            "id": "DraftIsolationCertificate",
                            "fields": [
                                {
                                    "name": "isolationSchemeAssessments",
                                    "copyParticipation": "Template",
                                    "isRequired": true,
                                    "editPermissions": {
                                        "ElectricalLowVoltageLevel1": [
                                            "*"
                                        ],
                                        "ElectricalHighVoltage": [
                                            "*"
                                        ],
                                        "ElectricalLowVoltage": [
                                            "*"
                                        ],
                                        "Control": [
                                            "*"
                                        ],
                                        "Process": [
                                            "*"
                                        ]
                                    },
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_0"
                                },
                                {
                                    "name": "attachWorkItem",
                                    "kind": "TaskRiskAssessment",
                                    "isRequired": true,
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_1"
                                },
                                {
                                    "name": "residualRisk",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_2"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "RequiresAbnormalOperatingCondition",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "Yes",
                                        "No"
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_3"
                                },
                                {
                                    "name": "lessonsLearned",
                                    "allowEditingAlways": true,
                                    "onlyVisibleForStored": true,
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_4"
                                },
                                {
                                    "name": "taskMonitoring",
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_5"
                                },
                                {
                                    "name": "signatureList",
                                    "titleResource": "SignatureList_IsolationApproval",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteIsolationCertificateDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteControlIsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteElectricalLowVoltageLevel1IsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteElectricalLowVoltageIsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteElectricalHighVoltageIsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteProcessIsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestIsolationCertificate",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_6"
                                },
                                {
                                    "name": "signatureList",
                                    "titleResource": "SignatureList_Isolation",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestIsolations",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "RequestIsolation",
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CancelIsolationRequest",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "CancelRequestedIsolations",
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ConfirmElectricalLowVoltageIsolations, ConfirmElectricalLowVoltageLevel1Isolations, ConfirmElectricalHighVoltageIsolations, ConfirmControlIsolations, ConfirmProcessIsolations, ConfirmIsolationActionPerformed",
                                            "titleResource": "ConfirmIsolations",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "ConfirmIsolation",
                                                    "autoSelectPreviousRows": false,
                                                    "utiUsage": "Point,Action",
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CrossCheckIsolations",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "CrossCheckIsolation",
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ConfirmAllIsolationsInPlace",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "ConfirmAllIsolationsInPlace",
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_7"
                                },
                                {
                                    "name": "signatureList",
                                    "titleResource": "SignatureList_LongTermIsolation",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "MoveToLongTerm",
                                            "fields": [
                                                {
                                                    "name": "positiveIsolation"
                                                },
                                                {
                                                    "name": "moveIsolationCertificateToLongTerm"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": true
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AuditLti",
                                            "skipClientValidation": true,
                                            "fields": [
                                                {
                                                    "name": "selfDeclarationDeterminingRemarksRequirement",
                                                    "textResource": "AuditLtiDeclaration"
                                                },
                                                {
                                                    "name": "positiveIsolation"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ReviewLti",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "MoveFromLongTerm",
                                            "fields": [
                                                {
                                                    "name": "signatureTextMessage",
                                                    "textResource": "ConfirmThatAllIsolationsAreStillInPlaceDeclaration"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_8"
                                },
                                {
                                    "name": "signatureList",
                                    "titleResource": "SignatureList_Amendment",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AmendIsolationPlan",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteAmendments",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_9"
                                },
                                {
                                    "name": "signatureList",
                                    "titleResource": "SignatureList_DeisolationForTest",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestDeisolationsForSanctionToTest",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "RequestDeisolationForSanctionToTest",
                                                    "swapDeIsolatedAndIsolatedState": true,
                                                    "autoSelectPreviousRows": false
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ConfirmElectricalLowVoltageDeisolationsForSanctionToTest,ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest,ConfirmElectricalHighVoltageDeisolationsForSanctionToTest,ConfirmControlDeisolationsForSanctionToTest,ConfirmProcessDeisolationsForSanctionToTest",
                                            "titleResource": "ConfirmDeisolationsForSanctionToTest",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "ConfirmDeisolationForSanctionToTest",
                                                    "swapDeIsolatedAndIsolatedState": true,
                                                    "autoSelectPreviousRows": false
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CrossCheckDeisolationsForSanctionToTest",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "CrossCheckDeisolation",
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "VerifyDeisolationForSanctionToTest",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_10"
                                },
                                {
                                    "name": "signatureList",
                                    "titleResource": "SignatureList_Reisolation",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestReisolations",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "RequestReisolation",
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ConfirmElectricalLowVoltageReisolations,ConfirmElectricalLowVoltageLevel1Reisolations,ConfirmElectricalHighVoltageReisolations,ConfirmControlReisolations,ConfirmProcessReisolations",
                                            "titleResource": "ConfirmReisolations",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "ConfirmReisolation",
                                                    "swapDeIsolatedAndIsolatedState": true,
                                                    "utiUsage": "Point,Action"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CrossCheckReisolations",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "CrossCheckIsolation",
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ConfirmAllReisolationsInPlace",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_11"
                                },
                                {
                                    "name": "signatureList",
                                    "titleResource": "SignatureList_Deisolation",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestDeisolations",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "RequestDeisolation",
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CancelDeisolationRequest",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "CancelRequestedDeisolations",
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "titleResource": "ConfirmDeisolations",
                                            "signatureTypes": "ConfirmElectricalLowVoltageDeisolations,ConfirmElectricalLowVoltageLevel1Deisolations,ConfirmElectricalHighVoltageDeisolations, ConfirmProcessDeisolations,ConfirmControlDeisolations, ConfirmDeisolationActionPerformed",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "ConfirmDeisolation",
                                                    "enableBarcodeScanning": true,
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CrossCheckDeisolations",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "CrossCheckDeisolation",
                                                    "autoSelectPreviousRows": false,
                                                    "swapDeIsolatedAndIsolatedState": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_12"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseIsolationCertificate",
                                            "fields": [
                                                {
                                                    "name": "approveLessonsLearned",
                                                    "requireAnswerForDeclaration": false,
                                                    "resourceKey": "Label_LessonsLearnedReviewed"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseIsolationCertificateCompletelyDeisolatedForTest",
                                            "fields": [
                                                {
                                                    "name": "approveLessonsLearned",
                                                    "requireAnswerForDeclaration": false,
                                                    "resourceKey": "Label_LessonsLearnedReviewed"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_13"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "DesignComplete",
                                    "toState": "Requesting",
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_14"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "WaitingForAuthorization",
                                    "toState": "DesignComplete",
                                    "textResource": "RevertICCFieldDescription",
                                    "uniqueKey": "Isolation_DraftIsolationCertificate_15"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft",
                                "Approved",
                                "Isolating",
                                "Live",
                                "Deisolating",
                                "Deisolated"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "WaitingForAuthorization",
                                "IsolationInProgress",
                                "RequestedForReisolation",
                                "IsolationInPlace",
                                "IsolationInPlaceForLongTerm",
                                "RequestedForSanctionToTest",
                                "IsolationInPlaceForSanctionToTest",
                                "DeisolationInProgress",
                                "Deisolated",
                                "Modification"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftIsolationCertificate",
                            "requiredInStates": [
                                "Requesting",
                                "Modification"
                            ],
                            "titleResource": "FinalizeIsolationRequestAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftIsolationCertificate",
                            "requiredInStates": [
                                "DesignComplete"
                            ],
                            "titleResource": "ApproveIDPAction"
                        },
                        {
                            "key": "addSignature",
                            "for": "RequestIsolations",
                            "titleResource": "RequestIsolations",
                            "actionConditionName": "Isolation_2",
                            "fields": [
                                {
                                    "name": "isolationInstructionsSelector",
                                    "signingMode": "RequestIsolation",
                                    "autoSelectPreviousRows": false,
                                    "swapDeIsolatedAndIsolatedState": true,
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addCounterSignature",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "Print{0}IsolationsRequestedForIsolationAction",
                            "reportName": "RequestedIsolations",
                            "isolationState": "IsolationRequested"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintElectricalLowVoltageIsolationsRequestedForIsolationTagsAction",
                            "reportName": "ElectricalLowVoltageIsolationTag",
                            "isolationState": "IsolationRequested",
                            "isolationTypes": "ElectricalLowVoltage"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintElectricalLowVoltageLevel1IsolationsRequestedForIsolationTagsAction",
                            "reportName": "ElectricalLowVoltageLevel1IsolationTag",
                            "isolationState": "IsolationRequested",
                            "isolationTypes": "ElectricalLowVoltageLevel1"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintElectricalHighVoltageIsolationsRequestedForIsolationTagsAction",
                            "reportName": "ElectricalLowVoltageIsolationTag",
                            "isolationState": "IsolationRequested",
                            "isolationTypes": "ElectricalHighVoltage"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintProcessIsolationsRequestedForIsolationTagsAction",
                            "reportName": "ProcessIsolationTag",
                            "isolationState": "IsolationRequested",
                            "isolationTypes": "Process"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintControlIsolationsRequestedForIsolationTagsAction",
                            "reportName": "ControlIsolationTag",
                            "isolationState": "IsolationRequested",
                            "isolationTypes": "Control"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "Print{0}IsolationsRequestedForIsolationAction",
                            "reportName": "RequestedIsolations",
                            "isolationState": "Isolated"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintElectricalLowVoltageIsolationsRequestedForIsolationTagsAction",
                            "reportName": "ElectricalLowVoltageIsolationTag",
                            "isolationState": "Isolated",
                            "isolationTypes": "ElectricalLowVoltage"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintElectricalLowVoltageLevel1IsolationsRequestedForIsolationTagsAction",
                            "reportName": "ElectricalLowVoltageLevel1IsolationTag",
                            "isolationState": "Isolated",
                            "isolationTypes": "ElectricalLowVoltageLevel1"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintElectricalHighVoltageIsolationsRequestedForIsolationTagsAction",
                            "reportName": "ElectricalHighVoltageIsolationTag",
                            "isolationState": "Isolated",
                            "isolationTypes": "ElectricalHighVoltage"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintControlIsolationsRequestedForIsolationTagsAction",
                            "reportName": "ControlIsolationTag",
                            "isolationState": "Isolated",
                            "isolationTypes": "Control"
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "PrintProcessIsolationsRequestedForIsolationTagsAction",
                            "reportName": "ProcessIsolationTag",
                            "isolationState": "Isolated",
                            "isolationTypes": "Process"
                        },
                        {
                            "key": "printAllIsolations",
                            "titleResource": "PrintAllIsolationTagsAction",
                            "optionalInStates": [
                                "WaitingForAuthorization",
                                "IsolationInProgress",
                                "IsolationInPlace",
                                "IsolationInPlaceForLongTerm",
                                "RequestedForSanctionToTest",
                                "IsolationInPlaceForSanctionToTest"
                            ]
                        },
                        {
                            "key": "printIsolations",
                            "titleResource": "Print{0}IsolationsRequestedForIsolationAction",
                            "reportName": "RequestedIsolations",
                            "isolationState": "NotIsolated",
                            "optionalInStates": [
                                "WaitingForAuthorization"
                            ]
                        },
                        {
                            "key": "confirmIsolations",
                            "titleResource": "ConfirmIsolations",
                            "swapDeIsolatedAndIsolatedState": true,
                            "showUtiForActions": true,
                            "autoSelectPreviousRows": false
                        },
                        {
                            "key": "addSignature",
                            "for": "AmendIsolationPlan",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "CompleteAmendments",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "ConfirmAllIsolationsInPlace",
                            "titleResource": "ConfirmAllIsolationsInPlaceAction",
                            "actionConditionName": "Isolation_21",
                            "fields": [
                                {
                                    "name": "isolationInstructionsSelector",
                                    "signingMode": "ConfirmAllIsolationsInPlace",
                                    "swapDeIsolatedAndIsolatedState": true,
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "CrossCheckIsolations",
                            "titleResource": "CrossCheckIsolationsAction",
                            "actionConditionName": "Isolation_22",
                            "fields": [
                                {
                                    "name": "isolationInstructionsSelector",
                                    "signingMode": "CrossCheckIsolation",
                                    "autoSelectPreviousRows": false,
                                    "swapDeIsolatedAndIsolatedState": true,
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "CrossCheckDeisolations",
                            "titleResource": "CrossCheckDeisolationsAction",
                            "actionConditionName": "Isolation_23",
                            "fields": [
                                {
                                    "name": "isolationInstructionsSelector",
                                    "signingMode": "CrossCheckDeisolation",
                                    "autoSelectPreviousRows": false,
                                    "swapDeIsolatedAndIsolatedState": true,
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "CrossCheckDeisolationsForSanctionToTest",
                            "titleResource": "CrossCheckDeisolationsForSanctionToTestAction",
                            "actionConditionName": "Isolation_24",
                            "fields": [
                                {
                                    "name": "isolationInstructionsSelector",
                                    "signingMode": "CrossCheckDeisolation",
                                    "autoSelectPreviousRows": false,
                                    "swapDeIsolatedAndIsolatedState": true,
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "VerifyDeisolationForSanctionToTest",
                            "titleResource": "VerifyDeisolationForSanctionToTestAction",
                            "actionConditionName": "Isolation_25",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "CrossCheckReisolations",
                            "titleResource": "CrossCheckReisolationsAction",
                            "actionConditionName": "Isolation_26",
                            "fields": [
                                {
                                    "name": "isolationInstructionsSelector",
                                    "signingMode": "CrossCheckIsolation",
                                    "autoSelectPreviousRows": false,
                                    "swapDeIsolatedAndIsolatedState": true,
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "ConfirmAllReisolationsInPlace",
                            "actionConditionName": "Isolation_27",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "RequestDeisolations",
                            "titleResource": "RequestDeisolations",
                            "actionConditionName": "Isolation_28",
                            "fields": [
                                {
                                    "name": "isolationInstructionsSelector",
                                    "signingMode": "RequestDeisolation",
                                    "autoSelectPreviousRows": false,
                                    "swapDeIsolatedAndIsolatedState": true,
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "requestDeisolationsForSanctionToTest"
                        },
                        {
                            "key": "confirmDeisolations",
                            "titleResource": "ConfirmDeisolations",
                            "enableBarcodeScanning": true,
                            "swapDeIsolatedAndIsolatedState": true,
                            "autoSelectPreviousRows": false
                        },
                        {
                            "key": "confirmDeisolationForSanctionToTest",
                            "swapDeIsolatedAndIsolatedState": true
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftIsolationCertificate",
                            "optionalInStates": [
                                "IsolationInPlaceForSanctionToTest",
                                "Deisolated"
                            ],
                            "titleResource": "RequestReisolationsAction"
                        },
                        {
                            "key": "confirmReisolations",
                            "swapDeIsolatedAndIsolatedState": true
                        },
                        {
                            "key": "addSignature",
                            "for": "MoveToLongTerm",
                            "titleResource": "MoveToLongTermAction",
                            "actionConditionName": "Isolation_34",
                            "fields": [
                                {
                                    "name": "positiveIsolation",
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "moveIsolationCertificateToLongTerm",
                                    "uniqueKey": "Isolation_undefined_1"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "MoveFromLongTerm",
                            "actionConditionName": "Isolation_35",
                            "fields": [
                                {
                                    "name": "signatureTextMessage",
                                    "textResource": "ConfirmThatAllIsolationsAreStillInPlaceDeclaration",
                                    "uniqueKey": "Isolation_undefined_0"
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "auditLti",
                            "selfDeclarationResource": "AuditLtiDeclaration",
                            "requiredResource": "AuditLtiAction",
                            "optionalResource": "AuditLtiExpiredTitle",
                            "selfDeclarationDeterminesRemarksRequirement": true,
                            "fields": [
                                {
                                    "name": "positiveIsolation",
                                    "uniqueKey": "Isolation_undefined_0"
                                }
                            ]
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftIsolationCertificate",
                            "titleResource": "CloseIsolationCertificate",
                            "requiredInStates": [
                                "Deisolated"
                            ]
                        },
                        {
                            "key": "copyWorkItem",
                            "titleResource": "CopyIsolationAction",
                            "optionalInAllStatesExcept": [
                                "Modification"
                            ]
                        },
                        {
                            "key": "attachWorkItemAttachment",
                            "attachmentKind": "OperationalRiskAssessment",
                            "titleResource": "AddOperationalRiskAssessmentAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftIsolationCertificate",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "titleResource": "SetTaskMonitoringAction"
                        },
                        {
                            "key": "deleteWorkItem",
                            "titleResource": "DeleteIsolationAction"
                        },
                        {
                            "key": "copyAsTemplate",
                            "titleResource": "CopyIsolationAsTemplateAction",
                            "optionalInAllStatesExcept": [
                                "Requesting",
                                "Modification"
                            ],
                            "creationState": "AwaitingAuthorisation"
                        },
                        {
                            "key": "startAudit",
                            "kind": "WorkItemAudit",
                            "variant": "IsolationAudit"
                        },
                        {
                            "key": "reviewLti"
                        },
                        {
                            "key": "attachTo",
                            "kind": "Permit"
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkAsNotCopyable",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchIsolations",
                            "command": "SearchCertificates"
                        },
                        {
                            "id": "CCR",
                            "command": "ShowCcr"
                        },
                        {
                            "id": "PbuOverview",
                            "command": "ShowPbuOverview"
                        },
                        {
                            "id": "TaskMonitoringOverview",
                            "command": "ShowTaskMonitoringOverview"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "ICC",
                            "onlyForVariant": null
                        },
                        {
                            "name": "Full",
                            "onlyForVariant": null
                        },
                        {
                            "name": "All",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "All"
                },
                {
                    "kind": "TaskRiskAssessment",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ]
                        },
                        {
                            "name": "Accepted",
                            "states": [
                                "Accepted"
                            ]
                        },
                        {
                            "name": "Live",
                            "states": [
                                "Active"
                            ]
                        }
                    ],
                    "displayInMenu": false,
                    "attachmentTypes": [],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [],
                    "certificatesSearchPageColumns": [],
                    "wizardSteps": [
                        {
                            "id": "RiskAssessmentDraft",
                            "fields": [
                                {
                                    "name": "text",
                                    "key": "RiskAssessmentTitle",
                                    "numberOfLines": "1",
                                    "required": false,
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_0"
                                },
                                {
                                    "name": "riskAssessmentLevel",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_1"
                                },
                                {
                                    "name": "riskAssessmentTeam",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_2"
                                },
                                {
                                    "name": "authoritySelector",
                                    "authorityPropertyName": "RiskAssessmentFacilitator",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "textResource": "RiskAssessmentFacilitatorField",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "filter": {
                                        "defaultAllowedRoles": [
                                            "Level2RiskAssessor"
                                        ],
                                        "specificFilters": []
                                    },
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_3"
                                },
                                {
                                    "name": "riskAssessmentTasks",
                                    "copyParticipation": "CloneAndTemplate",
                                    "readOnlyIfNoRiskLevelSelected": true,
                                    "categories": "PermitHazards",
                                    "isRequired": true,
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_4"
                                },
                                {
                                    "name": "residualRisk",
                                    "onlyVisibleForRiskAssessmentLevel": "Level1",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_5"
                                },
                                {
                                    "name": "text",
                                    "key": "SIMOPS",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_6"
                                },
                                {
                                    "name": "signatureList",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AcceptTaskRiskAssessmentByRiskAssessmentTeam",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AcceptTaskRiskAssessmentByRiskAssessmentFacilitator",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentDraft_7"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Accepted",
                                "Active"
                            ]
                        },
                        {
                            "id": "RiskAssessmentApproved",
                            "fields": [
                                {
                                    "name": "nearbyActivitiesOnSystem",
                                    "workItemFilter": [
                                        {
                                            "kind": "Permit",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentApproved_0"
                                },
                                {
                                    "name": "nearbyActivitiesAtLocations",
                                    "workItemFilter": [
                                        {
                                            "kind": "Permit",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentApproved_1"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveTaskRiskAssessmentByAreaOrSiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveTaskRiskAssessmentByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveTaskRiskAssessmentBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "EndorseTaskRiskAssessmentByFunctionalAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "TaskRiskAssessment_RiskAssessmentApproved_2"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Accepted",
                                "Active"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "RiskAssessmentDraft",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "AcceptTaskRiskAssessmentAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "RiskAssessmentApproved",
                            "requiredInStates": [
                                "Accepted"
                            ],
                            "titleResource": "ApproveOREndorseTaskRiskAssessment"
                        }
                    ],
                    "commandBarButtons": [],
                    "printProfiles": [
                        {
                            "name": "TaskRiskAssessment",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "TaskRiskAssessment"
                },
                {
                    "kind": "OperationalRiskAssessment",
                    "workflowSteps": [
                        {
                            "name": "Requested",
                            "states": [
                                "Requesting"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Endorsement",
                            "states": [
                                "Approved"
                            ]
                        },
                        {
                            "name": "Live",
                            "states": [
                                "AwaitingActivation",
                                "Active",
                                "InReview",
                                "Revalidate"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "riskAssessment",
                            "kind": "SafetyOverrideRiskAssessment",
                            "allowTemplateUsage": true,
                            "allowExistingUsage": true,
                            "allowNewUsage": false,
                            "templateLabelResource": "AttachTemplateButtonText"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workingLocation",
                            "name": "workingLocation"
                        },
                        {
                            "key": "5_signedByUsername",
                            "name": "signedByUsername"
                        },
                        {
                            "key": "6_dateRange",
                            "name": "dateRange"
                        },
                        {
                            "key": "7_isDeleted",
                            "name": "isDeleted"
                        },
                        {
                            "key": "8_isAudited",
                            "name": "isAudited"
                        },
                        {
                            "key": "9_isCopied",
                            "name": "isCopied"
                        },
                        {
                            "key": "10_hasAttachment",
                            "name": "hasAttachment",
                            "kind": "SafetyOverrideRiskAssessment"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage",
                            "width": "30"
                        },
                        {
                            "name": "RegistrationNumber",
                            "width": "180"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "Location"
                        },
                        {
                            "name": "Locations"
                        },
                        {
                            "name": "InitialPeriodStartDate",
                            "width": "140",
                            "titleResource": "ColumnLabel_ORA_InitialPeriodStartDate"
                        },
                        {
                            "name": "LastRevalidationPeriodStartDate",
                            "width": "140",
                            "titleResource": "ColumnLabel_ORA_LastRevalidationPeriodStartDate"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "PrepareRiskAssessmentStep",
                            "fields": [
                                {
                                    "name": "lessonsLearnedNotice",
                                    "onlyVisibleWhenCopying": true,
                                    "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_0"
                                },
                                {
                                    "name": "site",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_1"
                                },
                                {
                                    "name": "workingLocations",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "workItemFilter": [
                                        {
                                            "kind": "OperationalRiskAssessment",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_2"
                                },
                                {
                                    "name": "title",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_3"
                                },
                                {
                                    "name": "text",
                                    "key": "NormalCondition",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_4"
                                },
                                {
                                    "name": "text",
                                    "key": "AbnormalCondition",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_5"
                                },
                                {
                                    "name": "text",
                                    "key": "ReasonForNotShuttingDown",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_6"
                                },
                                {
                                    "name": "text",
                                    "key": "History",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_PrepareRiskAssessmentStep_7"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Requested"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "InReview",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "IdentifyRisksStep",
                            "fields": [
                                {
                                    "name": "initialRisk",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_0"
                                },
                                {
                                    "name": "text",
                                    "key": "InitialRiskExplanation",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_1"
                                },
                                {
                                    "name": "riskAssessmentTeam",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_2"
                                },
                                {
                                    "name": "authoritySelector",
                                    "authorityPropertyName": "RiskAssessmentFacilitator",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "textResource": "ORA_RiskAssessmentFacilitator",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "filter": {
                                        "defaultAllowedRoles": [
                                            "Level2RiskAssessor"
                                        ],
                                        "specificFilters": [
                                            {
                                                "variants": [
                                                    "OperationalRiskAssessment"
                                                ],
                                                "roles": [],
                                                "origin": null
                                            }
                                        ]
                                    },
                                    "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_3"
                                },
                                {
                                    "name": "riskAssessmentTasks",
                                    "categories": "ORAHazards",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_4"
                                },
                                {
                                    "name": "workingPeriod",
                                    "ignoreWorkingHours": true,
                                    "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_5"
                                },
                                {
                                    "name": "text",
                                    "key": "Recommendation",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "OperationalRiskAssessment_IdentifyRisksStep_6"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Requested"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "InReview",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "ApproveRisksStep",
                            "fields": [
                                {
                                    "name": "lessonsLearned",
                                    "allowEditingAlways": true,
                                    "onlyVisibleForStored": true,
                                    "readOnlyWhenClosed": true,
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_0"
                                },
                                {
                                    "name": "taskMonitoring",
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_1"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestOperationalRiskAssessmentByTeamMember",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestOperationalRiskAssessmentByFacilitator",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveOperationalRiskAssessmentByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveOperationalRiskAssessmentBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveOperationalRiskAssessmentByFunctionalAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_2"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AuthoriseOperationalRiskAssessment",
                                            "fields": [
                                                {
                                                    "name": "signatureTextMessage",
                                                    "textResource": "CumulativeRiskSelfDeclaration"
                                                },
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true,
                                                    "hideShiftEndWarning": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_3"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ReviewOperationalRiskAssessment",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_4"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ReAuthoriseOperationalRiskAssessment",
                                            "fields": [
                                                {
                                                    "name": "signatureTextMessage",
                                                    "textResource": "CumulativeRiskSelfDeclaration"
                                                },
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true,
                                                    "hideShiftEndWarning": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_5"
                                },
                                {
                                    "name": "revalidationSignaturesPeriod",
                                    "onlyVisibleIn": "AwaitingActivation, Active, Revalidate, Closed",
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_6"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseOperationalRiskAssessmentByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "approveLessonsLearned",
                                                    "requireAnswerForDeclaration": false,
                                                    "resourceKey": "Label_LessonsLearnedReviewed"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseOperationalRiskAssessmentBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "approveLessonsLearned",
                                                    "requireAnswerForDeclaration": false,
                                                    "resourceKey": "Label_LessonsLearnedReviewed"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_7"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "Approved",
                                    "toState": "Requesting",
                                    "textResource": "RevertByAreaAuthority",
                                    "uniqueKey": "OperationalRiskAssessment_ApproveRisksStep_8"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Requested",
                                "Endorsement",
                                "Live"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "InReview",
                                "Revalidate"
                            ],
                            "unsignedSignaturesAtTop": true
                        }
                    ],
                    "actions": [
                        {
                            "key": "copyWorkItem",
                            "titleResource": "CopyOperationalRiskAssessmentAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ApproveRisksStep",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "AcceptApproveOperationalRiskAssessmentAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ApproveRisksStep",
                            "requiredInStates": [
                                "Approved"
                            ],
                            "titleResource": "ApproveAuthorizeOperationalRiskAssessmentAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ApproveRisksStep",
                            "optionalInStates": [
                                "Active"
                            ],
                            "titleResource": "ReviewReAuthorizeOperationalRiskAssessmentAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ApproveRisksStep",
                            "requiredInStates": [
                                "Revalidate",
                                "InReview"
                            ],
                            "titleResource": "ReAuthorizeOperationalRiskAssessmentAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ApproveRisksStep",
                            "requiredInStates": [
                                "InReview"
                            ],
                            "titleResource": "ReviewOperationalRiskAssessmentAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ApproveRisksStep",
                            "requiredInStates": [
                                "Active",
                                "Revalidate"
                            ],
                            "titleResource": "CloseOperationalRiskAssessmentAction"
                        },
                        {
                            "key": "deleteWorkItem",
                            "optionalInStates": [
                                "Requesting",
                                "Approved"
                            ]
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ApproveRisksStep",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "titleResource": "SetTaskMonitoringAction"
                        },
                        {
                            "key": "addCounterSignature",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        },
                        {
                            "key": "startAudit",
                            "kind": "WorkItemAudit",
                            "variant": "OperationalRiskAssessmentAudit"
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkAsNotCopyable",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchOperationalRiskAssessments",
                            "command": "SearchCertificates"
                        },
                        {
                            "id": "CCR",
                            "command": "ShowCcr"
                        },
                        {
                            "id": "TaskMonitoringOverview",
                            "command": "ShowTaskMonitoringOverview"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "Full",
                            "onlyForVariant": null
                        },
                        {
                            "name": "All",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "All"
                },
                {
                    "kind": "SafetyOverrideRiskAssessment",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ]
                        },
                        {
                            "name": "Live",
                            "states": [
                                "AwaitingActivation",
                                "Active",
                                "Revalidate",
                                "Expired"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workDescription",
                            "name": "workDescription"
                        },
                        {
                            "key": "5_multiValue",
                            "name": "multiValue",
                            "propertyKey": "OverrideBypassType",
                            "allowedValues": [
                                "Input",
                                "Output"
                            ]
                        },
                        {
                            "key": "6_multiValue",
                            "name": "multiValue",
                            "propertyKey": "OverallIntegrityLevel",
                            "allowedValues": [
                                "3",
                                "2",
                                "1",
                                "FireAndGas",
                                "HMA",
                                "SISBPCS",
                                "ControlLoP"
                            ]
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage"
                        },
                        {
                            "name": "Site"
                        },
                        {
                            "name": "RegistrationNumber"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "Status"
                        },
                        {
                            "name": "TextProperties",
                            "textPropertyKey": "MaximumSoraDuration",
                            "titleResource": "ColumnLabel_MaximumSoraDuration"
                        },
                        {
                            "name": "WorkDescription",
                            "titleResource": "ColumnLabel_SafetyOverrideRiskAssessment_WorkDescription"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "Step1",
                            "fields": [
                                {
                                    "name": "title",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_0"
                                },
                                {
                                    "name": "site",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_1"
                                },
                                {
                                    "name": "workingLocations",
                                    "copyParticipation": "Template",
                                    "workItemFilter": [
                                        {
                                            "kind": "SafetyOverrideRiskAssessmentTemplate",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_2"
                                },
                                {
                                    "name": "workObjects",
                                    "browseBy": "Systems",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_3"
                                },
                                {
                                    "name": "workDescription",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_4"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "OverrideBypassType",
                                    "copyParticipation": "Template",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "Input",
                                        "Output"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_5"
                                },
                                {
                                    "name": "text",
                                    "key": "OverrideBypassMethod",
                                    "numberOfLines": "1",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_6"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "OverallIntegrityLevel",
                                    "copyParticipation": "Template",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "3",
                                        "2",
                                        "1",
                                        "FireAndGas",
                                        "HMA",
                                        "SISBPCS",
                                        "ControlLoP"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_7"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "IntegrityBasisSafety",
                                    "copyParticipation": "Template",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "NA",
                                        "1",
                                        "2",
                                        "3"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_8"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "IntegrityBasisEnvironment",
                                    "copyParticipation": "Template",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "NA",
                                        "1",
                                        "2",
                                        "3"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_9"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "IntegrityBasisCommercial",
                                    "copyParticipation": "Template",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "NA",
                                        "1",
                                        "2",
                                        "3"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_10"
                                },
                                {
                                    "name": "text",
                                    "key": "RiskReductionFactor",
                                    "numberOfLines": "1",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step1_11"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate",
                                "Expired"
                            ]
                        },
                        {
                            "id": "Step2",
                            "fields": [
                                {
                                    "name": "riskAssessmentTeam",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step2_0"
                                },
                                {
                                    "name": "authoritySelector",
                                    "authorityPropertyName": "RiskAssessmentFacilitator",
                                    "copyParticipation": "Template",
                                    "textResource": "SORA_RiskAssessmentFacilitator",
                                    "filter": {
                                        "defaultAllowedRoles": [
                                            "Level2RiskAssessor"
                                        ],
                                        "specificFilters": [
                                            {
                                                "variants": [
                                                    "DefaultSafetyOverrideRiskAssessment"
                                                ],
                                                "roles": [],
                                                "origin": null
                                            }
                                        ]
                                    },
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step2_1"
                                },
                                {
                                    "name": "riskAssessmentTasks",
                                    "categories": "SORAHazards",
                                    "copyParticipation": "Template",
                                    "isRequired": true,
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step2_2"
                                },
                                {
                                    "name": "text",
                                    "key": "ReasonsForApplyingAndComments",
                                    "numberOfLines": "5",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step2_3"
                                },
                                {
                                    "name": "text",
                                    "key": "MaximumSoraDuration",
                                    "numberOfLines": "1",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step2_4"
                                },
                                {
                                    "name": "taskMonitoring",
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step2_5"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "VerifySora",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step2_6"
                                },
                                {
                                    "name": "signatureList",
                                    "hiddenIn": "Requesting",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseSora",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessment_Step2_7"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate",
                                "Expired"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "optionalInStates": [
                                "Requesting"
                            ],
                            "titleResource": "VerifySora",
                            "wizardStepId": "Step2"
                        },
                        {
                            "key": "goToWizardStep",
                            "optionalInStates": [
                                "Active"
                            ],
                            "requiredInStates": [
                                "Revalidate",
                                "Expired"
                            ],
                            "titleResource": "CloseSora",
                            "wizardStepId": "Step2"
                        },
                        {
                            "key": "startAudit",
                            "kind": "WorkItemAudit",
                            "variant": "InhibitsAndOverridesAudit"
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchSafetyOverrideRiskAssessments",
                            "command": "SearchCertificates"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "Frontpage",
                            "onlyForVariant": null
                        },
                        {
                            "name": "Risks",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "Frontpage"
                },
                {
                    "kind": "Operation",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Live",
                            "states": [
                                "Active",
                                "Revalidate",
                                "AwaitingActivation"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "riskAssessment",
                            "kind": "SafetyOverrideRiskAssessment",
                            "allowTemplateUsage": true,
                            "allowExistingUsage": true,
                            "allowNewUsage": false,
                            "templateLabelResource": "AttachTemplateButtonText"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workingLocation",
                            "name": "workingLocation"
                        },
                        {
                            "key": "5_systemOrEquipmentDescription",
                            "name": "systemOrEquipmentDescription"
                        },
                        {
                            "key": "6_signedByUsername",
                            "name": "signedByUsername"
                        },
                        {
                            "key": "7_dateRange",
                            "name": "dateRange"
                        },
                        {
                            "key": "8_isDeleted",
                            "name": "isDeleted"
                        },
                        {
                            "key": "9_workItemVariant",
                            "name": "workItemVariant"
                        },
                        {
                            "key": "10_hasAttachment",
                            "name": "hasAttachment",
                            "kind": "SafetyOverrideRiskAssessment"
                        },
                        {
                            "key": "11_workOrderDisplay",
                            "name": "workOrderDisplay"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage",
                            "width": "30"
                        },
                        {
                            "name": "WorkItemVariant",
                            "width": "120"
                        },
                        {
                            "name": "RegistrationNumber",
                            "width": "180"
                        },
                        {
                            "name": "Status",
                            "width": "180"
                        },
                        {
                            "name": "Title",
                            "width": "300"
                        },
                        {
                            "name": "Location",
                            "width": "180"
                        },
                        {
                            "name": "PlannedStartDateTime",
                            "width": "100"
                        },
                        {
                            "name": "WorkOrderDisplay",
                            "width": "140"
                        }
                    ],
                    "workOrder": {
                        "denyDirectPermitCreation": false,
                        "denyCreateFromTemplate": true,
                        "denyCreateFromQuestionnaire": true,
                        "workOrderSearchFields": [
                            {
                                "key": "0_workOrderDisplay",
                                "name": "workOrderDisplay"
                            },
                            {
                                "key": "1_workOrderTitle",
                                "name": "workOrderTitle"
                            },
                            {
                                "key": "2_workOrderDescription",
                                "name": "workOrderDescription"
                            },
                            {
                                "key": "3_workOrderDateRange",
                                "name": "workOrderDateRange"
                            },
                            {
                                "key": "4_workOrderSite",
                                "name": "workOrderSite"
                            }
                        ],
                        "workOrderColumns": [
                            {
                                "name": "Display"
                            },
                            {
                                "name": "Title"
                            },
                            {
                                "name": "Description"
                            },
                            {
                                "name": "PlannedStartDate"
                            },
                            {
                                "name": "PlannedEndDate"
                            },
                            {
                                "name": "Site"
                            }
                        ]
                    },
                    "wizardSteps": [
                        {
                            "id": "DraftOperation",
                            "fields": [
                                {
                                    "name": "lessonsLearnedNotice",
                                    "onlyVisibleWhenCopying": true,
                                    "uniqueKey": "Operation_DraftOperation_0"
                                },
                                {
                                    "name": "workItemVariant",
                                    "isRequired": true,
                                    "uniqueKey": "Operation_DraftOperation_1"
                                },
                                {
                                    "name": "workOrders",
                                    "uniqueKey": "Operation_DraftOperation_2"
                                },
                                {
                                    "name": "title",
                                    "uniqueKey": "Operation_DraftOperation_3"
                                },
                                {
                                    "name": "site",
                                    "isRequired": true,
                                    "uniqueKey": "Operation_DraftOperation_4"
                                },
                                {
                                    "name": "workingLocations",
                                    "isRequired": true,
                                    "workItemFilter": [
                                        {
                                            "kind": "Operation",
                                            "workItemState": [
                                                "Active"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Operation_DraftOperation_5"
                                },
                                {
                                    "name": "workDescription",
                                    "isRequired": true,
                                    "uniqueKey": "Operation_DraftOperation_6"
                                },
                                {
                                    "name": "workingPeriod",
                                    "isRequired": true,
                                    "ignoreWorkingHours": false,
                                    "uniqueKey": "Operation_DraftOperation_7"
                                },
                                {
                                    "name": "text",
                                    "key": "RAPReference",
                                    "hiddenFor": "NonPermittedWork,TemporaryEquipment,RoadClosure,Habitat",
                                    "uniqueKey": "Operation_DraftOperation_8"
                                },
                                {
                                    "name": "personalIsolationIsAllowed",
                                    "hiddenFor": "NonPermittedWork,TemporaryEquipment,RoadClosure,Habitat",
                                    "uniqueKey": "Operation_DraftOperation_9"
                                },
                                {
                                    "name": "numberOfPersons",
                                    "isRequired": true,
                                    "uniqueKey": "Operation_DraftOperation_10"
                                },
                                {
                                    "name": "residualRisk",
                                    "isRequired": true,
                                    "uniqueKey": "Operation_DraftOperation_11"
                                },
                                {
                                    "name": "taskMonitoring",
                                    "uniqueKey": "Operation_DraftOperation_12"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AuthorizeOperation",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AuthorizeNPWByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "readonly": false
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveRAPByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "readonly": false
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveRAPByPerformingAuthority",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "readonly": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Operation_DraftOperation_13"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Active",
                                "Revalidate",
                                "AwaitingActivation"
                            ]
                        },
                        {
                            "id": "ClosingOperation",
                            "fields": [
                                {
                                    "name": "lessonsLearned",
                                    "allowEditingAlways": true,
                                    "readOnlyWhenClosed": true,
                                    "uniqueKey": "Operation_ClosingOperation_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseOperation",
                                            "fields": [
                                                {
                                                    "name": "approveLessonsLearned",
                                                    "requireAnswerForDeclaration": false,
                                                    "resourceKey": "Label_LessonsLearnedReviewed"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseNPW",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseRAP",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Operation_ClosingOperation_1"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Live"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Active",
                                "Revalidate",
                                "AwaitingActivation"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftOperation",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "AuthorizeOperationAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ClosingOperation",
                            "optionalInStates": [
                                "Active"
                            ],
                            "requiredInStates": [
                                "Revalidate"
                            ],
                            "titleResource": "CloseOperationAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftOperation",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "titleResource": "SetTaskMonitoringAction"
                        },
                        {
                            "key": "deleteWorkItem",
                            "titleResource": "DeleteOperationAction"
                        },
                        {
                            "key": "addCounterSignature",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        },
                        {
                            "key": "startAudit",
                            "kind": "WorkItemAudit",
                            "variant": "ProceduresAudit",
                            "onlyVisibleForVariants": [
                                "RiskAssessedProcedure"
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchOperation",
                            "command": "SearchCertificates"
                        },
                        {
                            "id": "CCR",
                            "command": "ShowCcr"
                        },
                        {
                            "id": "TaskMonitoringOverview",
                            "command": "ShowTaskMonitoringOverview"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "Full",
                            "onlyForVariant": null
                        },
                        {
                            "name": "All",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "All"
                },
                {
                    "kind": "Leak",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Live",
                            "states": [
                                "Active",
                                "Revalidate",
                                "AwaitingActivation"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "riskAssessment",
                            "kind": "TaskRiskAssessment"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workingLocation",
                            "name": "workingLocation"
                        },
                        {
                            "key": "5_signedByUsername",
                            "name": "signedByUsername"
                        },
                        {
                            "key": "6_dateRange",
                            "name": "dateRange"
                        },
                        {
                            "key": "7_isDeleted",
                            "name": "isDeleted"
                        },
                        {
                            "key": "8_workItemVariant",
                            "name": "workItemVariant"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage",
                            "width": "30"
                        },
                        {
                            "name": "WorkItemVariant",
                            "width": "120"
                        },
                        {
                            "name": "RegistrationNumber",
                            "width": "180"
                        },
                        {
                            "name": "Status",
                            "width": "180"
                        },
                        {
                            "name": "Title",
                            "width": "300"
                        },
                        {
                            "name": "Location",
                            "width": "180"
                        }
                    ],
                    "workOrder": {
                        "denyDirectPermitCreation": false,
                        "denyCreateFromTemplate": true,
                        "denyCreateFromQuestionnaire": false,
                        "workOrderSearchFields": [
                            {
                                "key": "0_workOrderDisplay",
                                "name": "workOrderDisplay"
                            },
                            {
                                "key": "1_workOrderTitle",
                                "name": "workOrderTitle"
                            },
                            {
                                "key": "2_workOrderDescription",
                                "name": "workOrderDescription"
                            },
                            {
                                "key": "3_workOrderDateRange",
                                "name": "workOrderDateRange"
                            },
                            {
                                "key": "4_workOrderSite",
                                "name": "workOrderSite"
                            }
                        ],
                        "workOrderColumns": [
                            {
                                "name": "Display"
                            },
                            {
                                "name": "Title"
                            },
                            {
                                "name": "Description"
                            },
                            {
                                "name": "PlannedStartDate"
                            },
                            {
                                "name": "PlannedEndDate"
                            },
                            {
                                "name": "Site"
                            }
                        ]
                    },
                    "wizardSteps": [
                        {
                            "id": "DraftLeak",
                            "fields": [
                                {
                                    "name": "lessonsLearnedNotice",
                                    "onlyVisibleWhenCopying": true,
                                    "uniqueKey": "Leak_DraftLeak_0"
                                },
                                {
                                    "name": "workItemVariant",
                                    "isRequired": true,
                                    "uniqueKey": "Leak_DraftLeak_1"
                                },
                                {
                                    "name": "title",
                                    "uniqueKey": "Leak_DraftLeak_2"
                                },
                                {
                                    "name": "site",
                                    "isRequired": true,
                                    "uniqueKey": "Leak_DraftLeak_3"
                                },
                                {
                                    "name": "workingLocations",
                                    "isRequired": true,
                                    "workItemFilter": [
                                        {
                                            "kind": "Leak",
                                            "workItemState": [
                                                "Active"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Leak_DraftLeak_4"
                                },
                                {
                                    "name": "workObjects",
                                    "allowMultipleEquipment": false,
                                    "isRequired": true,
                                    "hiddenFor": "StructuredSearch",
                                    "uniqueKey": "Leak_DraftLeak_5"
                                },
                                {
                                    "name": "workDescription",
                                    "isRequired": true,
                                    "uniqueKey": "Leak_DraftLeak_6"
                                },
                                {
                                    "name": "workingPeriod",
                                    "isRequired": true,
                                    "ignoreWorkingHours": true,
                                    "uniqueKey": "Leak_DraftLeak_7"
                                },
                                {
                                    "name": "residualRisk",
                                    "isRequired": true,
                                    "hiddenFor": "StructuredSearch",
                                    "uniqueKey": "Leak_DraftLeak_8"
                                },
                                {
                                    "name": "taskMonitoring",
                                    "hiddenFor": "StructuredSearch",
                                    "uniqueKey": "Leak_DraftLeak_9"
                                },
                                {
                                    "name": "workOrders",
                                    "hiddenFor": "StructuredSearch",
                                    "uniqueKey": "Leak_DraftLeak_10"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Active",
                                "Revalidate",
                                "AwaitingActivation"
                            ]
                        },
                        {
                            "id": "AuthorizingLeak",
                            "fields": [
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AuthorizeLeak",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Leak_AuthorizingLeak_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ReauthorizeLeak",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Leak_AuthorizingLeak_1"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RevertLeakForModification",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Leak_AuthorizingLeak_2"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteLeakSearch",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Leak_AuthorizingLeak_3"
                                },
                                {
                                    "name": "revalidationSignaturesPeriod",
                                    "hiddenFor": "StructuredSearch",
                                    "uniqueKey": "Leak_AuthorizingLeak_4"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Active",
                                "Revalidate",
                                "AwaitingActivation"
                            ]
                        },
                        {
                            "id": "ClosingLeak",
                            "fields": [
                                {
                                    "name": "lessonsLearned",
                                    "allowEditingAlways": true,
                                    "readOnlyWhenClosed": true,
                                    "uniqueKey": "Leak_ClosingLeak_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseLeak",
                                            "fields": [
                                                {
                                                    "name": "approveLessonsLearned",
                                                    "requireAnswerForDeclaration": false,
                                                    "resourceKey": "Label_LessonsLearnedReviewed"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Leak_ClosingLeak_1"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Live"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Active",
                                "Revalidate",
                                "AwaitingActivation"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "AuthorizingLeak",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "AuthorizeLeakAction",
                            "showForVariants": [
                                "C1",
                                "C2",
                                "C3",
                                "C4"
                            ]
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ClosingLeak",
                            "optionalInStates": [
                                "Active",
                                "Revalidate"
                            ],
                            "titleResource": "CloseLeakAction",
                            "showForVariants": [
                                "C1",
                                "C2",
                                "C3",
                                "C4"
                            ]
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "AuthorizingLeak",
                            "optionalInStates": [
                                "Active",
                                "Revalidate"
                            ],
                            "titleResource": "ReauthorizeLeakAction",
                            "showForVariants": [
                                "C1",
                                "C2",
                                "C3",
                                "C4"
                            ]
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "AuthorizingLeak",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "CompleteLeakSearch",
                            "showForVariants": [
                                "StructuredSearch"
                            ]
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftLeak",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "titleResource": "SetTaskMonitoringAction",
                            "showForVariants": [
                                "C1",
                                "C2",
                                "C3",
                                "C4"
                            ]
                        },
                        {
                            "key": "deleteWorkItem",
                            "titleResource": "DeleteLeakAction"
                        },
                        {
                            "key": "addCounterSignature",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        },
                        {
                            "key": "startAudit",
                            "kind": "WorkItemAudit",
                            "variant": "LeaksAudit"
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchLeaks",
                            "command": "SearchCertificates"
                        },
                        {
                            "id": "CCR",
                            "command": "ShowCcr"
                        },
                        {
                            "id": "TaskMonitoringOverview",
                            "command": "ShowTaskMonitoringOverview"
                        }
                    ],
                    "printProfiles": [],
                    "defaultPrintProfile": null
                }
            ]
        },
        {
            "name": "templates",
            "workspaces": [
                {
                    "kind": "PermitTemplate",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Approved",
                            "states": [
                                "Approved"
                            ]
                        },
                        {
                            "name": "Live",
                            "states": [
                                "AwaitingActivation",
                                "Active"
                            ]
                        },
                        {
                            "name": "Suspended",
                            "states": [
                                "Revalidate"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "isolationCertificate",
                            "kind": "IsolationTemplate"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workingLocation",
                            "name": "workingLocation"
                        },
                        {
                            "key": "5_systemOrEquipmentDescription",
                            "name": "systemOrEquipmentDescription"
                        },
                        {
                            "key": "6_workItemVariant",
                            "name": "workItemVariant"
                        },
                        {
                            "key": "7_isPlannedInShutdown",
                            "name": "isPlannedInShutdown",
                            "showProjectName": true
                        },
                        {
                            "key": "8_discipline",
                            "name": "discipline"
                        },
                        {
                            "key": "9_riskArea",
                            "name": "riskArea"
                        },
                        {
                            "key": "10_riskOfWork",
                            "name": "riskOfWork"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage"
                        },
                        {
                            "name": "RegistrationNumber",
                            "width": "180"
                        },
                        {
                            "name": "Title",
                            "width": "180"
                        },
                        {
                            "name": "Equipment",
                            "width": "300"
                        },
                        {
                            "name": "Location",
                            "width": "180"
                        },
                        {
                            "name": "HasIccAttached",
                            "width": "70"
                        },
                        {
                            "name": "IsAudited",
                            "width": "70"
                        },
                        {
                            "name": "HasPrerequisites",
                            "width": "70"
                        },
                        {
                            "name": "IsShutdownTurnAround",
                            "width": "70"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "SpecifyPermitTemplateValues",
                            "fields": [
                                {
                                    "name": "riskOfWork",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_0"
                                },
                                {
                                    "name": "riskAssessmentLevel",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_1"
                                },
                                {
                                    "name": "riskAssessmentTeam",
                                    "isRequired": true,
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_2"
                                },
                                {
                                    "name": "authoritySelector",
                                    "authorityPropertyName": "RiskAssessmentFacilitator",
                                    "textResource": "RiskAssessmentFacilitatorField",
                                    "isRequired": true,
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "filter": {
                                        "defaultAllowedRoles": [
                                            "Level2RiskAssessor"
                                        ],
                                        "specificFilters": []
                                    },
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_3"
                                },
                                {
                                    "name": "workItemVariant",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_4"
                                },
                                {
                                    "name": "site",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_5"
                                },
                                {
                                    "name": "workingLocations",
                                    "copyParticipation": "Clone",
                                    "workItemFilter": [
                                        {
                                            "kind": "PermitTemplate",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_6"
                                },
                                {
                                    "name": "affectedLocations",
                                    "copyParticipation": "Clone",
                                    "workItemFilter": [
                                        {
                                            "kind": "PermitTemplate",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_7"
                                },
                                {
                                    "name": "workObjects",
                                    "copyParticipation": "Clone",
                                    "allowMultipleEquipment": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_8"
                                },
                                {
                                    "name": "title",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_9"
                                },
                                {
                                    "name": "workDescription",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_10"
                                },
                                {
                                    "name": "numberOfPersons",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_11"
                                },
                                {
                                    "name": "text",
                                    "key": "PMReference",
                                    "numberOfLines": "1",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_12"
                                },
                                {
                                    "name": "text",
                                    "key": "ToolsToBeUsed",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_13"
                                },
                                {
                                    "name": "text",
                                    "key": "EquipmentToBeUsed",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_14"
                                },
                                {
                                    "name": "discipline",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_15"
                                },
                                {
                                    "name": "isolationCertificateRequirement",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_16"
                                },
                                {
                                    "name": "textCheckBox",
                                    "key": "RestrictedWorkSpace",
                                    "copyParticipation": "Clone",
                                    "onlyVisibleForRisksOfWork": "Normal",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitTemplateValues_17"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "SpecifyPermitHazards",
                            "fields": [
                                {
                                    "name": "text",
                                    "key": "SIMOPS",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitHazards_0"
                                },
                                {
                                    "name": "gasMeasurementRequirements",
                                    "hiddenFor": "ColdWork, HotWorkSparkPotential, BreakingContainment",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitHazards_1"
                                },
                                {
                                    "name": "riskAssessmentTasks",
                                    "readOnlyIfNoRiskLevelSelected": true,
                                    "categories": "PermitHazards",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitHazards_2"
                                },
                                {
                                    "name": "highestResidualRisk",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "uniqueKey": "PermitTemplate_SpecifyPermitHazards_3"
                                },
                                {
                                    "name": "residualRisk",
                                    "onlyVisibleForRiskAssessmentLevel": "Level1",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "PermitTemplate_SpecifyPermitHazards_4"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "ApproveTemplate",
                            "fields": [
                                {
                                    "name": "controlMeasures",
                                    "categories": "SupplementaryCertificates",
                                    "textResource": "SupplementaryCertificatesControlMeasures",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "PermitTemplate_ApproveTemplate_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApprovePermitTemplateByRiskAssessmentTeam",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApprovePermitTemplateByRiskAssessmentFacilitator",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveDraftTemplateByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveDraftTemplateBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "PermitTemplate_ApproveTemplate_1"
                                },
                                {
                                    "name": "revertState",
                                    "toState": "Requesting",
                                    "uniqueKey": "PermitTemplate_ApproveTemplate_2"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "RevalidateTemplate",
                            "fields": [
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AuthorizeTemplateBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true,
                                                    "hideShiftEndWarning": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "PermitTemplate_RevalidateTemplate_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RevalidatePermitTemplateBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true,
                                                    "hideShiftEndWarning": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "PermitTemplate_RevalidateTemplate_1"
                                },
                                {
                                    "name": "revalidationSignaturesPeriod",
                                    "uniqueKey": "PermitTemplate_RevalidateTemplate_2"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Approved",
                                "Live",
                                "Suspended"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ],
                            "unsignedSignaturesAtTop": true
                        },
                        {
                            "id": "CloseTemplate",
                            "fields": [
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RevertPermitTemplateForModification",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "PermitTemplate_CloseTemplate_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ClosePermitTemplate",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "PermitTemplate_CloseTemplate_1"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Live"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "ApproveTemplate",
                            "optionalInStates": [
                                "Requesting"
                            ],
                            "titleResource": "ApproveAuthorizePermitTemplateAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "RevalidateTemplate",
                            "optionalInStates": [
                                "Approved"
                            ],
                            "titleResource": "AuthorizeOrReauthorizePermitTemplateAction"
                        },
                        {
                            "key": "addSignature",
                            "for": "RevalidatePermitTemplateBySiteAuthority",
                            "titleResource": "RevalidatePermitTemplateBySiteAuthority",
                            "actionConditionName": "PermitTemplate_2",
                            "fields": [
                                {
                                    "name": "period",
                                    "readonly": false
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "ClosePermitTemplate",
                            "titleResource": "ClosePermitTemplate",
                            "actionConditionName": "PermitTemplate_3",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "deleteWorkItem",
                            "optionalInStates": [
                                "Requesting"
                            ],
                            "titleResource": "DeletePermitTemplateAction"
                        },
                        {
                            "key": "addCounterSignature",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        },
                        {
                            "key": "copyWorkItem",
                            "titleResource": "CopyPermitTemplateAction"
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkPermitTemplateAsCopyable",
                            "visibleWhenReadOnly": true,
                            "titleResource": "MarkPermitTemplateAsCopyable",
                            "actionConditionName": "PermitTemplate_7",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkAsNotCopyable",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "createFromTemplate",
                            "optionalInStates": [
                                "Active"
                            ],
                            "titleResource": "CreatePermitLRPFromTemplateAction",
                            "creationState": "Approved"
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchPermitTemplates",
                            "command": "SearchCertificates"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "FrontPage",
                            "onlyForVariant": null
                        },
                        {
                            "name": "Full",
                            "onlyForVariant": null
                        },
                        {
                            "name": "All",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "All"
                },
                {
                    "kind": "IsolationTemplate",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting",
                                "DesignComplete",
                                "AwaitingAuthorisation",
                                "Modification",
                                "AwaitingReauthorisation"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Approved",
                            "states": [
                                "AwaitingActivation",
                                "Active"
                            ]
                        },
                        {
                            "name": "Suspended",
                            "states": [
                                "Revalidate"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "riskAssessment",
                            "kind": "TaskRiskAssessmentTemplate",
                            "defaultLevel": "Level2"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workingLocation",
                            "name": "workingLocation"
                        },
                        {
                            "key": "5_systemOrEquipmentDescription",
                            "name": "systemOrEquipmentDescription"
                        },
                        {
                            "key": "6_isCopyable",
                            "name": "isCopyable"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage"
                        },
                        {
                            "name": "RegistrationNumber"
                        },
                        {
                            "name": "Status"
                        },
                        {
                            "name": "Title"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "SpecifyIsolationValues",
                            "fields": [
                                {
                                    "name": "site",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_0"
                                },
                                {
                                    "name": "workingLocations",
                                    "copyParticipation": "Clone",
                                    "workItemFilter": [
                                        {
                                            "kind": "IsolationTemplate",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_1"
                                },
                                {
                                    "name": "workObjects",
                                    "copyParticipation": "Clone",
                                    "allowMultipleEquipment": true,
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_2"
                                },
                                {
                                    "name": "title",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_3"
                                },
                                {
                                    "name": "workOrderNumber",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_4"
                                },
                                {
                                    "name": "workDescription",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "maxLength": "240",
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_5"
                                },
                                {
                                    "name": "text",
                                    "key": "IsolationDescription",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_6"
                                },
                                {
                                    "name": "contingencyPlan",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationValues_7"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "AwaitingAuthorisation",
                                "Modification",
                                "AwaitingReauthorisation",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "SpecifyIsolationInstructionPlan",
                            "fields": [
                                {
                                    "name": "isolationInstructionPlan",
                                    "mode": "DesignIsolation",
                                    "shownInstructionTypes": "all",
                                    "copyParticipation": "Clone",
                                    "copyNewActionsToDeisolation": true,
                                    "copyInitialIsolationCommentsToDeisolation": true,
                                    "columns": [
                                        {
                                            "name": "sequenceNumber"
                                        },
                                        {
                                            "name": "tagNumber"
                                        },
                                        {
                                            "name": "equipment"
                                        },
                                        {
                                            "name": "isolationType"
                                        },
                                        {
                                            "name": "isolationMethod"
                                        },
                                        {
                                            "name": "isolatedState",
                                            "emphasized": true
                                        },
                                        {
                                            "name": "notIsolatedState",
                                            "emphasized": true
                                        },
                                        {
                                            "name": "comments"
                                        },
                                        {
                                            "name": "stt"
                                        },
                                        {
                                            "name": "uti"
                                        },
                                        {
                                            "name": "verificationRequired"
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_SpecifyIsolationInstructionPlan_0"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "AwaitingAuthorisation",
                                "Modification",
                                "AwaitingReauthorisation",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "SpecifyDeisolationInstructionPlan",
                            "fields": [
                                {
                                    "name": "isolationInstructionPlan",
                                    "mode": "DesignDeisolation",
                                    "shownInstructionTypes": "all",
                                    "copyParticipation": "Clone",
                                    "columns": [
                                        {
                                            "name": "sequenceNumber"
                                        },
                                        {
                                            "name": "tagNumber"
                                        },
                                        {
                                            "name": "equipment"
                                        },
                                        {
                                            "name": "isolationType"
                                        },
                                        {
                                            "name": "isolationMethod"
                                        },
                                        {
                                            "name": "isolatedState",
                                            "emphasized": true
                                        },
                                        {
                                            "name": "notIsolatedState",
                                            "emphasized": true
                                        },
                                        {
                                            "name": "comments"
                                        },
                                        {
                                            "name": "stt"
                                        },
                                        {
                                            "name": "uti"
                                        },
                                        {
                                            "name": "verificationRequired"
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_SpecifyDeisolationInstructionPlan_0"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "AwaitingAuthorisation",
                                "Modification",
                                "AwaitingReauthorisation",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "DraftIsolationCertificate",
                            "fields": [
                                {
                                    "name": "isolationSchemeAssessments",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "editPermissions": {
                                        "ElectricalLowVoltageLevel1": [
                                            "*"
                                        ],
                                        "ElectricalLowVoltage": [
                                            "*"
                                        ],
                                        "ElectricalHighVoltage": [
                                            "*"
                                        ],
                                        "Control": [
                                            "*"
                                        ],
                                        "Process": [
                                            "*"
                                        ],
                                        "LolcMovement": [
                                            "*"
                                        ]
                                    },
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_0"
                                },
                                {
                                    "name": "attachWorkItem",
                                    "kind": "TaskRiskAssessmentTemplate",
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_1"
                                },
                                {
                                    "name": "residualRisk",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_2"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "RequiresAbnormalOperatingCondition",
                                    "copyParticipation": "Clone",
                                    "isRequired": true,
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "Yes",
                                        "No"
                                    ],
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_3"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteControlIsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteElectricalLowVoltageLevel1IsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteElectricalLowVoltageIsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteElectricalHighVoltageIsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteProcessIsolationDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestIsolationTemplate",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_4"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveIsolationTemplate",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true,
                                                    "hideShiftEndWarning": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_5"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestModifiedIsolationTemplate",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_6"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ReApproveIsolationTemplate",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true,
                                                    "hideShiftEndWarning": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RevalidateIsolationTemplateBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_7"
                                },
                                {
                                    "name": "revalidationSignaturesPeriod",
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_8"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RevertIsolationTemplateForModification",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_9"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseIsolationTemplate",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_10"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "DesignComplete",
                                    "toState": "Requesting",
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_11"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "AwaitingAuthorisation",
                                    "toState": "DesignComplete",
                                    "uniqueKey": "IsolationTemplate_DraftIsolationCertificate_12"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "AwaitingAuthorisation",
                                "Modification",
                                "AwaitingReauthorisation",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftIsolationCertificate",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "RequestApproveIsolationTemplate"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftIsolationCertificate",
                            "requiredInStates": [
                                "DesignComplete"
                            ],
                            "titleResource": "RequestIsolationTemplateAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "DraftIsolationCertificate",
                            "requiredInStates": [
                                "AwaitingAuthorisation"
                            ],
                            "titleResource": "ApproveIsolationTemplate"
                        },
                        {
                            "key": "addSignature",
                            "for": "RevalidateIsolationTemplateBySiteAuthority",
                            "titleResource": "RevalidateIsolationTemplateBySiteAuthority",
                            "actionConditionName": "IsolationTemplate_3",
                            "fields": [
                                {
                                    "name": "period",
                                    "readonly": false
                                },
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "CloseIsolationTemplate",
                            "titleResource": "CloseIsolationTemplate",
                            "actionConditionName": "IsolationTemplate_4",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addCounterSignature",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        },
                        {
                            "key": "copyWorkItem",
                            "titleResource": "CopyIsolationTemplateAction"
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkIsolationTemplateAsCopyable",
                            "visibleWhenReadOnly": true,
                            "titleResource": "MarkIsolationTemplateAsCopyable",
                            "actionConditionName": "IsolationTemplate_7",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkAsNotCopyable",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchIsolationTemplates",
                            "command": "SearchCertificates"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "ICC",
                            "onlyForVariant": null
                        },
                        {
                            "name": "Full",
                            "onlyForVariant": null
                        },
                        {
                            "name": "All",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "All"
                },
                {
                    "kind": "TaskRiskAssessmentTemplate",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ]
                        },
                        {
                            "name": "Accepted",
                            "states": [
                                "Accepted"
                            ]
                        },
                        {
                            "name": "Live",
                            "states": [
                                "Active"
                            ]
                        }
                    ],
                    "displayInMenu": false,
                    "attachmentTypes": [],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [],
                    "certificatesSearchPageColumns": [],
                    "wizardSteps": [
                        {
                            "id": "RiskAssessmentDraft",
                            "fields": [
                                {
                                    "name": "text",
                                    "key": "RiskAssessmentTitle",
                                    "numberOfLines": "1",
                                    "required": false,
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_0"
                                },
                                {
                                    "name": "riskAssessmentLevel",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_1"
                                },
                                {
                                    "name": "riskAssessmentTeam",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_2"
                                },
                                {
                                    "name": "authoritySelector",
                                    "authorityPropertyName": "RiskAssessmentFacilitator",
                                    "onlyVisibleForRiskAssessmentLevel": "Level2",
                                    "textResource": "RiskAssessmentFacilitatorField",
                                    "filter": {
                                        "defaultAllowedRoles": [
                                            "Level2RiskAssessor"
                                        ],
                                        "specificFilters": []
                                    },
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_3"
                                },
                                {
                                    "name": "riskAssessmentTasks",
                                    "copyParticipation": "CloneAndTemplate",
                                    "readOnlyIfNoRiskLevelSelected": true,
                                    "categories": "PermitHazards",
                                    "isRequired": true,
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_4"
                                },
                                {
                                    "name": "residualRisk",
                                    "onlyVisibleForRiskAssessmentLevel": "Level1",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_5"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AcceptTaskRiskAssessmentByRiskAssessmentTeam",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AcceptTaskRiskAssessmentByRiskAssessmentFacilitator",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentDraft_6"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Accepted",
                                "Active"
                            ]
                        },
                        {
                            "id": "RiskAssessmentApproved",
                            "fields": [
                                {
                                    "name": "text",
                                    "key": "SIMOPS",
                                    "copyParticipation": "Template",
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentApproved_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveTaskRiskAssessmentByAreaOrSiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveTaskRiskAssessmentByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveTaskRiskAssessmentBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "EndorseTaskRiskAssessmentByFunctionalAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "TaskRiskAssessmentTemplate_RiskAssessmentApproved_1"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Accepted"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Accepted",
                                "Active"
                            ]
                        }
                    ],
                    "actions": [],
                    "commandBarButtons": [],
                    "printProfiles": [
                        {
                            "name": "TaskRiskAssessment",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "TaskRiskAssessment"
                },
                {
                    "kind": "SafetyOverrideRiskAssessmentTemplate",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting",
                                "Approved"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Live",
                            "states": [
                                "AwaitingActivation",
                                "Active"
                            ]
                        },
                        {
                            "name": "Overdue",
                            "states": [
                                "Revalidate"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_workingLocation",
                            "name": "workingLocation"
                        },
                        {
                            "key": "5_systemOrEquipmentDescription",
                            "name": "systemOrEquipmentDescription"
                        },
                        {
                            "key": "6_signedByUsername",
                            "name": "signedByUsername"
                        },
                        {
                            "key": "7_isDeleted",
                            "name": "isDeleted"
                        },
                        {
                            "key": "8_riskArea",
                            "name": "riskArea"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage"
                        },
                        {
                            "name": "RegistrationNumber"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "Site"
                        },
                        {
                            "name": "Equipment"
                        },
                        {
                            "name": "Locations"
                        },
                        {
                            "name": "Status"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "Step1",
                            "fields": [
                                {
                                    "name": "title",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_0"
                                },
                                {
                                    "name": "site",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_1"
                                },
                                {
                                    "name": "workingLocations",
                                    "copyParticipation": "Clone",
                                    "workItemFilter": [
                                        {
                                            "kind": "SafetyOverrideRiskAssessmentTemplate",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_2"
                                },
                                {
                                    "name": "workObjects",
                                    "browseBy": "Systems",
                                    "isRequired": true,
                                    "allowMultipleEquipment": true,
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_3"
                                },
                                {
                                    "name": "workDescription",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_4"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "OverrideBypassType",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "Input",
                                        "Output"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_5"
                                },
                                {
                                    "name": "text",
                                    "key": "OverrideBypassMethod",
                                    "numberOfLines": "1",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_6"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "OverallIntegrityLevel",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "3",
                                        "2",
                                        "1",
                                        "FireAndGas",
                                        "HMA",
                                        "SISBPCS",
                                        "ControlLoP"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_7"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "IntegrityBasisSafety",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "NA",
                                        "1",
                                        "2",
                                        "3"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_8"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "IntegrityBasisEnvironment",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "NA",
                                        "1",
                                        "2",
                                        "3"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_9"
                                },
                                {
                                    "name": "multiValue",
                                    "key": "IntegrityBasisCommercial",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "defaultValue": null,
                                    "allowedValues": [
                                        "NA",
                                        "1",
                                        "2",
                                        "3"
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_10"
                                },
                                {
                                    "name": "text",
                                    "key": "RiskReductionFactor",
                                    "numberOfLines": "1",
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step1_11"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        },
                        {
                            "id": "Step2",
                            "fields": [
                                {
                                    "name": "riskAssessmentTeam",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_0"
                                },
                                {
                                    "name": "authoritySelector",
                                    "authorityPropertyName": "RiskAssessmentFacilitator",
                                    "textResource": "SORA_RiskAssessmentFacilitator",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "filter": {
                                        "defaultAllowedRoles": [
                                            "Level2RiskAssessor"
                                        ],
                                        "specificFilters": [
                                            {
                                                "variants": [
                                                    "DefaultSafetyOverrideRiskAssessment"
                                                ],
                                                "roles": [],
                                                "origin": null
                                            }
                                        ]
                                    },
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_1"
                                },
                                {
                                    "name": "riskAssessmentTasks",
                                    "copyParticipation": "Clone",
                                    "categories": "SORAHazards",
                                    "isRequired": true,
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_2"
                                },
                                {
                                    "name": "text",
                                    "key": "ReasonsForApplyingAndComments",
                                    "numberOfLines": "5",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_3"
                                },
                                {
                                    "name": "text",
                                    "key": "MaximumSoraDuration",
                                    "numberOfLines": "1",
                                    "isRequired": true,
                                    "copyParticipation": "Clone",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_4"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "SoraTemplateTeamAcceptance",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "SoraTemplateRiskFacilitatorAcceptance",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "SoraTemplateApprovalByAreaAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "SoraTemplateApprovalBySiteAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "SoraTemplateApprovalByFunctionalAuthority",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_5"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "SoraTemplateAuthorisation",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true,
                                                    "hideShiftEndWarning": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_6"
                                },
                                {
                                    "name": "signatureList",
                                    "onlyVisibleIn": "Approved,AwaitingActivation,Active,Revalidate,Closed",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "SoraTemplateReAuthorisation",
                                            "fields": [
                                                {
                                                    "name": "period",
                                                    "emptyDefaultEndDate": true,
                                                    "hideShiftEndWarning": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_7"
                                },
                                {
                                    "name": "revalidationSignaturesPeriod",
                                    "onlyVisibleIn": "AwaitingActivation,Active,Revalidate,Closed",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_8"
                                },
                                {
                                    "name": "signatureList",
                                    "onlyVisibleIn": "AwaitingActivation,Active,Revalidate",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RevertSoraTemplateForModification",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_9"
                                },
                                {
                                    "name": "signatureList",
                                    "onlyVisibleIn": "AwaitingActivation,Active,Revalidate,Closed",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseSoraTemplate",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_10"
                                },
                                {
                                    "name": "revertState",
                                    "toState": "Requesting",
                                    "uniqueKey": "SafetyOverrideRiskAssessmentTemplate_Step2_11"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Approved",
                                "AwaitingActivation",
                                "Active",
                                "Revalidate"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "copyWorkItem",
                            "titleResource": "CopySafetyOverrideRiskAssessmentTemplateAction"
                        },
                        {
                            "key": "deleteWorkItem",
                            "titleResource": "DeleteSORATemplateAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "optionalInStates": [
                                "Requesting"
                            ],
                            "titleResource": "ApproveSoraTemplate",
                            "wizardStepId": "Step2"
                        },
                        {
                            "key": "goToWizardStep",
                            "optionalInStates": [
                                "Approved"
                            ],
                            "titleResource": "AuthoriseSoraTemplate",
                            "wizardStepId": "Step2"
                        },
                        {
                            "key": "goToWizardStep",
                            "optionalInStates": [
                                "Active"
                            ],
                            "titleResource": "ReauthoriseSoraTemplate",
                            "wizardStepId": "Step2"
                        },
                        {
                            "key": "goToWizardStep",
                            "requiredInStates": [
                                "Revalidate"
                            ],
                            "titleResource": "ReauthoriseSoraTemplate",
                            "wizardStepId": "Step2"
                        },
                        {
                            "key": "goToWizardStep",
                            "optionalInStates": [
                                "Active",
                                "Revalidate"
                            ],
                            "titleResource": "CloseSoraTemplate",
                            "wizardStepId": "Step2"
                        },
                        {
                            "key": "addCounterSignature",
                            "optionalInAllStatesExcept": [
                                "Closed"
                            ],
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": true
                                }
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchSoraTemplates",
                            "command": "SearchCertificates"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "Full",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "Full"
                }
            ]
        },
        {
            "name": "selfVerification",
            "workspaces": [
                {
                    "kind": "WorkItemAudit",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Reviewed",
                            "states": [
                                "Reviewed"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "isolationCertificate",
                            "kind": "Isolation"
                        },
                        {
                            "type": "permit",
                            "kind": "Permit"
                        },
                        {
                            "type": "permit",
                            "kind": "Operation"
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "OperationalRiskAssessment"
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "SafetyOverrideRiskAssessment"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_signedDateRange",
                            "name": "signedDateRange",
                            "signatureType": "ReviewWorkItemAudit"
                        },
                        {
                            "key": "4_workItemVariant",
                            "name": "workItemVariant"
                        },
                        {
                            "key": "5_attachedWorkItemRegistrationNumber",
                            "name": "attachedWorkItemRegistrationNumber"
                        },
                        {
                            "key": "6_signedByUsername",
                            "name": "signedByUsername"
                        },
                        {
                            "key": "7_hasAuditTasks",
                            "name": "hasAuditTasks"
                        },
                        {
                            "key": "8_signedByUsernameForSignature",
                            "name": "signedByUsernameForSignature",
                            "signatureType": "ReviewWorkItemAudit"
                        },
                        {
                            "key": "9_isAuditCompliant",
                            "name": "isAuditCompliant"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "RegistrationNumber",
                            "width": "180"
                        },
                        {
                            "name": "Status"
                        },
                        {
                            "name": "WorkItemVariant"
                        },
                        {
                            "name": "Site"
                        },
                        {
                            "name": "AuditedItem"
                        },
                        {
                            "name": "AuditDate"
                        },
                        {
                            "name": "SignerFullName",
                            "titleResource": "WorkItemAudit_ReviewedBySearchColumnTitle"
                        },
                        {
                            "name": "AuditCompliantPercentage"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "Request",
                            "fields": [
                                {
                                    "name": "auditedAt",
                                    "uniqueKey": "WorkItemAudit_Request_0"
                                },
                                {
                                    "name": "createdBy",
                                    "uniqueKey": "WorkItemAudit_Request_1"
                                },
                                {
                                    "name": "site",
                                    "uniqueKey": "WorkItemAudit_Request_2"
                                },
                                {
                                    "name": "workingLocations",
                                    "copyParticipation": "CloneAndTemplate",
                                    "workItemFilter": [
                                        {
                                            "kind": "Permit",
                                            "workItemState": [
                                                "Active",
                                                "SuspendedForEmergency",
                                                "SuspendedForReauthorization",
                                                "SuspendedForRevalidation",
                                                "SuspendedForSanctionToTest"
                                            ]
                                        },
                                        {
                                            "kind": "Isolation",
                                            "workItemState": [
                                                "IsolationInPlace"
                                            ]
                                        },
                                        {
                                            "kind": "OperationalRiskAssessment",
                                            "workItemState": [
                                                "Active"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "WorkItemAudit_Request_3"
                                },
                                {
                                    "name": "workItemVariant",
                                    "uniqueKey": "WorkItemAudit_Request_4"
                                },
                                {
                                    "name": "attachedWorkItemsRegistrationNumbersList",
                                    "uniqueKey": "WorkItemAudit_Request_5"
                                },
                                {
                                    "name": "workDescription",
                                    "numberOfLines": "8",
                                    "uniqueKey": "WorkItemAudit_Request_6"
                                },
                                {
                                    "name": "workItemAuditAssessments",
                                    "enableTasksPerQuestion": true,
                                    "isRequired": true,
                                    "enableAddingTasksIn": "['Requesting', 'Reviewed']",
                                    "uniqueKey": "WorkItemAudit_Request_7"
                                },
                                {
                                    "name": "auditTasks",
                                    "readOnlyWhenClosed": true,
                                    "displayQuestionNumber": true,
                                    "uniqueKey": "WorkItemAudit_Request_8"
                                },
                                {
                                    "name": "lessonsLearned",
                                    "allowEditingAlways": true,
                                    "readOnlyWhenClosed": true,
                                    "uniqueKey": "WorkItemAudit_Request_9"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "Reviewed",
                                    "uniqueKey": "WorkItemAudit_Request_10"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ReviewWorkItemAudit",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseWorkItemAudit",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "WorkItemAudit_Request_11"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Reviewed"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "deleteWorkItem",
                            "titleResource": "DeleteWorkItemAuditAction"
                        },
                        {
                            "key": "addSignature",
                            "for": "ReviewWorkItemAudit",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        },
                        {
                            "key": "addSignature",
                            "for": "CloseWorkItemAudit",
                            "actionConditionName": "WorkItemAudit_2",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchWorkItemAudits",
                            "command": "SearchCertificates"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "WorkItemAudit",
                            "onlyForVariant": null
                        },
                        {
                            "name": "AuditAndWorkItems",
                            "onlyForVariant": null
                        },
                        {
                            "name": "AuditWithWorkItemsAndAttachments",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "WorkItemAudit"
                },
                {
                    "kind": "Action",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting",
                                "Confirmed"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "Live",
                            "states": [
                                "Active"
                            ]
                        },
                        {
                            "name": "Completed",
                            "states": [
                                "Completed"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        },
                        {
                            "key": "3_title",
                            "name": "title"
                        },
                        {
                            "key": "4_taskDueDateRange",
                            "name": "taskDueDateRange"
                        },
                        {
                            "key": "5_isDeleted",
                            "name": "isDeleted"
                        },
                        {
                            "key": "6_owner",
                            "name": "owner"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "RegistrationNumber",
                            "width": "180"
                        },
                        {
                            "name": "Status"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "TaskDueDate"
                        },
                        {
                            "name": "TaskOwnerFullName"
                        },
                        {
                            "name": "CreatedByFullName"
                        },
                        {
                            "name": "SignatureRemarks",
                            "titleResource": "ColumnLabel_SignatureRemarks_CompleteAction"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "RequestAction",
                            "fields": [
                                {
                                    "name": "relatedAudit",
                                    "uniqueKey": "Action_RequestAction_0"
                                },
                                {
                                    "name": "site",
                                    "uniqueKey": "Action_RequestAction_1"
                                },
                                {
                                    "name": "workingLocations",
                                    "workItemFilter": [
                                        {
                                            "kind": "Action",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Action_RequestAction_2"
                                },
                                {
                                    "name": "taskDueDate",
                                    "isRequired": true,
                                    "uniqueKey": "Action_RequestAction_3"
                                },
                                {
                                    "name": "taskOwner",
                                    "isRequired": true,
                                    "uniqueKey": "Action_RequestAction_4"
                                },
                                {
                                    "name": "title",
                                    "uniqueKey": "Action_RequestAction_5"
                                },
                                {
                                    "name": "workDescription",
                                    "isRequired": true,
                                    "uniqueKey": "Action_RequestAction_6"
                                },
                                {
                                    "name": "taskComment",
                                    "uniqueKey": "Action_RequestAction_7"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ConfirmAction",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Action_RequestAction_8"
                                },
                                {
                                    "name": "signatureList",
                                    "onlyVisibleIn": "Confirmed,Active,Completed,Closed",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "AcceptAction",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Action_RequestAction_9"
                                },
                                {
                                    "name": "signatureList",
                                    "onlyVisibleIn": "Active,Completed,Closed",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteAction",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": true
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Action_RequestAction_10"
                                },
                                {
                                    "name": "signatureList",
                                    "onlyVisibleIn": "Completed,Closed",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ApproveAction",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "Action_RequestAction_11"
                                },
                                {
                                    "name": "revertState",
                                    "uniqueKey": "Action_RequestAction_12"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "Confirmed",
                                "Active",
                                "Completed"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "RequestAction",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "ConfirmActionAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "RequestAction",
                            "requiredInStates": [
                                "Confirmed"
                            ],
                            "titleResource": "AcceptActionAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "RequestAction",
                            "requiredInStates": [
                                "Active"
                            ],
                            "titleResource": "CompleteActionAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "RequestAction",
                            "requiredInStates": [
                                "Completed"
                            ],
                            "titleResource": "ApproveActionAction"
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "SearchActions",
                            "command": "SearchCertificates"
                        }
                    ],
                    "printProfiles": [
                        {
                            "name": "Actions",
                            "onlyForVariant": null
                        },
                        {
                            "name": "ActionsAndAttachments",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "ActionsAndAttachments"
                }
            ]
        },
        {
            "name": "LockOpenLockClosed",
            "workspaces": [
                {
                    "kind": "LolcMovement",
                    "workflowSteps": [
                        {
                            "name": "Draft",
                            "states": [
                                "Requesting"
                            ],
                            "allowCreationInState": "Requesting"
                        },
                        {
                            "name": "DesignComplete",
                            "states": [
                                "DesignComplete",
                                "PartiallyMovedOutOfNormal"
                            ]
                        },
                        {
                            "name": "Live",
                            "states": [
                                "IsolationInPlace"
                            ]
                        },
                        {
                            "name": "MovementToNormal",
                            "states": [
                                "DeisolationInProgress",
                                "Deisolated"
                            ]
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "riskAssessment",
                            "kind": "OperationalRiskAssessment",
                            "defaultLevel": "Level2",
                            "allowExistingUsage": true
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "Operation",
                            "allowExistingUsage": true,
                            "variant": "RiskAssessedProcedure"
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "Permit",
                            "defaultLevel": "Level1",
                            "allowTemplateUsage": true,
                            "allowExistingUsage": true,
                            "templateLabelResource": "TemplateLabel",
                            "creationStateFromTemplate": "Approved"
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "SafetyOverrideRiskAssessment",
                            "allowTemplateUsage": true,
                            "allowExistingUsage": true,
                            "allowNewUsage": false
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage",
                            "width": "40"
                        },
                        {
                            "name": "RegistrationNumber",
                            "width": "120"
                        },
                        {
                            "name": "Status",
                            "width": "180"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "PlannedStartDateTime",
                            "width": "110"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "SpecifyIsolationValues",
                            "fields": [
                                {
                                    "name": "title",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "LolcMovement_SpecifyIsolationValues_0"
                                },
                                {
                                    "name": "workingPeriod",
                                    "isRequired": true,
                                    "ignoreWorkingHours": false,
                                    "uniqueKey": "LolcMovement_SpecifyIsolationValues_1"
                                },
                                {
                                    "name": "site",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "LolcMovement_SpecifyIsolationValues_2"
                                },
                                {
                                    "name": "workingLocations",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "workItemFilter": [
                                        {
                                            "kind": "Isolation",
                                            "workItemState": [
                                                "*"
                                            ]
                                        },
                                        {
                                            "kind": "LolcMovement",
                                            "workItemState": [
                                                "*"
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "LolcMovement_SpecifyIsolationValues_3"
                                },
                                {
                                    "name": "workObjects",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "LolcMovement_SpecifyIsolationValues_4"
                                },
                                {
                                    "name": "manageIsolations",
                                    "copyParticipation": "CloneAndTemplate",
                                    "emphasizeState": true,
                                    "showPid": false,
                                    "showStt": false,
                                    "showUti": false,
                                    "browseBy": "LolcValves",
                                    "hideCreateNew": true,
                                    "equipmentHeaderResource": "IsolationEquipment_LolcMovement",
                                    "showValveLolcRegistryCurrentPosition": true,
                                    "uniqueKey": "LolcMovement_SpecifyIsolationValues_5"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "PartiallyMovedOutOfNormal",
                                "IsolationInPlace",
                                "DeisolationInProgress",
                                "Deisolated"
                            ]
                        },
                        {
                            "id": "Signatures",
                            "fields": [
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteLolcMovementDesign",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "LolcMovement_Signatures_0"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "DesignComplete",
                                    "toState": "Requesting",
                                    "uniqueKey": "LolcMovement_Signatures_1"
                                },
                                {
                                    "name": "signatureList",
                                    "onlyVisibleIn": "DesignComplete, PartiallyMovedOutOfNormal, IsolationInPlace, PartiallyMovedOutOfNormal, Closed",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestLolcMovement",
                                            "fields": [
                                                {
                                                    "name": "isolationsSelector",
                                                    "isolationType": "LolcMovement",
                                                    "signingMode": "ConfirmIsolation",
                                                    "showUti": false,
                                                    "showStt": false,
                                                    "showLockNumber": true,
                                                    "showKeyNumber": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "LolcMovement_Signatures_2"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Draft"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete",
                                "PartiallyMovedOutOfNormal",
                                "IsolationInPlace",
                                "DeisolationInProgress",
                                "Deisolated"
                            ]
                        },
                        {
                            "id": "MovementBackToNormalPosition",
                            "fields": [
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "RequestLolcMovementBack",
                                            "fields": [
                                                {
                                                    "name": "isolationInstructionsSelector",
                                                    "signingMode": "RequestToMoveLolcValveBackToNormal",
                                                    "showStt": false,
                                                    "autoSelectPreviousRows": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "LolcMovement_MovementBackToNormalPosition_0"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ConfirmLolcMovementDeisolations",
                                            "fields": [
                                                {
                                                    "name": "isolationsSelector",
                                                    "isolationType": "LolcMovement",
                                                    "signingMode": "ConfirmDeisolation",
                                                    "showUti": false,
                                                    "showStt": false,
                                                    "showLockNumber": true,
                                                    "showKeyNumber": true
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseLolcMovementCertificate",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "LolcMovement_MovementBackToNormalPosition_1"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Live"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "IsolationInPlace",
                                "DeisolationInProgress",
                                "Deisolated"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Signatures",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "FinalizeLolcMovementRequest"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "Signatures",
                            "requiredInStates": [
                                "DesignComplete",
                                "PartiallyMovedOutOfNormal"
                            ],
                            "titleResource": "RequestLolcMovement"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "MovementBackToNormalPosition",
                            "requiredInStates": [
                                "IsolationInPlace"
                            ],
                            "titleResource": "MovementBackToNormalPositionAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "MovementBackToNormalPosition",
                            "requiredInStates": [
                                "DeisolationInProgress"
                            ],
                            "titleResource": "ConfirmLolcMovementDeisolationsAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "MovementBackToNormalPosition",
                            "requiredInStates": [
                                "Deisolated"
                            ],
                            "titleResource": "CloseLolcMovementAction"
                        },
                        {
                            "key": "copyWorkItem",
                            "titleResource": "CopyLolcMovement"
                        },
                        {
                            "key": "deleteWorkItem",
                            "optionalInStates": [
                                "Requesting"
                            ],
                            "titleResource": "DeleteLolcMovementAction"
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkAsNotCopyable",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "LolcRegistry",
                            "command": "ShowLockOpenLockClosedRegistry"
                        },
                        {
                            "id": "SearchLolcMovements",
                            "command": "SearchCertificates"
                        }
                    ],
                    "views": {
                        "lolcRegistry": {
                            "enableInspection": true,
                            "inspectionKind": "LolcOperationalInspection",
                            "printingAllowed": true,
                            "showColumnSelector": true,
                            "filters": [
                                {
                                    "name": "siteSelector"
                                },
                                {
                                    "name": "valveDescription"
                                },
                                {
                                    "name": "keyword"
                                },
                                {
                                    "name": "positionChangedBetween"
                                },
                                {
                                    "name": "sectionSelector"
                                },
                                {
                                    "name": "hasActiveIsolationCertificates",
                                    "kinds": [
                                        "Isolation"
                                    ]
                                },
                                {
                                    "name": "requiresInspection"
                                },
                                {
                                    "name": "outOfNormalPosition"
                                }
                            ],
                            "columnDefinitions": [
                                {
                                    "name": "siteName",
                                    "width": "140",
                                    "titleResource": "LolcRegistry_Site_Header"
                                },
                                {
                                    "name": "valveDescription",
                                    "width": "500",
                                    "titleResource": "LolcRegistry_ValveDescription_Header"
                                },
                                {
                                    "name": "pAndID",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_PAndID_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "lineNumber",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_LineNumber_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "equipmentCode",
                                    "width": "200",
                                    "titleResource": "LolcRegistry_PieceOfEquipmentCode_Header"
                                },
                                {
                                    "name": "equipmentDescription",
                                    "width": "250",
                                    "titleResource": "LolcRegistry_PieceOfEquipmentDescription_Header"
                                },
                                {
                                    "name": "lockTagNumber",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_LockTagNumber_Header"
                                },
                                {
                                    "name": "lockNumber",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_LockNumber_Header"
                                },
                                {
                                    "name": "keyNumber",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_KeyNumber_Header"
                                },
                                {
                                    "name": "deviceType",
                                    "width": "100",
                                    "titleResource": "LolcRegistry_DeviceType_Header"
                                },
                                {
                                    "name": "classification",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_Classification_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "normalPosition",
                                    "width": "135",
                                    "titleResource": "LolcRegistry_NormalPosition_Header"
                                },
                                {
                                    "name": "currentPosition",
                                    "width": "135",
                                    "titleResource": "LolcRegistry_CurrentPosition_Header"
                                },
                                {
                                    "name": "comments",
                                    "width": "190",
                                    "titleResource": "LolcRegistry_Comments_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "activeIsolationCertificates",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_IsolationCertificate_Header"
                                },
                                {
                                    "name": "lastPositionChange",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_LastPositionChange_Header"
                                },
                                {
                                    "name": "section",
                                    "width": "85",
                                    "titleResource": "LolcRegistry_Section_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "lastAuditDateTime",
                                    "width": "135",
                                    "titleResource": "LolcRegistry_LastAuditDateTime_Header"
                                },
                                {
                                    "name": "systemDescription",
                                    "width": "200",
                                    "titleResource": "LolcRegistry_SystemDescription_Header"
                                },
                                {
                                    "name": "purpose",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_Purpose_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "inspectionNotes",
                                    "width": "350",
                                    "titleResource": "LolcRegistry_InspectionNotes_Header"
                                }
                            ]
                        }
                    },
                    "printProfiles": [
                        {
                            "name": "LolcMovement",
                            "onlyForVariant": null
                        },
                        {
                            "name": "LolcMovementAndAttachments",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "LolcMovementAndAttachments"
                },
                {
                    "kind": "LolcOperationalInspection",
                    "workflowSteps": [
                        {
                            "name": "Record",
                            "states": [
                                "Requesting",
                                "DesignComplete"
                            ],
                            "allowCreationInState": "Requesting"
                        }
                    ],
                    "displayInMenu": true,
                    "attachmentTypes": [
                        {
                            "type": "riskAssessment",
                            "kind": "OperationalRiskAssessment",
                            "defaultLevel": "Level2",
                            "allowExistingUsage": true
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "Operation",
                            "allowExistingUsage": true
                        },
                        {
                            "type": "riskAssessment",
                            "kind": "Permit",
                            "defaultLevel": "Level1",
                            "allowTemplateUsage": true,
                            "allowExistingUsage": true,
                            "templateLabelResource": "TemplateLabel"
                        },
                        {
                            "type": "file"
                        }
                    ],
                    "searchFields": [
                        {
                            "name": "registrationNumber"
                        },
                        {
                            "name": "title"
                        }
                    ],
                    "bulkOperations": [],
                    "certificatesSearchPageFields": [
                        {
                            "key": "0_registrationNumber",
                            "name": "registrationNumber"
                        },
                        {
                            "key": "1_site",
                            "name": "site"
                        },
                        {
                            "key": "2_state",
                            "name": "state"
                        }
                    ],
                    "certificatesSearchPageColumns": [
                        {
                            "name": "WorkItemImage",
                            "width": "40"
                        },
                        {
                            "name": "RegistrationNumber",
                            "width": "120"
                        },
                        {
                            "name": "Status",
                            "width": "180"
                        },
                        {
                            "name": "Title"
                        },
                        {
                            "name": "PlannedStartDateTime",
                            "width": "100"
                        }
                    ],
                    "wizardSteps": [
                        {
                            "id": "SpecifyIsolationValues",
                            "fields": [
                                {
                                    "name": "title",
                                    "copyParticipation": "CloneAndTemplate",
                                    "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_0"
                                },
                                {
                                    "name": "inspectionPlannedDate",
                                    "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_1"
                                },
                                {
                                    "name": "site",
                                    "copyParticipation": "CloneAndTemplate",
                                    "isRequired": true,
                                    "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_2"
                                },
                                {
                                    "name": "inspectionPlan",
                                    "copyParticipation": "CloneAndTemplate",
                                    "browseBy": "LolcValves",
                                    "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_3"
                                },
                                {
                                    "name": "signatureList",
                                    "signatures": [
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CompleteLolcOperationalInspectionDesign",
                                            "specificCommand": "RequestAllInspectionInstructionsCommand",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "ConfirmLolcOperationalInspection",
                                            "fields": [
                                                {
                                                    "name": "inspections"
                                                },
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        },
                                        {
                                            "name": "signature",
                                            "signatureTypes": "CloseOperationalInspection",
                                            "fields": [
                                                {
                                                    "name": "remarks",
                                                    "isRequired": false
                                                }
                                            ]
                                        }
                                    ],
                                    "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_4"
                                },
                                {
                                    "name": "revertState",
                                    "onlyVisibleIn": "DesignComplete",
                                    "toState": "Requesting",
                                    "onlyVisibleWhenNoInstructionSigned": true,
                                    "uniqueKey": "LolcOperationalInspection_SpecifyIsolationValues_5"
                                }
                            ],
                            "visibleFromWorkflowSteps": [
                                "Record"
                            ],
                            "showInStates": [
                                "Closed",
                                "Rejected",
                                "Requesting",
                                "DesignComplete"
                            ]
                        }
                    ],
                    "actions": [
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "SpecifyIsolationValues",
                            "requiredInStates": [
                                "Requesting"
                            ],
                            "titleResource": "CompleteLolcOperationalInspectionDesignAction"
                        },
                        {
                            "key": "goToWizardStep",
                            "wizardStepId": "SpecifyIsolationValues",
                            "requiredInStates": [
                                "DesignComplete"
                            ],
                            "titleResource": "ConfirmLolcOperationalInspectionAction"
                        },
                        {
                            "key": "copyWorkItem",
                            "titleResource": "CopyLolcOperationalInspection"
                        },
                        {
                            "key": "addSignature",
                            "for": "MarkAsNotCopyable",
                            "fields": [
                                {
                                    "name": "remarks",
                                    "isRequired": false
                                }
                            ]
                        }
                    ],
                    "commandBarButtons": [
                        {
                            "id": "LolcRegistry",
                            "command": "ShowLockOpenLockClosedRegistry"
                        },
                        {
                            "id": "SearchLolcOperationalInspections",
                            "command": "SearchCertificates"
                        }
                    ],
                    "views": {
                        "lolcRegistry": {
                            "enableInspection": true,
                            "inspectionKind": "LolcOperationalInspection",
                            "printingAllowed": true,
                            "showColumnSelector": true,
                            "filters": [
                                {
                                    "name": "siteSelector"
                                },
                                {
                                    "name": "valveDescription"
                                },
                                {
                                    "name": "keyword"
                                },
                                {
                                    "name": "positionChangedBetween"
                                },
                                {
                                    "name": "sectionSelector"
                                },
                                {
                                    "name": "hasActiveIsolationCertificates",
                                    "kinds": [
                                        "Isolation"
                                    ]
                                },
                                {
                                    "name": "requiresInspection"
                                },
                                {
                                    "name": "outOfNormalPosition"
                                }
                            ],
                            "columnDefinitions": [
                                {
                                    "name": "siteName",
                                    "width": "140",
                                    "titleResource": "LolcRegistry_Site_Header"
                                },
                                {
                                    "name": "pAndID",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_PAndID_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "lineNumber",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_LineNumber_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "codeAndDescription",
                                    "width": "500",
                                    "titleResource": "LolcRegistry_PieceOfEquipmentDisplayName_Header"
                                },
                                {
                                    "name": "valveDescription",
                                    "width": "500",
                                    "titleResource": "LolcRegistry_ValveDescription_Header"
                                },
                                {
                                    "name": "lockTagNumber",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_LockTagNumber_Header"
                                },
                                {
                                    "name": "lockNumber",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_LockNumber_Header"
                                },
                                {
                                    "name": "keyNumber",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_KeyNumber_Header"
                                },
                                {
                                    "name": "deviceType",
                                    "width": "100",
                                    "titleResource": "LolcRegistry_DeviceType_Header"
                                },
                                {
                                    "name": "classification",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_Classification_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "normalPosition",
                                    "width": "135",
                                    "titleResource": "LolcRegistry_NormalPosition_Header"
                                },
                                {
                                    "name": "currentPosition",
                                    "width": "135",
                                    "titleResource": "LolcRegistry_CurrentPosition_Header"
                                },
                                {
                                    "name": "comments",
                                    "width": "190",
                                    "titleResource": "LolcRegistry_Comments_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "activeIsolationCertificates",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_IsolationCertificate_Header"
                                },
                                {
                                    "name": "lastPositionChange",
                                    "width": "135",
                                    "titleResource": "LolcRegistry_LastPositionChange_Header"
                                },
                                {
                                    "name": "section",
                                    "width": "85",
                                    "titleResource": "LolcRegistry_Section_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "lastAuditDateTime",
                                    "width": "135",
                                    "titleResource": "LolcRegistry_LastAuditDateTime_Header"
                                },
                                {
                                    "name": "systemDescription",
                                    "width": "200",
                                    "titleResource": "LolcRegistry_SystemDescription_Header"
                                },
                                {
                                    "name": "purpose",
                                    "width": "150",
                                    "titleResource": "LolcRegistry_Purpose_Header",
                                    "hiddenByDefault": true
                                },
                                {
                                    "name": "inspectionNotes",
                                    "width": "350",
                                    "titleResource": "LolcRegistry_InspectionNotes_Header"
                                }
                            ]
                        }
                    },
                    "printProfiles": [
                        {
                            "name": "LolcOperationalInspection",
                            "onlyForVariant": null
                        },
                        {
                            "name": "LolcOperationalInspectionAndAttachments",
                            "onlyForVariant": null
                        }
                    ],
                    "defaultPrintProfile": "LolcOperationalInspectionAndAttachments"
                }
            ]
        }
    ],
    "siteGraphics": {
        "refreshIntervalInSeconds": 60,
        "hazardousAreasLayerName": "HazardousAreas",
        "dailyPlanningInDays": 1,
        "enableClearAllButton": true,
        "kindsToShow": [
            {
                "kind": "Permit",
                "selectedStates": [
                    "Issued",
                    "Active",
                    "InReview",
                    "Revalidate",
                    "Expired"
                ],
                "blinkingStates": [
                    "Expired",
                    "Revalidate",
                    "InReview"
                ]
            },
            {
                "kind": "Isolation",
                "selectedStates": [
                    "IsolationInPlace",
                    "IsolationInPlaceForSanctionToTest",
                    "IsolationInProgress",
                    "DeisolationInProgress"
                ],
                "blinkingStates": []
            },
            {
                "kind": "OperationalRiskAssessment",
                "selectedStates": [
                    "Active",
                    "Revalidate",
                    "InReview"
                ],
                "blinkingStates": [
                    "Revalidate",
                    "InReview"
                ]
            },
            {
                "kind": "Operation",
                "selectedStates": [
                    "Active",
                    "Revalidate",
                    "InReview"
                ],
                "blinkingStates": [
                    "Revalidate"
                ]
            },
            {
                "kind": "Leak",
                "selectedStates": [
                    "Active",
                    "Revalidate",
                    "InReview"
                ],
                "blinkingStates": [
                    "Revalidate"
                ]
            },
            {
                "kind": "LolcMovement",
                "selectedStates": [],
                "blinkingStates": []
            },
            {
                "kind": "SafetyOverrideRiskAssessment",
                "selectedStates": [
                    "Active",
                    "Revalidate",
                    "Expired"
                ],
                "blinkingStates": [
                    "Revalidate"
                ]
            }
        ]
    },
    "fileAttachmentTypes": [
        {
            "kind": "Isolation",
            "types": [
                "Pid",
                "Other"
            ]
        },
        {
            "kind": "IsolationTemplate",
            "types": [
                "Pid",
                "Other"
            ]
        },
        {
            "kind": "Permit",
            "types": [
                "AbrasiveTaskCertificate",
                "BOLECertificate",
                "CrossSiteBoundaryIsolation",
                "EnergisedElectricalWorkCertificate",
                "ERRP",
                "ExcavationCertificate",
                "HeavyEquipmentMovement",
                "LeakTest",
                "LiftingPlan",
                "MechanicalSealPlug",
                "PressurisedHabitat",
                "PreStartup",
                "RAP",
                "VentilationPlan",
                "WellHandoverCertificate",
                "Other"
            ]
        },
        {
            "kind": "PermitTemplate",
            "types": [
                "AbrasiveTaskCertificate",
                "BOLECertificate",
                "CrossSiteBoundaryIsolation",
                "EnergisedElectricalWorkCertificate",
                "ERRP",
                "ExcavationCertificate",
                "HeavyEquipmentMovement",
                "LeakTest",
                "LiftingPlan",
                "MechanicalSealPlug",
                "PressurisedHabitat",
                "PreStartup",
                "RAP",
                "VentilationPlan",
                "WellHandoverCertificate",
                "Other"
            ]
        },
        {
            "kind": "OperationalRiskAssessment",
            "types": [
                "Other"
            ]
        },
        {
            "kind": "Operation",
            "types": [
                "Rap",
                "Other"
            ]
        },
        {
            "kind": "Leak",
            "types": [
                "Other"
            ]
        },
        {
            "kind": "Action",
            "types": [
                "Other"
            ]
        },
        {
            "kind": "WorkItemAudit",
            "types": [
                "Other"
            ]
        },
        {
            "kind": "SafetyOverrideRiskAssessmentTemplate",
            "types": [
                "Other"
            ]
        },
        {
            "kind": "LolcMovement",
            "types": [
                "Other"
            ]
        },
        {
            "kind": "LolcOperationalInspection",
            "types": [
                "Other"
            ]
        }
    ],
    "fileAttachmentSignatures": [
        "ApproveByAreaAuthority",
        "ApproveLevel1BySiteAuthority",
        "ApproveLevel2ByAreaAuthority",
        "ApproveArea2Permit",
        "ApproveConfinedSpaceEntryPermit",
        "ApproveArea3OrHigherPermit",
        "AuthoriseDraftTemplateBasedPermit",
        "IssueDraftTemplateBasedPermit",
        "PermitReadyForVerification",
        "VerifyPermit",
        "AuthorisePermit",
        "CompleteElectricalLowVoltageIsolationDesign",
        "CompleteElectricalLowVoltageLevel1IsolationDesign",
        "CompleteElectricalHighVoltageIsolationDesign",
        "CompleteProcessIsolationDesign",
        "CompleteControlIsolationDesign",
        "RequestIsolationCertificate",
        "RequestIsolations"
    ],
    "workItemAttachmentSignatures": [
        "RequestLolcMovement",
        "CompleteLolcOperationalInspectionDesign",
        "ApproveLevel2ByAreaAuthority",
        "AuthoriseDraftTemplateBasedPermit",
        "IssueDraftTemplateBasedPermit",
        "PermitReadyForVerification",
        "VerifyPermit",
        "AuthorisePermit",
        "IssuePermit",
        "AcceptPermit",
        "ReAuthorizePermit",
        "RevalidatePermit",
        "CompleteElectricalLowVoltageIsolationDesign",
        "CompleteElectricalLowVoltageLevel1IsolationDesign",
        "CompleteElectricalHighVoltageIsolationDesign",
        "CompleteProcessIsolationDesign",
        "CompleteControlIsolationDesign",
        "RequestIsolationCertificate",
        "RequestIsolations",
        "ConfirmAllIsolationsInPlace",
        "CompleteAmendments",
        "ConfirmControlReisolations",
        "ConfirmAllReisolationsInPlace",
        "RequestIsolationTemplate",
        "RequestModifiedIsolationTemplate",
        "ApproveIsolationTemplate",
        "AuditLti",
        "AuthoriseOperationalRiskAssessment",
        "ReAuthoriseOperationalRiskAssessment",
        "AuthorizeLeak"
    ],
    "isolationTypes": {
        "methods": {
            "closedOpenMethod": "VALVEC/O",
            "openClosedMethod": "VALVEO/C",
            "openOpenMethod": "VALVEO/O",
            "closedClosedMethod": "VALVEC/C"
        },
        "items": [
            {
                "name": "ElectricalLowVoltageLevel1",
                "confirmDeisolationForSanctionToTestSignatureType": "ConfirmElectricalLowVoltageLevel1DeisolationsForSanctionToTest",
                "confirmDeisolationSignatureType": "ConfirmElectricalLowVoltageLevel1Deisolations",
                "confirmIsolationSignatureType": "ConfirmElectricalLowVoltageLevel1Isolations",
                "confirmReisolationSignatureType": "ConfirmElectricalLowVoltageLevel1Reisolations",
                "proposeSchemeSignatureType": "CompleteElectricalLowVoltageLevel1IsolationDesign",
                "hasPressureBuildUp": false,
                "hasFluidRank": false,
                "methods": [
                    "EARTHED",
                    "DISCONNECTED",
                    "FUSEREMOVED",
                    "ISOLATOROPEN",
                    "ISOLATOROO",
                    "ISOLATORCO",
                    "ISOLATORCC",
                    "CIRCUITBREAKERREMOVED",
                    "BUSBARSHUTTERS",
                    "CIRCUITSHUTTERS",
                    "CUBICLEDOOR",
                    "RACKINGMECHANISM",
                    "KNIFESWITCHEDGE",
                    "CABLES",
                    "LOCKBOX",
                    "LABELLED",
                    "SWITCH_ON_OFF",
                    "SWITCH_OFF_ON"
                ],
                "isolateWhenNoPositionChange": true,
                "kinds": [
                    {
                        "type": "Isolation",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    },
                    {
                        "type": "IsolationTemplate",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    }
                ]
            },
            {
                "name": "ElectricalLowVoltage",
                "confirmDeisolationForSanctionToTestSignatureType": "ConfirmElectricalLowVoltageDeisolationsForSanctionToTest",
                "confirmDeisolationSignatureType": "ConfirmElectricalLowVoltageDeisolations",
                "confirmIsolationSignatureType": "ConfirmElectricalLowVoltageIsolations",
                "confirmReisolationSignatureType": "ConfirmElectricalLowVoltageReisolations",
                "proposeSchemeSignatureType": "CompleteElectricalLowVoltageIsolationDesign",
                "hasPressureBuildUp": false,
                "hasFluidRank": false,
                "methods": [
                    "EARTHED",
                    "DISCONNECTED",
                    "FUSEREMOVED",
                    "ISOLATOROPEN",
                    "ISOLATOROO",
                    "ISOLATORCO",
                    "ISOLATORCC",
                    "CIRCUITBREAKERREMOVED",
                    "BUSBARSHUTTERS",
                    "CIRCUITSHUTTERS",
                    "CUBICLEDOOR",
                    "RACKINGMECHANISM",
                    "KNIFESWITCHEDGE",
                    "CABLES",
                    "LOCKBOX",
                    "LABELLED",
                    "SWITCH_ON_OFF",
                    "SWITCH_OFF_ON"
                ],
                "isolateWhenNoPositionChange": true,
                "kinds": [
                    {
                        "type": "Isolation",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    },
                    {
                        "type": "IsolationTemplate",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    }
                ]
            },
            {
                "name": "ElectricalHighVoltage",
                "confirmDeisolationForSanctionToTestSignatureType": "ConfirmElectricalHighVoltageDeisolationsForSanctionToTest",
                "confirmDeisolationSignatureType": "ConfirmElectricalHighVoltageDeisolations",
                "confirmIsolationSignatureType": "ConfirmElectricalHighVoltageIsolations",
                "confirmReisolationSignatureType": "ConfirmElectricalHighVoltageReisolations",
                "proposeSchemeSignatureType": "CompleteElectricalHighVoltageIsolationDesign",
                "hasPressureBuildUp": false,
                "hasFluidRank": false,
                "methods": [
                    "EARTHED",
                    "DISCONNECTED",
                    "FUSEREMOVED",
                    "ISOLATOROPEN",
                    "ISOLATOROO",
                    "ISOLATORCO",
                    "ISOLATORCC",
                    "CIRCUITBREAKERREMOVED",
                    "BUSBARSHUTTERS",
                    "CIRCUITSHUTTERS",
                    "CUBICLEDOOR",
                    "RACKINGMECHANISM",
                    "KNIFESWITCHEDGE",
                    "CABLES",
                    "LOCKBOX",
                    "LABELLED",
                    "SWITCH_ON_OFF",
                    "SWITCH_OFF_ON"
                ],
                "isolateWhenNoPositionChange": true,
                "kinds": [
                    {
                        "type": "Isolation",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    },
                    {
                        "type": "IsolationTemplate",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    }
                ]
            },
            {
                "name": "Control",
                "confirmDeisolationForSanctionToTestSignatureType": "ConfirmControlDeisolationsForSanctionToTest",
                "confirmDeisolationSignatureType": "ConfirmControlDeisolations",
                "confirmIsolationSignatureType": "ConfirmControlIsolations",
                "confirmReisolationSignatureType": "ConfirmControlReisolations",
                "proposeSchemeSignatureType": "CompleteControlIsolationDesign",
                "hasPressureBuildUp": false,
                "hasFluidRank": false,
                "methods": [
                    "DISCONNECTED",
                    "VALVEO/C",
                    "VALVEC/O",
                    "VALVEO/O",
                    "VALVEC/C",
                    "FUSEREMOVED",
                    "ISOLATOROPEN",
                    "ISOLATOROO",
                    "ISOLATORCO",
                    "ISOLATORCC",
                    "KNIFESWITCHEDGE",
                    "LOCKBOX",
                    "LABELLED",
                    "SWITCH_ON_OFF",
                    "SWITCH_OFF_ON",
                    "RECONNECT"
                ],
                "isolateWhenNoPositionChange": true,
                "kinds": [
                    {
                        "type": "Isolation",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    },
                    {
                        "type": "IsolationTemplate",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    }
                ]
            },
            {
                "name": "Process",
                "confirmDeisolationForSanctionToTestSignatureType": "ConfirmProcessDeisolationsForSanctionToTest",
                "confirmDeisolationSignatureType": "ConfirmProcessDeisolations",
                "confirmIsolationSignatureType": "ConfirmProcessIsolations",
                "confirmReisolationSignatureType": "ConfirmProcessReisolations",
                "proposeSchemeSignatureType": "CompleteProcessIsolationDesign",
                "hasPressureBuildUp": true,
                "hasFluidRank": false,
                "methods": [
                    "VALVEO/C",
                    "VALVEC/O",
                    "VALVEO/O",
                    "VALVEC/C",
                    "BLANK",
                    "BLANKC/O",
                    "BLANKC/C",
                    "SPADE",
                    "SPADEC/O",
                    "SPADEO/O",
                    "SPADEC/C",
                    "DISCONNECT",
                    "PROCESSBLEED",
                    "INHIBITOVERRIDE",
                    "LOCKBOX",
                    "LABELLED",
                    "RECONNECT"
                ],
                "isolateWhenNoPositionChange": true,
                "kinds": [
                    {
                        "type": "Isolation",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    },
                    {
                        "type": "IsolationTemplate",
                        "variants": [
                            "DefaultIsolationCertificate"
                        ]
                    }
                ]
            },
            {
                "name": "LolcMovement",
                "confirmDeisolationForSanctionToTestSignatureType": "Dummy",
                "confirmDeisolationSignatureType": "ConfirmLolcMovementDeisolations",
                "confirmIsolationSignatureType": "RequestLolcMovement",
                "confirmReisolationSignatureType": "Dummy",
                "proposeSchemeSignatureType": "TODO",
                "hasPressureBuildUp": false,
                "methods": [
                    "VALVEO/C",
                    "VALVEO/O",
                    "VALVEC/O",
                    "VALVEC/C"
                ],
                "kinds": [
                    {
                        "type": "LolcMovement",
                        "variants": [
                            "DefaultLolcMovement"
                        ]
                    }
                ]
            }
        ],
        "defaultTypes": [
            {
                "kind": "LolcMovement",
                "isolationTypes": [
                    "LolcMovement"
                ]
            }
        ]
    },
    "auditing": [
        {
            "auditVariant": "PermitAudit",
            "kind": "Permit",
            "variants": [],
            "states": [
                "Requesting",
                "Approved",
                "ReadyToVerify",
                "Verified",
                "Authorised",
                "Issued",
                "Active",
                "AwaitingActivation",
                "InReview",
                "Revalidate",
                "Expired",
                "SuspendedForEmergency",
                "SuspendedForReauthorization",
                "SuspendedForRevalidation",
                "SuspendedForSanctionToTest",
                "ReAuthorized",
                "ReIssued",
                "Closing",
                "Closed"
            ],
            "minAmount": 1,
            "maxAmount": 1
        },
        {
            "auditVariant": "IsolationAudit",
            "kind": "Isolation",
            "variants": [],
            "states": [
                "Requesting",
                "DesignComplete",
                "Modification",
                "WaitingForAuthorization",
                "IsolationInProgress",
                "IsolationInPlace",
                "DeisolationInProgress",
                "WaitingForAuthorizationForLongTermIsolation",
                "IsolationInPlaceForLongTerm",
                "Deisolated",
                "RequestedForSanctionToTest",
                "IsolationInPlaceForSanctionToTest",
                "Deisolated",
                "Closed"
            ],
            "minAmount": 1,
            "maxAmount": 1
        },
        {
            "auditVariant": "InhibitsAndOverridesAudit",
            "kind": "SafetyOverrideRiskAssessment",
            "variants": [],
            "states": [
                "Requesting",
                "Approved",
                "Active",
                "AwaitingActivation",
                "Revalidate",
                "Expired",
                "Closed"
            ],
            "minAmount": 0,
            "maxAmount": 1
        },
        {
            "auditVariant": "ProceduresAudit",
            "kind": "Operation",
            "variants": [
                "RiskAssessedProcedure"
            ],
            "states": [
                "Requesting",
                "Authorised",
                "AwaitingActivation",
                "Active",
                "Revalidate",
                "Closed"
            ],
            "minAmount": 0,
            "maxAmount": 1
        },
        {
            "auditVariant": "OperationalRiskAssessmentAudit",
            "kind": "OperationalRiskAssessment",
            "variants": [
                "OperationalRiskAssessment"
            ],
            "states": [
                "Requesting",
                "Approved",
                "AwaitingActivation",
                "Active",
                "Revalidate",
                "InReview",
                "Closed"
            ],
            "minAmount": 1,
            "maxAmount": 1
        },
        {
            "auditVariant": "LiftingAudit",
            "kind": "Permit",
            "variants": [],
            "states": [
                "Requesting",
                "Approved",
                "ReadyToVerify",
                "Verified",
                "Authorised",
                "Issued",
                "Active",
                "AwaitingActivation",
                "InReview",
                "Revalidate",
                "Expired",
                "SuspendedForEmergency",
                "SuspendedForReauthorization",
                "SuspendedForRevalidation",
                "SuspendedForSanctionToTest",
                "ReAuthorized",
                "ReIssued",
                "Closing",
                "Closed"
            ],
            "minAmount": 0,
            "maxAmount": 1
        },
        {
            "auditVariant": "ShiftHandoverAudit",
            "kind": null,
            "variants": [],
            "states": [],
            "minAmount": 0,
            "maxAmount": 0
        },
        {
            "auditVariant": "LockedValvesAudit",
            "kind": null,
            "variants": [],
            "states": [],
            "minAmount": 0,
            "maxAmount": 0
        },
        {
            "auditVariant": "LeaksAudit",
            "kind": "Leak",
            "variants": [],
            "states": [
                "Requesting",
                "AwaitingActivation",
                "Active",
                "Revalidate",
                "Closed"
            ],
            "minAmount": 0,
            "maxAmount": 1
        },
        {
            "auditVariant": "AlarmManagementAudit",
            "kind": null,
            "variants": [],
            "states": [],
            "minAmount": 0,
            "maxAmount": 0
        }
    ],
    "lolcInspection": [
        {
            "deviceType": "Interlocked"
        },
        {
            "deviceType": "Locked"
        },
        {
            "deviceType": "BreakableCarSeal"
        }
    ],
    "miscellaneous": {
        "notificationRoles": [
            "AreaAuthority",
            "SiteAuthority"
        ]
    }
};