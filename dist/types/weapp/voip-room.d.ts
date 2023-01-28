/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface VoipRoom {
  /**
   * 对话窗口类型
   */
  mode: "camera" | "video";
  /**
   * 摄像头方向，仅在 mode 为 camera 时有效
   */
  "device-position": "front" | "back";
  /**
   * 画面与容器比例不一致时，画面的表现形式
   */
  "object-fit": "fill" | "contain" | "cover";
  /**
   * 进入房间用户的 openid
   */
  openId?: string;
  /**
   * 创建对话窗口失败时触发
   */
  bindError?: () => void;
}
