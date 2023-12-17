import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt2-отчёт-об-оценке-l');
  this.route('i-i-s-proekt2-отчёт-об-оценке-e',
  { path: 'i-i-s-proekt2-отчёт-об-оценке-e/:id' });
  this.route('i-i-s-proekt2-отчёт-об-оценке-e.new',
  { path: 'i-i-s-proekt2-отчёт-об-оценке-e/new' });
  this.route('i-i-s-proekt2-оценка-l');
  this.route('i-i-s-proekt2-оценка-e',
  { path: 'i-i-s-proekt2-оценка-e/:id' });
  this.route('i-i-s-proekt2-оценка-e.new',
  { path: 'i-i-s-proekt2-оценка-e/new' });
  this.route('i-i-s-proekt2-сотрудники-l');
  this.route('i-i-s-proekt2-сотрудники-e',
  { path: 'i-i-s-proekt2-сотрудники-e/:id' });
  this.route('i-i-s-proekt2-сотрудники-e.new',
  { path: 'i-i-s-proekt2-сотрудники-e/new' });
  this.route('i-i-s-proekt2-увольнение-l');
  this.route('i-i-s-proekt2-увольнение-e',
  { path: 'i-i-s-proekt2-увольнение-e/:id' });
  this.route('i-i-s-proekt2-увольнение-e.new',
  { path: 'i-i-s-proekt2-увольнение-e/new' });
});

export default Router;
