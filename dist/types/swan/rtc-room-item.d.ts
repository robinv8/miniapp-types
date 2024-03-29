/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RtcRoomItem {
  /**
   * rtc-room-item 组件的唯一标识符
   */
  id?: string;
  /**
   * 指定 item 展示本地 / 远端画面，有效值：local、remote ，不可动态变更
   */
  type: string;
  /**
   * item 展示画面的用户 id
   */
  "user-id": number;
}
