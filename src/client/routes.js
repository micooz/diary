import {HomeController} from './home/home';
import {DiaryController} from './diary/diary';

export default {

  '/': HomeController,

  '/diary/': HomeController,

  '/diary/index.html': HomeController,

  '/diary/-/': DiaryController,

  // for development

  '/-/': DiaryController

};
