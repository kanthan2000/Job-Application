	import * as React from 'react';
	import PropTypes from 'prop-types';
	import Tabs from '@mui/material/Tabs';
	import Tab from '@mui/material/Tab';
	import Typography from '@mui/material/Typography';
	import Box from '@mui/material/Box';
	import Personal from './Personal';
	// import Personal1 from "./Personal1";
	import Navbar from '../../admin/Navbar/navbar';
	import "./Navtab.css"

	function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
	<div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other} >
		{value === index && (
		<Box sx={{ p: 3 }}>
			<>{children}</>
		</Box>
		)}
	</div>
	);
	}

	TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	};

	function a11yProps(index) {
	return {
	id: `simple-tab-${index}`,
	'aria-controls': `simple-tabpanel-${index}`,
	};
	}

	export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
	setValue(newValue);
	};

	return (
	<>
	<Navbar>
		<div className='main--box'>
			<Box sx={{ width: '100%' }}>
				<Box sx={{}}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="CV Parses" {...a11yProps(0)} />
						<Tab label="Interview" {...a11yProps(1)} />
					</Tabs>
				</Box>

				<TabPanel value={value} index={0}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Personal /> 
					</Tabs>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
			</Box>
		</div>
	</Navbar>
	</>
	);
	}
