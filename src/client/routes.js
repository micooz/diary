import {HomeController} from './home/home';
import {DiaryController} from './diary/diary';

export default {

  '/': HomeController,

  '/-/': DiaryController

};
