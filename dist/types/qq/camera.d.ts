/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Camera {
  /**
   * 有效值为 normal, scanCode
   */
  mode?: string;
  /**
   * 前置或后置，值为front, back
   */
  "device-position"?: string;
  /**
   * 闪光灯，值为auto, on, off
   */
  flash?: string;
  /**
   * 摄像头在非正常终止时触发，如退出后台等情况
   */
  bindStop?: () => void;
  /**
   * 用户不允许使用摄像头时触发
   */
  bindError?: () => void;
  /**
   * 在扫码识别成功时触发，仅在 mode="scanCode" 时生效
   */
  bindScanCode?: () => void;
}
