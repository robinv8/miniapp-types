/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SubscribeMessage {
  /**
   * 组件 ID。可查看 调用订阅组件 获取。
   */
  "template-id": string;
  /**
   * 订阅完成后触发。
   */
  onComplete?: () => void;
}
