import plugin, { CorpButton, CorpSwitch } from '@corp/core';
import '@corp/core/dist/style.css';
import Vue from 'vue';

Vue.use(plugin, { authConfig: process.env.authConfig });