/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface OpenData {
  /**
   * 开放数据类型
   */
  type?:
    | "userNickName"
    | "userAvatarUrl"
    | "userGender"
    | "userCity"
    | "userProvince"
    | "userCountry"
    | "userLanguage"
    | "userCloudStorage"
    | "friendCloudStorage"
    | "groupCloudStorage";
  /**
   * 当 type="user*" 时生效，以哪种语言展示 userInfo，有效值有：en, zh_CN, zh_TW
   */
  lang?: string;
  /**
   * 当 type=groupCloudStorage 时有效，群分享对应的 shareTicket
   */
  "share-ticket"?: string;
  /**
   * 当 type=*CloudStorage 时有效，指定要拉取的 key 列表
   */
  "key-list"?: string;
  /**
   * 当 type=*CloudStorage 时有效，从主域透传给开放数据域的数据，会自动注入到自定义开放数据域组件的 properties 中
   */
  "component-data"?: string;
  /**
   * 当 type=*CloudStorage 时有效,指定使用哪个自定义开放数据域组件来渲染开放数据,具体说明见下方
   */
  "generic:simple-component"?: string;
  /**
   * 当 type=*CloudStorage 时有效,开放数据请求或定向分享失败时触发，event.detail = {errMsg: "getGroupCloudStorage:fail no data"}
   */
  bindError?: string;
}
