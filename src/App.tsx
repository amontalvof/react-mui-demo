import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MuiPicker from './components/MuiPicker';
// import MuiLoadingButton from './components/MuiLoadingButton';
// import MuiSkeleton from './components/MuiSkeleton';
// import MuiProgress from './components/MuiProgress';
// import MuiDialog from './components/MuiDialog';
// import MuiSnackbar from './components/MuiSnackbar';
// import MuiAlert from './components/MuiAlert';
// import MuiTable from './components/MuiTable';
// import MuiTooltip from './components/MuiTooltip';
// import MuiChip from './components/MuiChip';
// import MuiList from './components/MuiList';
// import MuiBadge from './components/MuiBadge';
// import MuiAvatar from './components/MuiAvatar';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiDrawer from './components/MuiDrawer';
// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiLink from './components/MuiLink';
// import MuiMenu from './components/MuiMenu';
// import MuiNavbar from './components/MuiNavbar';
// import MuiImageList from './components/MuiImageList';
// import MuiAccordion from './components/MuiAccordion';
// import MuiCard from './components/MuiCard';
// import MuiPaper from './components/MuiPaper';
// import MuiGrid from './components/MuiGrid';
// import MuiStack from './components/MuiStack';
// import MuiBox from './components/MuiBox';
// import MuiAutocomplete from './components/MuiAutocomplete';
// import MuiRating from './components/MuiRating';
// import MuiSwitch from './components/MuiSwitch';
// import MuiCheckbox from './components/MuiCheckbox';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiSelect from './components/MuiSelect';
// import MuiTextField from './components/MuiTextField';
// import MuiButton from './components/MuiButton';
// import MuiTypography from './components/MuiTypography';

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="App">
                <MuiPicker />
            </div>
        </LocalizationProvider>
    );
}

export default App;
