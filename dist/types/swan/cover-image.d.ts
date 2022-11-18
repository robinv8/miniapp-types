/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CoverImage {
  /**
   * 图标路径，支持临时路径、网络地址。支持 JPG、PNG、BMP、GIF（基础库3.420.5开始支持） 格式
   */
  src: string;
  /**
   * 设置与容器顶部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 top 值，该属性优先级高于 fixed-bottom，CSS 设置的 position、top、bottom 值
   */
  "fixed-top"?: number;
  /**
   * 设置与容器右侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 right 值，该属性优先级高于 CSS 设置的 position、left、right 值
   */
  "fixed-right"?: number;
  /**
   * 设置与容器底部的固定距离，效果相当于在 CSS 中设置 position: fixed 和 bottom 值，该属性优先级高于 CSS 设置的 position、top、bottom 值
   */
  "fixed-bottom"?: number;
  /**
   * 设置与容器左侧的固定距离，效果相当于在 CSS 中设置 position: fixed 和 left 值，该属性优先级高于 fixed-right，CSS 设置的 position、left、right 值
   */
  "fixed-left"?: number;
  /**
   * 图片加载成功时触发
   */
  bindLoad?: () => void;
  /**
   * 图片加载失败时触发
   */
  bindError?: () => void;
}