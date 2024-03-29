/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Ad {
  /**
   * 小程序应用 ID
   */
  appid: string;
  /**
   * 小程序广告位 ID
   */
  apid: string;
  /**
   * 广告类型：banner、feed ，需和百青藤平台上的代码位类型相匹配
   */
  type?: string;
  /**
   * 更改该属性，可以触发广告刷新;单位毫秒
   */
  updatetime?: string;
  /**
   * 广告组件加载失败时触发
   */
  bindError?: () => void;
  /**
   * 广告组件加载完成触发
   */
  bindLoad?: () => void;
  /**
   * 关闭广告组件时触发
   */
  bindClose?: () => void;
  /**
   * 贴片类型广告播放期间触发
   */
  bindStatus?: () => void;
}
