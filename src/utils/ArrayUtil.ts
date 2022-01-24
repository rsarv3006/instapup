export class ArrayUtil {
  static isArrayWithLength(a: any): a is Array<any> {
    if (Array.isArray(a) && a.length) {
      return true;
    }
    return false;
  }
}
