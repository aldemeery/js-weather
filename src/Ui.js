export default class Ui {
  static update(data) {
    document.body.classList = data.status;
    document.querySelector('.location').innerHTML = data.location;
    document.querySelector('.temp').innerHTML = Math.round(data.temp) + data.unit;
    document.querySelector('.icon').src = data.icon;
    document.querySelector('.min-max').innerHTML = `Min: ${Math.round(data.min)}${data.unit} / Max: ${Math.round(data.max)}${data.unit}`;
  }

  static form() {
    return document.getElementById('form');
  }

  static ctemp() {
    return document.getElementById('metric');
  }

  static ftemp() {
    return document.getElementById('imperial');
  }

  static disable(button) {
    Ui.ftemp().disabled = false;
    Ui.ctemp().disabled = false;
    button.disabled = true;
  }
}
