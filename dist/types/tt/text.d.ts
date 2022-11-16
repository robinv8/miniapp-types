/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Text {
  /**
   * 是否可以选中文字
   */
  selectable?: boolean;
  /**
   * 是否显示连续的空格，可以取值enspemspnbsp，详见 space 的合法值
   */
  space?: "ensp" | "emsp" | "nbsp";
  /**
   * 是否转义
   */
  decode?: boolean;
}
