/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Text {
  /**
   * 是否可选。
   */
  selectable?: boolean;
  /**
   * 以何种方式显示连续空格。
   */
  space?: "nbsp" | "ensp" | "emsp";
  /**
   * 是否解码。为 true 时表示对文本内容进行解码，可解析的 HTML 实体字符有：&nbsp;&lt;&gt;&amp;&apos;&ensp;&emsp;。
   */
  decode?: boolean;
  /**
   * 多行省略，值须大于等于 1，表现同 css 的 -webkit-line-clamp 属性一致。
   */
  "number-of-lines"?: number;
}
