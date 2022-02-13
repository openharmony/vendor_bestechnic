import router from '@system.router';
import devicemanager from '@system.devicemanager';

const TAG = "DeviceManagerUI:";
export default {
    data: {
        status: '',
        subscribeId : 0,
        pinToken: 0,
        statusInfo: {
            deviceId: "",
            deviceName: '',
            deviceTypeId: 0
        },
        Devcinfo:{
            deviceId:'',
            pinTone:''
        },
        StatInfo: {
            deviceName: "",
            appName: '',
            appIcon: null,
            pinCode: '',
            pinToken: '0'
        },
        pinNumb: 0,
        count: 0,
        pin: ['','','','','',''],

    },
    onShow() {
        this.log('createDeviceManager')
        this.status = 'start'
        devicemanager.createDeviceManager('com.ohos.devicemanagerui')
        devicemanager.on('deviceFound', (data0,data1) => {
            if (data1 == null) {
                this.log("deviceFound error data=null")
                return;
            }
            var FondData = data1
            this.log("deviceFound:" + JSON.stringify(data0));
            this.log("deviceFound:" + JSON.stringify(FondData));
            this.statusInfo = {
                deviceId: data1.deviceId,
                deviceName: data1.deviceName,
                deviceTypeId: data1.deviceTypeId
            }
        });
        devicemanager.on('discoverFail', (data,data1) => {
            this.log('on discoverFail in')
            this.log("discoverFail on:" + JSON.stringify(data));
            this.log("discoverFail on:" + JSON.stringify(data1));
        });
    },
    startDevice(){
        //开始设备发现
        console.info("Start Device discovery");
        this.subscribeId = Math.floor(Math.random() * 10000 + 1000)
        this.log('Start subscribeId'+ JSON.stringify(this.subscribeId))
        var info = {
            "subscribeId": this.subscribeId,
            "mode": 0xAA,
            "medium": 0,
            "freq": 2,
            "isSameAccount": false,
            "isWakeRemote": false,
            "capability": 0
        };
        devicemanager.startDeviceDiscovery(info);
    },
    stopDevice(info){
        console.log(this.subscribeId);
        devicemanager.stopDeviceDiscovery(this.subscribeId);

    },
    AuthenticateDevice(){
        console.log('AuthenticateDevice' + this.statusInfo.deviceId);
        console.log('AuthenticateDevice' + this.statusInfo.deviceName);
        console.log('AuthenticateDevice' + this.statusInfo.deviceTypeId);

        console.info("start AuthenticateDevice")

        let extraInfo = {
            targetPkgName: 'test',
            appName: "Nwename",
            appDescription: "testAPP",
            business: '0',
            displayOwner: 0
        };
        let AuthParam = {
            authType: 1,
            appIcon:null,
            appThumbnail:null,
            extraInfo: extraInfo
        };
        console.info("deviceInfo:Assignment")
        let _this = this;
        devicemanager.authenticateDevice(this.statusInfo, AuthParam, {
            success(data0,data1){
                console.log("in authenticateDevice success:")
                console.log(JSON.stringify(data0))
                console.log(JSON.stringify(data1))
                _this.Devcinfo ={
                    deviceId:data0.deviceId,
                    pinTone:data1.pinTone
                }
                console.log('this.Devcinfo.deviceId'+ this.Devcinfo.deviceId);
                console.log('this.Devcinfo.pinTone'+ this.Devcinfo.pinTone);
            },
            fail(err0,err1) {
                console.log("in authenticateDevice fail:")
                console.log(JSON.stringify(err0))
                console.log(JSON.stringify(err1));
            }
        });
    },
    joinAuthOk() {
        this.joinPin()
        this.initStatue()
        devicemanager.setUserOperation(0)
    },
    /**
     * Enter a number with the keyboard
     * @param s
     * @return
     */
    mainInputPin(s) {
        if (this.pinNumb == 6) return
        if (this.pinNumb < 6) {
            this.pin[this.pinNumb] = s
            ++this.pinNumb
        }
        if (this.pinNumb == 6) {
            console.log("verifyAuthInfo ok")
            this.verifyAuthInfo(this.pin.join(''))
        }
    },
    /**
     * verify auth info, such as pin code.
     * @param pinCode
     * @return
     *///验证认证信息pin码

    verifyAuthInfo(pinCode) {
  /*      this.info("in verifyAuthInfo+:pinTone",this.Devcinfo)*/
       /* this.log("verifyAuthInfo :" + JSON.stringify(this.pinCode))*/
        this.log("in verifyAuthInfo:"+pinCode)

        this.log("verifyAuthInfo :" + JSON.stringify(this.Devcinfo))
        devicemanager.verifyAuthInfo({
            "authType": 1,
            "token": this.Devcinfo.pinTone,
            "extraInfo": {
            "pinCode": +pinCode
            }
        }, (data) => {
            this.log("verifyAuthInfo result:" + JSON.stringify(data))
            router.back()
        });
    },
    /**
     * Keyboard delete number
     */
    mainInputPinBack() {
        if (this.pinNumb > 0) {
            --this.pinNumb
            this.pin[this.pinNumb] = ''
        }
    },
    mainInputPinCancel() {
        this.setUserOperation(4)
        router.replace({
            uri: 'pages/index/index'
        });
    },
    /**
     * Get authentication param
     *///得到验证参数
    initStatue() {
        this.log('initStatue')
        const data = devicemanager.getAuthenticationParam()
        // 参数值转换为 JSON 字符串写入data
        this.log('getAuthenticationParam:' + JSON.stringify(data))
        // Authentication type, 1 for pin code.
        //code ==1,pin码
        if (data && data.authType == 1) {
            console.log( data.extraInfo.pincode);
            this.StatInfo = {
                deviceName: data.extraInfo.packageName,
                appName: data.extraInfo.appName,
                appIcon: null,
                pinCode: data.extraInfo.pincode+'' ,
                pinToken: data.extraInfo.pinToken
            }
        }
    },
    MymainInputPin(){
        this.status ='main-pin'
    },

    joinPin() {
        this.status = 'join-pin'
    },
    back() {
        router.replace({
            uri: 'pages/index/index'
        });
    },
    log(m) {
        console.info(TAG + m);
    }
}

