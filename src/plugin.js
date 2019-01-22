import { Authentication } from './authentication';

export default {
    install (Vue, config) {
        Vue.prototype.$authentication = new Authentication(config);
    }
}