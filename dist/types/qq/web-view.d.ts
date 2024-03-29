/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface WebView {
  /**
   * webview 指向网页的链接。网页需登录QQ 小程序管理后台配置业务域名。
   */
  src?: string;
  /**
   * 网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }，data 是多次 postMessage 的参数组成的数组
   */
  bindMessage?: () => void;
  /**
   * 网页加载成功时候触发此事件。e.detail = { src }
   */
  bindLoad?: () => void;
  /**
   * 网页加载失败的时候触发此事件。e.detail = { src }
   */
  bindError?: () => void;
}
