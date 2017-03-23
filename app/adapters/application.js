import ENV from 'finalproject_yp/config/environment';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
});
