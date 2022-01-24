export class StringUtil {
  static isStringWithLength(s: any): s is string {
    if (typeof s === 'string' && s.length) {
      return true;
    }
    return false;
  }
}
