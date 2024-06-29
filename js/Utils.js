
class Utils {
  static formatNumberWithZero(n){
    return (n >= 10) ? n : `0${n}`;
  }

  static formatInMinSec(n){
    const minutes = Math.floor(n / 60);
    const seconds = n - (minutes * 60);
    return `${Utils.formatNumberWithZero(minutes)}:${Utils.formatNumberWithZero(seconds)}`;
  }

  static hide(...elements){
    elements.forEach(element => element.classList.add("hide"));
  }

  static show(...elements){
    elements.forEach(element => element.classList.remove("hide"));
  }

  static remove(...elements){
    elements.forEach(element => element.remove());
  }

  static Audio(src){
    const audio = new Audio(src)
    return audio;
  }
}

export default Utils;