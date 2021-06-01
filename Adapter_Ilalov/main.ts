import {iPhoneImpl} from "./iPhoneImpl";
import {LightningToMicroUSBAdapter} from "./LightningToMicroUSBAdapter";

//functional test
let iphone7 = new iPhoneImpl();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone7);

chargeAdapter.useMicroUSB()