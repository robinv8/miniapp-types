/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CoverImage {
  /**
   * 图标路径，支持临时路径、网络地址、云文件ID。暂不支持base64格式。
   */
  src?: string;
  /**
   * 无障碍访问，（角色）标识元素的作用
   */
  "aria-role"?: string;
  /**
   * 无障碍访问，（属性）元素的额外描述
   */
  "aria-label"?: string;
  /**
   * 图片加载成功时触发
   */
  bindLoad?: () => void;
  /**
   * 图片加载失败时触发
   */
  bindError?: () => void;
}
