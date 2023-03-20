/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Audio {
  /**
   * audio 组件的唯一标识符
   */
  id?: string;
  /**
   * 要播放音频的资源地址
   */
  src?: string;
  /**
   * 是否循环播放
   */
  loop?: boolean;
  /**
   * 是否显示默认控件
   */
  controls?: boolean;
  /**
   * 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效
   */
  poster?: string;
  /**
   * 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效
   */
  name?: string;
  /**
   * 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效
   */
  author?: string;
  /**
   * 当发生错误时触发 error 事件，detail = {errMsg:MediaError.code}
   */
  bindError?: () => void;
  /**
   * 当开始/继续播放时触发play事件
   */
  bindPlay?: () => void;
  /**
   * 当暂停播放时触发 pause 事件
   */
  bindPause?: () => void;
  /**
   * 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}
   */
  bindTimeUpdate?: () => void;
  /**
   * 当播放到末尾时触发 ended 事件
   */
  bindEnded?: () => void;
}
