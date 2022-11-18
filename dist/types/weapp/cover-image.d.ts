/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CoverImage {
  /**
   * 图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。
   */
  src?: string;
  /**
   * 格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；
   */
  "referrer-policy"?: "origin" | "no-referrer";
  /**
   * 图片加载成功时触发
   */
  bindLoad?: () => void;
  /**
   * 图片加载失败时触发
   */
  bindError?: () => void;
}