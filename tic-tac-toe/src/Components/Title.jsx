import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';

function GenerateTitle({title, variant}){

	

	return (
		<Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', p: '5vh'}}>
			<Typography variant={variant}>{title}</Typography>
		</Box>
	)
}

export default GenerateTitle;