import './fonts.css';
import './index.scss';

import $ from 'jquery';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faBacon } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap';

library.add(faBacon);
dom.watch();

const body = $('body');

const p = $("<p></p>").text("Inserindo Texto").css('color', 'red');

body.append(p);