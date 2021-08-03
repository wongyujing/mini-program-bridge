import { loadSdk, getSdkLoadStatus } from './sdk';

enum ClientType {
  Wechat = 'wechat',
  Alipay = 'alipay',
}

type ClientTypeSet = ClientType.Wechat | ClientType.Alipay | undefined;

const getEnvVariable = () => {
  if (!getSdkLoadStatus()) throw new Error('You need to call function of `MPBridge.init()` before use this API')
  if (isAliPay()) return my;
  if (isWechat()) return wx.miniProgram;
  throw new Error('Your application is not run in Wechat mini program or Alipay mini program');
}

/**
 * Is in Alipay client
 */
export const isAliPay = (): boolean => window.navigator.userAgent.indexOf('AlipayClient') > -1;

/**
 * Is in Wechat client
 */
export const isWechat = (): boolean => window.__wxjs_environment === 'miniprogram';

/**
 * Get client type
 */
export const getClientType = (): ClientTypeSet => {
  if (isAliPay()) return ClientType.Alipay;
  if (isWechat()) return ClientType.Wechat;
}

export const init = async (): Promise<void> => loadSdk(getClientType());

export default getEnvVariable();