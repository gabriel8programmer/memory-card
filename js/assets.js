
class Assets {
  static #option = {
    tecnology: {
      background: ``,
      icon: `<i class="fa-solid fa-code"></i>`,
      imgs: [
        `<img src="../img/tecs/html.png" class="img">`,
        `<img src="../img/tecs/css.png" class="img">`,
        `<img src="../img/tecs/js.png" class="img">`,
        `<img src="../img/tecs/ts.png" class="img">`,
        `<img src="../img/tecs/bootstrap.png" class="img">`,
        `<img src="../img/tecs/sass.png" class="img">`,
        `<img src="../img/tecs/react.png" class="img">`,
        `<img src="../img/tecs/php.png" class="img">`,
        `<img src="../img/tecs/node.png" class="img">`,
        `<img src="../img/tecs/mongodb.png" class="img">`,
      ]
    },
    country: {
      background: ``,
      icon: `<i class="fa-solid fa-flag"></i>`,
      imgs: [
        `<img src="../img/countries/brazil.png" class="img">`,
        `<img src="../img/countries/argentina.png" class="img">`,
        `<img src="../img/countries/us.png" class="img">`,
        `<img src="../img/countries/england.png" class="img">`,
        `<img src="../img/countries/uk.png" class="img">`,
        `<img src="../img/countries/japan.png" class="img">`,
        `<img src="../img/countries/spain.png" class="img">`,
        `<img src="../img/countries/israel.png" class="img">`,
        `<img src="../img/countries/france.png" class="img">`,
        `<img src="../img/countries/portugal.png" class="img">`,
      ]
    }
  }

  static getAssets(key){
    return Assets.#option[key];
  }
}

export default Assets;