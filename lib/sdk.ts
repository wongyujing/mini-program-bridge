import { isWechat } from './index';

let sdkLoadStatus: boolean = false;
const wechatSdkUrl = 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js';
const alipaySdkUrl = 'https://appx/web-view.min.js';

export const loadSdk = (url?: string): Promise<void> => (
  new Promise((resolve, reject) => {
    if (!url) return reject();
    const script = document.createElement('script');
    script.onload = () => {
      sdkLoadStatus = true;
      resolve()
    };
    script.onerror = () => reject();
    script.src = isWechat() ? wechatSdkUrl : alipaySdkUrl;
  })
)

export const getSdkLoadStatus = (): boolean => sdkLoadStatus;