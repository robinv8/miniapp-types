export interface Attribute {
    name,
    type,
    description?,
    defaultValue?: string | number | boolean,
    required?,
}
export interface ComponentInfo {
    name,
    url
}