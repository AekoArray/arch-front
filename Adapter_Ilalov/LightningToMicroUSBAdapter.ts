import {Android} from "./Android";
import {IPhone} from "./IPhone";

export class LightningToMicroUSBAdapter implements Android {
    // Class iPhoneImpl does not have a useMicroUSB, so we can create an adapter
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    public useMicroUSB() {
        console.log("Want to use micro USB, converting to Lightning")
        //calls the method useLightning instead
        this.iphoneDevice.useLightning();
    }
}