import packageJson from "../package.json";

export default class Package {
  static async process(message, callback) {
    setTimeout(() => {
      if (callback) {
        callback(message);
      }
    }, 1000);
  }
}
Package.version = packageJson.version;
