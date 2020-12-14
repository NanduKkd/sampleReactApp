import React from 'react';
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from './reducers'
import Routes from './routes/index.js'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/base.scss'

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fab,
	faFacebook,
	faTwitter,
	faVuejs,
	faReact,
	faHtml5,
	faGoogle,
	faInstagram,
	faPinterest,
	faYoutube,
	faDiscord,
	faSlack,
	faDribbble,
	faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
	far,
	faBell as faBellO,
	faSquare,
	faLifeRing,
	faCheckCircle,
	faTimesCircle,
	faDotCircle,
	faThumbsUp,
	faComments,
	faFolderOpen,
	faTrashAlt,
	faFileImage,
	faFileArchive,
	faCommentDots,
	faFolder,
	faKeyboard,
	faCalendarAlt,
	faEnvelope,
	faAddressCard,
	faMap,
	faObjectGroup,
	faImages,
	faUser,
	faLightbulb,
	faGem,
	faClock,
	faUserCircle,
	faQuestionCircle,
	faBuilding,
	faBell,
	faFileExcel,
	faFileAudio,
	faFileVideo,
	faFileWord,
	faFilePdf,
	faFileCode,
	faFileAlt,
	faEye,
	faChartBar
} from '@fortawesome/free-regular-svg-icons';
import {
	fas,
	faMapMarker,
	faAngleDoubleRight,
	faAngleDoubleLeft,
	faSmile,
	faHeart,
	faBatteryEmpty,
	faBatteryFull,
	faChevronRight,
	faSitemap,
	faPrint,
	faMapMarkedAlt,
	faTachometerAlt,
	faAlignCenter,
	faExternalLinkAlt,
	faShareSquare,
	faInfoCircle,
	faSync,
	faQuoteRight,
	faStarHalfAlt,
	faShapes,
	faCarBattery,
	faTable,
	faCubes,
	faPager,
	faCameraRetro,
	faBomb,
	faNetworkWired,
	faBusAlt,
	faBirthdayCake,
	faEyeDropper,
	faUnlockAlt,
	faDownload,
	faAward,
	faPlayCircle,
	faReply,
	faUpload,
	faBars,
	faEllipsisV,
	faSave,
	faSlidersH,
	faCaretRight,
	faChevronUp,
	faPlus,
	faLemon,
	faChevronLeft,
	faTimes,
	faChevronDown,
	faFilm,
	faSearch,
	faEllipsisH,
	faCog,
	faArrowsAltH,
	faPlusCircle,
	faAngleRight,
	faAngleUp,
	faAngleLeft,
	faAngleDown,
	faArrowUp,
	faArrowDown,
	faArrowRight,
	faArrowLeft,
	faStar,
	faSignOutAlt,
	faLink,
	faThList,
	faMoneyBillWave,
	faCoins,
	faStore,
	faStoreAlt,
	faBed,
	faBath,
	faArrowsAlt
} from '@fortawesome/free-solid-svg-icons';
library.add(
	far,
	faArrowsAlt,
	faBellO,
	faSquare,
	faLifeRing,
	faCheckCircle,
	faTimesCircle,
	faDotCircle,
	faThumbsUp,
	faComments,
	faFolderOpen,
	faTrashAlt,
	faFileImage,
	faFileArchive,
	faCommentDots,
	faFolder,
	faKeyboard,
	faCalendarAlt,
	faEnvelope,
	faAddressCard,
	faMap,
	faObjectGroup,
	faImages,
	faUser,
	faLightbulb,
	faGem,
	faClock,
	faUserCircle,
	faQuestionCircle,
	faBuilding,
	faBell,
	faFileExcel,
	faFileAudio,
	faFileVideo,
	faFileWord,
	faFilePdf,
	faFileCode,
	faFileAlt,
	faEye,
	faChartBar
);
library.add(
	fab,
	faFacebook,
	faTwitter,
	faVuejs,
	faReact,
	faHtml5,
	faGoogle,
	faInstagram,
	faPinterest,
	faYoutube,
	faDiscord,
	faSlack,
	faDribbble,
	faGithub
);
library.add(
	fas,
	faBed,
	faBath,
	faMapMarker,
	faMapMarkedAlt,
	faStore,
	faThList,
	faCoins,
	faAngleDoubleRight,
	faAngleDoubleLeft,
	faSmile,
	faHeart,
	faBatteryEmpty,
	faBatteryFull,
	faChevronRight,
	faSitemap,
	faPrint,
	faMapMarkedAlt,
	faTachometerAlt,
	faAlignCenter,
	faExternalLinkAlt,
	faShareSquare,
	faInfoCircle,
	faSync,
	faQuoteRight,
	faStarHalfAlt,
	faShapes,
	faCarBattery,
	faTable,
	faCubes,
	faPager,
	faCameraRetro,
	faBomb,
	faNetworkWired,
	faBusAlt,
	faBirthdayCake,
	faEyeDropper,
	faUnlockAlt,
	faDownload,
	faAward,
	faPlayCircle,
	faReply,
	faUpload,
	faBars,
	faEllipsisV,
	faSave,
	faSlidersH,
	faCaretRight,
	faChevronUp,
	faPlus,
	faLemon,
	faChevronLeft,
	faTimes,
	faChevronDown,
	faFilm,
	faSearch,
	faEllipsisH,
	faCog,
	faArrowsAltH,
	faPlusCircle,
	faAngleRight,
	faAngleUp,
	faAngleLeft,
	faAngleDown,
	faArrowUp,
	faArrowDown,
	faArrowRight,
	faArrowLeft,
	faStar,
	faSignOutAlt,
	faLink
);

const store = createStore(
	combineReducers({
		...reducers
	}),
	applyMiddleware(thunk),
)



export default () => {
	return (
		<Provider store={store}>
		<BrowserRouter basename="/">
			<Routes />
			</BrowserRouter>
		</Provider>
	)
}