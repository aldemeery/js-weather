import Api from './Api';
import Ui from './Ui';

export default class App {
  constructor() {
    this.unit = 'imperial';
    this.location = 'london,uk';
  }

  async run() {
    this.registerEventListeners();
    this.getWeather();
  }

  async getWeather() {
    try {
      const weather = await Api.getWeather(this.location, this.unit);
      Ui.update(weather);
    } catch (error) {
      alert('Location not found!');
    }
  }

  registerEventListeners() {
    const app = this;
    Ui.form().addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const fd = new FormData(form);

      form.reset();
      app.location = fd.get('search');
      app.getWeather();
    });

    Ui.ctemp().addEventListener('click', e => {
      e.preventDefault();
      if (app.unit !== 'metric') {
        app.unit = 'metric';
        app.getWeather();
        Ui.disable(e.target);
      }
    });

    Ui.ftemp().addEventListener('click', e => {
      e.preventDefault();
      if (app.unit !== 'imperial') {
        app.unit = 'imperial';
        app.getWeather();
        Ui.disable(e.target);
      }
    });
  }
}
