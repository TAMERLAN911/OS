import * as os from 'os'
import { func } from './welcome.js';

console.log(os.hostname(), os.homedir(),os.type(),os.version())

func()