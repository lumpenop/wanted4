export const SET_ID = "SET_ID";
export const SET_DEVICE_NAME = "SET_DEVICE_NAME"

export function setId(id) {
    return {
        type: SET_ID,
        id: id
    };
}

export function setDeviceName(deviceName) {
    return {
        type: SET_DEVICE_NAME,
        deviceName: deviceName
    };
}