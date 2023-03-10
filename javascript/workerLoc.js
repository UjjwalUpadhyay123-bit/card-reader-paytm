!(function () {
    "use strict";
    function e(
        e,
        t,
        s,
        n
    ) {
        return new (s || (s = Promise))(function (r, i) {
            function o(e) {
                try {
                    c(n.next(e));
                } catch (e) {
                    i(e);
                }
            }
            function a(e) {
                try {
                    c(n.throw(e));
                } catch (e) {
                    i(e);
                }
            }
            function c(e) {
                var t;
                e.done
                    ? r(e.value)
                    : ((t = e.value),
                      t instanceof s
                          ? t
                          : new s(function (e) {
                                e(t);
                            })).then(o, a);
            }
            c((n = n.apply(e, t || [])).next());
        });
    }
    let t = 0;
    class s {
        constructor(e) {
            (this.action = e),
                (this.messageID = (function () {
                    const e = t;
                    return (t += 1), e;
                })());
        }
    }
    class n extends s {
        constructor(e, t) {
            super(n.action),
                (this.wasmModuleName = e.wasmModuleName),
                (this.licenseKey = e.licenseKey),
                (this.userId = t),
                (this.registerLoadCallback = null !== e.loadProgressCallback),
                (this.allowHelloMessage = e.allowHelloMessage),
                (this.engineLocation = e.engineLocation),
                (this.wasmType = e.wasmType),
                (this.numberOfWorkers = e.numberOfWorkers);
        }
    }
    var r, i;
    (n.action = "init"),
        (function (e) {
            (e[(e.Any = 0)] = "Any"), (e[(e.Recognizer = 1)] = "Recognizer"), (e[(e.RecognizerSettings = 2)] = "RecognizerSettings"), (e[(e.Callback = 3)] = "Callback");
        })(r || (r = {}));
    class o extends s {
        constructor(e, t) {
            super(o.action), (this.funcName = e), (this.params = t);
        }
    }
    o.action = "invokeFunction";
    class a extends s {
        constructor(e, t) {
            super(a.action), (this.className = e), (this.params = t);
        }
    }
    a.action = "createNewNativeObject";
    class c extends s {
        constructor(e, t, s) {
            super(c.action), (this.recognizerHandles = e), (this.allowMultipleResults = t), (this.registeredMetadataCallbacks = s);
        }
    }
    c.action = "createRecognizerRunner";
    class E extends s {
        constructor(e, t) {
            super(E.action), (this.recognizerHandles = e), (this.allowMultipleResults = t);
        }
    }
    E.action = "reconfigureRecognizerRunner";
    class R extends s {
        constructor() {
            super(R.action);
        }
    }
    R.action = "deleteRecognizerRunner";
    class l extends s {
        constructor(e, t, s) {
            super(l.action), (this.objectHandle = e), (this.methodName = t), (this.params = s);
        }
    }
    l.action = "invokeObject";
    class _ extends s {
        constructor(e) {
            super(_.action), (this.frame = e);
        }
        getTransferrables() {
            return [this.frame.imageData.data.buffer];
        }
    }
    _.action = "processImage";
    class I extends s {
        constructor(e) {
            super(I.action), (this.hardReset = e);
        }
    }
    I.action = "resetRecognizers";
    class u extends s {
        constructor(e) {
            super(u.action), (this.registeredMetadataCallbacks = e);
        }
    }
    u.action = "registerMetadataCallbacks";
    class d extends s {
        constructor(e) {
            super(d.action), (this.detectionOnlyMode = e);
        }
    }
    d.action = "setDetectionOnly";
    class N extends s {
        constructor(e) {
            super(N.action), (this.callbackNonEmpty = e);
        }
    }
    N.action = "setClearTimeoutCallback";
    class O extends s {
        constructor(e) {
            super(O.action), (this.cameraPreviewMirrored = e);
        }
    }
    O.action = "setCameraPreviewMirrored";
    class h extends s {
        constructor(e) {
            super(h.action), (this.userId = e);
        }
    }
    h.action = "getProductIntegrationInfo";
    class S {
        constructor(e, t, s) {
            (this.success = !0), (this.error = null), (this.messageID = e), (this.success = t), (this.error = s);
        }
    }
    class g {
        constructor(e, t, s, n) {
            (this.success = !0), (this.showOverlay = !0), (this.messageID = e), (this.success = t), (this.showOverlay = s), (this.wasmType = n);
        }
    }
    class C extends S {
        constructor(e, t) {
            super(e, !0, null), (this.result = t);
        }
    }
    class m extends S {
        constructor(e, t) {
            super(e, !0, null), (this.objectHandle = t);
        }
    }
    class A extends S {
        constructor(e, t) {
            super(e, !0, null), (this.recognitionState = t);
        }
    }
    class D extends S {
        constructor(e, t) {
            super(e, !0, null), (this.result = t);
        }
    }
    class f {
        constructor(e) {
            (this.isLoadProgressMessage = !0), (this.progress = e);
        }
    }
    !(function (e) {
        (e[(e.onDebugText = 0)] = "onDebugText"),
            (e[(e.onDetectionFailed = 1)] = "onDetectionFailed"),
            (e[(e.onQuadDetection = 2)] = "onQuadDetection"),
            (e[(e.onPointsDetection = 3)] = "onPointsDetection"),
            (e[(e.onFirstSideResult = 4)] = "onFirstSideResult"),
            (e[(e.clearTimeoutCallback = 5)] = "clearTimeoutCallback"),
            (e[(e.onGlare = 6)] = "onGlare"),
            (e[(e.recognizerCallback = 7)] = "recognizerCallback");
    })(i || (i = {}));
    class L {
        constructor(e, t) {
            (this.isCallbackMessage = !0), (this.callbackType = e), (this.callbackParameters = t);
        }
    }
    function T(e, t) {
        return (t = t || ""), "" === (e = e || "") ? t : e.endsWith("/") ? (t.startsWith("/") ? e + t.substring(1) : e + t) : t.startsWith("/") ? e + t : e + "/" + t;
    }
    var M, p, w;
    function y(t) {
        return e(this, void 0, void 0, function* () {
            const e = yield (async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])))(),
                s = yield (async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11])))(),
                n = yield (async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11])))(),
                r = yield (async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11])))(),
                i = yield (async (e) => {
                    try {
                        return "undefined" != typeof MessageChannel && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e);
                    } catch (e) {
                        return !1;
                    }
                })(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 4, 1, 3, 1, 1, 10, 11, 1, 9, 0, 65, 0, 254, 16, 2, 0, 26, 11]));
            if (!(e && s && n && r)) return M.Basic;
            if (!i) return M.Advanced;
            try {
                const e = new Worker(t + "/WorkerTest.js");
                return new Promise((t) => {
                    e.postMessage(1),
                        (e.onmessage = () => {
                            t(M.AdvancedWithThreads), e.terminate();
                        }),
                        setTimeout(() => {
                            t(M.Advanced), e.terminate();
                        }, 1e3);
                });
            } catch (e) {
                return M.Advanced;
            }
        });
    }
    !(function (e) {
        (e.Basic = "BASIC"), (e.Advanced = "ADVANCED"), (e.AdvancedWithThreads = "ADVANCED_WITH_THREADS");
    })(M || (M = {}));
    class U {
        constructor(e, t) {
            if (!e.code || !e.message) throw Error("Instance of SDKError is required to have code and message.");
            (this.message = e.message), (this.code = e.code), (this.details = t);
        }
    }
    !(function (e) {
        (e.WORKER_WASM_LOAD_FAILURE = "WORKER_WASM_LOAD_FAILURE"),
            (e.WORKER_WASM_INIT_MISSING = "WORKER_WASM_INIT_MISSING"),
            (e.WORKER_FUNCTION_INVOKE_FAILURE = "WORKER_FUNCTION_INVOKE_FAILURE"),
            (e.WORKER_RECOGNIZER_CREATION_FAILURE = "WORKER_RECOGNIZER_CREATION_FAILURE"),
            (e.WORKER_RUNNER_EXISTS = "WORKER_RUNNER_EXISTS"),
            (e.WORKER_RUNNER_CREATION_FAILURE = "WORKER_RUNNER_CREATION_FAILURE"),
            (e.WORKER_RUNNER_MISSING = "WORKER_RUNNER_MISSING"),
            (e.WORKER_RUNNER_RECONFIGURE_FAILURE = "WORKER_RUNNER_RECONFIGURE_FAILURE"),
            (e.WORKER_RUNNER_DELETED = "WORKER_RUNNER_DELETED"),
            (e.WORKER_RUNNER_DELETE_FAILURE = "WORKER_RUNNER_DELETE_FAILURE"),
            (e.WORKER_OBJECT_INVOKE_FAILURE = "WORKER_OBJECT_INVOKE_FAILURE"),
            (e.WORKER_IMAGE_PROCESS_FAILURE = "WORKER_IMAGE_PROCESS_FAILURE"),
            (e.WORKER_HANDLE_UNDEFINED = "WORKER_HANDLE_UNDEFINED"),
            (e.WORKER_MESSAGE_ACTION_UNKNOWN = "WORKER_MESSAGE_ACTION_UNKNOWN"),
            (e.WORKER_LICENSE_UNLOCK_ERROR = "WORKER_LICENSE_UNLOCK_ERROR"),
            (e.WORKER_INTEGRATION_INFO_FAILURE = "WORKER_INTEGRATION_INFO_FAILURE"),
            (e.LOCAL_SDK_RUNNER_MISSING = "LOCAL_SDK_RUNNER_MISSING"),
            (e.LOCAL_SDK_RUNNER_EMPTY = "LOCAL_SDK_RUNNER_EMPTY"),
            (e.LICENSE_UNLOCK_ERROR = "LICENSE_UNLOCK_ERROR"),
            (e.FRAME_CAPTURE_SVG_UNSUPPORTED = "FRAME_CAPTURE_SVG_UNSUPPORTED"),
            (e.FRAME_CAPTURE_CANVAS_MISSING = "FRAME_CAPTURE_CANVAS_MISSING"),
            (e.SDK_WASM_SETTINGS_MISSING = "SDK_WASM_SETTINGS_MISSING"),
            (e.SDK_LICENSE_KEY_MISSING = "SDK_LICENSE_KEY_MISSING"),
            (e.SDK_WASM_MODULE_NAME_MISSING = "SDK_WASM_MODULE_NAME_MISSING"),
            (e.SDK_ENGINE_LOCATION_INVALID = "SDK_ENGINE_LOCATION_INVALID"),
            (e.SDK_WORKER_LOCATION_INVALID = "SDK_WORKER_LOCATION_INVALID"),
            (e.SDK_MISSING = "SDK_MISSING"),
            (e.SDK_RECOGNIZERS_MISSING = "SDK_RECOGNIZERS_MISSING"),
            (e.VIDEO_RECOGNIZER_ELEMENT_MISSING = "VIDEO_RECOGNIZER_ELEMENT_MISSING"),
            (e.VIDEO_RECOGNIZER_CAMERA_MISSING = "VIDEO_RECOGNIZER_CAMERA_MISSING"),
            (e.VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED = "VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED"),
            (e.VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE = "VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE"),
            (e.VIDEO_RECOGNIZER_CAMERA_IN_USE = "VIDEO_RECOGNIZER_CAMERA_IN_USE"),
            (e.VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED = "VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED"),
            (e.VIDEO_RECOGNIZER_FEED_RELEASED = "VIDEO_RECOGNIZER_FEED_RELEASED"),
            (e.VIDEO_RECOGNIZER_FEED_NOT_PAUSED = "VIDEO_RECOGNIZER_FEED_NOT_PAUSED"),
            (e.VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED = "VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED"),
            (e.VIDEO_RECOGNIZER_FEED_PAUSED = "VIDEO_RECOGNIZER_FEED_PAUSED"),
            (e.VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE = "VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE"),
            (e.VIDEO_RECOGNIZER_FEED_MISSING = "VIDEO_RECOGNIZER_FEED_MISSING");
    })(p || (p = {})),
        (function (e) {
            (e.WORKER_HANDLE_UNDEFINED = "Cannot find object with handle: undefined"),
                (e.WORKER_WASM_LOAD_FAILURE = "Failed to load WASM in web worker!"),
                (e.WORKER_WASM_INIT_MISSING = "WASM module is not initialized!"),
                (e.WORKER_FUNCTION_INVOKE_FAILURE = "Failed to invoke function!"),
                (e.WORKER_RECOGNIZER_CREATION_FAILURE = "Failed to create new recognizer!"),
                (e.WORKER_RUNNER_EXISTS = "Recognizer runner is already created! Multiple instances are not allowed!"),
                (e.WORKER_RUNNER_CREATION_FAILURE = "Failed to create new recognizer runner!"),
                (e.WORKER_RUNNER_MISSING = "Recognizer runner is not created! There is nothing to reconfigure!"),
                (e.WORKER_RUNNER_RECONFIGURE_FAILURE = "Failed to reconfigure recognizer runner!"),
                (e.WORKER_RUNNER_DELETED = "Recognizer runner is already deleted!"),
                (e.WORKER_RUNNER_DELETE_FAILURE = "Failed to delete recognizer runner!"),
                (e.WORKER_OBJECT_INVOKE_FAILURE = "Failed to invoke object!"),
                (e.WORKER_IMAGE_PROCESS_FAILURE = "Recognizer runner is not initialized! Cannot process image!"),
                (e.WORKER_INTEGRATION_INFO_FAILURE = "Failed to get product integration info!"),
                (e.LOCAL_SDK_RUNNER_MISSING = "Property nativeRecognizerRunner is not available!"),
                (e.LOCAL_SDK_RUNNER_EMPTY = "Native RecognizerRunner cannot be empty!"),
                (e.LICENSE_TOKEN_STATE_INCORRECT = "Internal error (Incorrect token state)"),
                (e.LICENSE_PAYLOAD_VERIFICATION_FAILED = "Failed to verify server permission's digital signature!"),
                (e.LICENSE_PAYLOAD_CORRUPTED = "Server permission payload is corrupted!"),
                (e.LICENSE_PERMISSION_EXPIRED = "Internal error (server permission expired)"),
                (e.LICENSE_REMOTE_LOCKED = "Provided license key has been remotely locked. Please contact support for more information!"),
                (e.FRAME_CAPTURE_SVG_UNSUPPORTED = "Recognition of SVG elements not supported!"),
                (e.FRAME_CAPTURE_CANVAS_MISSING = "Could not get canvas 2d context!"),
                (e.SDK_WASM_SETTINGS_MISSING = "Missing WASM load settings!"),
                (e.SDK_LICENSE_KEY_MISSING = "Missing license key!"),
                (e.SDK_WASM_MODULE_NAME_MISSING = "Missing WASM module name!"),
                (e.SDK_ENGINE_LOCATION_INVALID = "Setting property 'engineLocation' must be a string!"),
                (e.SDK_WORKER_LOCATION_INVALID = "Setting property 'workerLocation' must be a string!"),
                (e.SDK_MISSING = "SDK is not provided!"),
                (e.SDK_RECOGNIZERS_MISSING = "To create RecognizerRunner at least 1 recognizer is required."),
                (e.VIDEO_RECOGNIZER_ELEMENT_MISSING = "Video element, i.e. camera feed is not provided!"),
                (e.VIDEO_RECOGNIZER_CAMERA_MISSING = "Camera not found!"),
                (e.VIDEO_RECOGNIZER_CAMERA_NOT_ALLOWED = "Camera not allowed!"),
                (e.VIDEO_RECOGNIZER_CAMERA_UNAVAILABLE = "Camera not available!"),
                (e.VIDEO_RECOGNIZER_CAMERA_IN_USE = "Camera in use!"),
                (e.VIDEO_RECOGNIZER_MEDIA_DEVICES_UNSUPPORTED = "Media devices not supported by browser."),
                (e.VIDEO_RECOGNIZER_FEED_RELEASED = "The associated video feed has been released!"),
                (e.VIDEO_RECOGNIZER_FEED_NOT_PAUSED = "The associated video feed is not paused. Use resumeRecognition instead!"),
                (e.VIDEO_RECOGNIZER_PLAY_REQUEST_INTERRUPTED = "The play() request was interrupted or prevented by browser security rules!"),
                (e.VIDEO_RECOGNIZER_FEED_PAUSED = "Cannot resume recognition while video feed is paused! Use recognize or startRecognition"),
                (e.VIDEO_RECOGNIZER_RECOGNIZERS_RESET_FAILURE = "Could not reset recognizers!"),
                (e.VIDEO_RECOGNIZER_FEED_MISSING = "Missing video feed!");
        })(w || (w = {}));
    const F = {
            licenseTokenStateIncorrect: { code: p.LICENSE_UNLOCK_ERROR, message: w.LICENSE_TOKEN_STATE_INCORRECT },
            licensePayloadVerificationFailed: { code: p.LICENSE_UNLOCK_ERROR, message: w.LICENSE_PAYLOAD_VERIFICATION_FAILED },
            licensePayloadCorrupted: { code: p.LICENSE_UNLOCK_ERROR, message: w.LICENSE_PAYLOAD_CORRUPTED },
            licensePermissionExpired: { code: p.LICENSE_UNLOCK_ERROR, message: w.LICENSE_PERMISSION_EXPIRED },
            licenseRemoteLocked: { code: p.LICENSE_UNLOCK_ERROR, message: w.LICENSE_REMOTE_LOCKED },
            licenseNetworkError: { code: p.LICENSE_UNLOCK_ERROR },
            licenseInvalid: { code: p.LICENSE_UNLOCK_ERROR },
        },
        b = {
            imageProcessFailure: { message: w.WORKER_IMAGE_PROCESS_FAILURE, code: p.WORKER_IMAGE_PROCESS_FAILURE },
            objectInvokeFailure: { message: w.WORKER_OBJECT_INVOKE_FAILURE, code: p.WORKER_OBJECT_INVOKE_FAILURE },
            runnerDeleteFailure: { message: w.WORKER_RUNNER_DELETE_FAILURE, code: p.WORKER_RUNNER_DELETE_FAILURE },
            runnerDeleted: { message: w.WORKER_RUNNER_DELETED, code: p.WORKER_RUNNER_DELETED },
            runnerReconfigureFailure: { message: w.WORKER_RUNNER_RECONFIGURE_FAILURE, code: p.WORKER_RUNNER_RECONFIGURE_FAILURE },
            runnerMissing: { message: w.WORKER_RUNNER_MISSING, code: p.WORKER_RUNNER_MISSING },
            runnerCreationFailure: { message: w.WORKER_RUNNER_CREATION_FAILURE, code: p.WORKER_RUNNER_CREATION_FAILURE },
            runnerExists: { message: w.WORKER_RUNNER_EXISTS, code: p.WORKER_RUNNER_EXISTS },
            recognizerCreationFailure: { message: w.WORKER_RECOGNIZER_CREATION_FAILURE, code: p.WORKER_RECOGNIZER_CREATION_FAILURE },
            functionInvokeFailure: { message: w.WORKER_FUNCTION_INVOKE_FAILURE, code: p.WORKER_FUNCTION_INVOKE_FAILURE },
            wasmInitMissing: { message: w.WORKER_WASM_INIT_MISSING, code: p.WORKER_WASM_INIT_MISSING },
            wasmLoadFailure: { message: w.WORKER_WASM_LOAD_FAILURE, code: p.WORKER_WASM_LOAD_FAILURE },
            handleUndefined: { message: w.WORKER_HANDLE_UNDEFINED, code: p.WORKER_HANDLE_UNDEFINED },
            integrationInfoFailure: { message: w.WORKER_INTEGRATION_INFO_FAILURE, code: p.WORKER_INTEGRATION_INFO_FAILURE },
        };
    var k, K;
    !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"), (e[(e.RequiresServerPermission = 1)] = "RequiresServerPermission"), (e[(e.Valid = 2)] = "Valid");
    })(k || (k = {})),
        (function (e) {
            (e.LicenseTokenStateInvalid = "LICENSE_TOKEN_STATE_INVALID"),
                (e.NetworkError = "NETWORK_ERROR"),
                (e.RemoteLock = "REMOTE_LOCK"),
                (e.PermissionExpired = "PERMISSION_EXPIRED"),
                (e.PayloadCorrupted = "PAYLOAD_CORRUPTED"),
                (e.PayloadSignatureVerificationFailed = "PAYLOAD_SIGNATURE_VERIFICATION_FAILED"),
                (e.IncorrectTokenState = "INCORRECT_TOKEN_STATE");
        })(K || (K = {}));
    function v(e) {
        return { licenseId: e.licenseId, licensee: e.licensee, packageName: e.packageName, platform: "Browser", sdkName: e.sdkName, sdkVersion: e.sdkVersion };
    }
    var P;
    function W(t, s) {
        return e(this, void 0, void 0, function* () {
            try {
                const e = yield fetch("https://baltazar.microblink.com/api/v1/status/check", { method: "POST", headers: { "Content-Type": "application/json" }, cache: "no-cache", body: JSON.stringify(v(t)) });
                if (e.ok) {
                    const t = "" + (yield e.text());
                    return s.submitServerPermission(t);
                }
                return { status: P.NetworkError, lease: 0, networkErrorDescription: "Server responded with status " + e.status };
            } catch (e) {
                return { status: P.NetworkError, lease: 0, networkErrorDescription: "Unexpected error: " + JSON.stringify(e) };
            }
        });
    }
    function G(e) {
        return e === M.AdvancedWithThreads;
    }
    !(function (e) {
        (e[(e.Ok = 0)] = "Ok"),
            (e[(e.NetworkError = 1)] = "NetworkError"),
            (e[(e.RemoteLock = 2)] = "RemoteLock"),
            (e[(e.PermissionExpired = 3)] = "PermissionExpired"),
            (e[(e.PayloadCorrupted = 4)] = "PayloadCorrupted"),
            (e[(e.PayloadSignatureVerificationFailed = 5)] = "PayloadSignatureVerificationFailed"),
            (e[(e.IncorrectTokenState = 6)] = "IncorrectTokenState");
    })(P || (P = {}));
    new (class {
        constructor() {
            (this.context = self),
                (this.wasmModule = null),
                (this.nativeRecognizerRunner = null),
                (this.objects = {}),
                (this.nextObjectHandle = 0),
                (this.metadataCallbacks = {}),
                (this.clearTimeoutCallback = null),
                (this.context.onmessage = (e) => {
                    const t = e.data;
                    switch (t.action) {
                        case n.action:
                            this.processInitMessage(t);
                            break;
                        case o.action:
                            this.processInvokeFunction(t);
                            break;
                        case a.action:
                            this.processCreateNewRecognizer(t);
                            break;
                        case l.action:
                            this.processInvokeObject(t);
                            break;
                        case c.action:
                            this.processCreateRecognizerRunner(t);
                            break;
                        case E.action:
                            this.processReconfigureRecognizerRunner(t);
                            break;
                        case R.action:
                            this.processDeleteRecognizerRunner(t);
                            break;
                        case _.action:
                            this.processImage(t);
                            break;
                        case I.action:
                            this.resetRecognizers(t);
                            break;
                        case d.action:
                            this.setDetectionOnly(t);
                            break;
                        case O.action:
                            this.setCameraPreviewMirrored(t);
                            break;
                        case u.action:
                            this.registerMetadataCallbacks(t);
                            break;
                        case N.action:
                            this.registerClearTimeoutCallback(t);
                            break;
                        case h.action:
                            this.processGetProductIntegrationInfo(t);
                            break;
                        default:
                            throw new U({ code: p.WORKER_MESSAGE_ACTION_UNKNOWN, message: "Unknown message action: " + JSON.stringify(t.action) });
                    }
                });
        }
        getNextObjectHandle() {
            const e = this.nextObjectHandle;
            return (this.nextObjectHandle = this.nextObjectHandle + 1), e;
        }
        notifyError(e, t) {
            this.context.postMessage(new S(e.messageID, !1, t));
        }
        notifySuccess(e) {
            this.context.postMessage(new S(e.messageID, !0, null));
        }
        notifyInitSuccess(e, t, s) {
            this.context.postMessage(new g(e.messageID, !0, t, s));
        }
        unwrapParameters(e) {
            const t = [];
            for (const s of e.params) {
                let n = s.parameter;
                s.type === r.Recognizer ? ((n = this.objects[n]), void 0 === n && this.notifyError(e, new U(b.handleUndefined))) : s.type === r.RecognizerSettings && (n = this.restoreFunctions(n)), t.push(n);
            }
            return t;
        }
        restoreFunctions(e) {
            const t = Object.keys(e);
            for (const s of t) {
                const t = e[s];
                "object" == typeof t &&
                    null !== t &&
                    "parameter" in t &&
                    "type" in t &&
                    t.type === r.Callback &&
                    (e[s] = (...e) => {
                        const s = new L(i.recognizerCallback, [t.parameter].concat(e));
                        this.context.postMessage(s);
                    });
            }
            return e;
        }
        scanForTransferrables(e) {
            if ("object" == typeof e) {
                const t = Object.keys(e),
                    s = [];
                for (const n of t) {
                    const t = e[n];
                    t instanceof ImageData ? s.push(t.data.buffer) : t instanceof Uint8Array ? s.push(t.buffer) : null !== t && "object" == typeof t && s.push(...this.scanForTransferrables(t));
                }
                return s;
            }
            return [];
        }
        registerHeartBeat(e) {
            this.unregisterHeartBeat(), (this.lease = e);
            let t = e - Math.floor(Date.now() / 1e3);
            t > 120 ? (t -= 120) : (t /= 2),
                (this.inFlightHeartBeatTimeoutId = setTimeout(() => {
                    this.obtainNewServerPermission(!0);
                }, 1e3 * t)),
                console.log("Registered heartbeat in", t, "seconds");
        }
        unregisterHeartBeat() {
            this.lease && delete this.lease, this.inFlightHeartBeatTimeoutId && (clearTimeout(this.inFlightHeartBeatTimeoutId), delete this.inFlightHeartBeatTimeoutId);
        }
        obtainNewServerPermission(t) {
            return e(this, void 0, void 0, function* () {
                if (this.wasmModule) {
                    const e = this.wasmModule.getActiveLicenseTokenInfo(),
                        s = yield W(e, this.wasmModule);
                    switch (s.status) {
                        case P.Ok:
                        case P.RemoteLock:
                            this.registerHeartBeat(s.lease);
                            break;
                        case P.NetworkError:
                        case P.PayloadSignatureVerificationFailed:
                        case P.PayloadCorrupted:
                            t
                                ? (console.warn("Problem with obtaining server permission. Will attempt in 10 seconds " + P[s.status]),
                                  (this.inFlightHeartBeatTimeoutId = setTimeout(() => {
                                      this.obtainNewServerPermission(!1);
                                  }, 1e4)))
                                : console.error("Problem with obtaining server permission. " + P[s.status]);
                            break;
                        case P.IncorrectTokenState:
                        case P.PermissionExpired:
                            console.error("Internal error: " + P[s.status]);
                    }
                    return s.status;
                }
                return console.error("Internal inconsistency! Wasm module not initialized where it's expected to be!"), P.IncorrectTokenState;
            });
        }
        willSoonExpire() {
            if (this.lease) {
                if (this.wasmModule.getActiveLicenseTokenInfo().unlockResult === k.Valid) {
                    const e = Math.floor(Date.now() / 1e3);
                    return 30 > this.lease - e;
                }
                return !0;
            }
            return !1;
        }
        calculateWasmType(t) {
            return e(this, void 0, void 0, function* () {
                return null !== t.wasmType ? t.wasmType : yield y(t.engineLocation);
            });
        }
        calculateEngineLocationPrefix(e, t) {
            const s = T(
                "" === e.engineLocation ? self.location.origin : e.engineLocation,
                (function (e) {
                    switch (e) {
                        case M.AdvancedWithThreads:
                            return "advanced-threads";
                        case M.Advanced:
                            return "advanced";
                        case M.Basic:
                            return "basic";
                    }
                })(t)
            );
            return e.allowHelloMessage && console.log("Engine location prefix is:", s), s;
        }
        processInitMessage(t) {
            return e(this, void 0, void 0, function* () {
                const s = yield this.calculateWasmType(t),
                    n = this.calculateEngineLocationPrefix(t, s);
                let r = { locateFile: (e) => T(n, e) };
                t.registerLoadCallback &&
                    (r = Object.assign(r, {
                        setStatus: (e) => {
                            const t = new f(
                                (function (e) {
                                    if ("Running..." === e) return 100;
                                    if (0 === e.length) return 0;
                                    const t = /([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/.exec(e);
                                    if (t) return (100 * parseInt(t[2])) / parseInt(t[4]);
                                    return NaN;
                                })(e)
                            );
                            this.context.postMessage(t);
                        },
                    }));
                try {
                    const i = T(n, t.wasmModuleName + ".js");
                    G(s) &&
                        (r = (function (e, t, s) {
                            return t && t > 0 && (e = Object.assign(e, { allowedThreads: t })), null !== s && (e = Object.assign(e, { mainScriptUrlOrBlob: s })), e;
                        })(r, t.numberOfWorkers, i)),
                        importScripts(i);
                    (0, self[t.wasmModuleName])(r).then(
                        (n) =>
                            e(this, void 0, void 0, function* () {
                                G(s) &&
                                    (t.allowHelloMessage && console.log("Waiting for thread workers to boot..."),
                                    yield (function (t) {
                                        return e(this, void 0, void 0, function* () {
                                            t.threadWorkersReadyPromise && (yield t.threadWorkersReadyPromise);
                                        });
                                    })(n));
                                const r = yield (function (t, s, n, r) {
                                    return e(this, void 0, void 0, function* () {
                                        const e = r.initializeWithLicenseKey(t, n, s);
                                        switch (e.unlockResult) {
                                            case k.Invalid:
                                                return { error: new U(Object.assign(Object.assign({}, F.licenseInvalid), { message: e.licenseError }), { type: K.LicenseTokenStateInvalid }) };
                                            case k.Valid:
                                                return { error: null, showOverlay: ((i = e.isTrial), (o = e.allowRemoveDemoOverlay), (a = e.allowRemoveProductionOverlay), !((i && o) || (!i && a))) };
                                            case k.RequiresServerPermission: {
                                                const t = yield W(e, r);
                                                switch (t.status) {
                                                    case P.Ok:
                                                        return { error: null, lease: t.lease };
                                                    case P.NetworkError: {
                                                        let e = "";
                                                        return (
                                                            t.networkErrorDescription && (e = " " + t.networkErrorDescription),
                                                            {
                                                                error: new U(Object.assign(Object.assign({}, F.licenseNetworkError), { message: "There has been a network error while obtaining the server permission!" + e }), {
                                                                    type: K.NetworkError,
                                                                }),
                                                            }
                                                        );
                                                    }
                                                    case P.RemoteLock:
                                                        return { error: new U(F.licenseRemoteLocked, { type: K.RemoteLock }), lease: t.lease };
                                                    case P.PermissionExpired:
                                                        return { error: new U(F.licensePermissionExpired, { type: K.PermissionExpired }), lease: t.lease };
                                                    case P.PayloadCorrupted:
                                                        return { error: new U(F.licensePayloadCorrupted, { type: K.PayloadCorrupted }), lease: t.lease };
                                                    case P.PayloadSignatureVerificationFailed:
                                                        return { error: new U(F.licensePayloadVerificationFailed, { type: K.PayloadSignatureVerificationFailed }), lease: t.lease };
                                                    case P.IncorrectTokenState:
                                                        return { error: new U(F.licenseTokenStateIncorrect, { type: K.IncorrectTokenState }), lease: t.lease };
                                                }
                                            }
                                        }
                                        var i, o, a;
                                    });
                                })(t.licenseKey, t.allowHelloMessage, t.userId, n);
                                null === r.error ? ((this.wasmModule = n), r.lease ? this.registerHeartBeat(r.lease) : this.unregisterHeartBeat(), this.notifyInitSuccess(t, !!r.showOverlay, s)) : this.notifyError(t, r.error);
                            }),
                        (e) => {
                            this.notifyError(t, new U(b.wasmLoadFailure, e));
                        }
                    );
                } catch (e) {
                    this.notifyError(t, new U(b.wasmLoadFailure, e));
                }
            });
        }
        processInvokeFunction(e) {
            if (null === this.wasmModule) return void this.notifyError(e, new U(b.wasmInitMissing));
            const t = e.funcName,
                s = this.unwrapParameters(e);
            try {
                const n = this.wasmModule[t](...s);
                this.context.postMessage(new C(e.messageID, n));
            } catch (t) {
                this.notifyError(e, new U(b.functionInvokeFailure, t));
            }
        }
        processCreateNewRecognizer(e) {
            if (null === this.wasmModule) return void this.notifyError(e, new U(b.wasmInitMissing));
            const t = e.className,
                s = this.unwrapParameters(e);
            try {
                const n = new this.wasmModule[t](...s),
                    r = this.getNextObjectHandle();
                (this.objects[r] = n), this.context.postMessage(new m(e.messageID, r));
            } catch (t) {
                this.notifyError(e, new U(b.recognizerCreationFailure, t));
            }
        }
        getRecognizers(e) {
            const t = [];
            for (const s of e) {
                t.push(this.objects[s]);
            }
            return t;
        }
        processCreateRecognizerRunner(t) {
            return e(this, void 0, void 0, function* () {
                if (null === this.wasmModule) this.notifyError(t, new U(b.wasmInitMissing));
                else if (null !== this.nativeRecognizerRunner) this.notifyError(t, new U(b.runnerExists));
                else {
                    this.setupMetadataCallbacks(t.registeredMetadataCallbacks);
                    try {
                        if (this.willSoonExpire()) {
                            const e = yield this.obtainNewServerPermission(!1);
                            if (e !== P.Ok) {
                                const s = P[e];
                                return void this.notifyError(
                                    t,
                                    new U({ code: p.WORKER_LICENSE_UNLOCK_ERROR, message: "Cannot initialize recognizers because of invalid server permission: \n                                    " + s }, { type: K[s] })
                                );
                            }
                        }
                        const e = this.getRecognizers(t.recognizerHandles);
                        (this.nativeRecognizerRunner = new this.wasmModule.RecognizerRunner(e, t.allowMultipleResults, this.metadataCallbacks)), this.notifySuccess(t);
                    } catch (e) {
                        this.notifyError(t, new U(b.runnerCreationFailure, e));
                    }
                }
            });
        }
        processReconfigureRecognizerRunner(e) {
            if (null === this.wasmModule) this.notifyError(e, new U(b.wasmInitMissing));
            else if (null === this.nativeRecognizerRunner) this.notifyError(e, new U(b.runnerMissing));
            else
                try {
                    const t = this.getRecognizers(e.recognizerHandles);
                    this.nativeRecognizerRunner.reconfigureRecognizers(t, e.allowMultipleResults), this.notifySuccess(e);
                } catch (t) {
                    this.notifyError(e, new U(b.runnerReconfigureFailure, t));
                }
        }
        processDeleteRecognizerRunner(e) {
            if (null !== this.nativeRecognizerRunner)
                try {
                    this.nativeRecognizerRunner.delete(), (this.nativeRecognizerRunner = null), this.notifySuccess(e);
                } catch (t) {
                    this.notifyError(e, new U(b.runnerDeleteFailure, t));
                }
            else this.notifyError(e, new U(b.runnerDeleted));
        }
        wrapFunctions(e, t) {
            if ("object" != typeof e) return e;
            const s = Object.assign({}, e),
                n = Object.keys(s);
            for (const e of n) {
                if ("function" == typeof s[e]) {
                    s[e] = { parameter: { recognizerHandle: t, callbackName: e }, type: r.Callback };
                }
            }
            return s;
        }
        processInvokeObject(e) {
            try {
                const t = e.objectHandle,
                    s = e.methodName,
                    n = this.unwrapParameters(e),
                    r = this.objects[t];
                if (void 0 === r) this.notifyError(e, new U({ message: "Cannot find object with handle: " + t, code: p.WORKER_HANDLE_UNDEFINED }));
                else {
                    const i = this.wrapFunctions(r[s](...n), t),
                        o = this.scanForTransferrables(i);
                    "delete" === s && delete this.objects[t], this.context.postMessage(new C(e.messageID, i), o);
                }
            } catch (t) {
                this.notifyError(e, new U(b.objectInvokeFailure, t));
            }
        }
        processImage(e) {
            if (null !== this.nativeRecognizerRunner)
                try {
                    const t = this.nativeRecognizerRunner.processImage(e.frame);
                    this.context.postMessage(new A(e.messageID, t));
                } catch (t) {
                    this.notifyError(e, new U(b.imageProcessFailure, t));
                }
            else this.notifyError(e, new U(b.imageProcessFailure));
        }
        resetRecognizers(e) {
            if (null !== this.nativeRecognizerRunner)
                try {
                    this.nativeRecognizerRunner.resetRecognizers(e.hardReset), this.notifySuccess(e);
                } catch (t) {
                    this.notifyError(e, new U(b.imageProcessFailure, t));
                }
            else this.notifyError(e, new U(b.imageProcessFailure));
        }
        setDetectionOnly(e) {
            if (null !== this.nativeRecognizerRunner)
                try {
                    this.nativeRecognizerRunner.setDetectionOnlyMode(e.detectionOnlyMode), this.notifySuccess(e);
                } catch (t) {
                    this.notifyError(e, new U(b.imageProcessFailure, t));
                }
            else this.notifyError(e, new U(b.imageProcessFailure));
        }
        setCameraPreviewMirrored(e) {
            if (null !== this.nativeRecognizerRunner)
                try {
                    this.nativeRecognizerRunner.setCameraPreviewMirrored(e.cameraPreviewMirrored), this.notifySuccess(e);
                } catch (t) {
                    this.notifyError(e, new U(b.imageProcessFailure, t));
                }
            else this.notifyError(e, new U(b.imageProcessFailure));
        }
        setupMetadataCallbacks(e) {
            e.onDebugText
                ? (this.metadataCallbacks.onDebugText = (e) => {
                      const t = new L(i.onDebugText, [e]);
                      this.context.postMessage(t);
                  })
                : delete this.metadataCallbacks.onDebugText,
                e.onDetectionFailed
                    ? (this.metadataCallbacks.onDetectionFailed = () => {
                          const e = new L(i.onDetectionFailed, []);
                          this.context.postMessage(e);
                      })
                    : delete this.metadataCallbacks.onDetectionFailed,
                e.onPointsDetection
                    ? (this.metadataCallbacks.onPointsDetection = (e) => {
                          const t = new L(i.onPointsDetection, [e]);
                          this.context.postMessage(t);
                      })
                    : delete this.metadataCallbacks.onPointsDetection,
                e.onQuadDetection
                    ? (this.metadataCallbacks.onQuadDetection = (e) => {
                          const t = new L(i.onQuadDetection, [e]);
                          this.context.postMessage(t);
                      })
                    : delete this.metadataCallbacks.onQuadDetection,
                e.onFirstSideResult
                    ? (this.metadataCallbacks.onFirstSideResult = () => {
                          const e = new L(i.onFirstSideResult, []);
                          this.context.postMessage(e);
                      })
                    : delete this.metadataCallbacks.onFirstSideResult,
                e.onGlare
                    ? (this.metadataCallbacks.onGlare = (e) => {
                          const t = new L(i.onGlare, [e]);
                          this.context.postMessage(t);
                      })
                    : delete this.metadataCallbacks.onGlare;
        }
        registerMetadataCallbacks(e) {
            if (null !== this.nativeRecognizerRunner) {
                this.setupMetadataCallbacks(e.registeredMetadataCallbacks);
                try {
                    this.nativeRecognizerRunner.setJSDelegate(this.metadataCallbacks), this.notifySuccess(e);
                } catch (t) {
                    this.notifyError(e, new U(b.imageProcessFailure, t));
                }
            } else this.notifyError(e, new U(b.imageProcessFailure));
        }
        registerClearTimeoutCallback(e) {
            if (null !== this.nativeRecognizerRunner) {
                this.clearTimeoutCallback = e.callbackNonEmpty
                    ? {
                          onClearTimeout: () => {
                              const e = new L(i.clearTimeoutCallback, []);
                              this.context.postMessage(e);
                          },
                      }
                    : null;
                try {
                    this.nativeRecognizerRunner.setClearTimeoutCallback(this.clearTimeoutCallback), this.notifySuccess(e);
                } catch (t) {
                    this.notifyError(e, new U(b.imageProcessFailure, t));
                }
            } else this.notifyError(e, new U(b.imageProcessFailure));
        }
        processGetProductIntegrationInfo(e) {
            if (null !== this.wasmModule)
                try {
                    const t = this.wasmModule.getActiveLicenseTokenInfo(),
                        s = { userId: e.userId, licenseId: t.licenseId, licensee: t.licensee, productName: t.sdkName, productVersion: t.sdkVersion, platform: "Browser", device: self.navigator.userAgent, packageName: t.packageName };
                    this.context.postMessage(new D(e.messageID, s));
                } catch (t) {
                    this.notifyError(e, new U(b.objectInvokeFailure, t));
                }
            else this.notifyError(e, new U(b.wasmInitMissing));
        }
    })();
})();
