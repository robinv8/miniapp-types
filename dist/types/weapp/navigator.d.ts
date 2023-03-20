/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Navigator {
  /**
   * 在哪个目标上发生跳转，默认当前小程序
   */
  target?: "self" | "miniProgram";
  /**
   * 当前小程序内的跳转链接
   */
  url?: string;
  /**
   * 跳转方式
   */
  "open-type"?: "navigate" | "redirect" | "switchTab" | "reLaunch" | "navigateBack" | "exit";
  /**
   * 当 open-type 为 'navigateBack' 时有效，表示回退的层数
   */
  delta?: number;
  /**
   * 当`target="miniProgram"`且`open-type="navigate"`时有效，要打开的小程序 appId
   */
  "app-id"?: string;
  /**
   * 当`target="miniProgram"`且`open-type="navigate"`时有效，打开的页面路径，如果为空则打开首页
   */
  path?: string;
  /**
   * 当`target="miniProgram"`且`open-type="navigate/navigateBack"`时有效，需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch()`，`App.onShow()` 中获取到这份数据。详情
   */
  "extra-data"?: {
    [k: string]: unknown;
  };
  /**
   * 当`target="miniProgram"`且`open-type="navigate"`时有效，要打开的小程序版本
   */
  version?: "develop" | "trial" | "release";
  /**
   * 当`target="miniProgram"`时有效，当传递该参数后，可以不传 app-id 和 path。链接可以通过【小程序菜单】->【复制链接】获取。
   */
  "short-link"?: string;
  /**
   * 指定点击时的样式类，当`hover-class="none"`时，没有点击态效果
   */
  "hover-class"?: string;
  /**
   * 指定是否阻止本节点的祖先节点出现点击态
   */
  "hover-stop-propagation"?: boolean;
  /**
   * 按住后多久出现点击态，单位毫秒
   */
  "hover-start-time"?: number;
  /**
   * 手指松开后点击态保留时间，单位毫秒
   */
  "hover-stay-time"?: number;
  /**
   * 当`target="miniProgram"`且`open-type="navigate/navigateBack"`时有效时有效，跳转小程序成功
   */
  bindSuccess?: string;
  /**
   * 当`target="miniProgram"`且`open-type="navigate/navigateBack"`时有效时有效，跳转小程序失败
   */
  bindFail?: string;
  /**
   * 当`target="miniProgram"`且`open-type="navigate/navigateBack"`时有效时有效，跳转小程序完成
   */
  bindComplete?: string;
}
